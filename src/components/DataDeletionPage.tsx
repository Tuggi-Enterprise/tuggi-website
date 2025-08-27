import React, { useState } from 'react';
import TuggiLogo from './TuggiLogo';

interface DataDeletionPageProps {
  currentLanguage: string;
  onCTAClick?: (ctaType: string, position?: string) => void;
}

const DataDeletionPage: React.FC<DataDeletionPageProps> = ({ 
  currentLanguage, 
  onCTAClick 
}) => {
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [confirmDeletion, setConfirmDeletion] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Translations based on current language
  const translations = {
    PT: {
      title: 'Solicitação de Exclusão de Conta e Dados',
      subtitle: 'Solicite a exclusão permanente da sua conta TuggiDrive e todos os dados associados',
      whatWillBeDeleted: 'O que será excluído',
      whatWillBeDeletedDesc: 'Quando você solicitar a exclusão da conta, removeremos permanentemente:',
      dataList: [
        'Seu perfil de usuário e informações da conta',
        'Todas as rotas salvas e histórico de viagens',
        'Suas preferências e configurações do app',
        'Todas as sessões de viagem e histórico de reprodução de atrações',
        'Quaisquer arquivos de áudio em cache e conteúdo gerado pelo usuário',
        'Todos os dados de analytics associados à sua conta'
      ],
      importantNotice: 'Aviso Importante',
      importantNoticeDesc: 'A exclusão da conta é permanente e irreversível. Uma vez processada, você não poderá recuperar sua conta, rotas ou qualquer outro dado. Certifique-se de fazer backup de qualquer informação que deseja manter antes de prosseguir.',
      deletionRequestForm: 'Formulário de Solicitação de Exclusão',
      emailLabel: 'Endereço de Email Associado à Sua Conta *',
      emailPlaceholder: 'Digite o endereço de email que você usou para se cadastrar',
      reasonLabel: 'Motivo da Exclusão (Opcional)',
      reasonPlaceholder: 'Por favor, nos informe por que você está excluindo sua conta. Isso nos ajuda a melhorar nosso serviço.',
      confirmText: 'Entendo que esta ação é permanente e irreversível. Confirmo que desejo excluir permanentemente minha conta TuggiDrive e todos os dados associados.',
      cancelButton: 'Cancelar',
      submitButton: 'Solicitar Exclusão de Conta',
      submittingButton: 'Processando...',
      successTitle: '✅ Solicitação de Exclusão Enviada',
      successMessage: 'Sua solicitação de exclusão de conta foi recebida. Processaremos sua solicitação em até 30 dias e enviaremos um email de confirmação quando concluído.',
      errorTitle: '❌ Solicitação Falhou',
      errorMessage: 'Houve um erro ao processar sua solicitação. Tente novamente ou entre em contato com nossa equipe de suporte.',
      needHelp: 'Precisa de Ajuda?',
      supportEmail: 'Email:',
      responseTime: 'Tempo de Resposta:',
      responseTimeDesc: 'Normalmente respondemos em 24-48 horas',
      supportDesc: 'Se você tem dúvidas sobre exclusão de dados ou precisa de assistência, não hesite em nos contatar.',
      invalidEmail: 'Formato de email inválido',
      emailRequired: 'Endereço de email é obrigatório',
      confirmationRequired: 'Você deve confirmar que entende que a exclusão é permanente'
    },
    EN: {
      title: 'Account & Data Deletion Request',
      subtitle: 'Request permanent deletion of your TuggiDrive account and all associated data',
      whatWillBeDeleted: 'What Data Will Be Deleted',
      whatWillBeDeletedDesc: 'When you request account deletion, we will permanently remove:',
      dataList: [
        'Your user profile and account information',
        'All saved routes and trip history',
        'Your app preferences and settings',
        'All trip sessions and attraction play history',
        'Any cached audio files and user-generated content',
        'All analytics data associated with your account'
      ],
      importantNotice: 'Important Notice',
      importantNoticeDesc: 'Account deletion is permanent and irreversible. Once processed, you will not be able to recover your account, routes, or any other data. Please ensure you have backed up any information you wish to keep before proceeding.',
      deletionRequestForm: 'Deletion Request Form',
      emailLabel: 'Email Address Associated with Your Account *',
      emailPlaceholder: 'Enter the email address you used to sign up',
      reasonLabel: 'Reason for Deletion (Optional)',
      reasonPlaceholder: 'Please let us know why you\'re deleting your account. This helps us improve our service.',
      confirmText: 'I understand that this action is permanent and irreversible. I confirm that I want to permanently delete my TuggiDrive account and all associated data.',
      cancelButton: 'Cancel',
      submitButton: 'Request Account Deletion',
      submittingButton: 'Processing...',
      successTitle: '✅ Deletion Request Submitted',
      successMessage: 'Your account deletion request has been received. We will process your request within 30 days and send you a confirmation email once completed.',
      errorTitle: '❌ Request Failed',
      errorMessage: 'There was an error processing your request. Please try again or contact our support team.',
      needHelp: 'Need Help?',
      supportEmail: 'Email:',
      responseTime: 'Response Time:',
      responseTimeDesc: 'We typically respond within 24-48 hours',
      supportDesc: 'If you have questions about data deletion or need assistance, please don\'t hesitate to contact us.',
      invalidEmail: 'Invalid email format',
      emailRequired: 'Email address is required',
      confirmationRequired: 'You must confirm that you understand the deletion is permanent'
    },
    ES: {
      title: 'Solicitud de Eliminación de Cuenta y Datos',
      subtitle: 'Solicite la eliminación permanente de su cuenta TuggiDrive y todos los datos asociados',
      whatWillBeDeleted: 'Qué Datos Serán Eliminados',
      whatWillBeDeletedDesc: 'Cuando solicite la eliminación de la cuenta, eliminaremos permanentemente:',
      dataList: [
        'Su perfil de usuario e información de la cuenta',
        'Todas las rutas guardadas e historial de viajes',
        'Sus preferencias y configuraciones de la aplicación',
        'Todas las sesiones de viaje e historial de reproducción de atracciones',
        'Cualquier archivo de audio en caché y contenido generado por el usuario',
        'Todos los datos de análisis asociados con su cuenta'
      ],
      importantNotice: 'Aviso Importante',
      importantNoticeDesc: 'La eliminación de la cuenta es permanente e irreversible. Una vez procesada, no podrá recuperar su cuenta, rutas o cualquier otro dato. Asegúrese de hacer una copia de seguridad de cualquier información que desee mantener antes de continuar.',
      deletionRequestForm: 'Formulario de Solicitud de Eliminación',
      emailLabel: 'Dirección de Email Asociada con Su Cuenta *',
      emailPlaceholder: 'Ingrese la dirección de email que usó para registrarse',
      reasonLabel: 'Motivo de la Eliminación (Opcional)',
      reasonPlaceholder: 'Por favor, háganos saber por qué está eliminando su cuenta. Esto nos ayuda a mejorar nuestro servicio.',
      confirmText: 'Entiendo que esta acción es permanente e irreversible. Confirmo que deseo eliminar permanentemente mi cuenta TuggiDrive y todos los datos asociados.',
      cancelButton: 'Cancelar',
      submitButton: 'Solicitar Eliminación de Cuenta',
      submittingButton: 'Procesando...',
      successTitle: '✅ Solicitud de Eliminación Enviada',
      successMessage: 'Su solicitud de eliminación de cuenta ha sido recibida. Procesaremos su solicitud en 30 días y le enviaremos un email de confirmación una vez completado.',
      errorTitle: '❌ Solicitud Fallida',
      errorMessage: 'Hubo un error al procesar su solicitud. Inténtelo de nuevo o contacte a nuestro equipo de soporte.',
      needHelp: '¿Necesita Ayuda?',
      supportEmail: 'Email:',
      responseTime: 'Tiempo de Respuesta:',
      responseTimeDesc: 'Normalmente respondemos en 24-48 horas',
      supportDesc: 'Si tiene preguntas sobre la eliminación de datos o necesita asistencia, no dude en contactarnos.',
      invalidEmail: 'Formato de email inválido',
      emailRequired: 'La dirección de email es obligatoria',
      confirmationRequired: 'Debe confirmar que entiende que la eliminación es permanente'
    }
  };

  const t = translations[currentLanguage as keyof typeof translations] || translations.EN;

  const validateForm = () => {
    if (!email) {
      setErrorMessage(t.emailRequired);
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage(t.invalidEmail);
      return false;
    }
    
    if (!confirmDeletion) {
      setErrorMessage(t.confirmationRequired);
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Track analytics
      if (onCTAClick) {
        onCTAClick('data_deletion_request', 'data_deletion_page');
      }

      const data = {
        email: email.toLowerCase(),
        reason: reason || null,
        language: currentLanguage,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
      };

      // Use Vercel API
      const apiUrl = '/api/deletion-request';
      
      console.log('API URL:', apiUrl);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Response error:', response.status, errorText);
        let errorMessage = 'Request failed';
        try {
          const errorResult = JSON.parse(errorText);
          errorMessage = errorResult.error || errorMessage;
        } catch (parseError) {
          console.error('Error parsing error response:', parseError);
        }
        throw new Error(errorMessage);
      }

      let result;
      try {
        result = await response.json();
      } catch (jsonError) {
        console.error('JSON parse error:', jsonError);
        throw new Error('Invalid response from server');
      }

      setSubmitStatus('success');
      
      // Reset form
      setEmail('');
      setReason('');
      setConfirmDeletion(false);

    } catch (error) {
      console.error('Error submitting deletion request:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Unknown error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    if (onCTAClick) {
      onCTAClick('data_deletion_cancel', 'data_deletion_page');
    }
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-tuggi-primary/5">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <TuggiLogo className="w-16 h-16" />
          </div>
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* What Data Will Be Deleted */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4 flex items-center">
            <span className="mr-3">🔒</span>
            {t.whatWillBeDeleted}
          </h2>
          <p className="text-neutral-700 mb-6">
            {t.whatWillBeDeletedDesc}
          </p>
          <ul className="space-y-3">
            {t.dataList.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-tuggi-primary font-bold mr-3">•</span>
                <span className="text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Important Notice */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center">
            <span className="mr-2">⚠️</span>
            {t.importantNotice}
          </h3>
          <p className="text-red-700">
            {t.importantNoticeDesc}
          </p>
        </div>

        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-green-800 mb-3">
              {t.successTitle}
            </h3>
            <p className="text-green-700">
              {t.successMessage}
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-red-800 mb-3">
              {t.errorTitle}
            </h3>
            <p className="text-red-700">
              {errorMessage || t.errorMessage}
            </p>
          </div>
        )}

        {/* Deletion Request Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-6 text-center">
            {t.deletionRequestForm}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                {t.emailLabel}
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.emailPlaceholder}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-tuggi-primary focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-neutral-700 mb-2">
                {t.reasonLabel}
              </label>
              <textarea
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder={t.reasonPlaceholder}
                rows={4}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-tuggi-primary focus:border-transparent resize-vertical"
              />
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="confirm"
                checked={confirmDeletion}
                onChange={(e) => setConfirmDeletion(e.target.checked)}
                className="mt-1 h-4 w-4 text-tuggi-primary focus:ring-tuggi-primary border-neutral-300 rounded"
                required
              />
              <label htmlFor="confirm" className="text-sm text-neutral-700 leading-relaxed">
                {t.confirmText}
              </label>
            </div>

            <div className="flex justify-center space-x-4 pt-6">
              <button
                type="button"
                onClick={handleCancel}
                className="px-8 py-3 border-2 border-tuggi-primary text-tuggi-primary font-semibold rounded-lg hover:bg-tuggi-primary hover:text-white transition-colors"
              >
                {t.cancelButton}
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-tuggi-primary text-white font-semibold rounded-lg hover:bg-tuggi-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? t.submittingButton : t.submitButton}
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">
            {t.needHelp}
          </h3>
          <div className="space-y-2 text-blue-700">
            <p>
              <strong>{t.supportEmail}</strong> support@tuggi.com
            </p>
            <p>
              <strong>{t.responseTime}</strong> {t.responseTimeDesc}
            </p>
            <p className="mt-4">
              {t.supportDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDeletionPage;
