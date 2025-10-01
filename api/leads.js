import { createClient } from '@supabase/supabase-js';

// Rate limiting - armazenar em memória (para produção, usar Redis)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hora
const RATE_LIMIT_MAX_REQUESTS = 10; // 10 requests por IP por hora

// Configuração do Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

console.log('Variáveis de ambiente carregadas:');
console.log('SUPABASE_URL:', supabaseUrl ? 'Configurada' : 'Não configurada');
console.log('VITE_SUPABASE_ANON_KEY:', supabaseAnonKey ? 'Configurada' : 'Não configurada');

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase configuration');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  db: {
    schema: 'campaign'
  }
});

// Validação de email
const validateEmail = (email) => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email.trim().toLowerCase());
};

// Validação de telefone E.164
const validatePhoneE164 = (phone) => {
  const phoneRegex = /^\+[1-9]\d{1,14}$/;
  return phoneRegex.test(phone);
};

// Rate limiting
const checkRateLimit = (ip) => {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW;
  
  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, []);
  }
  
  const requests = rateLimitMap.get(ip);
  
  // Remove requests antigas
  const validRequests = requests.filter(timestamp => timestamp > windowStart);
  rateLimitMap.set(ip, validRequests);
  
  if (validRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }
  
  // Adiciona request atual
  validRequests.push(now);
  rateLimitMap.set(ip, validRequests);
  
  return true;
};

// Detectar bot básico via honeypot
const isBot = (body) => {
  return body.website && body.website.trim() !== '';
};

// Obter IP do cliente
const getClientIP = (req) => {
  return req.headers['x-forwarded-for']?.split(',')[0] || 
         req.headers['x-real-ip'] || 
         req.connection?.remoteAddress || 
         'unknown';
};

// Validar device
const validateDevice = (device) => {
  return ['mobile', 'desktop', 'tablet'].includes(device);
};

// Validar language
const validateLanguage = (lang) => {
  return ['PT', 'EN', 'ES'].includes(lang.toUpperCase());
};

export default async function handler(req, res) {
  // Apenas POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const clientIP = getClientIP(req);
    
    // Rate limiting
    if (!checkRateLimit(clientIP)) {
      return res.status(429).json({ 
        error: 'Too many requests. Please try again later.' 
      });
    }

    const {
      source,
      best_contact,
      email,
      phone_e164,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      fbclid,
      gclid,
      city_hint,
      lang,
      device,
      page,
      website // honeypot
    } = req.body;

    // Verificação anti-bot
    if (isBot(req.body)) {
      return res.status(400).json({ error: 'Invalid request' });
    }

    // Validações obrigatórias
    if (!source || !best_contact || !lang || !device || !page) {
      return res.status(400).json({ 
        error: 'Missing required fields' 
      });
    }

    // Validar language
    if (!validateLanguage(lang)) {
      return res.status(400).json({
        error: 'Invalid language. Must be PT, EN, or ES'
      });
    }

    // Validar device
    if (!validateDevice(device)) {
      return res.status(400).json({
        error: 'Invalid device. Must be mobile, desktop, or tablet'
      });
    }

    if (!['email', 'whatsapp'].includes(best_contact)) {
      return res.status(400).json({ 
        error: 'Invalid contact type. Must be email or whatsapp' 
      });
    }

    // Validação condicional dos campos de contato
    let validatedEmail = null;
    let validatedPhone = null;

    if (best_contact === 'email') {
      if (!email || !validateEmail(email)) {
        return res.status(400).json({ 
          error: 'Valid email is required when best_contact is email' 
        });
      }
      validatedEmail = email.trim().toLowerCase();
    } else if (best_contact === 'whatsapp') {
      if (!phone_e164 || !validatePhoneE164(phone_e164)) {
        return res.status(400).json({ 
          error: 'Valid phone number in E.164 format is required when best_contact is whatsapp' 
        });
      }
      validatedPhone = phone_e164;
    }

    // Preparar dados para inserção
    const leadData = {
      // Campos obrigatórios
      email: validatedEmail,
      phone_e164: validatedPhone,
      language: lang.toUpperCase(),
      page,
      best_contact,
      device,
      source,
      
      // Campos opcionais com valores padrão
      section: 'lead_form',
      position: 'hero',
      campaign: utm_campaign || 'direct',
      
      // UTMs
      utm_source: utm_source || null,
      utm_medium: utm_medium || null,
      utm_campaign: utm_campaign || null,
      utm_content: utm_content || null,
      
      // Campos de CTA
      cta_variant: 'primary',
      cta_size: 'md',
      button_text: best_contact === 'email' ? 'Quero ganhar mais dirigindo' : 'Quero ganhar mais dirigindo (WhatsApp)',
      
      // Dados técnicos
      user_agent: req.headers['user-agent'] || null,
      ip_address: clientIP,
      referrer: req.headers.referer || null,
      
      // Dados adicionais
      fbclid: fbclid || null,
      gclid: gclid || null,
      city_hint: city_hint || null,
      
      // Status padrão
      status: 'new'
    };

    // Inserir no Supabase
    const { data, error } = await supabase
      .from('driver_email_leads')
      .insert(leadData);

    if (error) {
      console.error('Supabase error:', error);
      
      // Se for erro de telefone duplicado, retornar sucesso silenciosamente
      if (error.code === '23505' && error.message.includes('idx_driver_leads_phone_unique')) {
        console.log('Telefone já cadastrado, retornando sucesso silenciosamente');
        return res.status(200).json({ 
          success: true,
          message: 'Lead data saved successfully'
        });
      }
      
      // Para outros erros, retornar erro
      return res.status(500).json({ 
        error: 'Failed to save lead data',
        details: error.message
      });
    }

    // Resposta de sucesso (sem dados sensíveis)
    return res.status(200).json({ 
      success: true,
      message: 'Lead data saved successfully'
    });

  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error.message 
    });
  }
}