import React from 'react';
import { Users, Award, Globe, Lightbulb, ArrowRight, MapPin, Calendar, Briefcase, ExternalLink } from 'lucide-react';

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
        subtitle: 'Meet our small but passionate founding team building the future of cultural travel experiences.',
        storyTitle: 'Our Story',
        storyParagraphs: [
          'Tuggi was born from a simple belief: that every journey can be more than just transportation.',
          'As travel enthusiasts and technology builders, we saw an opportunity to transform everyday rides into engaging cultural moments — using AI-powered storytelling and geolocation.',
          'Today, we\'re a small but passionate team co-creating Tuggi Drive with selected transportation companies. We\'re focused on validating our solution in real environments and learning directly from our partners before scaling globally.',
          'Our mission is just beginning, but the vision is clear: to turn every ride into a cultural experience worth remembering.'
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
            year: '2024 / Q3',
            title: 'Simple Idea',
            description: 'We started developing Tuggi, with a simple idea to change the way people travel, helping them to understand the culture of the places they are visiting.'
          },
          {
            year: '2025 / Q1',
            title: 'Beta Co-Creation',
            description: 'We refine and change the way we work, to create a better product for our partners.'
          },
          {
            year: '2025 / Q2',
            title: 'Beta Co-Creation',
            description: 'Tuggi Drive begins development in partnership with selected transportation fleets to test and refine cultural storytelling technology.'
          }
        ],
        leadershipTitle: 'Meet Our Founding Team',
        leadershipSubtitle: 'A small but dedicated team passionate about transforming travel experiences through technology.',
        teamMembers: [
          {
            name: 'Leandro Ramos',
            title: 'Co-founder',
            expertise: 'Travel Technology & Growth Strategy',
            bio: 'Travel tech and e-commerce veteran leading product vision and growth strategy.',
            image: 'https://media.licdn.com/dms/image/v2/D4D03AQH-bEaamrzCXA/profile-displayphoto-scale_200_200/B4DZejQhgZGYAY-/0/1750790709225?e=1756944000&v=beta&t=iNqm9T-OjtExkqPRhk1FN7gpHtclLzDZskzuEjPQ9ek',
            background: 'from-tuggi-primary to-blue-600',
            linkedin: 'https://www.linkedin.com/in/lrsleramos/',
            location: 'São Paulo, Brazil'
          },
          {
            name: 'Matheus Brito',
            title: 'Co-founder',
            expertise: 'Business Strategy & Operations',
            bio: 'Strategic visionary focused on business development and operational excellence.',
            image: 'https://media.licdn.com/dms/image/v2/D4E03AQEJeNNOOfrXCg/profile-displayphoto-shrink_200_200/B4EZWU2cFeHgAg-/0/1741959054678?e=1756944000&v=beta&t=396xfTzLGRomTqhV73zj6j_YsUoet38LbVctPEHxi9Q',
            background: 'from-tuggi-secondary to-orange-600',
            linkedin: 'https://www.linkedin.com/in/despossivel/',
            location: 'Barcelona, Spain'
          },
          {
            name: 'Mateus Castro',
            title: 'Mobile Developer',
            expertise: 'React Native & Full-Stack Development',
            bio: 'Full-stack React Native engineer building the core technology platform.',
            image: 'https://media.licdn.com/dms/image/v2/D4D03AQGikX6e1rUUkw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730468694477?e=1756944000&v=beta&t=Q5cseZK6Pf7gZzPpSHHVPl0wPN-djLnnad8HuY_pZ_s',
            background: 'from-blue-500 to-indigo-600',
            linkedin: 'https://www.linkedin.com/in/mateus-castro-b49559169/',
            location: 'Minas Gerais, Brazil'
          }
        ],
        cultureTitle: 'Our Culture',
        cultureParagraphs: [
          'We\'re a remote-first startup, passionate about travel, storytelling, and technology.',
          'Even as a small team, we believe in cultural sensitivity, local context, and using technology to create meaningful moments.',
          'We\'re currently building Tuggi Drive step-by-step, working directly with transportation providers, adapting fast, and constantly learning from the field.'
        ],
        growingTitle: 'We\'re Growing',
        growingDescription: 'Join our mission to transform travel experiences. We\'re always looking for passionate individuals who share our vision.',
        viewPositions: 'View Open Positions',
        companyStats: [
          { value: '3', label: 'Core Team', description: 'Passionate founders & developer' },
          { value: '3+', label: 'Languages', description: 'Supported in beta' },
          { value: '2024', label: 'Founded', description: 'Early-stage development' },
          { value: '🌎', label: 'Remote-First', description: 'Global mindset' }
        ],
        advisoryTitle: 'Friends, Not Just Advisors',
        advisorySubtitle: 'We\'re fortunate to be supported by industry experts, local drivers, travel professionals, and cultural researchers who offer feedback and help shape our path.',
        advisors: [
          { name: 'Travel Industry', role: 'Professionals', expertise: 'Tourism Strategy' },
          { name: 'Local Drivers', role: 'Field Experts', expertise: 'Real-world Experience' },
          { name: 'Cultural Researchers', role: 'Content Advisors', expertise: 'Cultural Authenticity' },
          { name: 'Transportation', role: 'Partners', expertise: 'Fleet Integration' }
        ],
        ctaTitle: 'Ready to Partner with Industry Leaders?',
        ctaSubtitle: 'Connect with our experienced team to discuss how Tuggi can transform your transportation business.',
        meetTeam: 'Meet Our Team',
        scheduleCall: 'Schedule a Call',
        contactInfo: 'Questions about our team or company background?',
        email: 'hello@tuggi.app',
        phone: '+55 (11) 9.9471-8809',
        location: 'São Paulo, Brazil',
        available: 'Available'
      },
      PT: {
        badge: 'Nossa História e Equipe',
        title: 'As Pessoas Por Trás da Inovação em Viagens',
        subtitle: 'Conheça nossa pequena mas apaixonada equipe fundadora construindo o futuro das experiências culturais de viagem.',
        storyTitle: 'Nossa História',
        storyParagraphs: [
          'Tuggi nasceu de uma crença simples: que cada jornada pode ser mais do que apenas transporte.',
          'Como entusiastas de viagens e construtores de tecnologia, vimos uma oportunidade de transformar viagens cotidianas em momentos culturais envolventes — usando narrativa com IA e geolocalização.',
          'Hoje, somos uma equipe pequena mas apaixonada co-criando Tuggi Drive com empresas de transporte selecionadas. Estamos focados em validar nossa solução em ambientes reais e aprender diretamente com nossos parceiros antes de escalar globalmente.',
          'Nossa missão está apenas começando, mas a visão é clara: transformar cada viagem em uma experiência cultural digna de ser lembrada.'
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
            year: '2024 / Q3',
            title: 'Uma ideia simples',
            description: 'Começamos a desenvolver o Tuggi com uma ideia simples: mudar a maneira como as pessoas viajam, ajudando-as a entender a cultura dos lugares que estão visitando.'
          },
          {
            year: '2025 / Q1',
            title: 'Nos reinventamos',
            description: 'Refinamos e mudamos a maneira como trabalhamos para criar um produto melhor para nossos parceiros.'
          },
          {
            year: '2025 / Q3',
            title: 'Co-criação Beta',
            description: 'A Tuggi Drive inicia o desenvolvimento em parceria com frotas de transporte selecionadas para testar e refinar a tecnologia de narrativa cultural.'
          }
        ],
        leadershipTitle: 'Conheça Nossa Equipe Fundadora',
        leadershipSubtitle: 'Uma equipe pequena mas dedicada, apaixonada por transformar experiências de viagem através da tecnologia.',
        teamMembers: [
          {
            name: 'Leandro Ramos',
            title: 'Co-fundador',
            expertise: 'Tecnologia de Viagem e Estratégia de Crescimento',
            bio: 'Veterano em tecnologia de viagem e e-commerce liderando visão de produto e estratégia de crescimento.',
            image: 'https://media.licdn.com/dms/image/v2/D4D03AQH-bEaamrzCXA/profile-displayphoto-scale_200_200/B4DZejQhgZGYAY-/0/1750790709225?e=1756944000&v=beta&t=iNqm9T-OjtExkqPRhk1FN7gpHtclLzDZskzuEjPQ9ek',
            background: 'from-tuggi-primary to-blue-600',
            linkedin: 'https://www.linkedin.com/in/lrsleramos/',
            location: 'São Paulo, Brasil'
          },
          {
            name: 'Matheus Brito',
            title: 'Co-fundador',
            expertise: 'Estratégia de Negócios e Operações',
            bio: 'Visionário estratégico focado em desenvolvimento de negócios e excelência operacional.',
            image: 'https://media.licdn.com/dms/image/v2/D4E03AQEJeNNOOfrXCg/profile-displayphoto-shrink_200_200/B4EZWU2cFeHgAg-/0/1741959054678?e=1756944000&v=beta&t=396xfTzLGRomTqhV73zj6j_YsUoet38LbVctPEHxi9Q',
            background: 'from-tuggi-secondary to-orange-600',
            linkedin: 'https://www.linkedin.com/in/despossivel/',
            location: 'Barcelona, Espanha'
          },
          {
            name: 'Mateus Castro',
            title: 'Desenvolvedor Mobile',
            expertise: 'React Native e Desenvolvimento Full-Stack',
            bio: 'Engenheiro full-stack React Native construindo a plataforma tecnológica central.',
            image: 'https://media.licdn.com/dms/image/v2/D4D03AQGikX6e1rUUkw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730468694477?e=1756944000&v=beta&t=Q5cseZK6Pf7gZzPpSHHVPl0wPN-djLnnad8HuY_pZ_s',
            background: 'from-blue-500 to-indigo-600',
            linkedin: 'https://www.linkedin.com/in/mateus-castro-b49559169/',
            location: 'São Paulo, Brasil'
          }
        ],
        cultureTitle: 'Nossa Cultura',
        cultureParagraphs: [
          'Somos uma startup remota-primeiro, apaixonada por viagens, narrativa e tecnologia.',
          'Mesmo sendo uma equipe pequena, acreditamos em sensibilidade cultural, contexto local e usar tecnologia para criar momentos significativos.',
          'Estamos atualmente construindo Tuggi Drive passo a passo, trabalhando diretamente com provedores de transporte, nos adaptando rapidamente e constantemente aprendendo no campo.'
        ],
        growingTitle: 'Estamos Crescendo',
        growingDescription: 'Junte-se à nossa missão de transformar experiências de viagem. Sempre procuramos indivíduos apaixonados que compartilham nossa visão.',
        viewPositions: 'Ver Vagas Abertas',
        companyStats: [
          { value: '3', label: 'Equipe Central', description: 'Fundadores apaixonados e desenvolvedor' },
          { value: '3+', label: 'Idiomas', description: 'Suportados no beta' },
          { value: '2024', label: 'Fundada', description: 'Desenvolvimento inicial' },
          { value: '🌎', label: 'Remoto-Primeiro', description: 'Mentalidade global' }
        ],
        advisoryTitle: 'Amigos, Não Apenas Conselheiros',
        advisorySubtitle: 'Temos a sorte de ser apoiados por especialistas da indústria, motoristas locais, profissionais de viagem e pesquisadores culturais que oferecem feedback e ajudam a moldar nosso caminho.',
        advisors: [
          { name: 'Indústria de Viagens', role: 'Profissionais', expertise: 'Estratégia de Turismo' },
          { name: 'Motoristas Locais', role: 'Especialistas de Campo', expertise: 'Experiência Real' },
          { name: 'Pesquisadores Culturais', role: 'Conselheiros de Conteúdo', expertise: 'Autenticidade Cultural' },
          { name: 'Parceiros de Transporte', role: 'Parceiros', expertise: 'Integração de Frota' }
        ],
        ctaTitle: 'Pronto para Fazer Parceria com Líderes da Indústria?',
        ctaSubtitle: 'Conecte-se com nossa equipe experiente para discutir como Tuggi pode transformar seu negócio de transporte.',
        meetTeam: 'Conheça Nossa Equipe',
        scheduleCall: 'Agendar uma Chamada',
        contactInfo: 'Dúvidas sobre nossa equipe ou histórico da empresa?',
        email: 'hello@tuggi.app',
        phone: '+55 (11) 9.9471-8809',
        location: 'São Paulo, Brasil',
        available: 'Disponível'
      },
      ES: {
        badge: 'Nuestra Historia y Equipo',
        title: 'Las Personas Detrás de la Innovación en Viajes',
        subtitle: 'Conozca nuestro pequeño pero apasionado equipo fundador construyendo el futuro de las experiencias culturales de viaje.',
        storyTitle: 'Nuestra Historia',
        storyParagraphs: [
          'Tuggi nació de una creencia simple: que cada viaje puede ser más que solo transporte.',
          'Como entusiastas de viajes y constructores de tecnología, vimos una oportunidad de transformar viajes cotidianos en momentos culturales atractivos — usando narrativa con IA y geolocalización.',
          'Hoy, somos un equipo pequeño pero apasionado co-creando Tuggi Drive con empresas de transporte seleccionadas. Estamos enfocados en validar nuestra solución en ambientes reales y aprender directamente de nuestros socios antes de escalar globalmente.',
          'Nuestra misión apenas está comenzando, pero la visión es clara: convertir cada viaje en una experiencia cultural digna de recordar.'
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
            year: '2024 / Q3',
            title: 'Idea sencilla',
            description: 'Comenzamos a desarrollar Tuggi con una idea simple: cambiar la forma en que las personas viajan, ayudándolas a comprender la cultura de los lugares que visitan.'
          },
          {
            year: '2025 / Q1',
            title: 'Nos reinventamos',
            description: 'Refinamos y cambiamos la forma en que trabajamos, para crear un mejor producto para nuestros socios.'
          },
          {
            year: '2025 / Q3',
            title: 'Beta Co-Creation',
            description: 'Tuggi Drive comienza su desarrollo en asociación con flotas de transporte seleccionadas para probar y perfeccionar la tecnología de narración cultural.'
          }
        ],
        leadershipTitle: 'Conozca Nuestro Equipo Fundador',
        leadershipSubtitle: 'Un equipo pequeño pero dedicado, apasionado por transformar experiencias de viaje a través de la tecnología.',
        teamMembers: [
          {
            name: 'Leandro Ramos',
            title: 'Co-fundador',
            expertise: 'Tecnología de Viajes y Estrategia de Crecimiento',
            bio: 'Veterano en tecnología de viajes y e-commerce liderando visión de producto y estrategia de crecimiento.',
            image: 'https://media.licdn.com/dms/image/v2/D4D03AQH-bEaamrzCXA/profile-displayphoto-scale_200_200/B4DZejQhgZGYAY-/0/1750790709225?e=1756944000&v=beta&t=iNqm9T-OjtExkqPRhk1FN7gpHtclLzDZskzuEjPQ9ek',
            background: 'from-tuggi-primary to-blue-600',
            linkedin: 'https://www.linkedin.com/in/lrsleramos/',
            location: 'São Paulo, Brasil'
          },
          {
            name: 'Matheus Brito',
            title: 'Co-fundador',
            expertise: 'Estrategia de Negocios y Operaciones',
            bio: 'Visionario estratégico enfocado en desarrollo de negocios y excelencia operacional.',
            image: 'https://media.licdn.com/dms/image/v2/D4E03AQEJeNNOOfrXCg/profile-displayphoto-shrink_200_200/B4EZWU2cFeHgAg-/0/1741959054678?e=1756944000&v=beta&t=396xfTzLGRomTqhV73zj6j_YsUoet38LbVctPEHxi9Q',
            background: 'from-tuggi-secondary to-orange-600',
            linkedin: 'https://www.linkedin.com/in/despossivel/',
            location: 'Barcelona, España'
          },
          {
            name: 'Mateus Castro',
            title: 'Desarrollador Mobile',
            expertise: 'React Native y Desarrollo Full-Stack',
            bio: 'Ingeniero full-stack React Native construyendo la plataforma tecnológica central.',
            image: 'https://media.licdn.com/dms/image/v2/D4D03AQGikX6e1rUUkw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730468694477?e=1756944000&v=beta&t=Q5cseZK6Pf7gZzPpSHHVPl0wPN-djLnnad8HuY_pZ_s',
            background: 'from-blue-500 to-indigo-600',
            linkedin: 'https://www.linkedin.com/in/mateus-castro-b49559169/',
            location: 'São Paulo, Brasil'
          }
        ],
        cultureTitle: 'Nuestra Cultura',
        cultureParagraphs: [
          'Somos una startup remota-primero, apasionada por los viajes, narrativa y tecnología.',
          'Aunque somos un equipo pequeño, creemos en la sensibilidad cultural, contexto local y usar tecnología para crear momentos significativos.',
          'Actualmente estamos construyendo Tuggi Drive paso a paso, trabajando directamente con proveedores de transporte, adaptándonos rápidamente y constantemente aprendiendo en el campo.'
        ],
        growingTitle: 'Estamos Creciendo',
        growingDescription: 'Únase a nuestra misión de transformar experiencias de viajes. Siempre buscamos individuos apasionados que compartan nuestra visión.',
        viewPositions: 'Ver Posiciones Abiertas',
        companyStats: [
          { value: '3', label: 'Equipo Central', description: 'Fundadores apasionados y desarrollador' },
          { value: '3+', label: 'Idiomas', description: 'Soportados en beta' },
          { value: '2024', label: 'Fundada', description: 'Desarrollo inicial' },
          { value: '🌎', label: 'Remota-Primero', description: 'Mentalidad global' }
        ],
        advisoryTitle: 'Amigos, No Solo Asesores',
        advisorySubtitle: 'Tenemos la fortuna de ser apoyados por expertos de la industria, conductores locales, profesionales de viajes e investigadores culturales que ofrecen retroalimentación y ayudan a dar forma a nuestro camino.',
        advisors: [
          { name: 'Industria de Viajes', role: 'Profesionales', expertise: 'Estrategia de Turismo' },
          { name: 'Conductores Locales', role: 'Expertos de Campo', expertise: 'Experiencia Real' },
          { name: 'Investigadores Culturales', role: 'Asesores de Contenido', expertise: 'Autenticidad Cultural' },
          { name: 'Socios de Transporte', role: 'Socios', expertise: 'Integración de Flota' }
        ],
        ctaTitle: '¿Listo para Asociarse con Líderes de la Industria?',
        ctaSubtitle: 'Conéctese con nuestro equipo experimentado para discutir cómo Tuggi puede transformar su negocio de transporte.',
        meetTeam: 'Conocer Nuestro Equipo',
        scheduleCall: 'Programar una Llamada',
        contactInfo: '¿Preguntas sobre nuestro equipo o antecedentes de la empresa?',
        email: 'hello@tuggi.app',
        phone: '+55 (11) 9.9471-8809',
        location: 'São Paulo, Brasil',
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
                      <Lightbulb className="w-7 h-7 text-tuggi-primary" />
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
                    <div className="mb-4">
                      {member.image.startsWith('http') ? (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-white/20"
                        />
                      ) : (
                        <div className="text-6xl">{member.image}</div>
                      )}
                    </div>
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
                      <span>{member.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleCTAClick(`linkedin_${member.name.toLowerCase().replace(' ', '_')}`)}
                        className="flex items-center space-x-1 text-xs text-tuggi-primary hover:text-tuggi-primary-dark transition-colors duration-200"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>LinkedIn</span>
                      </a>
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

              {/* <div className="mt-8 bg-gradient-to-r from-tuggi-primary/5 to-tuggi-secondary/5 rounded-2xl p-6 border border-tuggi-primary/10">
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
              </div> */}
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
      {/* <section className="py-20 lg:py-24 bg-gradient-to-br from-tuggi-primary/5 to-tuggi-secondary/5">
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
      </section> */}

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
            <p className="text-white mb-4">
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