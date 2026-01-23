import { Star, Quote, MapPin, Award, Headphones, Volume2, MessageSquare } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  role?: string;
  text: string;
  rating: number;
  avatar: string;
}

interface TestimonialsV2Props {
  currentLanguage?: string;
}

const TestimonialsV2: React.FC<TestimonialsV2Props> = ({ 
  currentLanguage = 'PT'
}) => {
  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      PT: {
        title: 'O que dizem nossos usuários',
        subtitle: 'Relatos de quem usa o Tuggi para transformar trajetos em histórias.',
        testimonials: [
          {
            id: 'maria',
            name: 'Maria Silva',
            location: 'São Paulo',
            role: 'Usuária',
            text: 'Passei a notar detalhes da cidade que eu nunca tinha percebido. As histórias são curtas e no tempo certo.',
            rating: 5,
            avatar: '/images/avatar-maria.jpg'
          },
          {
            id: 'joao',
            name: 'João Oliveira',
            location: 'Rio de Janeiro',
            role: 'Motorista',
            text: 'No trânsito, o áudio dá contexto e deixa a viagem mais leve sem eu precisar olhar para a tela.',
            rating: 5,
            avatar: '/images/avatar-joao.jpg'
          },
          {
            id: 'camila',
            name: 'Camila Santos',
            location: 'Minas Gerais',
            role: 'Motorista de aplicativo',
            text: 'Quando levo passageiros, as narrações viram assunto e deixam o trajeto mais interessante.',
            rating: 5,
            avatar: '/images/avatar-camila.jpg'
          },
          {
            id: 'carlos',
            name: 'Carlos Ferreira',
            location: 'Paraná',
            role: 'Usuário',
            text: 'A qualidade do conteúdo impressiona. Cada ponto tem uma história curta e bem explicada.',
            rating: 5,
            avatar: '/images/avatar-carlos.jpg'
          }
        ],
        trustItems: [
          {
            icon: 'headphones',
            label: 'Áudio em primeiro lugar'
          },
          {
            icon: 'message',
            label: 'Histórias curtas e contextuais'
          },
          {
            icon: 'volume',
            label: 'Narração automática'
          }
        ]
      },
      EN: {
        title: 'What our users say',
        subtitle: 'Real stories from people who use Tuggi to transform their journeys.',
        testimonials: [
          {
            id: 'maria',
            name: 'Maria Silva',
            location: 'São Paulo',
            role: 'User',
            text: 'I started noticing details in the city I had never seen before. The stories are short and perfectly timed.',
            rating: 5,
            avatar: '/images/avatar-maria.jpg'
          },
          {
            id: 'joao',
            name: 'João Oliveira',
            location: 'Rio de Janeiro',
            role: 'Driver',
            text: 'In traffic, the audio provides context and makes the trip lighter without me needing to look at the screen.',
            rating: 5,
            avatar: '/images/avatar-joao.jpg'
          },
          {
            id: 'camila',
            name: 'Camila Santos',
            location: 'Minas Gerais',
            role: 'Ride-share driver',
            text: 'When I carry passengers, the narrations become a topic of conversation and make the ride more interesting.',
            rating: 5,
            avatar: '/images/avatar-camila.jpg'
          },
          {
            id: 'carlos',
            name: 'Carlos Ferreira',
            location: 'Paraná',
            role: 'User',
            text: 'The content quality is impressive. Each point has a short and well-explained story.',
            rating: 5,
            avatar: '/images/avatar-carlos.jpg'
          }
        ],
        trustItems: [
          {
            icon: 'headphones',
            label: 'Audio first'
          },
          {
            icon: 'message',
            label: 'Short contextual stories'
          },
          {
            icon: 'volume',
            label: 'Automatic narration'
          }
        ]
      },
      ES: {
        title: 'Lo que dicen nuestros usuarios',
        subtitle: 'Relatos de quienes usan Tuggi para transformar trayectos en historias.',
        testimonials: [
          {
            id: 'maria',
            name: 'Maria Silva',
            location: 'São Paulo',
            role: 'Usuaria',
            text: 'Empecé a notar detalles de la ciudad que nunca había percibido. Las historias son cortas y en el tiempo justo.',
            rating: 5,
            avatar: '/images/avatar-maria.jpg'
          },
          {
            id: 'joao',
            name: 'João Oliveira',
            location: 'Río de Janeiro',
            role: 'Conductor',
            text: 'En el tráfico, el audio da contexto y hace el viaje más ligero sin que tenga que mirar la pantalla.',
            rating: 5,
            avatar: '/images/avatar-joao.jpg'
          },
          {
            id: 'camila',
            name: 'Camila Santos',
            location: 'Minas Gerais',
            role: 'Conductora de aplicación',
            text: 'Cuando llevo pasajeros, las narraciones se vuelven tema de conversación y hacen el trayecto más interesante.',
            rating: 5,
            avatar: '/images/avatar-camila.jpg'
          },
          {
            id: 'carlos',
            name: 'Carlos Ferreira',
            location: 'Paraná',
            role: 'Usuario',
            text: 'La calidad del contenido impresiona. Cada punto tiene una historia corta y bien explicada.',
            rating: 5,
            avatar: '/images/avatar-carlos.jpg'
          }
        ],
        trustItems: [
          {
            icon: 'headphones',
            label: 'Audio en primer lugar'
          },
          {
            icon: 'message',
            label: 'Historias cortas y contextuales'
          },
          {
            icon: 'volume',
            label: 'Narración automática'
          }
        ]
      },
      FR: {
        title: 'Ce que disent nos utilisateurs',
        subtitle: 'Témoignages de ceux qui utilisent Tuggi pour transformer leurs trajets en histoires.',
        testimonials: [
          {
            id: 'maria',
            name: 'Maria Silva',
            location: 'São Paulo',
            role: 'Utilisatrice',
            text: 'J\'ai commencé à remarquer des détails de la ville que je n\'avais jamais perçus. Les histoires sont courtes et au bon moment.',
            rating: 5,
            avatar: '/images/avatar-maria.jpg'
          },
          {
            id: 'joao',
            name: 'João Oliveira',
            location: 'Rio de Janeiro',
            role: 'Conducteur',
            text: 'Dans les embouteillages, l\'audio donne du contexte et rend le voyage plus léger sans avoir à regarder l\'écran.',
            rating: 5,
            avatar: '/images/avatar-joao.jpg'
          },
          {
            id: 'camila',
            name: 'Camila Santos',
            location: 'Minas Gerais',
            role: 'Chauffeur VTC',
            text: 'Quand j\'ai des passagers, les narrations deviennent un sujet de conversation et rendent le trajet plus intéressant.',
            rating: 5,
            avatar: '/images/avatar-camila.jpg'
          },
          {
            id: 'carlos',
            name: 'Carlos Ferreira',
            location: 'Paraná',
            role: 'Utilisateur',
            text: 'La qualité du contenu impressionne. Chaque point a une histoire courte et bien expliquée.',
            rating: 5,
            avatar: '/images/avatar-carlos.jpg'
          }
        ],
        trustItems: [
          {
            icon: 'headphones',
            label: 'L\'audio d\'abord'
          },
          {
            icon: 'message',
            label: 'Histoires courtes et contextuelles'
          },
          {
            icon: 'volume',
            label: 'Narration automatique'
          }
        ]
      },
      DE: {
        title: 'Was unsere Nutzer sagen',
        subtitle: 'Berichte von Menschen, die Tuggi nutzen, um Fahrten in Geschichten zu verwandeln.',
        testimonials: [
          {
            id: 'maria',
            name: 'Maria Silva',
            location: 'São Paulo',
            role: 'Nutzerin',
            text: 'Ich begann Details der Stadt zu bemerken, die ich nie zuvor wahrgenommen hatte. Die Geschichten sind kurz und genau richtig getimt.',
            rating: 5,
            avatar: '/images/avatar-maria.jpg'
          },
          {
            id: 'joao',
            name: 'João Oliveira',
            location: 'Rio de Janeiro',
            role: 'Fahrer',
            text: 'Im Verkehr gibt das Audio Kontext und macht die Reise leichter, ohne dass ich auf den Bildschirm schauen muss.',
            rating: 5,
            avatar: '/images/avatar-joao.jpg'
          },
          {
            id: 'camila',
            name: 'Camila Santos',
            location: 'Minas Gerais',
            role: 'Fahrgemeinschaftsfahrerin',
            text: 'Wenn ich Fahrgäste habe, werden die Erzählungen zum Gesprächsstoff und machen die Fahrt interessanter.',
            rating: 5,
            avatar: '/images/avatar-camila.jpg'
          },
          {
            id: 'carlos',
            name: 'Carlos Ferreira',
            location: 'Paraná',
            role: 'Nutzer',
            text: 'Die Inhaltsqualität beeindruckt. Jeder Punkt hat eine kurze und gut erklärte Geschichte.',
            rating: 5,
            avatar: '/images/avatar-carlos.jpg'
          }
        ],
        trustItems: [
          {
            icon: 'headphones',
            label: 'Audio zuerst'
          },
          {
            icon: 'message',
            label: 'Kurze kontextbezogene Geschichten'
          },
          {
            icon: 'volume',
            label: 'Automatische Erzählung'
          }
        ]
      },
      IT: {
        title: 'Cosa dicono i nostri utenti',
        subtitle: 'Racconti di chi usa Tuggi per trasformare i tragitti in storie.',
        testimonials: [
          {
            id: 'maria',
            name: 'Maria Silva',
            location: 'San Paolo',
            role: 'Utente',
            text: 'Ho iniziato a notare dettagli della città che non avevo mai percepito. Le storie sono brevi e al momento giusto.',
            rating: 5,
            avatar: '/images/avatar-maria.jpg'
          },
          {
            id: 'joao',
            name: 'João Oliveira',
            location: 'Rio de Janeiro',
            role: 'Autista',
            text: 'Nel traffico, l\'audio dà contesto e rende il viaggio più leggero senza dover guardare lo schermo.',
            rating: 5,
            avatar: '/images/avatar-joao.jpg'
          },
          {
            id: 'camila',
            name: 'Camila Santos',
            location: 'Minas Gerais',
            role: 'Autista di app',
            text: 'Quando porto passeggeri, le narrazioni diventano argomento di conversazione e rendono il tragitto più interessante.',
            rating: 5,
            avatar: '/images/avatar-camila.jpg'
          },
          {
            id: 'carlos',
            name: 'Carlos Ferreira',
            location: 'Paraná',
            role: 'Utente',
            text: 'La qualità del contenuto impressiona. Ogni punto ha una storia breve e ben spiegata.',
            rating: 5,
            avatar: '/images/avatar-carlos.jpg'
          }
        ],
        trustItems: [
          {
            icon: 'headphones',
            label: 'Audio al primo posto'
          },
          {
            icon: 'message',
            label: 'Storie brevi e contestuali'
          },
          {
            icon: 'volume',
            label: 'Narrazione automatica'
          }
        ]
      }
    };
    return content[language] || content['PT'];
  };

  const content = getLocalizedContent(currentLanguage);

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'headphones':
        return <Headphones className="w-5 h-5 text-tuggi-primary" />;
      case 'message':
        return <MessageSquare className="w-5 h-5 text-tuggi-secondary" />;
      case 'volume':
        return <Volume2 className="w-5 h-5 text-green-500" />;
      default:
        return <Award className="w-5 h-5 text-tuggi-primary" />;
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-500 fill-current' : 'text-yellow-500 opacity-25'
        }`}
        aria-hidden={index >= rating ? "true" : "false"}
      />
    ));
  };

  return (
    <section 
      className="py-12 lg:py-16" 
      style={{ 
        background: 'var(--color-bg-alt)',
        borderTop: '1px solid rgba(0,0,0,0.05)'
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 
            className="text-3xl lg:text-4xl font-bold mb-2"
            style={{ 
              color: 'var(--color-text)',
              fontFamily: 'var(--font-sans)',
              fontSize: '32px',
              fontWeight: '700'
            }}
          >
            {content.title}
          </h2>
          <p 
            className="text-lg"
            style={{ 
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-sans)'
            }}
          >
            {content.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
          style={{ marginTop: '24px' }}
        >
          {content.testimonials.map((testimonial: Testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-lg"
              style={{
                background: '#fff',
                borderRadius: '16px',
                boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
                padding: '20px 24px'
              }}
              aria-label={`Depoimento de ${testimonial.name}, ${testimonial.location}, ${testimonial.rating} estrelas`}
            >
              {/* Quote Icon */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Quote className="w-6 h-6" style={{ color: 'var(--color-primary)', opacity: 0.3 }} />
                </div>
                
                <div className="flex-1">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  {/* Testimonial Text */}
                  <p 
                    className="mb-4 leading-relaxed"
                    style={{ 
                      color: 'var(--color-text)',
                      lineHeight: '1.6',
                      marginTop: '8px'
                    }}
                  >
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author */}
                  <div 
                    className="flex items-center gap-3"
                    style={{ 
                      marginTop: '16px',
                      color: 'var(--color-text-muted)'
                    }}
                  >
                    <div 
                      className="w-9 h-9 rounded-full flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(180deg, #00A8E8 0%, #FF6F00 100%)',
                        color: '#fff',
                        fontWeight: '700',
                        boxShadow: '0 0 0 2px #fff, 0 2px 4px rgba(0,0,0,0.05)'
                      }}
                    >
                      <span className="text-white font-bold text-sm">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div 
                        className="font-semibold"
                        style={{ color: 'var(--color-text)' }}
                      >
                        {testimonial.name}
                        {testimonial.role && (
                          <span 
                            className="ml-2 text-sm font-normal"
                            style={{ color: 'var(--color-text-muted)' }}
                          >
                            — {testimonial.role}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <MapPin className="w-3 h-3" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Strip */}
        {content.trustItems && (
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            style={{ 
              marginTop: '40px',
              paddingTop: '24px',
              borderTop: '1px solid #E5E7EB'
            }}
          >
            {content.trustItems.map((item: any, index: number) => (
              <div 
                key={index} 
                className="flex items-center gap-3 justify-center"
                style={{ color: 'var(--color-text)' }}
              >
                <div style={{ color: 'var(--color-primary)' }}>
                  {getIcon(item.icon)}
                </div>
                <div 
                  className="font-semibold text-sm"
                  style={{ color: 'var(--color-text)', fontSize: '15px' }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsV2;
