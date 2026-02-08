import React from 'react';
import { Shield, Lock, Eye, FileCheck, ArrowLeft } from 'lucide-react';

interface GovPrivacyPolicyPageProps {
  currentLanguage?: string;
  onBack?: () => void;
}

const GovPrivacyPolicyPage: React.FC<GovPrivacyPolicyPageProps> = ({ currentLanguage = 'PT', onBack }) => {
  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onBack) {
      onBack();
    } else {
      window.location.href = '/gov';
    }
  };

  // Translations
  const getContent = () => {
    const content: Record<string, any> = {
      PT: {
        headerSubtitle: 'Privacidade',
        backButton: 'Voltar',
        badge: 'Compliance & Dados Governamentais',
        title: 'Política de Privacidade de Dados Públicos',
        subtitle: 'Esta política detalha como o Tuggi City OS trata, armazena e protege dados de entes públicos e cidadãos, em conformidade com LGPD (Brasil), GDPR (Europa) e padrões internacionais de soberania de dados.',
        lastUpdated: 'Última atualização: 08 de Fevereiro de 2026',
        section1: {
          title: '1. Soberania e Propriedade dos Dados',
          intro: 'O Tuggi City OS opera sob o princípio da <strong>Soberania dos Dados Públicos</strong>. Todos os dados inseridos, produzidos ou gerados pela Administração Pública (incluindo inventários, textos, áudios e configurações territoriais) permanecem de propriedade exclusiva do Ente Público contratante.',
          items: [
            'O Tuggi atua como Operador de Dados (Data Processor), enquanto o Ente Público é o Controlador (Data Controller).',
            'Não compartilhamos, vendemos ou utilizamos dados institucionais para fins publicitários de terceiros.',
            'A exportação integral dos dados é garantida a qualquer momento, em formatos abertos e interoperáveis (JSON, CSV, GeoJSON).'
          ]
        },
        section2: {
          title: '2. Coleta de Dados de Cidadãos e Visitantes',
          intro: 'A coleta de dados via aplicativos e interfaces públicas do Tuggi City OS é estritamente voltada para a melhoria da gestão territorial e experiência do visitante. Adotamos a metodologia de <strong>Privacy by Design</strong>.',
          dataTypesTitle: 'Tipos de Dados Coletados:',
          dataTypes: [
            { label: 'Geolocalização Anonimizada:', description: 'Coordenadas para ativação de áudio e mapas de calor, sem vínculo persistente à identidade civil.' },
            { label: 'Dados de Uso:', description: 'Idioma preferido, tempo de permanência em POIs e interações com conteúdo.' }
          ],
          outro: 'Os dados de geolocalização são agregados e anonimizados na origem antes de serem processados para os painéis de Business Intelligence (BI), impossibilitando a reidentificação individual de cidadãos.'
        },
        section3: {
          title: '3. Conformidade Legal (LGPD & GDPR)',
          intro: 'Nossa infraestrutura está em total conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018) e o General Data Protection Regulation (EU 2016/679).',
          items: [
            '<strong>Base Legal:</strong> O processamento de dados é justificado pelo Legítimo Interesse da administração pública e/ou Consentimento explícito do usuário final nos aplicativos.',
            '<strong>Direitos do Titular:</strong> Canais automatizados para solicitação de exclusão, retificação ou portabilidade de dados pessoais.',
            '<strong>Retenção:</strong> Dados brutos de visitação são retidos por no máximo 24 meses, sendo convertidos em estatísticas permanentes após este período.'
          ]
        },
        section4: {
          title: '4. Segurança da Infraestrutura',
          intro: 'Utilizamos padrões de segurança de nível bancário e governamental para proteger as informações.',
          items: [
            '<strong>Criptografia:</strong> Todos os dados são criptografados em repouso (AES-256) e em trânsito (TLS 1.3).',
            '<strong>Auditabilidade:</strong> Logs de acesso imutáveis registram todas as ações administrativas no painel de gestão.',
            '<strong>Hospedagem:</strong> Servidores localizados em jurisdições compatíveis com a legislação do ente contratante (ex: Data Centers no Brasil para clientes brasileiros).'
          ]
        },
        contact: {
          title: 'Contato do Encarregado de Dados (DPO)',
          intro: 'Para requisições administrativas, auditorias ou dúvidas sobre proteção de dados:',
          email: 'dpo@tuggi.com.br',
          address: 'Av. Paulista, 1106 - São Paulo/SP, Brasil.'
        },
        footer: '© 2026 Tuggi Enterprise. Todos os direitos reservados.'
      },
      EN: {
        headerSubtitle: 'Privacy',
        backButton: 'Back',
        badge: 'Compliance & Government Data',
        title: 'Public Data Privacy Policy',
        subtitle: 'This policy details how Tuggi City OS handles, stores, and protects data from public entities and citizens, in compliance with LGPD (Brazil), GDPR (Europe), and international data sovereignty standards.',
        lastUpdated: 'Last updated: February 8, 2026',
        section1: {
          title: '1. Data Sovereignty and Ownership',
          intro: 'Tuggi City OS operates under the principle of <strong>Public Data Sovereignty</strong>. All data entered, produced, or generated by the Public Administration (including inventories, texts, audio, and territorial configurations) remains the exclusive property of the contracting Public Entity.',
          items: [
            'Tuggi acts as Data Processor, while the Public Entity is the Data Controller.',
            'We do not share, sell, or use institutional data for third-party advertising purposes.',
            'Full data export is guaranteed at any time, in open and interoperable formats (JSON, CSV, GeoJSON).'
          ]
        },
        section2: {
          title: '2. Collection of Citizen and Visitor Data',
          intro: 'Data collection through Tuggi City OS applications and public interfaces is strictly aimed at improving territorial management and visitor experience. We adopt the <strong>Privacy by Design</strong> methodology.',
          dataTypesTitle: 'Types of Data Collected:',
          dataTypes: [
            { label: 'Anonymized Geolocation:', description: 'Coordinates for audio activation and heat maps, without persistent link to civil identity.' },
            { label: 'Usage Data:', description: 'Preferred language, time spent at POIs, and content interactions.' }
          ],
          outro: 'Geolocation data is aggregated and anonymized at source before being processed for Business Intelligence (BI) dashboards, making individual citizen re-identification impossible.'
        },
        section3: {
          title: '3. Legal Compliance (LGPD & GDPR)',
          intro: 'Our infrastructure is fully compliant with the Brazilian General Data Protection Law (Law No. 13.709/2018) and the General Data Protection Regulation (EU 2016/679).',
          items: [
            '<strong>Legal Basis:</strong> Data processing is justified by the Legitimate Interest of public administration and/or explicit User Consent in applications.',
            '<strong>Data Subject Rights:</strong> Automated channels for requesting deletion, rectification, or portability of personal data.',
            '<strong>Retention:</strong> Raw visitation data is retained for a maximum of 24 months, being converted to permanent statistics after this period.'
          ]
        },
        section4: {
          title: '4. Infrastructure Security',
          intro: 'We use banking and government-level security standards to protect information.',
          items: [
            '<strong>Encryption:</strong> All data is encrypted at rest (AES-256) and in transit (TLS 1.3).',
            '<strong>Auditability:</strong> Immutable access logs record all administrative actions in the management panel.',
            '<strong>Hosting:</strong> Servers located in jurisdictions compatible with the contracting entity\'s legislation (e.g., Data Centers in Brazil for Brazilian clients).'
          ]
        },
        contact: {
          title: 'Data Protection Officer (DPO) Contact',
          intro: 'For administrative requests, audits, or questions about data protection:',
          email: 'dpo@tuggi.com.br',
          address: 'Av. Paulista, 1106 - São Paulo/SP, Brazil.'
        },
        footer: '© 2026 Tuggi Enterprise. All rights reserved.'
      },
      ES: {
        headerSubtitle: 'Privacidad',
        backButton: 'Volver',
        badge: 'Compliance y Datos Gubernamentales',
        title: 'Política de Privacidad de Datos Públicos',
        subtitle: 'Esta política detalla cómo Tuggi City OS trata, almacena y protege los datos de entidades públicas y ciudadanos, en cumplimiento con LGPD (Brasil), GDPR (Europa) y estándares internacionales de soberanía de datos.',
        lastUpdated: 'Última actualización: 8 de Febrero de 2026',
        section1: {
          title: '1. Soberanía y Propiedad de los Datos',
          intro: 'Tuggi City OS opera bajo el principio de <strong>Soberanía de los Datos Públicos</strong>. Todos los datos ingresados, producidos o generados por la Administración Pública (incluyendo inventarios, textos, audios y configuraciones territoriales) permanecen como propiedad exclusiva de la Entidad Pública contratante.',
          items: [
            'Tuggi actúa como Operador de Datos (Data Processor), mientras que la Entidad Pública es el Controlador (Data Controller).',
            'No compartimos, vendemos ni utilizamos datos institucionales para fines publicitarios de terceros.',
            'La exportación completa de datos está garantizada en cualquier momento, en formatos abiertos e interoperables (JSON, CSV, GeoJSON).'
          ]
        },
        section2: {
          title: '2. Recopilación de Datos de Ciudadanos y Visitantes',
          intro: 'La recopilación de datos a través de aplicaciones e interfaces públicas de Tuggi City OS está estrictamente orientada a mejorar la gestión territorial y la experiencia del visitante. Adoptamos la metodología de <strong>Privacy by Design</strong>.',
          dataTypesTitle: 'Tipos de Datos Recopilados:',
          dataTypes: [
            { label: 'Geolocalización Anonimizada:', description: 'Coordenadas para activación de audio y mapas de calor, sin vínculo persistente con la identidad civil.' },
            { label: 'Datos de Uso:', description: 'Idioma preferido, tiempo de permanencia en POIs e interacciones con contenido.' }
          ],
          outro: 'Los datos de geolocalización se agregan y anonimizan en origen antes de ser procesados para los paneles de Business Intelligence (BI), imposibilitando la reidentificación individual de ciudadanos.'
        },
        section3: {
          title: '3. Cumplimiento Legal (LGPD & GDPR)',
          intro: 'Nuestra infraestructura cumple totalmente con la Ley General de Protección de Datos de Brasil (Ley N° 13.709/2018) y el Reglamento General de Protección de Datos (UE 2016/679).',
          items: [
            '<strong>Base Legal:</strong> El procesamiento de datos está justificado por el Interés Legítimo de la administración pública y/o el Consentimiento explícito del usuario final en las aplicaciones.',
            '<strong>Derechos del Titular:</strong> Canales automatizados para solicitar la eliminación, rectificación o portabilidad de datos personales.',
            '<strong>Retención:</strong> Los datos brutos de visitación se retienen por un máximo de 24 meses, convirtiéndose en estadísticas permanentes después de este período.'
          ]
        },
        section4: {
          title: '4. Seguridad de la Infraestructura',
          intro: 'Utilizamos estándares de seguridad de nivel bancario y gubernamental para proteger la información.',
          items: [
            '<strong>Cifrado:</strong> Todos los datos están cifrados en reposo (AES-256) y en tránsito (TLS 1.3).',
            '<strong>Auditabilidad:</strong> Logs de acceso inmutables registran todas las acciones administrativas en el panel de gestión.',
            '<strong>Hospedaje:</strong> Servidores ubicados en jurisdicciones compatibles con la legislación de la entidad contratante (ej: Data Centers en Brasil para clientes brasileños).'
          ]
        },
        contact: {
          title: 'Contacto del Delegado de Protección de Datos (DPO)',
          intro: 'Para solicitudes administrativas, auditorías o preguntas sobre protección de datos:',
          email: 'dpo@tuggi.com.br',
          address: 'Av. Paulista, 1106 - São Paulo/SP, Brasil.'
        },
        footer: '© 2026 Tuggi Enterprise. Todos los derechos reservados.'
      },
      FR: {
        headerSubtitle: 'Confidentialité',
        backButton: 'Retour',
        badge: 'Conformité & Données Gouvernementales',
        title: 'Politique de Confidentialité des Données Publiques',
        subtitle: 'Cette politique détaille comment Tuggi City OS traite, stocke et protège les données des entités publiques et des citoyens, en conformité avec la LGPD (Brésil), le RGPD (Europe) et les normes internationales de souveraineté des données.',
        lastUpdated: 'Dernière mise à jour : 8 février 2026',
        section1: {
          title: '1. Souveraineté et Propriété des Données',
          intro: 'Tuggi City OS fonctionne selon le principe de <strong>Souveraineté des Données Publiques</strong>. Toutes les données saisies, produites ou générées par l\'Administration Publique (y compris les inventaires, textes, audios et configurations territoriales) restent la propriété exclusive de l\'Entité Publique contractante.',
          items: [
            'Tuggi agit en tant que Sous-traitant (Data Processor), tandis que l\'Entité Publique est le Responsable du Traitement (Data Controller).',
            'Nous ne partageons, ne vendons ni n\'utilisons les données institutionnelles à des fins publicitaires tierces.',
            'L\'exportation complète des données est garantie à tout moment, dans des formats ouverts et interopérables (JSON, CSV, GeoJSON).'
          ]
        },
        section2: {
          title: '2. Collecte des Données des Citoyens et Visiteurs',
          intro: 'La collecte de données via les applications et interfaces publiques de Tuggi City OS est strictement orientée vers l\'amélioration de la gestion territoriale et de l\'expérience visiteur. Nous adoptons la méthodologie <strong>Privacy by Design</strong>.',
          dataTypesTitle: 'Types de Données Collectées :',
          dataTypes: [
            { label: 'Géolocalisation Anonymisée :', description: 'Coordonnées pour l\'activation audio et les cartes de chaleur, sans lien persistant avec l\'identité civile.' },
            { label: 'Données d\'Utilisation :', description: 'Langue préférée, temps passé aux POI et interactions avec le contenu.' }
          ],
          outro: 'Les données de géolocalisation sont agrégées et anonymisées à la source avant d\'être traitées pour les tableaux de bord de Business Intelligence (BI), rendant impossible la ré-identification individuelle des citoyens.'
        },
        section3: {
          title: '3. Conformité Légale (LGPD & RGPD)',
          intro: 'Notre infrastructure est entièrement conforme à la Loi Générale de Protection des Données du Brésil (Loi N° 13.709/2018) et au Règlement Général sur la Protection des Données (UE 2016/679).',
          items: [
            '<strong>Base Légale :</strong> Le traitement des données est justifié par l\'Intérêt Légitime de l\'administration publique et/ou le Consentement explicite de l\'utilisateur final dans les applications.',
            '<strong>Droits de la Personne Concernée :</strong> Canaux automatisés pour demander la suppression, la rectification ou la portabilité des données personnelles.',
            '<strong>Conservation :</strong> Les données brutes de visite sont conservées pendant un maximum de 24 mois, puis converties en statistiques permanentes.'
          ]
        },
        section4: {
          title: '4. Sécurité de l\'Infrastructure',
          intro: 'Nous utilisons des normes de sécurité de niveau bancaire et gouvernemental pour protéger les informations.',
          items: [
            '<strong>Chiffrement :</strong> Toutes les données sont chiffrées au repos (AES-256) et en transit (TLS 1.3).',
            '<strong>Auditabilité :</strong> Des journaux d\'accès immuables enregistrent toutes les actions administratives dans le panneau de gestion.',
            '<strong>Hébergement :</strong> Serveurs situés dans des juridictions compatibles avec la législation de l\'entité contractante (ex : Data Centers au Brésil pour les clients brésiliens).'
          ]
        },
        contact: {
          title: 'Contact du Délégué à la Protection des Données (DPO)',
          intro: 'Pour les demandes administratives, audits ou questions sur la protection des données :',
          email: 'dpo@tuggi.com.br',
          address: 'Av. Paulista, 1106 - São Paulo/SP, Brésil.'
        },
        footer: '© 2026 Tuggi Enterprise. Tous droits réservés.'
      },
      DE: {
        headerSubtitle: 'Datenschutz',
        backButton: 'Zurück',
        badge: 'Compliance & Regierungsdaten',
        title: 'Datenschutzrichtlinie für Öffentliche Daten',
        subtitle: 'Diese Richtlinie beschreibt, wie Tuggi City OS Daten von öffentlichen Einrichtungen und Bürgern verarbeitet, speichert und schützt, in Übereinstimmung mit LGPD (Brasilien), DSGVO (Europa) und internationalen Datensouveränitätsstandards.',
        lastUpdated: 'Letzte Aktualisierung: 8. Februar 2026',
        section1: {
          title: '1. Datensouveränität und -eigentum',
          intro: 'Tuggi City OS arbeitet nach dem Prinzip der <strong>Öffentlichen Datensouveränität</strong>. Alle von der öffentlichen Verwaltung eingegebenen, produzierten oder generierten Daten (einschließlich Inventare, Texte, Audio und territoriale Konfigurationen) bleiben ausschließliches Eigentum der vertragsschließenden öffentlichen Einrichtung.',
          items: [
            'Tuggi fungiert als Auftragsverarbeiter (Data Processor), während die öffentliche Einrichtung der Verantwortliche (Data Controller) ist.',
            'Wir teilen, verkaufen oder verwenden institutionelle Daten nicht für Werbezwecke Dritter.',
            'Der vollständige Datenexport ist jederzeit in offenen und interoperablen Formaten (JSON, CSV, GeoJSON) garantiert.'
          ]
        },
        section2: {
          title: '2. Erfassung von Bürger- und Besucherdaten',
          intro: 'Die Datenerfassung über Tuggi City OS-Anwendungen und öffentliche Schnittstellen ist streng auf die Verbesserung der territorialen Verwaltung und des Besuchererlebnisses ausgerichtet. Wir wenden die <strong>Privacy by Design</strong>-Methodik an.',
          dataTypesTitle: 'Arten der erfassten Daten:',
          dataTypes: [
            { label: 'Anonymisierte Geolokalisierung:', description: 'Koordinaten für Audio-Aktivierung und Heatmaps, ohne dauerhafte Verbindung zur bürgerlichen Identität.' },
            { label: 'Nutzungsdaten:', description: 'Bevorzugte Sprache, Verweildauer an POIs und Interaktionen mit Inhalten.' }
          ],
          outro: 'Geolokalisierungsdaten werden an der Quelle aggregiert und anonymisiert, bevor sie für Business Intelligence (BI)-Dashboards verarbeitet werden, was eine individuelle Re-Identifizierung von Bürgern unmöglich macht.'
        },
        section3: {
          title: '3. Rechtliche Konformität (LGPD & DSGVO)',
          intro: 'Unsere Infrastruktur entspricht vollständig dem brasilianischen Allgemeinen Datenschutzgesetz (Gesetz Nr. 13.709/2018) und der Datenschutz-Grundverordnung (EU 2016/679).',
          items: [
            '<strong>Rechtsgrundlage:</strong> Die Datenverarbeitung ist durch das berechtigte Interesse der öffentlichen Verwaltung und/oder die ausdrückliche Einwilligung des Endnutzers in Anwendungen gerechtfertigt.',
            '<strong>Betroffenenrechte:</strong> Automatisierte Kanäle zur Beantragung von Löschung, Berichtigung oder Portabilität personenbezogener Daten.',
            '<strong>Aufbewahrung:</strong> Rohe Besuchsdaten werden maximal 24 Monate aufbewahrt und danach in dauerhafte Statistiken umgewandelt.'
          ]
        },
        section4: {
          title: '4. Infrastruktursicherheit',
          intro: 'Wir verwenden Sicherheitsstandards auf Bank- und Regierungsebene zum Schutz von Informationen.',
          items: [
            '<strong>Verschlüsselung:</strong> Alle Daten sind im Ruhezustand (AES-256) und bei der Übertragung (TLS 1.3) verschlüsselt.',
            '<strong>Auditierbarkeit:</strong> Unveränderliche Zugriffsprotokolle zeichnen alle administrativen Aktionen im Verwaltungsbereich auf.',
            '<strong>Hosting:</strong> Server befinden sich in Rechtsordnungen, die mit der Gesetzgebung der vertragsschließenden Einrichtung kompatibel sind (z.B. Rechenzentren in Brasilien für brasilianische Kunden).'
          ]
        },
        contact: {
          title: 'Kontakt des Datenschutzbeauftragten (DSB)',
          intro: 'Für administrative Anfragen, Audits oder Fragen zum Datenschutz:',
          email: 'dpo@tuggi.com.br',
          address: 'Av. Paulista, 1106 - São Paulo/SP, Brasilien.'
        },
        footer: '© 2026 Tuggi Enterprise. Alle Rechte vorbehalten.'
      },
      IT: {
        headerSubtitle: 'Privacy',
        backButton: 'Indietro',
        badge: 'Compliance & Dati Governativi',
        title: 'Politica sulla Privacy dei Dati Pubblici',
        subtitle: 'Questa politica descrive come Tuggi City OS tratta, archivia e protegge i dati di enti pubblici e cittadini, in conformità con LGPD (Brasile), GDPR (Europa) e standard internazionali di sovranità dei dati.',
        lastUpdated: 'Ultimo aggiornamento: 8 febbraio 2026',
        section1: {
          title: '1. Sovranità e Proprietà dei Dati',
          intro: 'Tuggi City OS opera secondo il principio della <strong>Sovranità dei Dati Pubblici</strong>. Tutti i dati inseriti, prodotti o generati dalla Pubblica Amministrazione (inclusi inventari, testi, audio e configurazioni territoriali) rimangono di proprietà esclusiva dell\'Ente Pubblico contraente.',
          items: [
            'Tuggi agisce come Responsabile del Trattamento (Data Processor), mentre l\'Ente Pubblico è il Titolare del Trattamento (Data Controller).',
            'Non condividiamo, vendiamo o utilizziamo dati istituzionali per scopi pubblicitari di terzi.',
            'L\'esportazione completa dei dati è garantita in qualsiasi momento, in formati aperti e interoperabili (JSON, CSV, GeoJSON).'
          ]
        },
        section2: {
          title: '2. Raccolta dei Dati di Cittadini e Visitatori',
          intro: 'La raccolta dati tramite applicazioni e interfacce pubbliche di Tuggi City OS è strettamente orientata al miglioramento della gestione territoriale e dell\'esperienza del visitatore. Adottiamo la metodologia <strong>Privacy by Design</strong>.',
          dataTypesTitle: 'Tipi di Dati Raccolti:',
          dataTypes: [
            { label: 'Geolocalizzazione Anonimizzata:', description: 'Coordinate per l\'attivazione audio e mappe di calore, senza collegamento persistente all\'identità civile.' },
            { label: 'Dati di Utilizzo:', description: 'Lingua preferita, tempo di permanenza nei POI e interazioni con i contenuti.' }
          ],
          outro: 'I dati di geolocalizzazione vengono aggregati e anonimizzati alla fonte prima di essere elaborati per i dashboard di Business Intelligence (BI), rendendo impossibile la re-identificazione individuale dei cittadini.'
        },
        section3: {
          title: '3. Conformità Legale (LGPD & GDPR)',
          intro: 'La nostra infrastruttura è pienamente conforme alla Legge Generale sulla Protezione dei Dati del Brasile (Legge N° 13.709/2018) e al Regolamento Generale sulla Protezione dei Dati (UE 2016/679).',
          items: [
            '<strong>Base Legale:</strong> Il trattamento dei dati è giustificato dal Legittimo Interesse della pubblica amministrazione e/o dal Consenso esplicito dell\'utente finale nelle applicazioni.',
            '<strong>Diritti dell\'Interessato:</strong> Canali automatizzati per richiedere la cancellazione, rettifica o portabilità dei dati personali.',
            '<strong>Conservazione:</strong> I dati grezzi di visita sono conservati per un massimo di 24 mesi, poi convertiti in statistiche permanenti.'
          ]
        },
        section4: {
          title: '4. Sicurezza dell\'Infrastruttura',
          intro: 'Utilizziamo standard di sicurezza di livello bancario e governativo per proteggere le informazioni.',
          items: [
            '<strong>Crittografia:</strong> Tutti i dati sono crittografati a riposo (AES-256) e in transito (TLS 1.3).',
            '<strong>Verificabilità:</strong> Log di accesso immutabili registrano tutte le azioni amministrative nel pannello di gestione.',
            '<strong>Hosting:</strong> Server situati in giurisdizioni compatibili con la legislazione dell\'ente contraente (es: Data Center in Brasile per clienti brasiliani).'
          ]
        },
        contact: {
          title: 'Contatto del Responsabile della Protezione dei Dati (DPO)',
          intro: 'Per richieste amministrative, audit o domande sulla protezione dei dati:',
          email: 'dpo@tuggi.com.br',
          address: 'Av. Paulista, 1106 - São Paulo/SP, Brasile.'
        },
        footer: '© 2026 Tuggi Enterprise. Tutti i diritti riservati.'
      }
    };

    return content[currentLanguage] || content['PT'];
  };

  const t = getContent();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* Header Simplificado */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-slate-950 rounded-lg flex items-center justify-center text-white font-black text-sm">T</div>
             <span className="font-bold text-slate-900">Tuggi City OS <span className="text-slate-400 font-normal">| {t.headerSubtitle}</span></span>
          </div>
          <button 
            onClick={handleBack}
            className="text-sm font-medium text-slate-500 hover:text-slate-900 flex items-center gap-2 transition-colors"
          >
            <ArrowLeft size={16} /> {t.backButton}
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 lg:p-12">
          
          <div className="mb-12 border-b border-slate-100 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-md border border-blue-100 text-xs font-bold tracking-widest uppercase mb-4">
              <Shield size={14} /> {t.badge}
            </div>
            <h1 className="text-3xl lg:text-4xl font-black text-slate-950 mb-4">{t.title}</h1>
            <p className="text-slate-500 text-lg">
              {t.subtitle}
            </p>
            <p className="text-xs text-slate-400 mt-4">{t.lastUpdated}</p>
          </div>

          <div className="space-y-12 text-slate-700 leading-relaxed">
            
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5 text-slate-400" />
                {t.section1.title}
              </h2>
              <p className="mb-4" dangerouslySetInnerHTML={{ __html: t.section1.intro }} />
              <ul className="list-disc pl-5 space-y-2 marker:text-blue-500">
                {t.section1.items.map((item: string, index: number) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-slate-400" />
                {t.section2.title}
              </h2>
              <p className="mb-4" dangerouslySetInnerHTML={{ __html: t.section2.intro }} />
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-4">
                <h3 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide">{t.section2.dataTypesTitle}</h3>
                <ul className="grid sm:grid-cols-2 gap-4 text-sm">
                  {t.section2.dataTypes.map((dataType: { label: string; description: string }, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                      <span><strong>{dataType.label}</strong> {dataType.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p>
                {t.section2.outro}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-slate-400" />
                {t.section3.title}
              </h2>
              <p className="mb-4">
                {t.section3.intro}
              </p>
              <ul className="list-disc pl-5 space-y-2 marker:text-blue-500">
                {t.section3.items.map((item: string, index: number) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-slate-400" />
                {t.section4.title}
              </h2>
              <p className="mb-4">
                {t.section4.intro}
              </p>
              <ul className="list-disc pl-5 space-y-2 marker:text-blue-500">
                {t.section4.items.map((item: string, index: number) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </section>

            <section className="border-t border-slate-100 pt-8 mt-12">
               <h3 className="font-bold text-slate-900 mb-2">{t.contact.title}</h3>
               <p className="text-sm">
                 {t.contact.intro}<br/>
                 <strong>Email:</strong> {t.contact.email}<br/>
                 <strong>{currentLanguage === 'EN' ? 'Legal Address:' : currentLanguage === 'ES' ? 'Dirección Legal:' : 'Endereço Legal:'}</strong> {t.contact.address}
               </p>
            </section>

          </div>
        </div>
      </main>
      
      <footer className="py-8 text-center text-slate-400 text-xs border-t border-slate-200 mt-12">
        <p>{t.footer}</p>
      </footer>
    </div>
  );
};

export default GovPrivacyPolicyPage;
