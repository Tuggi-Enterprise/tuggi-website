# 📧 Email Service for Data Deletion

Serviço de email simples para solicitações de exclusão de dados do TuggiDrive.

## 🚀 Setup

### 1. Instalar dependências
```bash
cd server
npm install
```

### 2. Configurar variáveis de ambiente
Crie um arquivo `.env` na pasta `server`:
```env
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app
PORT=3001
```

### 3. Configurar Gmail
1. Ative a verificação em duas etapas na sua conta Google
2. Gere uma senha de app: https://myaccount.google.com/apppasswords
3. Use essa senha no `EMAIL_PASS`

### 4. Iniciar o servidor
```bash
npm start
```

## 📋 Uso

### Endpoint
```
POST http://localhost:3001/api/deletion-request
```

### Payload
```json
{
  "email": "usuario@exemplo.com",
  "language": "PT", // PT, EN, ES
  "reason": "Motivo da exclusão (opcional)"
}
```

### Resposta
```json
{
  "success": true,
  "message": "Deletion request received successfully. You will receive a confirmation email.",
  "language": "PT"
}
```

## 🌐 Deploy

### Opção 1: Vercel
1. Conecte o repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático

### Opção 2: Railway
1. Conecte o repositório ao Railway
2. Configure as variáveis de ambiente
3. Deploy automático

### Opção 3: Heroku
1. Crie um app no Heroku
2. Conecte o repositório
3. Configure as variáveis de ambiente
4. Deploy

## 🔧 Configuração de Produção

### Atualizar URL no frontend
No arquivo `src/components/DataDeletionPage.tsx`, altere:
```javascript
const emailServiceUrl = 'https://seu-dominio.com'; // URL de produção
```

### Configurar CORS
No arquivo `email-service.js`, atualize as origens permitidas:
```javascript
app.use(cors({
  origin: ['https://tuggi.app', 'https://www.tuggi.app'],
  credentials: true
}));
```

## 📊 Monitoramento

### Logs
O servidor loga todas as solicitações:
```
📧 Deletion request email sent to: usuario@exemplo.com
   Language: PT
   Reason: Motivo da exclusão
   Timestamp: 2025-01-27T20:15:00.000Z
```

### Health Check
```
GET http://localhost:3001/api/health
```

## 🔒 Segurança

- ✅ Validação de email
- ✅ CORS configurado
- ✅ Sem exposição de dados sensíveis
- ✅ Logs para auditoria
- ✅ Sempre retorna sucesso (privacidade)

## 📞 Suporte

Para dúvidas ou problemas:
- **Email**: support@tuggi.com
- **Documentação**: Este arquivo
