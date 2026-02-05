import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Users, 
  BarChart3, 
  Shield, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Play,
  Download,
  AlertCircle,
  Globe,
  Landmark,
  Calendar,
  Lock,
  Server,
  TrendingUp,
  Route,
  Megaphone
} from 'lucide-react';

// ============================================================================
// TYPES
// ============================================================================

interface ContentLanguage {
  hero: {
    headline: string;
    subheadline: string;
    bullets: string[];
    ctaPrimary: string;
    ctaSecondary: string;
  };
  silentTerritory: {
    title: string;
    intro: string;
    problems: string[];
  };
  whatIsTuggi: {
    title: string;
    oneLiner: string;
    paragraph: string;
    diagram: {
      city: string;
      platform: string;
      citizens: string;
    };
  };
  publicValue: {
    title: string;
    subtitle: string;
    pillars: {
      title: string;
      bullets: string[];
      indicator: string;
    }[];
  };
  evidence: {
    title: string;
    subtitle: string;
    videoLabel: string;
    appScreensLabel: string;
    cmsScreensLabel: string;
    reportLabel: string;
  };
  operations: {
    title: string;
    subtitle: string;
    municipalityTitle: string;
    municipalityItems: string[];
    tuggiTitle: string;
    tuggiItems: string[];
    lifecycleTitle: string;
    lifecycleSteps: string[];
  };
  implementation: {
    title: string;
    subtitle: string;
    phases: {
      title: string;
      duration: string;
      items: string[];
    }[];
    timeToValue: {
      title: string;
      description: string;
    };
  };
  governance: {
    title: string;
    subtitle: string;
    items: {
      icon: string;
      title: string;
      description: string;
    }[];
    procurementNote: string;
  };
  whyNow: {
    title: string;
    points: string[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    duration: string;
    includes: string[];
    button: string;
    contact: string;
    qrLabel: string;
  };
  nav: {
    value: string;
    proof: string;
    implementation: string;
    governance: string;
    contact: string;
  };
}

interface GovPageProps {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, position: string) => void;
}

// ============================================================================
// CONTENT
// ============================================================================

