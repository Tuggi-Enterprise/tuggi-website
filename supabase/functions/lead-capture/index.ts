import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  console.log(`--- New Request: ${req.method} ${req.url} ---`)

  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      { db: { schema: 'campaign' } }
    )

    const body = await req.json()
    console.log("Receiving lead data:", JSON.stringify(body, null, 2))
    
    // 1. Mapeamento de Linguagem (Constraint: PT, EN, ES)
    let lang = (body.lang || 'PT').toUpperCase()
    if (!['PT', 'EN', 'ES'].includes(lang)) {
      lang = 'EN' // Fallback para EN se for IT ou outro não suportado pelo DB
    }

    // 2. Mapeamento de Device (Constraint: mobile, desktop, tablet)
    let device = body.device || null
    if (device && !['mobile', 'desktop', 'tablet'].includes(device)) {
      device = null
    }

    // 3. Tratamento de IP (Campo INET - Não aceita 'unknown')
    const ipStr = req.headers.get('x-forwarded-for')?.split(',')[0]
    const ip_address = (ipStr && ipStr !== 'unknown' && ipStr !== '::1') ? ipStr : null

    const leadData = {
      email: body.email || null,
      phone_e164: body.phone_e164 || null,
      language: lang,
      page: (body.page || '/beta-drivers').substring(0, 50),
      best_contact: body.best_contact || 'email',
      source: body.source || 'beta_drivers_lp',
      device: device,
      utm_source: body.utm_source || null,
      utm_medium: body.utm_medium || null,
      utm_campaign: body.utm_campaign || null,
      utm_content: body.utm_content || null,
      utm_term: body.utm_term || null,
      fbclid: body.fbclid || null,
      gclid: body.gclid || null,
      notes: body.notes || null,
      status: 'new',
      section: body.section || 'hero',
      position: body.position || 'top',
      button_text: (body.button_text || 'Beta Join').substring(0, 255),
      cta_variant: 'primary',
      cta_size: 'md',
      user_agent: req.headers.get('user-agent'),
      ip_address: ip_address,
      referrer: body.referrer || null,
    }

    console.log("Attempting insert with mapped data:", JSON.stringify(leadData, null, 2))

    const { data, error } = await supabase
      .from('driver_email_leads')
      .insert(leadData)
      .select()

    if (error) {
       console.error("Supabase Insert Error:", JSON.stringify(error, null, 2))
       if (error.code === '23505') {
         return new Response(JSON.stringify({ success: true, message: 'Already registered' }), {
           headers: { ...corsHeaders, 'Content-Type': 'application/json' },
           status: 200,
         })
       }
       throw error
    }

    console.log("Lead saved successfully")
    return new Response(JSON.stringify({ success: true, data }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })

  } catch (error) {
    console.error("Critical Function Error:", error.message)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})
