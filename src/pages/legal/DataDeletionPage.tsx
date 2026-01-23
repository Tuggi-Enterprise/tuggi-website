import React, { useState } from 'react';
import TuggiLogo from '../../components/ui/TuggiLogo';

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
    },
    FR: {
      title: 'Demande de Suppression de Compte et de Données',
      subtitle: 'Demandez la suppression permanente de votre compte TuggiDrive et de toutes les données associées',
      whatWillBeDeleted: 'Quelles Données Seront Supprimées',
      whatWillBeDeletedDesc: 'Lorsque vous demandez la suppression de votre compte, nous supprimerons définitivement :',
      dataList: [
        'Votre profil utilisateur et les informations de votre compte',
        'Tous les itinéraires enregistrés et l\'historique des trajets',
        'Vos préférences et paramètres d\'application',
        'Toutes les sessions de voyage et l\'historique de lecture des attractions',
        'Tous les fichiers audio en cache et le contenu généré par l\'utilisateur',
        'Toutes les données d\'analyse associées à votre compte'
      ],
      importantNotice: 'Avis Important',
      importantNoticeDesc: 'La suppression du compte est permanente et irréversible. Une fois traitée, vous ne pourrez pas récupérer votre compte, vos itinéraires ou toute autre donnée. Assurez-vous d\'avoir sauvegardé toutes les informations que vous souhaitez conserver avant de continuer.',
      deletionRequestForm: 'Formulaire de Demande de Suppression',
      emailLabel: 'Adresse E-mail Associée à Votre Compte *',
      emailPlaceholder: 'Entrez l\'adresse e-mail que vous avez utilisée pour vous inscrire',
      reasonLabel: 'Raison de la Suppression (Optionnel)',
      reasonPlaceholder: 'Veuillez nous indiquer pourquoi vous supprimez votre compte. Cela nous aide à améliorer notre service.',
      confirmText: 'Je comprends que cette action est permanente et irréversible. Je confirme que je souhaite supprimer définitivement mon compte TuggiDrive et toutes les données associées.',
      cancelButton: 'Annuler',
      submitButton: 'Demander la Suppression du Compte',
      submittingButton: 'Traitement...',
      successTitle: '✅ Demande de Suppression Envoyée',
      successMessage: 'Votre demande de suppression de compte a été reçue. Nous traiterons votre demande dans les 30 jours et vous enverrons un e-mail de confirmation une fois terminée.',
      errorTitle: '❌ Échec de la Demande',
      errorMessage: 'Une erreur s\'est produite lors du traitement de votre demande. Veuillez réessayer ou contacter notre équipe de support.',
      needHelp: 'Besoin d\'Aide ?',
      supportEmail: 'E-mail :',
      responseTime: 'Temps de Réponse :',
      responseTimeDesc: 'Nous répondons généralement dans les 24-48 heures',
      supportDesc: 'Si vous avez des questions sur la suppression des données ou avez besoin d\'assistance, n\'hésitez pas à nous contacter.',
      invalidEmail: 'Format d\'e-mail invalide',
      emailRequired: 'L\'adresse e-mail est requise',
      confirmationRequired: 'Vous devez confirmer que vous comprenez que la suppression est permanente'
    },
    DE: {
      title: 'Antrag auf Konto- und Datenlöschung',
      subtitle: 'Beantragen Sie die dauerhafte Löschung Ihres TuggiDrive-Kontos und aller zugehörigen Daten',
      whatWillBeDeleted: 'Welche Daten werden gelöscht',
      whatWillBeDeletedDesc: 'Wenn Sie die Kontolöschung beantragen, werden wir dauerhaft entfernen:',
      dataList: [
        'Ihr Benutzerprofil und Kontoinformationen',
        'Alle gespeicherten Routen und Reiseverläufe',
        'Ihre App-Einstellungen und Präferenzen',
        'Alle Reisesitzungen und Attraktions-Wiedergabeverläufe',
        'Alle zwischengespeicherten Audiodateien und nutzergenerierten Inhalte',
        'Alle Analysedaten, die mit Ihrem Konto verknüpft sind'
      ],
      importantNotice: 'Wichtiger Hinweis',
      importantNoticeDesc: 'Die Kontolöschung ist dauerhaft und unwiderruflich. Nach der Bearbeitung können Sie Ihr Konto, Ihre Routen oder andere Daten nicht wiederherstellen. Bitte stellen Sie sicher, dass Sie alle Informationen, die Sie behalten möchten, gesichert haben, bevor Sie fortfahren.',
      deletionRequestForm: 'Löschantragsformular',
      emailLabel: 'Mit Ihrem Konto verknüpfte E-Mail-Adresse *',
      emailPlaceholder: 'Geben Sie die E-Mail-Adresse ein, mit der Sie sich angemeldet haben',
      reasonLabel: 'Grund für die Löschung (Optional)',
      reasonPlaceholder: 'Bitte teilen Sie uns mit, warum Sie Ihr Konto löschen. Dies hilft uns, unseren Service zu verbessern.',
      confirmText: 'Ich verstehe, dass diese Aktion dauerhaft und unwiderruflich ist. Ich bestätige, dass ich mein TuggiDrive-Konto und alle zugehörigen Daten dauerhaft löschen möchte.',
      cancelButton: 'Abbrechen',
      submitButton: 'Kontolöschung beantragen',
      submittingButton: 'Verarbeitung...',
      successTitle: '✅ Löschantrag gesendet',
      successMessage: 'Ihr Antrag auf Kontolöschung ist eingegangen. Wir werden Ihren Antrag innerhalb von 30 Tagen bearbeiten und Ihnen nach Abschluss eine Bestätigungs-E-Mail senden.',
      errorTitle: '❌ Antrag fehlgeschlagen',
      errorMessage: 'Bei der Verarbeitung Ihres Antrags ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder wenden Sie sich an unser Support-Team.',
      needHelp: 'Brauchen Sie Hilfe?',
      supportEmail: 'E-Mail:',
      responseTime: 'Antwortzeit:',
      responseTimeDesc: 'Wir antworten in der Regel innerhalb von 24-48 Stunden',
      supportDesc: 'Wenn Sie Fragen zur Datenlöschung haben oder Unterstützung benötigen, zögern Sie bitte nicht, uns zu kontaktieren.',
      invalidEmail: 'Ungültiges E-Mail-Format',
      emailRequired: 'E-Mail-Adresse ist erforderlich',
      confirmationRequired: 'Sie müssen bestätigen, dass Sie verstehen, dass die Löschung dauerhaft ist'
    },
    IT: {
      title: 'Richiesta di Cancellazione Account e Dati',
      subtitle: 'Richiedi la cancellazione permanente del tuo account TuggiDrive e di tutti i dati associati',
      whatWillBeDeleted: 'Quali Dati Saranno Cancellati',
      whatWillBeDeletedDesc: 'Quando richiedi la cancellazione dell\'account, rimuoveremo permanentemente:',
      dataList: [
        'Il tuo profilo utente e le informazioni dell\'account',
        'Tutti i percorsi salvati e la cronologia dei viaggi',
        'Le tue preferenze e impostazioni dell\'app',
        'Tutte le sessioni di viaggio e la cronologia di riproduzione delle attrazioni',
        'Eventuali file audio nella cache e contenuti generati dall\'utente',
        'Tutti i dati analitici associati al tuo account'
      ],
      importantNotice: 'Avviso Importante',
      importantNoticeDesc: 'La cancellazione dell\'account è permanente e irreversibile. Una volta elaborata, non potrai recuperare il tuo account, i percorsi o qualsiasi altro dato. Assicurati di aver eseguito il backup di tutte le informazioni che desideri conservare prima di procedere.',
      deletionRequestForm: 'Modulo di Richiesta Cancellazione',
      emailLabel: 'Indirizzo Email Associato al Tuo Account *',
      emailPlaceholder: 'Inserisci l\'indirizzo email che hai usato per iscriverti',
      reasonLabel: 'Motivo della Cancellazione (Opzionale)',
      reasonPlaceholder: 'Per favore facci sapere perché stai cancellando il tuo account. Questo ci aiuta a migliorare il nostro servizio.',
      confirmText: 'Capisco che questa azione è permanente e irreversibile. Confermo di voler cancellare permanentemente il mio account TuggiDrive e tutti i dati associati.',
      cancelButton: 'Annulla',
      submitButton: 'Richiedi Cancellazione Account',
      submittingButton: 'Elaborazione...',
      successTitle: '✅ Richiesta di Cancellazione Inviata',
      successMessage: 'La tua richiesta di cancellazione dell\'account è stata ricevuta. Elaboreremo la tua richiesta entro 30 giorni e ti invieremo un\'email di conferma una volta completata.',
      errorTitle: '❌ Richiesta Fallita',
      errorMessage: 'Si è verificato un errore durante l\'elaborazione della tua richiesta. Riprova o contatta il nostro team di supporto.',
      needHelp: 'Hai Bisogno di Aiuto?',
      supportEmail: 'Email:',
      responseTime: 'Tempo di Risposta:',
      responseTimeDesc: 'Rispondiamo tipicamente entro 24-48 ore',
      supportDesc: 'Se hai domande sulla cancellazione dei dati o hai bisogno di assistenza, non esitare a contattarci.',
      invalidEmail: 'Formato email non valido',
      emailRequired: 'L\'indirizzo email è obbligatorio',
      confirmationRequired: 'Devi confermare di aver compreso che la cancellazione è permanente'
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

      try {
        await response.json();
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
            <TuggiLogo className="w-16 h-16" language={currentLanguage} />
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
