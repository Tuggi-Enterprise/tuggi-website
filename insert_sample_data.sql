-- =====================================================
-- SCRIPT DE INSERÇÃO DE DADOS DE EXEMPLO
-- Tabela: campaign.driver_email_leads
-- =====================================================

-- Inserir dados de exemplo representativos dos diferentes cenários
INSERT INTO campaign.driver_email_leads (
    email,
    language,
    page,
    section,
    position,
    campaign,
    utm_source,
    utm_medium,
    utm_campaign,
    cta_variant,
    cta_size,
    button_text,
    user_agent,
    country,
    region,
    city,
    time_on_page,
    scroll_depth,
    status
) VALUES 
-- Leads do Brasil (PT)
(
    'motorista1@gmail.com',
    'PT',
    'drivers',
    'hero',
    'main',
    'driver_acquisition_2025',
    'google',
    'cpc',
    'motoristas_sao_paulo',
    'primary',
    'lg',
    'Comece Agora',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'BR',
    'São Paulo',
    'São Paulo',
    180,
    85,
    'new'
),
(
    'carlos.silva@hotmail.com',
    'PT',
    'drivers',
    'benefits',
    'secondary',
    'driver_acquisition_2025',
    'facebook',
    'social',
    'motoristas_rio',
    'secondary',
    'md',
    'Saiba Mais',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X)',
    'BR',
    'Rio de Janeiro',
    'Rio de Janeiro',
    240,
    92,
    'contacted'
),
(
    'ana.costa@yahoo.com.br',
    'PT',
    'drivers',
    'testimonials',
    'bottom',
    'driver_acquisition_2025',
    'instagram',
    'social',
    'motoristas_bh',
    'outline',
    'sm',
    'Cadastre-se',
    'Mozilla/5.0 (Android 11; Mobile; rv:68.0)',
    'BR',
    'Minas Gerais',
    'Belo Horizonte',
    320,
    78,
    'qualified'
),

-- Leads dos EUA (EN)
(
    'john.driver@gmail.com',
    'EN',
    'drivers',
    'hero',
    'main',
    'us_driver_expansion',
    'google',
    'organic',
    NULL,
    'primary',
    'lg',
    'Get Started',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
    'US',
    'California',
    'Los Angeles',
    150,
    65,
    'new'
),
(
    'sarah.johnson@outlook.com',
    'EN',
    'drivers',
    'how_it_works',
    'middle',
    'us_driver_expansion',
    'linkedin',
    'social',
    'drivers_usa',
    'secondary',
    'md',
    'Learn More',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    'US',
    'New York',
    'New York',
    280,
    88,
    'converted'
),

-- Leads da Espanha (ES)
(
    'miguel.conductor@gmail.com',
    'ES',
    'drivers',
    'hero',
    'main',
    'spain_launch',
    'google',
    'cpc',
    'conductores_madrid',
    'primary',
    'lg',
    'Empezar Ahora',
    'Mozilla/5.0 (X11; Linux x86_64)',
    'ES',
    'Madrid',
    'Madrid',
    200,
    75,
    'new'
),
(
    'carmen.rodriguez@hotmail.es',
    'ES',
    'drivers',
    'benefits',
    'secondary',
    'spain_launch',
    'facebook',
    'social',
    'conductores_barcelona',
    'secondary',
    'md',
    'Más Información',
    'Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X)',
    'ES',
    'Cataluña',
    'Barcelona',
    360,
    95,
    'qualified'
),

-- Leads sem dados de UTM (tráfego direto)
(
    'direct.user@gmail.com',
    'PT',
    'drivers',
    'final_cta',
    'bottom',
    NULL,
    NULL,
    NULL,
    NULL,
    'primary',
    'lg',
    'Comece Agora',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    'BR',
    'São Paulo',
    'Campinas',
    120,
    45,
    'new'
),

-- Lead com dados completos de engajamento
(
    'engaged.driver@gmail.com',
    'PT',
    'drivers',
    'hero',
    'main',
    'high_engagement_test',
    'google',
    'cpc',
    'motoristas_engajados',
    'primary',
    'lg',
    'Comece Agora',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
    'BR',
    'São Paulo',
    'São Paulo',
    480,
    100,
    'qualified'
),

-- Lead internacional (outros países)
(
    'international.driver@gmail.com',
    'EN',
    'drivers',
    'hero',
    'main',
    'international_test',
    'google',
    'organic',
    NULL,
    'primary',
    'md',
    'Get Started',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    'CA',
    'Ontario',
    'Toronto',
    220,
    70,
    'new'
);

-- =====================================================
-- VERIFICAÇÃO DOS DADOS INSERIDOS
-- =====================================================

-- Contar total de registros inseridos
SELECT COUNT(*) as total_leads FROM campaign.driver_email_leads;

-- Verificar distribuição por idioma
SELECT language, COUNT(*) as count 
FROM campaign.driver_email_leads 
GROUP BY language 
ORDER BY count DESC;

-- Verificar distribuição por país
SELECT country, COUNT(*) as count 
FROM campaign.driver_email_leads 
GROUP BY country 
ORDER BY count DESC;

-- Verificar distribuição por status
SELECT status, COUNT(*) as count 
FROM campaign.driver_email_leads 
GROUP BY status 
ORDER BY count DESC;

-- Verificar leads por campanha
SELECT campaign, COUNT(*) as count 
FROM campaign.driver_email_leads 
GROUP BY campaign 
ORDER BY count DESC;

-- Verificar dados de engajamento (tempo médio na página e scroll)
SELECT 
    language,
    AVG(time_on_page) as avg_time_on_page,
    AVG(scroll_depth) as avg_scroll_depth,
    COUNT(*) as total_leads
FROM campaign.driver_email_leads 
GROUP BY language
ORDER BY avg_time_on_page DESC;