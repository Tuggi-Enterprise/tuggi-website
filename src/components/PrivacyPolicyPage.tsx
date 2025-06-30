import React from 'react';
import { Shield, Eye, Lock, Users, Globe, FileText, CheckCircle, Mail } from 'lucide-react';

interface PrivacyPolicyPageProps {
  currentLanguage?: string;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ currentLanguage = 'EN' }) => {
  // Get localized content based on current language
  const getContent = () => {
    const content: Record<string, any> = {
      EN: {
        title: 'Privacy Policy',
        lastUpdated: 'Last updated: June 2025',
        introduction: {
          title: 'Introduction',
          content: `At Tuggi, we respect your privacy. This Privacy Policy describes how we collect and use information from users of our products and services.

We are an early-stage startup committed to privacy best practices. This policy reflects our current data collection and usage, which is minimal and focused on delivering our core service.`
        },
        dataCollection: {
          title: 'Data We Collect',
          subtitle: 'We collect minimal information and only when necessary for app functionality:',
          categories: [
            {
              title: 'Location & Preferences',
              icon: Eye,
              items: [
                'Approximate location (to display nearby attractions)',
                'Language preference',
                'Device type and operating system version'
              ]
            },
            {
              title: 'Account Information (Optional)',
              icon: Users,
              items: [
                'Nickname (only if you create an account)',
                'Authentication data (via nickname or external provider)'
              ]
            }
          ]
        },
        dataUse: {
          title: 'How We Use Your Information',
          subtitle: 'We use your data only for:',
          purposes: [
            {
              title: 'Service Delivery',
              description: 'Display tourist attractions based on your location'
            },
            {
              title: 'User Experience',
              description: 'Improve the app experience and performance'
            },
            {
              title: 'Legal & Security',
              description: 'Comply with legal obligations and ensure security'
            }
          ]
        },
        dataSharing: {
          title: 'Data Sharing',
          content: `We do not sell or share your data with third parties for marketing purposes.

We may use services like Supabase or OpenAI with whom we maintain contractual relationships to protect your data.`
        },
        userRights: {
          title: 'Your Rights',
          subtitle: 'You can:',
          rights: [
            {
              title: 'Access',
              description: 'Request access to your data',
              icon: Eye
            },
            {
              title: 'Correction',
              description: 'Correct incorrect data',
              icon: FileText
            },
            {
              title: 'Deletion',
              description: 'Request deletion of your data',
              icon: Shield
            },
            {
              title: 'Account Closure',
              description: 'Close your account at any time',
              icon: Lock
            }
          ]
        },
        security: {
          title: 'Security',
          content: `We follow good data protection practices, but no online transmission is 100% secure. We cannot guarantee absolute security.`
        },
        contact: {
          title: 'Contact',
          content: `For questions or requests:
📧 hello@tuggi.app`
        },
        updates: {
          title: 'Updates',
          content: `We may update this policy. The last update date will always be shown.

Last updated: June 2025.`
        }
      },
      PT: {
        title: 'Política de Privacidade',
        lastUpdated: 'Última atualização: Junho de 2025',
        introduction: {
          title: 'Introdução',
          content: `Na Tuggi, respeitamos sua privacidade. Esta Política de Privacidade descreve como coletamos e usamos informações dos usuários de nossos produtos e serviços.

Somos uma startup em estágio inicial comprometida com as melhores práticas de privacidade. Esta política reflete nossa coleta e uso atual de dados, que é mínima e focada em entregar nosso serviço principal.`
        },
        dataCollection: {
          title: 'Dados Que Coletamos',
          subtitle: 'Coletamos informações mínimas e apenas quando necessário para funcionamento do app:',
          categories: [
            {
              title: 'Localização e Preferências',
              icon: Eye,
              items: [
                'Localização aproximada (para exibir atrações turísticas por proximidade)',
                'Preferência de idioma',
                'Dados técnicos do dispositivo (tipo, sistema operacional)'
              ]
            },
            {
              title: 'Informações da Conta (Opcional)',
              icon: Users,
              items: [
                'Nome ou apelido (apenas se você criar uma conta)',
                'Dados de autenticação (via nickname ou provedor externo)'
              ]
            }
          ]
        },
        dataUse: {
          title: 'Como Usamos Seus Dados',
          subtitle: 'Utilizamos os dados apenas para:',
          purposes: [
            {
              title: 'Entrega do Serviço',
              description: 'Apresentar informações turísticas baseadas na localização'
            },
            {
              title: 'Experiência do Usuário',
              description: 'Melhorar a experiência do usuário e performance do app'
            },
            {
              title: 'Legal e Segurança',
              description: 'Cumprir obrigações legais e de segurança'
            }
          ]
        },
        dataSharing: {
          title: 'Compartilhamento de Dados',
          content: `Não vendemos ou compartilhamos dados com terceiros para fins de marketing.

Podemos usar serviços como Supabase ou OpenAI, com quem mantemos relação contratual para proteger seus dados.`
        },
        userRights: {
          title: 'Seus Direitos',
          subtitle: 'Você pode:',
          rights: [
            {
              title: 'Acesso',
              description: 'Solicitar acesso aos seus dados',
              icon: Eye
            },
            {
              title: 'Correção',
              description: 'Corrigir dados incorretos',
              icon: FileText
            },
            {
              title: 'Exclusão',
              description: 'Solicitar exclusão de seus dados',
              icon: Shield
            },
            {
              title: 'Encerramento',
              description: 'Encerrar sua conta a qualquer momento',
              icon: Lock
            }
          ]
        },
        security: {
          title: 'Segurança',
          content: `Seguimos boas práticas de proteção de dados, mas nenhuma transmissão online é 100% segura. Não podemos garantir segurança absoluta.`
        },
        contact: {
          title: 'Contato',
          content: `Para dúvidas ou solicitações:
📧 hello@tuggi.app`
        },
        updates: {
          title: 'Atualizações',
          content: `Podemos atualizar esta política. A data da última alteração será sempre informada.

Última atualização: Junho de 2025.`
        }
      },
      ES: {
        title: 'Política de Privacidad',
        lastUpdated: 'Última actualización: Junio de 2025',
        introduction: {
          title: 'Introducción',
          content: `En Tuggi, respetamos tu privacidad. Esta Política de Privacidad describe cómo recopilamos y utilizamos información de los usuarios de nuestros productos y servicios.

Somos una startup en etapa inicial comprometida con las mejores prácticas de privacidad. Esta política refleja nuestra recopilación y uso actual de datos, que es mínima y enfocada en entregar nuestro servicio principal.`
        },
        dataCollection: {
          title: 'Datos Que Recopilamos',
          subtitle: 'Recopilamos información mínima y solo cuando es necesario para el funcionamiento de la app:',
          categories: [
            {
              title: 'Ubicación y Preferencias',
              icon: Eye,
              items: [
                'Ubicación aproximada (para mostrar atracciones turísticas cercanas)',
                'Preferencia de idioma',
                'Datos técnicos del dispositivo (tipo, sistema operativo)'
              ]
            },
            {
              title: 'Información de Cuenta (Opcional)',
              icon: Users,
              items: [
                'Nombre o apodo (solo si creas una cuenta)',
                'Datos de autenticación (vía nickname o proveedor externo)'
              ]
            }
          ]
        },
        dataUse: {
          title: 'Cómo Utilizamos Tu Información',
          subtitle: 'Utilizamos los datos solo para:',
          purposes: [
            {
              title: 'Entrega del Servicio',
              description: 'Mostrar información turística basada en la ubicación'
            },
            {
              title: 'Experiencia del Usuario',
              description: 'Mejorar la experiencia del usuario y rendimiento de la app'
            },
            {
              title: 'Legal y Seguridad',
              description: 'Cumplir obligaciones legales y de seguridad'
            }
          ]
        },
        dataSharing: {
          title: 'Compartir Datos',
          content: `No vendemos ni compartimos tus datos con terceros para fines de marketing.

Podemos usar servicios como Supabase o OpenAI, con quienes mantenemos relaciones contractuales para proteger tus datos.`
        },
        userRights: {
          title: 'Tus Derechos',
          subtitle: 'Puedes:',
          rights: [
            {
              title: 'Acceso',
              description: 'Solicitar acceso a tus datos',
              icon: Eye
            },
            {
              title: 'Corrección',
              description: 'Corregir datos incorrectos',
              icon: FileText
            },
            {
              title: 'Eliminación',
              description: 'Solicitar eliminación de tus datos',
              icon: Shield
            },
            {
              title: 'Cierre de Cuenta',
              description: 'Cerrar tu cuenta en cualquier momento',
              icon: Lock
            }
          ]
        },
        security: {
          title: 'Seguridad',
          content: `Seguimos buenas prácticas de protección de datos, pero ninguna transmisión en línea es 100% segura. No podemos garantizar seguridad absoluta.`
        },
        contact: {
          title: 'Contacto',
          content: `Para preguntas o solicitudes:
📧 hello@tuggi.app`
        },
        updates: {
          title: 'Actualizaciones',
          content: `Podemos actualizar esta política. La fecha de última actualización siempre será mostrada.

Última actualización: Junio de 2025.`
        }
      }
    };

    return content[currentLanguage] || content['EN'];
  };

  const content = getContent();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-neutral-50 via-white to-tuggi-primary/5 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-tuggi-primary/10 rounded-full mb-6">
              <Shield className="w-5 h-5 text-tuggi-primary mr-2" />
              <span className="text-tuggi-primary font-semibold text-sm">Privacy Policy</span>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-6">
              {content.title}
            </h1>
            
            <p className="text-lg text-neutral-600">{content.lastUpdated}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6 flex items-center">
                <FileText className="w-8 h-8 text-tuggi-primary mr-3" />
                {content.introduction.title}
              </h2>
              <div className="bg-tuggi-primary/5 border-l-4 border-tuggi-primary p-6 rounded-r-lg">
                <p className="text-neutral-700 leading-relaxed whitespace-pre-line">
                  {content.introduction.content}
                </p>
              </div>
            </div>

            {/* Data Collection */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6">
                {content.dataCollection.title}
              </h2>
              <p className="text-neutral-600 mb-8">{content.dataCollection.subtitle}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.dataCollection.categories.map((category: any, index: number) => (
                  <div key={index} className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-tuggi-primary/10 rounded-xl flex items-center justify-center mr-4">
                        <category.icon className="w-6 h-6 text-tuggi-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900">{category.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {category.items.map((item: string, itemIndex: number) => (
                        <li key={itemIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-tuggi-primary mt-1 mr-2 flex-shrink-0" />
                          <span className="text-neutral-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Use */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6">
                {content.dataUse.title}
              </h2>
              <p className="text-neutral-600 mb-8">{content.dataUse.subtitle}</p>
              
              <div className="space-y-4">
                {content.dataUse.purposes.map((purpose: any, index: number) => (
                  <div key={index} className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">{purpose.title}</h3>
                    <p className="text-neutral-700">{purpose.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6">
                {content.dataSharing.title}
              </h2>
              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                <p className="text-neutral-700 leading-relaxed whitespace-pre-line">
                  {content.dataSharing.content}
                </p>
              </div>
            </div>

            {/* User Rights */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6">
                {content.userRights.title}
              </h2>
              <p className="text-neutral-600 mb-8">{content.userRights.subtitle}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {content.userRights.rights.map((right: any, index: number) => (
                  <div key={index} className="bg-white border border-neutral-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                    <div className="w-16 h-16 bg-tuggi-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <right.icon className="w-8 h-8 text-tuggi-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-3">{right.title}</h3>
                    <p className="text-neutral-700 text-sm">{right.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Security */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6 flex items-center">
                <Lock className="w-8 h-8 text-tuggi-primary mr-3" />
                {content.security.title}
              </h2>
              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                <p className="text-neutral-700 leading-relaxed">
                  {content.security.content}
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6 flex items-center">
                <Mail className="w-8 h-8 text-tuggi-primary mr-3" />
                {content.contact.title}
              </h2>
              <div className="bg-tuggi-primary/5 border border-tuggi-primary/20 rounded-xl p-6">
                <p className="text-neutral-700 leading-relaxed whitespace-pre-line">
                  {content.contact.content}
                </p>
              </div>
            </div>

            {/* Updates */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6 flex items-center">
                <Globe className="w-8 h-8 text-tuggi-primary mr-3" />
                {content.updates.title}
              </h2>
              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                <p className="text-neutral-700 leading-relaxed whitespace-pre-line">
                  {content.updates.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-tuggi-primary/5 to-tuggi-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6">
            Questions About Your Privacy?
          </h2>
          <p className="text-xl text-neutral-600 mb-8">
            Contact us for any questions or concerns about your data.
          </p>
          <a
            href="mailto:hello@tuggi.app"
            className="bg-tuggi-primary hover:bg-tuggi-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center space-x-2"
          >
            <Mail className="w-5 h-5" />
            <span>Contact Us</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;