import React from 'react';
import { Users, Award, Globe, Lightbulb, ArrowRight, MapPin, Calendar, Briefcase } from 'lucide-react';

interface StoryTeamPageProps {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, language: string) => void;
}

const StoryTeamPage: React.FC<StoryTeamPageProps> = ({ 
  currentLanguage = 'EN',
  onCTAClick 
}) => {
  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      EN: {
        badge: 'Our Story & Team',
        title: 'The People Behind Travel Innovation',
        subtitle: 'Meet the experienced team of travel-tech pioneers, cultural experts, and business leaders transforming how the world experiences journeys.',
        storyTitle: 'Our Story',
        storyParagraphs: [
          'Tuggi was born from a simple observation: millions of people travel every day, but most journeys are just about getting from point A to point B. We saw an opportunity to transform these routine trips into meaningful cultural experiences.',
          'Our founders, with deep backgrounds in travel technology and cultural preservation, recognized that transportation companies were uniquely positioned to become cultural ambassadors. Every taxi ride, bus journey, or shuttle trip could become a window into local history, traditions, and stories.',
          'Today, we\'re proud to partner with transportation companies worldwide, helping them differentiate their services while creating memorable experiences for millions of travelers. Our technology doesn\'t just move people — it connects them to the soul of every destination.'
        ],
        companyValues: [
          {
            title: 'Global Perspective',
            description: 'We celebrate cultural diversity while building technology that connects people across borders.'
          },
          {
            title: 'Partnership Focus',
            description: 'Our success is measured by the success of our transportation and tourism partners.'
          },
          {
            title: 'Excellence in Execution',
            description: 'We deliver enterprise-grade solutions that exceed expectations and drive real business results.'
          }
        ],
        milestones: [
          {
            year: '2020',
            title: 'Foundation',
            description: 'Tuggi was founded with a vision to transform transportation into cultural experiences.'
          },
          {
            year: '2021',
            title: 'First Product Launch',
            description: 'Tuggi Drive launched with initial partnerships in major metropolitan areas.'
          },
          {
            year: '2022',
            title: 'International Expansion',
            description: 'Expanded to serve transportation companies across three continents.'
          },
          {
            year: '2024',
            title: 'Innovation Leadership',
            description: 'Leading the travel-tech industry with AI-powered cultural storytelling.'
          }
        ],
        leadershipTitle: 'Leadership Team',
        leadershipSubtitle: 'Industry veterans and cultural experts united by a shared vision to transform travel experiences through technology.',
        teamMembers: [
          {
            name: 'Sarah Chen',
            title: 'Chief Executive Officer',
            expertise: 'Travel Technology & Business Strategy',
            bio: 'Former VP of Innovation at leading travel platform. 15+ years transforming how people experience destinations through technology.',
            image: '👩‍💼',
            background: 'from-tuggi-primary to-blue-600'
          },
          {
            name: 'Marcus Rodriguez',
            title: 'Chief Technology Officer',
            expertise: 'AI & Location-Based Services',
            bio: 'Ex-Google Maps engineer specializing in location intelligence. Pioneer in contextual storytelling algorithms.',
            image: '👨‍💻',
            background: 'from-tuggi-secondary to-orange-600'
          },
          {
            name: 'Elena Kowalski',
            title: 'VP of Product',
            expertise: 'User Experience & Cultural Content',
            bio: 'Former cultural consultant for UNESCO. Expert in creating authentic, respectful cultural narratives for global audiences.',
            image: '👩‍🎨',
            background: 'from-purple-500 to-violet-600'
          },
          {
            name: 'David Park',
            title: 'VP of Business Development',
            expertise: 'B2B Partnerships & Fleet Integration',
            bio: 'Transportation industry veteran with 20+ years building partnerships with major fleet operators worldwide.',
            image: '👨‍💼',
            background: 'from-green-500 to-emerald-600'
          },
          {
            name: 'Dr. Amara Okafor',
            title: 'Head of Research',
            expertise: 'Cultural Anthropology & AI Ethics',
            bio: 'PhD in Cultural Anthropology. Ensures our technology respects and celebrates cultural diversity authentically.',
            image: '👩‍🔬',
            background: 'from-pink-500 to-rose-600'
          },
          {
            name: 'James Thompson',
            title: 'VP of Operations',
            expertise: 'Enterprise Solutions & Scalability',
            bio: 'Former operations director at major SaaS company. Specializes in scaling B2B solutions for global enterprises.',
            image: '👨‍⚖️',
            background: 'from-indigo-500 to-blue-600'
          }
        ],
        cultureTitle: 'Our Culture',
        cultureParagraphs: [
          'We\'re a diverse, global team united by our passion for travel, technology, and cultural understanding. Our remote-first culture enables us to work with the best talent worldwide while staying connected to local cultures everywhere.',
          'Innovation drives everything we do. We encourage experimentation, celebrate learning from failures, and constantly push the boundaries of what\'s possible in travel technology.',
          'Our commitment to cultural sensitivity and authenticity means every team member contributes to ensuring our technology respects and celebrates the diversity of human experience.'
        ],
        growingTitle: 'We\'re Growing',
        growingDescription: 'Join our mission to transform travel experiences. We\'re always looking for passionate individuals who share our vision.',
        viewPositions: 'View Open Positions',
        companyStats: [
          { value: '50+', label: 'Team Members', description: 'Across 12 countries' },
          { value: '15+', label: 'Languages', description: 'Spoken by our team' },
          { value: '4', label: 'Years', description: 'Of innovation' },
          { value: '24/7', label: 'Support', description: 'Global coverage' }
        ],
        advisoryTitle: 'Advisory Board',
        advisorySubtitle: 'Industry leaders and cultural experts who guide our strategic vision and ensure we stay at the forefront of travel innovation.',
        advisors: [
          { name: 'Dr. Maria Gonzalez', role: 'Former UNESCO Director', expertise: 'Cultural Heritage' },
          { name: 'Robert Kim', role: 'Ex-Uber VP', expertise: 'Transportation Tech' },
          { name: 'Lisa Chen', role: 'Travel Industry Veteran', expertise: 'Tourism Strategy' },
          { name: 'Ahmed Hassan', role: 'AI Research Leader', expertise: 'Machine Learning' }
        ],
        ctaTitle: 'Ready to Partner with Industry Leaders?',
        ctaSubtitle: 'Connect with our experienced team to discuss how Tuggi can transform your transportation business.',
        meetTeam: 'Meet Our Team',
        scheduleCall: 'Schedule a Call',
        contactInfo: 'Questions about our team or company background?',
        email: 'team@tuggi.com',
        phone: '+1 (555) TUGGI-01',
        location: 'San Francisco, CA',
        available: 'Available'
      },
      PT: {
        badge: 'Nossa História e Equipe',
        title: 'As Pessoas Por Trás da Inovação em Viagens',
        subtitle: 'Conheça a equipe experiente de pioneiros em tecnologia de viagem, especialistas culturais e líderes empresariais transformando como o mundo experimenta jornadas.',
        storyTitle: 'Nossa História',
        storyParagraphs: [
          'Tuggi nasceu de uma observação simples: milhões de pessoas viajam todos os dias, mas a maioria das jornadas é apenas sobre ir do ponto A ao ponto B. Vimos uma oportunidade de transformar essas viagens rotineiras em experiências culturais significativas.',
          'Nossos fundadores, com profundos conhecimentos em tecnologia de viagem e preservação cultural, reconheceram que empresas de transporte estavam posicionadas de forma única para se tornarem embaixadores culturais. Cada viagem de táxi, jornada de ônibus ou viagem de shuttle poderia se tornar uma janela para história local, tradições e histórias.',
          'Hoje, temos orgulho de fazer parceria com empresas de transporte mundialmente, ajudando-as a diferenciar seus serviços enquanto criam experiências memoráveis para milhões de viajantes. Nossa tecnologia não apenas move pessoas — ela as conecta à alma de cada destino.'
        ],
        companyValues: [
          {
            title: 'Perspectiva Global',
            description: 'Celebramos a diversidade cultural enquanto construímos tecnologia que conecta pessoas através de fronteiras.'
          },
          {
            title: 'Foco em Parcerias',
            description: 'Nosso sucesso é medido pelo sucesso de nossos parceiros de transporte e turismo.'
          },
          {
            title: 'Excelência na Execução',
            description: 'Entregamos soluções de nível empresarial que excedem expectativas e geram resultados empresariais reais.'
          }
        ],
        milestones: [
          {
            year: '2020',
            title: 'Fundação',
            description: 'Tuggi foi fundada com uma visão de transformar transporte em experiências culturais.'
          },
          {
            year: '2021',
            title: 'Primeiro Lançamento de Produto',
            description: 'Tuggi Drive lançado com parcerias iniciais em grandes áreas metropolitanas.'
          },
          {
            year: '2022',
            title: 'Expansão Internacional',
            description: 'Expandiu para servir empresas de transporte em três continentes.'
          },
          {
            year: '2024',
            title: 'Liderança em Inovação',
            description: 'Liderando a indústria de tecnologia de viagem com narrativa cultural com IA.'
          }
        ],
        leadershipTitle: 'Equipe de Liderança',
        leadershipSubtitle: 'Veteranos da indústria e especialistas culturais unidos por uma visão compartilhada de transformar experiências de viagem através da tecnologia.',
        teamMembers: [
          {
            name: 'Sarah Chen',
            title: 'Diretora Executiva',
            expertise: 'Tecnologia de Viagem e Estratégia Empresarial',
            bio: 'Ex-VP de Inovação em plataforma líder de viagens. 15+ anos transformando como pessoas experimentam destinos através da tecnologia.',
            image: '👩‍💼',
            background: 'from-tuggi-primary to-blue-600'
          },
          {
            name: 'Marcus Rodriguez',
            title: 'Diretor de Tecnologia',
            expertise: 'IA e Serviços Baseados em Localização',
            bio: 'Ex-engenheiro do Google Maps especializado em inteligência de localização. Pioneiro em algoritmos de narrativa contextual.',
            image: '👨‍💻',
            background: 'from-tuggi-secondary to-orange-600'
          },
          {
            name: 'Elena Kowalski',
            title: 'VP de Produto',
            expertise: 'Experiência do Usuário e Conteúdo Cultural',
            bio: 'Ex-consultora cultural para UNESCO. Especialista em criar narrativas culturais autênticas e respeitosas para audiências globais.',
            image: '👩‍🎨',
            background: 'from-purple-500 to-violet-600'
          },
          {
            name: 'David Park',
            title: 'VP de Desenvolvimento de Negócios',
            expertise: 'Parcerias B2B e Integração de Frotas',
            bio: 'Veterano da indústria de transporte com 20+ anos construindo parcerias com grandes operadores de frota mundialmente.',
            image: '👨‍💼',
            background: 'from-green-500 to-emerald-600'
          },
          {
            name: 'Dra. Amara Okafor',
            title: 'Chefe de Pesquisa',
            expertise: 'Antropologia Cultural e Ética de IA',
            bio: 'PhD em Antropologia Cultural. Garante que nossa tecnologia respeita e celebra a diversidade cultural autenticamente.',
            image: '👩‍🔬',
            background: 'from-pink-500 to-rose-600'
          },
          {
            name: 'James Thompson',
            title: 'VP de Operações',
            expertise: 'Soluções Empresariais e Escalabilidade',
            bio: 'Ex-diretor de operações em grande empresa SaaS. Especializa em escalar soluções B2B para empresas globais.',
            image: '👨‍⚖️',
            background: 'from-indigo-500 to-blue-600'
          }
        ],
        cultureTitle: 'Nossa Cultura',
        cultureParagraphs: [
          'Somos uma equipe diversa e global unida por nossa paixão por viagens, tecnologia e compreensão cultural. Nossa cultura remota-primeiro nos permite trabalhar com os melhores talentos mundialmente enquanto permanecemos conectados às culturas locais em todos os lugares.',
          'Inovação dirige tudo que fazemos. Encorajamos experimentação, celebramos aprender com falhas e constantemente empurramos os limites do que é possível em tecnologia de viagem.',
          'Nosso compromisso com sensibilidade cultural e autenticidade significa que cada membro da equipe contribui para garantir que nossa tecnologia respeita e celebra a diversidade da experiência humana.'
        ],
        growingTitle: 'Estamos Crescendo',
        growingDescription: 'Junte-se à nossa missão de transformar experiências de viagem. Sempre procuramos indivíduos apaixonados que compartilham nossa visão.',
        viewPositions: 'Ver Vagas Abertas',
        companyStats: [
          { value: '50+', label: 'Membros da Equipe', description: 'Em 12 países' },
          { value: '15+', label: 'Idiomas', description: 'Falados por nossa equipe' },
          { value: '4', label: 'Anos', description: 'De inovação' },
          { value: '24/7', label: 'Suporte', description: 'Cobertura global' }
        ],
        advisoryTitle: 'Conselho Consultivo',
        advisorySubtitle: 'Líderes da indústria e especialistas culturais que guiam nossa visão estratégica e garantem que permaneçamos na vanguarda da inovação em viagens.',
        advisors: [
          { name: 'Dra. Maria Gonzalez', role: 'Ex-Diretora UNESCO', expertise: 'Patrimônio Cultural' },
          { name: 'Robert Kim', role: 'Ex-VP Uber', expertise: 'Tecnologia Transporte' },
          { name: 'Lisa Chen', role: 'Veterana Indústria Viagem', expertise: 'Estratégia Turismo' },
          { name: 'Ahmed Hassan', role: 'Líder Pesquisa IA', expertise: 'Aprendizado de Máquina' }
        ],
        ctaTitle: 'Pronto para Fazer Parceria com Líderes da Indústria?',
        ctaSubtitle: 'Conecte-se com nossa equipe experiente para discutir como Tuggi pode transformar seu negócio de transporte.',
        meetTeam: 'Conheça Nossa Equipe',
        scheduleCall: 'Agendar uma Chamada',
        contactInfo: 'Dúvidas sobre nossa equipe ou histórico da empresa?',
        email: 'team@tuggi.com',
        phone: '+1 (555) TUGGI-01',
        location: 'San Francisco, CA',
        available: 'Disponível'
      },
      ES: {
        badge: 'Nuestra Historia y Equipo',
        title: 'Las Personas Detrás de la Innovación en Viajes',
        subtitle: 'Conozca al equipo experimentado de pioneros en tecnología de viajes, expertos culturales y líderes empresariales transformando cómo el mundo experimenta viajes.',
        storyTitle: 'Nuestra Historia',
        storyParagraphs: [
          'Tuggi nació de una observación simple: millones de personas viajan todos los días, pero la mayoría de los viajes son solo sobre ir del punto A al punto B. Vimos una oportunidad de transformar estos viajes rutinarios en experiencias culturales significativas.',
          'Nuestros fundadores, con profundos antecedentes en tecnología de viajes y preservación cultural, reconocieron que las empresas de transporte estaban posicionadas de manera única para convertirse en embajadores culturales. Cada viaje en taxi, recorrido en autobús o viaje en shuttle podría convertirse en una ventana a la historia local, tradiciones e historias.',
          'Hoy, estamos orgullosos de asociarnos con empresas de transporte mundialmente, ayudándolas a diferenciar sus servicios mientras crean experiencias memorables para millones de viajeros. Nuestra tecnología no solo mueve personas — las conecta al alma de cada destino.'
        ],
        companyValues: [
          {
            title: 'Perspectiva Global',
            description: 'Celebramos la diversidad cultural mientras construimos tecnología que conecta personas a través de fronteras.'
          },
          {
            title: 'Enfoque en Asociaciones',
            description: 'Nuestro éxito se mide por el éxito de nuestros socios de transporte y turismo.'
          },
          {
            title: 'Excelencia en Ejecución',
            description: 'Entregamos soluciones de nivel empresarial que exceden expectativas y generan resultados empresariales reales.'
          }
        ],
        milestones: [
          {
            year: '2020',
            title: 'Fundación',
            description: 'Tuggi fue fundada con una visión de transformar transporte en experiencias culturales.'
          },
          {
            year: '2021',
            title: 'Primer Lanzamiento de Producto',
            description: 'Tuggi Drive lanzado con asociaciones iniciales en grandes áreas metropolitanas.'
          },
          {
            year: '2022',
            title: 'Expansión Internacional',
            description: 'Expandió para servir empresas de transporte en tres continentes.'
          },
          {
            year: '2024',
            title: 'Liderazgo en Innovación',
            description: 'Liderando la industria de tecnología de viajes con narrativa cultural con IA.'
          }
        ],
        leadershipTitle: 'Equipo de Liderazgo',
        leadershipSubtitle: 'Veteranos de la industria y expertos culturales unidos por una visión compartida de transformar experiencias de viajes a través de la tecnología.',
        teamMembers: [
          {
            name: 'Sarah Chen',
            title: 'Directora Ejecutiva',
            expertise: 'Tecnología de Viajes y Estrategia Empresarial',
            bio: 'Ex-VP de Innovación en plataforma líder de viajes. 15+ años transformando cómo las personas experimentan destinos a través de la tecnología.',
            image: '👩‍💼',
            background: 'from-tuggi-primary to-blue-600'
          },
          {
            name: 'Marcus Rodriguez',
            title: 'Director de Tecnología',
            expertise: 'IA y Servicios Basados en Ubicación',
            bio: 'Ex-ingeniero de Google Maps especializado en inteligencia de ubicación. Pionero en algoritmos de narrativa contextual.',
            image: '👨‍💻',
            background: 'from-tuggi-secondary to-orange-600'
          },
          {
            name: 'Elena Kowalski',
            title: 'VP de Producto',
            expertise: 'Experiencia del Usuario y Contenido Cultural',
            bio: 'Ex-consultora cultural para UNESCO. Experta en crear narrativas culturales auténticas y respetuosas para audiencias globales.',
            image: '👩‍🎨',
            background: 'from-purple-500 to-violet-600'
          },
          {
            name: 'David Park',
            title: 'VP de Desarrollo de Negocios',
            expertise: 'Asociaciones B2B e Integración de Flotas',
            bio: 'Veterano de la industria de transporte con 20+ años construyendo asociaciones con grandes operadores de flotas mundialmente.',
            image: '👨‍💼',
            background: 'from-green-500 to-emerald-600'
          },
          {
            name: 'Dra. Amara Okafor',
            title: 'Jefe de Investigación',
            expertise: 'Antropología Cultural y Ética de IA',
            bio: 'PhD en Antropología Cultural. Asegura que nuestra tecnología respeta y celebra la diversidad cultural auténticamente.',
            image: '👩‍🔬',
            background: 'from-pink-500 to-rose-600'
          },
          {
            name: 'James Thompson',
            title: 'VP de Operaciones',
            expertise: 'Soluciones Empresariales y Escalabilidad',
            bio: 'Ex-director de operaciones en gran empresa SaaS. Se especializa en escalar soluciones B2B para empresas globales.',
            image: '👨‍⚖️',
            background: 'from-indigo-500 to-blue-600'
          }
        ],
        cultureTitle: 'Nuestra Cultura',
        cultureParagraphs: [
          'Somos un equipo diverso y global unido por nuestra pasión por los viajes, tecnología y comprensión cultural. Nuestra cultura remota-primero nos permite trabajar con los mejores talentos mundialmente mientras permanecemos conectados a culturas locales en todas partes.',
          'La innovación impulsa todo lo que hacemos. Alentamos la experimentación, celebramos aprender de las fallas y constantemente empujamos los límites de lo que es posible en tecnología de viajes.',
          'Nuestro compromiso con la sensibilidad cultural y autenticidad significa que cada miembro del equipo contribuye a asegurar que nuestra tecnología respeta y celebra la diversidad de la experiencia humana.'
        ],
        growingTitle: 'Estamos Creciendo',
        growingDescription: 'Únase a nuestra misión de transformar experiencias de viajes. Siempre buscamos individuos apasionados que compartan nuestra visión.',
        viewPositions: 'Ver Posiciones Abiertas',
        companyStats: [
          { value: '50+', label: 'Miembros del Equipo', description: 'En 12 países' },
          { value: '15+', label: 'Idiomas', description: 'Hablados por nuestro equipo' },
          { value: '4', label: 'Años', description: 'De innovación' },
          { value: '24/7', label: 'Soporte', description: 'Cobertura global' }
        ],
        advisoryTitle: 'Consejo Asesor',
        advisorySubtitle: 'Líderes de la industria y expertos culturales que guían nuestra visión estratégica y aseguran que permanezcamos a la vanguardia de la innovación en viajes.',
        advisors: [
          { name: 'Dra. Maria Gonzalez', role: 'Ex-Directora UNESCO', expertise: 'Patrimonio Cultural' },
          { name: 'Robert Kim', role: 'Ex-VP Uber', expertise: 'Tecnología Transporte' },
          { name: 'Lisa Chen', role: 'Veterana Industria Viajes', expertise: 'Estrategia Turismo' },
          { name: 'Ahmed Hassan', role: 'Líder Investigación IA', expertise: 'Aprendizaje Automático' }
        ],
        ctaTitle: '¿Listo para Asociarse con Líderes de la Industria?',
        ctaSubtitle: 'Conéctese con nuestro equipo experimentado para discutir cómo Tuggi puede transformar su negocio de transporte.',
        meetTeam: 'Conocer Nuestro Equipo',
        scheduleCall: 'Programar una Llamada',
        contactInfo: '¿Preguntas sobre nuestro equipo o antecedentes de la empresa?',
        email: 'team@tuggi.com',
        phone: '+1 (555) TUGGI-01',
        location: 'San Francisco, CA',
        available: 'Disponible'
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
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,111,0,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-tuggi-primary/10 rounded-full mb-8">
              <Users className="w-5 h-5 text-tuggi-primary mr-2" />
              <span className="text-tuggi-primary font-semibold text-sm">{content.badge}</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-8">
              {content.title}
            </h1>
            
            <p className="text-xl lg:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              {content.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Story Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-8">
                {content.storyTitle}
              </h2>
              
              <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
                {content.storyParagraphs.map((paragraph: string, index: number) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Company Values */}
              <div className="mt-12 space-y-6">
                {content.companyValues.map((value: any, index: number) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-tuggi-primary/10 to-tuggi-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      {index === 0 && <Globe className="w-6 h-6 text-tuggi-primary" />}
                      {index === 1 && <Users className="w-6 h-6 text-tuggi-primary" />}
                      {index === 2 && <Award className="w-6 h-6 text-tuggi-primary" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-2">{value.title}</h3>
                      <p className="text-neutral-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-tuggi-primary to-tuggi-secondary"></div>
              
              <div className="space-y-8">
                {content.milestones.map((milestone: any, index: number) => (
                  <div key={index} className="relative flex items-start space-x-6">
                    <div className="w-16 h-16 bg-white border-4 border-tuggi-primary rounded-full flex items-center justify-center shadow-lg z-10">
                      {index === 0 && <Lightbulb className="w-7 h-7 text-tuggi-primary" />}
                      {index === 1 && <Globe className="w-7 h-7 text-tuggi-primary" />}
                      {index === 2 && <Award className="w-7 h-7 text-tuggi-primary" />}
                      {index === 3 && <Users className="w-7 h-7 text-tuggi-primary" />}
                    </div>
                    <div className="flex-1 bg-white rounded-xl p-6 shadow-lg border border-neutral-200">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="text-2xl font-bold text-tuggi-primary">{milestone.year}</span>
                        <h3 className="text-xl font-bold text-neutral-900">{milestone.title}</h3>
                      </div>
                      <p className="text-neutral-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              {content.leadershipTitle}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {content.leadershipSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.teamMembers.map((member: any, index: number) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Profile Header */}
                <div className={`bg-gradient-to-br ${member.background} p-8 text-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10">
                    <div className="text-6xl mb-4">{member.image}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-white/90 font-medium">{member.title}</p>
                  </div>
                </div>

                {/* Profile Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <Briefcase className="w-4 h-4 text-tuggi-primary" />
                      <span className="text-sm font-semibold text-tuggi-primary">{member.expertise}</span>
                    </div>
                    <p className="text-neutral-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>

                  {/* Professional Indicators */}
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                    <div className="flex items-center space-x-2 text-xs text-neutral-500">
                      <MapPin className="w-3 h-3" />
                      <span>{content.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-neutral-500">{content.available}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture & Stats */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Culture */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-8">
                {content.cultureTitle}
              </h2>
              
              <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
                {content.cultureParagraphs.map((paragraph: string, index: number) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-r from-tuggi-primary/5 to-tuggi-secondary/5 rounded-2xl p-6 border border-tuggi-primary/10">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{content.growingTitle}</h3>
                <p className="text-neutral-700 mb-4">
                  {content.growingDescription}
                </p>
                <button 
                  onClick={() => handleCTAClick('view_open_positions')}
                  className="bg-tuggi-primary hover:bg-tuggi-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg"
                >
                  {content.viewPositions}
                </button>
              </div>
            </div>

            {/* Company Stats */}
            <div className="grid grid-cols-2 gap-6">
              {content.companyStats.map((stat: any, index: number) => (
                <div key={index} className="bg-gradient-to-br from-tuggi-primary/10 to-blue-50 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-tuggi-primary mb-2">{stat.value}</div>
                  <div className="text-sm font-semibold text-neutral-900 mb-1">{stat.label}</div>
                  <div className="text-xs text-neutral-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-tuggi-primary/5 to-tuggi-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              {content.advisoryTitle}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {content.advisorySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.advisors.map((advisor: any, index: number) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-neutral-200 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <h3 className="font-bold text-neutral-900 mb-1">{advisor.name}</h3>
                <p className="text-sm text-tuggi-primary font-medium mb-2">{advisor.role}</p>
                <p className="text-xs text-neutral-600">{advisor.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-tuggi-primary to-tuggi-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            {content.ctaTitle}
          </h2>
          <p className="text-xl text-tuggi-primary-light max-w-3xl mx-auto mb-8">
            {content.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleCTAClick('meet_our_team')}
              className="bg-white hover:bg-neutral-100 text-tuggi-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
            >
              <span>{content.meetTeam}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => handleCTAClick('schedule_call_story')}
              className="border-2 border-white text-white hover:bg-white hover:text-tuggi-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              {content.scheduleCall}
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
                onClick={() => handleCTAClick('contact_email_story')}
                className="hover:text-tuggi-primary-light transition-colors duration-200"
              >
                📧 {content.email}
              </a>
              <a 
                href={`tel:${content.phone}`}
                onClick={() => handleCTAClick('contact_phone_story')}
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

export default StoryTeamPage;