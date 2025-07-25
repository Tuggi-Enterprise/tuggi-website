import React from 'react';
import { TrendingUp, Users, Globe, DollarSign, Calendar, ArrowRight, CheckCircle, Star, BarChart3, Lightbulb, Building2, Mail } from 'lucide-react';

interface InvestorsPageProps {
  currentLanguage: string;
  onCTAClick?: (ctaType: string, position?: string) => void;
}

const InvestorsPage: React.FC<InvestorsPageProps> = ({ 
  currentLanguage,
  onCTAClick 
}) => {
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      PT: {
        title: 'Para investidores',
        subtitle: 'A Tuggi está construindo o futuro da descoberta cultural urbana.',
        description: 'Criamos um copiloto sonoro que transforma qualquer trajeto — a pé, de carro ou transporte público — em uma experiência de conhecimento. Com tecnologia de geolocalização e inteligência contextual, levamos cultura e curiosidade para o cotidiano das pessoas, sem a necessidade de rotas fixas ou roteiros turísticos tradicionais.',
        currentStatus: 'Estamos atualmente em fase beta no Brasil, com planos de expansão geográfica, introdução de monetização via modelo freemium, e abertura da plataforma para contribuição da comunidade.',
        vision: 'Buscamos conexões com investidores e aceleradoras que compartilhem nossa visão de impacto, inovação e educação acessível.',
        contactTitle: 'Para conversar conosco, envie um e-mail para:',
        primaryEmail: 'investidores@tuggi.app',
        alternativeContact: 'Se preferir, entre em contato também por:',
        secondaryEmail: 'contato@tuggi.app',
        futureNote: 'Versões futuras desta página incluirão press kit, métricas de uso, roadmap e materiais complementares.',
        marketSize: 'Mercado de Turismo Cultural',
        marketValue: 'US$ 1.2 trilhões',
        marketGrowth: 'Crescimento anual de 15%',
        userBase: 'Testes de Usabilidade',
        userCount: '50+',
        userGrowth: 'Feedback positivo de 90%',
        targetMarkets: 'Mercados-Alvo',
        markets: 'Brasil, América Latina, Europa',
        expansion: 'Expansão planejada para 2024'
      },
      EN: {
        title: 'For Investors',
        subtitle: 'Tuggi is building the future of urban cultural discovery.',
        description: 'We created an audio copilot that transforms any journey — on foot, by car, or public transport — into a knowledge experience. With geolocation technology and contextual intelligence, we bring culture and curiosity to people\'s daily lives, without the need for fixed routes or traditional tourist itineraries.',
        currentStatus: 'We are currently in beta phase in Brazil, with plans for geographic expansion, introduction of monetization via freemium model, and opening the platform for community contribution.',
        vision: 'We seek connections with investors and accelerators who share our vision of impact, innovation, and accessible education.',
        contactTitle: 'To talk to us, send an email to:',
        primaryEmail: 'investidores@tuggi.app',
        alternativeContact: 'If you prefer, also contact us at:',
        secondaryEmail: 'contato@tuggi.app',
        futureNote: 'Future versions of this page will include press kit, usage metrics, roadmap, and complementary materials.',
        marketSize: 'Cultural Tourism Market',
        marketValue: 'US$ 1.2 trillion',
        marketGrowth: '15% annual growth',
        userBase: 'Usability Tests',
        userCount: '50+',
        userGrowth: '90% positive feedback',
        targetMarkets: 'Target Markets',
        markets: 'Brazil, Latin America, Europe',
        expansion: 'Planned expansion for 2024'
      },
      ES: {
        title: 'Para inversores',
        subtitle: 'Tuggi está construyendo el futuro del descubrimiento cultural urbano.',
        description: 'Creamos un copiloto de audio que transforma cualquier trayecto — a pie, en coche o transporte público — en una experiencia de conocimiento. Con tecnología de geolocalización e inteligencia contextual, llevamos cultura y curiosidad al día a día de las personas, sin necesidad de rutas fijas o itinerarios turísticos tradicionales.',
        currentStatus: 'Actualmente estamos en fase beta en Brasil, con planes de expansión geográfica, introducción de monetización vía modelo freemium, y apertura de la plataforma para contribución de la comunidad.',
        vision: 'Buscamos conexiones con inversores y aceleradoras que compartan nuestra visión de impacto, innovación y educación accesible.',
        contactTitle: 'Para conversar con nosotros, envíe un correo electrónico a:',
        primaryEmail: 'investidores@tuggi.app',
        alternativeContact: 'Si prefiere, también contáctenos en:',
        secondaryEmail: 'contato@tuggi.app',
        futureNote: 'Las versiones futuras de esta página incluirán press kit, métricas de uso, roadmap y materiales complementarios.',
        marketSize: 'Mercado de Turismo Cultural',
        marketValue: 'US$ 1.2 billones',
        marketGrowth: 'Crecimiento anual del 15%',
        userBase: 'Pruebas de Usabilidad',
        userCount: '50+',
        userGrowth: '90% de feedback positivo',
        targetMarkets: 'Mercados Objetivo',
        markets: 'Brasil, América Latina, Europa',
        expansion: 'Expansión planificada para 2024'
      }
    };
    return content[language] || content['PT'];
  };

  const content = getLocalizedContent(currentLanguage);

  const handleEmailClick = (email: string, type: string) => {
    onCTAClick?.(`investor_email_${type}`, 'investors_page');
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-tuggi-primary/5">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              {content.title}
            </h1>
            <p className="text-xl lg:text-2xl text-neutral-700 leading-relaxed max-w-3xl mx-auto">
              {content.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Description */}
            <div className="mb-12">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                {content.description}
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                {content.currentStatus}
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                {content.vision}
              </p>
            </div>

            {/* Market Insights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-6 h-6 text-tuggi-primary mr-3" />
                  <h3 className="text-lg font-semibold text-neutral-900">{content.marketSize}</h3>
                </div>
                <p className="text-2xl font-bold text-tuggi-primary mb-2">{content.marketValue}</p>
                <p className="text-sm text-neutral-600">{content.marketGrowth}</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-tuggi-primary mr-3" />
                  <h3 className="text-lg font-semibold text-neutral-900">{content.userBase}</h3>
                </div>
                <p className="text-2xl font-bold text-tuggi-primary mb-2">{content.userCount}</p>
                <p className="text-sm text-neutral-600">{content.userGrowth}</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                <div className="flex items-center mb-4">
                  <Globe className="w-6 h-6 text-tuggi-primary mr-3" />
                  <h3 className="text-lg font-semibold text-neutral-900">{content.targetMarkets}</h3>
                </div>
                <p className="text-lg font-semibold text-neutral-900 mb-2">{content.markets}</p>
                <p className="text-sm text-neutral-600">{content.expansion}</p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-white rounded-xl p-8 lg:p-12 shadow-sm border border-neutral-200">
              <div className="text-center mb-8">
                <Building2 className="w-12 h-12 text-tuggi-primary mx-auto mb-4" />
                <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
                  {content.contactTitle}
                </h2>
              </div>

              <div className="space-y-6">
                <div className="text-center">
                  <button
                    onClick={() => handleEmailClick(content.primaryEmail, 'primary')}
                    className="inline-flex items-center px-6 py-4 bg-tuggi-primary hover:bg-tuggi-primary-dark text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg text-lg"
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    {content.primaryEmail}
                  </button>
                </div>

                <div className="text-center">
                  <p className="text-neutral-600 mb-4">{content.alternativeContact}</p>
                  <button
                    onClick={() => handleEmailClick(content.secondaryEmail, 'secondary')}
                    className="inline-flex items-center px-6 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-medium rounded-lg transition-all duration-200 text-base"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    {content.secondaryEmail}
                  </button>
                </div>
              </div>
            </div>

            {/* Future Note */}
            <div className="mt-12 text-center">
              <p className="text-sm text-neutral-500 italic">
                {content.futureNote}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestorsPage; 