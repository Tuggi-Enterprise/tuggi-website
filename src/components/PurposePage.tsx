import React from 'react';
import { Heart, Globe, Users, Compass, ArrowRight, Star, MapPin } from 'lucide-react';

interface PurposePageProps {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, language: string) => void;
}

const PurposePage: React.FC<PurposePageProps> = ({ 
  currentLanguage = 'EN',
  onCTAClick 
}) => {
  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      EN: {
        badge: 'Our Purpose',
        betaBadge: '🧪 Beta – Co-developing with selected fleet partners',
        title: 'Transforming Journeys into Meaningful Experiences',
        subtitle: 'We believe every journey should be more than transportation — it should be a gateway to understanding, connection, and wonder.',
        experienceTitle: 'Real Traveler Experience',
        experienceDescription: 'Tuggi Drive is currently co-developing immersive cultural narratives with selected transportation partners. These AI-powered stories adapt to location, language, and passenger profile — turning ordinary rides into engaging cultural journeys.',
        earlyResults: 'Early results show high engagement and memorable experiences. We\'re refining the system across different cities and fleet types.',
        experienceItems: [
          {
            title: 'Cultural Immersion:',
            description: 'Passengers discover local history, traditions, and hidden gems as they travel through each neighborhood.'
          },
          {
            title: 'Personalized Narratives:',
            description: 'Stories adapt to passenger preferences, language, and interests for maximum engagement.'
          },
          {
            title: 'Memorable Connections:',
            description: 'Every journey becomes a story worth sharing, creating lasting impressions of your service.'
          }
        ],
        passengerQuote: '"This isn\'t just a ride — it\'s a journey through time and culture."',
        passengerFeedback: '— Typical Passenger Feedback',
        missionTitle: 'Our Mission',
        missionParagraphs: [
          'At Tuggi, we have a **clear goal: to turn every journey into a meaningful experience**. Travelers don\'t just want to reach a destination — they want to live stories, understand cultures, and create memories.',
          'We create **technological solutions that allow transport and tourism companies to offer more than a service**: a personalized, informative, and emotionally engaging experience.',
          'Our commitment is to **excellence, innovation, and trust**. We work alongside our partners to elevate tourist mobility to a new level — where technology meets real-world wonder.'
        ],
        coreValuesTitle: 'Our Core Values',
        coreValuesSubtitle: 'The principles that guide every decision, every innovation, and every partnership we build.',
        coreValues: [
          {
            title: 'Excellence',
            description: 'We pursue perfection in every solution, ensuring our partners deliver exceptional experiences that exceed expectations.'
          },
          {
            title: 'Innovation',
            description: 'We pioneer cutting-edge technology that transforms ordinary journeys into extraordinary cultural discoveries.'
          },
          {
            title: 'Trust',
            description: 'We build lasting partnerships through transparency, reliability, and unwavering commitment to our clients\' success.'
          }
        ],
        impactTitle: 'Our Impact',
        impactSubtitle: 'Our goals and early results as we co-develop this transformative travel experience.',
        impactStats: [
          { number: '2M+', label: 'Cultural Stories Projected for 2025', description: 'Planned narrative delivery capacity' },
          { number: '500+', label: 'Companies in Expansion Scope', description: 'Transportation providers targeted worldwide' },
          { number: '50+', label: 'Target Destinations', description: 'Cities planned for cultural story coverage' },
          { number: '98%', label: 'Satisfaction Rate (Early Feedback)', description: 'Current pilot program results' }
        ],
        whyJoinTitle: 'Why Join Now?',
        whyJoinDescription: 'Tuggi Drive is inviting forward-thinking transportation providers to join our Early Access Program. As a partner, you\'ll help shape the future of travel storytelling — and benefit from exclusive onboarding support, marketing visibility, and product influence before public release.',
        applyEarlyAccess: 'Apply for Early Access',
        testimonialsTitle: 'Partner Success Stories',
        testimonialsSubtitle: 'Real results from transportation companies who\'ve transformed their passenger experience with Tuggi.',
        testimonials: [
          {
            quote: 'Tuggi transformed our fleet from simple transportation to cultural ambassadors. Our passengers now experience the soul of every destination.',
            author: 'Maria Santos',
            role: 'Fleet Operations Director',
            company: 'Premium Transport Solutions'
          },
          {
            quote: 'The technology seamlessly integrates with our existing systems while adding immeasurable value to every journey we provide.',
            author: 'James Mitchell',
            role: 'CEO',
            company: 'Metropolitan Tours'
          }
        ],
        ctaTitle: 'Ready to Transform Your Passenger Experience?',
        ctaSubtitle: 'Join forward-thinking transportation companies who are already creating memorable journeys with Tuggi Drive.',
        scheduleCall: 'Schedule a Partnership Call',
        downloadCases: 'Learn More About the Early Access Program',
        contactInfo: 'Questions about our mission or partnership opportunities?',
        email: 'hello@tuggi.com',
        phone: '+55 (11) 9.9471-8809'
      },
      PT: {
        badge: 'Nosso Propósito',
        betaBadge: '🧪 Beta – Co-desenvolvendo com parceiros de frota selecionados',
        title: 'Transformando Jornadas em Experiências Significativas',
        subtitle: 'Acreditamos que cada jornada deve ser mais do que transporte — deve ser uma porta de entrada para compreensão, conexão e maravilha.',
        experienceTitle: 'Experiência Real do Viajante',
        experienceDescription: 'O Tuggi Drive está atualmente co-desenvolvendo narrativas culturais imersivas com parceiros de transporte selecionados. Essas histórias alimentadas por IA se adaptam à localização, idioma e perfil do passageiro — transformando viagens ordinárias em jornadas culturais envolventes.',
        earlyResults: 'Os resultados iniciais mostram alto engajamento e experiências memoráveis. Estamos refinando o sistema em diferentes cidades e tipos de frota.',
        experienceItems: [
          {
            title: 'Imersão Cultural:',
            description: 'Passageiros descobrem história local, tradições e joias escondidas enquanto viajam por cada bairro.'
          },
          {
            title: 'Narrativas Personalizadas:',
            description: 'Histórias se adaptam às preferências, idioma e interesses dos passageiros para máximo engajamento.'
          },
          {
            title: 'Conexões Memoráveis:',
            description: 'Cada jornada se torna uma história que vale a pena compartilhar, criando impressões duradouras do seu serviço.'
          }
        ],
        passengerQuote: '"Isso não é apenas uma viagem — é uma jornada através do tempo e da cultura."',
        passengerFeedback: '— Feedback Típico de Passageiros',
        missionTitle: 'Nossa Missão',
        missionParagraphs: [
          'Na Tuggi, temos um **objetivo claro: transformar cada jornada em uma experiência significativa**. Viajantes não querem apenas chegar a um destino — eles querem viver histórias, entender culturas e criar memórias.',
          'Criamos **soluções tecnológicas que permitem empresas de transporte e turismo oferecer mais que um serviço**: uma experiência personalizada, informativa e emocionalmente envolvente.',
          'Nosso compromisso é com **excelência, inovação e confiança**. Trabalhamos junto com nossos parceiros para elevar a mobilidade turística a um novo nível — onde tecnologia encontra maravilha do mundo real.'
        ],
        coreValuesTitle: 'Nossos Valores Fundamentais',
        coreValuesSubtitle: 'Os princípios que guiam cada decisão, cada inovação e cada parceria que construímos.',
        coreValues: [
          {
            title: 'Excelência',
            description: 'Buscamos perfeição em cada solução, garantindo que nossos parceiros entreguem experiências excepcionais que excedem expectativas.'
          },
          {
            title: 'Inovação',
            description: 'Somos pioneiros em tecnologia de ponta que transforma jornadas ordinárias em descobertas culturais extraordinárias.'
          },
          {
            title: 'Confiança',
            description: 'Construímos parcerias duradouras através de transparência, confiabilidade e compromisso inabalável com o sucesso de nossos clientes.'
          }
        ],
        impactTitle: 'Nosso Impacto',
        impactSubtitle: 'Nossos objetivos e resultados iniciais enquanto co-desenvolvemos esta experiência de viagem transformadora.',
        impactStats: [
          { number: '2M+', label: 'Histórias Culturais Projetadas para 2025', description: 'Capacidade planejada de entrega de narrativas' },
          { number: '500+', label: 'Empresas no Escopo de Expansão', description: 'Provedores de transporte visados mundialmente' },
          { number: '50+', label: 'Destinos Alvo', description: 'Cidades planejadas para cobertura de histórias culturais' },
          { number: '98%', label: 'Taxa de Satisfação (Feedback Inicial)', description: 'Resultados atuais do programa piloto' }
        ],
        whyJoinTitle: 'Por Que Participar Agora?',
        whyJoinDescription: 'O Tuggi Drive está convidando provedores de transporte visionários para participar do nosso Programa de Acesso Antecipado. Como parceiro, você ajudará a moldar o futuro da narrativa de viagens — e se beneficiará de suporte exclusivo de integração, visibilidade de marketing e influência no produto antes do lançamento público.',
        applyEarlyAccess: 'Candidatar-se ao Acesso Antecipado',
        testimonialsTitle: 'Histórias de Sucesso de Parceiros',
        testimonialsSubtitle: 'Resultados reais de empresas de transporte que transformaram sua experiência de passageiros com Tuggi.',
        testimonials: [
          {
            quote: 'Tuggi transformou nossa frota de transporte simples para embaixadores culturais. Nossos passageiros agora experimentam a alma de cada destino.',
            author: 'Maria Santos',
            role: 'Diretora de Operações de Frota',
            company: 'Premium Transport Solutions'
          },
          {
            quote: 'A tecnologia se integra perfeitamente com nossos sistemas existentes enquanto adiciona valor imensurável a cada jornada que fornecemos.',
            author: 'James Mitchell',
            role: 'CEO',
            company: 'Metropolitan Tours'
          }
        ],
        ctaTitle: 'Pronto para Transformar Sua Experiência de Passageiros?',
        ctaSubtitle: 'Junte-se a empresas de transporte visionárias que já estão criando jornadas memoráveis com Tuggi Drive.',
        scheduleCall: 'Agendar Chamada de Parceria',
        downloadCases: 'Saiba Mais Sobre o Programa de Acesso Antecipado',
        contactInfo: 'Dúvidas sobre nossa missão ou oportunidades de parceria?',
        email: 'hello@tuggi.com',
        phone: '+55 (11) 9.9471-8809'
      },
      ES: {
        badge: 'Nuestro Propósito',
        betaBadge: '🧪 Beta – Co-desarrollando con socios de flota seleccionados',
        title: 'Transformando Viajes en Experiencias Significativas',
        subtitle: 'Creemos que cada viaje debe ser más que transporte — debe ser una puerta de entrada a la comprensión, conexión y maravilla.',
        experienceTitle: 'Experiencia Real del Viajero',
        experienceDescription: 'Tuggi Drive está actualmente co-desarrollando narrativas culturales inmersivas con socios de transporte seleccionados. Estas historias impulsadas por IA se adaptan a la ubicación, idioma y perfil del pasajero — transformando viajes ordinarios en jornadas culturales atractivas.',
        earlyResults: 'Los resultados tempranos muestran alto compromiso y experiencias memorables. Estamos refinando el sistema en diferentes ciudades y tipos de flota.',
        experienceItems: [
          {
            title: 'Inmersión Cultural:',
            description: 'Los pasajeros descubren historia local, tradiciones y gemas ocultas mientras viajan por cada vecindario.'
          },
          {
            title: 'Narrativas Personalizadas:',
            description: 'Las historias se adaptan a las preferencias, idioma e intereses de los pasajeros para máximo compromiso.'
          },
          {
            title: 'Conexiones Memorables:',
            description: 'Cada viaje se convierte en una historia que vale la pena compartir, creando impresiones duraderas de su servicio.'
          }
        ],
        passengerQuote: '"Esto no es solo un viaje — es un recorrido a través del tiempo y la cultura."',
        passengerFeedback: '— Comentarios Típicos de Pasajeros',
        missionTitle: 'Nuestra Misión',
        missionParagraphs: [
          'En Tuggi, tenemos un **objetivo claro: convertir cada viaje en una experiencia significativa**. Los viajeros no solo quieren llegar a un destino — quieren vivir historias, entender culturas y crear recuerdos.',
          'Creamos **soluciones tecnológicas que permiten a empresas de transporte y turismo ofrecer más que un servicio**: una experiencia personalizada, informativa y emocionalmente atractiva.',
          'Nuestro compromiso es con **excelencia, innovación y confianza**. Trabajamos junto con nuestros socios para elevar la movilidad turística a un nuevo nivel — donde la tecnología se encuentra con la maravilla del mundo real.'
        ],
        coreValuesTitle: 'Nuestros Valores Fundamentales',
        coreValuesSubtitle: 'Los principios que guían cada decisión, cada innovación y cada asociación que construimos.',
        coreValues: [
          {
            title: 'Excelencia',
            description: 'Buscamos perfección en cada solución, asegurando que nuestros socios entreguen experiencias excepcionales que excedan expectativas.'
          },
          {
            title: 'Innovación',
            description: 'Somos pioneros en tecnología de vanguardia que transforma viajes ordinarios en descubrimientos culturales extraordinarios.'
          },
          {
            title: 'Confianza',
            description: 'Construimos asociaciones duraderas a través de transparencia, confiabilidad y compromiso inquebrantable con el éxito de nuestros clientes.'
          }
        ],
        impactTitle: 'Nuestro Impacto',
        impactSubtitle: 'Nuestros objetivos y resultados tempranos mientras co-desarrollamos esta experiencia de viaje transformadora.',
        impactStats: [
          { number: '2M+', label: 'Historias Culturales Proyectadas para 2025', description: 'Capacidad planificada de entrega de narrativas' },
          { number: '500+', label: 'Empresas en Alcance de Expansión', description: 'Proveedores de transporte objetivo mundialmente' },
          { number: '50+', label: 'Destinos Objetivo', description: 'Ciudades planificadas para cobertura de historias culturales' },
          { number: '98%', label: 'Tasa de Satisfacción (Comentarios Tempranos)', description: 'Resultados actuales del programa piloto' }
        ],
        whyJoinTitle: '¿Por Qué Unirse Ahora?',
        whyJoinDescription: 'Tuggi Drive está invitando a proveedores de transporte visionarios a unirse a nuestro Programa de Acceso Temprano. Como socio, ayudarás a dar forma al futuro de la narrativa de viajes — y te beneficiarás de soporte exclusivo de incorporación, visibilidad de marketing e influencia del producto antes del lanzamiento público.',
        applyEarlyAccess: 'Solicitar Acceso Temprano',
        testimonialsTitle: 'Historias de Éxito de Socios',
        testimonialsSubtitle: 'Resultados reales de empresas de transporte que han transformado su experiencia de pasajeros con Tuggi.',
        testimonials: [
          {
            quote: 'Tuggi transformó nuestra flota de transporte simple a embajadores culturales. Nuestros pasajeros ahora experimentan el alma de cada destino.',
            author: 'Maria Santos',
            role: 'Directora de Operaciones de Flota',
            company: 'Premium Transport Solutions'
          },
          {
            quote: 'La tecnología se integra perfectamente con nuestros sistemas existentes mientras agrega valor inmensurable a cada viaje que proporcionamos.',
            author: 'James Mitchell',
            role: 'CEO',
            company: 'Metropolitan Tours'
          }
        ],
        ctaTitle: '¿Listo para Transformar Su Experiencia de Pasajeros?',
        ctaSubtitle: 'Únase a empresas de transporte visionarias que ya están creando viajes memorables con Tuggi Drive.',
        scheduleCall: 'Programar Llamada de Asociación',
        downloadCases: 'Obtener Más Información Sobre el Programa de Acceso Temprano',
        contactInfo: '¿Preguntas sobre nuestra misión u oportunidades de asociación?',
        email: 'hello@tuggi.app',
        phone: '+55 (11) 9.9471-8809'
      }
    };
    return content[language] || content['EN'];
  };

  const content = getLocalizedContent(currentLanguage);

  const handleCTAClick = (ctaType: string) => {
    onCTAClick?.(ctaType, currentLanguage);
  };

  // Helper function to render text with bold formatting
  const renderTextWithBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const boldText = part.slice(2, -2);
        return <strong key={index} className="text-tuggi-primary">{boldText}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Beta Badge */}
      {/* <div className="bg-gradient-to-r from-orange-500 to-yellow-500 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white font-semibold">
            {content.betaBadge}
          </div>
        </div>
      </div> */}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-50 via-white to-tuggi-primary/5 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-tuggi-primary/5 to-tuggi-secondary/5"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(0,168,232,0.1),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,111,0,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-tuggi-primary/10 rounded-full mb-8">
              <Compass className="w-5 h-5 text-tuggi-primary mr-2" />
              <span className="text-tuggi-primary font-semibold text-sm">{content.badge}</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-8">
              {content.title}
            </h1>
            
            <p className="text-xl lg:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              {content.subtitle}
            </p>
          </div>

          {/* Traveler Experience Visual */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200">
              {/* Simulated Travel Experience Interface */}
              <div className="bg-gradient-to-r from-tuggi-primary to-tuggi-secondary p-6">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6" />
                    <span className="font-semibold">Cultural Journey Active</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="text-sm">Premium Experience</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Experience Description */}
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                      {content.experienceTitle}
                    </h3>
                    <div className="space-y-6">
                      <div className="bg-tuggi-primary/10 rounded-lg p-4">
                        <p className="text-neutral-700 leading-relaxed">
                          {content.experienceDescription}
                        </p>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4">
                        <p className="text-neutral-700 leading-relaxed">
                          {content.earlyResults}
                        </p>
                      </div>
                      <div className="space-y-4">
                        {content.experienceItems.map((item: any, index: number) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className={`w-2 h-2 rounded-full mt-2 ${
                              index === 0 ? 'bg-tuggi-primary' : 
                              index === 1 ? 'bg-tuggi-secondary' : 'bg-green-500'
                            }`}></div>
                            <p className="text-neutral-700">
                              <strong>{item.title}</strong> {item.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Visual Representation */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-tuggi-primary/10 to-tuggi-secondary/10 rounded-2xl p-8 text-center">
                      <div className="text-6xl mb-4">🌍</div>
                      <div className="text-lg font-semibold text-neutral-800 mb-2">
                        {content.passengerQuote}
                      </div>
                      <div className="text-sm text-neutral-600">
                        {content.passengerFeedback}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-12">
              {content.missionTitle}
            </h2>
            
            <div className="space-y-8 text-lg lg:text-xl text-neutral-700 leading-relaxed">
              {content.missionParagraphs.map((paragraph: string, index: number) => (
                <p key={index} className={`rounded-2xl p-8 border ${
                  index === 0 ? 'bg-gradient-to-r from-tuggi-primary/5 to-tuggi-secondary/5 border-tuggi-primary/10' :
                  index === 1 ? 'bg-white border-2 border-neutral-200 shadow-sm' :
                  'bg-gradient-to-r from-green-50 to-blue-50 border-green-200'
                }`}>
                  {renderTextWithBold(paragraph)}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              {content.coreValuesTitle}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {content.coreValuesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {content.coreValues.map((value: any, index: number) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg border border-neutral-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                  index === 0 ? 'from-red-500 to-pink-600' :
                  index === 1 ? 'from-tuggi-primary to-blue-600' :
                  'from-green-500 to-emerald-600'
                } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {index === 0 && <Heart className="w-8 h-8 text-white" />}
                  {index === 1 && <Globe className="w-8 h-8 text-white" />}
                  {index === 2 && <Users className="w-8 h-8 text-white" />}
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-tuggi-primary transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      {/* <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              {content.impactTitle}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {content.impactSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {content.impactStats.map((stat: any, index: number) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-tuggi-primary/10 to-tuggi-secondary/10 rounded-2xl p-6 mb-4 group-hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-tuggi-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-neutral-900 mb-1">
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
      </section> */}

      {/* Partner Testimonials */}
      {/* <section className="py-20 lg:py-24 bg-gradient-to-br from-tuggi-primary/5 to-tuggi-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              {content.testimonialsTitle}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {content.testimonialsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {content.testimonials.map((testimonial: any, index: number) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200">
                <div className="mb-6">
                  <div className="flex text-tuggi-primary mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg text-neutral-700 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="border-t border-neutral-200 pt-6">
                  <div className="font-semibold text-neutral-900">{testimonial.author}</div>
                  <div className="text-tuggi-primary font-medium">{testimonial.role}</div>
                  <div className="text-sm text-neutral-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Join Now Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-8">
              {content.whyJoinTitle}
            </h2>
            <p className="text-lg lg:text-xl text-neutral-700 leading-relaxed mb-8">
              {content.whyJoinDescription}
            </p>
            <button 
              onClick={() => handleCTAClick('apply_early_access')}
              className="bg-tuggi-primary hover:bg-tuggi-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center mx-auto space-x-2"
            >
              <span>{content.applyEarlyAccess}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-tuggi-primary to-tuggi-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            {content.ctaTitle}
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8">
            {content.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleCTAClick('schedule_partnership_call')}
              className="bg-white hover:bg-neutral-100 text-tuggi-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
            >
              <span>{content.scheduleCall}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => handleCTAClick('download_case_studies')}
              className="border-2 border-white text-white hover:bg-white hover:text-tuggi-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              {content.downloadCases}
            </button>
          </div>
          
          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-tuggi-primary-light/30">
            <p className="text-white mb-4">
              {content.contactInfo}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-white">
              <a 
                href={`mailto:${content.email}`}
                onClick={() => handleCTAClick('contact_email_purpose')}
                className="hover:text-tuggi-primary-light transition-colors duration-200"
              >
                📧 {content.email}
              </a>
              <a 
                href={`tel:${content.phone}`}
                onClick={() => handleCTAClick('contact_phone_purpose')}
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

export default PurposePage;