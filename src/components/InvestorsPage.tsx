import React from 'react';
import { TrendingUp, Users, Globe, DollarSign, Calendar, ArrowRight, CheckCircle, Star, BarChart3, Lightbulb, Building2, Mail } from 'lucide-react';
import { 
  getButtonClasses, 
  getCardClasses, 
  layout,
  gradients 
} from '../utils/designSystem';

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
        description: 'A Tuggi nasceu do desejo de reconectar as pessoas com o mundo ao seu redor. Acreditamos que a cultura não precisa estar presa a livros, museus ou salas de aula. Ela pode estar viva no caminho, nas ruas, nos nomes, nos edifícios, nos bairros — e pode ser acessada por qualquer pessoa, em qualquer lugar, no momento certo.',
        currentStatus: 'Para realizar essa visão, criamos um copiloto cultural que transforma trajetos cotidianos em experiências de conhecimento. Utilizando geolocalização, inteligência contextual e narração automática, oferecemos uma nova forma de consumir cultura: natural, viva, espontânea — e sem depender de roteiros fixos.',
        b2bPillar: 'Além do app B2C, a Tuggi opera um pilar B2B de dados culturais verificados e APIs, permitindo que empresas integrem descrições confiáveis em seus produtos. Hoje, já operamos em três idiomas (PT-BR, ES-ES e EN-US), com expansão contínua.',
        vision: 'Hoje, a Tuggi está em fase beta no Brasil. Estamos mapeando regiões estratégicas, ouvindo os primeiros usuários e preparando os fundamentos para escalar: Expansão geográfica orientada por dados de interesse, modelo freemium com plano gratuito e opções pagas por tempo de uso, e abertura da plataforma para contribuições da própria comunidade. Buscamos conexões com investidores e aceleradoras que compartilhem nossa visão de impacto, inovação social e acesso democrático ao conhecimento.',
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
        description: 'Tuggi was born from the desire to reconnect people with the world around them. We believe that culture doesn\'t need to be confined to books, museums, or classrooms. It can be alive in the path, in the streets, in names, in buildings, in neighborhoods — and can be accessed by anyone, anywhere, at the right moment.',
        currentStatus: 'To realize this vision, we created a cultural copilot that transforms everyday journeys into knowledge experiences. Using geolocation, contextual intelligence, and automatic narration, we offer a new way to consume culture: natural, alive, spontaneous — and without depending on fixed itineraries.',
        b2bPillar: 'Beyond the B2C app, Tuggi operates a B2B pillar of verified cultural data and APIs, allowing companies to integrate reliable descriptions into their products. Today, we already operate in three languages (PT-BR, ES-ES, and EN-US), with continuous expansion.',
        vision: 'Today, Tuggi is in beta phase in Brazil. We are mapping strategic regions, listening to early users, and preparing the foundations to scale: Data-driven geographic expansion, freemium model with free plan and paid options for usage time, and opening the platform for community contributions. We seek connections with investors and accelerators who share our vision of impact, social innovation, and democratic access to knowledge.',
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
        description: 'Tuggi nació del deseo de reconectar a las personas con el mundo que les rodea. Creemos que la cultura no necesita estar confinada a libros, museos o aulas. Puede estar viva en el camino, en las calles, en los nombres, en los edificios, en los barrios — y puede ser accesible para cualquier persona, en cualquier lugar, en el momento adecuado.',
        currentStatus: 'Para realizar esta visión, creamos un copiloto cultural que transforma trayectos cotidianos en experiencias de conocimiento. Utilizando geolocalización, inteligencia contextual y narración automática, ofrecemos una nueva forma de consumir cultura: natural, viva, espontánea — y sin depender de itinerarios fijos.',
        b2bPillar: 'Además de la app B2C, Tuggi opera un pilar B2B de datos culturales verificados y APIs, permitiendo que las empresas integren descripciones confiables en sus productos. Hoy, ya operamos en tres idiomas (PT-BR, ES-ES y EN-US), con expansión continua.',
        vision: 'Hoy, Tuggi está en fase beta en Brasil. Estamos mapeando regiones estratégicas, escuchando a los primeros usuarios y preparando los fundamentos para escalar: Expansión geográfica orientada por datos de interés, modelo freemium con plan gratuito y opciones pagas por tiempo de uso, y apertura de la plataforma para contribuciones de la propia comunidad. Buscamos conexiones con inversores y aceleradoras que compartan nuestra visión de impacto, innovación social y acceso democrático al conocimiento.',
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
    <div 
      className="min-h-screen"
      style={{ background: 'linear-gradient(to bottom right, #f8fafc, rgba(0, 168, 232, 0.05))' }}
    >
      {/* Hero Section */}
      <section className={`${layout.section.hero} relative mb-0`}>
        <div className={`${layout.container.narrow} text-center`}>
          <div className="mb-0">
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
      <section className={layout.section.base}>
        <div className={layout.container.narrow}>
          <div className="prose prose-lg max-w-none">
            {/* Logo */}
            <div className="flex justify-center mb-8 -mt-8">
              <img 
                src="/tuggi-drive-logo.png" 
                alt="Tuggi Logo" 
                className="h-24 lg:h-32 w-auto"
              />
            </div>
            
            {/* Description */}
            <div className="mb-12">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                {content.description}
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                {content.currentStatus}
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                {content.b2bPillar}
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                {content.vision}
              </p>
            </div>

            {/* Market Insights Grid */}
            <div className={`${layout.grid['3']} gap-8 mb-16`}>
              <div className={getCardClasses()}>
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-6 h-6 text-tuggi-primary mr-3" />
                  <h3 className="text-lg font-semibold text-neutral-900">{content.marketSize}</h3>
                </div>
                <p className="text-2xl font-bold text-tuggi-primary mb-2">{content.marketValue}</p>
                <p className="text-sm text-neutral-600">{content.marketGrowth}</p>
              </div>

              <div className={getCardClasses()}>
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-tuggi-primary mr-3" />
                  <h3 className="text-lg font-semibold text-neutral-900">{content.userBase}</h3>
                </div>
                <p className="text-2xl font-bold text-tuggi-primary mb-2">{content.userCount}</p>
                <p className="text-sm text-neutral-600">{content.userGrowth}</p>
              </div>

              <div className={getCardClasses()}>
                <div className="flex items-center mb-4">
                  <Globe className="w-6 h-6 text-tuggi-primary mr-3" />
                  <h3 className="text-lg font-semibold text-neutral-900">{content.targetMarkets}</h3>
                </div>
                <p className="text-lg font-semibold text-neutral-900 mb-2">{content.markets}</p>
                <p className="text-sm text-neutral-600">{content.expansion}</p>
              </div>
            </div>

            {/* Contact Section */}
            <div className={`${getCardClasses(false)} p-8 lg:p-12`}>
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
                    className={`${getButtonClasses('primary', 'lg')} inline-flex items-center`}
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    {content.primaryEmail}
                  </button>
                </div>

                <div className="text-center">
                  <p className="text-neutral-600 mb-4">{content.alternativeContact}</p>
                  <button
                    onClick={() => handleEmailClick(content.secondaryEmail, 'secondary')}
                    className={`${getButtonClasses('outline', 'md')} inline-flex items-center`}
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