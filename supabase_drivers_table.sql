-- =====================================================
-- TUGGI DRIVERS LEADS TABLE - SUPABASE SQL SCHEMA
-- Schema: campaign
-- =====================================================

-- Criar o schema campaign se não existir
CREATE SCHEMA IF NOT EXISTS campaign;

-- Tabela para capturar leads de motoristas interessados
CREATE TABLE campaign.driver_email_leads (
    -- Identificação única
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    
    -- Dados do lead
    email VARCHAR(255) NOT NULL,
    
    -- Contexto da página e idioma
    language VARCHAR(2) NOT NULL CHECK (language IN ('PT', 'EN', 'ES')),
    page VARCHAR(50) NOT NULL,
    section VARCHAR(100) NOT NULL,
    position VARCHAR(100) NOT NULL,
    
    -- Dados de campanha e UTM
    campaign VARCHAR(255),
    utm_source VARCHAR(255),
    utm_medium VARCHAR(255),
    utm_campaign VARCHAR(255),
    utm_term VARCHAR(255),
    utm_content VARCHAR(255),
    
    -- Dados do CTA
    cta_variant VARCHAR(20) NOT NULL CHECK (cta_variant IN ('primary', 'secondary', 'outline')),
    cta_size VARCHAR(10) NOT NULL CHECK (cta_size IN ('sm', 'md', 'lg')),
    button_text VARCHAR(255) NOT NULL,
    
    -- Dados técnicos
    user_agent TEXT,
    ip_address INET,
    referrer TEXT,
    
    -- Dados de geolocalização (opcionais)
    country VARCHAR(2),
    region VARCHAR(100),
    city VARCHAR(100),
    
    -- Dados de engajamento
    time_on_page INTEGER, -- em segundos
    scroll_depth INTEGER, -- percentual de scroll
    
    -- Status do lead
    status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'converted', 'unqualified')),
    
    -- Notas internas
    notes TEXT,
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    contacted_at TIMESTAMP WITH TIME ZONE,
    
    -- Constraints
    CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    CONSTRAINT valid_scroll_depth CHECK (scroll_depth >= 0 AND scroll_depth <= 100)
);

-- =====================================================
-- ÍNDICES PARA PERFORMANCE
-- =====================================================

-- Índice principal para consultas por email
CREATE INDEX idx_driver_leads_email ON campaign.driver_email_leads(email);

-- Índice para consultas por data de criação
CREATE INDEX idx_driver_leads_created_at ON campaign.driver_email_leads(created_at DESC);

-- Índice para consultas por campanha
CREATE INDEX idx_driver_leads_campaign ON campaign.driver_email_leads(campaign) WHERE campaign IS NOT NULL;

-- Índice para consultas por status
CREATE INDEX idx_driver_leads_status ON campaign.driver_email_leads(status);

-- Índice composto para análises de conversão
CREATE INDEX idx_driver_leads_conversion ON campaign.driver_email_leads(language, page, section, created_at);

-- Índice para dados de UTM
CREATE INDEX idx_driver_leads_utm_source ON campaign.driver_email_leads(utm_source) WHERE utm_source IS NOT NULL;

-- Índice para geolocalização
CREATE INDEX idx_driver_leads_location ON campaign.driver_email_leads(country, region, city) WHERE country IS NOT NULL;

-- =====================================================
-- TRIGGER PARA UPDATED_AT
-- =====================================================

-- Função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION campaign.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para atualizar updated_at
CREATE TRIGGER update_driver_leads_updated_at
    BEFORE UPDATE ON campaign.driver_email_leads
    FOR EACH ROW
    EXECUTE FUNCTION campaign.update_updated_at_column();

-- =====================================================
-- ROW LEVEL SECURITY (RLS)
-- =====================================================

-- Habilitar RLS na tabela
ALTER TABLE campaign.driver_email_leads ENABLE ROW LEVEL SECURITY;

-- Política para inserção (permite inserção anônima via API)
CREATE POLICY "Allow anonymous inserts" ON campaign.driver_email_leads
    FOR INSERT 
    WITH CHECK (true);

-- Política para leitura (apenas usuários autenticados)
CREATE POLICY "Allow authenticated reads" ON campaign.driver_email_leads
    FOR SELECT 
    USING (auth.role() = 'authenticated');

-- Política para atualização (apenas usuários autenticados)
CREATE POLICY "Allow authenticated updates" ON campaign.driver_email_leads
    FOR UPDATE 
    USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');

-- Política para exclusão (apenas usuários autenticados)
CREATE POLICY "Allow authenticated deletes" ON campaign.driver_email_leads
    FOR DELETE 
    USING (auth.role() = 'authenticated');

-- =====================================================
-- VIEWS PARA ANÁLISES
-- =====================================================

-- View para análise de conversão por página
CREATE VIEW campaign.driver_leads_by_page AS
SELECT 
    page,
    language,
    COUNT(*) as total_leads,
    COUNT(DISTINCT email) as unique_leads,
    DATE_TRUNC('day', created_at) as date
