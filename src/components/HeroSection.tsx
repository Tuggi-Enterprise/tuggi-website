import React from 'react';
import { ArrowRight, Play, MapPin, Globe, Smartphone, Settings } from 'lucide-react';

interface HeroSectionProps {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, language: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  currentLanguage = 'EN',
  onCTAClick 
}) => {
  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      EN: {
        badge: '🧪 Early Access Program',
        title: 'Be one of the first to turn trips into memorable experiences with Tuggi Drive',
        subtitle: 'We\'re selecting transportation companies to join our early access program.',
        quote: '"At Tuggi, we believe that every journey can be more than just getting from point A to point B — it can be a cultural immersion, a story told at the pace of the road."',
        requestDemo: 'Request Demo',
        joinPilot: 'Join the Pilot',
        trustIndicator: 'Trusted by leading transportation companies',
        companies: ['TRANSPORT', 'LOGISTICS', 'TRAVEL', 'FLEET'],
        features: {
          narration: 'Cultural Journey Active',
          premium: 'Premium Experience',
          experience: 'Real Traveler Experience',
          immersion: 'Cultural Immersion: Passengers discover local history, traditions, and hidden gems as they travel through each neighborhood.',
          personalized: 'Personalized Narratives: Stories adapt to passenger preferences, language, and interests for maximum engagement.',
          memorable: 'Memorable Connections: Every journey becomes a story worth sharing, creating lasting impressions of your service.',
          quote: '"This isn\'t just a ride — it\'s a journey through time and culture."',
          feedback: '— Typical Passenger Feedback'
        }
      },
      PT: {
        badge: '🧪 Programa de Acesso Antecipado',
        title: 'Seja um dos primeiros a transformar viagens em experiências memoráveis com o Tuggi Drive',
        subtitle: 'Estamos selecionando empresas de transporte para participar do nosso programa de acesso antecipado.',
        quote: '"Na Tuggi, acreditamos que cada jornada pode ser mais do que apenas ir do ponto A ao ponto B — pode ser uma imersão cultural, uma história contada no ritmo da estrada."',
        requestDemo: 'Solicitar Demo',
        joinPilot: 'Participar do Piloto',
        trustIndicator: 'Confiado por empresas líderes de transporte',
        companies: ['TRANSPORTE', 'LOGÍSTICA', 'VIAGEM', 'FROTA'],
        features: {
          narration: 'Jornada Cultural Ativa',
          premium: 'Experiência Premium',
          experience: 'Experiência Real do Viajante',
          immersion: 'Imersão Cultural: Passageiros descobrem história local, tradições e joias escondidas enquanto viajam por cada bairro.',
          personalized: 'Narrativas Personalizadas: Histórias se adaptam às preferências, idioma e interesses dos passageiros para máximo engajamento.',
          memorable: 'Conexões Memoráveis: Cada jornada se torna uma história que vale a pena compartilhar, criando impressões duradouras do seu serviço.',
          quote: '"Isso não é apenas uma viagem — é uma jornada através do tempo e da cultura."',
          feedback: '— Feedback Típico de Passageiros'
        }
      },
      ES: {
        badge: '🧪 Programa de Acceso Temprano',
        title: 'Sé uno de los primeros en convertir viajes en experiencias memorables con Tuggi Drive',
        subtitle: 'Estamos seleccionando empresas de transporte para unirse a nuestro programa de acceso temprano.',
        quote: '"En Tuggi, creemos que cada viaje puede ser más que solo ir del punto A al punto B — puede ser una inmersión cultural, una historia contada al ritmo del camino."',
        requestDemo: 'Solicitar Demo',
        joinPilot: 'Unirse al Piloto',
        trustIndicator: 'Confiado por empresas líderes de transporte',
        companies: ['TRANSPORTE', 'LOGÍSTICA', 'VIAJES', 'FLOTA'],
        features: {
          narration: 'Viaje Cultural Activo',
          premium: 'Experiencia Premium',
          experience: 'Experiencia Real del Viajero',
          immersion: 'Inmersión Cultural: Los pasajeros descubren historia local, tradiciones y gemas ocultas mientras viajan por cada vecindario.',
          personalized: 'Narrativas Personalizadas: Las historias se adaptan a las preferencias, idioma e intereses de los pasajeros para máximo compromiso.',
          memorable: 'Conexiones Memorables: Cada viaje se convierte en una historia que vale la pena compartir, creando impresiones duraderas de su servicio.',
          quote: '"Esto no es solo un viaje — es un recorrido a través del tiempo y la cultura."',
          feedback: '— Comentarios Típicos de Pasajeros'
        }
      }
    };
    return content[language] || content['EN'];
  };

  const content = getLocalizedContent(currentLanguage);

  const handleCTAClick = (ctaType: string) => {
    onCTAClick?.(ctaType, currentLanguage);
  };

  return (
    <section className="relative bg-gradient-to-br from-neutral-50 via-white to-tuggi-primary/5 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2300A8E8%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-tuggi-primary/10 rounded-full mb-6">
              <span className="text-tuggi-primary font-semibold text-sm">
                {content.badge}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
              {content.title}
            </h1>
            
            <p className="text-xl text-neutral-600 mb-6 font-medium">
              {content.subtitle}
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-neutral-200 shadow-sm">
              <p className="text-lg text-neutral-700 leading-relaxed italic">
                {content.quote}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <button 
                onClick={() => handleCTAClick('request_demo_hero')}
                className="bg-tuggi-primary hover:bg-tuggi-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2 group"
              >
                <span>{content.requestDemo}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button 
                onClick={() => handleCTAClick('join_pilot_hero')}
                className="border-2 border-neutral-300 hover:border-tuggi-primary text-neutral-700 hover:text-tuggi-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 group bg-white/80 backdrop-blur-sm"
              >
                <Play className="w-5 h-5" />
                <span>{content.joinPilot}</span>
              </button>
            </div>

            {/* Trust Indicators */}
            {/* <div className="pt-8 border-t border-neutral-200">
              <p className="text-sm text-neutral-500 mb-4">{content.trustIndicator}</p>
              <div className="flex items-center space-x-8 opacity-60">
                {content.companies.map((company: string, index: number) => (
                  <div key={index} className="text-xl font-bold text-neutral-400">{company}</div>
                ))}
              </div>
            </div> */}
          </div>

          {/* Professional Driver Image Mockup */}
          <div className="relative animate-fade-in">
            <div className="relative bg-gradient-to-br from-tuggi-primary/10 to-tuggi-secondary/10 rounded-3xl p-8 lg:p-12">
              {/* Driver Dashboard Mockup */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-neutral-100 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-xs text-neutral-500 font-medium">Tuggi Drive Dashboard</div>
                </div>
                
                {/* Professional Driver Interface */}
                <div className="p-6">
                  {/* Driver Profile */}
                  <div className="flex items-center space-x-4 mb-6 p-4 bg-tuggi-primary/5 rounded-xl">
                    <div className="w-12 h-12 bg-tuggi-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">👨‍💼</span>
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-800">Professional Driver</div>
                      <div className="text-sm text-neutral-600">Active Route • 4.9★ Rating</div>
                    </div>
                  </div>
                  
                  {/* Active Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                      <div className="text-green-600 font-semibold text-sm">🗣️ Narration ON</div>
                      <div className="text-xs text-green-700 mt-1">Auto-storytelling active</div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
                      <div className="text-blue-600 font-semibold text-sm">🌍 Multi-language</div>
                      <div className="text-xs text-blue-700 mt-1">EN • ES • PT ready</div>
                    </div>
                  </div>
                  
                  {/* Route Progress */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-neutral-700">Route Progress</span>
                      <span className="text-sm text-tuggi-primary font-semibold">65%</span>
                    </div>
                    <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-tuggi-primary to-tuggi-secondary rounded-full w-2/3 transition-all duration-500"></div>
                    </div>
                    <div className="text-xs text-neutral-600">Next story point in 2.3 km</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-tuggi-secondary rounded-2xl opacity-20 rotate-12"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-tuggi-primary rounded-2xl opacity-20 -rotate-12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;