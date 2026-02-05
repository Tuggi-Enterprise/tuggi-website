/**
 * Pre-rendering script for SEO
 * Generates static HTML files for each route with correct meta tags
 * Platform-agnostic: works on Vercel, Netlify, Cloudflare Pages, AWS S3, etc.
 * 
 * Run after vite build: node scripts/prerender-seo.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const DIST_DIR = path.join(__dirname, '..', 'dist');
const BASE_URL = 'https://www.tuggi.app';

// Supported languages
const LANGUAGES = ['en', 'pt', 'es', 'fr', 'de', 'it'];

// Language to locale mapping
const LOCALE_MAP = {
  en: 'en_US',
  pt: 'pt_BR',
  es: 'es_ES',
  fr: 'fr_FR',
  de: 'de_DE',
  it: 'it_IT'
};

// SEO metadata for all pages and languages
// This is the single source of truth for all SEO content
const SEO_DATA = {
  home: {
    en: {
      title: 'Tuggi | Cultural copilot for your drive — discover stories',
      description: 'Tuggi is an automatic cultural narration app that transforms journeys into experiences. Simple, safe, and designed for drivers.',
      ogTitle: 'Tuggi — Discover stories while driving',
      ogDescription: 'Transform your journeys into cultural experiences with automatic narrations. Simple and safe for every driver.',
      ogImage: '/og/home.jpg'
    },
    pt: {
      title: 'Tuggi | Copiloto cultural para quem está dirigindo',
      description: 'O Tuggi narra o mundo ao seu redor automaticamente. Cultura e contexto no seu trajeto com foco em segurança.',
      ogTitle: 'Tuggi — Copiloto cultural para quem está dirigindo',
      ogDescription: 'Transforme seus trajetos em descobertas. Narração automática de histórias e curiosidades culturais enquanto você dirige.',
      ogImage: '/og/home.jpg'
    },
    es: {
      title: 'Tuggi | Copiloto cultural para quien conduce — descubre historias',
      description: 'Tuggi es una app de narraciones culturales automáticas que transforma trayectos en descubrimientos. Simple, segura y hecha para conductores.',
      ogTitle: 'Tuggi — Descubre historias mientras conduces',
      ogDescription: 'Transforma tus trayectos en descubrimientos culturales con narrativas automáticas. Simple y seguro para el conductor.',
      ogImage: '/og/home.jpg'
    },
    fr: {
      title: 'Tuggi | Copilote culturel pour votre conduite — découvrez des histoires',
      description: 'Tuggi est une application de narration culturelle automatique qui transforme les trajets en découvertes. Simple, sûre et conçue pour les conducteurs.',
      ogTitle: 'Tuggi — Découvrez des histoires en conduisant',
      ogDescription: 'Transformez vos trajets en découvertes culturelles avec des récits automatiques. Simple et sûr pour chaque conducteur.',
      ogImage: '/og/home.jpg'
    },
    de: {
      title: 'Tuggi | Kultureller Copilot für Ihre Fahrt — Entdecken Sie Geschichten',
      description: 'Tuggi ist eine automatische kulturelle Erzähl-App, die Fahrten in Entdeckungen verwandelt. Einfach, sicher und für Fahrer konzipiert.',
      ogTitle: 'Tuggi — Entdecken Sie Geschichten während der Fahrt',
      ogDescription: 'Verwandeln Sie Ihre Fahrten in kulturelle Entdeckungen mit automatischen Erzählungen. Einfach und sicher für jeden Fahrer.',
      ogImage: '/og/home.jpg'
    },
    it: {
      title: 'Tuggi | Copilota culturale per la tua guida — scopri storie',
      description: "Tuggi è un'app di narrazione culturale automatica che trasforma i viaggi in scoperte. Semplice, sicuro e pensato per i conducenti.",
      ogTitle: 'Tuggi — Scopri storie mentre guidi',
      ogDescription: 'Trasforma i tuoi viaggi in scoperte culturali con narrazioni automatiche. Semplice e sicuro per ogni conducente.',
      ogImage: '/og/home.jpg'
    }
  },
  gov: {
    en: {
      title: 'Smart Tourism Infrastructure for Municipalities | Tuggi',
      description: 'Official audio infrastructure for territories. Municipal editorial control, heritage education, flow management, and civic communication. Schedule a technical presentation.',
      ogTitle: 'Smart Tourism Infrastructure for Municipalities | Tuggi',
      ogDescription: 'Turn mobility into cultural intelligence — with full municipal governance of the narrative. White-label audio layer for your territory.',
      ogImage: '/og/gov.jpg'
    },
    pt: {
      title: 'Infraestrutura Oficial de Turismo Inteligente para Municípios | Tuggi',
      description: 'Camada de áudio oficial para o território. Controlo editorial municipal, educação patrimonial, gestão de fluxos e comunicação cívica. Agende uma apresentação técnica.',
      ogTitle: 'Infraestrutura Oficial de Turismo Inteligente para Municípios | Tuggi',
      ogDescription: 'Transformar mobilidade em inteligência cultural — com governança editorial municipal. Camada white label de áudio para o seu território.',
      ogImage: '/og/gov.jpg'
    },
    es: {
      title: 'Infraestructura Oficial de Turismo Inteligente para Municipios | Tuggi',
      description: 'Capa de audio oficial para el territorio. Control editorial municipal, educación patrimonial, gestión de flujos y comunicación cívica.',
      ogTitle: 'Infraestructura Oficial de Turismo Inteligente para Municipios | Tuggi',
      ogDescription: 'Transformar movilidad en inteligencia cultural — con gobernanza editorial municipal.',
      ogImage: '/og/gov.jpg'
    },
    fr: {
      title: 'Infrastructure Officielle de Tourisme Intelligent pour les Municipalités | Tuggi',
      description: 'Couche audio officielle pour le territoire. Contrôle éditorial municipal, éducation patrimoniale, gestion des flux et communication civique.',
      ogTitle: 'Infrastructure Officielle de Tourisme Intelligent pour les Municipalités | Tuggi',
      ogDescription: 'Transformer la mobilité en intelligence culturelle — avec gouvernance éditoriale municipale.',
      ogImage: '/og/gov.jpg'
    },
    de: {
      title: 'Offizielle Smart-Tourismus-Infrastruktur für Gemeinden | Tuggi',
      description: 'Offizielle Audio-Schicht für das Territorium. Kommunale redaktionelle Kontrolle, Kulturerbe-Bildung, Besucherfluss-Management.',
      ogTitle: 'Offizielle Smart-Tourismus-Infrastruktur für Gemeinden | Tuggi',
      ogDescription: 'Mobilität in kulturelle Intelligenz verwandeln — mit kommunaler redaktioneller Kontrolle.',
      ogImage: '/og/gov.jpg'
    },
    it: {
      title: 'Infrastruttura Ufficiale di Turismo Intelligente per i Comuni | Tuggi',
      description: 'Layer audio ufficiale per il territorio. Controllo editoriale comunale, educazione al patrimonio, gestione dei flussi e comunicazione civica.',
      ogTitle: 'Infrastruttura Ufficiale di Turismo Intelligente per i Comuni | Tuggi',
      ogDescription: 'Trasformare la mobilità in intelligenza culturale — con governance editoriale comunale.',
      ogImage: '/og/gov.jpg'
    }
  },
  contact: {
    en: {
      title: 'Contact Us | Tuggi',
      description: 'Get in touch with Tuggi to learn more about our cultural discovery app. Explore cities with real-time audio stories and cultural curiosities.',
      ogTitle: 'Contact Us | Tuggi',
      ogDescription: 'Get in touch with Tuggi to learn more about our cultural discovery app.',
      ogImage: '/og/home.jpg'
    },
    pt: {
      title: 'Contato | Tuggi',
      description: 'Fale com a Tuggi: suporte, sugestões e parcerias. Canal oficial por e-mail.',
      ogTitle: 'Contato | Tuggi',
      ogDescription: 'Fale com a Tuggi: suporte, sugestões e parcerias. Canal oficial por e-mail.',
      ogImage: '/og/home.jpg'
    },
    es: {
      title: 'Contacto | Tuggi',
      description: 'Ponte en contacto con Tuggi para conocer más sobre nuestra app de descubrimiento cultural.',
      ogTitle: 'Contacto | Tuggi',
      ogDescription: 'Ponte en contacto con Tuggi para conocer más sobre nuestra app de descubrimiento cultural.',
      ogImage: '/og/home.jpg'
    },
    fr: {
      title: 'Contact | Tuggi',
      description: 'Contactez Tuggi pour en savoir plus sur notre application de découverte culturelle.',
      ogTitle: 'Contact | Tuggi',
      ogDescription: 'Contactez Tuggi pour en savoir plus sur notre application de découverte culturelle.',
      ogImage: '/og/home.jpg'
    },
    de: {
      title: 'Kontakt | Tuggi',
      description: 'Kontaktieren Sie Tuggi, um mehr über unsere kulturelle Entdeckungs-App zu erfahren.',
      ogTitle: 'Kontakt | Tuggi',
      ogDescription: 'Kontaktieren Sie Tuggi, um mehr über unsere kulturelle Entdeckungs-App zu erfahren.',
      ogImage: '/og/home.jpg'
    },
    it: {
      title: 'Contatto | Tuggi',
      description: 'Contatta Tuggi per saperne di più sulla nostra app di scoperta culturale.',
      ogTitle: 'Contatto | Tuggi',
      ogDescription: 'Contatta Tuggi per saperne di più sulla nostra app di scoperta culturale.',
      ogImage: '/og/home.jpg'
    }
  },
  investors: {
    en: {
      title: 'Investors | Tuggi',
      description: "Information for investors: Tuggi's thesis, product, and business model — cultural audio copilot for car journeys.",
      ogTitle: 'Investors | Tuggi',
      ogDescription: "Information for investors: Tuggi's thesis, product, and business model.",
      ogImage: '/og/home.jpg'
    },
    pt: {
      title: 'Investidores | Tuggi',
      description: 'Informações para investidores: tese, produto e modelo de negócio da Tuggi — copiloto cultural em áudio para trajetos de carro.',
      ogTitle: 'Investidores | Tuggi',
      ogDescription: 'Informações para investidores: tese, produto e modelo de negócio da Tuggi.',
      ogImage: '/og/home.jpg'
    },
    es: {
      title: 'Inversores | Tuggi',
      description: 'Información para inversores: tesis, producto y modelo de negocio de Tuggi — copiloto cultural en audio para trayectos en coche.',
      ogTitle: 'Inversores | Tuggi',
      ogDescription: 'Información para inversores: tesis, producto y modelo de negocio de Tuggi.',
      ogImage: '/og/home.jpg'
    },
    fr: {
      title: 'Investisseurs | Tuggi',
      description: "Informations pour les investisseurs : thèse, produit et modèle d'affaires de Tuggi — copilote culturel audio.",
      ogTitle: 'Investisseurs | Tuggi',
      ogDescription: "Informations pour les investisseurs : thèse, produit et modèle d'affaires.",
      ogImage: '/og/home.jpg'
    },
    de: {
      title: 'Investoren | Tuggi',
      description: 'Informationen für Investoren: These, Produkt und Geschäftsmodell von Tuggi — kultureller Audio-Copilot.',
      ogTitle: 'Investoren | Tuggi',
      ogDescription: 'Informationen für Investoren: These, Produkt und Geschäftsmodell.',
      ogImage: '/og/home.jpg'
    },
    it: {
      title: 'Investitori | Tuggi',
      description: 'Informazioni per gli investitori: tesi, prodotto e modello di business di Tuggi — copilota culturale audio.',
      ogTitle: 'Investitori | Tuggi',
      ogDescription: 'Informazioni per gli investitori: tesi, prodotto e modello di business.',
      ogImage: '/og/home.jpg'
    }
  },
  purpose: {
    en: {
      title: 'Our Purpose | Tuggi',
      description: "Discover Tuggi's mission to connect people with local culture through real-time audio stories and cultural discovery.",
      ogTitle: 'Our Purpose | Tuggi',
      ogDescription: "Discover Tuggi's mission to connect people with local culture.",
      ogImage: '/og/home.jpg'
    },
    pt: {
      title: 'Nosso Propósito | Tuggi',
      description: 'Descubra a missão da Tuggi de conectar pessoas com a cultura local através de histórias em áudio em tempo real.',
      ogTitle: 'Nosso Propósito | Tuggi',
      ogDescription: 'Descubra a missão da Tuggi de conectar pessoas com a cultura local.',
      ogImage: '/og/home.jpg'
    },
    es: {
      title: 'Nuestro Propósito | Tuggi',
      description: 'Descubre la misión de Tuggi de conectar personas con la cultura local a través de historias de audio en tiempo real.',
      ogTitle: 'Nuestro Propósito | Tuggi',
      ogDescription: 'Descubre la misión de Tuggi de conectar personas con la cultura local.',
      ogImage: '/og/home.jpg'
    },
    fr: {
      title: 'Notre Mission | Tuggi',
      description: 'Découvrez la mission de Tuggi de connecter les gens avec la culture locale à travers des histoires audio en temps réel.',
      ogTitle: 'Notre Mission | Tuggi',
      ogDescription: 'Découvrez la mission de Tuggi de connecter les gens avec la culture locale.',
      ogImage: '/og/home.jpg'
    },
    de: {
      title: 'Unser Zweck | Tuggi',
      description: 'Entdecken Sie Tuggis Mission, Menschen mit der lokalen Kultur durch Echtzeit-Audio-Geschichten zu verbinden.',
      ogTitle: 'Unser Zweck | Tuggi',
      ogDescription: 'Entdecken Sie Tuggis Mission, Menschen mit der lokalen Kultur zu verbinden.',
      ogImage: '/og/home.jpg'
    },
    it: {
      title: 'Il Nostro Scopo | Tuggi',
      description: 'Scopri la missione di Tuggi di connettere le persone con la cultura locale attraverso storie audio in tempo reale.',
      ogTitle: 'Il Nostro Scopo | Tuggi',
      ogDescription: 'Scopri la missione di Tuggi di connettere le persone con la cultura locale.',
      ogImage: '/og/home.jpg'
    }
  },
  business: {
    en: {
      title: 'For Business | Tuggi — Cultural Data & Narratives',
      description: 'License and integrate cultural audio content and POI metadata for mobility, tourism, and education. Enrich your product with local stories.',
      ogTitle: 'For Business | Tuggi — Cultural Data & Narratives',
      ogDescription: 'License and integrate cultural audio content and POI metadata for mobility, tourism, and education.',
      ogImage: '/og/home.jpg'
    },
    pt: {
      title: 'Para Empresas | Tuggi — Dados Culturais e Narrativas',
      description: 'Licencie e integre conteúdos de áudio culturais e metadados de POI para mobilidade, turismo e educação. Enriqueça seu produto com histórias locais.',
      ogTitle: 'Para Empresas | Tuggi — Dados Culturais e Narrativas',
      ogDescription: 'Licencie e integre conteúdos de áudio culturais e metadados de POI para mobilidade, turismo e educação.',
      ogImage: '/og/home.jpg'
    },
    es: {
      title: 'Para Empresas | Tuggi — Datos Culturales y Narrativas',
      description: 'Licencia e integre contenidos de audio culturales y metadatos de POI para movilidad, turismo y educación.',
      ogTitle: 'Para Empresas | Tuggi — Datos Culturales y Narrativas',
      ogDescription: 'Licencia e integre contenidos de audio culturales y metadatos de POI para movilidad, turismo y educación.',
      ogImage: '/og/home.jpg'
    },
    fr: {
      title: 'Pour les Entreprises | Tuggi — Données Culturelles et Récits',
      description: "Licence et intégration de contenus audio culturels et métadonnées POI pour la mobilité, le tourisme et l'éducation.",
      ogTitle: 'Pour les Entreprises | Tuggi — Données Culturelles et Récits',
      ogDescription: "Licence et intégration de contenus audio culturels et métadonnées POI pour la mobilité, le tourisme et l'éducation.",
      ogImage: '/og/home.jpg'
    },
    de: {
      title: 'Für Unternehmen | Tuggi — Kulturelle Daten & Erzählungen',
      description: 'Lizenzierung und Integration von kulturellen Audioinhalten und POI-Metadaten für Mobilität, Tourismus und Bildung.',
      ogTitle: 'Für Unternehmen | Tuggi — Kulturelle Daten & Erzählungen',
      ogDescription: 'Lizenzierung und Integration von kulturellen Audioinhalten und POI-Metadaten für Mobilität, Tourismus und Bildung.',
      ogImage: '/og/home.jpg'
    },
    it: {
      title: 'Per le Aziende | Tuggi — Dati Culturali e Narrazioni',
      description: 'Licenza e integrazione di contenuti audio culturali e metadati POI per mobilità, turismo e istruzione.',
      ogTitle: 'Per le Aziende | Tuggi — Dati Culturali e Narrazioni',
      ogDescription: 'Licenza e integrazione di contenuti audio culturali e metadati POI per mobilità, turismo e istruzione.',
      ogImage: '/og/home.jpg'
    }
  },
  drivers: {
    en: {
      title: 'For Rideshare Drivers | Tuggi',
      description: 'Turn your rides into 5-star experiences. While you drive, Tuggi tells cultural stories to your passengers automatically.',
      ogTitle: 'For Rideshare Drivers | Tuggi',
      ogDescription: 'Turn your rides into 5-star experiences. While you drive, Tuggi tells cultural stories to your passengers automatically.',
      ogImage: '/og/drivers.jpg'
    },
    pt: {
      title: 'Para Motoristas de App | Tuggi',
      description: 'Transforme suas corridas em experiências 5 estrelas. Enquanto você dirige, o Tuggi conta histórias culturais aos seus passageiros automaticamente.',
      ogTitle: 'Para Motoristas de App | Tuggi',
      ogDescription: 'Transforme suas corridas em experiências 5 estrelas. Enquanto você dirige, o Tuggi conta histórias culturais aos seus passageiros automaticamente.',
      ogImage: '/og/drivers.jpg'
    },
    es: {
      title: 'Para Conductores de App | Tuggi',
      description: 'Convierte tus viajes en experiencias 5 estrellas. Mientras conduces, Tuggi cuenta historias culturales a tus pasajeros automáticamente.',
      ogTitle: 'Para Conductores de App | Tuggi',
      ogDescription: 'Convierte tus viajes en experiencias 5 estrellas. Mientras conduces, Tuggi cuenta historias culturales a tus pasajeros automáticamente.',
      ogImage: '/og/drivers.jpg'
    },
    fr: {
      title: 'Pour les Chauffeurs VTC | Tuggi',
      description: 'Transformez vos courses en expériences 5 étoiles. Pendant que vous conduisez, Tuggi raconte des histoires culturelles à vos passagers automatiquement.',
      ogTitle: 'Pour les Chauffeurs VTC | Tuggi',
      ogDescription: 'Transformez vos courses en expériences 5 étoiles. Pendant que vous conduisez, Tuggi raconte des histoires culturelles à vos passagers automatiquement.',
      ogImage: '/og/drivers.jpg'
    },
    de: {
      title: 'Für Rideshare-Fahrer | Tuggi',
      description: 'Verwandeln Sie Ihre Fahrten in 5-Sterne-Erlebnisse. Während Sie fahren, erzählt Tuggi Ihren Fahrgästen automatisch kulturelle Geschichten.',
      ogTitle: 'Für Rideshare-Fahrer | Tuggi',
      ogDescription: 'Verwandeln Sie Ihre Fahrten in 5-Sterne-Erlebnisse. Während Sie fahren, erzählt Tuggi Ihren Fahrgästen automatisch kulturelle Geschichten.',
      ogImage: '/og/drivers.jpg'
    },
    it: {
      title: 'Per Autisti App | Tuggi',
      description: 'Trasforma le tue corse in esperienze 5 stelle. Mentre guidi, Tuggi racconta storie culturali ai tuoi passeggeri automaticamente.',
      ogTitle: 'Per Autisti App | Tuggi',
      ogDescription: 'Trasforma le tue corse in esperienze 5 stelle. Mentre guidi, Tuggi racconta storie culturali ai tuoi passeggeri automaticamente.',
      ogImage: '/og/drivers.jpg'
    }
  },
  privacy: {
    en: {
      title: 'Privacy Policy | Tuggi',
      description: 'Privacy policy and data protection information for Tuggi cultural discovery app.',
      ogTitle: 'Privacy Policy | Tuggi',
      ogDescription: 'Privacy policy and data protection information for Tuggi.',
      ogImage: '/og/home.jpg'
    },
    pt: {
      title: 'Política de Privacidade | Tuggi',
      description: 'Política de privacidade e informações sobre proteção de dados do aplicativo Tuggi.',
      ogTitle: 'Política de Privacidade | Tuggi',
      ogDescription: 'Política de privacidade e informações sobre proteção de dados do aplicativo Tuggi.',
      ogImage: '/og/home.jpg'
    },
    es: {
      title: 'Política de Privacidad | Tuggi',
      description: 'Política de privacidad e información sobre protección de datos de la aplicación Tuggi.',
      ogTitle: 'Política de Privacidad | Tuggi',
      ogDescription: 'Política de privacidad e información sobre protección de datos de la aplicación Tuggi.',
      ogImage: '/og/home.jpg'
    },
    fr: {
      title: 'Politique de Confidentialité | Tuggi',
      description: "Politique de confidentialité et informations sur la protection des données pour l'application Tuggi.",
      ogTitle: 'Politique de Confidentialité | Tuggi',
      ogDescription: "Politique de confidentialité et informations sur la protection des données pour l'application Tuggi.",
      ogImage: '/og/home.jpg'
    },
    de: {
      title: 'Datenschutzrichtlinie | Tuggi',
      description: 'Datenschutzrichtlinie und Informationen zum Datenschutz für die Tuggi-App.',
      ogTitle: 'Datenschutzrichtlinie | Tuggi',
      ogDescription: 'Datenschutzrichtlinie und Informationen zum Datenschutz für die Tuggi-App.',
      ogImage: '/og/home.jpg'
    },
    it: {
      title: 'Informativa sulla Privacy | Tuggi',
      description: "Informativa sulla privacy e informazioni sulla protezione dei dati per l'app Tuggi.",
      ogTitle: 'Informativa sulla Privacy | Tuggi',
      ogDescription: "Informativa sulla privacy e informazioni sulla protezione dei dati per l'app Tuggi.",
      ogImage: '/og/home.jpg'
    }
  },
  terms: {
    en: {
      title: 'Terms of Use | Tuggi',
      description: 'Terms of use and service conditions for Tuggi cultural discovery app.',
      ogTitle: 'Terms of Use | Tuggi',
      ogDescription: 'Terms of use and service conditions for Tuggi.',
      ogImage: '/og/home.jpg'
    },
    pt: {
      title: 'Termos de Uso | Tuggi',
      description: 'Termos de uso e condições de serviço do aplicativo Tuggi.',
      ogTitle: 'Termos de Uso | Tuggi',
      ogDescription: 'Termos de uso e condições de serviço do aplicativo Tuggi.',
      ogImage: '/og/home.jpg'
    },
    es: {
      title: 'Términos de Uso | Tuggi',
      description: 'Términos de uso y condiciones de servicio de la aplicación Tuggi.',
      ogTitle: 'Términos de Uso | Tuggi',
      ogDescription: 'Términos de uso y condiciones de servicio de la aplicación Tuggi.',
      ogImage: '/og/home.jpg'
    },
    fr: {
      title: "Conditions d'Utilisation | Tuggi",
      description: "Conditions d'utilisation et conditions de service pour l'application Tuggi.",
      ogTitle: "Conditions d'Utilisation | Tuggi",
      ogDescription: "Conditions d'utilisation et conditions de service pour l'application Tuggi.",
      ogImage: '/og/home.jpg'
    },
    de: {
      title: 'Nutzungsbedingungen | Tuggi',
      description: 'Nutzungsbedingungen und Servicebedingungen für die Tuggi-App.',
      ogTitle: 'Nutzungsbedingungen | Tuggi',
      ogDescription: 'Nutzungsbedingungen und Servicebedingungen für die Tuggi-App.',
      ogImage: '/og/home.jpg'
    },
    it: {
      title: "Termini d'Uso | Tuggi",
      description: "Termini d'uso e condizioni di servizio per l'app Tuggi.",
      ogTitle: "Termini d'Uso | Tuggi",
      ogDescription: "Termini d'uso e condizioni di servizio per l'app Tuggi.",
      ogImage: '/og/home.jpg'
    }
  },
  cookies: {
    en: {
      title: 'Cookie Policy | Tuggi',
      description: 'Cookie policy and information about how Tuggi uses cookies.',
      ogTitle: 'Cookie Policy | Tuggi',
      ogDescription: 'Cookie policy and information about how Tuggi uses cookies.',
      ogImage: '/og/home.jpg'
    },
    pt: {
      title: 'Política de Cookies | Tuggi',
      description: 'Política de cookies e informações sobre como o Tuggi usa cookies.',
      ogTitle: 'Política de Cookies | Tuggi',
      ogDescription: 'Política de cookies e informações sobre como o Tuggi usa cookies.',
      ogImage: '/og/home.jpg'
    },
    es: {
      title: 'Política de Cookies | Tuggi',
      description: 'Política de cookies e información sobre cómo Tuggi usa cookies.',
      ogTitle: 'Política de Cookies | Tuggi',
      ogDescription: 'Política de cookies e información sobre cómo Tuggi usa cookies.',
      ogImage: '/og/home.jpg'
    },
    fr: {
      title: 'Politique de Cookies | Tuggi',
      description: 'Politique de cookies et informations sur la façon dont Tuggi utilise les cookies.',
      ogTitle: 'Politique de Cookies | Tuggi',
      ogDescription: 'Politique de cookies et informations sur la façon dont Tuggi utilise les cookies.',
      ogImage: '/og/home.jpg'
    },
    de: {
      title: 'Cookie-Richtlinie | Tuggi',
      description: 'Cookie-Richtlinie und Informationen darüber, wie Tuggi Cookies verwendet.',
      ogTitle: 'Cookie-Richtlinie | Tuggi',
      ogDescription: 'Cookie-Richtlinie und Informationen darüber, wie Tuggi Cookies verwendet.',
      ogImage: '/og/home.jpg'
    },
    it: {
      title: 'Informativa sui Cookie | Tuggi',
      description: 'Informativa sui cookie e informazioni su come Tuggi utilizza i cookie.',
      ogTitle: 'Informativa sui Cookie | Tuggi',
      ogDescription: 'Informativa sui cookie e informazioni su come Tuggi utilizza i cookie.',
      ogImage: '/og/home.jpg'
    }
  },
  'data-deletion': {
    en: {
      title: 'Data Deletion | Tuggi',
      description: 'Request deletion of your data from Tuggi.',
      ogTitle: 'Data Deletion | Tuggi',
      ogDescription: 'Request deletion of your data from Tuggi.',
      ogImage: '/og/home.jpg'
    },
    pt: {
      title: 'Exclusão de Dados | Tuggi',
      description: 'Solicite a exclusão dos seus dados do Tuggi.',
      ogTitle: 'Exclusão de Dados | Tuggi',
      ogDescription: 'Solicite a exclusão dos seus dados do Tuggi.',
      ogImage: '/og/home.jpg'
    },
    es: {
      title: 'Eliminación de Datos | Tuggi',
      description: 'Solicite la eliminación de sus datos de Tuggi.',
      ogTitle: 'Eliminación de Datos | Tuggi',
      ogDescription: 'Solicite la eliminación de sus datos de Tuggi.',
      ogImage: '/og/home.jpg'
    },
    fr: {
      title: 'Suppression des Données | Tuggi',
      description: 'Demandez la suppression de vos données de Tuggi.',
      ogTitle: 'Suppression des Données | Tuggi',
      ogDescription: 'Demandez la suppression de vos données de Tuggi.',
      ogImage: '/og/home.jpg'
    },
    de: {
      title: 'Datenlöschung | Tuggi',
      description: 'Beantragen Sie die Löschung Ihrer Daten bei Tuggi.',
      ogTitle: 'Datenlöschung | Tuggi',
      ogDescription: 'Beantragen Sie die Löschung Ihrer Daten bei Tuggi.',
      ogImage: '/og/home.jpg'
    },
    it: {
      title: 'Cancellazione Dati | Tuggi',
      description: 'Richiedi la cancellazione dei tuoi dati da Tuggi.',
      ogTitle: 'Cancellazione Dati | Tuggi',
      ogDescription: 'Richiedi la cancellazione dei tuoi dati da Tuggi.',
      ogImage: '/og/home.jpg'
    }
  }
};

// URL mappings for localized page slugs
const PAGE_URL_MAPPINGS = {
  home: { en: '', pt: '', es: '', fr: '', de: '', it: '' },
  gov: { en: 'gov', pt: 'gov', es: 'gov', fr: 'gov', de: 'gov', it: 'gov' },
  contact: { en: 'contact', pt: 'contact', es: 'contact', fr: 'contact', de: 'contact', it: 'contact' },
  investors: { en: 'investors', pt: 'investidores', es: 'inversores', fr: 'investisseurs', de: 'investoren', it: 'investitori' },
  purpose: { en: 'purpose', pt: 'proposito', es: 'proposito', fr: 'mission', de: 'zweck', it: 'scopo' },
  business: { en: 'business', pt: 'empresas', es: 'empresas', fr: 'entreprises', de: 'unternehmen', it: 'aziende' },
  drivers: { en: 'drivers', pt: 'motoristas', es: 'conductores', fr: 'chauffeurs', de: 'fahrer', it: 'autisti' },
  privacy: { en: 'privacy', pt: 'politica-de-privacidade', es: 'politica-de-privacidad', fr: 'politique-de-confidentialite', de: 'datenschutz', it: 'informativa-privacy' },
  terms: { en: 'terms', pt: 'termos-de-uso', es: 'terminos-de-uso', fr: 'conditions-d-utilisation', de: 'nutzungsbedingungen', it: 'termini-di-utilizzo' },
  cookies: { en: 'cookies', pt: 'politica-de-cookies', es: 'politica-de-cookies', fr: 'politique-cookies', de: 'cookie-richtlinie', it: 'informativa-cookie' },
  'data-deletion': { en: 'data-deletion', pt: 'exclusao-de-dados', es: 'eliminacion-de-datos', fr: 'suppression-donnees', de: 'datenloeschung', it: 'cancellazione-dati' }
};

/**
 * Replace meta tags in HTML content
 */