const getLocalizedContent = (language: string): ContentLanguage => {
  const content: Record<string, ContentLanguage> = {
    'EN': {
      hero: {
        headline: 'Smart Tourism Infrastructure for Municipalities',
        subheadline: 'Turn mobility into cultural intelligence — with full municipal governance of the narrative.',
        bullets: [
          'White-label official audio layer for the territory',
          'Municipal editorial control (City OS / CMS)',
          'Measurable outcomes: engagement, dispersion, insights'
        ],
        ctaPrimary: 'Schedule a Technical Presentation',
        ctaSecondary: 'Download Executive Summary (PDF)'
      },
      silentTerritory: {
        title: 'The Silent Territory',
        intro: 'Every day, thousands move through your municipality without cultural context:',
        problems: [
          'Daily flows without cultural context or local identity',
          'Lost opportunity for heritage education and visitor dispersion',
          'Dependence on external content without municipal governance'
        ]
      },
      whatIsTuggi: {
        title: 'What Tuggi Is',
        oneLiner: 'A municipal digital infrastructure layer for official, geo-located audio narratives.',
        paragraph: 'Tuggi is infrastructure, not a campaign. Not a generic tourism app. It\'s an official municipal asset that transforms every commute and journey into an opportunity for heritage education and civic connection.',
        diagram: {
          city: 'City Council',
          platform: 'Tuggi City OS',
          citizens: 'Citizens & Visitors'
        }
      },
      publicValue: {
        title: 'Public Value Delivered',
        subtitle: 'Four pillars of measurable municipal impact',
        pillars: [
          {
            title: 'Civic Pride & Heritage Education',
            bullets: [
              'Reduce "resident blindness" to local heritage',
              'Informal education during daily mobility',
              'Citizens become heritage ambassadors'
            ],
            indicator: 'Indicators: plays per zone, retention rate, top narratives'
          },
          {
            title: 'Narrative Sovereignty (Governance)',
            bullets: [
              'Full municipal editorial control',
              'Historical accuracy guaranteed',
              'Official multilingual versions'
            ],
            indicator: 'Indicators: publication logs, editorial trail, language versions'
          },
          {
            title: 'Territorial Cohesion & Flow Management',
            bullets: [
              'Dispersion to parishes and secondary POIs',
              'Reduce pressure on historic center',
              'Distribute tourist spending geographically'
            ],
            indicator: 'Indicators: heatmaps, visits per cluster, routes consumed'
          },
          {
            title: 'Civic Communication & Public Utility',
            bullets: [
              'Institutional audio channel (agenda, alerts)',
              'Contextual communication by zone',
              'Direct reach during transit'
            ],
            indicator: 'Indicators: reach by area, time window analytics'
          }
        ]
      },
      evidence: {
        title: 'Evidence That It Works',
        subtitle: 'Real product, real results — see for yourself',
        videoLabel: 'Product Demo (60s)',
        appScreensLabel: 'App Screenshots',
        cmsScreensLabel: 'CMS / City OS',
        reportLabel: 'Sample Monthly Report'
      },
      operations: {
        title: 'How the City Operates It',
        subtitle: 'Clear roles, minimal municipal overhead',
        municipalityTitle: 'Municipality',
        municipalityItems: [
          'Historical validation and institutional tone',
          'Priority zone definition (center, parishes, corridors)',
          'Editorial calendar approval'
        ],
        tuggiTitle: 'Tuggi',
        tuggiItems: [
          'Technical setup, POI ingestion, white-label configuration',
          'Narrative playbook and quality standards',
          'Operation + reports + seasonal updates'
        ],
        lifecycleTitle: 'Content Lifecycle',
        lifecycleSteps: ['Draft', 'Review', 'Publish', 'Measure', 'Improve']
      },
      implementation: {
        title: 'Implementation Model',
        subtitle: 'Low-risk, phased approach',
        phases: [
          {
            title: 'Phase 1: Setup & Digitization',
            duration: 'Months 1–2',
            items: [
              'POI inventory and curation',
              'White-label configuration',
              'Baseline analytics + first publication'
            ]
          },
          {
            title: 'Phase 2: Operation & Intelligence',
            duration: 'Months 3–12',
            items: [
              'Monthly operation',
              'Reports + seasonal adjustments',
              'Coverage expansion (parishes / routes)'
            ]
          }
        ],
        timeToValue: {
          title: 'Time-to-Value',
          description: 'Working product live within 60 days. Measurable engagement from day one of operation.'
        }
      },
      governance: {
        title: 'Data, Governance & Compliance',
        subtitle: 'Built for public sector requirements',
        items: [
          {
            icon: 'minimize',
            title: 'Data Minimization',
            description: 'Only essential data collected for service operation'
          },
          {
            icon: 'privacy',
            title: 'Privacy by Design',
            description: 'Anonymization and user controls built-in'
          },
          {
            icon: 'security',
            title: 'Security & Audit',
            description: 'CMS access control, full audit trail'
          },
          {
            icon: 'hosting',
            title: 'EU Hosting',
            description: 'Content and logs hosted in EU-compliant infrastructure'
          }
        ],
        procurementNote: 'Procurement-ready documentation and SLA terms available upon request.'
      },
      whyNow: {
        title: 'Why Now',
        points: [
          'Ready before next peak tourism season',
          'Reusable infrastructure for events and campaigns',
          'Political continuity: becomes a municipal asset across mandates'
        ]
      },
      finalCta: {
        title: 'Schedule a Technical Presentation',
        subtitle: 'See the platform in action and discuss implementation for your municipality.',
        duration: 'Duration: 30–45 minutes',
        includes: [
          'Live app demonstration',
          'CMS / City OS walkthrough',
          'Sample analytics report',
          'Implementation roadmap'
        ],
        button: 'Schedule Presentation',
        contact: 'Or contact directly:',
        qrLabel: 'Scan for this page'
      },
      nav: {
        value: 'Value',
        proof: 'Proof',
        implementation: 'Implementation',
        governance: 'Governance',
        contact: 'Contact'
      }
    },
    'PT': {
      hero: {
        headline: 'Infraestrutura Oficial de Turismo Inteligente',
        subheadline: 'Transformar mobilidade em inteligência cultural — com governança editorial municipal.',
        bullets: [
          'Camada White Label de áudio oficial para o território',
          'Controlo editorial municipal (City OS / CMS)',
          'Resultados mensuráveis: engagement, dispersão, insights'
        ],
        ctaPrimary: 'Agendar Apresentação Técnica',
        ctaSecondary: 'Descarregar Resumo Executivo (PDF)'
      },
      silentTerritory: {
        title: 'O Território Silencioso',
        intro: 'Todos os dias, milhares atravessam o seu município sem contexto cultural:',
        problems: [
          'Fluxos diários sem contexto cultural ou identidade local',
          'Oportunidade perdida de educação patrimonial e dispersão de visitantes',
          'Dependência de conteúdos externos sem governança municipal'
        ]
      },
      whatIsTuggi: {
        title: 'O que é a Tuggi',
        oneLiner: 'Uma camada de infraestrutura digital municipal para narrativas áudio oficiais e geolocalizadas.',
        paragraph: 'A Tuggi é infraestrutura, não uma campanha. Não é uma app de turismo genérica. É um ativo municipal oficial que transforma cada deslocação e viagem numa oportunidade de educação patrimonial e conexão cívica.',
        diagram: {
          city: 'Câmara Municipal',
          platform: 'Tuggi City OS',
          citizens: 'Cidadãos e Visitantes'
        }
      },
      publicValue: {
        title: 'Valor Público Entregue',
        subtitle: 'Quatro pilares de impacto municipal mensurável',
        pillars: [
          {
            title: 'Orgulho Cívico e Educação Patrimonial',
            bullets: [
              'Reduzir a "cegueira do residente" ao património local',
              'Educação informal durante a mobilidade diária',
              'Munícipes tornam-se embaixadores do património'
            ],
            indicator: 'Indicadores: plays por zona, taxa de retenção, narrativas mais ouvidas'
          },
          {
            title: 'Soberania Narrativa (Governança)',
            bullets: [
              'Controlo editorial municipal total',
              'Rigor histórico garantido',
              'Versões multilingues oficiais'
            ],
            indicator: 'Indicadores: logs de publicação, trilha editorial, versões por idioma'
          },
          {
            title: 'Coesão Territorial e Gestão de Fluxos',
            bullets: [
              'Dispersão para freguesias e POIs secundários',
              'Reduzir pressão sobre o centro histórico',
              'Distribuir gasto turístico geograficamente'
            ],
            indicator: 'Indicadores: mapas de calor, visitas por cluster, rotas consumidas'
          },
          {
            title: 'Comunicação Cívica e Utilidade Pública',
            bullets: [
              'Canal institucional em áudio (agenda, alertas)',
              'Comunicação contextual por zona',
              'Alcance direto durante o trânsito'
            ],
            indicator: 'Indicadores: alcance por área, janela temporal de analytics'
          }
        ]
      },
      evidence: {
        title: 'Evidência de que Funciona',
        subtitle: 'Produto real, resultados reais — veja você mesmo',
        videoLabel: 'Demo do Produto (60s)',
        appScreensLabel: 'Screenshots da App',
        cmsScreensLabel: 'CMS / City OS',
        reportLabel: 'Relatório Mensal de Exemplo'
      },
      operations: {
        title: 'Como a Câmara Opera',
        subtitle: 'Papéis claros, overhead municipal mínimo',
        municipalityTitle: 'Município',
        municipalityItems: [
          'Validação histórica e tom institucional',
          'Definição de zonas prioritárias (centro, freguesias, corredores)',
          'Aprovação do calendário editorial'
        ],
        tuggiTitle: 'Tuggi',
        tuggiItems: [
          'Setup técnico, ingestão de POIs, configuração white label',
          'Playbook de narrativa e padrões de qualidade',
          'Operação + relatórios + atualizações sazonais'
        ],
        lifecycleTitle: 'Ciclo de Vida do Conteúdo',
        lifecycleSteps: ['Rascunho', 'Revisão', 'Publicar', 'Medir', 'Melhorar']
      },
      implementation: {
        title: 'Modelo de Implementação',
        subtitle: 'Abordagem faseada e de baixo risco',
        phases: [
          {
            title: 'Fase 1: Setup e Digitalização',
            duration: 'Meses 1–2',
            items: [
              'Inventário e curadoria de POIs',
              'Configuração white label',
              'Analytics baseline + primeira publicação'
            ]
          },
          {
            title: 'Fase 2: Operação e Inteligência',
            duration: 'Meses 3–12',
            items: [
              'Operação mensal',
              'Relatórios + ajustes sazonais',
              'Expansão de cobertura (freguesias / rotas)'
            ]
          }
        ],
        timeToValue: {
          title: 'Time-to-Value',
          description: 'Produto funcional em 60 dias. Engagement mensurável desde o primeiro dia de operação.'
        }
      },
      governance: {
        title: 'Dados, Governança e Conformidade',
        subtitle: 'Construído para requisitos do setor público',
        items: [
          {
            icon: 'minimize',
            title: 'Minimização de Dados',
            description: 'Apenas dados essenciais recolhidos para operação do serviço'
          },
          {
            icon: 'privacy',
            title: 'Privacidade por Desenho',
            description: 'Anonimização e controlos do utilizador integrados'
          },
          {
            icon: 'security',
            title: 'Segurança e Auditoria',
            description: 'Controlo de acesso ao CMS, trilha de auditoria completa'
          },
          {
            icon: 'hosting',
            title: 'Alojamento UE',
            description: 'Conteúdos e logs alojados em infraestrutura conforme UE'
          }
        ],
        procurementNote: 'Documentação pronta para contratação pública e termos de SLA disponíveis mediante pedido.'
      },
      whyNow: {
        title: 'Porquê Agora',
        points: [
          'Pronto antes da próxima época alta de turismo',
          'Infraestrutura reutilizável para eventos e campanhas',
          'Continuidade política: torna-se ativo municipal entre mandatos'
        ]
      },
      finalCta: {
        title: 'Agendar Apresentação Técnica',
        subtitle: 'Veja a plataforma em ação e discuta a implementação para o seu município.',
        duration: 'Duração: 30–45 minutos',
        includes: [
          'Demonstração da app ao vivo',
          'Demonstração do CMS / City OS',
          'Relatório de analytics de exemplo',
          'Roadmap de implementação'
        ],
        button: 'Agendar Apresentação',
        contact: 'Ou contacte diretamente:',
        qrLabel: 'Scan para esta página'
      },
      nav: {
        value: 'Valor',
        proof: 'Prova',
        implementation: 'Implementação',
        governance: 'Governança',
        contact: 'Contacto'
      }
    },
    'ES': {
      hero: {
        headline: 'Infraestructura Oficial de Turismo Inteligente',
        subheadline: 'Convierta la movilidad en inteligencia cultural — con gobernanza editorial municipal completa.',
        bullets: [
          'Capa de audio oficial marca blanca para el territorio',
          'Control editorial municipal (City OS / CMS)',
          'Resultados medibles: engagement, dispersión, insights'
        ],
        ctaPrimary: 'Programar Presentación Técnica',
        ctaSecondary: 'Descargar Resumen Ejecutivo (PDF)'
      },
      silentTerritory: {
        title: 'El Territorio Silencioso',
        intro: 'Cada día, miles atraviesan su municipio sin contexto cultural:',
        problems: [
          'Flujos diarios sin contexto cultural o identidad local',
          'Oportunidad perdida de educación patrimonial y dispersión de visitantes',
          'Dependencia de contenido externo sin gobernanza municipal'
        ]
      },
      whatIsTuggi: {
        title: 'Qué es Tuggi',
        oneLiner: 'Una capa de infraestructura digital municipal para narrativas de audio oficiales y geolocalizadas.',
        paragraph: 'Tuggi es infraestructura, no una campaña. No es una app de turismo genérica. Es un activo municipal oficial que transforma cada viaje en una oportunidad de educación patrimonial y conexión cívica.',
        diagram: {
          city: 'Ayuntamiento',
          platform: 'Tuggi City OS',
          citizens: 'Ciudadanos y Visitantes'
        }
      },
      publicValue: {
        title: 'Valor Público Entregado',
        subtitle: 'Cuatro pilares de impacto municipal medible',
        pillars: [
          {
            title: 'Orgullo Cívico y Educación Patrimonial',
            bullets: [
              'Reducir la "ceguera del residente" ante el patrimonio local',
              'Educación informal durante la movilidad diaria',
              'Los ciudadanos se convierten en embajadores del patrimonio'
            ],
            indicator: 'Indicadores: reproducciones por zona, tasa de retención, narrativas top'
          },
          {
            title: 'Soberanía Narrativa (Gobernanza)',
            bullets: [
              'Control editorial municipal total',
              'Rigor histórico garantizado',
              'Versiones multilingües oficiales'
            ],
            indicator: 'Indicadores: registros de publicación, rastro editorial, versiones por idioma'
          },
          {
            title: 'Cohesión Territorial y Gestión de Flujos',
            bullets: [
              'Dispersión a parroquias y POIs secundarios',
              'Reducir presión sobre el centro histórico',
              'Distribuir gasto turístico geográficamente'
            ],
            indicator: 'Indicadores: mapas de calor, visitas por clúster, rutas consumidas'
          },
          {
            title: 'Comunicación Cívica y Utilidad Pública',
            bullets: [
              'Canal de audio institucional (agenda, alertas)',
              'Comunicación contextual por zona',
              'Alcance directo durante el tránsito'
            ],
            indicator: 'Indicadores: alcance por área, analítica por franja horaria'
          }
        ]
      },
      evidence: {
        title: 'Evidencia de que Funciona',
        subtitle: 'Producto real, resultados reales — véalo usted mismo',
        videoLabel: 'Demo del Producto (60s)',
        appScreensLabel: 'Capturas de la App',
        cmsScreensLabel: 'CMS / City OS',
        reportLabel: 'Informe Mensual de Ejemplo'
      },
      operations: {
        title: 'Cómo lo Opera la Ciudad',
        subtitle: 'Roles claros, gastos generales municipales mínimos',
        municipalityTitle: 'Municipio',
        municipalityItems: [
          'Validación histórica y tono institucional',
          'Definición de zonas prioritarias (centro, barrios, corredores)',
          'Aprobación del calendario editorial'
        ],
        tuggiTitle: 'Tuggi',
        tuggiItems: [
          'Configuración técnica, ingesta de POIs, configuración marca blanca',
          'Playbook de narrativa y estándares de calidad',
          'Operación + informes + actualizaciones estacionales'
        ],
        lifecycleTitle: 'Ciclo de Vida del Contenido',
        lifecycleSteps: ['Borrador', 'Revisión', 'Publicar', 'Medir', 'Mejorar']
      },
      implementation: {
        title: 'Modelo de Implementación',
        subtitle: 'Enfoque por fases y de bajo riesgo',
        phases: [
          {
            title: 'Fase 1: Configuración y Digitalización',
            duration: 'Meses 1–2',
            items: [
              'Inventario y curación de POIs',
              'Configuración marca blanca',
              'Analítica base + primera publicación'
            ]
          },
          {
            title: 'Fase 2: Operación e Inteligencia',
            duration: 'Meses 3–12',
            items: [
              'Operación mensual',
              'Informes + ajustes estacionales',
              'Expansión de cobertura (barrios / rutas)'
            ]
          }
        ],
        timeToValue: {
          title: 'Tiempo de Valor',
          description: 'Producto funcional en 60 días. Engagement medible desde el primer día de operación.'
        }
      },
      governance: {
        title: 'Datos, Gobernanza y Cumplimiento',
        subtitle: 'Construido para requisitos del sector público',
        items: [
          {
            icon: 'minimize',
            title: 'Minimización de Datos',
            description: 'Solo datos esenciales recolectados para la operación del servicio'
          },
          {
            icon: 'privacy',
            title: 'Privacidad por Diseño',
            description: 'Anonimización y controles de usuario integrados'
          },
          {
            icon: 'security',
            title: 'Seguridad y Auditoría',
            description: 'Control de acceso al CMS, rastro de auditoría completo'
          },
          {
            icon: 'hosting',
            title: 'Alojamiento UE',
            description: 'Contenidos y registros alojados en infraestructura conforme a la UE'
          }
        ],
        procurementNote: 'Documentación lista para contratación y términos SLA disponibles bajo petición.'
      },
      whyNow: {
        title: 'Por Qué Ahora',
        points: [
          'Listo antes de la próxima temporada alta de turismo',
          'Infraestructura reutilizable para eventos y campañas',
          'Continuidad política: se convierte en activo municipal entre mandatos'
        ]
      },
      finalCta: {
        title: 'Programar Presentación Técnica',
        subtitle: 'Vea la plataforma en acción y discuta la implementación para su municipio.',
        duration: 'Duración: 30–45 minutos',
        includes: [
          'Demostración de la app en vivo',
          'Recorrido por CMS / City OS',
          'Informe de analítica de ejemplo',
          'Hoja de ruta de implementación'
        ],
        button: 'Programar Presentación',
        contact: 'O contacte directamente:',
        qrLabel: 'Escanear para esta página'
      },
      nav: {
        value: 'Valor',
        proof: 'Prueba',
        implementation: 'Implementación',
        governance: 'Gobernanza',
        contact: 'Contacto'
      }
    },
    'FR': {
      hero: {
        headline: 'Infrastructure Touristique Intelligente',
        subheadline: 'Transformez la mobilité en intelligence culturelle — avec une gouvernance municipale totale.',
        bullets: [
          'Couche audio officielle marque blanche pour le territoire',
          'Contrôle éditorial municipal (City OS / CMS)',
          'Résultats mesurables : engagement, dispersion, insights'
        ],
        ctaPrimary: 'Planifier une Présentation Technique',
        ctaSecondary: 'Télécharger le Résumé Exécutif (PDF)'
      },
      silentTerritory: {
        title: 'Le Territoire Silencieux',
        intro: 'Chaque jour, des milliers traversent votre municipalité sans contexte culturel :',
        problems: [
          'Flux quotidiens sans contexte culturel ou identité locale',
          'Occasion manquée d\'éducation patrimoniale et de dispersion des visiteurs',
          'Dépendance au contenu externe sans gouvernance municipale'
        ]
      },
      whatIsTuggi: {
        title: 'Qu\'est-ce que Tuggi',
        oneLiner: 'Une infrastructure numérique municipale pour des récits audio officiels et géolocalisés.',
        paragraph: 'Tuggi est une infrastructure, pas une campagne. Pas une application touristique générique. C\'est un actif municipal officiel qui transforme chaque trajet en opportunité d\'éducation patrimoniale et de connexion civique.',
        diagram: {
          city: 'Mairie',
          platform: 'Tuggi City OS',
          citizens: 'Citoyens et Visiteurs'
        }
      },
      publicValue: {
        title: 'Valeur Publique Délivrée',
        subtitle: 'Quatre piliers d\'impact municipal mesurable',
        pillars: [
          {
            title: 'Fierté Civique & Éducation Patrimoniale',
            bullets: [
              'Réduire la "cécité du résident" envers le patrimoine local',
              'Éducation informelle durant la mobilité quotidienne',
              'Les citoyens deviennent ambassadeurs du patrimoine'
            ],
            indicator: 'Indicateurs : écoutes par zone, taux de rétention, top récits'
          },
          {
            title: 'Souveraineté Narrative (Gouvernance)',
            bullets: [
              'Contrôle éditorial municipal total',
              'Rigueur historique garantie',
              'Versions multilingues officielles'
            ],
            indicator: 'Indicateurs : journaux de publication, traçabilité, versions linguistiques'
          },
          {
            title: 'Cohésion Territoriale & Gestion des Flux',
            bullets: [
              'Dispersion vers les quartiers et POI secondaires',
              'Réduire la pression sur le centre historique',
              'Distribuer les dépenses touristiques géographiquement'
            ],
            indicator: 'Indicateurs : cartes thermiques, visites par cluster, itinéraires'
          },
          {
            title: 'Communication Civique & Utilité Publique',
            bullets: [
              'Canal audio institutionnel (agenda, alertes)',
              'Communication contextuelle par zone',
              'Portée directe durant le transit'
            ],
            indicator: 'Indicateurs : portée par zone, analytique temporelle'
          }
        ]
      },
      evidence: {
        title: 'Preuve que ça Marche',
        subtitle: 'Produit réel, résultats réels — voyez par vous-même',
        videoLabel: 'Démo Produit (60s)',
        appScreensLabel: 'Captures d\'écran App',
        cmsScreensLabel: 'CMS / City OS',
        reportLabel: 'Exemple de Rapport Mensuel'
      },
      operations: {
        title: 'Comment la Ville l\'Opère',
        subtitle: 'Rôles clairs, charge municipale minimale',
        municipalityTitle: 'Municipalité',
        municipalityItems: [
          'Validation historique et ton institutionnel',
          'Définition des zones prioritaires (centro, quartiers, corridors)',
          'Approbation du calendrier éditorial'
        ],
        tuggiTitle: 'Tuggi',
        tuggiItems: [
          'Configuration technique, ingestion POI, configuration marque blanche',
          'Playbook narratif et standards de qualité',
          'Opération + rapports + mises à jour saisonnières'
        ],
        lifecycleTitle: 'Cycle de Vie du Contenu',
        lifecycleSteps: ['Brouillon', 'Révision', 'Publier', 'Mesurer', 'Améliorer']
      },
      implementation: {
        title: 'Modèle d\'Implémentation',
        subtitle: 'Approche par phases et à faible risque',
        phases: [
          {
            title: 'Phase 1 : Configuration & Digitalisation',
            duration: 'Mois 1–2',
            items: [
              'Inventaire et curation des POI',
              'Configuration marque blanche',
              'Analytique de base + première publication'
            ]
          },
          {
            title: 'Phase 2 : Opération & Intelligence',
            duration: 'Mois 3–12',
            items: [
              'Opération mensuelle',
              'Rapports + ajustements saisonniers',
              'Expansion de la couverture (quartiers / itinéraires)'
            ]
          }
        ],
        timeToValue: {
          title: 'Temps de Valorisation',
          description: 'Produit fonctionnel en 60 jours. Engagement mesurable dès le premier jour d\'opération.'
        }
      },
      governance: {
        title: 'Données, Gouvernance & Conformité',
        subtitle: 'Conçu pour les exigences du secteur public',
        items: [
          {
            icon: 'minimize',
            title: 'Minimisation des Données',
            description: 'Seules les données essentielles collectées pour l\'opération'
          },
          {
            icon: 'privacy',
            title: 'Confidentialité par Conception',
            description: 'Anonymisation et contrôles utilisateur intégrés'
          },
          {
            icon: 'security',
            title: 'Sécurité & Audit',
            description: 'Contrôle d\'accès CMS, piste d\'audit complète'
          },
          {
            icon: 'hosting',
            title: 'Hébergement UE',
            description: 'Contenus et journaux hébergés sur infrastructure conforme UE'
          }
        ],
        procurementNote: 'Documentation prête pour marché public et termes SLA disponibles sur demande.'
      },
      whyNow: {
        title: 'Pourquoi Maintenant',
        points: [
          'Prêt avant la prochaine haute saison touristique',
          'Infrastructure réutilisable pour événements et campagnes',
          'Continuité politique : devient un actif municipal entre mandats'
        ]
      },
      finalCta: {
        title: 'Planifier une Présentation Technique',
        subtitle: 'Voyez la plateforme en action et discutez de l\'implémentation pour votre municipalité.',
        duration: 'Durée : 30–45 minutes',
        includes: [
          'Démonstration de l\'app en direct',
          'Visite guidée CMS / City OS',
          'Exemple de rapport analytique',
          'Feuille de route d\'implémentation'
        ],
        button: 'Planifier Présentation',
        contact: 'Ou contactez directement :',
        qrLabel: 'Scanner pour cette page'
      },
      nav: {
        value: 'Valeur',
        proof: 'Preuve',
        implementation: 'Implémentation',
        governance: 'Gouvernance',
        contact: 'Contact'
      }
    },
    'DE': {
      hero: {
        headline: 'Smarte Tourismus-Infrastruktur',
        subheadline: 'Verwandeln Sie Mobilität in kulturelle Intelligenz — mit voller kommunaler Governance.',
        bullets: [
          'Offizielle White-Label-Audioebene für das Gebiet',
          'Kommunale redaktionelle Kontrolle (City OS / CMS)',
          'Messbare Ergebnisse: Engagement, Verteilung, Insights'
        ],
        ctaPrimary: 'Technische Präsentation vereinbaren',
        ctaSecondary: 'Executive Summary herunterladen (PDF)'
      },
      silentTerritory: {
        title: 'Das Stille Territorium',
        intro: 'Täglich durchqueren Tausende Ihre Gemeinde ohne kulturellen Kontext:',
        problems: [
          'Tägliche Ströme ohne kulturellen Kontext oder lokale Identität',
          'Verpasste Chance zur Kulturerbe-Bildung und Besucherverteilung',
          'Abhängigkeit von externen Inhalten ohne kommunale Kontrolle'
        ]
      },
      whatIsTuggi: {
        title: 'Was Tuggi ist',
        oneLiner: 'Eine kommunale digitale Infrastrukturebene für offizielle, geolokalisierte Audio-Narrative.',
        paragraph: 'Tuggi ist Infrastruktur, keine Kampagne. Keine generische Tourismus-App. Es ist ein offizieller kommunaler Vermögenswert, der jede Fahrt in eine Gelegenheit für Bildung und bürgerschaftliche Verbindung verwandelt.',
        diagram: {
          city: 'Stadtverwaltung',
          platform: 'Tuggi City OS',
          citizens: 'Bürger & Besucher'
        }
      },
      publicValue: {
        title: 'Gelieferter Öffentlicher Wert',
        subtitle: 'Vier Säulen messbarer kommunaler Wirkung',
        pillars: [
          {
            title: 'Bürgerstolz & Kulturerbe-Bildung',
            bullets: [
              'Reduzierung der "Bewohner-Blindheit" gegenüber lokalem Erbe',
              'Informelle Bildung während der täglichen Mobilität',
              'Bürger werden zu Botschaftern des Erbes'
            ],
            indicator: 'Indikatoren: Abspielungen pro Zone, Bindungsrate, Top-Narrative'
          },
          {
            title: 'Narrative Souveränität (Governance)',
            bullets: [
              'Volle kommunale redaktionelle Kontrolle',
              'Historische Genauigkeit garantiert',
              'Offizielle mehrsprachige Versionen'
            ],
            indicator: 'Indikatoren: Veröffentlichungsprotokolle, redaktioneller Pfad, Sprachversionen'
          },
          {
            title: 'Territorialer Zusammenhalt & Flussmanagement',
            bullets: [
              'Verteilung auf Stadtteile und sekundäre POIs',
              'Druck auf das historische Zentrum reduzieren',
              'Touristische Ausgaben geografisch verteilen'
            ],
            indicator: 'Indikatoren: Heatmaps, Besuche pro Cluster, konsumierte Routen'
          },
          {
            title: 'Bürgerkommunikation & Öffentlicher Nutzen',
            bullets: [
              'Institutioneller Audiokanal (Agenda, Warnungen)',
              'Kontextbezogene Kommunikation nach Zone',
              'Direkte Reichweite während des Transits'
            ],
            indicator: 'Indikatoren: Reichweite nach Gebiet, Zeitfenster-Analytik'
          }
        ]
      },
      evidence: {
        title: 'Beweis, dass es funktioniert',
        subtitle: 'Echtes Produkt, echte Ergebnisse — sehen Sie selbst',
        videoLabel: 'Produkt-Demo (60s)',
        appScreensLabel: 'App-Screenshots',
        cmsScreensLabel: 'CMS / City OS',
        reportLabel: 'Beispiel Monatsbericht'
      },
      operations: {
        title: 'Wie die Stadt es betreibt',
        subtitle: 'Klare Rollen, minimaler kommunaler Aufwand',
        municipalityTitle: 'Gemeinde',
        municipalityItems: [
          'Historische Validierung und institutioneller Ton',
          'Definition von Prioritätszonen (Zentrum, Viertel, Korridore)',
          'Genehmigung des Redaktionskalenders'
        ],
        tuggiTitle: 'Tuggi',
        tuggiItems: [
          'Technisches Setup, POI-Ingestion, White-Label-Konfiguration',
          'Narrativ-Playbook und Qualitätsstandards',
          'Betrieb + Berichte + saisonale Updates'
        ],
        lifecycleTitle: 'Inhalts-Lebenszyklus',
        lifecycleSteps: ['Entwurf', 'Überprüfung', 'Veröffentlichen', 'Messen', 'Verbessern']
      },
      implementation: {
        title: 'Implementierungsmodell',
        subtitle: 'Phasenweiser Ansatz mit geringem Risiko',
        phases: [
          {
            title: 'Phase 1: Setup & Digitalisierung',
            duration: 'Monate 1–2',
            items: [
              'POI-Inventar und Kuration',
              'White-Label-Konfiguration',
              'Basis-Analytik + erste Veröffentlichung'
            ]
          },
          {
            title: 'Phase 2: Betrieb & Intelligenz',
            duration: 'Monate 3–12',
            items: [
              'Monatlicher Betrieb',
              'Berichte + saisonale Anpassungen',
              'Erweiterung der Abdeckung (Viertel / Routen)'
            ]
          }
        ],
        timeToValue: {
          title: 'Time-to-Value',
          description: 'Funktionierendes Produkt live innerhalb von 60 Tagen. Messbares Engagement ab dem ersten Betriebstag.'
        }
      },
      governance: {
        title: 'Daten, Governance & Compliance',
        subtitle: 'Gebaut für Anforderungen des öffentlichen Sektors',
        items: [
          {
            icon: 'minimize',
            title: 'Datenminimierung',
            description: 'Nur essentielle Daten für den Servicebetrieb gesammelt'
          },
          {
            icon: 'privacy',
            title: 'Privacy by Design',
            description: 'Anonymisierung und Nutzerkontrollen integriert'
          },
          {
            icon: 'security',
            title: 'Sicherheit & Audit',
            description: 'CMS-Zugriffssteuerung, vollständiger Prüfpfad'
          },
          {
            icon: 'hosting',
            title: 'EU-Hosting',
            description: 'Inhalte und Protokolle auf EU-konformer Infrastruktur gehostet'
          }
        ],
        procurementNote: 'Vergabe-reife Dokumentation und SLA-Bedingungen auf Anfrage verfügbar.'
      },
      whyNow: {
        title: 'Warum Jetzt',
        points: [
          'Bereit vor der nächsten Hochsaison',
          'Wiederverwendbare Infrastruktur für Events und Kampagnen',
          'Politische Kontinuität: wird zum kommunalen Vermögenswert über Mandate hinweg'
        ]
      },
      finalCta: {
        title: 'Technische Präsentation vereinbaren',
        subtitle: 'Sehen Sie die Plattform in Aktion und besprechen Sie die Implementierung.',
        duration: 'Dauer: 30–45 Minuten',
        includes: [
          'Live-App-Demonstration',
          'CMS / City OS Durchgang',
          'Beispiel-Analytikbericht',
          'Implementierungs-Roadmap'
        ],
        button: 'Präsentation vereinbaren',
        contact: 'Oder direkt kontaktieren:',
        qrLabel: 'Scan für diese Seite'
      },
      nav: {
        value: 'Wert',
        proof: 'Beweis',
        implementation: 'Implementierung',
        governance: 'Governance',
        contact: 'Kontakt'
      }
    },
    'IT': {
      hero: {
        headline: 'Infrastruttura Turistica Intelligente',
        subheadline: 'Trasforma la mobilità in intelligenza culturale — con piena governance editoriale comunale.',
        bullets: [
          'Layer audio ufficiale white label per il territorio',
          'Controllo editoriale comunale (City OS / CMS)',
          'Risultati misurabili: coinvolgimento, dispersione, insights'
        ],
        ctaPrimary: 'Programma Presentazione Tecnica',
        ctaSecondary: 'Scarica Executive Summary (PDF)'
      },
      silentTerritory: {
        title: 'Il Territorio Silenzioso',
        intro: 'Ogni giorno, migliaia attraversano il tuo comune senza contesto culturale:',
        problems: [
          'Flussi giornalieri senza contesto culturale o identità locale',
          'Occasioni perse per educazione al patrimonio e dispersione dei visitatori',
          'Dipendenza da contenuti esterni senza governance comunale'
        ]
      },
      whatIsTuggi: {
        title: 'Cos\'è Tuggi',
        oneLiner: 'Uno strato di infrastruttura digitale comunale per narrazioni audio ufficiali e geolocalizzate.',
        paragraph: 'Tuggi è infrastruttura, non una campagna. Non un\'app turistica generica. È un asset comunale ufficiale che trasforma ogni spostamento in un\'opportunità di educazione al patrimonio e connessione civica.',
        diagram: {
          city: 'Comune',
          platform: 'Tuggi City OS',
          citizens: 'Cittadini e Visitatori'
        }
      },
      publicValue: {
        title: 'Valore Pubblico Consegnato',
        subtitle: 'Quattro pilastri di impatto comunale misurabile',
        pillars: [
          {
            title: 'Orgoglio Civico & Educazione al Patrimonio',
            bullets: [
              'Ridurre la "cecità del residente" verso il patrimonio locale',
              'Educazione informale durante la mobilità quotidiana',
              'I cittadini diventano ambasciatori del patrimonio'
            ],
            indicator: 'Indicatori: ascolti per zona, tasso di ritenzione, narrazioni top'
          },
          {
            title: 'Sovranità Narrativa (Governance)',
            bullets: [
              'Pieno controllo editoriale comunale',
              'Accuratezza storica garantita',
              'Versioni multilingue ufficiali'
            ],
            indicator: 'Indicatori: log di pubblicazione, traccia editoriale, versioni linguistiche'
          },
          {
            title: 'Coesione Territoriale & Gestione dei Flussi',
            bullets: [
              'Dispersione verso quartieri e POI secondari',
              'Ridurre la pressione sul centro storico',
              'Distribuire la spesa turistica geograficamente'
            ],
            indicator: 'Indicatori: mappe di calore, visite per cluster, percorsi consumati'
          },
          {
            title: 'Comunicazione Civica & Utilità Pubblica',
            bullets: [
              'Canale audio istituzionale (agenda, avvisi)',
              'Comunicazione contestuale per zona',
              'Portata diretta durante il transito'
            ],
            indicator: 'Indicatori: portata per area, analisi per fascia oraria'
          }
        ]
      },
      evidence: {
        title: 'Prova che Funziona',
        subtitle: 'Prodotto reale, risultati reali — guarda tu stesso',
        videoLabel: 'Demo Prodotto (60s)',
        appScreensLabel: 'Screenshot App',
        cmsScreensLabel: 'CMS / City OS',
        reportLabel: 'Esempio Report Mensile'
      },
      operations: {
        title: 'Come il Comune lo Opera',
        subtitle: 'Ruoli chiari, onere comunale minimo',
        municipalityTitle: 'Comune',
        municipalityItems: [
          'Validazione storica e tono istituzionale',
          'Definizione zone prioritarie (centro, quartieri, corridoi)',
          'Approvazione calendario editoriale'
        ],
        tuggiTitle: 'Tuggi',
        tuggiItems: [
          'Setup tecnico, ingestione POI, configurazione white label',
          'Playbook narrativo e standard di qualità',
          'Operazione + report + aggiornamenti stagionali'
        ],
        lifecycleTitle: 'Ciclo di Vita del Contenuto',
        lifecycleSteps: ['Bozza', 'Revisione', 'Pubblica', 'Misura', 'Migliora']
      },
      implementation: {
        title: 'Modello di Implementazione',
        subtitle: 'Approccio graduale a basso rischio',
        phases: [
          {
            title: 'Fase 1: Setup & Digitalizzazione',
            duration: 'Mesi 1–2',
            items: [
              'Inventario e curatela POI',
              'Configurazione white label',
              'Analisi base + prima pubblicazione'
            ]
          },
          {
            title: 'Fase 2: Operazione & Intelligenza',
            duration: 'Mesi 3–12',
            items: [
              'Operazione mensile',
              'Report + aggiustamenti stagionali',
              'Espansione copertura (quartieri / percorsi)'
            ]
          }
        ],
        timeToValue: {
          title: 'Time-to-Value',
          description: 'Prodotto funzionante in 60 giorni. Coinvolgimento misurabile dal primo giorno di operazione.'
        }
      },
      governance: {
        title: 'Dati, Governance & Conformità',
        subtitle: 'Costruito per i requisiti del settore pubblico',
        items: [
          {
            icon: 'minimize',
            title: 'Minimizzazione Dati',
            description: 'Solo dati essenziali raccolti per l\'operazione del servizio'
          },
          {
            icon: 'privacy',
            title: 'Privacy by Design',
            description: 'Anonimizzazione e controlli utente integrati'
          },
          {
            icon: 'security',
            title: 'Sicurezza & Audit',
            description: 'Controllo accessi CMS, audit trail completo'
          },
          {
            icon: 'hosting',
            title: 'Hosting UE',
            description: 'Contenuti e log ospitati in infrastruttura conforme UE'
          }
        ],
        procurementNote: 'Documentazione pronta per appalti e termini SLA disponibili su richiesta.'
      },
      whyNow: {
        title: 'Perché Ora',
        points: [
          'Pronto prima della prossima alta stagione turistica',
          'Infrastruttura riutilizzabile per eventi e campagne',
          'Continuità politica: diventa un asset comunale tra i mandati'
        ]
      },
      finalCta: {
        title: 'Programma Presentazione Tecnica',
        subtitle: 'Vedi la piattaforma in azione e discuti l\'implementazione per il tuo comune.',
        duration: 'Durata: 30–45 minuti',
        includes: [
          'Dimostrazione app dal vivo',
          'Panoramica CMS / City OS',
          'Esempio report analitico',
          'Roadmap di implementazione'
        ],
        button: 'Programma Presentazione',
        contact: 'O contatta direttamente:',
        qrLabel: 'Scansiona per questa pagina'
      },
      nav: {
        value: 'Valore',
        proof: 'Prova',
        implementation: 'Implementazione',
        governance: 'Governance',
        contact: 'Contatto'
      }
    }
  };

  return content[language] || content['EN'];
};

