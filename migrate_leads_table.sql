-- =====================================================
-- MIGRAÇÃO DA TABELA campaign.driver_email_leads
-- Para suportar captura de leads via Email + WhatsApp
-- =====================================================

-- 1. Adicionar novos campos necessários
ALTER TABLE campaign.driver_email_leads 
ADD COLUMN IF NOT EXISTS phone_e164 character varying(20) NULL,
ADD COLUMN IF NOT EXISTS best_contact character varying(10) NOT NULL DEFAULT 'email',
ADD COLUMN IF NOT EXISTS fbclid character varying(255) NULL,
ADD COLUMN IF NOT EXISTS gclid character varying(255) NULL,
ADD COLUMN IF NOT EXISTS city_hint character varying(100) NULL,
ADD COLUMN IF NOT EXISTS device character varying(10) NULL,
ADD COLUMN IF NOT EXISTS source character varying(50) NULL;

-- 2. Tornar campos opcionais (para compatibilidade)
ALTER TABLE campaign.driver_email_leads 
ALTER COLUMN cta_variant DROP NOT NULL,
ALTER COLUMN cta_size DROP NOT NULL,
ALTER COLUMN button_text DROP NOT NULL,
ALTER COLUMN section DROP NOT NULL,
ALTER COLUMN position DROP NOT NULL;

-- 3. Tornar email opcional (quando best_contact = 'whatsapp')
ALTER TABLE campaign.driver_email_leads 
ALTER COLUMN email DROP NOT NULL;

-- 4. Adicionar constraints para novos campos
ALTER TABLE campaign.driver_email_leads 
ADD CONSTRAINT driver_email_leads_best_contact_check 
CHECK (best_contact IN ('email', 'whatsapp'));

ALTER TABLE campaign.driver_email_leads 
ADD CONSTRAINT driver_email_leads_device_check 
CHECK (device IS NULL OR device IN ('mobile', 'desktop', 'tablet'));

-- 5. Constraint condicional: email OU phone_e164 deve estar preenchido
ALTER TABLE campaign.driver_email_leads 
ADD CONSTRAINT driver_email_leads_contact_required_check 
CHECK (
  (best_contact = 'email' AND email IS NOT NULL) OR 
  (best_contact = 'whatsapp' AND phone_e164 IS NOT NULL)
);

-- 6. Validação de telefone E.164
ALTER TABLE campaign.driver_email_leads 
ADD CONSTRAINT valid_phone_e164 
CHECK (phone_e164 IS NULL OR phone_e164 ~ '^\+[1-9]\d{1,14}$');

-- 7. Novos índices para performance
CREATE INDEX IF NOT EXISTS idx_driver_leads_phone 
ON campaign.driver_email_leads USING btree (phone_e164) 
WHERE phone_e164 IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_driver_leads_best_contact 
ON campaign.driver_email_leads USING btree (best_contact);

CREATE INDEX IF NOT EXISTS idx_driver_leads_device 
ON campaign.driver_email_leads USING btree (device) 
WHERE device IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_driver_leads_fbclid 
ON campaign.driver_email_leads USING btree (fbclid) 
WHERE fbclid IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_driver_leads_gclid 
ON campaign.driver_email_leads USING btree (gclid) 
WHERE gclid IS NOT NULL;

-- 8. Índice composto para UPSERT por telefone
CREATE UNIQUE INDEX IF NOT EXISTS idx_driver_leads_phone_unique 
ON campaign.driver_email_leads (phone_e164) 
WHERE phone_e164 IS NOT NULL;

-- 9. Comentários para documentação
COMMENT ON COLUMN campaign.driver_email_leads.phone_e164 IS 'Telefone em formato E.164 para WhatsApp';
COMMENT ON COLUMN campaign.driver_email_leads.best_contact IS 'Melhor forma de contato: email ou whatsapp';
COMMENT ON COLUMN campaign.driver_email_leads.fbclid IS 'Facebook Click ID para atribuição';
COMMENT ON COLUMN campaign.driver_email_leads.gclid IS 'Google Click ID para atribuição';
COMMENT ON COLUMN campaign.driver_email_leads.city_hint IS 'Dica de cidade do usuário';
COMMENT ON COLUMN campaign.driver_email_leads.device IS 'Tipo de dispositivo: mobile, desktop, tablet';
COMMENT ON COLUMN campaign.driver_email_leads.source IS 'Origem do lead (form, cta, etc)';

-- =====================================================
-- VERIFICAÇÕES PÓS-MIGRAÇÃO
-- =====================================================

-- Verificar estrutura da tabela
SELECT column_name, data_type, is_nullable, column_default 
FROM information_schema.columns 
WHERE table_schema = 'campaign' 
  AND table_name = 'driver_email_leads' 
ORDER BY ordinal_position;

-- Verificar constraints
SELECT constraint_name, constraint_type 
FROM information_schema.table_constraints 
WHERE table_schema = 'campaign' 
  AND table_name = 'driver_email_leads';

-- Verificar índices
SELECT indexname, indexdef 
FROM pg_indexes 
WHERE schemaname = 'campaign' 
  AND tablename = 'driver_email_leads';