import React from 'react';
import { Compass, Users, Eye, BookOpen, ArrowRight, Heart } from 'lucide-react';
import FinalCTASection from './FinalCTASection';

interface PurposePageProps {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, language: string) => void;
}

const PurposePage: React.FC<PurposePageProps> = ({ 
  currentLanguage = 'PT',
  onCTAClick 
}) => {
  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      PT: {
        hero: {
          title: 'Nossa razão de existir'
        },
        block1: {
          title: 'Cultura em movimento',
          content: [
            'Acreditamos que a cultura não deve estar presa a livros, roteiros turísticos ou salas de aula. Ela deve acompanhar você no seu caminho, nos lugares por onde passa, nas paisagens que atravessa, nas ruas que conhece todos os dias.',
            'Cultura é viva. Está no trajeto, não só no destino.'
          ]
        },
        block2: {
          title: 'Por que criamos a Tuggi',
          content: [
            'Criamos a Tuggi porque queremos democratizar o acesso ao conhecimento. Queremos que cada pessoa, em qualquer lugar, tenha a oportunidade de descobrir mais sobre o mundo ao seu redor.',
            'Enquanto outras plataformas centralizam a experiência em roteiros prontos, mapas fechados ou atrações turísticas, nós preferimos entregar liberdade.',
            // 'Liberdade para explorar.',
            // 'Liberdade para ouvir.',
            // 'Liberdade para se conectar.'
          ]
        },
        block3: {
          title: 'Como fazemos isso',
          content: [
            'Utilizamos tecnologia de geolocalização e inteligência contextual para acionar narrações automáticas, que contam a história do que está ao redor do usuário — no momento certo.',
            'É uma experiência sem telas, sem distrações, sem algoritmos. O conhecimento vem até você, de forma leve, orgânica e real.',
            'Você se move. A Tuggi fala.'
          ]
        },
        block4: {
          title: 'Liberdade de rota',
          content: [
            'Você não precisa seguir uma rota planejada. A Tuggi funciona onde você estiver. Seja indo para o trabalho, viajando, caminhando no seu bairro ou explorando uma nova cidade, ela revela as camadas culturais invisíveis do seu trajeto.',
            'O caminho é seu. A descoberta também.'
          ]
        },
        block5: {
          title: 'Um futuro construído em comunidade',
          content: [
            'Acreditamos em um futuro construído junto. Por isso, mesmo durante a fase beta, já é possível avaliar os conteúdos e sugerir melhorias.',
            'Em breve, você poderá indicar novos pontos, enviar histórias e cocriar a experiência com a gente.',
            'Porque cultura se constrói coletivamente.',
            // 'E a Tuggi está aqui para dar voz a esse movimento.'
          ]
        },
        values: {
          title: 'Nossos valores fundamentais',
          subtitle: 'Os princípios que guiam nossa missão de democratizar o acesso à cultura',
          discovery: {
            title: 'Descobrimento espontâneo',
            description: 'Cada lugar tem uma história. Nossa missão é revelar essas narrativas enquanto você vive sua rotina.'
          },
          connection: {
            title: 'Conexão cultural',
            description: 'Acreditamos que conhecer a história dos lugares cria um vínculo mais profundo com o mundo.'
          },
          freedom: {
            title: 'Liberdade de exploração',
            description: 'Sem rotas predefinidas. A cultura surge naturalmente, respeitando seu ritmo e suas escolhas.'
          }
        },
        community: {
          participants: 'Participantes',
          cities: 'Cidades',
          betaPhase: 'Fase Beta Ativa'
        },
        cta: {
          title: 'Faça parte da construção',
          description: 'Junte-se a nós e ajude a moldar o futuro da cultura urbana no Brasil',
          button: 'Participar da pesquisa'
        },
        appMockup: {
          title: 'A Tuggi em ação',
          subtitle: 'Veja como transformamos qualquer trajeto em uma jornada de descobertas culturais',
          location: 'São Paulo - Centro',
          storiesFound: 'Histórias descobertas: 15',
          nowPlaying: 'Agora tocando',
          storyTitle: 'A História da Liberdade',
          features: {
            culture: 'Cultura em movimento',
            stories: 'Histórias vivas',
            knowledge: 'Conhecimento livre'
          }
        },
        bookMockup: {
          title: 'Cultura Viva',
          description: 'Histórias que se revelam no seu caminho, transformando cada trajeto em uma jornada de conhecimento.'
        }
      },
      EN: {
        hero: {
          title: 'Our reason for being'
        },
        block1: {
          title: 'Culture in motion',
          content: [
            'We believe that culture should not be confined to books, tourist itineraries, or classrooms. It should accompany you on your journey, in the places you pass through, in the landscapes you cross, in the streets you know every day.',
            'Culture is alive. It\'s in the journey, not just the destination.'
          ]
        },
        block2: {
          title: 'Why we created Tuggi',
          content: [
            'We created Tuggi because we want to democratize access to knowledge. We want every person, anywhere, to have the opportunity to discover more about the world around them.',
            'While other platforms centralize the experience in ready-made itineraries, closed maps, or tourist attractions, we prefer to deliver freedom.',
            // 'Freedom to explore.',
            // 'Freedom to listen.',
            // 'Freedom to connect.'
          ]
        },
        block3: {
          title: 'How we do it',
          content: [
            'We use geolocation technology and contextual intelligence to trigger automatic narrations that tell the story of what\'s around the user — at the right moment.',
            'It\'s an experience without screens, without distractions, without algorithms. Knowledge comes to you, in a light, organic, and real way.',
            'You move. Tuggi speaks.'
          ]
        },
        block4: {
          title: 'Freedom of route',
          content: [
            'You don\'t need to follow a planned route. Tuggi works wherever you are. Whether going to work, traveling, walking in your neighborhood, or exploring a new city, it reveals the invisible cultural layers of your journey.',
            'The path is yours. The discovery too.'
          ]
        },
        block5: {
          title: 'A future built in community',
          content: [
            'We believe in a future built together. That\'s why, even during the beta phase, it\'s already possible to evaluate content and suggest improvements.',
            'Soon, you\'ll be able to indicate new points, send stories, and co-create the experience with us.',
            'Because culture is built collectively.',
            // 'And Tuggi is here to give voice to this movement.'
          ]
        },
        values: {
          title: 'Our fundamental values',
          subtitle: 'The principles that guide our mission to democratize access to culture',
          discovery: {
            title: 'Spontaneous discovery',
            description: 'Every place has a story. Our mission is to reveal these narratives while you live your routine.'
          },
          connection: {
            title: 'Cultural connection',
            description: 'We believe that knowing the history of places creates a deeper bond with the world.'
          },
          freedom: {
            title: 'Freedom of exploration',
            description: 'No predefined routes. Culture emerges naturally, respecting your rhythm and your choices.'
          }
        },
        community: {
          participants: 'Participants',
          cities: 'Cities',
          betaPhase: 'Active Beta Phase'
        },
        cta: {
          title: 'Be part of the construction',
          description: 'Join us and help shape the future of urban culture in Brazil',
          button: 'Participate in the survey'
        },
        appMockup: {
          title: 'Tuggi in action',
          subtitle: 'See how we transform any journey into a cultural discovery adventure',
          location: 'São Paulo - Downtown',
          storiesFound: 'Stories discovered: 15',
          nowPlaying: 'Now playing',
          storyTitle: 'The Story of Liberty',
          features: {
            culture: 'Culture in motion',
            stories: 'Living stories',
            knowledge: 'Free knowledge'
          }
        },
        bookMockup: {
          title: 'Living Culture',
          description: 'Stories that reveal themselves along your path, transforming every journey into a knowledge adventure.'
        }
      },
      ES: {
        hero: {
          title: 'Nuestra razón de ser'
        },
        block1: {
          title: 'Cultura en movimiento',
          content: [
            'Creemos que la cultura no debe estar confinada a libros, itinerarios turísticos o aulas. Debe acompañarte en tu camino, en los lugares por donde pasas, en los paisajes que atraviesas, en las calles que conoces todos los días.',
            'La cultura está viva. Está en el trayecto, no solo en el destino.'
          ]
        },
        block2: {
          title: 'Por qué creamos Tuggi',
          content: [
            'Creamos Tuggi porque queremos democratizar el acceso al conocimiento. Queremos que cada persona, en cualquier lugar, tenga la oportunidad de descubrir más sobre el mundo que le rodea.',
            'Mientras otras plataformas centralizan la experiencia en itinerarios prefabricados, mapas cerrados o atracciones turísticas, nosotros preferimos entregar libertad.',
            // 'Libertad para explorar.',
            // 'Libertad para escuchar.',
            // 'Libertad para conectar.'
          ]
        },
        block3: {
          title: 'Cómo lo hacemos',
          content: [
            'Utilizamos tecnología de geolocalización e inteligencia contextual para activar narraciones automáticas que cuentan la historia de lo que está alrededor del usuario — en el momento adecuado.',
            'Es una experiencia sin pantallas, sin distracciones, sin algoritmos. El conocimiento viene hacia ti, de forma ligera, orgánica y real.',
            'Tú te mueves. Tuggi habla.'
          ]
        },
        block4: {
          title: 'Libertad de ruta',
          content: [
            'No necesitas seguir una ruta planificada. Tuggi funciona donde estés. Ya sea yendo al trabajo, viajando, caminando en tu barrio o explorando una nueva ciudad, revela las capas culturales invisibles de tu trayecto.',
            'El camino es tuyo. El descubrimiento también.'
          ]
        },
        block5: {
          title: 'Un futuro construido en comunidad',
          content: [
            'Creemos en un futuro construido juntos. Por eso, incluso durante la fase beta, ya es posible evaluar los contenidos y sugerir mejoras.',
            'Pronto, podrás indicar nuevos puntos, enviar historias y cocrear la experiencia con nosotros.',
            'Porque la cultura se construye colectivamente.',
            // 'Y Tuggi está aquí para dar voz a este movimiento.'
          ]
        },
        values: {
          title: 'Nuestros valores fundamentales',
          subtitle: 'Los principios que guían nuestra misión de democratizar el acceso a la cultura',
          discovery: {
            title: 'Descubrimiento espontáneo',
            description: 'Cada lugar tiene una historia. Nuestra misión es revelar estas narrativas mientras vives tu rutina.'
          },
          connection: {
            title: 'Conexión cultural',
            description: 'Creemos que conocer la historia de los lugares crea un vínculo más profundo con el mundo.'
          },
          freedom: {
            title: 'Libertad de exploración',
            description: 'Sin rutas predefinidas. La cultura surge naturalmente, respetando tu ritmo y tus elecciones.'
          }
        },
        community: {
          participants: 'Participantes',
          cities: 'Ciudades',
          betaPhase: 'Fase Beta Activa'
        },
        cta: {
          title: 'Sé parte de la construcción',
          description: 'Únete a nosotros y ayúdanos a moldear el futuro de la cultura urbana en Brasil',
          button: 'Participar en la encuesta'
        },
        appMockup: {
          title: 'Tuggi en acción',
          subtitle: 'Ve cómo transformamos cualquier trayecto en una aventura de descubrimiento cultural',
          location: 'São Paulo - Centro',
          storiesFound: 'Historias descubiertas: 15',
          nowPlaying: 'Reproduciendo ahora',
          storyTitle: 'La Historia de la Libertad',
          features: {
            culture: 'Cultura en movimiento',
            stories: 'Historias vivas',
            knowledge: 'Conocimiento libre'
          }
        },
        bookMockup: {
          title: 'Cultura Viva',
          description: 'Historias que se revelan en tu camino, transformando cada trayecto en una aventura de conocimiento.'
        }
      }
    };
    return content[language] || content['PT'];
  };

  const handleCTAClick = (ctaType: string) => {
    onCTAClick?.(ctaType, currentLanguage);
  };

  const content = getLocalizedContent(currentLanguage);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 lg:py-16 xl:py-20 bg-gradient-hero relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-tuggi-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-tuggi-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 mb-6 lg:mb-8 leading-tight">
                {content.hero.title}
              </h1>
              <p className="text-lg lg:text-xl text-neutral-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Um manifesto sobre democratizar o acesso à cultura e transformar qualquer trajeto em uma jornada de descobertas.
              </p>
            </div>
            
            {/* Right Column - Visual Element */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Book Mockup */}
              <div className="relative bg-gradient-subtle rounded-3xl p-8 lg:p-12" style={{width: '280px', height: '400px'}}>
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-tuggi-primary/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-20 h-20 bg-tuggi-secondary/10 rounded-full blur-xl"></div>
                
                {/* Book Content */}
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                  <div className="w-20 h-20 bg-gradient-aurora rounded-full flex items-center justify-center mb-6 shadow-2xl">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-3">{content.bookMockup.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {content.bookMockup.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 1 - Cultura em movimento */}
      <section className="py-12 lg:py-16 xl:py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-20 w-36 h-36 bg-tuggi-primary/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-tuggi-secondary/4 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-6 lg:mb-8 text-center">
            {content.block1.title}
            </h2>
            
          <div className="space-y-6 lg:space-y-8">
            {content.block1.content.map((paragraph: string, index: number) => (
              <div key={index} className="group">
                <p className={`text-lg lg:text-xl leading-relaxed text-center transition-all duration-300 ${
                  index === content.block1.content.length - 1 ? 'font-medium text-tuggi-primary text-xl lg:text-2xl' : 'text-neutral-700'
                }`}>
                  {paragraph}
                </p>
                {index === content.block1.content.length - 1 && (
                  <div className="flex justify-center mt-4">
                    <div className="w-32 h-1 bg-gradient-to-r from-tuggi-primary to-tuggi-secondary rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco 2 - Por que criamos a Tuggi + Valores */}
      <section className="py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-neutral-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-tuggi-primary/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-tuggi-secondary/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-cosmic opacity-3 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Why we created Tuggi */}
            <div className="space-y-6 lg:space-y-8">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
                  {content.block2.title}
                </h2>
              </div>
              
              {content.block2.content.map((paragraph: string, index: number) => (
                <div key={index} className="group">
                  <p className={`text-lg lg:text-xl leading-relaxed transition-all duration-300 ${
                    index >= 3 ? 'font-medium text-tuggi-primary text-xl lg:text-2xl' : 'text-neutral-700'
                  }`}>
                    {paragraph}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Column - Values */}
            <div className="space-y-8">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                  {content.values.title}
                </h2>
                <p className="text-base lg:text-lg text-neutral-600">
                  {content.values.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {/* Descobrimento */}
                <div className="group text-left bg-white/60 backdrop-blur-sm border border-neutral-200 rounded-2xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  {/* Card Background Pattern */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-tuggi-primary/5 rounded-full blur-2xl"></div>
                  
                  <div className="flex items-start space-x-4 relative z-10">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-ocean items-center justify-center flex group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-tuggi-primary transition-colors duration-300">
                        {content.values.discovery.title}
                      </h3>
                      <p className="text-sm lg:text-base text-neutral-600 leading-relaxed">
                        {content.values.discovery.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Conexão */}
                <div className="group text-left bg-white/60 backdrop-blur-sm border border-neutral-200 rounded-2xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  {/* Card Background Pattern */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-tuggi-secondary/5 rounded-full blur-2xl"></div>
                  
                  <div className="flex items-start space-x-4 relative z-10">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-forest items-center justify-center flex group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-tuggi-primary transition-colors duration-300">
                        {content.values.connection.title}
                      </h3>
                      <p className="text-sm lg:text-base text-neutral-600 leading-relaxed">
                        {content.values.connection.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Liberdade */}
                <div className="group text-left bg-white/60 backdrop-blur-sm border border-neutral-200 rounded-2xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  {/* Card Background Pattern */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-tuggi-primary/5 rounded-full blur-2xl"></div>
                  
                  <div className="flex items-start space-x-4 relative z-10">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-cosmic items-center justify-center flex group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Compass className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-tuggi-primary transition-colors duration-300">
                        {content.values.freedom.title}
                      </h3>
                      <p className="text-sm lg:text-base text-neutral-600 leading-relaxed">
                        {content.values.freedom.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 3 - Como fazemos isso */}
      <section className="py-12 lg:py-16 xl:py-20 bg-gradient-subtle relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 right-10 w-28 h-28 bg-tuggi-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-tuggi-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-6 lg:mb-8 text-center">
            {content.block3.title}
          </h2>
          
          <div className="space-y-6 lg:space-y-8">
            {content.block3.content.map((paragraph: string, index: number) => (
              <div key={index} className="group">
                <p className={`text-lg lg:text-xl leading-relaxed text-center transition-all duration-300 ${
                  index === content.block3.content.length - 1 ? 'font-medium text-tuggi-primary text-xl lg:text-2xl' : 'text-neutral-700'
                }`}>
                  {paragraph}
                </p>
                {index === content.block3.content.length - 1 && (
                  <div className="flex justify-center mt-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-tuggi-primary rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-tuggi-secondary rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-3 h-3 bg-tuggi-primary rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco 4 - Liberdade de rota */}
      <section className="py-12 lg:py-16 xl:py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-20 w-36 h-36 bg-tuggi-primary/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-tuggi-secondary/4 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-6 lg:mb-8 text-center">
            {content.block4.title}
          </h2>
          
          <div className="space-y-6 lg:space-y-8">
            {content.block4.content.map((paragraph: string, index: number) => (
              <div key={index} className="group">
                <p className={`text-lg lg:text-xl leading-relaxed text-center transition-all duration-300 ${
                  index === content.block4.content.length - 1 ? 'font-medium text-tuggi-primary text-xl lg:text-2xl' : 'text-neutral-700'
                }`}>
                  {paragraph}
                </p>
                {/* {index === content.block4.content.length - 1 && (
                  <div className="flex justify-center mt-4">
                    <div className="w-12 h-12 bg-gradient-forest rounded-full flex items-center justify-center shadow-lg">
                      <Compass className="w-6 h-6 text-white" />
                  </div>
                  </div>
                )} */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco 5 - Um futuro construído em comunidade */}
      <section className="py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-neutral-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-tuggi-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-tuggi-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-cosmic opacity-5 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header Section */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-6 lg:mb-8">
              {content.block5.title}
            </h2>
            
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-6 lg:space-y-8">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20 shadow-lg">
                  <p className="text-lg lg:text-xl text-neutral-700 leading-relaxed mb-4">
                    {content.block5.content[0]}
                  </p>
                  <p className="text-base lg:text-lg text-neutral-600 leading-relaxed">
                    {content.block5.content[1]}
            </p>
          </div>

                <div className="bg-gradient-to-br from-tuggi-primary/5 to-tuggi-secondary/5 rounded-2xl p-6 lg:p-8 border border-tuggi-primary/10">
                  <p className="text-base lg:text-lg text-neutral-700 leading-relaxed">
                    {content.block5.content[2]}
                  </p>
                </div>
              </div>

              {/* Right Column - Visual Elements */}
              <div className="relative">
                {/* Community Visual */}
                <div className="bg-gradient-subtle rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-tuggi-primary/10 rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-20 h-20 bg-tuggi-secondary/10 rounded-full blur-xl"></div>
                  
                  {/* Main Icon */}
                  <div className="relative z-10 mb-6">
                    <div className="w-24 h-24 bg-gradient-cosmic rounded-full flex items-center justify-center mx-auto shadow-2xl">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  
                  {/* Community Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-2xl font-bold text-tuggi-primary">150+</div>
                      <div className="text-sm text-neutral-600">{content.community.participants}</div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-2xl font-bold text-tuggi-secondary">23</div>
                      <div className="text-sm text-neutral-600">{content.community.cities}</div>
                    </div>
                  </div>
                  
                  {/* Beta Badge */}
                  <div className="inline-flex items-center px-4 py-2 bg-tuggi-primary/10 rounded-full border border-tuggi-primary/20">
                    <div className="w-2 h-2 bg-tuggi-primary rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm font-semibold text-tuggi-primary">{content.community.betaPhase}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlighted Statements */}
          <div className="space-y-8 lg:space-y-12">
            {/* First Statement */}
            {/* <div className="group">
              <div className="text-center">
                <p className="text-xl lg:text-2xl font-medium text-tuggi-primary mb-4 group-hover:text-tuggi-primary-dark transition-colors duration-300">
                  {content.block5.content[3]}
                </p>
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div> */}

            {/* Second Statement */}
            {/* <div className="group">
              <div className="text-center">
                <p className="text-xl lg:text-2xl font-medium text-tuggi-primary mb-4 group-hover:text-tuggi-primary-dark transition-colors duration-300">
                  {content.block5.content[4]}
                </p>
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gradient-forest rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
          </div> */}
        </div>

          {/* CTA Section */}
          <div className="text-center mt-12 lg:mt-16">
            <div className="bg-gradient-to-r from-tuggi-primary/5 to-tuggi-secondary/5 rounded-3xl p-8 lg:p-12 border border-tuggi-primary/10">
              <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-4">
                {content.cta.title}
              </h3>
              <p className="text-base lg:text-lg text-neutral-600 mb-6 max-w-2xl mx-auto">
                {content.cta.description}
            </p>
            <button 
                onClick={() => handleCTAClick('join_beta')}
                className="bg-tuggi-primary hover:bg-tuggi-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center space-x-2 group"
            >
                <span>{content.cta.button}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final Visual Element - App Mockup */}
      <section className="py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-neutral-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-tuggi-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-tuggi-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              {content.appMockup.title}
          </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {content.appMockup.subtitle}
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="relative bg-gradient-subtle rounded-3xl p-6 lg:p-8">
              {/* Mobile App Interface */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mx-auto" style={{width: '240px', height: '480px'}}>
                {/* Status Bar */}
                <div className="bg-neutral-100 px-6 py-3 flex items-center justify-between">
                  <div className="text-xs font-semibold text-neutral-700">9:41</div>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-2 bg-neutral-400 rounded-sm"></div>
                    <div className="w-1 h-2 bg-neutral-400 rounded-sm"></div>
                    <div className="w-6 h-3 bg-green-500 rounded-sm"></div>
                  </div>
                </div>
                
                {/* App Header */}
                <div className="bg-tuggi-primary px-6 py-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">Tuggi</div>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm">🎧</span>
                    </div>
                  </div>
                  <div className="text-sm opacity-90 mt-1">Copiloto Cultural</div>
                </div>
                
                {/* Main Content */}
                <div className="p-6 space-y-4">
                  {/* Current Location */}
                  <div className="bg-tuggi-primary/5 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-tuggi-primary rounded-full animate-pulse"></div>
                      <div>
                        <div className="text-sm font-semibold text-neutral-800">{content.appMockup.location}</div>
                        <div className="text-xs text-neutral-600">{content.appMockup.storiesFound}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Active Story */}
                  <div className="bg-gradient-aurora rounded-lg p-4">
                    <div className="text-sm font-semibold text-tuggi-primary mb-2">🎙️ {content.appMockup.nowPlaying}</div>
                    <div className="text-sm text-neutral-800 font-medium mb-2">{content.appMockup.storyTitle}</div>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 h-2 bg-neutral-200 rounded-full">
                        <div className="h-2 bg-tuggi-primary rounded-full w-1/3"></div>
                      </div>
                      <div className="text-xs text-neutral-600">2:30</div>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-neutral-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-neutral-700">{content.appMockup.features.culture}</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-neutral-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-neutral-700">{content.appMockup.features.stories}</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-neutral-50 rounded-lg">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-neutral-700">{content.appMockup.features.knowledge}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-tuggi-secondary rounded-2xl opacity-20 rotate-12"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-tuggi-primary rounded-2xl opacity-20 -rotate-12"></div>
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

export default PurposePage;