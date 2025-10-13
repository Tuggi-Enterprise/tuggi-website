import React from 'react';
import { Star, Quote, MapPin, Users, Globe, Award, Building2, Languages, BadgeX, BadgeCheck } from 'lucide-react';
import { layout } from '../../utils/designSystem';

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
        subtitle: 'Histórias reais de pessoas que transformaram seus trajetos.',
        subheadSecondary: 'Piloto ativo nas cidades de São Paulo e Rio de Janeiro (fase beta).',
        note: 'Sem anúncios. Foco total na experiência cultural.',
        testimonials: [
          {
            id: 'maria_sp',
            name: 'Maria',
            location: 'São Paulo',
            role: 'Turista',
            text: 'Descobri lugares que eu passava todos os dias. O Tuggi me fez ver minha cidade com outros olhos.',
            rating: 5,
            avatar: '/images/avatar-maria.jpg'
          },
          {
            id: 'joao_sp',
            name: 'João',
            location: 'São Paulo',
            role: 'Motorista',
            text: 'Perfeito para o trânsito de SP. As narrações tornam o tempo no carro muito mais interessante.',
            rating: 5,
            avatar: '/images/avatar-joao.jpg'
          },
          {
            id: 'camila_sp',
            name: 'Camila',
            location: 'São Paulo',
            role: 'Turista',
            text: 'Funciona muito bem nas vias principais. O modo offline ainda está em testes, mas já vale a pena.',
            rating: 4,
            avatar: '/images/avatar-camila.jpg'
          },
          {
            id: 'carlos_rj',
            name: 'Carlos',
            location: 'Rio de Janeiro',
            role: 'Motorista',
            text: 'A qualidade do conteúdo impressiona. Cada ponto tem uma história que prende a atenção dos passageiros.',
            rating: 5,
            avatar: '/images/avatar-carlos.jpg'
          }
        ],
        stats: [
          {
            icon: 'building',
            value: '2',
            label: 'Cidades em piloto'
          },
          {
            icon: 'languages',
            value: '3',
            label: 'Idiomas disponíveis'
          },
          {
            icon: 'badge-x',
            value: '0',
            label: 'Anúncios'
          },
          {
            icon: 'badge-check',
            value: 'Grátis',
            label: 'Preço (beta)'
          }
        ]
      },
      EN: {
        title: 'What our users say',
        subtitle: 'Real stories from people who transformed their journeys.',
        subheadSecondary: 'Active pilot in São Paulo and Rio de Janeiro cities (beta phase).',
        note: 'No ads. Total focus on cultural experience.',
        testimonials: [
          {
            id: 'maria_sp',
            name: 'Maria',
            location: 'São Paulo',
            role: 'Tourist',
            text: 'I discovered places I passed every day. Tuggi made me see my city with different eyes.',
            rating: 5,
            avatar: '/images/avatar-maria.jpg'
          },
          {
            id: 'joao_sp',
            name: 'João',
            location: 'São Paulo',
            role: 'Driver',
            text: 'Perfect for São Paulo traffic. The narrations make time in the car much more interesting.',
            rating: 5,
            avatar: '/images/avatar-joao.jpg'
          },
          {
            id: 'camila_sp',
            name: 'Camila',
            location: 'São Paulo',
            role: 'Tourist',
            text: 'Works very well on main roads. Offline mode is still in testing, but it\'s already worth it.',
            rating: 4,
            avatar: '/images/avatar-camila.jpg'
          },
          {
            id: 'carlos_rj',
            name: 'Carlos',
            location: 'Rio de Janeiro',
            role: 'Driver',
            text: 'The content quality impresses. Each point has a story that captures passengers\' attention.',
            rating: 5,
            avatar: '/images/avatar-carlos.jpg'
          }
        ],
        stats: [
          {
            icon: 'building',
            value: '2',
            label: 'Pilot cities'
          },
          {
            icon: 'languages',
            value: '3',
            label: 'Available languages'
          },
          {
            icon: 'badge-x',
            value: '0',
            label: 'Ads'
          },
          {
            icon: 'badge-check',
            value: 'Free',
            label: 'Price (beta)'
          }
        ]
      },
      ES: {
        title: 'Lo que dicen nuestros usuarios',
        subtitle: 'Historias reales de personas que transformaron sus trayectos.',
        subheadSecondary: 'Piloto activo en las ciudades de São Paulo y Río de Janeiro (fase beta).',
        note: 'Sin anuncios. Enfoque total en la experiencia cultural.',
        testimonials: [
          {
            id: 'maria_sp',
            name: 'Maria',
            location: 'São Paulo',
            role: 'Turista',
            text: 'Descubrí lugares por los que pasaba todos los días. Tuggi me hizo ver mi ciudad con otros ojos.',
            rating: 5,
            avatar: '/images/avatar-maria.jpg'
          },
          {
            id: 'joao_sp',
            name: 'João',
            location: 'São Paulo',
            role: 'Conductor',
            text: 'Perfecto para el tráfico de São Paulo. Las narraciones hacen el tiempo en el auto mucho más interesante.',
            rating: 5,
            avatar: '/images/avatar-joao.jpg'
          },
          {
            id: 'camila_sp',
            name: 'Camila',
            location: 'São Paulo',
            role: 'Turista',
            text: 'Funciona muy bien en las vías principales. El modo offline aún está en pruebas, pero ya vale la pena.',
            rating: 4,
            avatar: '/images/avatar-camila.jpg'
          },
          {
            id: 'carlos_rj',
            name: 'Carlos',
            location: 'Río de Janeiro',
            role: 'Conductor',
            text: 'La calidad del contenido impresiona. Cada punto tiene una historia que captura la atención de los pasajeros.',
            rating: 5,
            avatar: '/images/avatar-carlos.jpg'
          }
        ],
        stats: [
          {
            icon: 'building',
            value: '2',
            label: 'Ciudades piloto'
          },
          {
            icon: 'languages',
            value: '3',
            label: 'Idiomas disponibles'
          },
          {
            icon: 'badge-x',
            value: '0',
            label: 'Anuncios'
          },
          {
            icon: 'badge-check',
            value: 'Gratis',
            label: 'Precio (beta)'
          }
        ]
      }
    };
    return content[language] || content['PT'];
  };

  const content = getLocalizedContent(currentLanguage);

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'building':
        return <Building2 className="w-5 h-5 text-tuggi-primary" />;
      case 'languages':
        return <Languages className="w-5 h-5 text-tuggi-secondary" />;
      case 'badge-x':
        return <BadgeX className="w-5 h-5 text-red-500" />;
      case 'badge-check':
        return <BadgeCheck className="w-5 h-5 text-green-500" />;
      case 'users':
        return <Users className="w-5 h-5 text-tuggi-primary" />;
      case 'globe':
        return <Globe className="w-5 h-5 text-tuggi-secondary" />;
      case 'award':
        return <Award className="w-5 h-5 text-green-500" />;
      default:
        return <Users className="w-5 h-5 text-tuggi-primary" />;
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
            className="text-lg mb-1"
            style={{ 
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-sans)'
            }}
          >
            {content.subtitle}
          </p>
          <p 
            className="text-sm"
            style={{ 
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-sans)',
              fontSize: '15px'
            }}
          >
            {content.subheadSecondary}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
          style={{ marginTop: '24px' }}
        >
          {content.testimonials.map((testimonial: Testimonial, index: number) => (
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

        {/* Note */}
        <div 
          className="text-center mb-8"
          style={{ marginTop: '16px' }}
        >
          <p 
            className="text-sm"
            style={{ 
              color: '#6B7280',
              fontSize: '14px'
            }}
          >
            {content.note}
          </p>
        </div>

        {/* KPIs Section */}
        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          style={{ 
            marginTop: '20px',
            paddingTop: '16px',
            borderTop: '1px solid #E5E7EB'
          }}
        >
          {content.stats.map((stat: any, index: number) => (
            <div 
              key={index} 
              className="flex items-center gap-2 justify-center"
              style={{ color: 'var(--color-text)' }}
            >
              <div style={{ color: 'var(--color-primary)' }}>
                {getIcon(stat.icon)}
              </div>
              <div>
                <div 
                  className="font-bold"
                  style={{ fontWeight: '700' }}
                >
                  {stat.value}
                </div>
                <div 
                  className="text-sm"
                  style={{ 
                    color: 'var(--color-text-muted)',
                    fontSize: '14px'
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div 
          className="text-center mt-8 pt-6"
          style={{ 
            borderTop: '1px solid #E5E7EB',
            marginTop: '20px',
            paddingTop: '16px'
          }}
        >
          <p 
            className="text-sm font-medium"
            style={{ 
              color: '#6B7280',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            Piloto ativo em SP e RJ — mais de 5 mil viagens narradas
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsV2;
