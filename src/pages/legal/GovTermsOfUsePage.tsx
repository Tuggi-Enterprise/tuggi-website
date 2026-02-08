import React from 'react';
import { Shield, FileText, CheckCircle2, AlertTriangle, ArrowLeft } from 'lucide-react';

interface GovTermsOfUsePageProps {
  currentLanguage?: string;
  onBack?: () => void;
}

const GovTermsOfUsePage: React.FC<GovTermsOfUsePageProps> = ({ currentLanguage = 'PT', onBack }) => {
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
        headerSubtitle: 'Termos',
        backButton: 'Voltar',
        badge: 'Contrato de Licença de Uso - Administração Pública',
        title: 'Termos de Uso do Sistema Tuggi City OS',
        subtitle: 'Estes termos regem o uso do Tuggi City OS por Municípios e Entes Governamentais, garantindo a legitimidade na gestão de dados e conteúdo público.',
        lastUpdated: 'Última atualização: 08 de Fevereiro de 2026',
        section1: {
          title: '1. Licença de Uso Não-Exclusiva',
          intro: 'A Tuggi Enterprise concede ao Contratante (Ente Público) uma licença de uso <strong>não exclusiva, intransferível e temporária</strong> do software Tuggi City OS. O sistema é disponibilizado no modelo SaaS (Software as a Service) hospedado em nuvem, acessível via navegador web.',
          items: [
            'A licença é válida para o território e período definidos em contrato específico.',
            'Atualizações de segurança e funcionalidades core estão inclusas na licença padrão.',
            'O acesso é permitido a gestores credenciados e servidores públicos autorizados.'
          ]
        },
        section2: {
          title: '2. Responsabilidade sobre o Conteúdo',
          intro: 'O Ente Público é <strong>o único responsável</strong> pela veracidade, qualidade e direitos autorais de todo o conteúdo inserido na plataforma (textos, imagens, áudios e configurações de mapas).',
          items: [
            'O Tuggi City OS não modera conteúdo previamente, atuando apenas como infraestrutura tecnológica.',
            'O Município deve garantir que possui os direitos de uso de imagens e marcas inseridas.',
            'Recomendamos o uso do módulo de <strong>Governança Editorial</strong> para garantir conformidade com políticas de comunicação pública.'
          ]
        },
        section3: {
          title: '3. Garantias e SLA (Acordo de Nível de Serviço)',
          intro: 'Garantimos uma disponibilidade de infraestrutura mínima de <strong>99.5%</strong> (uptime) calculada mensalmente. Manutenções programadas serão comunicadas com antecedência mínima de 48 horas.',
          supportTitle: 'Suporte Técnico:',
          supportText: 'O suporte técnico especializado está disponível para administradores durante o horário comercial (9h às 18h, dias úteis). Para incidentes críticos (impossibilidade de acesso total), o atendimento é 24/7.'
        },
        section4: {
          title: '4. Propriedade Intelectual',
          intro: 'O código-fonte, design, algoritmos e marcas do Tuggi City OS são propriedade exclusiva da Tuggi Enterprise.',
          items: [
            'O Contratante detém a propriedade intelectual sobre os dados e conteúdos específicos do seu município.',
            'É vedada a engenharia reversa, sublicenciamento ou cópia não autorizada do software.'
          ]
        },
        contact: {
          title: 'Dúvidas Legais?',
          intro: 'Para questões relacionadas a contratos e licenciamento:',
          email: 'legal@tuggi.com.br',
          phone: '+55 (11) 3003-0000'
        },
        footer: '© 2026 Tuggi Enterprise. Todos os direitos reservados.'
      },
      EN: {
        headerSubtitle: 'Terms',
        backButton: 'Back',
        badge: 'License Agreement - Public Administration',
        title: 'Tuggi City OS Terms of Use',
        subtitle: 'These terms govern the use of Tuggi City OS by Municipalities and Government Entities, ensuring legitimacy in managing public data and content.',
        lastUpdated: 'Last updated: February 8, 2026',
        section1: {
          title: '1. Non-Exclusive License',
          intro: 'Tuggi Enterprise grants the Contractor (Public Entity) a <strong>non-exclusive, non-transferable, and temporary</strong> license to use the Tuggi City OS software. The system is provided in the SaaS (Software as a Service) model hosted in the cloud, accessible via web browser.',
          items: [
            'The license is valid for the territory and period defined in a specific contract.',
            'Security updates and core features are included in the standard license.',
            'Access is permitted to accredited managers and authorized public servants.'
          ]
        },
        section2: {
          title: '2. Content Responsibility',
          intro: 'The Public Entity is <strong>solely responsible</strong> for the accuracy, quality, and copyright of all content entered on the platform (texts, images, audio, and map configurations).',
          items: [
            'Tuggi City OS does not moderate content in advance, acting only as technological infrastructure.',
            'The Municipality must ensure it has the rights to use inserted images and brands.',
            'We recommend using the <strong>Editorial Governance</strong> module to ensure compliance with public communication policies.'
          ]
        },
        section3: {
          title: '3. Guarantees and SLA (Service Level Agreement)',
          intro: 'We guarantee a minimum infrastructure availability of <strong>99.5%</strong> (uptime) calculated monthly. Scheduled maintenance will be communicated with a minimum notice of 48 hours.',
          supportTitle: 'Technical Support:',
          supportText: 'Specialized technical support is available to administrators during business hours (9am to 6pm, business days). For critical incidents (complete access impossibility), service is 24/7.'
        },
        section4: {
          title: '4. Intellectual Property',
          intro: 'The source code, design, algorithms, and trademarks of Tuggi City OS are the exclusive property of Tuggi Enterprise.',
          items: [
            'The Contractor retains intellectual property over data and specific content from their municipality.',
            'Reverse engineering, sublicensing, or unauthorized copying of the software is prohibited.'
          ]
        },
        contact: {
          title: 'Legal Questions?',
          intro: 'For contract and licensing-related questions:',
          email: 'legal@tuggi.com.br',
          phone: '+55 (11) 3003-0000'
        },
        footer: '© 2026 Tuggi Enterprise. All rights reserved.'
      },
      ES: {
        headerSubtitle: 'Términos',
        backButton: 'Volver',
        badge: 'Contrato de Licencia de Uso - Administración Pública',
        title: 'Términos de Uso del Sistema Tuggi City OS',
        subtitle: 'Estos términos rigen el uso de Tuggi City OS por Municipios y Entidades Gubernamentales, garantizando la legitimidad en la gestión de datos y contenido público.',
        lastUpdated: 'Última actualización: 8 de Febrero de 2026',
        section1: {
          title: '1. Licencia de Uso No Exclusiva',
          intro: 'Tuggi Enterprise otorga al Contratante (Entidad Pública) una licencia de uso <strong>no exclusiva, intransferible y temporal</strong> del software Tuggi City OS. El sistema se proporciona en el modelo SaaS (Software as a Service) alojado en la nube, accesible a través del navegador web.',
          items: [
            'La licencia es válida para el territorio y período definidos en un contrato específico.',
            'Las actualizaciones de seguridad y funcionalidades core están incluidas en la licencia estándar.',
            'El acceso está permitido a gestores acreditados y servidores públicos autorizados.'
          ]
        },
        section2: {
          title: '2. Responsabilidad sobre el Contenido',
          intro: 'La Entidad Pública es <strong>la única responsable</strong> de la veracidad, calidad y derechos de autor de todo el contenido ingresado en la plataforma (textos, imágenes, audios y configuraciones de mapas).',
          items: [
            'Tuggi City OS no modera contenido previamente, actuando solo como infraestructura tecnológica.',
            'El Municipio debe garantizar que posee los derechos de uso de imágenes y marcas insertadas.',
            'Recomendamos el uso del módulo de <strong>Gobernanza Editorial</strong> para garantizar el cumplimiento de las políticas de comunicación pública.'
          ]
        },
        section3: {
          title: '3. Garantías y SLA (Acuerdo de Nivel de Servicio)',
          intro: 'Garantizamos una disponibilidad de infraestructura mínima del <strong>99.5%</strong> (uptime) calculada mensualmente. Los mantenimientos programados serán comunicados con un mínimo de 48 horas de anticipación.',
          supportTitle: 'Soporte Técnico:',
          supportText: 'El soporte técnico especializado está disponible para administradores durante el horario comercial (9h a 18h, días hábiles). Para incidentes críticos (imposibilidad de acceso total), la atención es 24/7.'
        },
        section4: {
          title: '4. Propiedad Intelectual',
          intro: 'El código fuente, diseño, algoritmos y marcas de Tuggi City OS son propiedad exclusiva de Tuggi Enterprise.',
          items: [
            'El Contratante retiene la propiedad intelectual sobre los datos y contenidos específicos de su municipio.',
            'Está prohibida la ingeniería inversa, sublicenciamiento o copia no autorizada del software.'
          ]
        },
        contact: {
          title: '¿Preguntas Legales?',
          intro: 'Para cuestiones relacionadas con contratos y licenciamiento:',
          email: 'legal@tuggi.com.br',
          phone: '+55 (11) 3003-0000'
        },
        footer: '© 2026 Tuggi Enterprise. Todos los derechos reservados.'
      },
      FR: {
        headerSubtitle: 'Conditions',
        backButton: 'Retour',
        badge: 'Contrat de Licence d\'Utilisation - Administration Publique',
        title: 'Conditions d\'Utilisation du Système Tuggi City OS',
        subtitle: 'Ces conditions régissent l\'utilisation de Tuggi City OS par les Municipalités et Entités Gouvernementales, garantissant la légitimité dans la gestion des données et contenus publics.',
        lastUpdated: 'Dernière mise à jour : 8 février 2026',
        section1: {
          title: '1. Licence d\'Utilisation Non-Exclusive',
          intro: 'Tuggi Enterprise accorde au Contractant (Entité Publique) une licence d\'utilisation <strong>non exclusive, non transférable et temporaire</strong> du logiciel Tuggi City OS. Le système est fourni en modèle SaaS (Software as a Service) hébergé dans le cloud, accessible via navigateur web.',
          items: [
            'La licence est valide pour le territoire et la période définis dans un contrat spécifique.',
            'Les mises à jour de sécurité et les fonctionnalités principales sont incluses dans la licence standard.',
            'L\'accès est autorisé aux gestionnaires accrédités et aux agents publics autorisés.'
          ]
        },
        section2: {
          title: '2. Responsabilité du Contenu',
          intro: 'L\'Entité Publique est <strong>seule responsable</strong> de l\'exactitude, de la qualité et des droits d\'auteur de tout contenu saisi sur la plateforme (textes, images, audio et configurations de cartes).',
          items: [
            'Tuggi City OS ne modère pas le contenu à l\'avance, agissant uniquement comme infrastructure technologique.',
            'La Municipalité doit s\'assurer qu\'elle détient les droits d\'utilisation des images et marques insérées.',
            'Nous recommandons l\'utilisation du module <strong>Gouvernance Éditoriale</strong> pour assurer la conformité avec les politiques de communication publique.'
          ]
        },
        section3: {
          title: '3. Garanties et SLA (Accord de Niveau de Service)',
          intro: 'Nous garantissons une disponibilité minimale de l\'infrastructure de <strong>99,5%</strong> (uptime) calculée mensuellement. Les maintenances programmées seront communiquées avec un préavis minimum de 48 heures.',
          supportTitle: 'Support Technique :',
          supportText: 'Le support technique spécialisé est disponible pour les administrateurs pendant les heures de bureau (9h à 18h, jours ouvrables). Pour les incidents critiques (impossibilité d\'accès total), le service est disponible 24h/24, 7j/7.'
        },
        section4: {
          title: '4. Propriété Intellectuelle',
          intro: 'Le code source, le design, les algorithmes et les marques de Tuggi City OS sont la propriété exclusive de Tuggi Enterprise.',
          items: [
            'Le Contractant conserve la propriété intellectuelle sur les données et contenus spécifiques de sa municipalité.',
            'L\'ingénierie inverse, la sous-licence ou la copie non autorisée du logiciel sont interdites.'
          ]
        },
        contact: {
          title: 'Questions Juridiques ?',
          intro: 'Pour les questions relatives aux contrats et licences :',
          email: 'legal@tuggi.com.br',
          phone: '+55 (11) 3003-0000'
        },
        footer: '© 2026 Tuggi Enterprise. Tous droits réservés.'
      },
      DE: {
        headerSubtitle: 'Nutzungsbedingungen',
        backButton: 'Zurück',
        badge: 'Lizenzvertrag - Öffentliche Verwaltung',
        title: 'Nutzungsbedingungen des Tuggi City OS Systems',
        subtitle: 'Diese Bedingungen regeln die Nutzung von Tuggi City OS durch Kommunen und Regierungsstellen und gewährleisten die Legitimität bei der Verwaltung öffentlicher Daten und Inhalte.',
        lastUpdated: 'Letzte Aktualisierung: 8. Februar 2026',
        section1: {
          title: '1. Nicht-Exklusive Nutzungslizenz',
          intro: 'Tuggi Enterprise gewährt dem Auftragnehmer (Öffentliche Einrichtung) eine <strong>nicht-exklusive, nicht übertragbare und zeitlich begrenzte</strong> Lizenz zur Nutzung der Tuggi City OS Software. Das System wird im SaaS-Modell (Software as a Service) in der Cloud gehostet und ist über Webbrowser zugänglich.',
          items: [
            'Die Lizenz gilt für das im spezifischen Vertrag festgelegte Gebiet und den Zeitraum.',
            'Sicherheitsupdates und Kernfunktionen sind in der Standardlizenz enthalten.',
            'Der Zugang ist akkreditierten Managern und autorisierten öffentlichen Bediensteten gestattet.'
          ]
        },
        section2: {
          title: '2. Verantwortung für Inhalte',
          intro: 'Die öffentliche Einrichtung ist <strong>allein verantwortlich</strong> für die Richtigkeit, Qualität und Urheberrechte aller auf der Plattform eingegebenen Inhalte (Texte, Bilder, Audio und Kartenkonfigurationen).',
          items: [
            'Tuggi City OS moderiert Inhalte nicht im Voraus und fungiert nur als technologische Infrastruktur.',
            'Die Kommune muss sicherstellen, dass sie die Nutzungsrechte für eingefügte Bilder und Marken besitzt.',
            'Wir empfehlen die Nutzung des <strong>Redaktionellen Governance</strong>-Moduls zur Gewährleistung der Einhaltung öffentlicher Kommunikationsrichtlinien.'
          ]
        },
        section3: {
          title: '3. Garantien und SLA (Service Level Agreement)',
          intro: 'Wir garantieren eine minimale Infrastrukturverfügbarkeit von <strong>99,5%</strong> (Uptime), monatlich berechnet. Geplante Wartungsarbeiten werden mit einem Vorlauf von mindestens 48 Stunden angekündigt.',
          supportTitle: 'Technischer Support:',
          supportText: 'Spezialisierter technischer Support steht Administratoren während der Geschäftszeiten (9 bis 18 Uhr, Werktage) zur Verfügung. Bei kritischen Vorfällen (vollständige Zugangsverweigerung) ist der Service rund um die Uhr verfügbar.'
        },
        section4: {
          title: '4. Geistiges Eigentum',
          intro: 'Der Quellcode, das Design, die Algorithmen und die Marken von Tuggi City OS sind das ausschließliche Eigentum von Tuggi Enterprise.',
          items: [
            'Der Auftragnehmer behält das geistige Eigentum an Daten und spezifischen Inhalten seiner Kommune.',
            'Reverse Engineering, Unterlizenzierung oder unbefugtes Kopieren der Software ist verboten.'
          ]
        },
        contact: {
          title: 'Rechtliche Fragen?',
          intro: 'Für Fragen zu Verträgen und Lizenzen:',
          email: 'legal@tuggi.com.br',
          phone: '+55 (11) 3003-0000'
        },
        footer: '© 2026 Tuggi Enterprise. Alle Rechte vorbehalten.'
      },
      IT: {
        headerSubtitle: 'Termini',
        backButton: 'Indietro',
        badge: 'Contratto di Licenza d\'Uso - Pubblica Amministrazione',
        title: 'Termini di Utilizzo del Sistema Tuggi City OS',
        subtitle: 'Questi termini regolano l\'uso di Tuggi City OS da parte di Comuni ed Enti Governativi, garantendo la legittimità nella gestione di dati e contenuti pubblici.',
        lastUpdated: 'Ultimo aggiornamento: 8 febbraio 2026',
        section1: {
          title: '1. Licenza d\'Uso Non Esclusiva',
          intro: 'Tuggi Enterprise concede al Contraente (Ente Pubblico) una licenza d\'uso <strong>non esclusiva, non trasferibile e temporanea</strong> del software Tuggi City OS. Il sistema è fornito in modalità SaaS (Software as a Service) ospitato nel cloud, accessibile tramite browser web.',
          items: [
            'La licenza è valida per il territorio e il periodo definiti in un contratto specifico.',
            'Gli aggiornamenti di sicurezza e le funzionalità principali sono inclusi nella licenza standard.',
            'L\'accesso è consentito a gestori accreditati e dipendenti pubblici autorizzati.'
          ]
        },
        section2: {
          title: '2. Responsabilità sui Contenuti',
          intro: 'L\'Ente Pubblico è <strong>l\'unico responsabile</strong> della veridicità, qualità e diritti d\'autore di tutti i contenuti inseriti sulla piattaforma (testi, immagini, audio e configurazioni delle mappe).',
          items: [
            'Tuggi City OS non modera i contenuti preventivamente, agendo solo come infrastruttura tecnologica.',
            'Il Comune deve garantire di possedere i diritti d\'uso delle immagini e dei marchi inseriti.',
            'Raccomandiamo l\'uso del modulo <strong>Governance Editoriale</strong> per garantire la conformità con le politiche di comunicazione pubblica.'
          ]
        },
        section3: {
          title: '3. Garanzie e SLA (Accordo sul Livello di Servizio)',
          intro: 'Garantiamo una disponibilità minima dell\'infrastruttura del <strong>99,5%</strong> (uptime) calcolata mensilmente. Le manutenzioni programmate saranno comunicate con un preavviso minimo di 48 ore.',
          supportTitle: 'Supporto Tecnico:',
          supportText: 'Il supporto tecnico specializzato è disponibile per gli amministratori durante l\'orario di lavoro (dalle 9 alle 18, giorni lavorativi). Per incidenti critici (impossibilità di accesso totale), il servizio è disponibile 24/7.'
        },
        section4: {
          title: '4. Proprietà Intellettuale',
          intro: 'Il codice sorgente, il design, gli algoritmi e i marchi di Tuggi City OS sono di proprietà esclusiva di Tuggi Enterprise.',
          items: [
            'Il Contraente mantiene la proprietà intellettuale sui dati e contenuti specifici del proprio comune.',
            'È vietata l\'ingegneria inversa, la sublicenza o la copia non autorizzata del software.'
          ]
        },
        contact: {
          title: 'Domande Legali?',
          intro: 'Per questioni relative a contratti e licenze:',
          email: 'legal@tuggi.com.br',
          phone: '+55 (11) 3003-0000'
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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-slate-700">
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 lg:p-12 space-y-12">
          
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

          <section>
             <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
               <FileText className="w-5 h-5 text-slate-400" />
               {t.section1.title}
             </h2>
             <p className="text-sm" dangerouslySetInnerHTML={{ __html: t.section1.intro }} />
             <ul className="list-disc pl-5 mt-3 space-y-1.5 text-sm">
               {t.section1.items.map((item: string, index: number) => (
                 <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
               ))}
             </ul>
          </section>

          <section>
             <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
               <CheckCircle2 className="w-5 h-5 text-slate-400" />
               {t.section2.title}
             </h2>
             <p className="text-sm" dangerouslySetInnerHTML={{ __html: t.section2.intro }} />
             <ul className="list-disc pl-5 mt-3 space-y-1.5 text-sm">
               {t.section2.items.map((item: string, index: number) => (
                 <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
               ))}
             </ul>
          </section>

          <section>
             <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
               <AlertTriangle className="w-5 h-5 text-slate-400" />
               {t.section3.title}
             </h2>
             <p className="text-sm" dangerouslySetInnerHTML={{ __html: t.section3.intro }} />
             <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mt-4 text-sm">
               <h3 className="font-bold text-slate-900 mb-2 uppercase tracking-wide text-xs">{t.section3.supportTitle}</h3>
               <p>
                 {t.section3.supportText}
               </p>
             </div>
          </section>

          <section>
             <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
               <Shield className="w-5 h-5 text-slate-400" />
               {t.section4.title}
             </h2>
             <p className="text-sm" dangerouslySetInnerHTML={{ __html: t.section4.intro }} />
             <ul className="list-disc pl-5 mt-3 space-y-1.5 text-sm">
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
                 <strong>{currentLanguage === 'EN' ? 'Phone:' : currentLanguage === 'ES' ? 'Teléfono:' : 'Telefone:'}</strong> {t.contact.phone}
               </p>
            </section>

        </div>
      </main>
      
      <footer className="py-8 text-center text-slate-400 text-xs border-t border-slate-200 mt-12">
        <p>{t.footer}</p>
      </footer>
    </div>
  );
};

export default GovTermsOfUsePage;