function replaceMetaTags(html, seoData, lang, page, url) {
  const locale = LOCALE_MAP[lang];
  const ogImage = `${BASE_URL}${seoData.ogImage || '/og/home.jpg'}`;
  
  // Generate hreflang links
  const hreflangLinks = LANGUAGES.map(l => {
    const pageSlug = PAGE_URL_MAPPINGS[page]?.[l] || page;
    const pageUrl = page === 'home' 
      ? `${BASE_URL}/${l}/`
      : `${BASE_URL}/${l}/${pageSlug}`;
    return `<link rel="alternate" hreflang="${l}" href="${pageUrl}" />`;
  }).join('\n    ');
  
  // Add x-default hreflang
  const xDefaultUrl = page === 'home' 
    ? `${BASE_URL}/en/`
    : `${BASE_URL}/en/${PAGE_URL_MAPPINGS[page]?.en || page}`;
  const xDefaultLink = `<link rel="alternate" hreflang="x-default" href="${xDefaultUrl}" />`;

  let result = html;
  
  // Replace title
  result = result.replace(
    /<title>[^<]*<\/title>/,
    `<title>${seoData.title}</title>`
  );
  
  // Replace meta description
  result = result.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${seoData.description}" />`
  );
  
  // Replace og:title
  result = result.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${seoData.ogTitle}" />`
  );
  
  // Replace og:description
  result = result.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${seoData.ogDescription}" />`
  );
  
  // Replace og:url
  result = result.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${url}" />`
  );
  
  // Replace og:image
  result = result.replace(
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:image" content="${ogImage}" />`
  );
  
  // Replace og:locale
  result = result.replace(
    /<meta\s+property="og:locale"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:locale" content="${locale}" />`
  );
  
  // Replace twitter:title
  result = result.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${seoData.ogTitle}" />`
  );
  
  // Replace twitter:description
  result = result.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${seoData.ogDescription}" />`
  );
  
  // Replace twitter:image
  result = result.replace(
    /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:image" content="${ogImage}" />`
  );
  
  // Replace canonical URL
  result = result.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${url}" />`
  );
  
  // Replace html lang attribute
  result = result.replace(
    /<html\s+lang="[^"]*">/,
    `<html lang="${lang}">`
  );
  
  // Add hreflang links after canonical
  result = result.replace(
    /(<link\s+rel="canonical"[^>]*>)/,
    `$1\n    ${hreflangLinks}\n    ${xDefaultLink}`
  );
  
  return result;
}

