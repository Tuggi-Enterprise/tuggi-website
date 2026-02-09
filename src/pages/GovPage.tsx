import React, { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3,
  Map,
  Shield,
  Clock,
  Play,
  ArrowRight,
  Database,
  Globe,
  AudioLines,
  TrendingUp,
  Layers,
  Lock,
  Eye,
  FileCheck,
  Languages,
  Activity,
  Workflow,
  Download,
  ListChecks
} from 'lucide-react';

// ============================================================================
// TYPES
// ============================================================================

interface GovPageProps {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, position: string) => void;
}

// ============================================================================
// TRANSLATIONS
// ============================================================================

const getTranslations = (lang: string) => {
  const translations: Record<string, any> = {
    PT: {
      hero: {
        badge: 'Tuggi City OS v4.2',
        title: 'Infraestrutura de Inteligência Territorial',
        subtitle: 'O sistema operacional oficial para gerenciar inventário, conteúdo multilíngue e dados de visitação em tempo real.',
        features: [
          { text: 'Implantação em 30 dias' },
          { text: 'Governança Auditável' },
          { text: 'BI Territorial' }
        ],
        ctaPrimary: 'Agendar Apresentação',
        ctaSecondary: 'Ver em Ação'
      },
      video: {
        placeholder: 'Vídeo de Apresentação Institucional'
      },
      cycle: {
        title: 'O que a gestão não enxerga, o City OS resolve.',
        subtitle: 'Transformamos dados brutos e inventários dispersos em uma infraestrutura coordenada de turismo inteligente.',
        steps: [
          { step: '01', title: 'Curadoria & Governança', desc: 'A Secretaria centraliza o inventário e aprova as narrativas oficiais em múltiplos idiomas.' },
          { step: '02', title: 'Ativação Territorial', desc: 'O sistema ativa os conteúdos via áudio geossincronizado, guiando o fluxo de visitantes em tempo real.' },
          { step: '03', title: 'Inteligência de Dados', desc: 'O dashboard captura o comportamento real no território, gerando mapas de calor e rankings de demanda.' }
        ]
      },
      capabilities: {
        title: 'Recursos Integrados',
        subtitle: 'Módulos projetados para a escala e os requisitos de segurança do setor público.',
        pillars: [
          {
            title: 'Inventário e Operação',
            features: [
              'Geolocalização precisa de POIs* em escala',
              'Filtros administrativos por status e cobertura',
              'Importação massiva e ações laboratoriais em lote',
              'Gestão de categorias e ativos territoriais'
            ]
          },
          {
            title: 'Conteúdo e Governança',
            features: [
              'Escrita apoiada por IA com verificação factual',
              'Workflow de aprovação auditável (Rascunho a Publicado)',
              'Score de qualidade editorial e referências',
              'Soberania narrativa do município garantida'
            ]
          },
          {
            title: 'Áudio & Multilíngue',
            features: [
              'Geração de narração em +6 idiomas instantaneamente',
              'Vozes profissionais via rede neural estável',
              'Fidelidade na tradução e termos técnicos locais',
              'Versionamento de áudio para atualizações sazonais'
            ]
          },
          {
            title: 'Inteligência Territorial',
            features: [
              'Biometria de visitação por idioma e origem',
              'Mapas de calor de concentração de demanda',
              'Relatórios mensais exportáveis para gestão',
              'Métricas de engajamento e retenção no território'
            ]
          }
        ]
      },
      metrics: {
        title: 'Gestão Eficiente',
        subtitle: 'O que o Município passa a medir em tempo real.',
        items: [
          { label: 'Visitação Real', value: 'Ranking POIs' },
          { label: 'Origem do Visitante', value: 'Distribuição Idioma' },
          { label: 'Engajamento', value: 'Score Experiência' },
          { label: 'Concentração', value: 'Mapas de Calor' },
          { label: 'Conteúdo', value: 'Audios Publicados' },
          { label: 'Sazonalidade', value: 'Relatórios Export.' },
          { label: 'Eficiência', value: 'Ações em Lote' },
          { label: 'Sinalização', value: 'Cobertura (%)' }
        ]
      },
      implementation: {
        title: 'Operação em 30 dias',
        subtitle: 'Processo estruturado de implementação que garante autonomia e governança imediata.',
        phases: [
          { phase: '01', title: 'Fase 1: Setup & Inventário', desc: 'Configuração de acessos, importação de POIs oficiais e ativação da identidade municipal.' },
          { phase: '02', title: 'Fase 2: Curadoria & Publicação', desc: 'Produção de conteúdos via IA, revisão editorial e publicação dos primeiros roteiros territoriais.' },
          { phase: '03', title: 'Operação Contínua', desc: 'Inteligência de dados mensais, mapas de calor e expansão progressiva por zonas turísticas.' }
        ],
        security: {
          title: 'Segurança & Conformidade',
          items: [
            'Controle de Dados Municipal (GDPR/LGPD)',
            'Infraestrutura em Nuvem Auditável',
            'Histórico de Alterações Publicitáveis',
            'Soberania Narrativa Garantida'
          ],
          disclaimer: 'Desenvolvido para atender aos requisitos de procurement e transparência pública conforme normativas vigentes.'
        }
      },
      cta: {
        title: 'Transforme a gestão do seu destino agora.',
        subtitle: 'Agende uma apresentação técnica exclusiva para sua secretaria e conheça o Tuggi City OS em operação.',
        button: 'Agendar Apresentação',
        implemented: 'Implementado em escala',
        modernManagement: 'Gestão moderna de destinos'
      },
      footer: {
        privacy: 'Privacidade',
        terms: 'Termos de Uso',
        copyright: '© 2026 Tuggi Enterprise. Todos os direitos reservados.'
      }
    },
    EN: {
      hero: {
        badge: 'Tuggi City OS v4.2',
        title: 'Territorial Intelligence Infrastructure',
        subtitle: 'The official operating system for managing inventory, multilingual content, and real-time visitation data.',
        features: [
          { text: 'Implementation in 30 days' },
          { text: 'Auditable Governance' },
          { text: 'Territorial BI' }
        ],
        ctaPrimary: 'Schedule Presentation',
        ctaSecondary: 'See in Action'
      },
      video: {
        placeholder: 'Institutional Presentation Video'
      },
      cycle: {
        title: 'What management can\'t see, City OS solves.',
        subtitle: 'We transform raw data and dispersed inventories into a coordinated smart tourism infrastructure.',
        steps: [
          { step: '01', title: 'Curation & Governance', desc: 'The Secretariat centralizes the inventory and approves official narratives in multiple languages.' },
          { step: '02', title: 'Territorial Activation', desc: 'The system activates content via geo-synchronized audio, guiding visitor flow in real time.' },
          { step: '03', title: 'Data Intelligence', desc: 'The dashboard captures real behavior in the territory, generating heat maps and demand rankings.' }
        ]
      },
      capabilities: {
        title: 'Integrated Resources',
        subtitle: 'Modules designed for the scale and security requirements of the public sector.',
        pillars: [
          {
            title: 'Inventory and Operation',
            features: [
              'Precise POI geolocation at scale',
              'Administrative filters by status and coverage',
              'Mass import and batch laboratory actions',
              'Category and territorial asset management'
            ]
          },
          {
            title: 'Content and Governance',
            features: [
              'AI-assisted writing with factual verification',
              'Auditable approval workflow (Draft to Published)',
              'Editorial quality and reference scoring',
              'Guaranteed municipal narrative sovereignty'
            ]
          },
          {
            title: 'Audio & Multilingual',
            features: [
              'Narration generation in 6+ languages instantly',
              'Professional voices via stable neural network',
              'Translation fidelity and local technical terms',
              'Audio versioning for seasonal updates'
            ]
          },
          {
            title: 'Territorial Intelligence',
            features: [
              'Visitation biometrics by language and origin',
              'Demand concentration heat maps',
              'Monthly exportable management reports',
              'Engagement and retention metrics in the territory'
            ]
          }
        ]
      },
      metrics: {
        title: 'Efficient Management',
        subtitle: 'What the Municipality can now measure in real time.',
        items: [
          { label: 'Real Visitation', value: 'POI Ranking' },
          { label: 'Visitor Origin', value: 'Language Distribution' },
          { label: 'Engagement', value: 'Experience Score' },
          { label: 'Concentration', value: 'Heat Maps' },
          { label: 'Content', value: 'Published Audios' },
          { label: 'Seasonality', value: 'Exported Reports' },
          { label: 'Efficiency', value: 'Batch Actions' },
          { label: 'Signage', value: 'Coverage (%)' }
        ]
      },
      implementation: {
        title: 'Operation in 30 days',
        subtitle: 'Structured implementation process that guarantees immediate autonomy and governance.',
        phases: [
          { phase: '01', title: 'Phase 1: Setup & Inventory', desc: 'Access configuration, official POI import, and municipal identity activation.' },
          { phase: '02', title: 'Phase 2: Curation & Publication', desc: 'AI content production, editorial review, and publication of the first territorial routes.' },
          { phase: '03', title: 'Continuous Operation', desc: 'Monthly data intelligence, heat maps, and progressive expansion by tourist zones.' }
        ],
        security: {
          title: 'Security & Compliance',
          items: [
            'Municipal Data Control (GDPR/LGPD)',
            'Auditable Cloud Infrastructure',
            'Publishable Change History',
            'Guaranteed Narrative Sovereignty'
          ],
          disclaimer: 'Developed to meet procurement and public transparency requirements according to current regulations.'
        }
      },
      cta: {
        title: 'Transform your destination management now.',
        subtitle: 'Schedule an exclusive technical presentation for your secretariat and see Tuggi City OS in operation.',
        button: 'Schedule Presentation',
        implemented: 'Implemented at scale',
        modernManagement: 'Modern destination management'
      },
      footer: {
        privacy: 'Privacy',
        terms: 'Terms of Use',
        copyright: '© 2026 Tuggi Enterprise. All rights reserved.'
      }
    },
    ES: {
      hero: {
        badge: 'Tuggi City OS v4.2',
        title: 'Infraestructura de Inteligencia Territorial',
        subtitle: 'El sistema operativo oficial para gestionar inventario, contenido multilingüe y datos de visitación en tiempo real.',
        features: [
          { text: 'Implementación en 30 días' },
          { text: 'Gobernanza Auditable' },
          { text: 'BI Territorial' }
        ],
        ctaPrimary: 'Agendar Presentación',
        ctaSecondary: 'Ver en Acción'
      },
      video: {
        placeholder: 'Video de Presentación Institucional'
      },
      cycle: {
        title: 'Lo que la gestión no ve, City OS lo resuelve.',
        subtitle: 'Transformamos datos brutos e inventarios dispersos en una infraestructura coordinada de turismo inteligente.',
        steps: [
          { step: '01', title: 'Curaduría y Gobernanza', desc: 'La Secretaría centraliza el inventario y aprueba las narrativas oficiales en múltiples idiomas.' },
          { step: '02', title: 'Activación Territorial', desc: 'El sistema activa los contenidos via audio geosincronizado, guiando el flujo de visitantes en tiempo real.' },
          { step: '03', title: 'Inteligencia de Datos', desc: 'El dashboard captura el comportamiento real en el territorio, generando mapas de calor y rankings de demanda.' }
        ]
      },
      capabilities: {
        title: 'Recursos Integrados',
        subtitle: 'Módulos diseñados para la escala y los requisitos de seguridad del sector público.',
        pillars: [
          {
            title: 'Inventario y Operación',
            features: [
              'Geolocalización precisa de POIs a escala',
              'Filtros administrativos por estado y cobertura',
              'Importación masiva y acciones de laboratorio en lote',
              'Gestión de categorías y activos territoriales'
            ]
          },
          {
            title: 'Contenido y Gobernanza',
            features: [
              'Escritura asistida por IA con verificación factual',
              'Flujo de aprobación auditable (Borrador a Publicado)',
              'Score de calidad editorial y referencias',
              'Soberanía narrativa del municipio garantizada'
            ]
          },
          {
            title: 'Audio y Multilingüe',
            features: [
              'Generación de narración en +6 idiomas instantáneamente',
              'Voces profesionales via red neuronal estable',
              'Fidelidad en la traducción y términos técnicos locales',
              'Versionado de audio para actualizaciones estacionales'
            ]
          },
          {
            title: 'Inteligencia Territorial',
            features: [
              'Biometría de visitación por idioma y origen',
              'Mapas de calor de concentración de demanda',
              'Informes mensuales exportables para gestión',
              'Métricas de engagement y retención en el territorio'
            ]
          }
        ]
      },
      metrics: {
        title: 'Gestión Eficiente',
        subtitle: 'Lo que el Municipio puede medir ahora en tiempo real.',
        items: [
          { label: 'Visitación Real', value: 'Ranking POIs' },
          { label: 'Origen del Visitante', value: 'Distribución Idioma' },
          { label: 'Engagement', value: 'Score Experiencia' },
          { label: 'Concentración', value: 'Mapas de Calor' },
          { label: 'Contenido', value: 'Audios Publicados' },
          { label: 'Estacionalidad', value: 'Informes Export.' },
          { label: 'Eficiencia', value: 'Acciones en Lote' },
          { label: 'Señalización', value: 'Cobertura (%)' }
        ]
      },
      implementation: {
        title: 'Operación en 30 días',
        subtitle: 'Proceso estructurado de implementación que garantiza autonomía y gobernanza inmediata.',
        phases: [
          { phase: '01', title: 'Fase 1: Setup e Inventario', desc: 'Configuración de accesos, importación de POIs oficiales y activación de la identidad municipal.' },
          { phase: '02', title: 'Fase 2: Curaduría y Publicación', desc: 'Producción de contenidos via IA, revisión editorial y publicación de las primeras rutas territoriales.' },
          { phase: '03', title: 'Operación Continua', desc: 'Inteligencia de datos mensual, mapas de calor y expansión progresiva por zonas turísticas.' }
        ],
        security: {
          title: 'Seguridad y Conformidad',
          items: [
            'Control de Datos Municipal (GDPR/LGPD)',
            'Infraestructura en Nube Auditable',
            'Historial de Cambios Publicables',
            'Soberanía Narrativa Garantizada'
          ],
          disclaimer: 'Desarrollado para cumplir con los requisitos de contratación y transparencia pública según normativas vigentes.'
        }
      },
      cta: {
        title: 'Transforma la gestión de tu destino ahora.',
        subtitle: 'Agenda una presentación técnica exclusiva para tu secretaría y conoce el Tuggi City OS en operación.',
        button: 'Agendar Presentación',
        implemented: 'Implementado a escala',
        modernManagement: 'Gestión moderna de destinos'
      },
      footer: {
        privacy: 'Privacidad',
        terms: 'Términos de Uso',
        copyright: '© 2026 Tuggi Enterprise. Todos los derechos reservados.'
      }
    },
    FR: {
      hero: {
        badge: 'Tuggi City OS v4.2',
        title: 'Infrastructure d\'Intelligence Territoriale',
        subtitle: 'Le système d\'exploitation officiel pour gérer l\'inventaire, le contenu multilingue et les données de visitation en temps réel.',
        features: [
          { text: 'Implémentation en 30 jours' },
          { text: 'Gouvernance Auditable' },
          { text: 'BI Territoriale' }
        ],
        ctaPrimary: 'Planifier une Présentation',
        ctaSecondary: 'Voir en Action'
      },
      video: {
        placeholder: 'Vidéo de Présentation Institutionnelle'
      },
      cycle: {
        title: 'Ce que la gestion ne voit pas, City OS le résout.',
        subtitle: 'Nous transformons les données brutes et les inventaires dispersés en une infrastructure coordonnée de tourisme intelligent.',
        steps: [
          { step: '01', title: 'Curation & Gouvernance', desc: 'Le Secrétariat centralise l\'inventaire et approuve les récits officiels en plusieurs langues.' },
          { step: '02', title: 'Activation Territoriale', desc: 'Le système active les contenus via audio géo-synchronisé, guidant le flux de visiteurs en temps réel.' },
          { step: '03', title: 'Intelligence des Données', desc: 'Le tableau de bord capture le comportement réel sur le territoire, générant des cartes de chaleur et des classements de demande.' }
        ]
      },
      capabilities: {
        title: 'Ressources Intégrées',
        subtitle: 'Modules conçus pour l\'échelle et les exigences de sécurité du secteur public.',
        pillars: [
          {
            title: 'Inventaire et Opération',
            features: [
              'Géolocalisation précise des POI à grande échelle',
              'Filtres administratifs par statut et couverture',
              'Importation massive et actions de laboratoire en lot',
              'Gestion des catégories et des actifs territoriaux'
            ]
          },
          {
            title: 'Contenu et Gouvernance',
            features: [
              'Rédaction assistée par IA avec vérification factuelle',
              'Workflow d\'approbation auditable (Brouillon à Publié)',
              'Score de qualité éditoriale et références',
              'Souveraineté narrative de la municipalité garantie'
            ]
          },
          {
            title: 'Audio & Multilingue',
            features: [
              'Génération de narration en +6 langues instantanément',
              'Voix professionnelles via réseau neuronal stable',
              'Fidélité de traduction et termes techniques locaux',
              'Versionnage audio pour mises à jour saisonnières'
            ]
          },
          {
            title: 'Intelligence Territoriale',
            features: [
              'Biométrie de visite par langue et origine',
              'Cartes de chaleur de concentration de la demande',
              'Rapports mensuels exportables pour la gestion',
              'Métriques d\'engagement et de rétention sur le territoire'
            ]
          }
        ]
      },
      metrics: {
        title: 'Gestion Efficace',
        subtitle: 'Ce que la Municipalité peut désormais mesurer en temps réel.',
        items: [
          { label: 'Visitation Réelle', value: 'Classement POI' },
          { label: 'Origine du Visiteur', value: 'Distribution Langue' },
          { label: 'Engagement', value: 'Score Expérience' },
          { label: 'Concentration', value: 'Cartes de Chaleur' },
          { label: 'Contenu', value: 'Audios Publiés' },
          { label: 'Saisonnalité', value: 'Rapports Export.' },
          { label: 'Efficacité', value: 'Actions en Lot' },
          { label: 'Signalisation', value: 'Couverture (%)' }
        ]
      },
      implementation: {
        title: 'Opération en 30 jours',
        subtitle: 'Processus d\'implémentation structuré garantissant autonomie et gouvernance immédiates.',
        phases: [
          { phase: '01', title: 'Phase 1: Setup & Inventaire', desc: 'Configuration des accès, importation des POI officiels et activation de l\'identité municipale.' },
          { phase: '02', title: 'Phase 2: Curation & Publication', desc: 'Production de contenus via IA, révision éditoriale et publication des premiers itinéraires territoriaux.' },
          { phase: '03', title: 'Opération Continue', desc: 'Intelligence de données mensuelle, cartes de chaleur et expansion progressive par zones touristiques.' }
        ],
        security: {
          title: 'Sécurité & Conformité',
          items: [
            'Contrôle des Données Municipales (RGPD/LGPD)',
            'Infrastructure Cloud Auditable',
            'Historique des Modifications Publiable',
            'Souveraineté Narrative Garantie'
          ],
          disclaimer: 'Développé pour répondre aux exigences d\'approvisionnement et de transparence publique selon les réglementations en vigueur.'
        }
      },
      cta: {
        title: 'Transformez la gestion de votre destination maintenant.',
        subtitle: 'Planifiez une présentation technique exclusive pour votre secrétariat et découvrez Tuggi City OS en opération.',
        button: 'Planifier une Présentation',
        implemented: 'Implémenté à grande échelle',
        modernManagement: 'Gestion moderne des destinations'
      },
      footer: {
        privacy: 'Confidentialité',
        terms: 'Conditions d\'Utilisation',
        copyright: '© 2026 Tuggi Enterprise. Tous droits réservés.'
      }
    },
    DE: {
      hero: {
        badge: 'Tuggi City OS v4.2',
        title: 'Territoriale Intelligenz-Infrastruktur',
        subtitle: 'Das offizielle Betriebssystem zur Verwaltung von Inventar, mehrsprachigen Inhalten und Echtzeit-Besucherdaten.',
        features: [
          { text: 'Implementierung in 30 Tagen' },
          { text: 'Auditierbare Governance' },
          { text: 'Territoriales BI' }
        ],
        ctaPrimary: 'Präsentation Planen',
        ctaSecondary: 'In Aktion Sehen'
      },
      video: {
        placeholder: 'Institutionelles Präsentationsvideo'
      },
      cycle: {
        title: 'Was das Management nicht sieht, löst City OS.',
        subtitle: 'Wir transformieren Rohdaten und verstreute Inventare in eine koordinierte Smart-Tourism-Infrastruktur.',
        steps: [
          { step: '01', title: 'Kuration & Governance', desc: 'Das Sekretariat zentralisiert das Inventar und genehmigt offizielle Narrative in mehreren Sprachen.' },
          { step: '02', title: 'Territoriale Aktivierung', desc: 'Das System aktiviert Inhalte über geo-synchronisiertes Audio und leitet den Besucherstrom in Echtzeit.' },
          { step: '03', title: 'Datenintelligenz', desc: 'Das Dashboard erfasst das reale Verhalten im Gebiet und generiert Heatmaps und Nachfrage-Rankings.' }
        ]
      },
      capabilities: {
        title: 'Integrierte Ressourcen',
        subtitle: 'Module für die Skalierung und Sicherheitsanforderungen des öffentlichen Sektors konzipiert.',
        pillars: [
          {
            title: 'Inventar und Betrieb',
            features: [
              'Präzise POI-Geolokalisierung im großen Maßstab',
              'Administrative Filter nach Status und Abdeckung',
              'Massenimport und Batch-Laboraktionen',
              'Kategorie- und territorialer Asset-Management'
            ]
          },
          {
            title: 'Inhalt und Governance',
            features: [
              'KI-unterstütztes Schreiben mit Faktenverifizierung',
              'Auditierbarer Genehmigungsworkflow (Entwurf bis Veröffentlicht)',
              'Redaktionelle Qualitäts- und Referenzbewertung',
              'Garantierte kommunale narrative Souveränität'
            ]
          },
          {
            title: 'Audio & Mehrsprachig',
            features: [
              'Sofortige Narrationsgenerierung in 6+ Sprachen',
              'Professionelle Stimmen über stabiles neuronales Netzwerk',
              'Übersetzungstreue und lokale Fachbegriffe',
              'Audio-Versionierung für saisonale Updates'
            ]
          },
          {
            title: 'Territoriale Intelligenz',
            features: [
              'Besuchsbiometrie nach Sprache und Herkunft',
              'Nachfragekonzentrations-Heatmaps',
              'Monatlich exportierbare Managementberichte',
              'Engagement- und Retentionsmetriken im Gebiet'
            ]
          }
        ]
      },
      metrics: {
        title: 'Effiziente Verwaltung',
        subtitle: 'Was die Kommune jetzt in Echtzeit messen kann.',
        items: [
          { label: 'Echte Besucherzahl', value: 'POI-Ranking' },
          { label: 'Besucherherkunft', value: 'Sprachverteilung' },
          { label: 'Engagement', value: 'Erlebnis-Score' },
          { label: 'Konzentration', value: 'Heatmaps' },
          { label: 'Inhalt', value: 'Veröffentlichte Audios' },
          { label: 'Saisonalität', value: 'Exportierte Berichte' },
          { label: 'Effizienz', value: 'Batch-Aktionen' },
          { label: 'Beschilderung', value: 'Abdeckung (%)' }
        ]
      },
      implementation: {
        title: 'Betrieb in 30 Tagen',
        subtitle: 'Strukturierter Implementierungsprozess, der sofortige Autonomie und Governance garantiert.',
        phases: [
          { phase: '01', title: 'Phase 1: Setup & Inventar', desc: 'Zugangskonfiguration, offizieller POI-Import und Aktivierung der kommunalen Identität.' },
          { phase: '02', title: 'Phase 2: Kuration & Veröffentlichung', desc: 'KI-Inhaltsproduktion, redaktionelle Überprüfung und Veröffentlichung der ersten territorialen Routen.' },
          { phase: '03', title: 'Laufender Betrieb', desc: 'Monatliche Datenintelligenz, Heatmaps und progressive Erweiterung nach Tourismuszonen.' }
        ],
        security: {
          title: 'Sicherheit & Compliance',
          items: [
            'Kommunale Datenkontrolle (DSGVO/LGPD)',
            'Auditierbare Cloud-Infrastruktur',
            'Veröffentlichbarer Änderungsverlauf',
            'Garantierte Narrative Souveränität'
          ],
          disclaimer: 'Entwickelt zur Erfüllung von Beschaffungs- und öffentlichen Transparenzanforderungen gemäß geltenden Vorschriften.'
        }
      },
      cta: {
        title: 'Transformieren Sie Ihr Destinationsmanagement jetzt.',
        subtitle: 'Planen Sie eine exklusive technische Präsentation für Ihr Sekretariat und erleben Sie Tuggi City OS im Betrieb.',
        button: 'Präsentation Planen',
        implemented: 'Im großen Maßstab implementiert',
        modernManagement: 'Modernes Destinationsmanagement'
      },
      footer: {
        privacy: 'Datenschutz',
        terms: 'Nutzungsbedingungen',
        copyright: '© 2026 Tuggi Enterprise. Alle Rechte vorbehalten.'
      }
    },
    IT: {
      hero: {
        badge: 'Tuggi City OS v4.2',
        title: 'Infrastruttura di Intelligenza Territoriale',
        subtitle: 'Il sistema operativo ufficiale per gestire inventario, contenuti multilingue e dati di visitazione in tempo reale.',
        features: [
          { text: 'Implementazione in 30 giorni' },
          { text: 'Governance Verificabile' },
          { text: 'BI Territoriale' }
        ],
        ctaPrimary: 'Prenota Presentazione',
        ctaSecondary: 'Vedi in Azione'
      },
      video: {
        placeholder: 'Video di Presentazione Istituzionale'
      },
      cycle: {
        title: 'Ciò che la gestione non vede, City OS lo risolve.',
        subtitle: 'Trasformiamo dati grezzi e inventari dispersi in un\'infrastruttura coordinata di turismo intelligente.',
        steps: [
          { step: '01', title: 'Curatela e Governance', desc: 'La Segreteria centralizza l\'inventario e approva le narrative ufficiali in più lingue.' },
          { step: '02', title: 'Attivazione Territoriale', desc: 'Il sistema attiva i contenuti via audio geosincronizzato, guidando il flusso di visitatori in tempo reale.' },
          { step: '03', title: 'Intelligenza dei Dati', desc: 'La dashboard cattura il comportamento reale nel territorio, generando mappe di calore e ranking della domanda.' }
        ]
      },
      capabilities: {
        title: 'Risorse Integrate',
        subtitle: 'Moduli progettati per la scala e i requisiti di sicurezza del settore pubblico.',
        pillars: [
          {
            title: 'Inventario e Operatività',
            features: [
              'Geolocalizzazione precisa dei POI su larga scala',
              'Filtri amministrativi per stato e copertura',
              'Importazione massiva e azioni di laboratorio in batch',
              'Gestione di categorie e asset territoriali'
            ]
          },
          {
            title: 'Contenuto e Governance',
            features: [
              'Scrittura assistita da IA con verifica fattuale',
              'Workflow di approvazione verificabile (Bozza a Pubblicato)',
              'Score di qualità editoriale e riferimenti',
              'Sovranità narrativa del comune garantita'
            ]
          },
          {
            title: 'Audio & Multilingue',
            features: [
              'Generazione di narrazione in +6 lingue istantaneamente',
              'Voci professionali via rete neurale stabile',
              'Fedeltà nella traduzione e termini tecnici locali',
              'Versionamento audio per aggiornamenti stagionali'
            ]
          },
          {
            title: 'Intelligenza Territoriale',
            features: [
              'Biometria di visitazione per lingua e origine',
              'Mappe di calore di concentrazione della domanda',
              'Report mensili esportabili per la gestione',
              'Metriche di engagement e retention nel territorio'
            ]
          }
        ]
      },
      metrics: {
        title: 'Gestione Efficiente',
        subtitle: 'Cosa il Comune può ora misurare in tempo reale.',
        items: [
          { label: 'Visitazione Reale', value: 'Ranking POI' },
          { label: 'Origine del Visitatore', value: 'Distribuzione Lingua' },
          { label: 'Engagement', value: 'Score Esperienza' },
          { label: 'Concentrazione', value: 'Mappe di Calore' },
          { label: 'Contenuto', value: 'Audio Pubblicati' },
          { label: 'Stagionalità', value: 'Report Esportati' },
          { label: 'Efficienza', value: 'Azioni in Batch' },
          { label: 'Segnaletica', value: 'Copertura (%)' }
        ]
      },
      implementation: {
        title: 'Operatività in 30 giorni',
        subtitle: 'Processo di implementazione strutturato che garantisce autonomia e governance immediate.',
        phases: [
          { phase: '01', title: 'Fase 1: Setup e Inventario', desc: 'Configurazione degli accessi, importazione POI ufficiali e attivazione dell\'identità comunale.' },
          { phase: '02', title: 'Fase 2: Curatela e Pubblicazione', desc: 'Produzione di contenuti via IA, revisione editoriale e pubblicazione dei primi percorsi territoriali.' },
          { phase: '03', title: 'Operatività Continua', desc: 'Intelligenza dati mensile, mappe di calore ed espansione progressiva per zone turistiche.' }
        ],
        security: {
          title: 'Sicurezza e Conformità',
          items: [
            'Controllo Dati Comunale (GDPR/LGPD)',
            'Infrastruttura Cloud Verificabile',
            'Storico Modifiche Pubblicabile',
            'Sovranità Narrativa Garantita'
          ],
          disclaimer: 'Sviluppato per soddisfare i requisiti di procurement e trasparenza pubblica secondo le normative vigenti.'
        }
      },
      cta: {
        title: 'Trasforma la gestione della tua destinazione ora.',
        subtitle: 'Prenota una presentazione tecnica esclusiva per la tua segreteria e scopri Tuggi City OS in operazione.',
        button: 'Prenota Presentazione',
        implemented: 'Implementato su larga scala',
        modernManagement: 'Gestione moderna delle destinazioni'
      },
      footer: {
        privacy: 'Privacy',
        terms: 'Termini di Utilizzo',
        copyright: '© 2026 Tuggi Enterprise. Tutti i diritti riservati.'
      }
    }
  };

  return translations[lang] || translations['PT'];
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const GovPage: React.FC<GovPageProps> = ({ 
  currentLanguage = 'PT',
  onCTAClick 
}) => {
  const t = getTranslations(currentLanguage);

  const trackEvent = useCallback((eventName: string, params: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, {
        page_type: 'gov_v4_premium',
        language: currentLanguage,
        ...params
      });
    }
  }, [currentLanguage]);

  useEffect(() => {
    trackEvent('gov_page_view', { timestamp: new Date().toISOString() });
  }, [trackEvent]);

  const handleCTAClick = (ctaType: string, position: string) => {
    if (onCTAClick) {
      onCTAClick(ctaType, position);
    }
    trackEvent(`gov_cta_${ctaType}`, { position });
    
    if (ctaType === 'schedule' || ctaType === 'demo') {
      window.open('https://calendar.app.google/vXKcgKDz8oo4eTyG9', '_blank');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Icons for pillars
  const pillarIcons = [Layers, FileCheck, Languages, TrendingUp];
  const pillarColors = ['#4f46e5', '#2563eb', '#9333ea', '#10b981'];
  const pillarBgColors = ['bg-indigo-600', 'bg-blue-600', 'bg-purple-600', 'bg-emerald-600'];

  // Icons for cycle steps
  const cycleIcons = [FileCheck, Workflow, BarChart3];

  // Icons for metrics
  const metricIcons = [Map, Globe, Activity, TrendingUp, AudioLines, Download, ListChecks, Database];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* ================================================================== */}
      {/* SEÇÃO 1: HERO (PREMIUM ENTERPRISE) */}
      {/* ================================================================== */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 bg-[#FDFDFF] overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-50/50 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="space-y-8">
              <div className="space-y-5">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-md border border-blue-100 text-xs font-bold tracking-widest uppercase"
                >
                  <Activity size={14} /> {t.hero.badge}
                </motion.div>
                
                <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-slate-950 leading-[1.05]">
                  {t.hero.title}
                </h1>
                <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-light max-w-2xl">
                  {t.hero.subtitle}
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {[Clock, Shield, BarChart3].map((Icon, i) => (
                  <div key={i} className="flex flex-col gap-2 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <Icon className="w-5 h-5 text-blue-600" />
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-tight">{t.hero.features[i].text}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-5 pt-2">
                <button 
                  onClick={() => handleCTAClick('schedule', 'hero_primary')}
                  className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-slate-950 rounded-xl hover:bg-slate-900 transition-all shadow-2xl shadow-slate-900/20"
                >
                  {t.hero.ctaPrimary}
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection('video-demo')}
                  className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-slate-700 bg-white border-2 border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
                >
                  <Play className="w-5 h-5 mr-3 fill-current" />
                  {t.hero.ctaSecondary}
                </button>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative lg:translate-x-12"
            >
              <div className="relative z-10 rounded-2xl shadow-[0_32px_64px_-12px_rgba(15,23,42,0.15)] border border-slate-200/50 bg-white p-2.5 overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
                <img 
                  src="/images/gov/light_mode_dashboard_mockup.png" 
                  alt="City OS Dashboard" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              
              {/* Perspective Shadows */}
              <div className="absolute -bottom-10 -right-10 w-full h-full bg-blue-100/30 blur-3xl -z-10 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SEÇÃO 2: VÍDEO INSTITUCIONAL */}
      {/* ================================================================== */}
      <section id="video-demo" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-100 group">
             <iframe 
                src="https://www.youtube.com/embed/SYnEr5GZ0Mc" 
                title="Tuggi City OS Presentation"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
             />
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SEÇÃO 3: O CICLO DE INTELIGÊNCIA */}
      {/* ================================================================== */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 italic tracking-tight text-white">{t.cycle.title}</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              {t.cycle.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.cycle.steps.map((item: any, i: number) => {
              const Icon = cycleIcons[i];
              return (
                <div key={i} className="group p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all duration-500">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-4xl font-black text-slate-700 opacity-50 group-hover:text-blue-500 group-hover:opacity-100 transition-all">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors uppercase tracking-tight text-white">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SEÇÃO 4: CAPACIDADES INTEGRADAS */}
      {/* ================================================================== */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-6 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-6xl font-black text-slate-950 mb-6 tracking-tighter">
                {t.capabilities.title}
              </h2>
              <p className="text-xl text-slate-500 font-light">
                {t.capabilities.subtitle}
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {t.capabilities.pillars.map((pillar: any, i: number) => {
              const Icon = pillarIcons[i];
              return (
                <div key={i} className="flex flex-col md:flex-row gap-8 p-8 rounded-[32px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 overflow-hidden relative group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-slate-200/20 translate-x-10 translate-y-10 rounded-full"></div>
                  
                  <div className={`w-16 h-16 flex-shrink-0 ${pillarBgColors[i]} rounded-2xl flex items-center justify-center text-white shadow-lg shadow-black/5`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-black text-slate-950 mb-6 uppercase tracking-tight">{pillar.title}</h3>
                    <ul className="space-y-4">
                      {pillar.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm leading-snug">
                          <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: pillarColors[i] }}></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* ================================================================== */}
      {/* SEÇÃO 6: METRICS GRID */}
      {/* ================================================================== */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-black text-slate-950 mb-4 tracking-tight">{t.metrics.title}</h2>
            <p className="text-slate-500 text-lg">{t.metrics.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.metrics.items.map((metric: any, i: number) => {
              const Icon = metricIcons[i];
              return (
                <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-slate-400 mb-6 font-bold group-hover:text-blue-600 transition-colors shadow-sm">
                    <Icon size={20} />
                  </div>
                  <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">{metric.label}</div>
                  <div className="text-lg font-black text-slate-900 tracking-tight">{metric.value}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ================================================================== */}
      {/* SEÇÃO 7: IMPLANTAÇÃO */}
      {/* ================================================================== */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <div className="space-y-10">
              <h2 className="text-4xl lg:text-6xl font-black text-slate-950 tracking-tighter">
                {t.implementation.title}
              </h2>
              <p className="text-xl text-slate-500 font-light leading-relaxed">
                {t.implementation.subtitle}
              </p>
              
              <div className="space-y-6">
                {t.implementation.phases.map((phase: any, i: number) => {
                  const bgColors = ['bg-slate-950', 'bg-blue-600', 'bg-slate-100'];
                  const textColors = ['text-white', 'text-white', 'text-slate-900'];
                  return (
                    <div key={i} className="flex gap-6">
                      <div className={`w-12 h-12 ${bgColors[i]} rounded-xl flex items-center justify-center ${textColors[i]} shrink-0 font-black`}>{phase.phase}</div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">{phase.title}</h4>
                        <p className="text-sm text-slate-500">{phase.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-slate-50 p-12 rounded-[40px] border border-slate-100">
               <div className="text-center space-y-8">
                 <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-12 text-slate-500">{t.implementation.security.title}</h4>
                 <div className="grid grid-cols-2 gap-8">
                   {[Shield, Lock, Eye, FileCheck].map((Icon, i) => (
                     <div key={i} className="flex flex-col items-center gap-3">
                       <Icon className="w-8 h-8 text-slate-900" />
                       <span className="text-[10px] font-bold text-slate-600 text-center uppercase">{t.implementation.security.items[i]}</span>
                     </div>
                   ))}
                 </div>
                 <div className="pt-12 border-t border-slate-200">
                   <p className="text-xs text-slate-400 italic">
                     {t.implementation.security.disclaimer}
                   </p>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SEÇÃO 8: CTA FINAL */}
      {/* ================================================================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 rounded-[48px] p-12 lg:p-24 text-center relative overflow-hidden group">
            {/* Animated Light Effect */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500 blur-[120px] opacity-10 -translate-y-1/2 group-hover:opacity-20 transition-opacity"></div>
            
            <div className="relative z-10 space-y-10 max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                {t.cta.title}
              </h2>
              <p className="text-xl text-slate-400 font-light">
                {t.cta.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                <button 
                  onClick={() => handleCTAClick('schedule', 'footer_cta')}
                  className="w-full sm:w-auto px-12 py-6 text-xl font-bold bg-white text-slate-950 rounded-2xl hover:bg-slate-50 transition-all transform hover:-translate-y-1 active:scale-95 shadow-2xl"
                >
                  {t.cta.button}
                </button>
                <div className="flex gap-6 items-center">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center">
                        <Activity size={16} className="text-blue-500" />
                      </div>
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="text-white font-bold leading-tight">{t.cta.implemented}</div>
                    <div className="text-slate-500 text-xs">{t.cta.modernManagement}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FOOTER */}
      {/* ================================================================== */}
      <footer className="py-12 bg-white border-t border-slate-100 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-sm">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-slate-950 rounded-lg flex items-center justify-center text-white font-black text-lg">T</div>
              <div>
                <div className="text-slate-900 font-black uppercase tracking-widest text-lg leading-none">Tuggi City OS</div>
                <div className="text-[10px] font-bold text-slate-400 tracking-tighter uppercase leading-none">Platform version 4.2</div>
              </div>
            </div>
            
            <div className="flex items-center gap-8">
              <button onClick={() => handleCTAClick('privacy_policy', 'footer')} className="hover:text-slate-900 transition-colors font-medium text-left">{t.footer.privacy}</button>
              <button onClick={() => handleCTAClick('terms_of_use', 'footer')} className="hover:text-slate-900 transition-colors font-medium text-left">{t.footer.terms}</button>
              <a href="mailto:contato@tuggi.com.br" className="hover:text-slate-900 transition-colors font-medium">contato@tuggi.com.br</a>
            </div>
            
            <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
              {t.footer.copyright}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default GovPage;
