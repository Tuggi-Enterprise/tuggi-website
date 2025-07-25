import React from 'react';
import { layout } from '../utils/designSystem';

interface TermsOfUsePageProps {
  currentLanguage?: string;
}

const TermsOfUsePage: React.FC<TermsOfUsePageProps> = ({ currentLanguage = 'PT' }) => {
  // Get localized content based on current language
  const getContent = () => {
    const content: Record<string, any> = {
      PT: {
        title: 'Termos de Uso',
        lastUpdated: 'Última atualização: Julho 2025',
        introduction: 'Estes Termos de Uso descrevem as condições para uso do aplicativo Tuggi (Tuggi Drive e Tuggi Walk) e do site oficial tuggi.app. Ao utilizar nossos serviços, você concorda com os termos descritos abaixo.',
        sections: [
          {
            title: '1. Finalidade do aplicativo',
            content: `O Tuggi é um copiloto cultural que fornece orientações em áudio sobre pontos de interesse (POIs) baseados na sua localização.

• As narrações são acionadas automaticamente conforme você se move
• O app funciona em segundo plano e pode operar durante deslocamentos
• A cobertura geográfica varia por região`
          },
          {
            title: '2. Responsabilidades do usuário',
            subsections: [
              {
                subtitle: 'Segurança durante o uso',
                content: `• Nunca interaja com o app enquanto dirige
• Mantenha atenção total à via
• Respeite as leis de trânsito locais`
              },
              {
                subtitle: 'Conta e login',
                content: `• Proteja suas credenciais de acesso
• Não compartilhe sua conta com terceiros
• Ative autenticação biométrica se disponível
• Avise imediatamente em caso de acesso indevido`
              }
            ]
          },
          {
            title: '3. Permissões e coleta de dados',
            subsections: [
              {
                subtitle: 'Permissões obrigatórias',
                content: `• **Localização** (em 1º e 2º plano): usada para detectar sua posição e acionar os áudios
• **Áudio**: necessária para reprodução das narrações`
              },
              {
                subtitle: 'Permissões opcionais',
                content: `• **Notificações**: para alertas sobre passeios e atualizações
• **Biometria**: para login mais seguro
• **Câmera** (futuramente): para foto de perfil

> Consulte também nossa [Política de Privacidade](/privacy) para saber como tratamos seus dados.`
              }
            ]
          },
          {
            title: '4. Limitações de serviço',
            content: `• É necessário dispositivo com GPS e acesso à internet na instalação
• O app requer cerca de 50MB de espaço livre para cache de áudios
• Compatível com iOS 12+ e Android 5.0+
• A cobertura de POIs pode ser limitada em algumas regiões`
          },
          {
            title: '5. Condições de uso',
            content: `• Use o app apenas para os fins previstos
• Não é permitido modificar, distribuir ou descompilar o aplicativo
• É proibido utilizar o app para atividades ilegais ou comerciais sem autorização`
          },
          {
            title: '6. Propriedade intelectual',
            content: `• As narrações e conteúdos do app são protegidos por direitos autorais
• A marca Tuggi, logotipos e elementos visuais são de propriedade da empresa
• O usuário mantém os direitos sobre seu feedback, mas autoriza seu uso interno para melhorias`
          },
          {
            title: '7. Limitação de responsabilidade',
            content: `• O app é fornecido "como está", sem garantias de funcionamento ininterrupto
• A precisão da localização depende de condições externas (GPS, sinal, aparelho)
• As informações narradas podem não refletir dados atualizados ou completos
• O app não substitui sistemas de navegação`
          },
          {
            title: '8. Suspensão ou encerramento de conta',
            content: `• O usuário pode encerrar sua conta a qualquer momento
• A Tuggi pode suspender o acesso em caso de violação dos termos
• Alguns dados podem ser mantidos conforme obrigações legais`
          },
          {
            title: '9. Atualizações nos termos',
            content: `Estes termos podem ser atualizados periodicamente.
Mudanças relevantes serão comunicadas pelo app ou por e-mail.
Ao continuar utilizando nossos serviços, você concorda com as alterações.`
          },
          {
            title: '10. Contato',
            content: `Em caso de dúvidas, entre em contato pelo e-mail:
**contato@tuggi.app**`
          }
        ]
      },
      EN: {
        title: 'Terms of Use',
        lastUpdated: 'Last updated: July 2025',
        introduction: 'These Terms of Use describe the conditions for using the Tuggi application (Tuggi Drive and Tuggi Walk) and the official website tuggi.app. By using our services, you agree to the terms described below.',
        sections: [
          {
            title: '1. App Purpose',
            content: `Tuggi is a cultural copilot that provides audio guidance about points of interest (POIs) based on your location.

• Narrations are automatically triggered as you move
• The app works in the background and can operate during travel
• Geographic coverage varies by region`
          },
          {
            title: '2. User Responsibilities',
            subsections: [
              {
                subtitle: 'Safety during use',
                content: `• Never interact with the app while driving
• Maintain full attention to the road
• Respect local traffic laws`
              },
              {
                subtitle: 'Account and login',
                content: `• Protect your access credentials
• Do not share your account with third parties
• Enable biometric authentication if available
• Report unauthorized access immediately`
              }
            ]
          },
          {
            title: '3. Permissions and Data Collection',
            subsections: [
              {
                subtitle: 'Required permissions',
                content: `• **Location** (1st and 2nd plan): used to detect your position and trigger audio
• **Audio**: necessary for narration playback`
              },
              {
                subtitle: 'Optional permissions',
                content: `• **Notifications**: for tour alerts and updates
• **Biometrics**: for more secure login
• **Camera** (future): for profile photo

> Also consult our [Privacy Policy](/privacy) to learn how we handle your data.`
              }
            ]
          },
          {
            title: '4. Service Limitations',
            content: `• Device with GPS and internet access required for installation
• App requires approximately 50MB of free space for audio cache
• Compatible with iOS 12+ and Android 5.0+
• POI coverage may be limited in some regions`
          },
          {
            title: '5. Terms of Use',
            content: `• Use the app only for intended purposes
• Modifying, distributing, or decompiling the application is not permitted
• Using the app for illegal or commercial activities without authorization is prohibited`
          },
          {
            title: '6. Intellectual Property',
            content: `• App narrations and content are protected by copyright
• Tuggi brand, logos, and visual elements are company property
• User retains rights to their feedback but authorizes internal use for improvements`
          },
          {
            title: '7. Limitation of Liability',
            content: `• App is provided "as is" without guarantees of uninterrupted operation
• Location accuracy depends on external conditions (GPS, signal, device)
• Narrated information may not reflect updated or complete data
• App does not replace navigation systems`
          },
          {
            title: '8. Account Suspension or Termination',
            content: `• User may terminate their account at any time
• Tuggi may suspend access in case of terms violation
• Some data may be retained according to legal obligations`
          },
          {
            title: '9. Terms Updates',
            content: `These terms may be updated periodically.
Relevant changes will be communicated through the app or by email.
By continuing to use our services, you agree to the changes.`
          },
          {
            title: '10. Contact',
            content: `For questions, contact us by email:
**contato@tuggi.app**`
          }
        ]
      },
      ES: {
        title: 'Términos de Uso',
        lastUpdated: 'Última actualización: Julio 2025',
        introduction: 'Estos Términos de Uso describen las condiciones para el uso de la aplicación Tuggi (Tuggi Drive y Tuggi Walk) y el sitio web oficial tuggi.app. Al utilizar nuestros servicios, aceptas los términos descritos a continuación.',
        sections: [
          {
            title: '1. Propósito de la aplicación',
            content: `Tuggi es un copiloto cultural que proporciona orientación en audio sobre puntos de interés (POIs) basados en tu ubicación.

• Las narraciones se activan automáticamente mientras te mueves
• La app funciona en segundo plano y puede operar durante desplazamientos
• La cobertura geográfica varía por región`
          },
          {
            title: '2. Responsabilidades del usuario',
            subsections: [
              {
                subtitle: 'Seguridad durante el uso',
                content: `• Nunca interactúes con la app mientras conduces
• Mantén atención total a la vía
• Respeta las leyes de tránsito locales`
              },
              {
                subtitle: 'Cuenta y login',
                content: `• Protege tus credenciales de acceso
• No compartas tu cuenta con terceros
• Activa autenticación biométrica si está disponible
• Avisa inmediatamente en caso de acceso indebido`
              }
            ]
          },
          {
            title: '3. Permisos y recolección de datos',
            subsections: [
              {
                subtitle: 'Permisos obligatorios',
                content: `• **Ubicación** (en 1º y 2º plano): usada para detectar tu posición y activar los audios
• **Audio**: necesaria para reproducción de las narraciones`
              },
              {
                subtitle: 'Permisos opcionales',
                content: `• **Notificaciones**: para alertas sobre paseos y actualizaciones
• **Biometría**: para login más seguro
• **Cámara** (futuramente): para foto de perfil

> Consulta también nuestra [Política de Privacidad](/privacy) para saber cómo tratamos tus datos.`
              }
            ]
          },
          {
            title: '4. Limitaciones de servicio',
            content: `• Es necesario dispositivo con GPS y acceso a internet en la instalación
• La app requiere cerca de 50MB de espacio libre para cache de audios
• Compatible con iOS 12+ y Android 5.0+
• La cobertura de POIs puede ser limitada en algunas regiones`
          },
          {
            title: '5. Condiciones de uso',
            content: `• Usa la app solo para los fines previstos
• No está permitido modificar, distribuir o descompilar la aplicación
• Está prohibido utilizar la app para actividades ilegales o comerciales sin autorización`
          },
          {
            title: '6. Propiedad intelectual',
            content: `• Las narraciones y contenidos de la app están protegidos por derechos de autor
• La marca Tuggi, logotipos y elementos visuales son de propiedad de la empresa
• El usuario mantiene los derechos sobre su feedback, pero autoriza su uso interno para mejoras`
          },
          {
            title: '7. Limitación de responsabilidad',
            content: `• La app se proporciona "tal como está", sin garantías de funcionamiento ininterrumpido
• La precisión de la ubicación depende de condiciones externas (GPS, señal, aparato)
• Las informaciones narradas pueden no reflejar datos actualizados o completos
• La app no sustituye sistemas de navegación`
          },
          {
            title: '8. Suspensión o terminación de cuenta',
            content: `• El usuario puede terminar su cuenta en cualquier momento
• Tuggi puede suspender el acceso en caso de violación de los términos
• Algunos datos pueden ser mantenidos conforme obligaciones legales`
          },
          {
            title: '9. Actualizaciones en los términos',
            content: `Estos términos pueden ser actualizados periódicamente.
Cambios relevantes serán comunicados por la app o por email.
Al continuar utilizando nuestros servicios, aceptas las alteraciones.`
          },
          {
            title: '10. Contacto',
            content: `En caso de dudas, entra en contacto por email:
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

export default TermsOfUsePage; 