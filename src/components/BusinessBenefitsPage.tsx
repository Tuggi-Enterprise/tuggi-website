import React from 'react';
import { Shield, Zap, Settings, TrendingUp, Users, Clock, Award, CheckCircle, ArrowRight, Star, BarChart3, Globe, Smartphone } from 'lucide-react';

interface BusinessBenefitsPageProps {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, language: string) => void;
}

const BusinessBenefitsPage: React.FC<BusinessBenefitsPageProps> = ({ 
  currentLanguage = 'EN',
  onCTAClick 
}) => {
  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      EN: {
        badge: '🧪 Beta Program',
        title: 'Be First. Lead the Shift in Passenger Experience.',
        subtitle: 'Partner with Tuggi to pioneer a new cultural journey standard — powered by AI and designed to elevate transportation services. Our founding partners are shaping the future today.',
        calculateROI: 'Join as a Founding Partner',
        viewCaseStudies: 'Request Early Access',
        keyMetrics: [
          { value: '🚀', label: 'Designed to boost rider satisfaction and loyalty' },
          { value: '⚙️', label: 'Built for seamless GPS integration — no driver distractions' },
          { value: '🛠️', label: 'Currently in pilot phase with selected fleets' },
          { value: '🎧', label: 'Cultural audio experiences proven to engage passengers' }
        ],
        coreValuesTitle: 'Why Become a Founding Partner',
        coreValuesSubtitle: 'Join a select group of visionary transportation companies co-creating the future of passenger experiences.',
        coreValues: [
          {
            title: 'Early Access Advantage',
            description: 'Help shape the roadmap. Influence features that matter to your fleet.',
            benefits: [
              'Direct input on feature development',
              'Priority access to new capabilities',
              'Exclusive founding partner benefits',
              'Custom integration support'
            ],
            metrics: {
              value: '🎯',
              label: 'Strategic Influence',
              improvement: 'Shape the future of travel tech'
            }
          },
          {
            title: 'Brand Differentiation',
            description: 'Deliver something competitors can\'t: cultural value and premium experience.',
            benefits: [
              'Unique market positioning',
              'Premium service differentiation',
              'Enhanced brand reputation',
              'Competitive moat creation'
            ],
            metrics: {
              value: '💎',
              label: 'Market Leadership',
              improvement: 'Be the cultural experience pioneer'
            }
          },
          {
            title: 'Shared Innovation',
            description: 'Be part of a bold vision — with co-marketing, pilot insights, and dedicated support.',
            benefits: [
              'Co-branded press opportunities',
              'Shared success stories',
              'Joint innovation initiatives',
              'Dedicated founding partner team'
            ],
            metrics: {
              value: '🤝',
              label: 'Strategic Partnership',
              improvement: 'Innovation through collaboration'
            }
          }
        ],
        foundingBenefitsTitle: 'What Our Founding Partners Get',
        foundingBenefitsSubtitle: 'Exclusive advantages for the transportation companies that join us in pioneering the future.',
        foundingBenefits: [
          { icon: '🧠', title: 'Dedicated innovation team' },
          { icon: '🎤', title: 'Custom voice and narrative onboarding' },
          { icon: '🚀', title: 'Co-branded press opportunities' },
          { icon: '🧪', title: 'Access to beta features before public release' },
          { icon: '📊', title: 'Monthly insights & usage reporting' },
          { icon: '🤝', title: 'Priority support and roadmap input' }
        ],
        businessImpactTitle: 'Early Results from Pilot Partners',
        businessImpactSubtitle: 'Initial feedback and metrics from transportation companies currently testing Tuggi Drive in beta.',
        competitiveAdvantagesTitle: 'Gain Competitive Advantage',
        competitiveAdvantagesSubtitle: 'Position your transportation business ahead of competitors with innovative technology that creates lasting customer relationships.',
        competitiveAdvantages: [
          {
            title: 'Unique Market Position',
            description: 'Be the first transportation company in your market to offer AI-powered cultural storytelling.',
            icon: '🎯',
            impact: 'Market Leadership'
          },
          {
            title: 'Premium Service Offering',
            description: 'Transform standard rides into premium cultural experiences that justify higher pricing.',
            icon: '💎',
            impact: 'Revenue Growth'
          },
          {
            title: 'Customer Loyalty',
            description: 'Create memorable experiences that turn one-time passengers into loyal, repeat customers.',
            icon: '❤️',
            impact: 'Retention Increase'
          },
          {
            title: 'Brand Differentiation',
            description: 'Stand out from competitors with innovative technology that enhances your brand reputation.',
            icon: '🌟',
            impact: 'Brand Value'
          }
        ],
        implementationTitle: 'Simple Implementation Process',
        implementationSubtitle: 'Get started with Tuggi Drive in minutes, not months. Our streamlined process ensures zero disruption to your operations.',
        implementationSteps: [
          {
            step: '1',
            title: 'Quick Setup',
            description: 'Install Tuggi Drive in under 5 minutes with our one-click deployment system.',
            duration: '< 5 minutes'
          },
          {
            step: '2',
            title: 'Fleet Integration',
            description: 'Connect your entire fleet through our centralized management dashboard.',
            duration: '1 day'
          },
          {
            step: '3',
            title: 'Go Live',
            description: 'Start delivering cultural experiences immediately with automatic content activation.',
            duration: 'Instant'
          }
        ],
        startImplementation: 'Start Implementation Today',
        testimonialsTitle: 'Early Partner Feedback',
        testimonialsSubtitle: 'Insights from transportation companies currently piloting Tuggi Drive in beta phase.',
        betaBadge: '🧪 Beta Testimonial',
        testimonials: [
          {
            quote: 'Working with Tuggi to test their cultural storytelling concept has been fascinating. Our pilot routes show real passenger engagement and we\'re excited to be part of shaping this innovation.',
            author: 'Carlos Mendoza',
            role: 'Fleet Operations Director',
            company: 'Premium Airport Services',
            location: 'São Paulo, Brazil',
            results: 'Pilot Partner'
          },
          {
            quote: 'The early beta testing has shown promising results for passenger satisfaction. We appreciate being part of the development process and contributing to the roadmap.',
            author: 'Sarah Chen',
            role: 'CEO',
            company: 'Metropolitan Tours',
            location: 'San Francisco, USA',
            results: 'Beta Tester'
          },
          {
            quote: 'As an early partner, we\'re helping Tuggi understand what transportation companies really need. The collaborative approach is refreshing and the technology shows real potential.',
            author: 'Ahmed Hassan',
            role: 'Business Development Manager',
            company: 'City Connect Transport',
            location: 'Dubai, UAE',
            results: 'Founding Partner'
          }
        ],
        finalCtaTitle: 'Ready to Transform Your Business?',
        finalCtaSubtitle: 'Join hundreds of transportation companies worldwide who are already seeing measurable results with Tuggi Drive.',
        getStarted: 'Get Started Today',
        scheduleConsultation: 'Schedule Consultation',
        contactInfo: 'Questions about ROI or implementation?',
        email: 'business@tuggi.com',
        phone: '+1 (555) TUGGI-01'
      },
      PT: {
        badge: '🧪 Programa Beta',
        title: 'Seja o Primeiro. Lidere a Mudança na Experiência do Passageiro.',
        subtitle: 'Faça parceria com a Tuggi para pioneirizar um novo padrão de jornada cultural — impulsionado por IA e projetado para elevar serviços de transporte. Nossos parceiros fundadores estão moldando o futuro hoje.',
        calculateROI: 'Tornar-se Parceiro Fundador',
        viewCaseStudies: 'Solicitar Acesso Antecipado',
        keyMetrics: [
          { value: '🚀', label: 'Projetado para aumentar satisfação e lealdade dos passageiros' },
          { value: '⚙️', label: 'Construído para integração GPS perfeita — sem distrações para motoristas' },
          { value: '🛠️', label: 'Atualmente em fase piloto com frotas selecionadas' },
          { value: '🎧', label: 'Experiências culturais de áudio comprovadamente envolvem passageiros' }
        ],
        coreValuesTitle: 'Por Que Se Tornar um Parceiro Fundador',
        coreValuesSubtitle: 'Junte-se a um grupo seleto de empresas de transporte visionárias co-criando o futuro das experiências de passageiros.',
        coreValues: [
          {
            title: 'Vantagem de Acesso Antecipado',
            description: 'Ajude a moldar o roadmap. Influencie recursos que importam para sua frota.',
            benefits: [
              'Influência direta no desenvolvimento de recursos',
              'Acesso prioritário a novas capacidades',
              'Benefícios exclusivos de parceiro fundador',
              'Suporte de integração personalizada'
            ],
            metrics: {
              value: '🎯',
              label: 'Influência Estratégica',
              improvement: 'Molde o futuro da tecnologia de viagem'
            }
          },
          {
            title: 'Diferenciação da Marca',
            description: 'Entregue algo que os concorrentes não conseguem: valor cultural e experiência premium.',
            benefits: [
              'Posicionamento de mercado único',
              'Diferenciação de serviço premium',
              'Reputação de marca aprimorada',
              'Criação de barreira competitiva'
            ],
            metrics: {
              value: '💎',
              label: 'Liderança de Mercado',
              improvement: 'Seja o pioneiro da experiência cultural'
            }
          },
          {
            title: 'Inovação Compartilhada',
            description: 'Seja parte de uma visão ousada — com co-marketing, insights de piloto e suporte dedicado.',
            benefits: [
              'Oportunidades de imprensa co-branded',
              'Histórias de sucesso compartilhadas',
              'Iniciativas de inovação conjunta',
              'Equipe dedicada de parceiro fundador'
            ],
            metrics: {
              value: '🤝',
              label: 'Parceria Estratégica',
              improvement: 'Inovação através da colaboração'
            }
          }
        ],
        foundingBenefitsTitle: 'O Que Nossos Parceiros Fundadores Recebem',
        foundingBenefitsSubtitle: 'Vantagens exclusivas para as empresas de transporte que se juntam a nós na criação do futuro.',
        foundingBenefits: [
          { icon: '🧠', title: 'Equipe de inovação dedicada' },
          { icon: '🎤', title: 'Onboarding personalizado de voz e narrativa' },
          { icon: '🚀', title: 'Oportunidades de imprensa co-branded' },
          { icon: '🧪', title: 'Acesso a recursos beta antes do lançamento público' },
          { icon: '📊', title: 'Relatórios mensais de insights e uso' },
          { icon: '🤝', title: 'Suporte prioritário e influência no roadmap' }
        ],
        businessImpactTitle: 'Resultados Iniciais dos Parceiros Piloto',
        businessImpactSubtitle: 'Feedback inicial e métricas de empresas de transporte atualmente testando Tuggi Drive em beta.',
        competitiveAdvantagesTitle: 'Ganhe Vantagem Competitiva',
        competitiveAdvantagesSubtitle: 'Posicione seu negócio de transporte à frente de competidores com tecnologia inovadora que cria relacionamentos duradouros com clientes.',
        competitiveAdvantages: [
          {
            title: 'Unique Market Position',
            description: 'Be the first transportation company in your market to offer AI-powered cultural storytelling.',
            icon: '🎯',
            impact: 'Market Leadership'
          },
          {
            title: 'Premium Service Offering',
            description: 'Transforme viagens padrão em experiências culturais premium que justificam preços mais altos.',
            icon: '💎',
            impact: 'Revenue Growth'
          },
          {
            title: 'Customer Loyalty',
            description: 'Crie experiências memoráveis que transformam passageiros únicos em clientes leais e recorrentes.',
            icon: '❤️',
            impact: 'Retention Increase'
          },
          {
            title: 'Brand Differentiation',
            description: 'Destaque-se dos competidores com tecnologia inovadora que melhora a reputação da sua marca.',
            icon: '🌟',
            impact: 'Brand Value'
          }
        ],
        implementationTitle: 'Processo de Implementação Simples',
        implementationSubtitle: 'Comece com Tuggi Drive em minutos, não meses. Nosso processo simplificado garante zero interrupção às suas operações.',
        implementationSteps: [
          {
            step: '1',
            title: 'Configuração Rápida',
            description: 'Instale Tuggi Drive em menos de 5 minutos com nosso sistema de implantação de um clique.',
            duration: '< 5 minutos'
          },
          {
            step: '2',
            title: 'Integração da Frota',
            description: 'Conecte toda sua frota através do nosso painel de gestão centralizado.',
            duration: '1 dia'
          },
          {
            step: '3',
            title: 'Entrar no Ar',
            description: 'Comece a entregar experiências culturais imediatamente com ativação automática de conteúdo.',
            duration: 'Instantâneo'
          }
        ],
        startImplementation: 'Iniciar Implementação Hoje',
        testimonialsTitle: 'Feedback dos Parceiros Iniciais',
        testimonialsSubtitle: 'Insights de empresas de transporte atualmente pilotando Tuggi Drive na fase beta.',
        betaBadge: '🧪 Depoimento Beta',
        testimonials: [
          {
            quote: 'Trabalhar com a Tuggi para testar seu conceito de narrativa cultural tem sido fascinante. Nossas rotas piloto mostram real engajamento dos passageiros e estamos animados em fazer parte da modelagem desta inovação.',
            author: 'Carlos Mendoza',
            role: 'Diretor Operações de Frota',
            company: 'Premium Airport Services',
            location: 'São Paulo, Brasil',
            results: 'Parceiro Piloto'
          },
          {
            quote: 'Os testes beta iniciais mostraram resultados promissores para satisfação dos passageiros. Apreciamos fazer parte do processo de desenvolvimento e contribuir para o roadmap.',
            author: 'Sarah Chen',
            role: 'CEO',
            company: 'Metropolitan Tours',
            location: 'San Francisco, EUA',
            results: 'Testador Beta'
          },
          {
            quote: 'Como parceiro inicial, estamos ajudando a Tuggi a entender o que empresas de transporte realmente precisam. A abordagem colaborativa é refrescante e a tecnologia mostra potencial real.',
            author: 'Ahmed Hassan',
            role: 'Gerente Desenvolvimento Negócios',
            company: 'City Connect Transport',
            location: 'Dubai, EAU',
            results: 'Parceiro Fundador'
          }
        ],
        finalCtaTitle: 'Pronto para Transformar Seu Negócio?',
        finalCtaSubtitle: 'Junte-se a centenas de empresas de transporte mundialmente que já estão vendo resultados mensuráveis com Tuggi Drive.',
        getStarted: 'Começar Hoje',
        scheduleConsultation: 'Agendar Consulta',
        contactInfo: 'Dúvidas sobre ROI ou implementação?',
        email: 'business@tuggi.com',
        phone: '+1 (555) TUGGI-01'
      },
      ES: {
        badge: '🧪 Programa Beta',
        title: 'Sé el Primero. Lidera el Cambio en la Experiencia del Pasajero.',
        subtitle: 'Asociate con Tuggi para pionerizar un nuevo estándar de viaje cultural — impulsado por IA y diseñado para elevar los servicios de transporte. Nuestros socios fundadores están moldeando el futuro hoy.',
        calculateROI: 'Convertirse en Socio Fundador',
        viewCaseStudies: 'Solicitar Acceso Temprano',
        keyMetrics: [
          { value: '🚀', label: 'Diseñado para impulsar satisfacción y lealtad de pasajeros' },
          { value: '⚙️', label: 'Construido para integración GPS perfecta — sin distracciones para conductores' },
          { value: '🛠️', label: 'Actualmente en fase piloto con flotas seleccionadas' },
          { value: '🎧', label: 'Experiencias culturales de audio probadamente involucran pasajeros' }
        ],
        coreValuesTitle: 'Por Qué Convertirse en Socio Fundador',
        coreValuesSubtitle: 'Únete a un grupo selecto de empresas de transporte visionarias co-creando el futuro de las experiencias de pasajeros.',
        coreValues: [
          {
            title: 'Ventaja de Acceso Temprano',
            description: 'Ayuda a dar forma al roadmap. Influye en características que importan a tu flota.',
            benefits: [
              'Influencia directa en desarrollo de características',
              'Acceso prioritario a nuevas capacidades',
              'Beneficios exclusivos de socio fundador',
              'Soporte de integración personalizada'
            ],
            metrics: {
              value: '🎯',
              label: 'Influencia Estratégica',
              improvement: 'Moldea el futuro de la tecnología de viajes'
            }
          },
          {
            title: 'Diferenciación de Marca',
            description: 'Entrega algo que los competidores no pueden: valor cultural y experiencia premium.',
            benefits: [
              'Posicionamiento de mercado único',
              'Diferenciación de servicio premium',
              'Reputación de marca mejorada',
              'Creación de barrera competitiva'
            ],
            metrics: {
              value: '💎',
              label: 'Liderazgo de Mercado',
              improvement: 'Sé el pionero de la experiencia cultural'
            }
          },
          {
            title: 'Innovación Compartida',
            description: 'Sé parte de una visión audaz — con co-marketing, insights de piloto y soporte dedicado.',
            benefits: [
              'Oportunidades de prensa co-branded',
              'Historias de éxito compartidas',
              'Iniciativas de innovación conjunta',
              'Equipo dedicado de socio fundador'
            ],
            metrics: {
              value: '🤝',
              label: 'Asociación Estratégica',
              improvement: 'Innovación a través de la colaboración'
            }
          }
        ],
        foundingBenefitsTitle: 'Lo Que Reciben Nuestros Socios Fundadores',
        foundingBenefitsSubtitle: 'Ventajas exclusivas para las empresas de transporte que se unen a nosotros en la creación del futuro.',
        foundingBenefits: [
          { icon: '🧠', title: 'Equipo de innovación dedicado' },
          { icon: '🎤', title: 'Onboarding personalizado de voz y narrativa' },
          { icon: '🚀', title: 'Oportunidades de prensa co-branded' },
          { icon: '🧪', title: 'Acceso a características beta antes del lanzamiento público' },
          { icon: '📊', title: 'Reportes mensuales de insights y uso' },
          { icon: '🤝', title: 'Soporte prioritario e influencia en roadmap' }
        ],
        businessImpactTitle: 'Resultados Iniciales de Socios Piloto',
        businessImpactSubtitle: 'Feedback inicial y métricas de empresas de transporte actualmente probando Tuggi Drive en beta.',
        competitiveAdvantagesTitle: 'Gane Ventaja Competitiva',
        competitiveAdvantagesSubtitle: 'Posicione su negocio de transporte por delante de competidores con tecnología innovadora que crea relaciones duraderas con clientes.',
        competitiveAdvantages: [
          {
            title: 'Unique Market Position',
            description: 'Be the first transportation company in your market to offer AI-powered cultural storytelling.',
            icon: '🎯',
            impact: 'Market Leadership'
          },
          {
            title: 'Premium Service Offering',
            description: 'Transforme viajes estándar en experiencias culturales premium que justifican precios más altos.',
            icon: '💎',
            impact: 'Crecimiento Ingresos'
          },
          {
            title: 'Customer Loyalty',
            description: 'Cree experiencias memorables que conviertan pasajeros únicos en clientes leales y recurrentes.',
            icon: '❤️',
            impact: 'Aumento Retención'
          },
          {
            title: 'Brand Differentiation',
            description: 'Destáquese de competidores con tecnología innovadora que mejora la reputación de su marca.',
            icon: '🌟',
            impact: 'Valor de Marca'
          }
        ],
        implementationTitle: 'Proceso de Implementación Simple',
        implementationSubtitle: 'Comience con Tuggi Drive en minutos, no meses. Nuestro proceso simplificado asegura cero interrupción a sus operaciones.',
        implementationSteps: [
          {
            step: '1',
            title: 'Configuración Rápida',
            description: 'Instale Tuggi Drive en menos de 5 minutos con nuestro sistema de despliegue de un clic.',
            duration: '< 5 minutos'
          },
          {
            step: '2',
            title: 'Integración de Flota',
            description: 'Conecte toda su flota a través de nuestro panel de gestión centralizado.',
            duration: '1 día'
          },
          {
            step: '3',
            title: 'Salir al Aire',
            description: 'Comience a entregar experiencias culturales inmediatamente con activación automática de contenido.',
            duration: 'Instantáneo'
          }
        ],
        startImplementation: 'Iniciar Implementación Hoy',
        testimonialsTitle: 'Feedback de Socios Tempranos',
        testimonialsSubtitle: 'Insights de empresas de transporte actualmente pilotando Tuggi Drive en fase beta.',
        betaBadge: '🧪 Testimonio Beta',
        testimonials: [
          {
            quote: 'Trabajar con Tuggi para probar su concepto de narrativa cultural ha sido fascinante. Nuestras rutas piloto muestran real compromiso de pasajeros y estamos emocionados de ser parte de moldear esta innovación.',
            author: 'Carlos Mendoza',
            role: 'Director Operaciones de Flota',
            company: 'Premium Airport Services',
            location: 'São Paulo, Brasil',
            results: 'Socio Piloto'
          },
          {
            quote: 'Las pruebas beta iniciales han mostrado resultados prometedores para satisfacción de pasajeros. Apreciamos ser parte del proceso de desarrollo y contribuir al roadmap.',
            author: 'Sarah Chen',
            role: 'CEO',
            company: 'Metropolitan Tours',
            location: 'San Francisco, EE.UU.',
            results: 'Probador Beta'
          },
          {
            quote: 'Como socio temprano, estamos ayudando a Tuggi a entender lo que empresas de transporte realmente necesitan. El enfoque colaborativo es refrescante y la tecnología muestra potencial real.',
            author: 'Ahmed Hassan',
            role: 'Gerente Desarrollo Negocios',
            company: 'City Connect Transport',
            location: 'Dubai, EAU',
            results: 'Socio Fundador'
          }
        ],
        finalCtaTitle: '¿Listo para Transformar Su Negocio?',
        finalCtaSubtitle: 'Únase a cientos de empresas de transporte mundialmente que ya están viendo resultados medibles con Tuggi Drive.',
        getStarted: 'Comenzar Hoy',
        scheduleConsultation: 'Programar Consulta',
        contactInfo: '¿Preguntas sobre ROI o implementación?',
        email: 'business@tuggi.com',
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-tuggi-primary/10 rounded-full mb-8">
              <TrendingUp className="w-5 h-5 text-tuggi-primary mr-2" />
              <span className="text-tuggi-primary font-semibold text-sm">{content.badge}</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-8">
              {content.title}
            </h1>
            
            <p className="text-xl lg:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed mb-12">
              {content.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleCTAClick('join_founding_partner')}
                className="bg-tuggi-primary hover:bg-tuggi-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <span>{content.calculateROI}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleCTAClick('request_early_access')}
                className="border-2 border-tuggi-primary text-tuggi-primary hover:bg-tuggi-primary hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200"
              >
                {content.viewCaseStudies}
              </button>
            </div>
          </div>

          {/* Key Metrics Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {content.keyMetrics.map((metric: any, index: number) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200 shadow-sm flex items-center space-x-4">
                <div className="text-4xl">{metric.value}</div>
                <div className="text-sm font-semibold text-neutral-900 leading-relaxed">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Value Propositions */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-6">
              {content.coreValuesTitle}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {content.coreValuesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {content.coreValues.map((value: any, index: number) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 hover:border-tuggi-primary/20 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon & Title */}
                <div className="text-center mb-8">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${
                    index === 0 ? 'from-tuggi-primary to-blue-600' :
                    index === 1 ? 'from-tuggi-secondary to-orange-600' :
                    'from-green-500 to-emerald-600'
                  } flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {index === 0 && <Shield className="w-10 h-10 text-white" />}
                    {index === 1 && <TrendingUp className="w-10 h-10 text-white" />}
                    {index === 2 && <Settings className="w-10 h-10 text-white" />}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4 group-hover:text-tuggi-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {value.description}
                  </p>
                </div>

                {/* Key Metric */}
                <div className="bg-white/80 rounded-xl p-6 mb-6 text-center border border-neutral-200">
                  <div className="text-3xl font-bold text-tuggi-primary mb-2">
                    {value.metrics.value}
                  </div>
                  <div className="text-lg font-semibold text-neutral-900 mb-1">
                    {value.metrics.label}
                  </div>
                  <div className="text-sm text-neutral-600">
                    {value.metrics.improvement}
                  </div>
                </div>

                {/* Benefits List */}
                <div className="space-y-3">
                  {value.benefits.map((benefit: string, benefitIndex: number) => (
                    <div key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-tuggi-primary flex-shrink-0" />
                      <span className="text-neutral-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Our Founding Partners Get */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              {content.foundingBenefitsTitle}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {content.foundingBenefitsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.foundingBenefits.map((benefit: any, index: number) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group">
                <div className="text-4xl mb-6">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-neutral-900 group-hover:text-tuggi-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              {content.competitiveAdvantagesTitle}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {content.competitiveAdvantagesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.competitiveAdvantages.map((advantage: any, index: number) => (
              <div key={index} className="group bg-gradient-to-br from-tuggi-primary/5 to-tuggi-secondary/5 rounded-2xl p-8 border border-tuggi-primary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl mb-4">{advantage.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-tuggi-primary transition-colors duration-300">
                      {advantage.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                      {advantage.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 bg-tuggi-primary/10 rounded-full">
                      <span className="text-tuggi-primary font-semibold text-sm">{advantage.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-tuggi-primary/5 to-tuggi-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              {content.implementationTitle}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {content.implementationSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {content.implementationSteps.map((step: any, index: number) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < content.implementationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-tuggi-primary to-tuggi-secondary transform -translate-x-4 z-0"></div>
                )}
                
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-neutral-200 text-center hover:shadow-xl transition-all duration-300 z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-tuggi-primary to-tuggi-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    {index === 0 && <Smartphone className="w-8 h-8 text-white" />}
                    {index === 1 && <Settings className="w-8 h-8 text-white" />}
                    {index === 2 && <Zap className="w-8 h-8 text-white" />}
                  </div>
                  
                  <div className="text-3xl font-bold text-tuggi-primary mb-2">
                    {step.step}
                  </div>
                  
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-neutral-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                  
                  <div className="inline-flex items-center px-4 py-2 bg-tuggi-primary/10 rounded-full">
                    <Clock className="w-4 h-4 text-tuggi-primary mr-2" />
                    <span className="text-tuggi-primary font-semibold text-sm">{step.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => handleCTAClick('start_implementation')}
              className="bg-tuggi-primary hover:bg-tuggi-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2 mx-auto"
            >
              <span>{content.startImplementation}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      {/* <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              {content.testimonialsTitle}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {content.testimonialsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {content.testimonials.map((testimonial: any, index: number) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8 hover:shadow-xl transition-all duration-300 relative">
                
                <div className="absolute -top-3 -right-3 bg-tuggi-secondary/20 text-tuggi-secondary px-3 py-1 rounded-full text-xs font-semibold">
                  {content.betaBadge}
                </div>
                
                <div className="flex text-tuggi-primary mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                
                <p className="text-lg text-neutral-700 leading-relaxed italic mb-6">
                  "{testimonial.quote}"
                </p>
                
                <div className="border-t border-neutral-200 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="font-bold text-neutral-900">{testimonial.author}</div>
                      <div className="text-tuggi-primary font-medium">{testimonial.role}</div>
                      <div className="text-sm text-neutral-600">{testimonial.company}</div>
                      <div className="text-xs text-neutral-500 flex items-center mt-1">
                        <Globe className="w-3 h-3 mr-1" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-tuggi-primary/10 to-tuggi-secondary/10 rounded-lg p-3 border border-tuggi-primary/20">
                    <div className="text-sm font-semibold text-tuggi-primary">
                      Status: {testimonial.results}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

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
              onClick={() => handleCTAClick('get_started')}
              className="bg-white hover:bg-neutral-100 text-tuggi-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
            >
              <span>{content.getStarted}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => handleCTAClick('schedule_consultation')}
              className="border-2 border-white text-white hover:bg-white hover:text-tuggi-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              {content.scheduleConsultation}
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
                onClick={() => handleCTAClick('contact_email')}
                className="hover:text-tuggi-primary-light transition-colors duration-200"
              >
                📧 {content.email}
              </a>
              <a 
                href={`tel:${content.phone}`}
                onClick={() => handleCTAClick('contact_phone')}
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

export default BusinessBenefitsPage;