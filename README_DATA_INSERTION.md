# Scripts de Inserção de Dados - Tuggi Drivers

Este diretório contém scripts para inserir dados de exemplo na tabela `campaign.driver_email_leads` do Supabase.

## 📁 Arquivos Disponíveis

### 1. `insert_sample_data.sql`
Script SQL para inserção direta no banco de dados Supabase.

**Características:**
- ✅ Insere 11 registros de exemplo
- ✅ Dados representativos de diferentes países (BR, US, ES, CA)
- ✅ Diferentes idiomas (PT, EN, ES)
- ✅ Vários status de leads (new, contacted, qualified, converted)
- ✅ Dados de UTM e campanhas variados
- ✅ Inclui consultas de verificação dos dados inseridos

### 2. `insert_data_via_api.js`
Script Node.js para inserção via API REST do Supabase.

**Características:**
- ✅ Usa as credenciais do arquivo `.env`
- ✅ Inserção via HTTPS com tratamento de erros
- ✅ Progress tracking durante a inserção
- ✅ Relatório final de sucessos/erros
- ✅ Pausa entre requisições para não sobrecarregar a API

## 🚀 Como Usar

### Opção 1: Script SQL (Recomendado para desenvolvimento)

1. **Acesse o Supabase Dashboard**
   - Vá para [supabase.com](https://supabase.com)
   - Acesse seu projeto
   - Vá para "SQL Editor"

2. **Execute o script**
   ```sql
   -- Cole o conteúdo do arquivo insert_sample_data.sql
   -- e execute no SQL Editor
   ```

3. **Verifique os dados**
   - Vá para "Table Editor"
   - Selecione o schema "campaign"
   - Abra a tabela "driver_email_leads"

### Opção 2: Script Node.js (Para automação)

1. **Pré-requisitos**
   ```bash
   # Certifique-se de que o arquivo .env existe e contém:
   # VITE_SUPABASE_URL=https://seu-projeto.supabase.co
   # VITE_SUPABASE_ANON_KEY=sua-chave-anonima
   ```

2. **Execute o script**
   ```bash
   # Dar permissão de execução
   chmod +x insert_data_via_api.js
   
   # Executar
   node insert_data_via_api.js
   ```

3. **Saída esperada**
   ```
   🚀 Iniciando inserção de dados de exemplo...
   📊 Total de registros para inserir: 8
   
   ⏳ Inserindo registro 1/8: motorista1@gmail.com
   ✅ Sucesso: motorista1@gmail.com (Status: 201)
   ...
   
   📈 Resumo da inserção:
   ✅ Sucessos: 8
   ❌ Erros: 0
   📊 Total: 8
   
   🎉 Todos os dados foram inseridos com sucesso!
   ```

## 📊 Dados de Exemplo Incluídos

### Distribuição por País
- 🇧🇷 **Brasil (PT)**: 3 leads
- 🇺🇸 **EUA (EN)**: 2 leads  
- 🇪🇸 **Espanha (ES)**: 2 leads
- 🇨🇦 **Canadá (EN)**: 1 lead

### Distribuição por Status
- **new**: Leads recém-capturados
- **contacted**: Leads já contatados
- **qualified**: Leads qualificados
- **converted**: Leads convertidos

### Tipos de Campanha
- `driver_acquisition_2025`: Campanha principal BR
- `us_driver_expansion`: Expansão EUA
- `spain_launch`: Lançamento Espanha
- `high_engagement_test`: Teste de engajamento
- `international_test`: Teste internacional

### Fontes de Tráfego
- **Google**: Orgânico e CPC
- **Facebook**: Social media
- **Instagram**: Social media
- **LinkedIn**: Social media
- **Direto**: Sem UTM

## 🔍 Consultas Úteis

### Verificar total de leads
```sql
SELECT COUNT(*) as total_leads 
FROM campaign.driver_email_leads;
```

### Leads por idioma
```sql
SELECT language, COUNT(*) as count 
FROM campaign.driver_email_leads 
GROUP BY language 
ORDER BY count DESC;
```

### Leads por status
```sql
SELECT status, COUNT(*) as count 
FROM campaign.driver_email_leads 
GROUP BY status 
ORDER BY count DESC;
```

### Performance por campanha
```sql
SELECT 
    campaign,
    COUNT(*) as total_leads,
    AVG(time_on_page) as avg_time_on_page,
    AVG(scroll_depth) as avg_scroll_depth
FROM campaign.driver_email_leads 
WHERE campaign IS NOT NULL
GROUP BY campaign
ORDER BY total_leads DESC;
```

## ⚠️ Observações Importantes

1. **Dados de Teste**: Estes são dados fictícios para desenvolvimento/teste
2. **Emails Fictícios**: Use apenas em ambiente de desenvolvimento
3. **Duplicatas**: Os scripts não verificam duplicatas - execute apenas uma vez
4. **Limpeza**: Para limpar os dados de teste:
   ```sql
   DELETE FROM campaign.driver_email_leads 
   WHERE email LIKE '%@gmail.com' 
   OR email LIKE '%@hotmail.com' 
   OR email LIKE '%@yahoo.com.br'
   OR email LIKE '%@outlook.com'
   OR email LIKE '%@hotmail.es';
   ```

## 🛠️ Troubleshooting

### Erro 404 na API
- Verifique se a tabela `campaign.driver_email_leads` existe
- Confirme se o schema `campaign` foi criado
- Execute primeiro o script `supabase_drivers_table.sql`

### Erro de Autenticação
- Verifique as variáveis `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` no `.env`
- Confirme se a chave anônima tem permissões de INSERT na tabela

### Erro de Validação
- Verifique se todos os campos obrigatórios estão preenchidos
- Confirme se os valores estão dentro dos constraints definidos na tabela