FROM campaign.driver_email_leads
GROUP BY page, language, DATE_TRUNC('day', created_at)
ORDER BY date DESC, total_leads DESC;

-- View para análise de campanhas
CREATE VIEW campaign.driver_leads_by_campaign AS
SELECT 
    COALESCE(campaign, 'organic') as campaign_name,
    utm_source,
    utm_medium,
    COUNT(*) as total_leads,
    COUNT(DISTINCT email) as unique_leads,
    DATE_TRUNC('day', created_at) as date
FROM campaign.driver_email_leads
GROUP BY campaign, utm_source, utm_medium, DATE_TRUNC('day', created_at)
ORDER BY date DESC, total_leads DESC;

-- View para análise geográfica
CREATE VIEW campaign.driver_leads_by_location AS
SELECT 
    country,
    region,
    city,
    COUNT(*) as total_leads,
    COUNT(DISTINCT email) as unique_leads
FROM campaign.driver_email_leads
WHERE country IS NOT NULL
GROUP BY country, region, city
ORDER BY total_leads DESC;

-- =====================================================
-- COMENTÁRIOS NA TABELA
-- =====================================================

COMMENT ON TABLE campaign.driver_email_leads IS 'Tabela para capturar leads de motoristas interessados na LP de Drivers';
COMMENT ON COLUMN campaign.driver_email_leads.email IS 'Email do motorista interessado';
COMMENT ON COLUMN campaign.driver_email_leads.language IS 'Idioma da página (PT, EN, ES)';
COMMENT ON COLUMN campaign.driver_email_leads.page IS 'Página onde o lead foi capturado';
COMMENT ON COLUMN campaign.driver_email_leads.section IS 'Seção da página (hero, benefits, final)';
COMMENT ON COLUMN campaign.driver_email_leads.position IS 'Posição do CTA (primary_cta, secondary_cta, etc)';
COMMENT ON COLUMN campaign.driver_email_leads.campaign IS 'Nome da campanha interna';
COMMENT ON COLUMN campaign.driver_email_leads.cta_variant IS 'Variante do botão CTA (primary, secondary, outline)';
COMMENT ON COLUMN campaign.driver_email_leads.status IS 'Status do lead no funil de conversão';
COMMENT ON COLUMN campaign.driver_email_leads.time_on_page IS 'Tempo gasto na página em segundos';
COMMENT ON COLUMN campaign.driver_email_leads.scroll_depth IS 'Profundidade do scroll em percentual';

-- =====================================================
-- GRANTS DE PERMISSÃO
-- =====================================================

-- Permitir que o usuário anônimo insira dados
GRANT INSERT ON campaign.driver_email_leads TO anon;

-- Permitir que usuários autenticados leiam e atualizem
GRANT SELECT, UPDATE, DELETE ON campaign.driver_email_leads TO authenticated;

-- Permitir acesso às views
GRANT SELECT ON campaign.driver_leads_by_page TO authenticated;
GRANT SELECT ON campaign.driver_leads_by_campaign TO authenticated;
GRANT SELECT ON campaign.driver_leads_by_location TO authenticated;

-- =====================================================
-- EXEMPLO DE INSERÇÃO
-- =====================================================

/*
-- Exemplo de como inserir um lead (como faria o frontend)
INSERT INTO campaign.driver_email_leads (
    email,
    language,
    page,
    section,
    position,
    campaign,
    cta_variant,
    cta_size,
    button_text,
    user_agent
) VALUES (
    'motorista@exemplo.com',
    'PT',
    'drivers',
    'hero',
    'primary_cta',
    'sao_paulo_drivers',
    'primary',
    'lg',
    'Quero ganhar mais dirigindo',
    'Mozilla/5.0...'
);
*/

-- =====================================================
-- QUERIES ÚTEIS PARA ANÁLISE
-- =====================================================

/*
-- Top 10 campanhas por conversão
SELECT 
    COALESCE(campaign, 'organic') as campaign,
    COUNT(*) as leads,
    COUNT(DISTINCT email) as unique_leads
FROM campaign.driver_email_leads 
GROUP BY campaign 
ORDER BY leads DESC 
LIMIT 10;

-- Conversão por idioma nos últimos 30 dias
SELECT 
    language,
    COUNT(*) as leads,
    DATE_TRUNC('day', created_at) as date
FROM campaign.driver_email_leads 
WHERE created_at >= NOW() - INTERVAL '30 days'
GROUP BY language, DATE_TRUNC('day', created_at)
ORDER BY date DESC, leads DESC;

-- Performance por seção da página
SELECT 
    section,
    position,
    COUNT(*) as leads,
    AVG(time_on_page) as avg_time_on_page,
    AVG(scroll_depth) as avg_scroll_depth
FROM campaign.driver_email_leads 
WHERE time_on_page IS NOT NULL
GROUP BY section, position
ORDER BY leads DESC;
*/