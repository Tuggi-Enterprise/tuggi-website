import React from 'react';
import { Car, MapPin, Footprints, Rocket } from 'lucide-react';

interface RoadmapSectionProps {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, language: string) => void;
}

const RoadmapSection: React.FC<RoadmapSectionProps> = ({ 
  currentLanguage = 'EN',
  onCTAClick 
}) => {
  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      EN: {
        badge: '🚀 Product Roadmap',
        title: 'The Future of Travel Technology',
        subtitle: 'Discover our comprehensive suite of travel-tech solutions designed to transform how people experience journeys and destinations.',
        bottomTitle: 'Ready to Transform Your Transportation Business?',
        bottomSubtitle: 'Start with Tuggi Drive today and be first in line for our upcoming innovations.',
        requestDemo: 'Request Demo',
        joinWaitlist: 'Join Tuggi Walk Waitlist',
        roadmapItems: [
          {
            title: 'Tuggi Drive',
            status: 'live',
            description: 'Now being activated with selected transportation companies — bring Tuggi Drive to your fleet before the public launch.',
            features: ['Location-based narration', 'Multi-language support', 'Navigation integration', 'Fleet management'],
            color: 'from-tuggi-primary to-blue-600',
            statusColor: 'bg-green-500',
            statusText: 'Live Now'
          },
          {
            title: 'Tuggi Walk',
            status: 'coming-soon',
            description: 'Immersive walking tours with augmented reality and cultural storytelling',
            features: ['AR-enhanced tours', 'Historical overlays', 'Interactive experiences', 'Offline capabilities'],
            color: 'from-tuggi-secondary to-orange-600',
            statusColor: 'bg-tuggi-secondary',
            statusText: 'Coming Soon',
            ctaText: 'Join Waitlist for Early Access'
          },
          {
            title: 'Tuggi Explore',
            status: 'development',
            description: 'Comprehensive destination discovery platform for travel professionals',
            features: ['Destination insights', 'Cultural recommendations', 'Local partnerships', 'Custom itineraries'],
            color: 'from-purple-500 to-violet-600',
            statusColor: 'bg-purple-500',
            statusText: 'In Development'
          },
          {
            title: 'Tuggi Enterprise',
            status: 'planned',
            description: 'Full-scale enterprise solution for global transportation networks',
            features: ['Global deployment', 'Advanced analytics', 'White-label options', 'API ecosystem'],
            color: 'from-neutral-500 to-neutral-600',
            statusColor: 'bg-neutral-400',
            statusText: 'Planned'
          }
        ]
      },
      PT: {
        badge: '🚀 Roteiro do Produto',
        title: 'O Futuro da Tecnologia de Viagem',
        subtitle: 'Descubra nossa suíte abrangente de soluções de tecnologia de viagem projetadas para transformar como as pessoas experimentam jornadas e destinos.',
        bottomTitle: 'Pronto para Transformar Seu Negócio de Transporte?',
        bottomSubtitle: 'Comece com o Tuggi Drive hoje e seja o primeiro na fila para nossas próximas inovações.',
        requestDemo: 'Solicitar Demo',
        joinWaitlist: 'Entrar na Lista de Espera Tuggi Walk',
        roadmapItems: [
          {
            title: 'Tuggi Drive',
            status: 'live',
            description: 'Agora sendo ativado com empresas de transporte selecionadas — traga o Tuggi Drive para sua frota antes do lançamento público.',
            features: ['Narração baseada em localização', 'Suporte multi-idioma', 'Integração navegação', 'Gestão de frota'],
            color: 'from-tuggi-primary to-blue-600',
            statusColor: 'bg-green-500',
            statusText: 'Ao Vivo Agora'
          },
          {
            title: 'Tuggi Walk',
            status: 'coming-soon',
            description: 'Tours a pé imersivos com realidade aumentada e narrativa cultural',
            features: ['Tours aprimorados com AR', 'Sobreposições históricas', 'Experiências interativas', 'Capacidades offline'],
            color: 'from-tuggi-secondary to-orange-600',
            statusColor: 'bg-tuggi-secondary',
            statusText: 'Em Breve',
            ctaText: 'Entrar na Lista de Espera para Acesso Antecipado'
          },
          {
            title: 'Tuggi Explore',
            status: 'development',
            description: 'Plataforma abrangente de descoberta de destinos para profissionais de viagem',
            features: ['Insights de destinos', 'Recomendações culturais', 'Parcerias locais', 'Itinerários personalizados'],
            color: 'from-purple-500 to-violet-600',
            statusColor: 'bg-purple-500',
            statusText: 'Em Desenvolvimento'
          },
          {
            title: 'Tuggi Enterprise',
            status: 'planned',
            description: 'Solução empresarial em escala completa para redes de transporte globais',
            features: ['Implantação global', 'Análises avançadas', 'Opções marca branca', 'Ecossistema API'],
            color: 'from-neutral-500 to-neutral-600',
            statusColor: 'bg-neutral-400',
            statusText: 'Planejado'
          }
        ]
      },
      ES: {
        badge: '🚀 Hoja de Ruta del Producto',
        title: 'El Futuro de la Tecnología de Viajes',
        subtitle: 'Descubra nuestra suite integral de soluciones de tecnología de viajes diseñadas para transformar cómo las personas experimentan viajes y destinos.',
        bottomTitle: '¿Listo para Transformar Su Negocio de Transporte?',
        bottomSubtitle: 'Comience con Tuggi Drive hoy y sea el primero en la fila para nuestras próximas innovaciones.',
        requestDemo: 'Solicitar Demo',
        joinWaitlist: 'Unirse a Lista de Espera Tuggi Walk',
        roadmapItems: [
          {
            title: 'Tuggi Drive',
            status: 'live',
            description: 'Ahora siendo activado con empresas de transporte seleccionadas — traiga Tuggi Drive a su flota antes del lanzamiento público.',
            features: ['Narración basada en ubicación', 'Soporte multi-idioma', 'Integración navegación', 'Gestión de flotas'],
            color: 'from-tuggi-primary to-blue-600',
            statusColor: 'bg-green-500',
            statusText: 'En Vivo Ahora'
          },
          {
            title: 'Tuggi Walk',
            status: 'coming-soon',
            description: 'Tours a pie inmersivos con realidad aumentada y narrativa cultural',
            features: ['Tours mejorados con AR', 'Superposiciones históricas', 'Experiencias interactivas', 'Capacidades offline'],
            color: 'from-tuggi-secondary to-orange-600',
            statusColor: 'bg-tuggi-secondary',
            statusText: 'Próximamente',
            ctaText: 'Unirse a Lista de Espera para Acceso Temprano'
          },
          {
            title: 'Tuggi Explore',
            status: 'development',
            description: 'Plataforma integral de descubrimiento de destinos para profesionales de viajes',
            features: ['Perspectivas de destinos', 'Recomendaciones culturales', 'Asociaciones locales', 'Itinerarios personalizados'],
            color: 'from-purple-500 to-violet-600',
            statusColor: 'bg-purple-500',
            statusText: 'En Desarrollo'
          },
          {
            title: 'Tuggi Enterprise',
            status: 'planned',
            description: 'Solución empresarial a escala completa para redes de transporte globales',
            features: ['Despliegue global', 'Análisis avanzados', 'Opciones marca blanca', 'Ecosistema API'],
            color: 'from-neutral-500 to-neutral-600',
            statusColor: 'bg-neutral-400',
            statusText: 'Planificado'
          }
        ]
      }
    };
    return content[language] || content['EN'];
  };

  const content = getLocalizedContent(currentLanguage);

  const handleCTAClick = (ctaType: string) => {
    onCTAClick?.(ctaType, currentLanguage);
  };

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-tuggi-secondary/10 rounded-full mb-6">
            <span className="text-tuggi-secondary font-semibold text-sm">
              {content.badge}
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-6">
            {content.title}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-tuggi-primary via-tuggi-secondary to-neutral-300 rounded-full"></div>

          {/* Roadmap Items */}
          <div className="space-y-12 lg:space-y-16">
            {content.roadmapItems.map((item: any, index: number) => (
              <div 
                key={index}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-tuggi-primary rounded-full shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                    {/* Status Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`inline-flex items-center px-3 py-1 ${item.statusColor} text-white text-sm font-semibold rounded-full`}>
                        {item.statusText}
                      </div>
                      {item.status === 'coming-soon' && (
                        <div className="bg-tuggi-secondary/10 text-tuggi-secondary px-3 py-1 rounded-full text-sm font-semibold">
                          Q2 2024
                        </div>
                      )}
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {index === 0 && <Car className="w-8 h-8 text-white" />}
                        {index === 1 && <Footprints className="w-8 h-8 text-white" />}
                        {index === 2 && <MapPin className="w-8 h-8 text-white" />}
                        {index === 3 && <Rocket className="w-8 h-8 text-white" />}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 group-hover:text-tuggi-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-600 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3">
                      {item.features.map((feature: string, featureIndex: number) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-tuggi-primary rounded-full"></div>
                          <span className="text-sm text-neutral-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA for Tuggi Walk */}
                    {item.status === 'coming-soon' && item.ctaText && (
                      <div className="mt-6 pt-6 border-t border-neutral-200">
                        <button 
                          onClick={() => handleCTAClick('join_tuggi_walk_waitlist')}
                          className="w-full bg-tuggi-secondary/10 hover:bg-tuggi-secondary hover:text-white text-tuggi-secondary px-6 py-3 rounded-lg font-semibold transition-all duration-200 border-2 border-tuggi-secondary/20 hover:border-tuggi-secondary"
                        >
                          {item.ctaText}
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Visual Element */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}>
                  <div className="relative">
                    <div className={`w-full h-64 bg-gradient-to-br ${item.color} rounded-2xl opacity-10`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      {index === 0 && <Car className="w-24 h-24 text-neutral-400 opacity-50" />}
                      {index === 1 && <Footprints className="w-24 h-24 text-neutral-400 opacity-50" />}
                      {index === 2 && <MapPin className="w-24 h-24 text-neutral-400 opacity-50" />}
                      {index === 3 && <Rocket className="w-24 h-24 text-neutral-400 opacity-50" />}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-16 border-t border-neutral-200">
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            {content.bottomTitle}
          </h3>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            {content.bottomSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleCTAClick('request_demo_roadmap')}
              className="bg-tuggi-primary hover:bg-tuggi-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1"
            >
              {content.requestDemo}
            </button>
            <button 
              onClick={() => handleCTAClick('join_tuggi_walk_waitlist_bottom')}
              className="border-2 border-tuggi-secondary text-tuggi-secondary hover:bg-tuggi-secondary hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              {content.joinWaitlist}
            </button>
          </div>
        </div>

        {/* Early Access Program CTA */}
        <div className="text-center mt-12 pt-8 border-t border-neutral-200">
          <div className="inline-flex items-center space-x-2 text-tuggi-primary font-bold text-lg mb-2">
            <span>🔐</span>
            <span>Want to be part of our early launch?</span>
            <span>→</span>
            <button 
              onClick={() => handleCTAClick('join_early_access_program')}
              className="text-tuggi-primary hover:text-tuggi-primary-dark underline hover:no-underline transition-all duration-200"
            >
              Join Early Access Program
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;