/**
 * Main pre-rendering function
 */
async function prerender() {
  console.log('🚀 Starting SEO pre-rendering...\n');
  
  // Check if dist directory exists
  if (!fs.existsSync(DIST_DIR)) {
    console.error('❌ Error: dist directory not found. Run "npm run build" first.');
    process.exit(1);
  }
  
  // Read the base index.html
  const indexPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error('❌ Error: dist/index.html not found. Run "npm run build" first.');
    process.exit(1);
  }
  
  const baseHtml = fs.readFileSync(indexPath, 'utf-8');
  let generatedCount = 0;
  
  // Generate HTML for each language and page combination
  for (const lang of LANGUAGES) {
    for (const [page, langData] of Object.entries(SEO_DATA)) {
      const seoData = langData[lang];
      if (!seoData) {
        console.warn(`⚠️  No SEO data for ${lang}/${page}, skipping...`);
        continue;
      }
      
      // Get the localized page slug
      const pageSlug = PAGE_URL_MAPPINGS[page]?.[lang] || page;
      
      // Determine the output path
      let outputDir;
      let url;
      
      if (page === 'home') {
        outputDir = path.join(DIST_DIR, lang);
        url = `${BASE_URL}/${lang}/`;
      } else {
        outputDir = path.join(DIST_DIR, lang, pageSlug);
        url = `${BASE_URL}/${lang}/${pageSlug}`;
      }
      
      // Create directory if it doesn't exist
      fs.mkdirSync(outputDir, { recursive: true });
      
      // Generate modified HTML
      const modifiedHtml = replaceMetaTags(baseHtml, seoData, lang, page, url);
      
      // Write the file
      const outputPath = path.join(outputDir, 'index.html');
      fs.writeFileSync(outputPath, modifiedHtml, 'utf-8');
      
      generatedCount++;
      console.log(`✅ Generated: ${lang}/${page === 'home' ? '' : pageSlug}`);
    }
  }
  
  console.log(`\n🎉 Pre-rendering complete! Generated ${generatedCount} HTML files.`);
  console.log('📦 Ready for deployment to any static hosting platform.\n');
}

// Run the script
prerender().catch(error => {
  console.error('❌ Pre-rendering failed:', error);
  process.exit(1);
});
