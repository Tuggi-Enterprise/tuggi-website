import React from 'react';
import { layout, gradients } from '../utils/designSystem';
import { Mail, Database, Globe, Shield, Code, Users } from 'lucide-react';

interface ContentLanguage {
  h1: string;
  intro: string;
  deliver_title: string;
  deliver_items: string[];
  usecases_title: string;
  usecases_items: string[];
  integrate_title: string;
  integrate_items: string[];
  trust_title: string;
  trust_text: string;
  sample_title: string;
  cta: string;
}

interface BusinessPageProps {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, language: string) => void;
}

const BusinessPage: React.FC<BusinessPageProps> = ({ 
  currentLanguage = 'PT',
  onCTAClick 
}) => {
  // Localized content
  const getLocalizedContent = (language: string): ContentLanguage => {
    const content: Record<string, ContentLanguage> = {
      PT: {
        h1: "Para empresas",
        intro: "A Tuggi oferece dados culturais verificados e atualizados sobre pontos de interesse — prontos para integrar em produtos e experiências de mobilidade, turismo e educação.",
        deliver_title: "O que entregamos",
        deliver_items: [
          "Base de descrições culturais com verificação automática de fatos (datas, nomes, eventos)",
          "Metadados por localização (cidade, bairro, coordenadas e contexto)",
          "Cobertura multilíngue atual (PT-BR, ES-ES, EN-US) e expansão contínua",
          "Acesso via API ou licenciamento de dados"
        ],
        usecases_title: "Casos de uso",
        usecases_items: [
          "Operadoras de turismo e receptivos",
          "Apps de mobilidade e transporte",
          "Destinos (DMOs), secretarias e equipamentos culturais",
          "Educação formal e não formal",
          "Hotelaria e hospitalidade"
        ],
        integrate_title: "Como integrar",
        integrate_items: [
          "API de consulta por coordenadas, cidade ou ID de ponto",
          "Filtros por tema, época, raio de proximidade",
          "Planos por volume e SLA de atualização"
        ],
        trust_title: "Confiabilidade",
        trust_text: "As descrições passam por checagens automáticas de factualidade e curadoria contínua, preservando contexto local e histórico.",
        sample_title: "Exemplo de resposta (amostra)",
        cta: "Converse com nosso time: enterprise@tuggi.app"
      },
      EN: {
        h1: "For businesses",
        intro: "Tuggi offers verified and updated cultural data about points of interest — ready to integrate into mobility, tourism, and education products and experiences.",
        deliver_title: "What we deliver",
        deliver_items: [
          "Cultural description database with automatic fact verification (dates, names, events)",
          "Location metadata (city, neighborhood, coordinates and context)",
          "Current multilingual coverage (PT-BR, ES-ES, EN-US) and continuous expansion",
          "Access via API or data licensing"
        ],
        usecases_title: "Use cases",
        usecases_items: [
          "Tourism operators and receptives",
          "Mobility and transport apps",
          "Destinations (DMOs), secretaries and cultural facilities",
          "Formal and non-formal education",
          "Hospitality and accommodation"
        ],
        integrate_title: "How to integrate",
        integrate_items: [
          "Query API by coordinates, city or point ID",
          "Filters by theme, period, proximity radius",
          "Volume-based plans and update SLA"
        ],
        trust_title: "Reliability",
        trust_text: "Descriptions undergo automatic factuality checks and continuous curation, preserving local and historical context.",
        sample_title: "Response example (sample)",
        cta: "Talk to our team: enterprise@tuggi.app"
      },
      ES: {
        h1: "Para empresas",
        intro: "Tuggi ofrece datos culturales verificados y actualizados sobre puntos de interés — listos para integrar en productos y experiencias de movilidad, turismo y educación.",
        deliver_title: "Qué entregamos",
        deliver_items: [
          "Base de descripciones culturales con verificación automática de hechos (fechas, nombres, eventos)",
          "Metadatos por ubicación (ciudad, barrio, coordenadas y contexto)",
          "Cobertura multilingüe actual (PT-BR, ES-ES, EN-US) y expansión continua",
          "Acceso vía API o licenciamiento de datos"
        ],
        usecases_title: "Casos de uso",
        usecases_items: [
          "Operadoras de turismo y receptivos",
          "Apps de movilidad y transporte",
          "Destinos (DMOs), secretarías y equipamientos culturales",
          "Educación formal y no formal",
          "Hotelería y hospitalidad"
        ],
        integrate_title: "Cómo integrar",
        integrate_items: [
          "API de consulta por coordenadas, ciudad o ID de punto",
          "Filtros por tema, época, radio de proximidad",
          "Planes por volumen y SLA de actualización"
        ],
        trust_title: "Confiabilidad",
        trust_text: "Las descripciones pasan por verificaciones automáticas de factualidad y curaduría continua, preservando contexto local e histórico.",
        sample_title: "Ejemplo de respuesta (muestra)",
        cta: "Habla con nuestro equipo: enterprise@tuggi.app"
      }
    };
    return content[language] || content['PT'];
  };

  const content = getLocalizedContent(currentLanguage);

  const handleCTAClick = (ctaType: string) => {
    onCTAClick?.(ctaType, currentLanguage);
    
    // GA4 tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_business_contact_click', {
        event_category: 'Business',
        event_label: 'enterprise_contact',
        language: currentLanguage
      });
    }
  };

  const sampleApiResponse = {
    "id": "poi_123",
    "title": "Teatro Municipal de São Paulo",
    "coords": { "lat": -23.545, "lng": -46.638 },
    "city": "São Paulo",
    "country": "Brazil",
    "languages": ["pt-BR", "es-ES", "en-US"],
    "description": {
      "pt-BR": "Inaugurado em 1911, ...",
      "es-ES": "Inaugurado en 1911, ...",
      "en-US": "Inaugurated in 1911, ..."
    },
    "factual_checks": {
      "dates": "verified",
      "entities": "verified",
      "sources": ["sourceA", "sourceB"]
    },
    "updated_at": "2025-08-10"
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className={`${layout.section.base}`} style={{ background: gradients.ocean }}>
        <div className={`${layout.container.base} text-center`}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {content.h1}
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            {content.intro}
          </p>
        </div>
      </section>

      {/* What We Deliver */}
      <section className={`${layout.section.base} bg-gray-50`}>
        <div className={layout.container.base}>
          <div className="text-center mb-12">
            <Database className="w-12 h-12 text-tuggi-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              {content.deliver_title}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {content.deliver_items.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-tuggi-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-tuggi-primary rounded-full"></div>
                  </div>
                  <p className="text-neutral-700 leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className={layout.section.base}>
        <div className={layout.container.base}>
          <div className="text-center mb-12">
            <Users className="w-12 h-12 text-tuggi-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              {content.usecases_title}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.usecases_items.map((usecase, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="w-12 h-12 bg-tuggi-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-6 h-6 text-tuggi-primary" />
                  </div>
                  <p className="text-neutral-700 font-medium">{usecase}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Integrate */}
      <section className={`${layout.section.base} bg-gray-50`}>
        <div className={layout.container.base}>
          <div className="text-center mb-12">
            <Code className="w-12 h-12 text-tuggi-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              {content.integrate_title}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {content.integrate_items.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="text-center">
                  <div className="w-10 h-10 bg-tuggi-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-tuggi-primary font-bold text-lg">{index + 1}</span>
                  </div>
                  <p className="text-neutral-700">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Reliability */}
      <section className={layout.section.base}>
        <div className={layout.container.base}>
          <div className="text-center mb-8">
            <Shield className="w-12 h-12 text-tuggi-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              {content.trust_title}
            </h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              {content.trust_text}
            </p>
          </div>
        </div>
      </section>

      {/* API Sample Response */}
      <section className={`${layout.section.base} bg-gray-50`}>
        <div className={layout.container.base}>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              {content.sample_title}
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-neutral-900 rounded-xl p-6 overflow-x-auto">
              <pre className="text-green-400 text-sm leading-relaxed">
                {JSON.stringify(sampleApiResponse, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={layout.section.base} style={{ background: gradients.ocean }}>
        <div className={`${layout.container.base} text-center`}>
          <h2 className="text-3xl font-bold text-white mb-6">
            {content.cta.split(':')[0]}
          </h2>
          <button
            onClick={() => {
              handleCTAClick('business_contact');
              window.location.href = 'mailto:enterprise@tuggi.app';
            }}
            className="inline-flex items-center gap-3 bg-white text-tuggi-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 hover:scale-105 transform transition-all duration-200 shadow-lg"
          >
            <Mail className="w-5 h-5" />
            <span>enterprise@tuggi.app</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default BusinessPage;