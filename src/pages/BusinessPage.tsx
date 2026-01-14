import React from 'react';
import { layout, getButtonClasses, getCardClasses } from '../utils/designSystem';
import { Shield, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ContentLanguage {
  hero: {
    h1: string;
    sub: string;
    cta_primary: string;
    cta_secondary: string;
    email: string;
  };
  icp: {
    title: string;
    cards: Array<{ title: string; text: string }>;
  };
  deliverables: {
    title: string;
    groupA: { title: string; items: string[] };
    groupB: { title: string; items: string[] };
    groupC: { title: string; items: string[] };
  };
  integrate: {
    title: string;
    steps: Array<{ title: string; items: string[] }>;
    note: string;
  };
  licensing: {
    title: string;
    cards: Array<{ title: string; items: string[] }>;
    note: string;
  };
  requirements: {
    title: string;
    items: string[];
  };
  governance: {
    title: string;
    items: string[];
    link: string;
  };
  trust: {
    title: string;
    items: string[];
    link: string;
  };
  sample: {
    title: string;
    disclaimer: string;
    summary: string[];
  };
  finalCta: {
    title: string;
    sub: string;
    qualifier: string;
    button: string;
    secondary: string;
  };
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
        hero: {
          h1: "Dados culturais em áudio para integrar na sua experiência.",
          sub: "A Tuggi fornece descrições culturais curadas e metadados de pontos de interesse (POIs) para produtos de mobilidade, turismo e educação — via licença de dados ou integração.",
          cta_primary: "Falar com nosso time",
          cta_secondary: "Ver como integrar",
          email: "enterprise@tuggi.app"
        },
        icp: {
          title: "Para quem é",
          cards: [
            { title: "Apps de mobilidade e transporte", text: "Enriqueça trajetos com contexto cultural em áudio." },
            { title: "Operadoras de turismo e receptivos", text: "Conteúdo escalável para rotas e experiências." },
            { title: "Destinos (DMOs), secretarias e equipamentos culturais", text: "Narrativas padronizadas para ativação do território." },
            { title: "Hotelaria e hospitalidade", text: "Histórias locais para melhorar a experiência do hóspede." },
            { title: "Educação formal e não formal", text: "Conteúdo contextual para aprendizagem no mundo real." }
          ]
        },
        deliverables: {
          title: "O que entregamos",
          groupA: {
            title: "Dados de POIs",
            items: [
              "ID único do ponto + nome + categoria",
              "Coordenadas + área de cobertura (raio/polígono, quando aplicável)",
              "Cidade/estado/país + contexto local",
              "Tags por tema (história, arquitetura, cultura, etc.)",
              "Campos de atualização (data de revisão/atualização)"
            ]
          },
          groupB: {
            title: "Narrativas (texto e/ou áudio)",
            items: [
              "Descrição curta (30–60s) e descrição longa (quando aplicável)",
              "Idiomas suportados (conforme disponibilidade)",
              "Texto pronto para TTS ou áudio sob demanda"
            ]
          },
          groupC: {
            title: "Entrega técnica",
            items: [
              "Exportação em JSON/CSV",
              "Endpoint de consulta (API) por coordenada e/ou ID",
              "Filtros por idioma, tema e raio"
            ]
          }
        },
        integrate: {
          title: "Como integrar",
          steps: [
            {
              title: "1. Entrada (o que o cliente envia)",
              items: ["Coordenadas (lat/lng) + raio OU ID do ponto", "Idioma desejado", "Contexto opcional (categoria, perfil do usuário)"]
            },
            {
              title: "2. Saída (o que o cliente recebe)",
              items: ["Metadados do POI + texto da narrativa", "Campos de controle (duração estimada, tags, data de atualização)", "Referências internas (IDs)"]
            },
            {
              title: "3. Operação (como roda em produção)",
              items: ["Cache e versionamento de conteúdo", "Atualizações periódicas (cadência acordada)", "Ambiente de teste + produção"]
            }
          ],
          note: "Integração por API ou licenciamento de base, conforme necessidade."
        },
        licensing: {
          title: "Modelos de licenciamento",
          cards: [
            { 
              title: "Licença por território", 
              items: ["Conteúdo para um conjunto de cidades/rotas acordadas.", "Atualizações e expansão definidas em contrato."] 
            },
            { 
              title: "Licença por volume", 
              items: ["Por consumo (consultas à API / POIs / chamadas).", "Ideal para produtos com variação de tráfego."] 
            },
            { 
              title: "Projeto sob medida", 
              items: ["Curadoria e produção para um tema/rota específica.", "Entrega com validação e revisão conjunta."] 
            }
          ],
          note: "Planos com suporte e SLA são definidos no contrato."
        },
        requirements: {
          title: "O que precisamos de você",
          items: [
            "Caso de uso (onde o conteúdo aparece no seu produto)",
            "Formato de consumo (API, base licenciada, ou híbrido)",
            "Idiomas desejados",
            "Regras de experiência (duração, tom, categorias)"
          ]
        },
        trust: {
          title: "Confiabilidade",
          items: [
            "Conteúdo curado com apoio de validações automatizadas e revisão contínua.",
            "Nem todo conteúdo é 'fato' verificável; parte é contexto histórico e cultural.",
            "Canal para correções e revisão mediante feedback."
          ],
          link: "Reportar correção"
        },
        governance: {
          title: "Governança e conformidade",
          items: [
            "LGPD/GDPR: tratamento de dados conforme contrato e finalidade.",
            "Retenção: definimos prazos e escopo no acordo.",
            "Correções: canal dedicado para revisão e atualização.",
            "Direitos de uso: licença e limites documentados."
          ],
          link: "Solicitar DPA/termos"
        },
        sample: {
          title: "Exemplo de resposta (amostra)",
          disclaimer: "Estrutura ilustrativa (os campos podem variar por contrato).",
          summary: [
            "Metadados do POI",
            "Narrativa em texto",
            "Campos de atualização"
          ]
        },
        finalCta: {
          title: "Converse com nosso time",
          sub: "Conte seu caso de uso e o tipo de integração que você precisa.",
          qualifier: "Responda com seu caso de uso e formato de integração (API ou base).",
          button: "Falar com nosso time",
          secondary: "Ver como integrar"
        }
      },
      EN: {
        hero: {
          h1: "Cultural audio data to integrate into your experience.",
          sub: "Tuggi provides curated cultural descriptions and Point of Interest (POI) metadata for mobility, tourism, and education products — via data licensing or integration.",
          cta_primary: "Talk to our team",
          cta_secondary: "See how to integrate",
          email: "enterprise@tuggi.app"
        },
        icp: {
          title: "Who it is for",
          cards: [
            { title: "Mobility and transport apps", text: "Enrich journeys with cultural audio context." },
            { title: "Tourism operators", text: "Scalable content for routes and experiences." },
            { title: "Destinations (DMOs) and cultural entities", text: "Standardized narratives for territory activation." },
            { title: "Hotels and hospitality", text: "Local stories to improve the guest experience." },
            { title: "Formal and informal education", text: "Contextual content for real-world learning." }
          ]
        },
        deliverables: {
          title: "What we deliver",
          groupA: {
            title: "POI Data",
            items: [
              "Unique point ID + name + category",
              "Coordinates + coverage area (radius/polygon, where applicable)",
              "City/state/country + local context",
              "Tags by theme (history, architecture, culture, etc.)",
              "Update fields (review/update date)"
            ]
          },
          groupB: {
            title: "Narratives (text and/or audio)",
            items: [
              "Short description (30–60s) and long description (when applicable)",
              "Supported languages (as available)",
              "TTS-ready text or audio on demand"
            ]
          },
          groupC: {
            title: "Technical delivery",
            items: [
              "JSON/CSV export",
              "Query endpoint (API) by coordinate and/or ID",
              "Filters by language, theme, and radius"
            ]
          }
        },
        integrate: {
          title: "How to integrate",
          steps: [
            {
              title: "1. Input (what the client sends)",
              items: ["Coordinates (lat/lng) + radius OR Point ID", "Desired language", "Optional context (category, user profile)"]
            },
            {
              title: "2. Output (what the client receives)",
              items: ["POI metadata + narrative text", "Control fields (estimated duration, tags, update date)", "Internal references (IDs)"]
            },
            {
              title: "3. Operation (how it runs in production)",
              items: ["Content caching and versioning", "Periodic updates (agreed cadence)", "Test + production environment"]
            }
          ],
          note: "Integration via API or base licensing, as needed."
        },
        licensing: {
          title: "Licensing Models",
          cards: [
            { 
              title: "Territory license", 
              items: ["Content for an agreed set of cities/routes.", "Updates and expansion defined in the contract."] 
            },
            { 
              title: "Volume license", 
              items: ["By consumption (API queries / POIs / calls).", "Ideal for products with variable traffic."] 
            },
            { 
              title: "Custom project", 
              items: ["Curation and production for a specific theme/route.", "Delivery with joint validation and review."] 
            }
          ],
          note: "Support and SLA plans are defined in the contract."
        },
        requirements: {
          title: "What we need from you",
          items: [
            "Use case (where the content appears in your product)",
            "Consumption format (API, licensed base, or hybrid)",
            "Desired languages",
            "Experience rules (duration, tone, categories)"
          ]
        },
        trust: {
          title: "Reliability",
          items: [
            "Curated content supported by automated validation and continuous review.",
            "Not all content is a verifiable 'fact'; part is historical and cultural context.",
            "Channel for corrections and review through feedback."
          ],
          link: "Report correction"
        },
        governance: {
          title: "Governance and Compliance",
          items: [
            "LGPD/GDPR: data processing according to contract and purpose.",
            "Retention: we define timelines and scope in the agreement.",
            "Corrections: dedicated channel for review and updates.",
            "Usage rights: documented license and limits."
          ],
          link: "Request DPA/Terms"
        },
        sample: {
          title: "Response example (sample)",
          disclaimer: "Illustrative structure (fields may vary by contract).",
          summary: [
            "POI Metadata",
            "Text narrative",
            "Update fields"
          ]
        },
        finalCta: {
          title: "Talk to our team",
          sub: "Tell us about your use case and the type of integration you need.",
          qualifier: "Respond with your use case and integration format (API or base).",
          button: "Talk to our team",
          secondary: "See how to integrate"
        }
      },
      ES: {
        hero: {
          h1: "Datos culturales en audio para integrar en tu experiencia.",
          sub: "Tuggi proporciona descripciones culturales curadas y metadatos de puntos de interés (POIs) para productos de movilidad, turismo y educación — vía licencia de datos o integración.",
          cta_primary: "Hablar con nuestro equipo",
          cta_secondary: "Ver cómo integrar",
          email: "enterprise@tuggi.app"
        },
        icp: {
          title: "Para quién es",
          cards: [
            { title: "Apps de movilidad y transporte", text: "Enriquece trayectos con contexto cultural en audio." },
            { title: "Operadores de turismo y receptivos", text: "Contenido escalable para rutas y experiencias." },
            { title: "Destinos (DMOs) y entidades culturales", text: "Narrativas estandarizadas para la activación del territorio." },
            { title: "Hotelería y hospitalidad", text: "Historias locales para mejorar la experiencia del huésped." },
            { title: "Educación formal y no formal", text: "Contenido contextual para el aprendizaje en el mundo real." }
          ]
        },
        deliverables: {
          title: "Qué entregamos",
          groupA: {
            title: "Datos de POIs",
            items: [
              "ID único del punto + nombre + categoría",
              "Coordenadas + área de cobertura (radio/polígono, según corresponda)",
              "Ciudad/estado/país + contexto local",
              "Etiquetas por tema (historia, arquitectura, cultura, etc.)",
              "Campos de actualización (fecha de revisión/actualización)"
            ]
          },
          groupB: {
            title: "Narrativas (texto y/o audio)",
            items: [
              "Descripción corta (30–60s) y descripción larga (cuando corresponda)",
              "Idiomas soportados (según disponibilidad)",
              "Texto listo para TTS o audio bajo demanda"
            ]
          },
          groupC: {
            title: "Entrega técnica",
            items: [
              "Exportación en JSON/CSV",
              "Endpoint de consulta (API) por coordenada y/o ID",
              "Filtros por idioma, tema y radio"
            ]
          }
        },
        integrate: {
          title: "Cómo integrar",
          steps: [
            {
              title: "1. Entrada (lo que el cliente envía)",
              items: ["Coordenadas (lat/lng) + radio o ID del punto", "Idioma deseado", "Contexto opcional (categoría, perfil de usuario)"]
            },
            {
              title: "2. Salida (lo que el cliente recibe)",
              items: ["Metadatos del POI + texto de la narrativa", "Campos de control (duración estimada, etiquetas, fecha de actualización)", "Referencias internas (IDs)"]
            },
            {
              title: "3. Operación (cómo funciona en producción)",
              items: ["Caché y control de versiones de contenido", "Actualizaciones periódicas (cadencia acordada)", "Ambiente de prueba + producción"]
            }
          ],
          note: "Integración por API o licenciamiento de base, según sea necesario."
        },
        licensing: {
          title: "Modelos de licenciamiento",
          cards: [
            { 
              title: "Licencia por territorio", 
              items: ["Contenido para un conjunto de ciudades/rutas acordadas.", "Actualizaciones y expansión definidas en el contrato."] 
            },
            { 
              title: "Licencia por volumen", 
              items: ["Por consumo (consultas a la API / POIs / llamadas).", "Ideal para productos con variación de tráfico."] 
            },
            { 
              title: "Proyecto a medida", 
              items: ["Curaduría y producción para un tema/ruta específica.", "Entrega con validación y revisión conjunta."] 
            }
          ],
          note: "Los planes con soporte y SLA se definen en el contrato."
        },
        requirements: {
          title: "Lo que necesitamos de ti",
          items: [
            "Caso de uso (donde aparece el contenido en su producto)",
            "Formato de consumo (API, base licenciada o híbrido)",
            "Idiomas deseados",
            "Reglas de experiencia (duración, tono, categorías)"
          ]
        },
        trust: {
          title: "Confiabilidad",
          items: [
            "Contenido curado con apoyo de validaciones automatizadas y revisión continua.",
            "No todo el contenido es um 'hecho' verificable; parte es contexto histórico y cultural.",
            "Canal para correcciones y revisión mediante comentarios."
          ],
          link: "Reportar corrección"
        },
        governance: {
          title: "Gobernanza y Cumplimiento",
          items: [
            "LGPD/GDPR: procesamiento de datos de acuerdo con el contrato y propósito.",
            "Retención: definimos plazos y alcance en el acuerdo.",
            "Correcciones: canal dedicado para revisión y actualización.",
            "Derechos de uso: licencia y límites documentados."
          ],
          link: "Solicitar DPA/Términos"
        },
        sample: {
          title: "Ejemplo de respuesta (muestra)",
          disclaimer: "Estructura ilustrativa (los campos pueden variar por contrato).",
          summary: [
            "Metadados del POI",
            "Narrativa en texto",
            "Campos de actualización"
          ]
        },
        finalCta: {
          title: "Habla con nuestro equipo",
          sub: "Cuéntanos tu caso de uso y el tipo de integración que necesitas.",
          qualifier: "Responda con su caso de uso y formato de integración (API o base).",
          button: "Hablar con nuestro equipo",
          secondary: "Ver cómo integrar"
        }
      }
    };
    return content[language] || content['PT'];
  };

  const content = getLocalizedContent(currentLanguage);

  const handleCTAClick = (ctaType: string) => {
    onCTAClick?.(ctaType, currentLanguage);
  };

  const sampleApiResponse = {
    "version": "v1",
    "id": "poi_123",
    "title": "Teatro Municipal de São Paulo",
    "coords": { "lat": -23.545, "lng": -46.638 },
    "city": "São Paulo",
    "category": "Architecture & Culture",
    "coverage": { "trigger_radius_m": 120 },
    "languages_available": ["pt-BR", "en-US"],
    "narrative": {
      "pt-BR": "Inaugurado em 1911, o Teatro Municipal é um dos marcos da cidade...",
      "en-US": "Opened in 1911, the Municipal Theater is one of the city's landmarks..."
    },
    "license": { "type": "territory|volume|custom" },
    "review": { 
      "status": "curated", 
      "updated_at": "2025-08-10" 
    },
    "tags": ["historical", "landmark", "art-nouveau"]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* SECTION 1 — HERO */}
      <section className={`${layout.section.hero} bg-white border-b border-neutral-100`}>
        <div className={layout.container.base}>
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              {content.hero.h1}
            </h1>
            <p className="text-xl text-neutral-600 mb-10 leading-relaxed max-w-2xl">
              {content.hero.sub}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href={`mailto:${content.hero.email}?subject=Parceria%20B2B%20-%20Tuggi`}
                onClick={() => handleCTAClick('hero_primary')}
                className={getButtonClasses('primary', 'lg')}
              >
                {content.hero.cta_primary}
              </a>
              <button
                onClick={() => {
                  document.getElementById('integration')?.scrollIntoView({ behavior: 'smooth' });
                  handleCTAClick('hero_secondary');
                }}
                className="text-tuggi-primary font-bold hover:underline"
              >
                {content.hero.cta_secondary}
              </button>
            </div>
            <p className="mt-6 text-sm text-neutral-400 font-medium">
              {content.hero.email}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PARA QUEM É (ICP) */}
      <section className={layout.section.base}>
        <div className={layout.container.base}>
          <h2 className="text-3xl font-bold text-neutral-900 mb-12">{content.icp.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.icp.cards.map((card, idx) => (
              <div key={idx} className={`${getCardClasses()} p-8 flex flex-col h-full`}>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">{card.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — O QUE ENTREGAMOS (DELIVERABLES) */}
      <section className={`${layout.section.base} bg-neutral-50`}>
        <div className={layout.container.base}>
          <h2 className="text-3xl font-bold text-neutral-900 mb-12">{content.deliverables.title}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[content.deliverables.groupA, content.deliverables.groupB, content.deliverables.groupC].map((group, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-bold text-tuggi-primary mb-6">{group.title}</h3>
                <ul className="space-y-4">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-tuggi-primary flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — COMO INTEGRAR (TECH FLOW) */}
      <section id="integration" className={layout.section.base}>
        <div className={layout.container.base}>
          <h2 className="text-3xl font-bold text-neutral-900 mb-12">{content.integrate.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {content.integrate.steps.map((step, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-bold text-neutral-900 mb-6">{step.title}</h3>
                <ul className="space-y-3">
                  {step.items.map((item, i) => (
                    <li key={i} className="text-neutral-600 flex items-start gap-2">
                      <span className="text-tuggi-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="p-4 bg-tuggi-primary/5 border border-tuggi-primary/10 rounded-lg text-tuggi-primary font-medium inline-block text-sm">
            {content.integrate.note}
          </p>
        </div>
      </section>

      {/* SECTION 4.1 — O QUE PRECISAMOS DE VOCÊ */}
      <section className={`${layout.section.base} bg-neutral-50`}>
        <div className={layout.container.base}>
          <h2 className="text-3xl font-bold text-neutral-900 mb-12">{content.requirements.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.requirements.items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-tuggi-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-tuggi-primary rounded-full"></div>
                </div>
                <span className="text-lg text-neutral-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — MODELOS COMERCIAIS */}
      <section className={`${layout.section.base} bg-white`}>
        <div className={layout.container.base}>
          <h2 className="text-3xl font-bold text-neutral-900 mb-12">{content.licensing.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {content.licensing.cards.map((card, idx) => (
              <div key={idx} className={`${getCardClasses()} p-8 border border-neutral-200`}>
                <h3 className="text-xl font-bold text-neutral-900 mb-6">{card.title}</h3>
                <ul className="space-y-3">
                  {card.items.map((item, i) => (
                    <li key={i} className="text-neutral-600 flex items-start gap-2 text-sm">
                      <span className="text-tuggi-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm text-neutral-400 font-medium">{content.licensing.note}</p>
        </div>
      </section>

      {/* SECTION 6 — CONFIABILIDADE E LIMITES */}
      <section className={layout.section.base}>
        <div className={layout.container.narrow}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8">{content.trust.title}</h2>
            <div className="text-left space-y-6">
              {content.trust.items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-tuggi-primary flex-shrink-0" />
                  <p className="text-lg text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <a 
                href={`/pt/contact`} 
                className="text-tuggi-primary font-bold hover:underline inline-flex items-center gap-2"
              >
                {content.trust.link}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6.1 — GOVERNANÇA E CONFORMIDADE */}
      <section className={`${layout.section.base} bg-neutral-50`}>
        <div className={layout.container.base}>
          <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">{content.governance.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {content.governance.items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-tuggi-primary flex-shrink-0" />
                <p className="text-neutral-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a 
              href={`mailto:enterprise@tuggi.app?subject=DPA%20e%20Termos%20-%20Tuggi`}
              className="text-tuggi-primary font-bold hover:underline inline-flex items-center gap-2"
            >
              {content.governance.link}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 7 — EXEMPLO DE RESPOSTA */}
      <section className={layout.section.base}>
        <div className={layout.container.base}>
          <h2 className="text-3xl font-bold text-neutral-900 mb-2">{content.sample.title}</h2>
          <p className="text-sm text-neutral-400 mb-8 font-medium">{content.sample.disclaimer}</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <ul className="space-y-4">
                {content.sample.summary.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-tuggi-primary" />
                    <span className="text-neutral-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-neutral-900 rounded-2xl p-8 overflow-x-auto shadow-2xl">
              <pre className="text-blue-300 text-sm font-mono leading-relaxed">
                {JSON.stringify(sampleApiResponse, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — CTA FINAL */}
      <section className={`${layout.section.base} border-t border-neutral-100`}>
        <div className={layout.container.base}>
          <div className="bg-tuggi-primary rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{content.finalCta.title}</h2>
            <p className="text-xl text-white/90 mb-2 max-w-2xl mx-auto">
              {content.finalCta.sub}
            </p>
            <p className="text-sm text-white/70 mb-10 italic">
              {content.finalCta.qualifier}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href={`mailto:${content.hero.email}?subject=Parceria%20B2B%20%E2%80%94%20Tuggi`}
                className="bg-white text-tuggi-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-neutral-50 transition-colors shadow-xl"
              >
                {content.finalCta.button}
              </a>
              <button 
                onClick={() => document.getElementById('integration')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-bold text-white hover:underline"
              >
                {content.finalCta.secondary}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessPage;