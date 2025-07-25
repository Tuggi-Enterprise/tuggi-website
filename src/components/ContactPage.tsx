import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, CheckCircle, AlertCircle, ArrowRight, Globe, TrendingUp, Users, Building2 } from 'lucide-react';
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
              <p className="text-lg sm:text-xl text-neutral-700 mb-8 leading-relaxed">
                {content.email.title}
              </p>
              
              {/* Enhanced Email Card */}
              <div 
                className={`${getCardClasses(true)} p-8 mb-8 relative overflow-hidden group`}
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
                    className="text-2xl sm:text-3xl font-bold text-tuggi-primary hover:text-tuggi-primary-dark transition-colors duration-300 break-all group-hover:scale-105 transform transition-transform duration-300"
                  >
                    {content.email.address}
                  </a>
                </div>
              </div>
              
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
                {content.email.note}
              </p>
            </div>
          </div>

          {/* Two Column Layout - Enhanced cards */}
          <div className={`${layout.grid['2']} gap-8 lg:gap-12`}>
            {/* City Expansion Section - Enhanced */}
            <div className={`${getCardClasses(true)} p-8 relative overflow-hidden group`}>
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-tuggi-primary/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="relative">
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
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-8 text-center">
                  {content.expansion.description}
                </p>
                
                <div className="text-center">
                  <button 
                    onClick={() => handleCTAClick('expansion_form')}
                    className={`${getButtonClasses('primary', 'lg')} inline-flex items-center space-x-2 group-hover:scale-105 transform transition-transform duration-300`}
                  >
                    <span>{content.expansion.button}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                  <p className="text-sm text-neutral-500 italic mt-4">
                    {content.expansion.note}
                  </p>
                </div>
              </div>
            </div>

            {/* Investors Section - Enhanced */}
            <div className={`${getCardClasses(true)} p-8 relative overflow-hidden group`}>
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-tuggi-secondary/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="relative">
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
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-8 text-center">
                  {content.investors.description}
                </p>
                
                <div className="text-center">
                  <button 
                    onClick={() => handleCTAClick('investors_page')}
                    className={`${getButtonClasses('primary', 'lg')} inline-flex items-center space-x-2 group-hover:scale-105 transform transition-transform duration-300`}
                  >
                    <span>{content.investors.button}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
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