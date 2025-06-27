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
        badge: 'Business Benefits',
        title: 'Transform Your Business with Proven Results',
        subtitle: 'Discover how transportation companies worldwide are using Tuggi Drive to increase revenue, improve customer satisfaction, and gain competitive advantage.',
        calculateROI: 'Calculate Your ROI',
        viewCaseStudies: 'View Case Studies',
        keyMetrics: [
          { value: '+22%', label: 'Revenue Growth' },
          { value: '4.8/5', label: 'Satisfaction' },
          { value: '+35%', label: 'Retention' },
          { value: '<5min', label: 'Setup Time' }
        ],
        coreValuesTitle: 'Three Pillars of Business Success',
        coreValuesSubtitle: 'Tuggi Drive delivers measurable business value through quality, innovation, and operational excellence.',
        coreValues: [
          {
            title: 'High Service Quality & Reliability',
            description: 'Deliver consistent, premium experiences that exceed passenger expectations and build lasting customer relationships.',
            benefits: [
              '99.9% system uptime guarantee',
              'Professional-grade content curation',
              'Real-time quality monitoring',
              'Instant technical support'
            ],
            metrics: {
              value: '4.8/5',
              label: 'Customer Satisfaction',
              improvement: '+35% passenger retention'
            }
          },
          {
            title: 'Competitive Edge Through Innovation',
            description: 'Differentiate your transportation service with cutting-edge cultural storytelling technology that competitors cannot match.',
            benefits: [
              'First-mover advantage in cultural tech',
              'Unique value proposition for customers',
              'Premium pricing opportunities',
              'Enhanced brand positioning'
            ],
            metrics: {
              value: '+22%',
              label: 'Revenue Growth',
              improvement: 'Average increase in bookings'
            }
          },
          {
            title: 'Easy Implementation & Management',
            description: 'Seamless integration with existing systems and centralized management dashboard for complete operational control.',
            benefits: [
              'One-click installation process',
              'Zero disruption to current operations',
              'Centralized fleet management',
              'Automated content updates'
            ],
            metrics: {
              value: '<5 min',
              label: 'Setup Time',
              improvement: 'From installation to activation'
            }
          }
        ],
        businessImpactTitle: 'Measurable Business Impact',
        businessImpactSubtitle: 'Real data from transportation companies using Tuggi Drive to transform their passenger experience and business results.',
        businessImpacts: [
          {
            category: 'Revenue Growth',
            stats: [
              { value: '+22%', label: 'Average Revenue Increase', description: 'Through premium service offerings' },
              { value: '+35%', label: 'Customer Retention', description: 'Higher repeat booking rates' },
              { value: '+18%', label: 'Price Premium', description: 'Ability to charge more for enhanced experience' }
            ]
          },
          {
            category: 'Operational Efficiency',
            stats: [
              { value: '<5 min', label: 'Implementation Time', description: 'From installation to full operation' },
              { value: '90%', label: 'Reduced Support Calls', description: 'Fewer passenger complaints' },
              { value: '24/7', label: 'Automated Operation', description: 'No manual intervention required' }
            ]
          },
          {
            category: 'Customer Experience',
            stats: [
              { value: '4.8/5', label: 'Satisfaction Rating', description: 'Average passenger experience score' },
              { value: '95%', label: 'Positive Feedback', description: 'Passengers recommend the service' },
              { value: '3x', label: 'Social Sharing', description: 'Increased social media mentions' }
            ]
          },
          {
            category: 'Market Position',
            stats: [
              { value: '1st', label: 'Market Position', description: 'First to offer cultural storytelling' },
              { value: '500+', label: 'Partner Companies', description: 'Growing network of operators' },
              { value: '50+', label: 'Cities Covered', description: 'Expanding global presence' }
            ]
          }
        ],
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
        testimonialsTitle: 'Customer Success Stories',
        testimonialsSubtitle: 'Real results from transportation companies who transformed their business with Tuggi Drive.',
        testimonials: [
          {
            quote: 'Tuggi Drive transformed our airport transfer service from commodity transportation to premium cultural experiences. Our revenue increased 28% in the first quarter.',
            author: 'Carlos Mendoza',
            role: 'Fleet Operations Director',
            company: 'Premium Airport Services',
            location: 'São Paulo, Brazil',
            results: '+28% Revenue Growth'
          },
          {
            quote: 'The implementation was incredibly smooth. Within hours, our drivers were delivering engaging stories to passengers. Customer satisfaction scores jumped to 4.9/5.',
            author: 'Sarah Chen',
            role: 'CEO',
            company: 'Metropolitan Tours',
            location: 'San Francisco, USA',
            results: '4.9/5 Satisfaction'
          },
          {
            quote: 'Our passengers now specifically request our "storytelling rides." We\'ve become the preferred transportation choice for hotels and travel agencies.',
            author: 'Ahmed Hassan',
            role: 'Business Development Manager',
            company: 'City Connect Transport',
            location: 'Dubai, UAE',
            results: '+45% Bookings'
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
        badge: 'Benefícios Empresariais',
        title: 'Transforme Seu Negócio com Resultados Comprovados',
        subtitle: 'Descubra como empresas de transporte mundialmente estão usando Tuggi Drive para aumentar receita, melhorar satisfação do cliente e ganhar vantagem competitiva.',
        calculateROI: 'Calcular Seu ROI',
        viewCaseStudies: 'Ver Casos de Estudo',
        keyMetrics: [
          { value: '+22%', label: 'Crescimento Receita' },
          { value: '4.8/5', label: 'Satisfação' },
          { value: '+35%', label: 'Retenção' },
          { value: '<5min', label: 'Tempo Configuração' }
        ],
        coreValuesTitle: 'Três Pilares do Sucesso Empresarial',
        coreValuesSubtitle: 'Tuggi Drive entrega valor empresarial mensurável através de qualidade, inovação e excelência operacional.',
        coreValues: [
          {
            title: 'Alta Qualidade de Serviço e Confiabilidade',
            description: 'Entregue experiências consistentes e premium que excedem expectativas dos passageiros e constroem relacionamentos duradouros com clientes.',
            benefits: [
              'Garantia 99.9% tempo atividade sistema',
              'Curadoria conteúdo nível profissional',
              'Monitoramento qualidade tempo real',
              'Suporte técnico instantâneo'
            ],
            metrics: {
              value: '4.8/5',
              label: 'Satisfação do Cliente',
              improvement: '+35% retenção passageiros'
            }
          },
          {
            title: 'Vantagem Competitiva Através da Inovação',
            description: 'Diferencie seu serviço de transporte com tecnologia de narrativa cultural de ponta que competidores não conseguem igualar.',
            benefits: [
              'Vantagem pioneiro em tecnologia cultural',
              'Proposta valor única para clientes',
              'Oportunidades preços premium',
              'Posicionamento marca aprimorado'
            ],
            metrics: {
              value: '+22%',
              label: 'Crescimento Receita',
              improvement: 'Aumento médio em reservas'
            }
          },
          {
            title: 'Implementação e Gestão Fáceis',
            description: 'Integração perfeita com sistemas existentes e painel gestão centralizado para controle operacional completo.',
            benefits: [
              'Processo instalação um clique',
              'Zero interrupção operações atuais',
              'Gestão frota centralizada',
              'Atualizações conteúdo automatizadas'
            ],
            metrics: {
              value: '<5 min',
              label: 'Tempo Configuração',
              improvement: 'Da instalação à ativação'
            }
          }
        ],
        businessImpactTitle: 'Impacto Empresarial Mensurável',
        businessImpactSubtitle: 'Dados reais de empresas de transporte usando Tuggi Drive para transformar sua experiência de passageiros e resultados empresariais.',
        businessImpacts: [
          {
            category: 'Crescimento de Receita',
            stats: [
              { value: '+22%', label: 'Aumento Médio Receita', description: 'Através ofertas serviços premium' },
              { value: '+35%', label: 'Retenção Clientes', description: 'Taxas reservas repetidas mais altas' },
              { value: '+18%', label: 'Prêmio Preço', description: 'Capacidade cobrar mais por experiência aprimorada' }
            ]
          },
          {
            category: 'Eficiência Operacional',
            stats: [
              { value: '<5 min', label: 'Tempo Implementação', description: 'Da instalação à operação completa' },
              { value: '90%', label: 'Redução Chamadas Suporte', description: 'Menos reclamações passageiros' },
              { value: '24/7', label: 'Operação Automatizada', description: 'Sem intervenção manual necessária' }
            ]
          },
          {
            category: 'Experiência do Cliente',
            stats: [
              { value: '4.8/5', label: 'Avaliação Satisfação', description: 'Pontuação média experiência passageiro' },
              { value: '95%', label: 'Feedback Positivo', description: 'Passageiros recomendam o serviço' },
              { value: '3x', label: 'Compartilhamento Social', description: 'Aumento menções redes sociais' }
            ]
          },
          {
            category: 'Posição no Mercado',
            stats: [
              { value: '1º', label: 'Posição Mercado', description: 'Primeiro a oferecer narrativa cultural' },
              { value: '500+', label: 'Empresas Parceiras', description: 'Rede crescente de operadores' },
              { value: '50+', label: 'Cidades Cobertas', description: 'Presença global em expansão' }
            ]
          }
        ],
        competitiveAdvantagesTitle: 'Ganhe Vantagem Competitiva',
        competitiveAdvantagesSubtitle: 'Posicione seu negócio de transporte à frente dos competidores com tecnologia inovadora que cria relacionamentos duradouros com clientes.',
        competitiveAdvantages: [
          {
            title: 'Posição Única no Mercado',
            description: 'Seja a primeira empresa de transporte em seu mercado a oferecer narrativa cultural com IA.',
            icon: '🎯',
            impact: 'Liderança de Mercado'
          },
          {
            title: 'Oferta de Serviço Premium',
            description: 'Transforme viagens padrão em experiências culturais premium que justificam preços mais altos.',
            icon: '💎',
            impact: 'Crescimento Receita'
          },
          {
            title: 'Lealdade do Cliente',
            description: 'Crie experiências memoráveis que transformam passageiros únicos em clientes leais e recorrentes.',
            icon: '❤️',
            impact: 'Aumento Retenção'
          },
          {
            title: 'Diferenciação da Marca',
            description: 'Destaque-se dos competidores com tecnologia inovadora que melhora a reputação da sua marca.',
            icon: '🌟',
            impact: 'Valor da Marca'
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
        testimonialsTitle: 'Histórias de Sucesso de Clientes',
        testimonialsSubtitle: 'Resultados reais de empresas de transporte que transformaram seus negócios com Tuggi Drive.',
        testimonials: [
          {
            quote: 'Tuggi Drive transformou nosso serviço de transfer aeroporto de transporte commodity para experiências culturais premium. Nossa receita aumentou 28% no primeiro trimestre.',
            author: 'Carlos Mendoza',
            role: 'Diretor Operações de Frota',
            company: 'Premium Airport Services',
            location: 'São Paulo, Brasil',
            results: '+28% Crescimento Receita'
          },
          {
            quote: 'A implementação foi incrivelmente suave. Em horas, nossos motoristas estavam entregando histórias envolventes aos passageiros. Pontuações satisfação cliente saltaram para 4.9/5.',
            author: 'Sarah Chen',
            role: 'CEO',
            company: 'Metropolitan Tours',
            location: 'San Francisco, EUA',
            results: '4.9/5 Satisfação'
          },
          {
            quote: 'Nossos passageiros agora solicitam especificamente nossas "viagens com narrativa". Nos tornamos a escolha preferida de transporte para hotéis e agências de viagem.',
            author: 'Ahmed Hassan',
            role: 'Gerente Desenvolvimento Negócios',
            company: 'City Connect Transport',
            location: 'Dubai, EAU',
            results: '+45% Reservas'
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
        badge: 'Beneficios Empresariales',
        title: 'Transforme Su Negocio con Resultados Probados',
        subtitle: 'Descubra cómo empresas de transporte mundialmente están usando Tuggi Drive para aumentar ingresos, mejorar satisfacción del cliente y ganar ventaja competitiva.',
        calculateROI: 'Calcular Su ROI',
        viewCaseStudies: 'Ver Casos de Estudio',
        keyMetrics: [
          { value: '+22%', label: 'Crecimiento Ingresos' },
          { value: '4.8/5', label: 'Satisfacción' },
          { value: '+35%', label: 'Retención' },
          { value: '<5min', label: 'Tiempo Configuración' }
        ],
        coreValuesTitle: 'Tres Pilares del Éxito Empresarial',
        coreValuesSubtitle: 'Tuggi Drive entrega valor empresarial medible a través de calidad, innovación y excelencia operacional.',
        coreValues: [
          {
            title: 'Alta Calidad de Servicio y Confiabilidad',
            description: 'Entregue experiencias consistentes y premium que excedan expectativas de pasajeros y construyan relaciones duraderas con clientes.',
            benefits: [
              'Garantía 99.9% tiempo actividad sistema',
              'Curación contenido nivel profesional',
              'Monitoreo calidad tiempo real',
              'Soporte técnico instantáneo'
            ],
            metrics: {
              value: '4.8/5',
              label: 'Satisfacción del Cliente',
              improvement: '+35% retención pasajeros'
            }
          },
          {
            title: 'Ventaja Competitiva a Través de la Innovación',
            description: 'Diferencie su servicio de transporte con tecnología de narrativa cultural de vanguardia que competidores no pueden igualar.',
            benefits: [
              'Ventaja pionero en tecnología cultural',
              'Propuesta valor única para clientes',
              'Oportunidades precios premium',
              'Posicionamiento marca mejorado'
            ],
            metrics: {
              value: '+22%',
              label: 'Crecimiento Ingresos',
              improvement: 'Aumento promedio en reservas'
            }
          },
          {
            title: 'Implementación y Gestión Fáciles',
            description: 'Integración perfecta con sistemas existentes y panel gestión centralizado para control operacional completo.',
            benefits: [
              'Proceso instalación un clic',
              'Cero interrupción operaciones actuales',
              'Gestión flota centralizada',
              'Actualizaciones contenido automatizadas'
            ],
            metrics: {
              value: '<5 min',
              label: 'Tiempo Configuración',
              improvement: 'De instalación a activación'
            }
          }
        ],
        businessImpactTitle: 'Impacto Empresarial Medible',
        businessImpactSubtitle: 'Datos reales de empresas de transporte usando Tuggi Drive para transformar su experiencia de pasajeros y resultados empresariales.',
        businessImpacts: [
          {
            category: 'Crecimiento de Ingresos',
            stats: [
              { value: '+22%', label: 'Aumento Promedio Ingresos', description: 'A través ofertas servicios premium' },
              { value: '+35%', label: 'Retención Clientes', description: 'Tasas reservas repetidas más altas' },
              { value: '+18%', label: 'Premio Precio', description: 'Capacidad cobrar más por experiencia mejorada' }
            ]
          },
          {
            category: 'Eficiencia Operacional',
            stats: [
              { value: '<5 min', label: 'Tiempo Implementación', description: 'De instalación a operación completa' },
              { value: '90%', label: 'Reducción Llamadas Soporte', description: 'Menos quejas pasajeros' },
              { value: '24/7', label: 'Operación Automatizada', description: 'Sin intervención manual requerida' }
            ]
          },
          {
            category: 'Experiencia del Cliente',
            stats: [
              { value: '4.8/5', label: 'Calificación Satisfacción', description: 'Puntuación promedio experiencia pasajero' },
              { value: '95%', label: 'Comentarios Positivos', description: 'Pasajeros recomiendan el servicio' },
              { value: '3x', label: 'Compartir Social', description: 'Aumento menciones redes sociales' }
            ]
          },
          {
            category: 'Posición en el Mercado',
            stats: [
              { value: '1º', label: 'Posición Mercado', description: 'Primero en ofrecer narrativa cultural' },
              { value: '500+', label: 'Empresas Socias', description: 'Red creciente de operadores' },
              { value: '50+', label: 'Ciudades Cubiertas', description: 'Presencia global en expansión' }
            ]
          }
        ],
        competitiveAdvantagesTitle: 'Gane Ventaja Competitiva',
        competitiveAdvantagesSubtitle: 'Posicione su negocio de transporte por delante de competidores con tecnología innovadora que crea relaciones duraderas con clientes.',
        competitiveAdvantages: [
          {
            title: 'Posición Única en el Mercado',
            description: 'Sea la primera empresa de transporte en su mercado en ofrecer narrativa cultural con IA.',
            icon: '🎯',
            impact: 'Liderazgo de Mercado'
          },
          {
            title: 'Oferta de Servicio Premium',
            description: 'Transforme viajes estándar en experiencias culturales premium que justifican precios más altos.',
            icon: '💎',
            impact: 'Crecimiento Ingresos'
          },
          {
            title: 'Lealtad del Cliente',
            description: 'Cree experiencias memorables que conviertan pasajeros únicos en clientes leales y recurrentes.',
            icon: '❤️',
            impact: 'Aumento Retención'
          },
          {
            title: 'Diferenciación de Marca',
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
        testimonialsTitle: 'Historias de Éxito de Clientes',
        testimonialsSubtitle: 'Resultados reales de empresas de transporte que transformaron sus negocios con Tuggi Drive.',
        testimonials: [
          {
            quote: 'Tuggi Drive transformó nuestro servicio de transfer aeropuerto de transporte commodity a experiencias culturales premium. Nuestros ingresos aumentaron 28% en el primer trimestre.',
            author: 'Carlos Mendoza',
            role: 'Director Operaciones de Flota',
            company: 'Premium Airport Services',
            location: 'São Paulo, Brasil',
            results: '+28% Crecimiento Ingresos'
          },
          {
            quote: 'La implementación fue increíblemente suave. En horas, nuestros conductores estaban entregando historias atractivas a pasajeros. Puntuaciones satisfacción cliente saltaron a 4.9/5.',
            author: 'Sarah Chen',
            role: 'CEO',
            company: 'Metropolitan Tours',
            location: 'San Francisco, EE.UU.',
            results: '4.9/5 Satisfacción'
          },
          {
            quote: 'Nuestros pasajeros ahora solicitan específicamente nuestros "viajes con narrativa". Nos hemos convertido en la opción preferida de transporte para hoteles y agencias de viajes.',
            author: 'Ahmed Hassan',
            role: 'Gerente Desarrollo Negocios',
            company: 'City Connect Transport',
            location: 'Dubai, EAU',
            results: '+45% Reservas'
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
                onClick={() => handleCTAClick('calculate_roi')}
                className="bg-tuggi-primary hover:bg-tuggi-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <span>{content.calculateROI}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleCTAClick('view_case_studies')}
                className="border-2 border-tuggi-primary text-tuggi-primary hover:bg-tuggi-primary hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200"
              >
                {content.viewCaseStudies}
              </button>
            </div>
          </div>

          {/* Key Metrics Preview */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {content.keyMetrics.map((metric: any, index: number) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-neutral-200 shadow-sm">
                <div className="text-3xl font-bold text-tuggi-primary mb-2">{metric.value}</div>
                <div className="text-sm font-semibold text-neutral-900">{metric.label}</div>
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

      {/* Business Impact Metrics */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              {content.businessImpactTitle}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {content.businessImpactSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {content.businessImpacts.map((impact: any, index: number) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                    index === 0 ? 'from-green-500 to-emerald-600' :
                    index === 1 ? 'from-tuggi-primary to-blue-600' :
                    index === 2 ? 'from-tuggi-secondary to-orange-600' :
                    'from-purple-500 to-violet-600'
                  } flex items-center justify-center shadow-lg`}>
                    {index === 0 && <BarChart3 className="w-8 h-8 text-white" />}
                    {index === 1 && <Clock className="w-8 h-8 text-white" />}
                    {index === 2 && <Users className="w-8 h-8 text-white" />}
                    {index === 3 && <Award className="w-8 h-8 text-white" />}
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900">{impact.category}</h3>
                </div>

                <div className="space-y-6">
                  {impact.stats.map((stat: any, statIndex: number) => (
                    <div key={statIndex} className="flex items-start space-x-4">
                      <div className="text-center min-w-[80px]">
                        <div className="text-2xl font-bold text-tuggi-primary mb-1">
                          {stat.value}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-neutral-900 mb-1">
                          {stat.label}
                        </div>
                        <div className="text-sm text-neutral-600">
                          {stat.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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
      <section className="py-20 lg:py-24 bg-white">
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
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8 hover:shadow-xl transition-all duration-300">
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
                  
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-3 border border-green-200">
                    <div className="text-sm font-semibold text-green-800">
                      Resultado: {testimonial.results}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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