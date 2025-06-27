import React from 'react';
import { MapPin, Navigation, Globe, Building2, Smartphone, Settings, ArrowRight, Play, Star, CheckCircle, Clock, Users } from 'lucide-react';

interface ProductsPageProps {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, language: string) => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ 
  currentLanguage = 'EN',
  onCTAClick 
}) => {
  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      EN: {
        badge: 'Products',
        title: 'Tuggi Drive: Smart Cultural Storytelling for Professional Drivers',
        subtitle: 'Transform every ride into an engaging cultural journey with AI-powered, location-based storytelling designed specifically for commercial transportation.',
        requestDemo: 'Request Live Demo',
        watchDemo: 'Watch Product Demo',
        trustIndicators: {
          text: 'Trusted by leading transportation companies',
          items: ['500+ FLEETS', '50+ CITIES', '2M+ RIDES']
        },
        interfaceLabels: {
          activeRoute: 'Active Route',
          downtown: 'Downtown → Airport',
          live: 'LIVE',
          storytellingOn: 'Storytelling ON',
          nowPlaying: 'Now Playing',
          historicCityHall: 'Historic City Hall',
          description: 'Built in 1892, this architectural marvel...',
          english: 'English',
          remaining: '2:30 remaining',
          upcomingPoints: 'Upcoming Story Points',
          centralPark: 'Central Park',
          artMuseum: 'Art Museum',
          inKm: 'In 1.2 km • 3 min story',
          inKm2: 'In 2.8 km • 4 min story'
        },
        featuresTitle: 'Powerful Features for Professional Transportation',
        featuresSubtitle: 'Every feature designed specifically for commercial drivers and transportation companies to deliver exceptional passenger experiences.',
        driveFeatures: [
          {
            title: 'Automatic & Accurate Narration',
            description: 'AI-powered storytelling that automatically activates at tourist landmarks, delivering precise cultural insights and historical narratives based on GPS coordinates.',
            details: [
              'GPS-triggered content delivery',
              'Curated by local cultural experts',
              'Real-time landmark recognition',
              'Context-aware storytelling'
            ]
          },
          {
            title: 'Seamless Navigation Integration',
            description: 'Works flawlessly with Google Maps, Waze, Apple Maps, and other navigation platforms without interrupting turn-by-turn directions.',
            details: [
              'Background operation mode',
              'No interference with GPS navigation',
              'Compatible with all major nav apps',
              'Automatic volume adjustment'
            ]
          },
          {
            title: 'Advanced Multilingual Support',
            description: 'Dynamic language switching supporting Portuguese, English, Spanish, French, German, and more, with native speaker narration.',
            details: [
              'Real-time language switching',
              'Native speaker recordings',
              'Cultural context adaptation',
              'Accent and dialect options'
            ]
          },
          {
            title: 'Built for Commercial B2B Use',
            description: 'Enterprise-grade solution designed for transportation companies, taxi fleets, tour operators, and professional drivers.',
            details: [
              'Fleet management dashboard',
              'Driver performance analytics',
              'Corporate billing and reporting',
              'Multi-tenant architecture'
            ]
          }
        ],
        businessBenefitsTitle: 'Proven Business Results',
        businessBenefitsSubtitle: 'Real metrics from transportation companies using Tuggi Drive to enhance their passenger experience and grow their business.',
        businessBenefits: [
          {
            title: 'Enhanced Customer Experience',
            value: '4.8/5',
            description: 'Average passenger satisfaction rating with cultural storytelling'
          },
          {
            title: 'Increased Customer Loyalty',
            value: '+35%',
            description: 'Higher repeat booking rates for storytelling-enabled rides'
          },
          {
            title: 'Reduced Setup Time',
            value: '<5 min',
            description: 'Quick installation and activation for immediate use'
          },
          {
            title: 'Revenue Growth',
            value: '+22%',
            description: 'Average revenue increase through premium service offerings'
          }
        ],
        useCasesTitle: 'Perfect for Every Transportation Business',
        useCasesSubtitle: 'Tuggi Drive adapts to various commercial transportation scenarios, enhancing passenger experience across different service types.',
        useCases: [
          {
            title: 'Airport Transfers',
            description: 'Transform routine airport rides into engaging introductions to the destination',
            icon: '✈️'
          },
          {
            title: 'City Tours',
            description: 'Enhance guided tours with automatic, location-based cultural narratives',
            icon: '🏛️'
          },
          {
            title: 'Hotel Shuttles',
            description: 'Provide guests with local insights during transportation to accommodations',
            icon: '🏨'
          },
          {
            title: 'Corporate Transportation',
            description: 'Offer business travelers cultural context during city transfers',
            icon: '💼'
          }
        ],
        tuggiWalkTitle: 'Tuggi Walk: Smart City Exploration',
        tuggiWalkSubtitle: 'The next evolution in travel technology. Immersive walking tours with augmented reality and cultural storytelling for tourists exploring cities on foot.',
        tuggiWalkFeatures: [
          {
            title: 'AR-Enhanced Discovery',
            description: 'Point your phone at landmarks to unlock hidden stories and historical overlays.',
            icon: '🔍'
          },
          {
            title: 'Interactive City Maps',
            description: 'Personalized walking routes with cultural points of interest and local recommendations.',
            icon: '🗺️'
          },
          {
            title: 'Offline Capabilities',
            description: 'Download city content for exploration without internet connectivity.',
            icon: '📱'
          }
        ],
        comingSoon: 'Coming Soon',
        launchingQ2: 'Launching Q2 2024',
        joinWaitlist: 'Join Waitlist',
        walkDescription: 'Be the first to offer immersive walking experiences to your customers.',
        finalCtaTitle: 'Ready to Transform Your Fleet?',
        finalCtaSubtitle: 'Join hundreds of transportation companies worldwide who trust Tuggi Drive to create memorable experiences for their passengers.',
        startTrial: 'Start Free Trial',
        scheduleDemo: 'Schedule Demo Call',
        contactInfo: 'Questions about implementation or pricing?',
        email: 'sales@tuggi.com',
        phone: '+1 (555) TUGGI-01'
      },
      PT: {
        badge: 'Produtos',
        title: 'Tuggi Drive: Narrativa Cultural Inteligente para Motoristas Profissionais',
        subtitle: 'Transforme cada viagem em uma jornada cultural envolvente com narrativa baseada em localização e IA projetada especificamente para transporte comercial.',
        requestDemo: 'Solicitar Demo ao Vivo',
        watchDemo: 'Assistir Demo do Produto',
        trustIndicators: {
          text: 'Confiado por empresas líderes de transporte',
          items: ['500+ FROTAS', '50+ CIDADES', '2M+ VIAGENS']
        },
        interfaceLabels: {
          activeRoute: 'Rota Ativa',
          downtown: 'Centro → Aeroporto',
          live: 'AO VIVO',
          storytellingOn: 'Narrativa ATIVA',
          nowPlaying: 'Tocando Agora',
          historicCityHall: 'Prefeitura Histórica',
          description: 'Construída em 1892, esta maravilha arquitetônica...',
          english: 'Português',
          remaining: '2:30 restantes',
          upcomingPoints: 'Próximos Pontos de História',
          centralPark: 'Parque Central',
          artMuseum: 'Museu de Arte',
          inKm: 'Em 1.2 km • história de 3 min',
          inKm2: 'Em 2.8 km • história de 4 min'
        },
        featuresTitle: 'Recursos Poderosos para Transporte Profissional',
        featuresSubtitle: 'Cada recurso projetado especificamente para motoristas comerciais e empresas de transporte para entregar experiências excepcionais aos passageiros.',
        driveFeatures: [
          {
            title: 'Narração Automática e Precisa',
            description: 'Narrativa com IA que ativa automaticamente em marcos turísticos, entregando insights culturais precisos e narrativas históricas baseadas em coordenadas GPS.',
            details: [
              'Entrega de conteúdo ativada por GPS',
              'Curado por especialistas culturais locais',
              'Reconhecimento de marcos em tempo real',
              'Narrativa consciente do contexto'
            ]
          },
          {
            title: 'Integração Perfeita com Navegação',
            description: 'Funciona perfeitamente com Google Maps, Waze, Apple Maps e outras plataformas de navegação sem interromper direções passo a passo.',
            details: [
              'Modo de operação em segundo plano',
              'Sem interferência com navegação GPS',
              'Compatível com todos os principais apps de navegação',
              'Ajuste automático de volume'
            ]
          },
          {
            title: 'Suporte Multilíngue Avançado',
            description: 'Troca dinâmica de idiomas suportando português, inglês, espanhol, francês, alemão e mais, com narração de falantes nativos.',
            details: [
              'Troca de idioma em tempo real',
              'Gravações de falantes nativos',
              'Adaptação de contexto cultural',
              'Opções de sotaque e dialeto'
            ]
          },
          {
            title: 'Construído para Uso Comercial B2B',
            description: 'Solução de nível empresarial projetada para empresas de transporte, frotas de táxi, operadores de turismo e motoristas profissionais.',
            details: [
              'Painel de gestão de frota',
              'Análises de desempenho do motorista',
              'Faturamento e relatórios corporativos',
              'Arquitetura multi-inquilino'
            ]
          }
        ],
        businessBenefitsTitle: 'Resultados Empresariais Comprovados',
        businessBenefitsSubtitle: 'Métricas reais de empresas de transporte usando Tuggi Drive para melhorar sua experiência de passageiros e crescer seus negócios.',
        businessBenefits: [
          {
            title: 'Experiência do Cliente Aprimorada',
            value: '4.8/5',
            description: 'Avaliação média de satisfação do passageiro com narrativa cultural'
          },
          {
            title: 'Lealdade do Cliente Aumentada',
            value: '+35%',
            description: 'Taxas de reserva repetida mais altas para viagens com narrativa habilitada'
          },
          {
            title: 'Tempo de Configuração Reduzido',
            value: '<5 min',
            description: 'Instalação rápida e ativação para uso imediato'
          },
          {
            title: 'Crescimento de Receita',
            value: '+22%',
            description: 'Aumento médio de receita através de ofertas de serviços premium'
          }
        ],
        useCasesTitle: 'Perfeito para Cada Negócio de Transporte',
        useCasesSubtitle: 'Tuggi Drive se adapta a vários cenários de transporte comercial, melhorando a experiência do passageiro em diferentes tipos de serviço.',
        useCases: [
          {
            title: 'Transferências de Aeroporto',
            description: 'Transforme viagens rotineiras de aeroporto em introduções envolventes ao destino',
            icon: '✈️'
          },
          {
            title: 'Tours pela Cidade',
            description: 'Melhore tours guiados com narrativas culturais automáticas baseadas em localização',
            icon: '🏛️'
          },
          {
            title: 'Shuttles de Hotel',
            description: 'Forneça aos hóspedes insights locais durante o transporte para acomodações',
            icon: '🏨'
          },
          {
            title: 'Transporte Corporativo',
            description: 'Ofereça aos viajantes de negócios contexto cultural durante transferências na cidade',
            icon: '💼'
          }
        ],
        tuggiWalkTitle: 'Tuggi Walk: Exploração Inteligente da Cidade',
        tuggiWalkSubtitle: 'A próxima evolução em tecnologia de viagem. Tours a pé imersivos com realidade aumentada e narrativa cultural para turistas explorando cidades a pé.',
        tuggiWalkFeatures: [
          {
            title: 'Descoberta Aprimorada com AR',
            description: 'Aponte seu telefone para marcos para desbloquear histórias ocultas e sobreposições históricas.',
            icon: '🔍'
          },
          {
            title: 'Mapas Interativos da Cidade',
            description: 'Rotas de caminhada personalizadas com pontos de interesse cultural e recomendações locais.',
            icon: '🗺️'
          },
          {
            title: 'Capacidades Offline',
            description: 'Baixe conteúdo da cidade para exploração sem conectividade com a internet.',
            icon: '📱'
          }
        ],
        comingSoon: 'Em Breve',
        launchingQ2: 'Lançamento Q2 2024',
        joinWaitlist: 'Entrar na Lista de Espera',
        walkDescription: 'Seja o primeiro a oferecer experiências de caminhada imersivas aos seus clientes.',
        finalCtaTitle: 'Pronto para Transformar Sua Frota?',
        finalCtaSubtitle: 'Junte-se a centenas de empresas de transporte mundialmente que confiam no Tuggi Drive para criar experiências memoráveis para seus passageiros.',
        startTrial: 'Iniciar Teste Gratuito',
        scheduleDemo: 'Agendar Chamada de Demo',
        contactInfo: 'Dúvidas sobre implementação ou preços?',
        email: 'sales@tuggi.com',
        phone: '+1 (555) TUGGI-01'
      },
      ES: {
        badge: 'Productos',
        title: 'Tuggi Drive: Narrativa Cultural Inteligente para Conductores Profesionales',
        subtitle: 'Transforme cada viaje en un recorrido cultural atractivo con narrativa basada en ubicación e IA diseñada específicamente para transporte comercial.',
        requestDemo: 'Solicitar Demo en Vivo',
        watchDemo: 'Ver Demo del Producto',
        trustIndicators: {
          text: 'Confiado por empresas líderes de transporte',
          items: ['500+ FLOTAS', '50+ CIUDADES', '2M+ VIAJES']
        },
        interfaceLabels: {
          activeRoute: 'Ruta Activa',
          downtown: 'Centro → Aeropuerto',
          live: 'EN VIVO',
          storytellingOn: 'Narrativa ACTIVA',
          nowPlaying: 'Reproduciendo Ahora',
          historicCityHall: 'Ayuntamiento Histórico',
          description: 'Construido en 1892, esta maravilla arquitectónica...',
          english: 'Español',
          remaining: '2:30 restantes',
          upcomingPoints: 'Próximos Puntos de Historia',
          centralPark: 'Parque Central',
          artMuseum: 'Museo de Arte',
          inKm: 'En 1.2 km • historia de 3 min',
          inKm2: 'En 2.8 km • historia de 4 min'
        },
        featuresTitle: 'Características Poderosas para Transporte Profesional',
        featuresSubtitle: 'Cada característica diseñada específicamente para conductores comerciales y empresas de transporte para entregar experiencias excepcionales a los pasajeros.',
        driveFeatures: [
          {
            title: 'Narración Automática y Precisa',
            description: 'Narrativa con IA que se activa automáticamente en hitos turísticos, entregando perspectivas culturales precisas y narrativas históricas basadas en coordenadas GPS.',
            details: [
              'Entrega de contenido activada por GPS',
              'Curado por expertos culturales locales',
              'Reconocimiento de hitos en tiempo real',
              'Narrativa consciente del contexto'
            ]
          },
          {
            title: 'Integración Perfecta con Navegación',
            description: 'Funciona perfectamente con Google Maps, Waze, Apple Maps y otras plataformas de navegación sin interrumpir direcciones paso a paso.',
            details: [
              'Modo de operación en segundo plano',
              'Sin interferencia con navegación GPS',
              'Compatible con todas las principales apps de navegación',
              'Ajuste automático de volumen'
            ]
          },
          {
            title: 'Soporte Multilingüe Avanzado',
            description: 'Cambio dinámico de idiomas soportando portugués, inglés, español, francés, alemán y más, con narración de hablantes nativos.',
            details: [
              'Cambio de idioma en tiempo real',
              'Grabaciones de hablantes nativos',
              'Adaptación de contexto cultural',
              'Opciones de acento y dialecto'
            ]
          },
          {
            title: 'Construido para Uso Comercial B2B',
            description: 'Solución de nivel empresarial diseñada para empresas de transporte, flotas de taxis, operadores de turismo y conductores profesionales.',
            details: [
              'Panel de gestión de flotas',
              'Análisis de rendimiento del conductor',
              'Facturación y reportes corporativos',
              'Arquitectura multi-inquilino'
            ]
          }
        ],
        businessBenefitsTitle: 'Resultados Empresariales Probados',
        businessBenefitsSubtitle: 'Métricas reales de empresas de transporte usando Tuggi Drive para mejorar su experiencia de pasajeros y hacer crecer sus negocios.',
        businessBenefits: [
          {
            title: 'Experiencia del Cliente Mejorada',
            value: '4.8/5',
            description: 'Calificación promedio de satisfacción del pasajero con narrativa cultural'
          },
          {
            title: 'Lealtad del Cliente Aumentada',
            value: '+35%',
            description: 'Tasas de reserva repetida más altas para viajes con narrativa habilitada'
          },
          {
            title: 'Tiempo de Configuración Reducido',
            value: '<5 min',
            description: 'Instalación rápida y activación para uso inmediato'
          },
          {
            title: 'Crecimiento de Ingresos',
            value: '+22%',
            description: 'Aumento promedio de ingresos a través de ofertas de servicios premium'
          }
        ],
        useCasesTitle: 'Perfecto para Cada Negocio de Transporte',
        useCasesSubtitle: 'Tuggi Drive se adapta a varios escenarios de transporte comercial, mejorando la experiencia del pasajero en diferentes tipos de servicio.',
        useCases: [
          {
            title: 'Transferencias de Aeropuerto',
            description: 'Transforme viajes rutinarios de aeropuerto en introducciones atractivas al destino',
            icon: '✈️'
          },
          {
            title: 'Tours por la Ciudad',
            description: 'Mejore tours guiados con narrativas culturales automáticas basadas en ubicación',
            icon: '🏛️'
          },
          {
            title: 'Shuttles de Hotel',
            description: 'Proporcione a los huéspedes perspectivas locales durante el transporte a alojamientos',
            icon: '🏨'
          },
          {
            title: 'Transporte Corporativo',
            description: 'Ofrezca a los viajeros de negocios contexto cultural durante transferencias en la ciudad',
            icon: '💼'
          }
        ],
        tuggiWalkTitle: 'Tuggi Walk: Exploración Inteligente de la Ciudad',
        tuggiWalkSubtitle: 'La próxima evolución en tecnología de viajes. Tours a pie inmersivos con realidad aumentada y narrativa cultural para turistas explorando ciudades a pie.',
        tuggiWalkFeatures: [
          {
            title: 'Descubrimiento Mejorado con AR',
            description: 'Apunte su teléfono a hitos para desbloquear historias ocultas y superposiciones históricas.',
            icon: '🔍'
          },
          {
            title: 'Mapas Interactivos de la Ciudad',
            description: 'Rutas de caminata personalizadas con puntos de interés cultural y recomendaciones locales.',
            icon: '🗺️'
          },
          {
            title: 'Capacidades Offline',
            description: 'Descargue contenido de la ciudad para exploración sin conectividad a internet.',
            icon: '📱'
          }
        ],
        comingSoon: 'Próximamente',
        launchingQ2: 'Lanzamiento Q2 2024',
        joinWaitlist: 'Unirse a Lista de Espera',
        walkDescription: 'Sea el primero en ofrecer experiencias de caminata inmersivas a sus clientes.',
        finalCtaTitle: '¿Listo para Transformar Su Flota?',
        finalCtaSubtitle: 'Únase a cientos de empresas de transporte mundialmente que confían en Tuggi Drive para crear experiencias memorables para sus pasajeros.',
        startTrial: 'Iniciar Prueba Gratuita',
        scheduleDemo: 'Programar Llamada de Demo',
        contactInfo: '¿Preguntas sobre implementación o precios?',
        email: 'sales@tuggi.com',
        phone: '+1 (555) TUGGI-01'
      }
    };
    return content[language] || content['EN'];
  };

  const content = getLocalizedContent(currentLanguage);

  const handleCTAClick = (ctaType: string) => {
    onCTAClick?.(ctaType, currentLanguage);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-50 via-white to-tuggi-primary/5 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-tuggi-primary/5 to-tuggi-secondary/5"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(0,168,232,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-tuggi-primary/10 rounded-full mb-8">
                <Smartphone className="w-5 h-5 text-tuggi-primary mr-2" />
                <span className="text-tuggi-primary font-semibold text-sm">{content.badge}</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-8">
                {content.title}
              </h1>
              
              <p className="text-xl lg:text-2xl text-neutral-600 leading-relaxed mb-8">
                {content.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={() => handleCTAClick('request_live_demo')}
                  className="bg-tuggi-primary hover:bg-tuggi-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2 group"
                >
                  <span>{content.requestDemo}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                
                <button 
                  onClick={() => handleCTAClick('watch_product_demo')}
                  className="border-2 border-tuggi-primary text-tuggi-primary hover:bg-tuggi-primary hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>{content.watchDemo}</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 border-t border-neutral-200">
                <p className="text-sm text-neutral-500 mb-4">{content.trustIndicators.text}</p>
                <div className="flex items-center space-x-8 opacity-60">
                  {content.trustIndicators.items.map((item: string, index: number) => (
                    <div key={index} className="text-lg font-bold text-neutral-400">{item}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Mockup */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-tuggi-primary/10 to-tuggi-secondary/10 rounded-3xl p-8 lg:p-12">
                {/* Vehicle Dashboard Mockup */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <div className="bg-neutral-900 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-xs text-white font-medium">Tuggi Drive - Vehicle Interface</div>
                  </div>
                  
                  {/* Driver Interface */}
                  <div className="p-6">
                    {/* Active Route */}
                    <div className="flex items-center justify-between mb-6 p-4 bg-tuggi-primary/5 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-tuggi-primary rounded-full flex items-center justify-center">
                          <Navigation className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-neutral-800">{content.interfaceLabels.activeRoute}</div>
                          <div className="text-sm text-neutral-600">{content.interfaceLabels.downtown}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-tuggi-primary">{content.interfaceLabels.live}</div>
                        <div className="text-xs text-neutral-600">{content.interfaceLabels.storytellingOn}</div>
                      </div>
                    </div>
                    
                    {/* Current Story */}
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 mb-6 border border-green-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <MapPin className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-semibold text-green-800">{content.interfaceLabels.nowPlaying}</span>
                      </div>
                      <div className="text-neutral-800 font-medium mb-1">{content.interfaceLabels.historicCityHall}</div>
                      <div className="text-sm text-neutral-600">{content.interfaceLabels.description}</div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="text-xs text-neutral-500">🇺🇸 {content.interfaceLabels.english} • {content.interfaceLabels.remaining}</div>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-tuggi-primary rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-tuggi-primary/50 rounded-full"></div>
                          <div className="w-2 h-2 bg-tuggi-primary/30 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Upcoming Points */}
                    <div className="space-y-3">
                      <div className="text-sm font-semibold text-neutral-700 mb-3">{content.interfaceLabels.upcomingPoints}</div>
                      <div className="flex items-center space-x-3 p-3 bg-neutral-50 rounded-lg">
                        <div className="w-8 h-8 bg-tuggi-secondary/20 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-tuggi-secondary">2</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-neutral-800">{content.interfaceLabels.centralPark}</div>
                          <div className="text-xs text-neutral-600">{content.interfaceLabels.inKm}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-neutral-50 rounded-lg">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-purple-600">3</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-neutral-800">{content.interfaceLabels.artMuseum}</div>
                          <div className="text-xs text-neutral-600">{content.interfaceLabels.inKm2}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-tuggi-secondary/20 rounded-2xl rotate-12"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-tuggi-primary/20 rounded-2xl -rotate-12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-6">
              {content.featuresTitle}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {content.featuresSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {content.driveFeatures.map((feature: any, index: number) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-neutral-50 to-white border-2 border-transparent hover:border-tuggi-primary/20 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                  index === 0 ? 'from-tuggi-primary to-blue-600' :
                  index === 1 ? 'from-tuggi-secondary to-orange-600' :
                  index === 2 ? 'from-green-500 to-emerald-600' :
                  'from-purple-500 to-violet-600'
                } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {index === 0 && <MapPin className="w-8 h-8 text-white" />}
                  {index === 1 && <Navigation className="w-8 h-8 text-white" />}
                  {index === 2 && <Globe className="w-8 h-8 text-white" />}
                  {index === 3 && <Building2 className="w-8 h-8 text-white" />}
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4 group-hover:text-tuggi-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {feature.description}
                </p>

                <div className="space-y-3">
                  {feature.details.map((detail: string, detailIndex: number) => (
                    <div key={detailIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-tuggi-primary flex-shrink-0" />
                      <span className="text-neutral-700 font-medium">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              {content.businessBenefitsTitle}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {content.businessBenefitsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {content.businessBenefits.map((benefit: any, index: number) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-tuggi-primary/10 to-tuggi-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {index === 0 && <Star className="w-8 h-8 text-tuggi-primary" />}
                  {index === 1 && <Users className="w-8 h-8 text-tuggi-primary" />}
                  {index === 2 && <Clock className="w-8 h-8 text-tuggi-primary" />}
                  {index === 3 && <CheckCircle className="w-8 h-8 text-tuggi-primary" />}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-tuggi-primary mb-2">
                  {benefit.value}
                </div>
                <div className="text-lg font-semibold text-neutral-900 mb-2">
                  {benefit.title}
                </div>
                <div className="text-sm text-neutral-600">
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              {content.useCasesTitle}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {content.useCasesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.useCases.map((useCase: any, index: number) => (
              <div key={index} className="bg-white border-2 border-neutral-200 rounded-2xl p-6 hover:border-tuggi-primary/30 hover:shadow-lg transition-all duration-300 text-center group">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-tuggi-primary transition-colors duration-300">
                  {useCase.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tuggi Walk Preview */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-tuggi-secondary/5 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-tuggi-secondary/20 rounded-full mb-6">
              <span className="text-tuggi-secondary font-semibold text-sm">
                🚶‍♂️ {content.comingSoon}
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-6">
              {content.tuggiWalkTitle}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {content.tuggiWalkSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Features Preview */}
            <div className="space-y-6">
              {content.tuggiWalkFeatures.map((feature: any, index: number) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-tuggi-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{feature.title}</h3>
                    <p className="text-neutral-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Coming Soon Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-tuggi-secondary/10 to-orange-100 rounded-3xl p-12 text-center">
                <div className="text-8xl mb-6">🚶‍♂️</div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.launchingQ2}
                </h3>
                <p className="text-neutral-600 mb-6">
                  {content.walkDescription}
                </p>
                <button 
                  onClick={() => handleCTAClick('join_tuggi_walk_waitlist')}
                  className="bg-tuggi-secondary hover:bg-tuggi-secondary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1"
                >
                  {content.joinWaitlist}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-tuggi-primary to-tuggi-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            {content.finalCtaTitle}
          </h2>
          <p className="text-xl text-tuggi-primary-light max-w-3xl mx-auto mb-8">
            {content.finalCtaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleCTAClick('start_free_trial')}
              className="bg-white hover:bg-neutral-100 text-tuggi-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
            >
              <span>{content.startTrial}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => handleCTAClick('schedule_demo_call')}
              className="border-2 border-white text-white hover:bg-white hover:text-tuggi-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              {content.scheduleDemo}
            </button>
          </div>
          
          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-tuggi-primary-light/30">
            <p className="text-tuggi-primary-light mb-4">
              {content.contactInfo}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-white">
              <a 
                href={`mailto:${content.email}`}
                onClick={() => handleCTAClick('contact_email_products')}
                className="hover:text-tuggi-primary-light transition-colors duration-200"
              >
                📧 {content.email}
              </a>
              <a 
                href={`tel:${content.phone}`}
                onClick={() => handleCTAClick('contact_phone_products')}
                className="hover:text-tuggi-primary-light transition-colors duration-200"
              >
                📞 {content.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;