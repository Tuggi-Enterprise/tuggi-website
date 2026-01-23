import React from 'react';
import { Mail, ArrowRight, Globe, TrendingUp } from 'lucide-react';
import FinalCTASection from '../components/sections/FinalCTASection';
import { 
  getButtonClasses, 
  getCardClasses, 
  layout,
  gradients
} from '../utils/designSystem';

interface ContactPageProps {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, language: string) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ 
  currentLanguage = 'PT',
  onCTAClick 
}) => {
  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      PT: {
        hero: {
          title: 'Entre em contato',
          subtitle: 'Sugestões, suporte e parcerias — fale com a Tuggi.'
        },
        email: {
          title: 'Canal oficial por e-mail:',
          address: 'contato@tuggi.app',
          note: 'Este é nosso canal oficial. Para agilizar, envie seu e-mail com um dos assuntos abaixo:',
          subjects: [
            'SUPORTE — [seu tema]',
            'PARCERIA — [empresa/ideia]',
            'IMPRENSA/INV — [nome]'
          ],
          footer: 'No momento, atendemos por e-mail.'
        },
        expansion: {
          title: 'Quer sugerir sua cidade?',
          description: 'Envie sua cidade, idioma e tipo de uso (motorista de app ou uso pessoal).',
          button: 'Enviar sugestão por e-mail',
          link: 'mailto:contato@tuggi.app?subject=Sugest%C3%A3o%20de%20cidade%20-%20Tuggi'
        },
        investors: {
          title: 'Investidores e aceleradoras',
          description: 'Informações e canal dedicado.',
          button: 'Ir para a página de investidores',
          link: '/investors'
        }
      },
      EN: {
        hero: {
          title: 'Get in touch',
          subtitle: 'We want to hear your ideas, suggestions, and potential partnerships.'
        },
        email: {
          title: 'If you want to talk to the Tuggi team, send an email directly to:',
          address: 'contato@tuggi.app',
          note: 'Currently, we do not use contact forms or phone support. We respond to emails periodically, according to team availability.'
        },
        expansion: {
          title: 'Want to see Tuggi in your city?',
          description: 'We are expanding gradually. If you would like to have Tuggi mapping your region, language, or country, participate in our interest survey.',
          button: 'Fill out interest form',
          note: '(Link will be added once the official form is available)'
        },
        investors: {
          title: 'Are you an investor or represent an accelerator?',
          description: 'We have a dedicated page with information about our purpose, current stage, and direct contact channel for investors.',
          button: 'Go to investors page',
          link: '/investors'
        }
      },
      ES: {
        hero: {
          title: 'Ponte en contacto',
          subtitle: 'Queremos escuchar tus ideas, sugerencias y posibles asociaciones.'
        },
        email: {
          title: 'Si quieres hablar con el equipo de Tuggi, envía un email directamente a:',
          address: 'contato@tuggi.app',
          note: 'Actualmente, no utilizamos formularios de contacto ni atención telefónica. Respondemos los emails periódicamente, según la disponibilidad del equipo.'
        },
        expansion: {
          title: '¿Quieres ver Tuggi en tu ciudad?',
          description: 'Estamos expandiéndonos gradualmente. Si te gustaría tener Tuggi mapeando tu región, idioma o país, participa en nuestra encuesta de interés.',
          button: 'Llenar formulario de interés',
          note: '(El enlace se agregará una vez que el formulario oficial esté disponible)'
        },
        investors: {
          title: '¿Eres inversor o representas una aceleradora?',
          description: 'Tenemos una página dedicada con información sobre nuestro propósito, etapa actual y canal de contacto directo para inversores.',
          button: 'Ir a la página de inversores',
          link: '/investors'
        }
      },
      FR: {
        hero: {
          title: 'Contactez-nous',
          subtitle: 'Nous voulons entendre vos idées, suggestions et partenariats potentiels.'
        },
        email: {
          title: 'Si vous souhaitez parler à l\'équipe Tuggi, envoyez un email directement à :',
          address: 'contato@tuggi.app',
          note: 'Actuellement, nous n\'utilisons pas de formulaires de contact ni d\'assistance téléphonique. Nous répondons aux emails périodiquement, selon la disponibilité de l\'équipe.'
        },
        expansion: {
          title: 'Vous voulez voir Tuggi dans votre ville ?',
          description: 'Nous nous développons progressivement. Si vous souhaitez que Tuggi cartographie votre région, langue ou pays, participez à notre enquête d\'intérêt.',
          button: 'Remplir le formulaire d\'intérêt',
          note: '(Le lien sera ajouté une fois le formulaire officiel disponible)'
        },
        investors: {
          title: 'Vous êtes investisseur ou représentez un accélérateur ?',
          description: 'Nous avons une page dédiée avec des informations sur notre raison d\'être, notre stade actuel et un canal de contact direct pour les investisseurs.',
          button: 'Aller à la page investisseurs',
          link: '/investors'
        }
      },
      DE: {
        hero: {
          title: 'Kontaktieren Sie uns',
          subtitle: 'Wir möchten Ihre Ideen, Vorschläge und potenziellen Partnerschaften hören.'
        },
        email: {
          title: 'Wenn Sie mit dem Tuggi-Team sprechen möchten, senden Sie eine E-Mail direkt an:',
          address: 'contato@tuggi.app',
          note: 'Derzeit verwenden wir keine Kontaktformulare oder telefonischen Support. Wir beantworten E-Mails regelmäßig, je nach Verfügbarkeit des Teams.'
        },
        expansion: {
          title: 'Möchten Sie Tuggi in Ihrer Stadt sehen?',
          description: 'Wir expandieren schrittweise. Wenn Sie möchten, dass Tuggi Ihre Region, Sprache oder Ihr Land kartiert, nehmen Sie an unserer Interessenumfrage teil.',
          button: 'Interessenformular ausfüllen',
          note: '(Link wird hinzugefügt, sobald das offizielle Formular verfügbar ist)'
        },
        investors: {
          title: 'Sind Sie Investor oder vertreten Sie einen Accelerator?',
          description: 'Wir haben eine spezielle Seite mit Informationen über unseren Zweck, das aktuelle Stadium und einen direkten Kontaktkanal für Investoren.',
          button: 'Zur Investorenseite gehen',
          link: '/investors'
        }
      },
      IT: {
        hero: {
          title: 'Mettiti in contatto',
          subtitle: 'Vogliamo ascoltare le tue idee, suggerimenti e potenziali partnership.'
        },
        email: {
          title: 'Se vuoi parlare con il team di Tuggi, invia un\'email direttamente a:',
          address: 'contato@tuggi.app',
          note: 'Attualmente non utilizziamo moduli di contatto o supporto telefonico. Rispondiamo alle email periodicamente, in base alla disponibilità del team.'
        },
        expansion: {
          title: 'Vuoi vedere Tuggi nella tua città?',
          description: 'Ci stiamo espandendo gradualmente. Se ti piacerebbe avere Tuggi che mappa la tua regione, lingua o paese, partecipa al nostro sondaggio di interesse.',
          button: 'Compila il modulo di interesse',
          note: '(Il link verrà aggiunto una volta disponibile il modulo ufficiale)'
        },
        investors: {
          title: 'Sei un investitore o rappresenti un acceleratore?',
          description: 'Abbiamo una pagina dedicata con informazioni sul nostro scopo, stadio attuale e canale di contatto diretto per gli investitori.',
          button: 'Vai alla pagina investitori',
          link: '/investors'
        }
      }
    };
    return content[language] || content['PT'];
  };

  const content = getLocalizedContent(currentLanguage);

  const handleCTAClick = (ctaType: string) => {
    onCTAClick?.(ctaType, currentLanguage);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Aligned with other pages */}
      <section 
        className={`${layout.section.hero} relative overflow-hidden`}
        style={{ background: gradients.hero }}
      >
        {/* Enhanced Background Elements */}
        <div className="absolute top-8 left-8 w-24 h-24 bg-tuggi-primary/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-8 right-8 w-20 h-20 bg-tuggi-secondary/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-tuggi-primary/6 rounded-full blur-2xl"></div>
        
        <div className={`${layout.container.narrow} relative`}>
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              {content.hero.title}
            </h1>
            <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed max-w-3xl mx-auto">
              {content.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section - Proper spacing and layout */}
      <section className={`${layout.section.base} relative overflow-hidden`}>
        {/* Enhanced Background Elements */}
        <div className="absolute top-8 right-8 w-20 h-20 bg-tuggi-primary/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-8 left-8 w-24 h-24 bg-tuggi-secondary/6 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-tuggi-primary/4 rounded-full blur-2xl"></div>
        
        <div className={`${layout.container.wide} relative`}>
          {/* Email Contact - Enhanced prominence */}
          <div className="text-center mb-16">
            <div className="max-w-2xl mx-auto">
              <p className="text-lg sm:text-xl text-neutral-700 mb-8 leading-relaxed font-medium">
                {content.email.title}
              </p>
              
              {/* Enhanced Email Card */}
              <div 
                className={`${getCardClasses(true)} p-8 mb-10 relative overflow-hidden group`}
                style={{ background: 'linear-gradient(135deg, rgba(0, 168, 232, 0.08) 0%, rgba(255, 111, 0, 0.08) 100%)' }}
              >
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-tuggi-primary/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-tuggi-secondary/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                      style={{ background: gradients.ocean }}
                    >
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <a 
                    href={`mailto:${content.email.address}`}
                    onClick={() => handleCTAClick('email_contact')}
                    className="text-2xl sm:text-3xl font-bold text-tuggi-primary hover:text-tuggi-primary-dark transition-colors duration-300 break-all"
                  >
                    {content.email.address}
                  </a>
                </div>
              </div>
              
              <div className="text-left bg-neutral-50 rounded-2xl p-8 border border-neutral-100 mb-8">
                <p className="text-base text-neutral-600 mb-6 font-medium">
                  {content.email.note}
                </p>
                {content.email.subjects && (
                  <ul className="space-y-3">
                    {content.email.subjects.map((subject: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-3 text-neutral-700 bg-white p-3 rounded-xl border border-neutral-200/50 shadow-sm">
                        <div className="w-2 h-2 bg-tuggi-primary rounded-full"></div>
                        <span className="font-mono text-sm">{subject}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <p className="text-sm text-neutral-400 font-medium">
                {content.email.footer || content.email.note}
              </p>
            </div>
          </div>

          {/* Two Column Layout - Enhanced cards */}
          <div className={`${layout.grid['2']} gap-8 lg:gap-12`}>
            {/* City Expansion Section - Enhanced */}
            <div className={`${getCardClasses()} p-8 relative overflow-hidden group flex flex-col h-full`}>
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-tuggi-primary/5 rounded-full blur-3xl"></div>
              
              <div className="relative flex-grow">
                <div className="flex items-center justify-center mb-6">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center shadow-md"
                    style={{ background: gradients.aurora }}
                  >
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 text-center">
                  {content.expansion.title}
                </h2>
                <p className="text-base text-neutral-600 leading-relaxed mb-8 text-center">
                  {content.expansion.description}
                </p>
              </div>

              <div className="text-center mt-auto">
                <a 
                  href={content.expansion.link}
                  onClick={() => handleCTAClick('expansion_suggestion')}
                  className={`${getButtonClasses('primary', 'lg')} inline-flex items-center space-x-2`}
                >
                  <span>{content.expansion.button}</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Investors Section - Enhanced */}
            <div className={`${getCardClasses()} p-8 relative overflow-hidden group flex flex-col h-full`}>
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-tuggi-secondary/5 rounded-full blur-3xl"></div>
              
              <div className="relative flex-grow">
                <div className="flex items-center justify-center mb-6">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center shadow-md"
                    style={{ background: gradients.sunset }}
                  >
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 text-center">
                  {content.investors.title}
                </h2>
                <p className="text-base text-neutral-600 leading-relaxed mb-8 text-center">
                  {content.investors.description}
                </p>
              </div>

              <div className="text-center mt-auto">
                <button 
                  onClick={() => handleCTAClick('investors_page')}
                  className={`${getButtonClasses('primary', 'lg')} inline-flex items-center space-x-2`}
                >
                  <span>{content.investors.button}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <FinalCTASection 
        currentLanguage={currentLanguage}
        onCTAClick={handleCTAClick}
      />
    </div>
  );
};

export default ContactPage;