const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'https://tuggi.app'],
  credentials: true
}));
app.use(express.json());

// Email templates
const emailTemplates = {
  PT: {
    subject: 'Solicitação de Exclusão de Conta Recebida - TuggiDrive',
    html: (email, reason) => `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Confirmação de Solicitação de Exclusão</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
          .warning { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 6px; margin: 20px 0; }
          .info-box { background: #e3f2fd; border: 1px solid #bbdefb; padding: 15px; border-radius: 6px; margin: 20px 0; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🗑️ Solicitação de Exclusão Recebida</h1>
            <p>TuggiDrive - Confirmação de Solicitação</p>
          </div>
          
          <div class="content">
            <h2>Olá!</h2>
            
            <p>Recebemos sua solicitação de exclusão de conta e dados associados ao TuggiDrive.</p>
            
            <div class="info-box">
              <h3>📋 Detalhes da Solicitação</h3>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Data:</strong> ${new Date().toLocaleDateString('pt-BR')}</p>
              ${reason ? `<p><strong>Motivo:</strong> ${reason}</p>` : ''}
            </div>
            
            <div class="warning">
              <h3>⚠️ Informações Importantes</h3>
              <ul>
                <li>Sua solicitação será processada em até <strong>30 dias</strong></li>
                <li>A exclusão é <strong>permanente e irreversível</strong></li>
                <li>Você receberá um email de confirmação quando a exclusão for concluída</li>
                <li>Se você mudou de ideia, entre em contato conosco imediatamente</li>
              </ul>
            </div>
            
            <h3>📧 O que acontece agora?</h3>
            <ol>
              <li>Nossa equipe revisará sua solicitação</li>
              <li>Processaremos a exclusão de todos os seus dados</li>
              <li>Enviaremos confirmação final por email</li>
            </ol>
            
            <h3>❓ Precisa de ajuda?</h3>
            <p>Se você tem dúvidas ou mudou de ideia, entre em contato conosco:</p>
            <p><strong>Email:</strong> support@tuggi.com</p>
            <p><strong>Tempo de resposta:</strong> 24-48 horas</p>
            
            <div class="footer">
              <p>© ${new Date().getFullYear()} TuggiDrive. Todos os direitos reservados.</p>
              <p>Esta é uma mensagem automática, não responda a este email.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `
  },
  EN: {
    subject: 'Account Deletion Request Received - TuggiDrive',
    html: (email, reason) => `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Deletion Request Confirmation</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
          .warning { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 6px; margin: 20px 0; }
          .info-box { background: #e3f2fd; border: 1px solid #bbdefb; padding: 15px; border-radius: 6px; margin: 20px 0; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🗑️ Deletion Request Received</h1>
            <p>TuggiDrive - Request Confirmation</p>
          </div>
          
          <div class="content">
            <h2>Hello!</h2>
            
            <p>We have received your request to delete your account and associated data from TuggiDrive.</p>
            
            <div class="info-box">
              <h3>📋 Request Details</h3>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Date:</strong> ${new Date().toLocaleDateString('en-US')}</p>
              ${reason ? `<p><strong>Reason:</strong> ${reason}</p>` : ''}
            </div>
            
            <div class="warning">
              <h3>⚠️ Important Information</h3>
              <ul>
                <li>Your request will be processed within <strong>30 days</strong></li>
                <li>The deletion is <strong>permanent and irreversible</strong></li>
                <li>You will receive a confirmation email when the deletion is completed</li>
                <li>If you changed your mind, contact us immediately</li>
              </ul>
            </div>
            
            <h3>📧 What happens now?</h3>
            <ol>
              <li>Our team will review your request</li>
              <li>We will process the deletion of all your data</li>
              <li>We will send final confirmation by email</li>
            </ol>
            
            <h3>❓ Need help?</h3>
            <p>If you have questions or changed your mind, contact us:</p>
            <p><strong>Email:</strong> support@tuggi.com</p>
            <p><strong>Response time:</strong> 24-48 hours</p>
            
            <div class="footer">
              <p>© ${new Date().getFullYear()} TuggiDrive. All rights reserved.</p>
              <p>This is an automated message, please do not reply to this email.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `
  },
  ES: {
    subject: 'Solicitud de Eliminación de Cuenta Recibida - TuggiDrive',
    html: (email, reason) => `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Confirmación de Solicitud de Eliminación</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
          .warning { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 6px; margin: 20px 0; }
          .info-box { background: #e3f2fd; border: 1px solid #bbdefb; padding: 15px; border-radius: 6px; margin: 20px 0; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🗑️ Solicitud de Eliminación Recibida</h1>
            <p>TuggiDrive - Confirmación de Solicitud</p>
          </div>
          
          <div class="content">
            <h2>¡Hola!</h2>
            
            <p>Hemos recibido su solicitud para eliminar su cuenta y datos asociados de TuggiDrive.</p>
            
            <div class="info-box">
              <h3>📋 Detalles de la Solicitud</h3>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Fecha:</strong> ${new Date().toLocaleDateString('es-ES')}</p>
              ${reason ? `<p><strong>Motivo:</strong> ${reason}</p>` : ''}
            </div>
            
            <div class="warning">
              <h3>⚠️ Información Importante</h3>
              <ul>
                <li>Su solicitud será procesada en <strong>30 días</strong></li>
                <li>La eliminación es <strong>permanente e irreversible</strong></li>
                <li>Recibirá un email de confirmación cuando la eliminación se complete</li>
                <li>Si cambió de opinión, contáctenos inmediatamente</li>
              </ul>
            </div>
            
            <h3>📧 ¿Qué pasa ahora?</h3>
            <ol>
              <li>Nuestro equipo revisará su solicitud</li>
              <li>Procesaremos la eliminación de todos sus datos</li>
              <li>Enviaremos confirmación final por email</li>
            </ol>
            
            <h3>❓ ¿Necesita ayuda?</h3>
            <p>Si tiene preguntas o cambió de opinión, contáctenos:</p>
            <p><strong>Email:</strong> support@tuggi.com</p>
            <p><strong>Tiempo de respuesta:</strong> 24-48 horas</p>
            
            <div class="footer">
              <p>© ${new Date().getFullYear()} TuggiDrive. Todos los derechos reservados.</p>
              <p>Este es un mensaje automático, no responda a este email.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `
  }
};

