-- Tabela simples para capturar leads de motoristas
-- Schema: public (padrão do Supabase)

CREATE TABLE IF NOT EXISTS public.driver_email_leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    language VARCHAR(2) NOT NULL,
    page VARCHAR(50) NOT NULL,
    section VARCHAR(100) NOT NULL,
    position VARCHAR(100) NOT NULL,
    campaign VARCHAR(255),
    cta_variant VARCHAR(20) NOT NULL,
    cta_size VARCHAR(10) NOT NULL,
    button_text VARCHAR(255) NOT NULL,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para performance
CREATE INDEX IF NOT EXISTS idx_driver_email_leads_email ON public.driver_email_leads(email);
CREATE INDEX IF NOT EXISTS idx_driver_email_leads_created_at ON public.driver_email_leads(created_at);
CREATE INDEX IF NOT EXISTS idx_driver_email_leads_language ON public.driver_email_leads(language);

-- RLS (Row Level Security)
ALTER TABLE public.driver_email_leads ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserção anônima
CREATE POLICY "Allow anonymous inserts" ON public.driver_email_leads
    FOR INSERT WITH CHECK (true);

-- Política para leitura autenticada
CREATE POLICY "Allow authenticated reads" ON public.driver_email_leads
    FOR SELECT USING (auth.role() = 'authenticated');

-- Trigger para atualizar updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_driver_email_leads_updated_at 
    BEFORE UPDATE ON public.driver_email_leads 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();