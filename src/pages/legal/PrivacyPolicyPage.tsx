import React from 'react';
import { layout } from '../../utils/designSystem';

interface PrivacyPolicyPageProps {
  currentLanguage?: string;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ currentLanguage = 'PT' }) => {
  // Get localized content based on current language
  const getContent = () => {
    const content: Record<string, any> = {
      PT: {
        title: 'Política de Privacidade',
        lastUpdated: 'Última atualização: Julho 2025',
        introduction: 'Esta Política de Privacidade descreve como o aplicativo Tuggi (Tuggi Drive e Tuggi Walk) e o site tuggi.app coletam, utilizam e protegem os dados dos usuários.',
        sections: [
          {
            title: '1. Informações que coletamos',
            subsections: [
              {
                subtitle: 'a) Informações da conta',
                content: `• E-mail (obrigatório, para login)
• Nome completo (opcional, para personalização)
• Apelido (opcional, para exibição no app)
• Número de telefone (opcional, para recuperação de conta)
• Foto de perfil (opcional)`
              },
              {
                subtitle: 'b) Dados de localização',
                content: `• Localização em tempo real durante o uso do app
• Rastreio em segundo plano durante sessões de navegação
• Histórico de rotas e pontos visitados
• Ruas, bairros e regiões acessadas para contexto cultural`
              },
              {
                subtitle: 'c) Informações do dispositivo',
                content: `• Modelo do aparelho e sistema operacional
• Versão do app
• Identificadores anônimos para análise (Firebase, Mixpanel)`
              },
              {
                subtitle: 'd) Dados de uso',
                content: `• Eventos no app (login, início/fim de trajeto, reprodução de áudios)
• Duração e frequência de sessões
• Interações com recursos do app
• Feedbacks enviados sobre pontos de interesse`
              },
              {
                subtitle: 'e) Dados de áudio',
                content: `• Áudios cacheados localmente para reprodução offline
• Estatísticas de reprodução (duração, sucesso/falha)
• Comandos de voz (quando usados, não armazenados)`
              }
            ]
          },
          {
            title: '2. Como usamos seus dados',
            subsections: [
              {
                subtitle: 'Para funcionamento do app',
                content: `• Ativar narrações automáticas por localização
• Permitir navegação contextual e em segundo plano
• Oferecer conteúdos personalizados durante a jornada`
              },
              {
                subtitle: 'Para melhorar o serviço',
                content: `• Analisar uso do app e comportamento dos usuários
• Aprimorar o sistema de localização e ativação de pontos
• Otimizar cache de áudio e performance geral`
              },
              {
                subtitle: 'Para suporte e experiência',
                content: `• Personalizar a interface com apelidos e fotos
• Enviar notificações sobre atrações próximas
• Atender solicitações e dúvidas de usuários`
              }
            ]
          },
          {
            title: '3. Onde seus dados são armazenados',
            content: `• Supabase: dados da conta e localização (com segurança e RLS)
• Firebase / Mixpanel: dados analíticos e eventos de uso
• Dispositivo do usuário: cache local de áudios e dados temporários
• Biometria (se ativada): armazenada no sistema de segurança do dispositivo (keychain/secure enclave)`
          },
          {
            title: '4. Compartilhamento de dados',
            content: `• **Não vendemos nem compartilhamos seus dados com terceiros**
• Dados são utilizados apenas para operação e melhoria do serviço`
          },
          {
            title: '5. Permissões solicitadas',
            content: `• **Localização (obrigatória)** – para detectar sua posição e acionar áudios
• **Áudio (obrigatória)** – para reprodução das narrações
• **Notificações (opcional)** – para alertas sobre atrações
• **Biometria (opcional)** – para login mais seguro
• **Câmera (futuro)** – para foto de perfil, se desejado`
          },
          {
            title: '6. Seus direitos',
            content: `Você pode a qualquer momento:

• Solicitar remoção da conta e dos dados associados
• Desativar permissões no seu dispositivo
• Corrigir informações pessoais em seu perfil
• Solicitar informações sobre os dados armazenados

Para isso, entre em contato:
**contato@tuggi.app**`
          },
          {
            title: '7. Segurança',
            content: `Adotamos práticas modernas de segurança, incluindo:

• Criptografia de dados em trânsito
• Acesso restrito com autenticação segura
• Armazenamento seguro com controle de acesso (Supabase RLS)`
          },
          {
            title: '8. Atualizações nesta política',
            content: `Podemos atualizar esta Política periodicamente.
Mudanças relevantes serão comunicadas pelo app ou e-mail.
Ao continuar usando o app, você concorda com os termos atualizados.`
          },
          {
            title: '9. Dúvidas',
            content: `Se você tiver qualquer dúvida sobre nossa Política de Privacidade, entre em contato:

**contato@tuggi.app**`
          }
        ]
      },
      EN: {
        title: 'Privacy Policy',
        lastUpdated: 'Last updated: July 2025',
        introduction: 'This Privacy Policy describes how the Tuggi application (Tuggi Drive and Tuggi Walk) and the tuggi.app website collect, use, and protect user data.',
        sections: [
          {
            title: '1. Information We Collect',
            subsections: [
              {
                subtitle: 'a) Account Information',
                content: `• Email (required, for login)
• Full name (optional, for personalization)
• Nickname (optional, for display in the app)
• Phone number (optional, for account recovery)
• Profile photo (optional)`
              },
              {
                subtitle: 'b) Location Data',
                content: `• Real-time location during app use
• Background tracking during navigation sessions
• Route history and visited points
• Streets, neighborhoods, and regions accessed for cultural context`
              },
              {
                subtitle: 'c) Device Information',
                content: `• Device model and operating system
• App version
• Anonymous identifiers for analytics (Firebase, Mixpanel)`
              },
              {
                subtitle: 'd) Usage Data',
                content: `• App events (login, route start/end, audio playback)
• Session duration and frequency
• Interactions with app features
• Feedback sent about points of interest`
              },
              {
                subtitle: 'e) Audio Data',
                content: `• Audio cached locally for offline playback
• Playback statistics (duration, success/failure)
• Voice commands (when used, not stored)`
              }
            ]
          },
          {
            title: '2. How We Use Your Data',
            subsections: [
              {
                subtitle: 'For App Functionality',
                content: `• Activate automatic narrations by location
• Enable contextual and background navigation
• Provide personalized content during the journey`
              },
              {
                subtitle: 'To Improve Service',
                content: `• Analyze app usage and user behavior
• Enhance location and point activation system
• Optimize audio cache and overall performance`
              },
              {
                subtitle: 'For Support and Experience',
                content: `• Personalize interface with nicknames and photos
• Send notifications about nearby attractions
• Handle user requests and questions`
              }
            ]
          },
          {
            title: '3. Where Your Data Is Stored',
            content: `• Supabase: account and location data (with security and RLS)
• Firebase / Mixpanel: analytics data and usage events
• User device: local cache of audio and temporary data
• Biometrics (if enabled): stored in device security system (keychain/secure enclave)`
          },
          {
            title: '4. Data Sharing',
            content: `• **We do not sell or share your data with third parties**
• Data is used only for service operation and improvement`
          },
          {
            title: '5. Requested Permissions',
            content: `• **Location (required)** – to detect your position and trigger audio
• **Audio (required)** – for narration playback
• **Notifications (optional)** – for attraction alerts
• **Biometrics (optional)** – for more secure login
• **Camera (future)** – for profile photo, if desired`
          },
          {
            title: '6. Your Rights',
            content: `You can at any time:

• Request removal of account and associated data
• Disable permissions on your device
• Correct personal information in your profile
• Request information about stored data

For this, contact us:
**contato@tuggi.app**`
          },
          {
            title: '7. Security',
            content: `We adopt modern security practices, including:

• Data encryption in transit
• Restricted access with secure authentication
• Secure storage with access control (Supabase RLS)`
          },
          {
            title: '8. Updates to This Policy',
            content: `We may update this Policy periodically.
Relevant changes will be communicated through the app or email.
By continuing to use the app, you agree to the updated terms.`
          },
          {
            title: '9. Questions',
            content: `If you have any questions about our Privacy Policy, contact us:

**contato@tuggi.app**`
          }
        ]
      },
      ES: {
        title: 'Política de Privacidad',
        lastUpdated: 'Última actualización: Julio 2025',
        introduction: 'Esta Política de Privacidad describe cómo la aplicación Tuggi (Tuggi Drive y Tuggi Walk) y el sitio web tuggi.app recopilan, utilizan y protegen los datos de los usuarios.',
        sections: [
          {
            title: '1. Información que recopilamos',
            subsections: [
              {
                subtitle: 'a) Información de la cuenta',
                content: `• Email (obligatorio, para login)
• Nombre completo (opcional, para personalización)
• Apodo (opcional, para mostrar en la app)
• Número de teléfono (opcional, para recuperación de cuenta)
• Foto de perfil (opcional)`
              },
              {
                subtitle: 'b) Datos de ubicación',
                content: `• Ubicación en tiempo real durante el uso de la app
• Seguimiento en segundo plano durante sesiones de navegación
• Historial de rutas y puntos visitados
• Calles, barrios y regiones accedidas para contexto cultural`
              },
              {
                subtitle: 'c) Información del dispositivo',
                content: `• Modelo del dispositivo y sistema operativo
• Versión de la app
• Identificadores anónimos para análisis (Firebase, Mixpanel)`
              },
              {
                subtitle: 'd) Datos de uso',
                content: `• Eventos en la app (login, inicio/fin de ruta, reproducción de audio)
• Duración y frecuencia de sesiones
• Interacciones con funciones de la app
• Comentarios enviados sobre puntos de interés`
              },
              {
                subtitle: 'e) Datos de audio',
                content: `• Audio almacenado localmente para reproducción offline
• Estadísticas de reproducción (duración, éxito/fallo)
• Comandos de voz (cuando se usan, no se almacenan)`
              }
            ]
          },
          {
            title: '2. Cómo utilizamos tus datos',
            subsections: [
              {
                subtitle: 'Para funcionamiento de la app',
                content: `• Activar narraciones automáticas por ubicación
• Permitir navegación contextual y en segundo plano
• Ofrecer contenido personalizado durante el viaje`
              },
              {
                subtitle: 'Para mejorar el servicio',
                content: `• Analizar uso de la app y comportamiento de usuarios
• Mejorar el sistema de ubicación y activación de puntos
• Optimizar caché de audio y rendimiento general`
              },
              {
                subtitle: 'Para soporte y experiencia',
                content: `• Personalizar la interfaz con apodos y fotos
• Enviar notificaciones sobre atracciones cercanas
• Atender solicitudes y dudas de usuarios`
              }
            ]
          },
          {
            title: '3. Dónde se almacenan tus datos',
            content: `• Supabase: datos de cuenta y ubicación (con seguridad y RLS)
• Firebase / Mixpanel: datos analíticos y eventos de uso
• Dispositivo del usuario: caché local de audio y datos temporales
• Biometría (si está activada): almacenada en el sistema de seguridad del dispositivo (keychain/secure enclave)`
          },
          {
            title: '4. Compartir datos',
            content: `• **No vendemos ni compartimos tus datos con terceros**
• Los datos se utilizan solo para operación y mejora del servicio`
          },
          {
            title: '5. Permisos solicitados',
            content: `• **Ubicación (obligatorio)** – para detectar tu posición y activar audio
• **Audio (obligatorio)** – para reproducción de narraciones
• **Notificaciones (opcional)** – para alertas sobre atracciones
• **Biometría (opcional)** – para login más seguro
• **Cámara (futuro)** – para foto de perfil, si se desea`
          },
          {
            title: '6. Tus derechos',
            content: `Puedes en cualquier momento:

• Solicitar eliminación de la cuenta y datos asociados
• Desactivar permisos en tu dispositivo
• Corregir información personal en tu perfil
• Solicitar información sobre datos almacenados

Para esto, contáctanos:
**contato@tuggi.app**`
          },
          {
            title: '7. Seguridad',
            content: `Adoptamos prácticas modernas de seguridad, incluyendo:

• Cifrado de datos en tránsito
• Acceso restringido con autenticación segura
• Almacenamiento seguro con control de acceso (Supabase RLS)`
          },
          {
            title: '8. Actualizaciones en esta política',
            content: `Podemos actualizar esta Política periódicamente.
Los cambios relevantes serán comunicados por la app o email.
Al continuar usando la app, aceptas los términos actualizados.`
          },
          {
            title: '9. Dudas',
            content: `Si tienes alguna duda sobre nuestra Política de Privacidad, contáctanos:

**contato@tuggi.app**`
          }
        ]
      }
    };

    return content[currentLanguage] || content['PT'];
  };

  const content = getContent();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className={`${layout.section.base} bg-white`}>
        <div className={layout.container.narrow}>
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              {content.title}
            </h1>
            <p className="text-lg text-neutral-600">{content.lastUpdated}</p>
          </div>
          
          <div className="mb-12">
            <p className="text-neutral-700 leading-relaxed text-lg">
              {content.introduction}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className={layout.section.base}>
        <div className={layout.container.narrow}>
          <div className="prose prose-lg max-w-none">
            {content.sections.map((section: any, index: number) => (
              <div key={index} className="mb-12">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                  {section.title}
                </h2>
                
                {section.subsections ? (
                  <div className="space-y-8">
                    {section.subsections.map((subsection: any, subIndex: number) => (
                      <div key={subIndex}>
                        <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                          {subsection.subtitle}
                        </h3>
                        <div className="text-neutral-700 leading-relaxed whitespace-pre-line">
                          {subsection.content}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-neutral-700 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;