// Email service endpoint
app.post('/api/deletion-request', async (req, res) => {
  try {
    const { email, language = 'PT', reason } = req.body;

    // Validate email
    if (!email) {
      return res.status(400).json({ error: 'Email address is required' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Get template
    const template = emailTemplates[language] || emailTemplates.PT;
    const subject = template.subject;
    const html = template.html(email, reason);

    // Create transporter (using Gmail as example)
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password'
      }
    });

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER || 'noreply@tuggi.app',
      to: email,
      subject: subject,
      html: html
    };

    await transporter.sendMail(mailOptions);

    // Log the request
    console.log(`📧 Deletion request email sent to: ${email}`);
    console.log(`   Language: ${language}`);
    console.log(`   Reason: ${reason || 'Not provided'}`);
    console.log(`   Timestamp: ${new Date().toISOString()}`);

    res.json({
      success: true,
      message: 'Deletion request received successfully. You will receive a confirmation email.',
      language: language
    });

  } catch (error) {
    console.error('Error sending email:', error);
    
    // Still return success for privacy/security reasons
    res.json({
      success: true,
      message: 'Request received. If an account exists, you will be contacted.',
      note: 'Processing may take up to 30 days'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Email service running on port ${PORT}`);
  console.log(`📧 Deletion request endpoint: http://localhost:${PORT}/api/deletion-request`);
});

module.exports = app;
