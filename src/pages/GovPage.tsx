import React, { useEffect, useRef, useCallback } from 'react';
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
    videoValidation: string;
    appScreensLabel: string;
    appValidation: string;
    cmsScreensLabel: string;
    cmsValidation: string;
    reportLabel: string;
    reportValidation: string;
  };
  operations: {
    title: string;
    subtitle: string;
    modelLine: string;
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
          'Monthly reports with metrics and heat maps'
        ],
        ctaPrimary: 'Schedule Presentation',
        ctaSecondary: 'Download Summary'
      },
      silentTerritory: {
        title: 'The Silent Territory',
        intro: 'Every day, thousands move through the Municipality without cultural mediation:',
        problems: [
          'Flows without territorial reading. Daily commutes cross heritage sites without mediation.',
          'Underutilized public opportunity. Heritage education and local identity out of routine.',
          'Concentration and pressure in the center. Lack of instrument to guide dispersion and measure results.'
        ]
      },
      whatIsTuggi: {
        title: 'What Tuggi Is',
        oneLiner: 'A municipal digital infrastructure layer for official, geo-located audio narratives.',
        paragraph: 'The Council defines, approves, and publishes; Tuggi operates the infrastructure and provides metrics. Tuggi is an official municipal asset that transforms every commute into an opportunity for heritage education and civic connection.',
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
            indicator: 'Indicators: plays per zone, retention, top narratives'
          },
          {
            title: 'Narrative Sovereignty (Governance)',
            bullets: [
              'Full municipal editorial control',
              'Historical accuracy guaranteed',
              'Official multilingual versions'
            ],
            indicator: 'Indicators: language versions, editorial logs, publication status'
          },
          {
            title: 'Territorial Cohesion & Flow Management',
            bullets: [
              'Dispersion to parishes and secondary POIs',
              'Reduce pressure on historic center',
              'Distribute tourist spending geographically'
            ],
            indicator: 'Indicators: heatmaps, consumption by zone, secondary POIs'
          },
          {
            title: 'Civic Communication & Public Utility',
            bullets: [
              'Institutional audio channel (agenda, alerts)',
              'Contextual communication by zone',
              'Direct reach during transit'
            ],
            indicator: 'Indicators: reach by area and time window'
          }
        ]
      },
      evidence: {
        title: 'Evidence That It Works',
        subtitle: 'Real product, real results — see for yourself',
        videoLabel: 'Product Demo (60s)',
        videoValidation: 'Trigger by geolocation + language switching',
        appScreensLabel: 'App Screenshots',
        appValidation: 'User experience in transit',
        cmsScreensLabel: 'CMS / City OS',
        cmsValidation: 'Editorial control + versions',
        reportLabel: 'Sample Monthly Report',
        reportValidation: 'Monthly metrics + heatmaps'
      },
      operations: {
        title: 'How the City Operates It',
        subtitle: 'Clear roles, minimal municipal overhead',
        modelLine: 'Operation model: clear responsibilities, minimal municipal effort.',
        municipalityTitle: 'City Council',
        municipalityItems: [
          'Validates historical accuracy and institutional tone',
          'Approves editorial calendar and priority zones',
          'Defines strategic heritage objectives'
        ],
        tuggiTitle: 'Tuggi',
        tuggiItems: [
          'Configures technical setup, POIs, and white-label',
          'Operates the infrastructure and quality control',
          'Maintains, reports and performs seasonal updates'
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
              'Official POI inventory published',
              'White label configured and ready to operate',
              'First editorial cycle approved (content + languages)'
            ]
          },
          {
            title: 'Phase 2: Operation & Intelligence',
            duration: 'Months 3–12',
            items: [
              'Monthly report and recommendations',
              'Seasonal updates and cultural agenda',
              'Expansion by zones and thematic routes'
            ]
          }
        ],
        timeToValue: {
          title: 'Time-to-Value',
          description: 'First value in 30–60 days: platform published and measuring.'
        }
      },
      governance: {
        title: 'Data, Governance & Compliance',
        subtitle: 'Built for public sector requirements',
        items: [
          {
            icon: 'minimize',
            title: 'Data Minimization',
            description: 'Essential and anonymized data only.'
          },
          {
            icon: 'privacy',
            title: 'Privacy by Design',
            description: 'User controls and GDPR compliance.'
          },
          {
            icon: 'security',
            title: 'Audit Trail',
            description: 'Access by profiles, logs, and audit trail.'
          },
          {
            icon: 'hosting',
            title: 'IT Documentation',
            description: 'Minimization, anonymization, and security available.'
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
        title: 'Schedule Presentation',
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
        subheadline: 'Transformar mobilidade em inteligência cultural — com autonomia e gestão editorial.',
        bullets: [
          'Camada White Label de áudio oficial para o território',
          'Gestão editorial municipal (City OS / CMS)',
          'Relatórios mensais com métricas e mapas de calor'
        ],
        ctaPrimary: 'Agendar Apresentação',
        ctaSecondary: 'Download do Resumo'
      },
      silentTerritory: {
        title: 'O Território Silencioso',
        intro: 'Todos os dias, milhares atravessam o Município sem mediação cultural:',
        problems: [
          'Fluxos sem leitura do território. Deslocações diárias atravessam locais históricos sem mediação.',
          'Oportunidade pública subaproveitada. Educação cultural e identidade local fora da rotina.',
          'Concentração e pressão no centro. Falta instrumento para orientar dispersão e medir resultados.'
        ]
      },
      whatIsTuggi: {
        title: 'O que é a Tuggi',
        oneLiner: 'Uma camada de infraestrutura digital para narrativas áudio oficiais e geolocalizadas.',
        paragraph: 'O Município define, aprova e publica; a Tuggi opera a infraestrutura e fornece métricas. A Tuggi é um ativo oficial que transforma cada deslocação numa oportunidade de valorização cultural e conexão cívica.',
        diagram: {
          city: 'Gestão Municipal',
          platform: 'Tuggi City OS',
          citizens: 'Cidadãos e Visitantes'
        }
      },
      publicValue: {
        title: 'Valor Público Entregue',
        subtitle: 'Quatro pilares de impacto municipal mensurável',
        pillars: [
          {
            title: 'Orgulho Cívico e Identidade Local',
            bullets: [
              'Reduzir a "cegueira do residente" à história local',
              'Educação informal durante a mobilidade diária',
              'Moradores tornam-se embaixadores da cidade'
            ],
            indicator: 'Indicadores: plays por zona, retenção, principais narrativas'
          },
          {
            title: 'Soberania Narrativa (Gestão Editorial)',
            bullets: [
              'Autonomia editorial total',
              'Rigor histórico garantido',
              'Versões multilingues oficiais'
            ],
            indicator: 'Indicadores: versões por idioma, logs de atividade, status de publicação'
          },
          {
            title: 'Coesão Territorial e Fluxos',
            bullets: [
              'Dispersão para novas zonas e pontos de interesse',
              'Reduzir pressão sobre o centro histórico',
              'Distribuir o gasto turístico geograficamente'
            ],
            indicator: 'Indicadores: mapas de calor, consumo por zona, POIs secundários'
          },
          {
            title: 'Comunicação Cívica e Utilidade Pública',
            bullets: [
              'Canal institucional em áudio (agenda, alertas)',
              'Comunicação contextual por área',
              'Alcance direto durante o trânsito'
            ],
            indicator: 'Indicadores: alcance por área e janela temporal'
          }
        ]
      },
      evidence: {
        title: 'Evidência de que Funciona',
        subtitle: 'Produto real, resultados reais — veja você mesmo',
        videoLabel: 'Demo do Produto (60s)',
        videoValidation: 'Trigger por geolocalização + troca de idioma',
        appScreensLabel: 'Screenshots da App',
        appValidation: 'Experiência de quem utiliza em trânsito',
        cmsScreensLabel: 'CMS / City OS',
        cmsValidation: 'Gestão editorial + versões',
        reportLabel: 'Relatório Mensal de Exemplo',
        reportValidation: 'Métricas mensais + mapas de calor'
      },
      operations: {
        title: 'Modelo de Operação',
        subtitle: 'Papéis claros, overhead operacional mínimo',
        modelLine: 'Modelo de operação: responsabilidades claras, esforço municipal mínimo.',
        municipalityTitle: 'Município',
        municipalityItems: [
          'Valida o tom e a identidade institucional',
          'Aprova o calendário editorial e zonas prioritárias',
          'Define os objetivos estratégicos de cultura'
        ],
        tuggiTitle: 'Tuggi',
        tuggiItems: [
          'Configura o setup técnico, POIs e white-label',
          'Opera a infraestrutura e gestão de qualidade',
          'Mantém, reporta e realiza as atualizações sazonais'
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
              'Inventário oficial de POIs publicado',
              'White label configurado e pronto a operar',
              'Primeiro ciclo editorial aprovado (conteúdos + idiomas)'
            ]
          },
          {
            title: 'Fase 2: Operação e Inteligência',
            duration: 'Meses 3–12',
            items: [
              'Relatório mensal e recomendações',
              'Atualizações sazonais e agenda cultural',
              'Expansão por zonas e rotas temáticas'
            ]
          }
        ],
        timeToValue: {
          title: 'Time-to-Value',
          description: 'Primeiro valor em 30–60 dias: plataforma publicada e a medir.'
        }
      },
      governance: {
        title: 'Dados, Gestão e Conformidade',
        subtitle: 'Construído para requisitos do setor público',
        items: [
          {
            icon: 'minimize',
            title: 'Minimização de Dados',
            description: 'Apenas dados essenciais e anonimizados.'
          },
          {
            icon: 'privacy',
            title: 'Privacidade de Dados',
            description: 'Autonomia para quem usa e conformidade (RGPD/LGPD).'
          },
          {
            icon: 'security',
            title: 'Trilha de Auditoria',
            description: 'Acessos por perfis, registos de publicação e auditoria.'
          },
          {
            icon: 'hosting',
            title: 'Documentação de TI',
            description: 'Minimização, anonimização e segurança disponível.'
          }
        ],
        procurementNote: 'Documentação pronta para contratação pública e termos de SLA disponíveis mediante pedido.'
      },
      whyNow: {
        title: 'Porquê Agora',
        points: [
          'Pronto antes da próxima época alta de turismo',
          'Infraestrutura reutilizable para eventos e campanhas',
          'Continuidade política: torna-se ativo municipal entre mandatos'
        ]
      },
      finalCta: {
        title: 'Agendar Apresentação',
        subtitle: 'Veja a plataforma em ação e discuta a implementação para o seu município.',
        duration: 'Duração: 30–45 minutos',
        includes: [
          'Demonstração da app ao vivo',
          'Demonstração do CMS / City OS',
          'Relatório de analytics de exemplo',
          'Roadmap de implementação'
        ],
        button: 'Agendar Apresentação',
        contact: 'Ou entre em contato diretamente com:',
        qrLabel: 'Scan para esta página'
      },
      nav: {
        value: 'Valor',
        proof: 'Prova',
        implementation: 'Implementação',
        governance: 'Governação',
        contact: 'Contato'
      }
    },
    'ES': {
      hero: {
        headline: 'Infraestructura Oficial de Turismo Inteligente',
        subheadline: 'Convierta la movilidad en inteligencia cultural — con gobernanza editorial municipal completa.',
        bullets: [
          'Capa de audio oficial marca blanca para el territorio',
          'Control editorial municipal (City OS / CMS)',
          'Informes mensuales con métricas y mapas de calor'
        ],
        ctaPrimary: 'Agendar Presentación',
        ctaSecondary: 'Descargar Resumen'
      },
      silentTerritory: {
        title: 'El Territorio Silencioso',
        intro: 'Cada día, miles atraviesan el Municipio sin mediación cultural:',
        problems: [
          'Flujos sin lectura del territorio. Los desplazamientos diarios cruzan el patrimonio sin mediación.',
          'Oportunidade pública infrautilizada. Educación patrimonial e identidad local fuera de la rutina.',
          'Concentración y presión en el centro. Falta de instrumento para orientar la dispersión y medir resultados.'
        ]
      },
      whatIsTuggi: {
        title: 'Qué es Tuggi',
        oneLiner: 'Una capa de infraestructura digital municipal para narrativas de audio oficiales y geolocalizadas.',
        paragraph: 'El Ayuntamiento define, aprueba y publica; Tuggi opera la infraestructura y proporciona métricas. Tuggi es un activo municipal oficial que transforma cada viaje en una oportunidad de educación patrimonial y conexión cívica.',
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
            indicator: 'Indicadores: reproducciones por zona, retención, narrativas top'
          },
          {
            title: 'Soberanía Narrativa (Gobernanza)',
            bullets: [
              'Control editorial municipal total',
              'Rigor histórico garantizado',
              'Versiones multilingues oficiales'
            ],
            indicator: 'Indicadores: versiones por idioma, logs editoriais, estado de publicación'
          },
          {
            title: 'Cohesión Territorial e Gestión de Fluxos',
            bullets: [
              'Dispersión a parroquias y POIs secundarios',
              'Reducir presión sobre el centro histórico',
              'Distribuir gasto turístico geográficamente'
            ],
            indicator: 'Indicadores: mapas de calor, consumo por zona, POIs secundarios'
          },
          {
            title: 'Comunicación Cívica y Utilidad Pública',
            bullets: [
              'Canal de audio institucional (agenda, alertas)',
              'Comunicación contextual por zona',
              'Alcance directo durante el tránsito'
            ],
            indicator: 'Indicadores: alcance por área y ventana temporal'
          }
        ]
      },
      evidence: {
        title: 'Evidencia de que Funciona',
        subtitle: 'Producto real, resultados reales — véalo usted mismo',
        videoLabel: 'Demo del Producto (60s)',
        videoValidation: 'Trigger por geolocalización + cambio de idioma',
        appScreensLabel: 'Capturas de la App',
        appValidation: 'Experiencia del usuario en tránsito',
        cmsScreensLabel: 'CMS / City OS',
        cmsValidation: 'Control editorial + versiones',
        reportLabel: 'Informe Mensual de Ejemplo',
        reportValidation: 'Métricas mensuales + mapas de calor'
      },
      operations: {
        title: 'Cómo lo Opera la Ciudad',
        subtitle: 'Roles claros, gastos generales municipales mínimos',
        modelLine: 'Modelo de operación: responsabilidades claras, esfuerzo municipal mínimo.',
        municipalityTitle: 'Ayuntamiento',
        municipalityItems: [
          'Valida el rigor histórico y el tono institucional',
          'Aprueba o calendario editorial y zonas prioritarias',
          'Define los objetivos estratégicos de patrimonio'
        ],
        tuggiTitle: 'Tuggi',
        tuggiItems: [
          'Configura o setup técnico, POIs y white-label',
          'Opera la infraestructura y control de calidad',
          'Mantiene, informa y realiza actualizaciones estacionales'
        ],
        lifecycleTitle: 'Ciclo de Vida del Contenido',
        lifecycleSteps: ['Borrador', 'Revisión', 'Publicar', 'Medir', 'Mejorar']
      },
      implementation: {
        title: 'Modelo de Implementación',
        subtitle: 'Enfoque por fases y de bajo riesgo',
        phases: [
          {
            title: 'Fase 1: Configuração e Digitalização',
            duration: 'Meses 1–2',
            items: [
              'Inventario oficial de POIs publicado',
              'White label configurado y listo para operar',
              'Primer ciclo editorial aprobado (contenido + idiomas)'
            ]
          },
          {
            title: 'Fase 2: Operación e Inteligencia',
            duration: 'Meses 3–12',
            items: [
              'Informe mensual y recomendaciones',
              'Actualizaciones estacionales y agenda cultural',
              'Expansión por zonas e rutas temáticas'
            ]
          }
        ],
        timeToValue: {
          title: 'Time-to-Value',
          description: 'Primer valor en 30–60 dias: plataforma publicada y midiendo.'
        }
      },
      governance: {
        title: 'Datos, Gobernanza y Conformidad',
        subtitle: 'Construido para requisitos del sector público',
        items: [
          {
            icon: 'minimize',
            title: 'Minimización de Datos',
            description: 'Solo datos esenciales y anonimizados.'
          },
          {
            icon: 'privacy',
            title: 'Privacidad por Diseño',
            description: 'Control de usuario y cumplimiento con GDPR.'
          },
          {
            icon: 'security',
            title: 'Rastro de Auditoría',
            description: 'Acceso por perfiles, registros de publicación y auditoría.'
          },
          {
            icon: 'hosting',
            title: 'Documentación de TI',
            description: 'Minimización, anonimización y seguridad disponible.'
          }
        ],
        procurementNote: 'Documentación lista para contratación pública y términos de SLA disponibles bajo petición.'
      },
      whyNow: {
        title: 'Por qué ahora',
        points: [
          'Listo antes de la próxima temporada alta de turismo',
          'Infraestructura reutilizable para eventos y campañas',
          'Continuidad política: se convierte en un activo municipal entre mandatos'
        ]
      },
      finalCta: {
        title: 'Agendar Presentación',
        subtitle: 'Vea la plataforma en acción y discuta la implementación para su municipio.',
        duration: 'Duración: 30–45 minutos',
        includes: [
          'Demostración de la aplicación en vivo',
          'Recorrido por CMS / City OS',
          'Informe de analítica de ejemplo',
          'Hoja de ruta de implementación'
        ],
        button: 'Agendar Presentación',
        contact: 'O contacte directamente con:',
        qrLabel: 'Scan para esta página'
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
        headline: 'Infrastructure de Tourisme Intelligent',
        subheadline: 'Transformer la mobilité en intelligence culturelle — avec une gouvernance éditoriale municipale complète.',
        bullets: [
          'Couche audio officielle en marque blanche pour le territoire',
          'Contrôle éditorial municipal (City OS / CMS)',
          'Rapports mensuels avec métriques et cartes de chaleur'
        ],
        ctaPrimary: 'Planifier une Présentation',
        ctaSecondary: 'Télécharger le Résumé'
      },
      silentTerritory: {
        title: 'Le Territoire Silencieux',
        intro: 'Chaque jour, des milliers de personnes traversent la Commune sans médiation culturelle :',
        problems: [
          'Flux sans lecture du territoire. Les déplacements quotidiens croisent le patrimoine sans médiation.',
          'Opportunité publique sous-exploitée. Éducation patrimoniale et identité locale hors routine.',
          'Concentration et pression au centre. Manque d\'instrument pour guider la dispersion et mesurer les résultats.'
        ]
      },
      whatIsTuggi: {
        title: 'Qu\'est-ce que Tuggi',
        oneLiner: 'Une couche d\'infrastructure numérique municipale pour des récits audio officiels et géolocalisés.',
        paragraph: 'La Mairie définit, approuve et publie ; Tuggi gère l\'infrastructure et fournit des métriques. Tuggi est um atout municipal officiel qui transforme chaque trajet en une opportunité d\'éducation patrimoniale et de connexion civique.',
        diagram: {
          city: 'Mairie',
          platform: 'Tuggi City OS',
          citizens: 'Citoyens & Visiteurs'
        }
      },
      publicValue: {
        title: 'Valeur Publique Livrée',
        subtitle: 'Quatre piliers d\'impact municipal mesurable',
        pillars: [
          {
            title: 'Fierté Civique & Éducation Patrimoniale',
            bullets: [
              'Réduire la "cécité des résidents" face au patrimoine local',
              'Éducation informelle pendant la mobilité quotidienne',
              'Les citoyens deviennent des ambassadeurs du patrimoine'
            ],
            indicator: 'Indicateurs : écoutes par zone, rétention, tops récits'
          },
          {
            title: 'Souveraineté Narrative (Gouvernance)',
            bullets: [
              'Contrôle éditorial municipal complet',
              'Rigueur historique garantie',
              'Versions multilingues officielles'
            ],
            indicator: 'Indicateurs : versions par langue, journaux éditoriaux, statut de publication'
          },
          {
            title: 'Cohésion Territoriale & Gestion des Flux',
            bullets: [
              'Dispersion vers les quartiers et POI secondaires',
              'Réduire la pression sur le centre historique',
              'Distribuer les dépenses touristiques géographiquement'
            ],
            indicator: 'Indicateurs : cartes de chaleur, consommation par zone, POI secondaires'
          },
          {
            title: 'Communication Civique & Utilité Publique',
            bullets: [
              'Canal audio institutionnel (agenda, alertes)',
              'Communication contextuelle par zone',
              'Portée directe pendant le transit'
            ],
            indicator: 'Indicateurs : portée par zone et fenêtre temporelle'
          }
        ]
      },
      evidence: {
        title: 'Preuve que ça Marche',
        subtitle: 'Produit réel, résultats réels — voyez par vous-même',
        videoLabel: 'Démo du Produit (60s)',
        videoValidation: 'Déclenchement par géolocalisation + changement de langue',
        appScreensLabel: 'Captures d\'écran de l\'App',
        appValidation: 'Expérience utilisateur en transit',
        cmsScreensLabel: 'CMS / City OS',
        cmsValidation: 'Contrôle éditorial + versions',
        reportLabel: 'Exemple de Rapport Mensuel',
        reportValidation: 'Métriques mensuelles + cartes de chaleur'
      },
      operations: {
        title: 'How the City Operates It',
        subtitle: 'Clear roles, minimal municipal overhead',
        modelLine: 'Operation model: clear responsibilities, minimal municipal effort.',
        municipalityTitle: 'Mairie',
        municipalityItems: [
          'Valide la rigueur historique et le ton institutionnel',
          'Approuve le calendrier éditorial et les zones prioritaires',
          'Définit les objectifs patrimoniaux stratégiques'
        ],
        tuggiTitle: 'Tuggi',
        tuggiItems: [
          'Configure l\'installation technique, les POI et la marque blanche',
          'Gère l\'infrastructure et le contrôle de qualité',
          'Entretient, rapporte et effectue les mises à jour saisonnières'
        ],
        lifecycleTitle: 'Cycle de vie du Contenu',
        lifecycleSteps: ['Brouillon', 'Révision', 'Publier', 'Mesurer', 'Améliorer']
      },
      implementation: {
        title: 'Modèle de Mise en Œuvre',
        subtitle: 'Approche par phases et à faible risque',
        phases: [
          {
            title: 'Phase 1 : Setup & Numérisation',
            duration: 'Mois 1–2',
            items: [
              'Inventaire officiel des POI publié',
              'Marque blanche configurée et prête à l\'emploi',
              'Premier cycle éditorial approuvé (contenu + langues)'
            ]
          },
          {
            title: 'Phase 2 : Opération & Intelligence',
            duration: 'Mois 3–12',
            items: [
              'Rapport mensuel et recommandations',
              'Mises à jour saisonnières et agenda culturel',
              'Expansion par zones et itinéraires thématiques'
            ]
          }
        ],
        timeToValue: {
          title: 'Délai de rentabilisation',
          description: 'Première valeur sous 30–60 jours : plateforme publiée et mesurée.'
        }
      },
      governance: {
        title: 'Données, Gouvernance & Conformité',
        subtitle: 'Conçu pour les exigences du secteur public',
        items: [
          {
            icon: 'minimize',
            title: 'Minimisation des Données',
            description: 'Données essentielles et anonymisées uniquement.'
          },
          {
            icon: 'privacy',
            title: 'Confidentialité par Design',
            description: 'Contrôles utilisateur et conformité RGPD.'
          },
          {
            icon: 'security',
            title: 'Piste d\'Audit',
            description: 'Accès par profils, journaux et piste d\'audit.'
          },
          {
            icon: 'hosting',
            title: 'Documentation IT',
            description: 'Minimisation, anonymisation et sécurité disponibles.'
          }
        ],
        procurementNote: 'Documentation prête pour les marchés publics et conditions de SLA disponibles sur demande.'
      },
      whyNow: {
        title: 'Pourquoi Maintenant',
        points: [
          'Prêt avant la prochaine haute saison touristique',
          'Infrastructure réutilisable pour événements et campagnes',
          'Continuité politique : devient un atout municipal entre les mandats'
        ]
      },
      finalCta: {
        title: 'Planifier une Présentation',
        subtitle: 'Découvrez la plateforme en action et discutez de l\'mise en œuvre pour votre commune.',
        duration: 'Durée : 30–45 minutes',
        includes: [
          'Démonstration en direct de l\'application',
          'Visite guidée du CMS / City OS',
          'Exemple de rapport d\'analyse',
          'Feuille de route de mise en œuvre'
        ],
        button: 'Planifier une Présentation',
        contact: 'Ou contactez directement :',
        qrLabel: 'Scan pour cette page'
      },
      nav: {
        value: 'Valeur',
        proof: 'Preuve',
        implementation: 'Mise en œuvre',
        governance: 'Gouvernance',
        contact: 'Contact'
      }
    },
    'DE': {
      hero: {
        headline: 'Smarte Tourismus-Infrastruktur für Kommunen',
        subheadline: 'Verwandeln Sie Mobilität in kulturelle Intelligenz — mit voller kommunaler Governance.',
        bullets: [
          'Offizielle White-Label-Audioebene für das Gebiet',
          'Kommunale redaktionelle Kontrolle (City OS / CMS)',
          'Monatliche Berichte mit Metriken und Heatmaps'
        ],
        ctaPrimary: 'Präsentation vereinbaren',
        ctaSecondary: 'Zusammenfassung laden'
      },
      silentTerritory: {
        title: 'Das Stille Territorium',
        intro: 'Täglich durchqueren Tausende die Gemeinde ohne kulturelle Vermittlung:',
        problems: [
          'Ströme ohne Gebietslektüre. Tägliche Fahrten führen ohne Vermittlung an Kulturerbe vorbei.',
          'Untergenutzte öffentliche Chance. Erbebildung und lokale Identität außerhalb der Routine.',
          'Konzentration und Druck im Zentrum. Fehlen eines Instruments zur Steuerung der Verteilung und Ergebnismessung.'
        ]
      },
      whatIsTuggi: {
        title: 'Was Tuggi ist',
        oneLiner: 'Eine kommunale digitale Infrastrukturebene für offizielle, geolokalisierte Audio-Narrative.',
        paragraph: 'Die Kommune definiert, genehmigt und veröffentlicht; Tuggi betreibt die Infrastruktur und liefert Metriken. Tuggi ist ein offizieller kommunaler Vermögenswert, der jede Fahrt in eine Gelegenheit für Erbebildung und bürgerschaftliche Verbindung verwandelt.',
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
            title: 'Bürgerstolz & Erbebildung',
            bullets: [
              'Reduzierung der "Bewohner-Blindheit" gegenüber lokalem Erbe',
              'Informelle Bildung während der täglichen Mobilität',
              'Bürger werden zu Botschaftern des Erbes'
            ],
            indicator: 'Indikatoren: Wiedergaben pro Zone, Bindung, Top-Narrative'
          },
          {
            title: 'Narrative Souveränität (Governance)',
            bullets: [
              'Volle kommunale redaktionelle Kontrolle',
              'Historische Genauigkeit garantiert',
              'Offizielle mehrsprachige Versionen'
            ],
            indicator: 'Indikatoren: Versionen pro Sprache, redaktionelle Protokolle, Veröffentlichungsstatus'
          },
          {
            title: 'Territorialer Zusammenhalt & Flussmanagement',
            bullets: [
              'Verteilung auf Stadtteile und sekundäre POIs',
              'Druck auf das historische Zentrum reduzieren',
              'Touristische Ausgaben geografisch verteilen'
            ],
            indicator: 'Indikatoren: Heatmaps, Konsum pro Zone, sekundäre POIs'
          },
          {
            title: 'Bürgerkommunikation & Öffentlicher Nutzen',
            bullets: [
              'Institutioneller Audiokanal (Agenda, Warnungen)',
              'Kontextbezogene Kommunikation nach Zone',
              'Direkte Reichweite während des Transits'
            ],
            indicator: 'Indikatoren: Reichweite nach Gebiet und Zeitfenster'
          }
        ]
      },
      evidence: {
        title: 'Beweis, dass es funktioniert',
        subtitle: 'Echtes Produkt, echte Ergebnisse — sehen Sie selbst',
        videoLabel: 'Produkt-Demo (60s)',
        videoValidation: 'Trigger durch Geolokalisierung + Sprachwechsel',
        appScreensLabel: 'App-Screenshots',
        appValidation: 'Benutzererfahrung während der Fahrt',
        cmsScreensLabel: 'CMS / City OS',
        cmsValidation: 'Redaktionelle Kontrolle + Versionen',
        reportLabel: 'Beispiel Monatsbericht',
        reportValidation: 'Monatliche Metriken + Heatmaps'
      },
      operations: {
        title: 'Wie die Stadt es betreibt',
        subtitle: 'Klare Rollen, minimaler kommunaler Aufwand',
        modelLine: 'Betriebsmodell: klare Verantwortlichkeiten, minimaler kommunaler Aufwand.',
        municipalityTitle: 'Gemeinde',
        municipalityItems: [
          'Validiert historische Genauigkeit und institutionellen Ton',
          'Genehmigt Redaktionskalender und Prioritätszonen',
          'Definiert strategische Erbeziele'
        ],
        tuggiTitle: 'Tuggi',
        tuggiItems: [
          'Konfiguriert technisches Setup, POIs und White-Label',
          'Betreibt Infrastruktur und Qualitätskontrolle',
          'Wartet, berichtet und führt saisonale Updates durch'
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
              'Offizielles POI-Inventar veröffentlicht',
              'White-Label konfiguriert und betriebsbereit',
              'Erster Redaktionszyklus genehmigt (Inhalte + Sprachen)'
            ]
          },
          {
            title: 'Phase 2: Betrieb & Intelligenz',
            duration: 'Monate 3–12',
            items: [
              'Monatsbericht und Empfehlungen',
              'Saisonale Updates und Kulturagenda',
              'Erweiterung nach Zonen und Themenrouten'
            ]
          }
        ],
        timeToValue: {
          title: 'Time-to-Value',
          description: 'Erster Wert in 30–60 Tagen: Plattform veröffentlicht und messend.'
        }
      },
      governance: {
        title: 'Daten, Governance & Compliance',
        subtitle: 'Gebaut für Anforderungen des öffentlichen Sektors',
        items: [
          {
            icon: 'minimize',
            title: 'Datenminimierung',
            description: 'Nur essentielle und anonymisierte Daten.'
          },
          {
            icon: 'privacy',
            title: 'Privacy by Design',
            description: 'Nutzerkontrolle und DSGVO-Konformität.'
          },
          {
            icon: 'security',
            title: 'Audit-Trail',
            description: 'Profilbasierte Zugriffe, Veröffentlichungsprotokolle und Audit.'
          },
          {
            icon: 'hosting',
            title: 'IT-Dokumentation',
            description: 'Minimierung, Anonymisierung und Sicherheit verfügbar.'
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
        title: 'Präsentation vereinbaren',
        subtitle: 'Sehen Sie die Plattform in Aktion und besprechen Sie die Implementierung für Ihre Gemeinde.',
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
        headline: 'Infrastruttura di Turismo Intelligente per i Comuni',
        subheadline: 'Trasforma la mobilità in intelligenza culturale — con piena governance editoriale comunale.',
        bullets: [
          'Layer audio ufficiale white label per il territorio',
          'Controllo editoriale comunale (City OS / CMS)',
          'Report mensili con metriche e mappe di calore'
        ],
        ctaPrimary: 'Programma Presentazione',
        ctaSecondary: 'Scarica Riassunto'
      },
      silentTerritory: {
        title: 'Il Territorio Silenzioso',
        intro: 'Ogni giorno, migliaia attraversano il Comune senza mediazione culturale:',
        problems: [
          'Flussi senza lettura del territorio. Gli spostamenti quotidiani incrociano il patrimonio senza mediazione.',
          'Opportunità pubblica sottoutilizzata. Educazione al patrimonio e identità locale fuori dalla routine.',
          'Concentrazione e pressione al centro. Manca uno strumento per guidare la dispersione e misurare i risultati.'
        ]
      },
      whatIsTuggi: {
        title: 'Cos\'è Tuggi',
        oneLiner: 'Uno strato di infrastruttura digitale comunale per narrazioni audio ufficiali e geolocalizzate.',
        paragraph: 'Il Comune definisce, approva e pubblica; Tuggi gestisce l\'infrastruttura e fornisce le metriche. Tuggi è un asset comunale ufficiale che trasforma ogni spostamento in un\'opportunità di educazione al patrimonio e connessione civica.',
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
            indicator: 'Indicatori: ascolti per zona, retention, top narrazioni'
          },
          {
            title: 'Sovranità Narrativa (Governance)',
            bullets: [
              'Pieno controllo editoriale comunale',
              'Accuratezza storica garantita',
              'Versioni multilingue ufficiali'
            ],
            indicator: 'Indicatori: versioni per lingua, log editoriali, stato di pubblicazione'
          },
          {
            title: 'Coesione Territoriale & Gestione dei Flussi',
            bullets: [
              'Dispersione verso quartieri e POI secondari',
              'Ridurre la pressione sul centro storico',
              'Distribuire la spesa turistica geograficamente'
            ],
            indicator: 'Indicatori: mappe di calore, consumo per zona, POI secondari'
          },
          {
            title: 'Comunicazione Civica & Utilità Pubblica',
            bullets: [
              'Canale audio istituzionale (agenda, avvisi)',
              'Comunicazione contestuale per zona',
              'Portata diretta durante il transito'
            ],
            indicator: 'Indicatori: portata per area e fascia oraria'
          }
        ]
      },
      evidence: {
        title: 'Prova che Funziona',
        subtitle: 'Prodotto reale, risultati reali — guarda tu stesso',
        videoLabel: 'Demo Prodotto (60s)',
        videoValidation: 'Trigger per geolocalizzazione + cambio lingua',
        appScreensLabel: 'Screenshot dell\'App',
        appValidation: 'Esperienza utente durante il transito',
        cmsScreensLabel: 'CMS / City OS',
        cmsValidation: 'Controllo editoriale + versioni',
        reportLabel: 'Esempio Report Mensile',
        reportValidation: 'Metriche mensili + mappe di calore'
      },
      operations: {
        title: 'Come il Comune lo Opera',
        subtitle: 'Ruoli chiari, onere comunale minimo',
        modelLine: 'Modello operativo: responsabilità chiare, sforzo comunale minimo.',
        municipalityTitle: 'Comune',
        municipalityItems: [
          'Valida l\'accuratezza storica e il tono istituzionale',
          'Approva il calendario editoriale e le zone prioritarie',
          'Definisce gli obiettivi strategici del patrimonio'
        ],
        tuggiTitle: 'Tuggi',
        tuggiItems: [
          'Configura il setup tecnico, i POI e la white-label',
          'Gestisce l\'infrastruttura e il controllo qualità',
          'Mantiene, riporta ed esegue gli aggiornamenti stagionali'
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
              'Inventario ufficiale dei POI pubblicato',
              'White label configurata e pronta all\'uso',
              'Primo ciclo editoriale approvato (contenuti + lingue)'
            ]
          },
          {
            title: 'Fase 2: Operazione & Intelligenza',
            duration: 'Mesi 3–12',
            items: [
              'Report mensile e raccomandazioni',
              'Aggiornamenti stagionali e agenda culturale',
              'Espansione per zone e percorsi tematici'
            ]
          }
        ],
        timeToValue: {
          title: 'Time-to-Value',
          description: 'Primo valore in 30–60 giorni: piattaforma pubblicata e attiva.'
        }
      },
      governance: {
        title: 'Dati, Governance & Conformità',
        subtitle: 'Costruito per i requisiti del settore pubblico',
        items: [
          {
            icon: 'minimize',
            title: 'Minimizzazione Dati',
            description: 'Solo dati essenziali e anonimizzati.'
          },
          {
            icon: 'privacy',
            title: 'Privacy by Design',
            description: 'Controllo utente e conformità GDPR.'
          },
          {
            icon: 'security',
            title: 'Audit Trail',
            description: 'Accessi per profilo, registri di pubblicazione e audit.'
          },
          {
            icon: 'hosting',
            title: 'Documentazione IT',
            description: 'Minimizzazione, anonimizzazione e sicurezza disponibili.'
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
        title: 'Programma Presentazione',
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
        qrLabel: 'Scan per questa pagina'
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
  const pageLoadTime = useRef(Date.now());
  const trackedScrollMilestones = useRef(new Set<number>());
  const trackedTimeMilestones = useRef(new Set<number>());
  const sectionVisibility = useRef<Record<string, { startTime: number; maxVisibility: number }>>({});

  // Helper to send GA4 events
  const trackEvent = useCallback((eventName: string, params: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, {
        page_type: 'gov',
        language: currentLanguage,
        ...params
      });
    }
    // Dev logging
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Gov Analytics:', eventName, params);
    }
  }, [currentLanguage]);

  // ============================================================================
  // ANALYTICS: Page View + Referrer + Device Info
  // ============================================================================
  useEffect(() => {
    const referrer = document.referrer;
    const urlParams = new URLSearchParams(window.location.search);
    
    trackEvent('gov_page_view', {
      event_category: 'Gov Landing',
      referrer: referrer || 'direct',
      referrer_domain: referrer ? new URL(referrer).hostname : 'direct',
      utm_source: urlParams.get('utm_source') || 'none',
      utm_medium: urlParams.get('utm_medium') || 'none',
      utm_campaign: urlParams.get('utm_campaign') || 'none',
      utm_content: urlParams.get('utm_content') || 'none',
      device_type: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
      screen_width: window.innerWidth,
      screen_height: window.innerHeight,
      viewport_width: document.documentElement.clientWidth,
      browser: navigator.userAgent.includes('Chrome') ? 'Chrome' : 
               navigator.userAgent.includes('Firefox') ? 'Firefox' :
               navigator.userAgent.includes('Safari') ? 'Safari' : 'Other',
      timestamp: new Date().toISOString()
    });
  }, [trackEvent]);

  // ============================================================================
  // ANALYTICS: Scroll Depth Tracking
  // ============================================================================
  useEffect(() => {
    const milestones = [25, 50, 75, 90, 100];
    
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollHeight > 0 ? Math.round((window.scrollY / scrollHeight) * 100) : 0;
      
      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && !trackedScrollMilestones.current.has(milestone)) {
          trackedScrollMilestones.current.add(milestone);
          trackEvent('gov_scroll_depth', {
            event_category: 'Gov Engagement',
            scroll_percentage: milestone,
            time_to_scroll: Math.round((Date.now() - pageLoadTime.current) / 1000)
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [trackEvent]);

  // ============================================================================
  // ANALYTICS: Time on Page Milestones
  // ============================================================================
  useEffect(() => {
    const timeMilestones = [30, 60, 120, 180, 300]; // seconds
    
    const interval = setInterval(() => {
      const timeSpent = Math.floor((Date.now() - pageLoadTime.current) / 1000);
      
      timeMilestones.forEach(milestone => {
        if (timeSpent >= milestone && !trackedTimeMilestones.current.has(milestone)) {
          trackedTimeMilestones.current.add(milestone);
          trackEvent('gov_time_on_page', {
            event_category: 'Gov Engagement',
            time_milestone_seconds: milestone,
            scroll_depth_at_milestone: Math.round(
              (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
            )
          });
        }
      });
    }, 5000); // Check every 5 seconds

    return () => clearInterval(interval);
  }, [trackEvent]);

  // ============================================================================
  // ANALYTICS: Section Visibility (Intersection Observer)
  // ============================================================================
  useEffect(() => {
    const sections = [
      { id: 'gov-hero', name: 'Hero' },
      { id: 'gov-silent-territory', name: 'Silent Territory' },
      { id: 'gov-solution', name: 'Solution' },
      { id: 'gov-pillars', name: 'Three Pillars' },
      { id: 'gov-evidence', name: 'Evidence' },
      { id: 'gov-lifecycle', name: 'Content Lifecycle' },
      { id: 'gov-cta', name: 'Final CTA' }
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          const sectionName = sections.find(s => s.id === sectionId)?.name || sectionId;
          
          if (entry.isIntersecting) {
            if (!sectionVisibility.current[sectionId]) {
              sectionVisibility.current[sectionId] = {
                startTime: Date.now(),
                maxVisibility: 0
              };
              trackEvent('gov_section_enter', {
                event_category: 'Gov Engagement',
                section_name: sectionName,
                time_to_section: Math.round((Date.now() - pageLoadTime.current) / 1000)
              });
            }
            sectionVisibility.current[sectionId].maxVisibility = Math.max(
              sectionVisibility.current[sectionId].maxVisibility,
              Math.round(entry.intersectionRatio * 100)
            );
          } else if (sectionVisibility.current[sectionId]) {
            const timeVisible = Math.round((Date.now() - sectionVisibility.current[sectionId].startTime) / 1000);
            if (timeVisible > 1) {
              trackEvent('gov_section_exit', {
                event_category: 'Gov Engagement',
                section_name: sectionName,
                time_visible_seconds: timeVisible,
                max_visibility_percent: sectionVisibility.current[sectionId].maxVisibility
              });
            }
            delete sectionVisibility.current[sectionId];
          }
        });
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1.0] }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [trackEvent]);

  // ============================================================================
  // ANALYTICS: Exit Intent Detection
  // ============================================================================
  useEffect(() => {
    let hasTrackedExit = false;
    
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTrackedExit) {
        hasTrackedExit = true;
        const timeOnPage = Math.round((Date.now() - pageLoadTime.current) / 1000);
        const scrollDepth = Math.round(
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        );
        
        trackEvent('gov_exit_intent', {
          event_category: 'Gov Engagement',
          time_on_page_seconds: timeOnPage,
          scroll_depth_at_exit: scrollDepth,
          sections_viewed: Object.keys(sectionVisibility.current).length
        });
      }
    };

    // Track page unload
    const handleBeforeUnload = () => {
      const timeOnPage = Math.round((Date.now() - pageLoadTime.current) / 1000);
      trackEvent('gov_page_exit', {
        event_category: 'Gov Engagement',
        total_time_seconds: timeOnPage,
        final_scroll_depth: Math.round(
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        )
      });
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [trackEvent]);

  const handleCTAClick = (ctaType: string, position: string = 'unknown') => {
    if (onCTAClick) {
      onCTAClick(ctaType, position);
    }
    
    // Track GA4 event with enhanced data
    trackEvent(`gov_cta_${ctaType}`, {
      event_category: 'Gov Landing',
      event_label: ctaType,
      position: position,
      time_to_click: Math.round((Date.now() - pageLoadTime.current) / 1000),
      scroll_depth_at_click: Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      )
    });

    // Handle external links
    if (ctaType === 'cta_meeting_click') {
      window.open('https://calendar.app.google/vXKcgKDz8oo4eTyG9', '_blank');
    } else if (ctaType === 'pdf_download') {
      const pdfMap: Record<string, string> = {
        'PT': 'tuggi-smart-tour-infra-pt.pdf',
        'ES': 'tuggi-smart-tour-infra-es.pdf',
        'EN': 'tuggi-smart-tour-infra-en.pdf'
      };
      
      const fileName = pdfMap[currentLanguage] || pdfMap['EN'];
      // Usar origin para garantir que o caminho seja absoluto da raiz e não relativo ao idioma
      const fileUrl = `${window.location.origin}/assets/${fileName}`;
      window.open(fileUrl, '_blank');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      trackEvent('gov_internal_navigation', {
        event_category: 'Gov Navigation',
        target_section: sectionId
      });
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
      <section id="gov-hero" className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-tuggi-primary/5 overflow-hidden">
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
      <section id="gov-silent-territory" className="py-16 lg:py-20 bg-neutral-50">
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
      <section id="gov-solution" className="py-16 lg:py-20">
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
      <section id="gov-pillars" className="py-16 lg:py-24 bg-gradient-to-b from-white to-neutral-50">
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
      <section id="gov-evidence" className="py-16 lg:py-24 bg-neutral-900 text-white">
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
              <h3 className="font-semibold text-white mb-1">{content.evidence.videoLabel}</h3>
              <p className="text-xs text-tuggi-primary font-medium">{content.evidence.videoValidation}</p>
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
              <h3 className="font-semibold text-white mb-1">{content.evidence.appScreensLabel}</h3>
              <p className="text-xs text-tuggi-primary font-medium">{content.evidence.appValidation}</p>
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
              <h3 className="font-semibold text-white mb-1">{content.evidence.cmsScreensLabel}</h3>
              <p className="text-xs text-tuggi-primary font-medium">{content.evidence.cmsValidation}</p>
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
              <h3 className="font-semibold text-white mb-1">{content.evidence.reportLabel}</h3>
              <p className="text-xs text-tuggi-primary font-medium">{content.evidence.reportValidation}</p>
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
            <p className="text-lg text-neutral-600 mb-4">
              {content.operations.subtitle}
            </p>
            <p className="text-neutral-500 max-w-2xl mx-auto italic">
              {content.operations.modelLine}
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
      <section id="gov-cta" className="py-16 lg:py-20 bg-gradient-to-br from-tuggi-primary to-tuggi-primary-dark text-white">
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
              href="mailto:leandro.ramos@tuggi.app" 
              className="text-tuggi-primary hover:text-tuggi-primary-dark font-medium text-lg"
            >
              leandro.ramos@tuggi.app
            </a>

            {/* QR Code Placeholder */}
            {/* <div className="mt-12 pt-8 border-t border-neutral-200">
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
            </div> */}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GovPage;
