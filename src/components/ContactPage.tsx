import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import FinalCTASection from './FinalCTASection';
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
          subtitle: 'Queremos ouvir suas ideias, sugestões e possíveis parcerias.'
        },
        email: {
          title: 'Se você deseja falar com a equipe da Tuggi, envie um e-mail diretamente para:',
          address: 'contato@tuggi.app',
          note: 'No momento, não utilizamos formulários de contato nem atendimento via telefone. Respondemos os e-mails periodicamente, de acordo com a disponibilidade da equipe.'
        },
        expansion: {
          title: '🌍 Quer ver a Tuggi na sua cidade?',
          description: 'Estamos expandindo gradualmente. Se você gostaria de ter a Tuggi mapeando a sua região, idioma ou país, participe da nossa pesquisa de interesse.',
          button: 'Preencher formulário de interesse',
          note: '(Link será adicionado assim que o formulário oficial estiver disponível)'
        },
        investors: {
          title: '📈 É investidor ou representa uma aceleradora?',
          description: 'Temos uma página dedicada com informações sobre nosso propósito, estágio atual e canal de contato direto para investidores.',
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
          title: '🌍 Want to see Tuggi in your city?',
          description: 'We are expanding gradually. If you would like to have Tuggi mapping your region, language, or country, participate in our interest survey.',
          button: 'Fill out interest form',
          note: '(Link will be added once the official form is available)'
        },
        investors: {
          title: '📈 Are you an investor or represent an accelerator?',
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
          title: '🌍 ¿Quieres ver Tuggi en tu ciudad?',
          description: 'Estamos expandiéndonos gradualmente. Si te gustaría tener Tuggi mapeando tu región, idioma o país, participa en nuestra encuesta de interés.',
          button: 'Llenar formulario de interés',
          note: '(El enlace se agregará una vez que el formulario oficial esté disponible)'
        },
        investors: {
          title: '📈 ¿Eres inversor o representas una aceleradora?',
          description: 'Tenemos una página dedicada con información sobre nuestro propósito, etapa actual y canal de contacto directo para inversores.',
          button: 'Ir a la página de inversores',
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className={`${layout.section.compact} pt-12 lg:pt-16 relative overflow-hidden`}
        style={{ background: gradients.hero }}
      >
        {/* Background Elements */}
        <div className="absolute top-4 left-4 w-16 h-16 bg-tuggi-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-4 right-4 w-12 h-12 bg-tuggi-secondary/5 rounded-full blur-3xl"></div>
        
        <div className={`${layout.container.narrow} relative`}>
          <div className="text-center mb-4">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-900 mb-3 leading-tight">
              {content.hero.title}
            </h1>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed max-w-2xl mx-auto">
              {content.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Ultra Compact Layout */}
      <section className={`${layout.section.compact} bg-white relative overflow-hidden`}>
        {/* Background Elements */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-tuggi-primary/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-tuggi-secondary/4 rounded-full blur-3xl"></div>
        
        <div className={`${layout.container.wide} relative`}>
          {/* Email Contact - Compact */}
          <div className="text-center mb-6">
            <p className="text-xs sm:text-sm text-neutral-700 mb-3 leading-relaxed">
              {content.email.title}
            </p>
            
            <div 
              className="rounded-lg p-3 lg:p-4 border border-tuggi-primary/20 mb-3"
              style={{ background: 'linear-gradient(to right, rgba(0, 168, 232, 0.1), rgba(255, 111, 0, 0.1))' }}
            >
              <div className="flex items-center justify-center space-x-2 mb-1">
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center shadow-sm"
                  style={{ background: gradients.ocean }}
                >
                  <Mail className="w-3 h-3 text-white" />
                </div>
              </div>
              <a 
                href={`mailto:${content.email.address}`}
                onClick={() => handleCTAClick('email_contact')}
                className="text-base lg:text-lg font-bold text-tuggi-primary hover:text-tuggi-primary-dark transition-colors duration-300 break-all"
              >
                {content.email.address}
              </a>
            </div>
            
            <p className="text-xs text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              {content.email.note}
            </p>
          </div>

          {/* Two Column Layout for Expansion and Investors */}
          <div className={`${layout.grid['2']} gap-4 lg:gap-6`}>
            {/* City Expansion Section */}
            <div 
              className="rounded-lg p-3 lg:p-4 border border-white/20 shadow-sm"
              style={{ background: gradients.subtle }}
            >
              <div className="text-center mb-3">
                <h2 className="text-sm sm:text-base font-bold text-neutral-900 mb-2">
                  {content.expansion.title}
                </h2>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-3">
                  {content.expansion.description}
                </p>
                
                <button 
                  onClick={() => handleCTAClick('expansion_form')}
                  className="bg-tuggi-primary hover:bg-tuggi-primary-dark text-white font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-tuggi-primary focus:ring-offset-2 px-3 py-1.5 text-xs rounded-lg inline-flex items-center space-x-1 group"
                >
                  <span>{content.expansion.button}</span>
                  <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                </button>
                <p className="text-xs text-neutral-500 italic">
                  {content.expansion.note}
                </p>
              </div>
            </div>

            {/* Investors Section */}
            <div 
              className="rounded-lg p-3 lg:p-4 border border-tuggi-primary/10"
              style={{ background: 'linear-gradient(to right, rgba(0, 168, 232, 0.05), rgba(255, 111, 0, 0.05))' }}
            >
              <div className="text-center mb-3">
                <h2 className="text-sm sm:text-base font-bold text-neutral-900 mb-2">
                  {content.investors.title}
                </h2>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-3">
                  {content.investors.description}
                </p>
                
                <button 
                  onClick={() => handleCTAClick('investors_page')}
                  className="bg-tuggi-primary hover:bg-tuggi-primary-dark text-white font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-tuggi-primary focus:ring-offset-2 px-3 py-1.5 text-xs rounded-lg inline-flex items-center space-x-1 group"
                >
                  <span>{content.investors.button}</span>
                  <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform duration-200" />
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