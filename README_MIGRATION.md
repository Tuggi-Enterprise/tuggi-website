# 🔄 Migração da Tabela de Leads

## Situação Atual

Você já possui a tabela `campaign.driver_email_leads` que captura apenas **emails**. Para suportar o novo formulário que captura **Email + WhatsApp**, precisamos fazer algumas adaptações.

## 📋 Adaptações Necessárias

### 1. **Novos Campos Adicionados**
```sql
-- Campos para suporte a WhatsApp
phone_e164 VARCHAR(20)        -- Telefone em formato E.164
best_contact VARCHAR(10)      -- 'email' ou 'whatsapp'

-- Campos de atribuição adicional  
fbclid VARCHAR(255)           -- Facebook Click ID
gclid VARCHAR(255)            -- Google Click ID
city_hint VARCHAR(100)        -- Dica de cidade do usuário

-- Campos técnicos
device VARCHAR(10)            -- 'mobile', 'desktop', 'tablet'
source VARCHAR(50)            -- Origem do lead
```

### 2. **Campos Tornados Opcionais**
Para compatibilidade com o novo formulário:
- `cta_variant` → Opcional (valor padrão: 'primary')
- `cta_size` → Opcional (valor padrão: 'md') 
- `button_text` → Opcional (valor padrão baseado no tipo de contato)
- `section` → Opcional (valor padrão: 'lead_form')
- `position` → Opcional (valor padrão: 'hero')
- `email` → Opcional quando `best_contact = 'whatsapp'`

### 3. **Novas Validações**
```sql
-- Constraint condicional: email OU telefone obrigatório
CHECK (
  (best_contact = 'email' AND email IS NOT NULL) OR 
  (best_contact = 'whatsapp' AND phone_e164 IS NOT NULL)
)

-- Validação de telefone E.164
CHECK (phone_e164 IS NULL OR phone_e164 ~ '^\+[1-9]\d{1,14}$')
```

## 🚀 Como Executar a Migração

### Passo 1: Executar Script de Migração
```bash
# No Supabase SQL Editor ou via psql
psql -h [HOST] -U [USER] -d [DATABASE] -f migrate_leads_table.sql
```

### Passo 2: Verificar Migração
O script inclui verificações automáticas:
- ✅ Estrutura da tabela
- ✅ Constraints aplicadas  
- ✅ Índices criados

### Passo 3: Testar Endpoint
```bash
# Testar captura por email
curl -X POST http://localhost:5173/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "source": "form",
    "best_contact": "email", 
    "email": "test@example.com",
    "lang": "pt",
    "device": "mobile",
    "page": "drivers"
  }'

# Testar captura por WhatsApp  
curl -X POST http://localhost:5173/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "source": "form",
    "best_contact": "whatsapp",
    "phone_e164": "+5511999999999", 
    "lang": "pt",
    "device": "mobile",
    "page": "drivers"
  }'
```

## 📊 Mapeamento de Dados

### Formulário Antigo (CTAButton) → Tabela
```javascript
{
  email: "user@example.com",
  language: "PT", 
  page: "drivers",
  section: "hero",
  position: "primary_cta",
  cta_variant: "primary",
  cta_size: "md",
  button_text: "Quero dirigir no Tuggi"
}
```

### Formulário Novo (LeadCaptureForm) → Tabela  
```javascript
{
  // Campos condicionais
  email: "user@example.com" || null,
  phone_e164: "+5511999999999" || null,
  best_contact: "email" | "whatsapp",
  
  // Campos padrão para compatibilidade
  language: "PT",
  page: "drivers", 
  section: "lead_form",
  position: "hero",
  cta_variant: "primary",
  cta_size: "md",
  button_text: "Quero ganhar mais dirigindo",
  
  // Novos campos de atribuição
  fbclid: "...",
  gclid: "...", 
  city_hint: "São Paulo",
  device: "mobile",
  source: "form"
}
```

## ⚠️ Pontos de Atenção

1. **Backup**: Faça backup da tabela antes da migração
2. **Downtime**: A migração pode ser executada sem downtime
3. **Compatibilidade**: Formulários antigos continuarão funcionando
4. **UPSERT**: Leads duplicados serão atualizados (email OU telefone)
5. **Índices**: Novos índices melhoram performance de consultas

## 🔍 Monitoramento Pós-Migração

```sql
-- Verificar leads por tipo de contato
SELECT best_contact, COUNT(*) 
FROM campaign.driver_email_leads 
WHERE created_at >= NOW() - INTERVAL '7 days'
GROUP BY best_contact;

-- Verificar atribuição Facebook/Google
SELECT 
  COUNT(CASE WHEN fbclid IS NOT NULL THEN 1 END) as facebook_leads,
  COUNT(CASE WHEN gclid IS NOT NULL THEN 1 END) as google_leads,
  COUNT(*) as total_leads
FROM campaign.driver_email_leads 
WHERE created_at >= NOW() - INTERVAL '7 days';

-- Verificar dispositivos
SELECT device, COUNT(*) 
FROM campaign.driver_email_leads 
WHERE created_at >= NOW() - INTERVAL '7 days'
  AND device IS NOT NULL
GROUP BY device;
```

## ✅ Checklist de Validação

- [ ] Script de migração executado com sucesso
- [ ] Novos campos criados corretamente  
- [ ] Constraints aplicadas
- [ ] Índices criados
- [ ] Endpoint `/api/leads` funcionando
- [ ] Formulário capturando emails
- [ ] Formulário capturando WhatsApp
- [ ] Validações funcionando
- [ ] UPSERT funcionando corretamente
- [ ] Analytics sem PII funcionando

---

**Resultado**: Tabela existente adaptada para suportar captura via Email + WhatsApp mantendo total compatibilidade com dados históricos! 🎉