// ============================================================================
// COMPONENTS
// ============================================================================

const SectionAnchor: React.FC<{ id: string }> = ({ id }) => (
  <div id={id} className="scroll-mt-24" />
);

const PillarIcon: React.FC<{ index: number; className?: string }> = ({ index, className = '' }) => {
  const icons = [
    <Landmark key="landmark" className={className} />,
    <Shield key="shield" className={className} />,
    <Route key="route" className={className} />,
    <Megaphone key="megaphone" className={className} />
  ];
  return icons[index] || icons[0];
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const GovPage: React.FC<GovPageProps> = ({ 
  currentLanguage = 'EN',
  onCTAClick 
}) => {
  const content = getLocalizedContent(currentLanguage);

  const handleCTAClick = (ctaType: string, position: string = 'unknown') => {
    if (onCTAClick) {
      onCTAClick(ctaType, position);
    }
    
    // Track GA4 event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', `gov_${ctaType}`, {
        event_category: 'Gov Landing',
        event_label: ctaType,
        page_type: 'gov-portugal',
        language: currentLanguage,
        position: position
      });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <nav className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-neutral-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-6 text-sm font-medium">
            <button 
              onClick={() => scrollToSection('value')} 
              className="text-neutral-600 hover:text-tuggi-primary transition-colors"
            >
              {content.nav.value}
            </button>
            <button 
              onClick={() => scrollToSection('proof')} 
              className="text-neutral-600 hover:text-tuggi-primary transition-colors"
            >
              {content.nav.proof}
            </button>
            <button 
              onClick={() => scrollToSection('implementation')} 
              className="text-neutral-600 hover:text-tuggi-primary transition-colors"
            >
              {content.nav.implementation}
            </button>
            <button 
              onClick={() => scrollToSection('governance')} 
              className="text-neutral-600 hover:text-tuggi-primary transition-colors"
            >
              {content.nav.governance}
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-neutral-600 hover:text-tuggi-primary transition-colors"
            >
              {content.nav.contact}
            </button>
          </div>
        </div>
      </nav>

      {/* ================================================================== */}
      {/* HERO SECTION */}
      {/* ================================================================== */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-tuggi-primary/5 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMEE4RTgiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tuggi-primary/10 text-tuggi-primary text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                <span>B2G Municipal Infrastructure</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 leading-tight mb-6">
                {content.hero.headline}
              </h1>
              
              <p className="text-xl lg:text-2xl text-neutral-600 mb-8 leading-relaxed">
                {content.hero.subheadline}
              </p>

              {/* Proof Bullets */}
              <ul className="space-y-3 mb-10">
                {content.hero.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-tuggi-success mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleCTAClick('cta_meeting_click', 'hero')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-tuggi-primary hover:bg-tuggi-primary-dark text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Calendar className="w-5 h-5" />
                  {content.hero.ctaPrimary}
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleCTAClick('pdf_download', 'hero')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-neutral-300 hover:border-tuggi-primary text-neutral-700 hover:text-tuggi-primary font-semibold rounded-xl transition-all duration-200"
                >
                  <Download className="w-5 h-5" />
                  {content.hero.ctaSecondary}
                </button>
              </div>
            </motion.div>

            {/* Right: Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <img 
                  src="/images/gov/hero_car_dashboard.png" 
                  alt="Tuggi Dashboard Interface" 
                  className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-tuggi-secondary/30 rounded-full blur-2xl -z-10" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-tuggi-primary/30 rounded-full blur-2xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* THE SILENT TERRITORY */}
      {/* ================================================================== */}
      <section className="py-16 lg:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              {content.silentTerritory.title}
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              {content.silentTerritory.intro}
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {content.silentTerritory.problems.map((problem, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-neutral-200 text-left">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <AlertCircle className="w-5 h-5 text-orange-600" />
                  </div>
                  <p className="text-neutral-700">{problem}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* WHAT TUGGI IS */}
      {/* ================================================================== */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              {content.whatIsTuggi.title}
            </h2>
            <p className="text-xl lg:text-2xl text-tuggi-primary font-medium mb-4">
              {content.whatIsTuggi.oneLiner}
            </p>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              {content.whatIsTuggi.paragraph}
            </p>
          </motion.div>

          {/* Diagram: City → Platform → Citizens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
          >
            {/* City Council */}
            <div className="bg-white rounded-2xl border-2 border-tuggi-primary p-6 text-center min-w-[200px]">
              <Building2 className="w-10 h-10 text-tuggi-primary mx-auto mb-3" />
              <h3 className="font-bold text-neutral-900">{content.whatIsTuggi.diagram.city}</h3>
              <p className="text-sm text-neutral-500 mt-1">Governance & Content</p>
            </div>

            <ArrowRight className="w-8 h-8 text-neutral-300 rotate-90 md:rotate-0" />

            {/* Tuggi City OS */}
            <div className="bg-gradient-to-br from-tuggi-primary to-tuggi-primary-dark rounded-2xl p-6 text-center min-w-[200px] shadow-lg">
              <Globe className="w-10 h-10 text-white mx-auto mb-3" />
              <h3 className="font-bold text-white">{content.whatIsTuggi.diagram.platform}</h3>
              <p className="text-sm text-white/80 mt-1">CMS + Analytics + Publishing</p>
            </div>

            <ArrowRight className="w-8 h-8 text-neutral-300 rotate-90 md:rotate-0" />

            {/* Citizens & Visitors */}
            <div className="bg-white rounded-2xl border-2 border-tuggi-accent-teal p-6 text-center min-w-[200px]">
              <Users className="w-10 h-10 text-tuggi-accent-teal mx-auto mb-3" />
              <h3 className="font-bold text-neutral-900">{content.whatIsTuggi.diagram.citizens}</h3>
              <p className="text-sm text-neutral-500 mt-1">Listening in Transit</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* PUBLIC VALUE DELIVERED */}
      {/* ================================================================== */}
      <SectionAnchor id="value" />
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              {content.publicValue.title}
            </h2>
            <p className="text-lg text-neutral-600">
              {content.publicValue.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {content.publicValue.pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-neutral-200 p-6 lg:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-tuggi-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <PillarIcon index={index} className="w-6 h-6 text-tuggi-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 pt-2">{pillar.title}</h3>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {pillar.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-tuggi-success mt-1 flex-shrink-0" />
                      <span className="text-neutral-600">{bullet}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-neutral-100">
                  <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <BarChart3 className="w-4 h-4" />
                    <span>{pillar.indicator}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* EVIDENCE THAT IT WORKS */}
      {/* ================================================================== */}
      <SectionAnchor id="proof" />
      <section className="py-16 lg:py-24 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {content.evidence.title}
            </h2>
            <p className="text-lg text-neutral-400">
              {content.evidence.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Video Demo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-neutral-800 rounded-2xl p-6 hover:bg-neutral-750 transition-colors cursor-pointer group"
              onClick={() => handleCTAClick('video_play', 'evidence')}
            >
              <div className="aspect-video bg-neutral-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-neutral-600 transition-colors">
                <div className="w-16 h-16 bg-tuggi-primary rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
              <h3 className="font-semibold text-white">{content.evidence.videoLabel}</h3>
            </motion.div>

            {/* App Screenshots */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-neutral-800 rounded-2xl p-6"
            >
              <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-neutral-900">
                <img src="/images/gov/app_collage.png" alt="Tuggi App Screenshots" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-semibold text-white">{content.evidence.appScreensLabel}</h3>
            </motion.div>

            {/* CMS Screenshots */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-neutral-800 rounded-2xl p-6"
            >
              <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-neutral-900">
                <img src="/images/gov/city_os_dashboard.png" alt="City OS Dashboard" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-semibold text-white">{content.evidence.cmsScreensLabel}</h3>
            </motion.div>

            {/* Sample Report */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-neutral-800 rounded-2xl p-6"
            >
              <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-neutral-900">
                <img src="/images/gov/monthly_report.png" alt="Monthly Report Sample" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-semibold text-white">{content.evidence.reportLabel}</h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* HOW THE CITY OPERATES IT */}
      {/* ================================================================== */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              {content.operations.title}
            </h2>
            <p className="text-lg text-neutral-600">
              {content.operations.subtitle}
            </p>
          </motion.div>

          {/* Responsibilities Table */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {/* Municipality */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border-2 border-tuggi-primary p-6 lg:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-8 h-8 text-tuggi-primary" />
                <h3 className="text-xl font-bold text-neutral-900">{content.operations.municipalityTitle}</h3>
              </div>
              <ul className="space-y-3">
                {content.operations.municipalityItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-tuggi-primary mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tuggi */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-tuggi-primary to-tuggi-primary-dark rounded-2xl p-6 lg:p-8 text-white"
            >
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold">{content.operations.tuggiTitle}</h3>
              </div>
              <ul className="space-y-3">
                {content.operations.tuggiItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white/80 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Content Lifecycle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-50 rounded-2xl p-6 lg:p-8"
          >
            <h3 className="text-lg font-bold text-neutral-900 mb-6 text-center">
              {content.operations.lifecycleTitle}
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {content.operations.lifecycleSteps.map((step, i) => (
                <React.Fragment key={i}>
                  <div className="px-5 py-2 font-semibold text-neutral-600 bg-neutral-200/50 rounded-full">
                    {step}
                  </div>
                  {i < content.operations.lifecycleSteps.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-neutral-300 hidden sm:block" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* IMPLEMENTATION MODEL */}
      {/* ================================================================== */}
      <SectionAnchor id="implementation" />
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              {content.implementation.title}
            </h2>
            <p className="text-lg text-neutral-600">
              {content.implementation.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-8">
            {content.implementation.phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-neutral-200 p-6 lg:p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-tuggi-primary rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900">{phase.title}</h3>
                    <span className="text-sm text-tuggi-primary font-medium">{phase.duration}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-tuggi-success mt-1 flex-shrink-0" />
                      <span className="text-neutral-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Time to Value */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-tuggi-success/10 to-tuggi-accent-teal/10 rounded-2xl p-6 lg:p-8 border border-tuggi-success/20"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-tuggi-success rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {content.implementation.timeToValue.title}
                </h3>
                <p className="text-neutral-600">
                  {content.implementation.timeToValue.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* GOVERNANCE & COMPLIANCE */}
      {/* ================================================================== */}
      <SectionAnchor id="governance" />
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              {content.governance.title}
            </h2>
            <p className="text-lg text-neutral-600">
              {content.governance.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {content.governance.items.map((item, index) => {
              const IconComponent = item.icon === 'minimize' ? TrendingUp : 
                                   item.icon === 'privacy' ? Lock :
                                   item.icon === 'security' ? Shield :
                                   Server;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-neutral-200 p-6 text-center"
                >
                  <div className="w-12 h-12 bg-tuggi-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-tuggi-primary" />
                  </div>
                  <h3 className="font-bold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-neutral-600 bg-neutral-50 rounded-xl px-6 py-4 inline-block">
              {content.governance.procurementNote}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* WHY NOW */}
      {/* ================================================================== */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-tuggi-primary to-tuggi-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              {content.whyNow.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {content.whyNow.points.map((point, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <CheckCircle2 className="w-8 h-8 text-white/80 mx-auto mb-4" />
                  <p className="text-white/90">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FINAL CTA */}
      {/* ================================================================== */}
      <SectionAnchor id="contact" />
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              {content.finalCta.title}
            </h2>
            <p className="text-lg text-neutral-600 mb-6">
              {content.finalCta.subtitle}
            </p>
            <p className="text-sm text-neutral-500 mb-8">
              {content.finalCta.duration}
            </p>

            {/* What's Included */}
            <div className="bg-neutral-50 rounded-2xl p-6 lg:p-8 mb-8 inline-block">
              <ul className="grid sm:grid-cols-2 gap-3 text-left">
                {content.finalCta.includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-tuggi-success flex-shrink-0" />
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <button
                onClick={() => handleCTAClick('cta_meeting_click', 'final')}
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-tuggi-primary hover:bg-tuggi-primary-dark text-white font-bold text-lg rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl cta-attention"
              >
                <Calendar className="w-6 h-6" />
                {content.finalCta.button}
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>

            <p className="text-neutral-500 mb-2">{content.finalCta.contact}</p>
            <a 
              href="mailto:leandro@tuggi.app" 
              className="text-tuggi-primary hover:text-tuggi-primary-dark font-medium text-lg"
            >
              leandro@tuggi.app
            </a>

            {/* QR Code Placeholder */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <p className="text-sm text-neutral-500 mb-4">{content.finalCta.qrLabel}</p>
              <div className="w-32 h-32 bg-neutral-100 rounded-xl mx-auto flex items-center justify-center">
                <div className="grid grid-cols-4 gap-1">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-4 h-4 rounded-sm ${Math.random() > 0.5 ? 'bg-neutral-800' : 'bg-white'}`} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GovPage;
