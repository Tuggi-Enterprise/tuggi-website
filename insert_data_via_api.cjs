#!/usr/bin/env node

/**
 * =====================================================
 * SCRIPT DE INSERÇÃO DE DADOS VIA API SUPABASE
 * Tabela: campaign.driver_email_leads
 * =====================================================
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Carregar variáveis de ambiente do arquivo .env
function loadEnvFile() {
  const envPath = path.join(__dirname, '.env');
  if (!fs.existsSync(envPath)) {
    console.error('❌ Arquivo .env não encontrado!');
    process.exit(1);
  }

  const envContent = fs.readFileSync(envPath, 'utf8');
  const envVars = {};
  
  envContent.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split('=');
    if (key && valueParts.length > 0) {
      envVars[key.trim()] = valueParts.join('=').trim();
    }
  });

  return envVars;
}

// Configurações do Supabase
const env = loadEnvFile();
const SUPABASE_URL = env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error('❌ Variáveis VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY são obrigatórias no arquivo .env');
  process.exit(1);
}

// Dados de exemplo para inserção
const sampleData = [
  // Leads do Brasil (PT)
  {
    email: 'motorista1@gmail.com',
    language: 'PT',
    page: 'drivers',
    section: 'hero',
    position: 'main',
    campaign: 'driver_acquisition_2025',
    utm_source: 'google',
    utm_medium: 'cpc',
    utm_campaign: 'motoristas_sao_paulo',
    cta_variant: 'primary',
    cta_size: 'lg',
    button_text: 'Comece Agora',
    user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    country: 'BR',
    region: 'São Paulo',
    city: 'São Paulo',
    time_on_page: 180,
    scroll_depth: 85,
    status: 'new'
  },
  {
    email: 'carlos.silva@hotmail.com',
    language: 'PT',
    page: 'drivers',
    section: 'benefits',
    position: 'secondary',
    campaign: 'driver_acquisition_2025',
    utm_source: 'facebook',
    utm_medium: 'social',
    utm_campaign: 'motoristas_rio',
    cta_variant: 'secondary',
    cta_size: 'md',
    button_text: 'Saiba Mais',
    user_agent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X)',
    country: 'BR',
    region: 'Rio de Janeiro',
    city: 'Rio de Janeiro',
    time_on_page: 240,
    scroll_depth: 92,
    status: 'contacted'
  },
  {
    email: 'ana.costa@yahoo.com.br',
    language: 'PT',
    page: 'drivers',
    section: 'testimonials',
    position: 'bottom',
    campaign: 'driver_acquisition_2025',
    utm_source: 'instagram',
    utm_medium: 'social',
    utm_campaign: 'motoristas_bh',
    cta_variant: 'outline',
    cta_size: 'sm',
    button_text: 'Cadastre-se',
    user_agent: 'Mozilla/5.0 (Android 11; Mobile; rv:68.0)',
    country: 'BR',
    region: 'Minas Gerais',
    city: 'Belo Horizonte',
    time_on_page: 320,
    scroll_depth: 78,
    status: 'qualified'
  },

  // Leads dos EUA (EN)
  {
    email: 'john.driver@gmail.com',
    language: 'EN',
    page: 'drivers',
    section: 'hero',
    position: 'main',
    campaign: 'us_driver_expansion',
    utm_source: 'google',
    utm_medium: 'organic',
    utm_campaign: null,
    cta_variant: 'primary',
    cta_size: 'lg',
    button_text: 'Get Started',
    user_agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
    country: 'US',
    region: 'California',
    city: 'Los Angeles',
    time_on_page: 150,
    scroll_depth: 65,
    status: 'new'
  },
  {
    email: 'sarah.johnson@outlook.com',
    language: 'EN',
    page: 'drivers',
    section: 'how_it_works',
    position: 'middle',
    campaign: 'us_driver_expansion',
    utm_source: 'linkedin',
    utm_medium: 'social',
    utm_campaign: 'drivers_usa',
    cta_variant: 'secondary',
    cta_size: 'md',
    button_text: 'Learn More',
    user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    country: 'US',
    region: 'New York',
    city: 'New York',
    time_on_page: 280,
    scroll_depth: 88,
    status: 'converted'
  },

  // Leads da Espanha (ES)
  {
    email: 'miguel.conductor@gmail.com',
    language: 'ES',
    page: 'drivers',
    section: 'hero',
    position: 'main',
    campaign: 'spain_launch',
    utm_source: 'google',
    utm_medium: 'cpc',
    utm_campaign: 'conductores_madrid',
    cta_variant: 'primary',
    cta_size: 'lg',
    button_text: 'Empezar Ahora',
    user_agent: 'Mozilla/5.0 (X11; Linux x86_64)',
    country: 'ES',
    region: 'Madrid',
    city: 'Madrid',
    time_on_page: 200,
    scroll_depth: 75,
    status: 'new'
  },
  {
    email: 'carmen.rodriguez@hotmail.es',
    language: 'ES',
    page: 'drivers',
    section: 'benefits',
    position: 'secondary',
    campaign: 'spain_launch',
    utm_source: 'facebook',
    utm_medium: 'social',
    utm_campaign: 'conductores_barcelona',
    cta_variant: 'secondary',
    cta_size: 'md',
    button_text: 'Más Información',
    user_agent: 'Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X)',
    country: 'ES',
    region: 'Cataluña',
    city: 'Barcelona',
    time_on_page: 360,
    scroll_depth: 95,
    status: 'qualified'
  }
];

// Função para fazer requisição HTTP
function makeRequest(data) {
  return new Promise((resolve, reject) => {
    const url = new URL(`${SUPABASE_URL}/rest/v1/campaign.driver_email_leads`);
    
    const options = {
      hostname: url.hostname,
      port: url.port || 443,
      path: url.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Prefer': 'return=minimal'
      }
    };

    const req = https.request(options, (res) => {
      let responseData = '';
      
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve({ success: true, status: res.statusCode, data: responseData });
        } else {
          reject({ 
            success: false, 
            status: res.statusCode, 
            error: responseData,
            headers: Object.fromEntries(Object.entries(res.headers))
          });
        }
      });
    });

    req.on('error', (error) => {
      reject({ success: false, error: error.message });
    });

    req.write(JSON.stringify(data));
    req.end();
  });
}

// Função principal para inserir dados
async function insertSampleData() {
  console.log('🚀 Iniciando inserção de dados de exemplo...\n');
  console.log(`📊 Total de registros para inserir: ${sampleData.length}\n`);

  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < sampleData.length; i++) {
    const record = sampleData[i];
    
    try {
      console.log(`⏳ Inserindo registro ${i + 1}/${sampleData.length}: ${record.email}`);
      
      const result = await makeRequest(record);
      
      if (result.success) {
        console.log(`✅ Sucesso: ${record.email} (Status: ${result.status})`);
        successCount++;
      } else {
        console.log(`❌ Erro: ${record.email} (Status: ${result.status})`);
        console.log(`   Detalhes: ${result.error}`);
        console.log(`   Headers: ${JSON.stringify(result.headers, null, 2)}`);
        errorCount++;
      }
    } catch (error) {
      console.log(`❌ Erro: ${record.email}`);
      console.log(`   Status: ${error.status || 'N/A'}`);
      console.log(`   Detalhes: ${error.error || error.message}`);
      if (error.headers) {
        console.log(`   Headers: ${JSON.stringify(error.headers, null, 2)}`);
      }
      errorCount++;
    }
    
    // Pequena pausa entre requisições para não sobrecarregar a API
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  console.log('\n📈 Resumo da inserção:');
  console.log(`✅ Sucessos: ${successCount}`);
  console.log(`❌ Erros: ${errorCount}`);
  console.log(`📊 Total: ${successCount + errorCount}`);
  
  if (errorCount === 0) {
    console.log('\n🎉 Todos os dados foram inseridos com sucesso!');
  } else {
    console.log('\n⚠️  Alguns registros falharam. Verifique os detalhes acima.');
  }
}

// Executar o script
if (require.main === module) {
  insertSampleData().catch(error => {
    console.error('💥 Erro fatal:', error);
    process.exit(1);
  });
}

module.exports = { insertSampleData, sampleData };