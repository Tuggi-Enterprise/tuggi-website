import React, { useState } from 'react';
import { 
  X, Download, 
  Volume2, Navigation, Music, Car, 
  Apple, Smartphone, RouteOff, Activity, Footprints,
  Check, Star, Shield, CreditCard, 
  Plus, Lock, Globe,
  ChevronDown, Map, Bus, Train
} from 'lucide-react';
import './DriversLandingPageC.css';


// ==========================================
// Types & Interfaces
// ==========================================

type Language = 'PT' | 'EN' | 'ES' | 'FR' | 'DE' | 'IT';

interface DriversLandingPageCProps {
  currentLanguage?: Language;
  onCTAClick?: (ctaType: string, position?: string) => void;
}

interface ContentStructure {
  hero: { 
    h1: string; 
    sub: string; 
    trust: { icon: any; text: string }[]; 
    trustLine: string; 
    cta: string;
    appleLabel: string;
    androidLabel: string;
    modalTitle: string;
    modalSub: string;
  };
  howItWorks: { 
    title: string; 
    slogan: string;
    seeHow: string;
    steps: { title: string; desc: string }[]; 
    compat: string;
    highlight: string;
  };
  difference: { 
    title: string; 
    sub: string;
    bestChoice: string;
    caseStudy: string;
    traditional: { title: string; items: string[] }; 
    tuggi: { title: string; items: string[] };
    exampleBox: { title: string; p1: string; p2: string; bullets: string[]; footer: string; cta: string };
  };
  audio: { title: string; sub: string; demo: string };
  where: { title: string; sub: string; items: { title: string; desc: string }[] };
  tabs: { 
    title: string; 
    items: Record<string, { label: string; title: string; desc: string; bullets: string[]; cta: string }>;
  };
  pricing: { 
    title: string; 
    sub: string;
    trust: string;
    mostPopular: string;
    allPlansInclude: string;
    background: string;
    maps: string;
    curation: string;
    free: { name: string; price: string; features: string[]; cta: string };
    travel: { name: string; price: string; features: string[]; cta: string };
    monthly: { name: string; price: string; features: string[]; cta: string };
  };
  testimonials: { title: string; sub: string; items: { name: string; role: string; text: string; location: string; img?: string }[]; avgRating: string; storeDownloads: string; nativeVoices: string; nativeVoicesLabel: string };
  faq: { title: string; items: { q: string; a: string }[] };
  final: { h2: string; p: string; benefits: string[]; downloadOn: string; getItOn: string };
}
// ==========================================
// Content & Translations
// ==========================================

const ptContent: ContentStructure = {
  hero: {
    h1: "Histórias em áudio, no exato lugar onde você está.",
    sub: "O Tuggi toca automaticamente quando você caminha, dirige ou viaja.",
    trust: [
      { icon: Check, text: "Funciona em segundo plano com Maps e Spotify." },
      { icon: Globe, text: "Premium tem offline + 8 idiomas." }
    ],
    trustLine: "Teste grátis sem cartão de crédito",
    cta: "Baixar agora",
    appleLabel: "iPhone / iPad",
    androidLabel: "Android",
    modalTitle: "Baixar Tuggi Grátis",
    modalSub: "Escolha sua loja de aplicativos"
  },
  howItWorks: {
    title: "COMO FUNCIONA", slogan: "Simples. Sem complicações.", seeHow: "Veja como funciona",
    steps: [
      { title: "Baixe e aperte Play", desc: "Não precisa escolher rotas ou planejar. Grátis para começar." },
      { title: "Vá para qualquer lugar", desc: "Hotel, restaurante, castelo... não importa. Liberdade total." },
      { title: "As histórias tocam sozinhas", desc: "Onde você estiver, contamos a história automaticamente. Sem você fazer nada." }
    ],
    compat: "Funciona em segundo plano com:",
    highlight: "Zero preparação.<br/>Máxima descoberta."
  },
  difference: {
    title: "POR QUE O TUGGI É DIFERENTE",
    sub: "A liberdade que você não encontra em guias comuns.",
    bestChoice: "A melhor escolha",
    caseStudy: "ESTUDO DE CASO",
    traditional: {
      title: "Audioguias Tradicionais",
      items: ["Compra de rota por cidade (ex: Roma Tour €59,90)", "Você deve planejar e criar sua rota", "Segue um caminho fixo e rígido", "Perde pontos históricos fora da rota"]
    },
    tuggi: {
      title: "Com o Tuggi",
      items: ["Assinatura única. Tudo liberado em todo o mundo.", "Funciona onde você estiver, sem GPS fixo", "Zero planejamento: é só baixar e apertar play", "Histórias em áudio em todo o trajeto"]
    },
    exampleBox: {
      title: "O PULO DO GATO",
      p1: "Imagine que você planejou visitar o Coliseu hoje.",
      p2: "Mas quem te conta sobre os 30 minutos de caminhada até lá?",
      bullets: ["A rua romana de 2000 anos sob seus pés", "A fonte barroca onde soldados descansavam", "O portal medieval que o turismo ignora"],
      footer: "O TUGGI CONTA ESTA JORNADA COMPLETA.",
      cta: "Experimentar a Liberdade"
    }
  },
  audio: { title: "VEJA COMO FUNCIONA NA PRÁTICA", sub: "Histórias imersivas e multilinguagem que tocam no lugar e momento certos.", demo: "Demonstração em tempo real" },
  where: {
    title: "FUNCIONA EM QUALQUER TRAJETO", sub: "Não importa para onde você vai. Nós te acompanhamos.",
    items: [{ title: "De carro", desc: "Perfeito para motoristas." }, { title: "No ônibus", desc: "Transforme cada trajeto." }, { title: "A pé", desc: "Descubra cada detalhe." }, { title: "No trem", desc: "Acompanhe a paisagem." }]
  },
  tabs: {
    title: "PARA QUEM É O TUGGI?",
    items: {
      turistas: { label: "Turistas", title: "TURISTAS E VIAJANTES", desc: "Vá além do guia turístico.", bullets: ["Não perca tempo planejando", "8 idiomas disponíveis"], cta: "Ver Planos" },
      exploradores: { label: "Exploradores", title: "EXPLORADORES LOCAIS", desc: "Redescubra sua própria cidade.", bullets: ["Histórias inéditas", "Offline no Premium"], cta: "Baixar Grátis" },
      motoristas: { label: "Motoristas", title: "MOTORISTAS", desc: "Torne suas viagens interessantes.", bullets: ["Ofereça experiência única", "Melhore suas avaliações"], cta: "Ver Planos" },
      familias: { label: "Famílias", title: "FAMÍLIAS", desc: "Entretenimento cultural para todos.", bullets: ["Educativo sem ser chato", "Aprenda em família"], cta: "Experimentar Grátis" }
    }
  },
  pricing: {
    title: "ESCOLHA SEU PLANO", sub: "Comece grátis. Faça upgrade quando quiser.", trust: "Seguro e criptografado · Cancele a qualquer momento",
    mostPopular: "Mais Vendido", allPlansInclude: "Todos os planos incluem", background: "Segundo plano", maps: "Compatível com Maps", curation: "Curadoria Cultural",
    free: { name: "GRATUITO", price: "R$ 0", features: ["Histórias limitadas por dia", "Segundo plano", "Idioma do dispositivo", "Sempre online (sem cache)"], cta: "Começar Grátis" },
    travel: { name: "VIAGEM (7 DIAS)", price: "R$ 14,90", features: ["Histórias ilimitadas", "Todos os idiomas", "Funciona Offline", "Narração Profissional", "Não renova automaticamente"], cta: "Começar 7 Dias" },
    monthly: { name: "PREMIUM (ASSINATURA)", price: "R$ 39,90", features: ["30 dias recorrentes", "Histórias ilimitadas", "Todos os idiomas", "Funciona Offline", "Recomendado para profissionais", "Cancele quando quiser"], cta: "Assinar Premium" }
  },
  testimonials: {
    title: "O QUE DIZEM NOSSOS USUÁRIOS", sub: "Mais de 5.000 pessoas já usam o Tuggi.",
    avgRating: "Avaliação Média", storeDownloads: "Downloads Lojas", nativeVoices: "8 Idiomas", nativeVoicesLabel: "Vozes Nativas",
    items: [
      { name: "Giulia Mancini", role: "Turista", location: "Milão, Itália", text: "Usei o Tuggi durante as Olimpíadas. Foi incrível!", img: "/testimonials/giulia.png" },
      { name: "Giuseppe Rossi", role: "Turista", location: "Lisboa, Portugal", text: "Baixei o plano grátis e me apaixonei.", img: "/testimonials/giuseppe.png" },
      { name: "João Oliveira", role: "Motorista Uber", location: "Rio de Janeiro, Brasil", text: "Meus passageiros adoram!", img: "/testimonials/joao.png" }
    ]
  },
  faq: { 
    title: "PERGUNTAS FREQUENTES", 
    items: [
      { q: "É grátis?", a: "Sim! Você tem histórias gratuitas limitadas por dia para sempre, sem precisar de cartão de crédito." },
      { q: "Preciso planejar rotas?", a: "NÃO! Esse é o nosso diferencial. Vá para onde quiser, nós contamos a história sozinhos." },
      { q: "Funciona com Waze ou Google Maps?", a: "Perfeitamente! Ele roda em segundo plano enquanto você usa seu GPS favorito." },
      { q: "Preciso segurar o celular?", a: "Não! Coloque no suporte ou no bolso. As histórias tocam sozinhas via GPS." },
      { q: "Gasta muita internet?", a: "Na versão grátis sim. O Premium permite baixar tudo e usar offline." },
      { q: "Posso cancelar quando quiser?", a: "Claro! Você cancela a assinatura a qualquer momento com um clique." }
    ] 
  },
  final: { h2: "PRONTO PARA DESCOBRIR?", p: "Baixe grátis e comece agora.", benefits: ["Grátis todos os dias", "Sem cartão de crédito", "Cancele quando quiser"], downloadOn: "Baixar na", getItOn: "Disponível no" }
};

const enContent: ContentStructure = {
  hero: {
    h1: "Audio stories at the exact place where you are.",
    sub: "Tuggi plays automatically as you walk, drive, or travel.",
    trust: [
      { icon: Check, text: "Works in background with Maps & Spotify." },
      { icon: Globe, text: "Premium includes offline + 8 languages." }
    ],
    trustLine: "Free trial without credit card",
    cta: "Download now",
    appleLabel: "iPhone / iPad",
    androidLabel: "Android",
    modalTitle: "Download Tuggi Free",
    modalSub: "Choose your app store"
  },
  howItWorks: {
    title: "HOW IT WORKS", slogan: "Simple. Hassle-free.", seeHow: "See how it works",
    steps: [
      { title: "Download & Press Play", desc: "No need to choose routes or plan. Free to start." },
      { title: "Go Anywhere", desc: "Hotel, restaurant, castle... wherever. Total freedom." },
      { title: "Stories Play Automatically", desc: "Wherever you are, we tell the story automatically." }
    ],
    compat: "Works in background with:",
    highlight: "Zero preparation.<br/>Maximum discovery."
  },
  difference: {
    title: "WHY TUGGI IS DIFFERENT",
    sub: "The freedom you won't find in common guides.",
    bestChoice: "Best Choice",
    caseStudy: "CASE STUDY",
    traditional: {
      title: "Traditional Audio Guides",
      items: ["Buy route per city (€59.90)", "You must plan and create your route", "Follow a fixed, rigid path", "Miss history hidden outside the route"]
    },
    tuggi: {
      title: "With Tuggi",
      items: ["Single subscription. Worldwide access.", "Works where you are, no fixed GPS", "Zero planning: download and play", "Audio stories during the whole journey"]
    },
    exampleBox: {
      title: "THE GAME CHANGER",
      p1: "Imagine you planned to visit the Colosseum today.",
      p2: "But who tells you about the 30-minute walk getting there?",
      bullets: ["The 2000-year-old Roman street", "The baroque fountain", "The medieval portal"],
      footer: "TUGGI NARRATES THE ENTIRE JOURNEY.",
      cta: "Experience Freedom"
    }
  },
  audio: { title: "SEE IT IN ACTION", sub: "Immersive multi-language stories.", demo: "Real-time demo" },
  where: {
    title: "WORKS ON ANY ROUTE", sub: "No matter where you go.",
    items: [{ title: "By car", desc: "Perfect for drivers." }, { title: "Bus", desc: "Turn commute into fun." }, { title: "Walking", desc: "Discover every detail." }, { title: "Train", desc: "View with stories." }]
  },
  tabs: {
    title: "WHO IS TUGGI FOR?",
    items: {
      turistas: { label: "Tourists", title: "TRAVELERS & TOURISTS", desc: "Go beyond the tour guide.", bullets: ["Don't waste time planning", "8 languages available"], cta: "View Plans" },
      exploradores: { label: "Explorers", title: "LOCAL EXPLORERS", desc: "Rediscover your city.", bullets: ["Unique stories", "Offline in Premium"], cta: "Download Free" },
      motoristas: { label: "Drivers", title: "DRIVERS", desc: "Make trips interesting.", bullets: ["Unique experience", "Improve ratings"], cta: "View Plans" },
      familias: { label: "Families", title: "FAMILIES", desc: "Cultural entertainment for all.", bullets: ["Educational content", "Learn as a family"], cta: "Try for Free" }
    }
  },
  pricing: {
    title: "CHOOSE YOUR PLAN", sub: "Start free. Upgrade anytime.", trust: "Secure & Encrypted · Cancel anytime",
    mostPopular: "Most Popular", allPlansInclude: "All plans include", background: "Background mode", maps: "Maps compatible", curation: "Cultural Curation",
    free: { name: "FREE", price: "$ 0", features: ["Limited stories per day", "Background mode", "Device language", "Always online (no cache)"], cta: "Start Free" },
    travel: { name: "TRAVEL (7 DAYS)", price: "$ 9.99", features: ["Unlimited stories", "All languages", "Works Offline", "Professional Narration", "No auto-renewal"], cta: "Start 7 Days" },
    monthly: { name: "PREMIUM", price: "$ 24.99", features: ["30 days recurring", "Unlimited stories", "All languages", "Works Offline", "Recommended for pros", "Cancel anytime"], cta: "Subscribe Premium" }
  },
  testimonials: {
    title: "WHAT OUR USERS SAY", sub: "Over 5,000 people use Tuggi.",
    avgRating: "Average Rating", storeDownloads: "Store Downloads", nativeVoices: "8 Languages", nativeVoicesLabel: "Native Voices",
    items: [
      { name: "Giulia Mancini", role: "Tourist", location: "Milan, Italy", text: "I used Tuggi during the Olympics in Milan. It was amazing to rediscover the city!", img: "/testimonials/giulia.png" },
      { name: "Giuseppe Rossi", role: "Tourist", location: "Lisbon, Portugal", text: "I fell in love with the free plan. It's like having a local history expert in your pocket.", img: "/testimonials/giuseppe.png" },
      { name: "João Oliveira", role: "Uber Driver", location: "Brazil", text: "My passengers love it! It creates natural conversations and my tips have definitely increased.", img: "/testimonials/joao.png" }
    ]
  },
  faq: { 
    title: "FREQUENTLY ASKED QUESTIONS", 
    items: [
      { q: "Is it really free?", a: "Yes! You get limited free stories every day forever, no credit card required." },
      { q: "Do I need to plan routes?", a: "NO! That's our difference. Go anywhere you want, and we tell the story automatically." },
      { q: "Does it work with Waze or Google Maps?", a: "Perfectly! It runs in the background while you use your favorite GPS app." },
      { q: "Do I need to hold the phone?", a: "No! Just put it in the holder or your pocket. Stories play automatically via GPS." },
      { q: "Does it use a lot of data?", a: "In the free version, yes. Premium allows you to download everything and use it offline." },
      { q: "Can I cancel whenever I want?", a: "Of course! You can cancel your subscription at any time with one click." }
    ] 
  },
  final: { h2: "READY TO DISCOVER?", p: "Download for free and start now.", benefits: ["Free stories daily", "No credit card", "Cancel anytime"], downloadOn: "Download on the", getItOn: "Get it on" }
};

const esContent: ContentStructure = {
  hero: {
    h1: "Historias en audio, exactamente donde estás.",
    sub: "Tuggi se activa automáticamente mientras caminas, conduces o viajas.",
    trust: [
      { icon: Check, text: "Funciona en segundo plano con Maps y Spotify." },
      { icon: Globe, text: "Premium incluye offline + 8 idiomas." }
    ],
    trustLine: "Prueba gratis sin tarjeta de crédito",
    cta: "Descargar ahora",
    appleLabel: "iPhone / iPad",
    androidLabel: "Android",
    modalTitle: "Descargar Tuggi Gratis",
    modalSub: "Elige tu tienda"
  },
  howItWorks: {
    title: "CÓMO FUNCIONA", slogan: "Simple. Sin complicaciones.", seeHow: "Mira cómo funciona",
    steps: [
      { title: "Descarga y pulsa Play", desc: "No necesita planificación. Gratis para empezar." },
      { title: "Ve a cualquier parte", desc: "Hotel, restaurante... no importa. Libertad total." },
      { title: "Las historias suenan solas", desc: "Donde estés, contamos la historia automáticamente." }
    ],
    compat: "Funciona en segundo plano con:",
    highlight: "Cero preparación.<br/>Máximo descubrimiento."
  },
  difference: {
    title: "POR QUÉ TUGGI ES DIFERENTE",
    sub: "La libertad que no encuentras en guías comunes.",
    bestChoice: "La mejor elección",
    caseStudy: "ESTUDIO DE CASO",
    traditional: {
      title: "Audio Guías Tradicionales",
      items: ["Compra de ruta por ciudad", "Debes planificar tu ruta", "Camino fijo y rígido", "Pierdes la historia fuera de ruta"]
    },
    tuggi: {
      title: "Con Tuggi",
      items: ["Suscripción única. Todo el mundo.", "Funciona donde estés, sin GPS fijo", "Cero planificación: descarga y play", "Historias en audio todo el trayecto"]
    },
    exampleBox: {
      title: "EL DIFERENCIAL",
      p1: "Imagina que planeaste visitar el Coliseo.",
      p2: "¿Pero quién te cuenta sobre la caminata?",
      bullets: ["La calle romana antigua", "La fuente barroca", "El portal medieval"],
      footer: "TUGGI NARRA ESTE VIAJE COMPLETO.",
      cta: "Experimentar la Libertad"
    }
  },
  audio: { title: "MIRA CÓMO FUNCIONA", sub: "Historias inmersivas y multilingües.", demo: "Demo en tiempo real" },
  where: {
    title: "FUNCIONA EN CUALQUIER TRAYECTO", sub: "No importa a dónde vayas.",
    items: [{ title: "Coche", desc: "Para conductores." }, { title: "Autobús", desc: "Viaje divertido." }, { title: "A pie", desc: "Detalles de tu ciudad." }, { title: "Tren", desc: "Paisaje con historia." }]
  },
  tabs: {
    title: "¿PARA QUIÉN ES TUGGI?",
    items: {
      turistas: { label: "Turistas", title: "TURISTAS Y VIAJEROS", desc: "Ve más allá de la guía.", bullets: ["Sin planning", "8 idiomas"], cta: "Ver Planes" },
      exploradores: { label: "Exploradores", title: "EXPLORADORES LOCALES", desc: "Redescubre tu ciudad.", bullets: ["Historias inéditas", "Offline Premium"], cta: "Descargar Gratis" },
      motoristas: { label: "Conductores", title: "CONDUCTORES", desc: "Viajes interesantes.", bullets: ["Experiencia única", "Mejora calificaciones"], cta: "Ver Planes" },
      familias: { label: "Familias", title: "FAMILIAS", desc: "Cultura para todos.", bullets: ["Educativo", "En familia"], cta: "Probar Gratis" }
    }
  },
  pricing: {
    title: "ELIGE TU PLAN", sub: "Empieza gratis. Sube cuando quieras.", trust: "Seguro y Cifrado · Cancela cuando quieras",
    mostPopular: "Lo más vendido", allPlansInclude: "Todos los planes incluyen", background: "Segundo plano", maps: "Compatible con Maps", curation: "Curaduría Cultural",
    free: { name: "GRATUITO", price: "0 €", features: ["Historias limitadas por día", "Modo fondo", "Idioma del dispositivo", "Siempre online (sin caché)"], cta: "Empezar Gratis" },
    travel: { name: "VIAJE (7 DÍAS)", price: "9,99 €", features: ["Historias ilimitadas", "Todos los idiomas", "Funciona Offline", "Narración Profesional", "Sin renovación automática"], cta: "Empezar 7 Días" },
    monthly: { name: "PREMIUM", price: "24,99 €", features: ["30 días recurrentes", "Historias ilimitadas", "Todos los idiomas", "Funciona Offline", "Recomendado para profesionales", "Cancela cuando quieras"], cta: "Suscribirse" }
  },
  testimonials: {
    title: "LO QUE DICEN NUESTROS USUARIOS", sub: "Más de 5.000 personas usan Tuggi.",
    avgRating: "Valoración Media", storeDownloads: "Descargas", nativeVoices: "8 Idiomas", nativeVoicesLabel: "Voces Nativas",
    items: [
      { name: "Giulia Mancini", role: "Turista", location: "Milán, Italia", text: "¡Usé Tuggi durante las Olimpiadas en Milán y fue increíble redescubrir la ciudad!", img: "/testimonials/giulia.png" },
      { name: "Giuseppe Rossi", role: "Turista", location: "Lisboa, Portugal", text: "Me enamoré del plan gratis. Es como tener un experto en historia local en el bolsillo.", img: "/testimonials/giuseppe.png" },
      { name: "João Oliveira", role: "Conductor Uber", location: "Brasil", text: "¡A mis pasajeros les encanta! Crea conversaciones naturales y mis propinas han subido.", img: "/testimonials/joao.png" }
    ]
  },
  faq: { 
    title: "PREGUNTAS FRECUENTES", 
    items: [
      { q: "¿Es realmente gratis?", a: "¡Sí! Tienes historias gratuitas limitadas cada día para siempre, sin tarjeta de crédito." },
      { q: "¿Debo planear rutas?", a: "¡NO! Esa es nuestra diferencia. Ve a donde quieras y nosotros contamos la historia solos." },
      { q: "¿Funciona con Waze o Google Maps?", a: "¡Perfectamente! Funciona en segundo plano mientras usas tu app de navegación favorita." },
      { q: "¿Debo sostener el móvil?", a: "¡No! Ponlo en el soporte o bolsillo. Las historias suenan solas por GPS." },
      { q: "¿Consume muchos datos?", a: "La versión gratis sí. El Premium te permite descargar todo para usarlo offline." },
      { q: "¿Puedo cancelar cuando quiera?", a: "¡Claro! Puedes cancelar tu suscripción en cualquier momento con un clic." }
    ] 
  },
  final: { h2: "¿LISTO?", p: "Descarga gratis y comienza.", benefits: ["Gratis todos los días", "Sin tarjeta", "Cancela cuando quieras"], downloadOn: "Descargar en", getItOn: "Disponible en" }
};

const frContent: ContentStructure = {
  hero: {
    h1: "Histoires audio, exactement là où vous êtes.",
    sub: "Tuggi se lance automatiquement quand vous marchez, conduisez ou voyagez.",
    trust: [
      { icon: Check, text: "Fonctionne en arrière-plan avec Maps et Spotify." },
      { icon: Globe, text: "Premium inclut le mode hors ligne + 8 langues." }
    ],
    trustLine: "Essai gratuit sans carte de crédit",
    cta: "Télécharger maintenant",
    appleLabel: "iPhone / iPad",
    androidLabel: "Android",
    modalTitle: "Télécharger Tuggi Gratuit",
    modalSub: "Choisissez votre boutique"
  },
  howItWorks: {
    title: "COMMENT ÇA MARCHE", slogan: "Simple. Sans tracas.", seeHow: "Voir comment ça marche",
    steps: [
      { title: "Téléchargez et lancez", desc: "Pas besoin de planifier. Gratuit pour commencer." },
      { title: "Allez partout", desc: "Hôtel, restaurant... peu importe. Liberté totale." },
      { title: "Histoires automatiques", desc: "Où que vous soyez, l'histoire se lance." }
    ],
    compat: "Fonctionne en arrière-plan avec :",
    highlight: "Zéro préparation.<br/>Découverte maximale."
  },
  difference: {
    title: "POURQUOI TUGGI EST DIFFÉRENT",
    sub: "La liberté que vous ne trouvez pas dans les guides classiques.",
    bestChoice: "Le meilleur choix",
    caseStudy: "ÉTUDE DE CAS",
    traditional: {
      title: "Audio Guides Classiques",
      items: ["Achat par ville", "Itinéraire à planifier", "Chemin fixe", "Rate l'histoire hors trajet"]
    },
    tuggi: {
      title: "Avec Tuggi",
      items: ["Abonnement unique. Monde entier.", "Fonctionne partout, sans GPS fixe", "Zéro planning : téléchargez et play", "Audio tout le trajet"]
    },
    exampleBox: {
      title: "LE PETIT PLUS",
      p1: "Imaginez visiter le Colisée.",
      p2: "Qui raconte la marche ?",
      bullets: ["Rue romaine 2000 ans", "Fontaine baroque", "Portail médiéval"],
      footer: "TUGGI RACONTE TOUT LE VOYAGE.",
      cta: "Découvrir la Liberté"
    }
  },
  audio: { title: "VOYEZ ÇA", sub: "Histoires immersives multi-langues.", demo: "Démo temps réel" },
  where: {
    title: "TOUT TRAJET", sub: "Peu importe où vous allez.",
    items: [{ title: "Voiture", desc: "Pour conducteurs." }, { title: "Bus", desc: "Trajet plaisir." }, { title: "À pied", desc: "Détails de ville." }, { title: "Train", desc: "Paysage et histoires." }]
  },
  tabs: {
    title: "POUR QUI ?",
    items: {
      turistas: { label: "Touristes", title: "VOYAGEURS", desc: "Au-delà du guide.", bullets: ["Pas de planning", "8 langues"], cta: "Voir les Plans" },
      exploradores: { label: "Explorateurs", title: "LOCAUX", desc: "Redécouvrez votre ville.", bullets: ["Inédit", "Hors ligne Premium"], cta: "Gratuit" },
      motoristas: { label: "Chauffeurs", title: "CHAUFFEURS", desc: "Voyages intéressants.", bullets: ["Unique", "Meilleures notes"], cta: "Voir les Plans" },
      familias: { label: "Familles", title: "FAMILLES", desc: "Culture pour tous.", bullets: ["Éducatif", "En famille"], cta: "Essayer Gratuit" }
    }
  },
  pricing: {
    title: "PLAN", sub: "Gratuit. Évoluez quand vous voulez.", trust: "Sécurisé · Annulez à tout moment",
    mostPopular: "Populaire", allPlansInclude: "Tout inclus", background: "Arrière-plan", maps: "Maps", curation: "Curation",
    free: { name: "GRATUITO", price: "0 €", features: ["Histoires limitées par jour", "Mode arrière-plan", "Langue du système", "Toujours en ligne (pas de cache)"], cta: "Commencer" },
    travel: { name: "VOYAGE", price: "9,99 €", features: ["Histoires illimitées", "Toutes les langues", "Fonctionne hors ligne", "Narration Professionnelle", "Pas de renouvellement automatique"], cta: "7 Jours" },
    monthly: { name: "PREMIUM", price: "24,99 €", features: ["30 jours récurrents", "Histoires illimitées", "Toutes les langues", "Fonctionne hors ligne", "Conseillé pour les pros", "Annulez quand vous voulez"], cta: "S'abonner" }
  },
  testimonials: {
    title: "CE QUE DISENT NOS UTILISATEURS", sub: "Plus de 5000 personnes utilisent Tuggi.",
    avgRating: "Note Moyenne", storeDownloads: "Téléchargements", nativeVoices: "8 Langues", nativeVoicesLabel: "Voix Natives",
    items: [
      { name: "Giulia Mancini", role: "Touriste", location: "Milan, Italie", text: "J'ai utilisé Tuggi pendant les JO à Milan. C'était incroyable de redécouvrir la ville !", img: "/testimonials/giulia.png" },
      { name: "Giuseppe Rossi", role: "Touriste", location: "Lisbonne, Portugal", text: "Je suis tombé amoureux du plan gratuit. C'est comme avoir un expert en histoire dans sa poche.", img: "/testimonials/giuseppe.png" },
      { name: "João Oliveira", role: "Chauffeur Uber", location: "Brésil", text: "Mes passagers adorent ! Ça crée des conversations naturelles et mes pourboires ont augmenté.", img: "/testimonials/joao.png" }
    ]
  },
  faq: { 
    title: "QUESTIONS FRÉQUENTES", 
    items: [
      { q: "Est-ce vraiment gratuit ?", a: "Oui ! Vous avez des histoires gratuites limitées chaque jour, sans carte de crédit." },
      { q: "Faut-il planifier des itinéraires ?", a: "NON ! C'est notre différence. Allez où vous voulez, Tuggi raconte tout seul." },
      { q: "Est-ce que ça marche avec Waze ou Google Maps ?", a: "Parfaitement ! Ça tourne en arrière-plan pendant que vous utilisez votre GPS habituel." },
      { q: "Dois-je tenir le téléphone ?", a: "Non ! Dans le support ou la poche. Les histoires se lancent d'elles-mêmes via GPS." },
      { q: "Est-ce que ça consomme beaucoup de data ?", a: "La version gratuite oui. Le Premium permet de tout télécharger pour une utilisation hors ligne." },
      { q: "Puis-je annuler quand je veux ?", a: "Absolument ! Vous pouvez annuler votre abonnement à tout moment en un clic." }
    ] 
  },
  final: { h2: "PRÊT ?", p: "Téléchargez.", benefits: ["Gratuit", "Pas de carte", "Annulez"], downloadOn: "Télécharger sur", getItOn: "Disponible sur" }
};

const deContent: ContentStructure = {
  hero: {
    h1: "Audiogeschichten, genau dort, wo du bist.",
    sub: "Tuggi schaltet sich automatisch ein, wenn du gehst, fährst oder reist.",
    trust: [
      { icon: Check, text: "Funktioniert im Hintergrund mit Maps & Spotify." },
      { icon: Globe, text: "Premium beinhaltet Offline-Modus + 8 Sprachen." }
    ],
    trustLine: "Kostenlos testen ohne Kreditkarte",
    cta: "Jetzt herunterladen",
    appleLabel: "iPhone / iPad",
    androidLabel: "Android",
    modalTitle: "Tuggi kostenlos laden",
    modalSub: "Wähle deinen Store"
  },
  howItWorks: {
    title: "SO FUNKTIONIERT ES", slogan: "Einfach. Stressfrei.", seeHow: "So funktioniert es",
    steps: [
      { title: "Laden & Play", desc: "Keine Planung nötig. Gratis starten." },
      { title: "Überallhin", desc: "Hotel, Schloss... egal. Freiheit." },
      { title: "Automatisch", desc: "Wo du bist, erzählen wir die Story." }
    ],
    compat: "Hintergrundmodus mit:",
    highlight: "Null Vorbereitung.<br/>Maximales Erlebnis."
  },
  difference: {
    title: "DARUM IST TUGGI ANDERS",
    sub: "Die Freiheit, die Sie in gewöhnlichen Reiseführern nicht finden.",
    bestChoice: "Die beste Wahl",
    caseStudy: "FALLSTUDIE",
    traditional: {
      title: "Klassische Guides",
      items: ["Kauf pro Stadt", "Eigene Planung", "Starrer Weg", "Verpasst Geschichte"]
    },
    tuggi: {
      title: "Mit Tuggi",
      items: ["Ein Abo. Ganze Welt.", "Überall ohne festes GPS", "Keine Planung", "Audio die ganze Zeit"]
    },
    exampleBox: {
      title: "DER VORTEIL",
      p1: "Besuch im Kolosseum.",
      p2: "Wer erzählt vom Weg?",
      bullets: ["2000 Jahre alte Straße", "Barockbrunnen", "Mittelalterliches Portal"],
      footer: "TUGGI ERZÄHLT ALLES.",
      cta: "Freiheit erleben"
    }
  },
  audio: { title: "AKTION", sub: "Immersive Geschichten.", demo: "Echtzeit-Demo" },
  where: {
    title: "ÜBERALL", sub: "Egal wohin du gehst.",
    items: [{ title: "Auto", desc: "Für Fahrer." }, { title: "Bus", desc: "Spaß beim Pendeln." }, { title: "Zu Fuß", desc: "Alle Details." }, { title: "Zug", desc: "Aussicht & Story." }]
  },
  tabs: {
    title: "FÜR WEN?",
    items: {
      turistas: { label: "Touristen", title: "REISENDE", desc: "Mehr als ein Guide.", bullets: ["Keine Planung", "8 Sprachen"], cta: "Pläne ansehen" },
      exploradores: { label: "Entdecker", title: "LOCALS", desc: "Stadt neu entdecken.", bullets: ["Unveröffentlicht", "Offline Premium"], cta: "Gratis" },
      motoristas: { label: "Fahrer", title: "FAHRER", desc: "Interessante Fahrten.", bullets: ["Einzigartig", "Bessere Bewertungen"], cta: "Pläne" },
      familias: { label: "Familien", title: "FAMILIEN", desc: "Kultur für alle.", bullets: ["Lehrreich", "In der Familie"], cta: "Gratis testen" }
    }
  },
  pricing: {
    title: "PLAN", sub: "Gratis. Upgrade jederzeit.", trust: "Sicher · Jederzeit kündbar",
    mostPopular: "Beliebt", allPlansInclude: "Alles inklusive", background: "Hintergrund", maps: "Maps", curation: "Kuration",
    free: { name: "GRATIS", price: "0 €", features: ["Begrenzte Geschichten pro Tag", "Hintergrundmodus", "Gerätesprache", "Immer online (kein Cache)"], cta: "Start" },
    travel: { name: "REISE", price: "9,99 €", features: ["Unbegrenzte Geschichten", "Alle Sprachen", "Offline-Modus", "Professionelle Sprecher", "Keine automatische Verlängerung"], cta: "7 Tage" },
    monthly: { name: "PREMIUM", price: "24,99 €", features: ["30 Tage wiederkehrend", "Unbegrenzte Geschichten", "Alle Sprachen", "Offline-Modus", "Empfohlen für Profis", "Jederzeit kündbar"], cta: "Abonnieren" }
  },
  testimonials: {
    title: "WAS UNSERE NUTZER SAGEN", sub: "Über 5.000 Menschen nutzen bereits Tuggi.",
    avgRating: "Durchschnitt", storeDownloads: "Downloads", nativeVoices: "8 Sprachen", nativeVoicesLabel: "Native Stimmen",
    items: [
      { name: "Giulia Mancini", role: "Tourist", location: "Mailand, Italien", text: "Ich habe Tuggi während der Olympischen Spiele in Mailand benutzt. Es war unglaublich, die Stadt neu zu entdecken!", img: "/testimonials/giulia.png" },
      { name: "Giuseppe Rossi", role: "Tourist", location: "Lissabon, Portugal", text: "Ich habe mich in die Gratis-Version verliebt. Es ist, als hätte man einen lokalen Geschichtsexperten in der Tasche.", img: "/testimonials/giuseppe.png" },
      { name: "João Oliveira", role: "Uber-Fahrer", location: "Brasilien", text: "Meine Fahrgäste lieben es! Es entstehen tolle Gespräche und meine Trinkgelder sind gestiegen.", img: "/testimonials/joao.png" }
    ]
  },
  faq: { 
    title: "HÄUFIG GESTELLTE FRAGEN", 
    items: [
      { q: "Ist es wirklich kostenlos?", a: "Ja! Du bekommst jeden Tag begrenzte Gratis-Geschichten, ganz ohne Kreditkarte." },
      { q: "Muss ich Routen planen?", a: "NEIN! Das ist unser Vorteil. Geh wohin du willst, wir erzählen die Geschichte." },
      { q: "Funktioniert es mit Waze oder Google Maps?", a: "Perfekt! Es läuft im Hintergrund, während du deine Lieblings-Navi-App nutzt." },
      { q: "Muss ich das Handy halten?", a: "Nein! Ab in die Halterung oder Tasche. Stories starten automatisch per GPS." },
      { q: "Verbraucht es viel Datenvolumen?", a: "In der Gratis-Version ja. Premium erlaubt den Download aller Inhalte für offline." },
      { q: "Kann ich jederzeit kündigen?", a: "Natürlich! Du kannst dein Abo jederzeit mit einem Klick beenden." }
    ] 
  },
  final: { h2: "BEREIT?", p: "Laden.", benefits: ["Gratis", "Keine Karte", "Kündbar"], downloadOn: "Laden im", getItOn: "Erhältlich bei" }
};

const itContent: ContentStructure = {
  hero: {
    h1: "Storie audio, esattamente dove ti trovi.",
    sub: "Tuggi si attiva automaticamente mentre cammini, guidi o viaggi.",
    trust: [
      { icon: Check, text: "Funziona in background con Maps e Spotify." },
      { icon: Globe, text: "Premium include offline + 8 lingue." }
    ],
    trustLine: "Prova gratis senza carta di credito",
    cta: "Scarica ora",
    appleLabel: "iPhone / iPad",
    androidLabel: "Android",
    modalTitle: "Scarica Tuggi Gratis",
    modalSub: "Scegli il tuo store"
  },
  howItWorks: {
    title: "COME FUNZIONA", slogan: "Semplice. Senza problemi.", seeHow: "Vedi come funziona",
    steps: [
      { title: "Scarica e Play", desc: "Nessuna pianificazione. Gratis per iniziare." },
      { title: "Vai ovunque", desc: "Hotel, ristorante... non importa. Libertà totale." },
      { title: "Storie automatiche", desc: "Dove sei, raccontiamo la storia automaticamente." }
    ],
    compat: "Funziona in background con:",
    highlight: "Zero preparazione.<br/>Massima scoperta."
  },
  difference: {
    title: "PERCHÉ TUGGI È DIVERSO",
    sub: "La libertà che non trovi nelle guide comuni.",
    bestChoice: "La scelta migliore",
    caseStudy: "CASO DI STUDIO",
    traditional: {
      title: "Audioguide Tradizionali",
      items: ["Acquisto per città", "Pianificazione necessaria", "Percorso fisso", "Perdi la storia fuori rotta"]
    },
    tuggi: {
      title: "Con Tuggi",
      items: ["Abbonamento unico. Tutto il mondo.", "Funziona dove sei, senza GPS fisso", "Zero pianificazione: scarica e play", "Storie audio tutto il tragitto"]
    },
    exampleBox: {
      title: "IL VALORE AGGIUNTO",
      p1: "Visita al Colosseo.",
      p2: "Chi racconta la camminata?",
      bullets: ["Strada romana antica", "Fontana barocca", "Portale medievale"],
      footer: "TUGGI NARRA L'INTERO VIAGGIO.",
      cta: "Scopri la Libertà"
    }
  },
  audio: { title: "AZIONE", sub: "Storie immersive multilingua.", demo: "Demo tempo reale" },
  where: {
    title: "OGNI TRAJETTO", sub: "Ovunque tu vada.",
    items: [{ title: "Auto", desc: "Per autisti." }, { title: "Bus", desc: "Viaggio divertente." }, { title: "A piedi", desc: "Dettagli città." }, { title: "Treno", desc: "Paesaggio & storie." }]
  },
  tabs: {
    title: "PER CHI?",
    items: {
      turistas: { label: "Turisti", title: "TURISTI", desc: "Oltre la guida.", bullets: ["No planning", "8 lingue"], cta: "Vedi Piani" },
      exploradores: { label: "Esploratori", title: "LOCALS", desc: "Riscopri la tua città.", bullets: ["Inedito", "Offline Premium"], cta: "Gratis" },
      motoristas: { label: "Autisti", title: "AUTISTI", desc: "Viaggi interessanti.", bullets: ["Unico", "Migliora voti"], cta: "Vedi Piani" },
      familias: { label: "Famiglie", title: "FAMIGLIE", desc: "Cultura per tutti.", bullets: ["Educativo", "In famiglia"], cta: "Prova Gratis" }
    }
  },
  pricing: {
    title: "PIANO", sub: "Gratis. Passa pro quando vuoi.", trust: "Sicuro · Annulla quando vuoi",
    mostPopular: "Più Venduto", allPlansInclude: "Tutto incluso", background: "Sfondo", maps: "Maps", curation: "Curatela",
    free: { name: "GRATUITO", price: "0 €", features: ["Storie limitate al giorno", "Background", "Lingua del dispositivo", "Sempre online (senza cache)"], cta: "Inizia" },
    travel: { name: "VIAGGIO", price: "9,99 €", features: ["Storie illimitate", "Tutte le lingue", "Funziona Offline", "Narrazione Professionale", "Nessun rinnovo automatico"], cta: "7 Jours" },
    monthly: { name: "PREMIUM", price: "24,99 €", features: ["30 giorni ricorrenti", "Storie illimitate", "Tutte le lingue", "Funziona Offline", "Consigliato per professionisti", "Annulla quando vuoi"], cta: "Abbonati" }
  },
  testimonials: {
    title: "COSA DICONO I NOSTRI UTENTI", sub: "Più di 5.000 persone usano già Tuggi.",
    avgRating: "Media Voti", storeDownloads: "Download", nativeVoices: "8 Lingue", nativeVoicesLabel: "Voci Native",
    items: [
      { name: "Giulia Mancini", role: "Turista", location: "Milano, Italia", text: "Ho usato Tuggi durante le Olimpiadi a Milano. È stato incredibile riscoprire la città attraverso le sue storie!", img: "/testimonials/giulia.png" },
      { name: "Giuseppe Rossi", role: "Turista", location: "Lisbona, Portogallo", text: "Mi sono innamorato del piano gratuito. È come avere una guida storica personale sempre in tasca.", img: "/testimonials/giuseppe.png" },
      { name: "João Oliveira", role: "Autista Uber", location: "Brasile", text: "I miei passeggeri lo adorano! Crea un'atmosfera unica in auto e le mie mance sono aumentate.", img: "/testimonials/joao.png" }
    ]
  },
  faq: { 
    title: "DOMANDE FREQUENTI", 
    items: [
      { q: "È davvero gratis?", a: "Sì! Hai storie gratuite limitate ogni giorno per sempre, senza bisogno di carta di credito." },
      { q: "Devo pianificare i percorsi?", a: "NO! Questa è la nostra differenza. Vai dove vuoi e noi raccontiamo la storia automaticamente." },
      { q: "Funziona con Waze o Google Maps?", a: "Perfettamente! Funziona in background mentre usi la tua app di navigazione preferita." },
      { q: "Devo tenere il telefono in mano?", a: "No! Mettilo nel supporto o in tasca. Le storie partono da sole tramite GPS." },
      { q: "Consuma molti dati?", a: "Nella versione gratis sì. Il piano Premium ti permette di scaricare tutto e usarlo offline." },
      { q: "Posso annullare quando voglio?", a: "Certamente! Puoi annullare l'abbonamento in qualsiasi momento con un clic." }
    ] 
  },
  final: { h2: "PRONTO?", p: "Scarica.", benefits: ["Gratis", "Senza carta", "Annulla"], downloadOn: "Scarica su", getItOn: "Disponibile su" }
};

const content: Record<Language, ContentStructure> = {
  PT: ptContent,
  EN: enContent,
  ES: esContent,
  FR: frContent,
  DE: deContent,
  IT: itContent
};

//Fallback
['ES', 'FR', 'DE', 'IT'].forEach(lang => {
  if (!content[lang as Language]) content[lang as Language] = content.EN;
});


const DriversLandingPageC: React.FC<DriversLandingPageCProps> = ({ 
  currentLanguage = 'PT', 
  onCTAClick 
}) => {
  const t = content[currentLanguage] || content.PT;
  const [activeTab, setActiveTab] = useState('turistas');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [showDownloadSheet, setShowDownloadSheet] = useState(false);

  const handleDownloadSheet = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setShowDownloadSheet(true);
  };

  const handleStoreClick = (store: 'apple' | 'google', position: string) => {
    onCTAClick?.(store, position);
    const url = store === 'apple' 
      ? 'https://apps.apple.com/br/app/tuggi-explore-ao-dirigir/id6744379818'
      : 'https://play.google.com/store/apps/details?id=com.tuggidrive.app';
    window.open(url, '_blank');
  };



  const handleCTA = (type: string, position: string) => {
    onCTAClick?.(type, position);
    setShowDownloadSheet(true);
  };

  return (
    <div className="page-c-wrapper font-sans text-gray-900">
      
      {/* NEW COMPACT HERO SECTION */}
      <section className="relative pt-6 pb-12 md:pt-20 md:pb-24 bg-gray-900 overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 z-0 opacity-20 contrast-125 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2676&auto=format&fit=crop" 
            alt="Explorando a cidade"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/90 to-gray-900 z-10"></div>
        </div>

        <div className="c-container relative z-30 px-6 max-w-4xl mx-auto text-center">
          <h1 className="text-[34px] md:text-7xl font-black mb-4 md:mb-8 leading-[1.1] tracking-tight text-white drop-shadow-sm">
            {t.hero.h1}
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-400 mb-8 md:mb-12 leading-relaxed font-medium mx-auto max-w-2xl">
            {t.hero.sub}
          </p>

          <div className="flex flex-col items-center gap-8">
            <button 
              onClick={handleDownloadSheet}
              className="bg-white text-gray-900 px-10 py-4 rounded-2xl font-black text-lg hover:bg-gray-100 transition-all shadow-2xl active:scale-95 flex items-center gap-3 group"
            >
              {t.hero.cta}
              <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
            </button>

            <div className="flex flex-col gap-3 w-full max-w-sm mx-auto">
              {t.hero.trust.map((item: any, i: number) => (
                <div key={i} className="flex items-center gap-3 text-white/90 bg-white/5 backdrop-blur-md p-3.5 rounded-[20px] border border-white/10 shadow-xl group">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white flex-shrink-0 group-hover:bg-blue-500 transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold tracking-tight text-left leading-tight">{item.text}</span>
                </div>
              ))}
              <div className="flex items-center gap-3 text-white/90 bg-white/5 backdrop-blur-md p-3.5 rounded-[20px] border border-white/10 shadow-xl group">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white flex-shrink-0 group-hover:bg-blue-500 transition-colors">
                    <Lock className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold tracking-tight text-left leading-tight">{t.hero.trustLine}.</span>
              </div>
            </div>

            <a 
              href="#como-funciona" 
              className="mt-8 text-gray-500 hover:text-white transition-colors flex flex-col items-center gap-2 animate-bounce cursor-pointer group"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="text-xs font-bold uppercase tracking-widest">{t.howItWorks.seeHow}</span>
              <ChevronDown size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* REDESIGNED HOW IT WORKS (Connected Path) */}
      <section className="py-24 bg-white relative overflow-hidden" id="como-funciona">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>

        <div className="c-container relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight relative inline-block">
               {t.howItWorks.title}
               <div className="h-1.5 w-full bg-blue-600 rounded-full mt-2"></div>
            </h2>
            <p className="mt-6 text-gray-500 font-bold uppercase tracking-widest text-xs">{t.howItWorks.slogan}</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Visual Line (Desktop) */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-dashed bg-gradient-to-r from-blue-100 via-blue-500 to-blue-100 hidden md:block -translate-y-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
               {t.howItWorks.steps.map((step: { title: string; desc: string }, i: number) => {
                 const Icons = [Download, Navigation, Volume2];
                 const Icon = Icons[i];
                 return (
                   <div key={i} className="flex flex-col items-center text-center group">
                      <div className="relative mb-10">
                         {/* Connection Line (Mobile) */}
                         {i < 2 && (
                           <div className="absolute top-full left-1/2 w-0.5 h-12 bg-gradient-to-b from-blue-500 to-transparent md:hidden"></div>
                         )}
                         
                         {/* Icon Circle */}
                         <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-blue-600 shadow-2xl shadow-blue-500/10 border border-blue-50 group-hover:scale-110 transition-all duration-500 relative z-10 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <Icon size={40} strokeWidth={1.5} className="relative z-10" />
                            
                            {/* Step Number Badge */}
                            <div className="absolute -top-1 -right-1 w-8 h-8 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black text-sm shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform">
                               {i + 1}
                            </div>
                         </div>
                      </div>

                      <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                         {step.title}
                      </h3>
                      <p className="text-gray-500 font-medium leading-relaxed max-w-[280px]">
                         {step.desc}
                      </p>
                   </div>
                 )
               })}
            </div>
          </div>

          {/* HIGH-IMPACT HIGHLIGHT BOX */}
          <div className="mt-24 max-w-4xl mx-auto bg-neutral-900 rounded-[40px] p-10 md:p-16 overflow-hidden shadow-2xl relative border border-white/5 text-center">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[90px] -mr-32 -mt-32"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[90px] -ml-32 -mb-32"></div>
             
             <div className="relative z-10 flex flex-col items-center">
                <h3 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tighter leading-tight" dangerouslySetInnerHTML={{ __html: t.howItWorks.highlight }}>
                </h3>
                <p className="text-gray-400 font-bold mb-10 text-xs md:text-sm uppercase tracking-widest px-4">
                   {t.howItWorks.compat}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-3xl mx-auto">
                   <div className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 px-3 py-4 rounded-2xl backdrop-blur-sm text-[11px] md:text-sm font-bold text-gray-200">
                      <Navigation size={16} className="text-blue-400" /> <span className="whitespace-nowrap">Apple Maps</span>
                   </div>
                   <div className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 px-3 py-4 rounded-2xl backdrop-blur-sm text-[11px] md:text-sm font-bold text-gray-200">
                      <Map size={16} className="text-blue-400" /> <span className="whitespace-nowrap">Google Maps</span>
                   </div>
                   <div className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 px-3 py-4 rounded-2xl backdrop-blur-sm text-[11px] md:text-sm font-bold text-gray-200">
                      <Music size={16} className="text-green-400" /> <span className="whitespace-nowrap">Spotify</span>
                   </div>
                   <div className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 px-3 py-4 rounded-2xl backdrop-blur-sm text-[11px] md:text-sm font-bold text-gray-200">
                      <Car size={16} className="text-blue-400" /> <span className="whitespace-nowrap">Waze</span>
                   </div>
                </div>
             </div>
          </div>

          {/* TRANSITION CTA BUTTON */}
          <div className="flex justify-center -mt-8 relative z-20">
            <button 
              onClick={handleDownloadSheet}
              className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-500 transition-all shadow-2xl shadow-blue-600/40 active:scale-95 flex items-center gap-3 group whitespace-nowrap"
            >
              {t.hero.cta}
              <ChevronDown className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      {/* WHY DIFFERENT & REAL EXAMPLE UNIFIED */}
      <section className="c-section bg-gray-50/50 overflow-hidden" id="diferencial">
        <div className="c-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
               {t.difference.title}
            </h2>
            <p className="mt-4 text-gray-500 font-medium">{t.difference.sub}</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-0 rounded-[48px] overflow-hidden shadow-2xl border border-gray-200">
              {/* Traditional */}
              <div className="bg-white p-8 md:p-14 flex flex-col border-b md:border-b-0 md:border-r border-gray-100 opacity-60 hover:opacity-100 transition-opacity">
                 <div className="mb-8 flex justify-center bg-gray-50 w-20 h-20 rounded-2xl items-center"><RouteOff size={40} className="text-gray-300"/></div>
                 <h3 className="text-xl font-black mb-8 text-gray-400 uppercase tracking-widest">{t.difference.traditional.title}</h3>
                 <ul className="space-y-6 flex-grow">
                    {t.difference.traditional.items.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-4 text-gray-400">
                       <X className="text-red-300 shrink-0 mt-1" size={24} />
                        <span className="text-lg font-medium leading-relaxed">{item}</span>
                      </li>
                    ))}
                 </ul>
              </div>

              {/* Tuggi */}
              <div className="bg-neutral-900 p-8 md:p-14 relative overflow-hidden flex flex-col text-white">
                 <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-black px-6 py-3 rounded-bl-3xl uppercase tracking-widest z-20 shadow-xl">{t.difference.bestChoice}</div>
                 <div className="mb-8 flex justify-center bg-blue-600 w-20 h-20 rounded-2xl items-center shadow-lg shadow-blue-600/40 transform -rotate-6"><Activity size={40} className="text-white"/></div>
                 <h3 className="text-xl font-black mb-8 text-blue-400 uppercase tracking-widest">{t.difference.tuggi.title}</h3>
                 <ul className="space-y-6 flex-grow">
                    {t.difference.tuggi.items.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-4 font-bold text-white group">
                         <div className="shrink-0 mt-1 bg-blue-600 rounded-full p-1 group-hover:scale-110 transition-transform"><Check className="text-white" size={16} /></div>
                         <span className="text-lg leading-relaxed">{item}</span>
                      </li>
                    ))}
                 </ul>
              </div>
            </div>

            {/* INTEGRATED REAL EXAMPLE BOX */}
            <div className="mt-8 bg-white rounded-[40px] p-8 md:p-16 shadow-xl border border-blue-50 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 -mr-48 -mt-48 group-hover:bg-blue-100 transition-colors"></div>
               
               <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
                 <div className="flex-1">
                   <div className="inline-block bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">ESTUDO DE CASO</div>
                   <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tighter leading-tight">
                      {t.difference.exampleBox.title}
                   </h3>
                   <p className="text-2xl font-bold text-blue-600 mb-4">{t.difference.exampleBox.p1}</p>
                   <p className="text-xl text-gray-500 font-medium italic mb-8 border-l-4 border-blue-100 pl-6">{t.difference.exampleBox.p2}</p>
                   
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                      {t.difference.exampleBox.bullets.map((b: string, i: number) => (
                        <li key={i} className="flex items-center gap-4 text-gray-700 bg-gray-50 p-4 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-white hover:shadow-md transition-all">
                          <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></div>
                          <span className="font-bold text-sm tracking-tight">{b}</span>
                        </li>
                      ))}
                   </ul>

                   <div className="flex flex-col sm:flex-row items-center gap-8">
                      <button 
                        onClick={() => handleCTA('explore_freely', 'difference')} 
                        className="bg-neutral-900 text-white hover:bg-black px-12 py-5 rounded-2xl shadow-xl font-black text-lg transition-all active:scale-95 flex items-center gap-3 w-full sm:w-auto justify-center"
                      >
                       {t.difference.exampleBox.cta}
                       <ChevronDown size={20} className="-rotate-90" />
                      </button>
                      <p className="text-xs font-black text-gray-400 uppercase tracking-widest max-w-[200px] text-center sm:text-left leading-tight">
                         {t.difference.exampleBox.footer}
                      </p>
                   </div>
                 </div>
                 
                 <div className="flex-1 relative">
                    <div className="relative z-10 grid grid-cols-2 gap-4">
                       <div className="col-span-2 overflow-hidden rounded-[32px] aspect-video shadow-2xl group/img">
                          <img src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1396&auto=format&fit=crop" className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700" alt="Coliseu context" />
                       </div>
                       <div className="overflow-hidden rounded-[24px] aspect-square shadow-xl group/img">
                          <img src="https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?q=80&w=1470&auto=format&fit=crop" className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700" alt="Street detail" />
                       </div>
                       <div className="overflow-hidden rounded-[24px] aspect-square shadow-xl group/img">
                          <img src="https://images.unsplash.com/photo-1555992336-03a23c7b20ee?q=80&w=1364&auto=format&fit=crop" className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700" alt="Hidden door" />
                       </div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>



      {/* VIDEO PLAYER SECTION */}
      <section className="c-section bg-white text-gray-900 py-24" id="veja-como-funciona">
        <div className="c-container flex flex-col items-center">
            <div className="text-center mb-16 max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">{t.audio.title}</h2>
              <p className="text-xl text-gray-500 font-medium leading-relaxed">{t.audio.sub}</p>
            </div>

            <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-[48px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border-[8px] border-neutral-900 group">
               <iframe 
                 className="w-full h-full"
                 src="https://www.youtube.com/embed/pTgNlvI6pjU?autoplay=0&mute=0&loop=1&playlist=pTgNlvI6pjU&controls=1&showinfo=1&rel=0" 
                 title="Tuggi App Preview"
                 frameBorder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                 allowFullScreen
               ></iframe>
               
               {/* Overlay Decoration */}
               <div className="absolute inset-0 pointer-events-none border-[2px] border-white/10 rounded-[40px]"></div>
            </div>

            <p className="mt-12 text-gray-400 text-xs font-bold uppercase tracking-widest">
               {t.audio.demo}
            </p>
        </div>
      </section>

      {/* WHERE IT WORKS */}
      <section className="c-section bg-gray-50">
        <div className="c-container">
          <div className="text-center mb-16">
            <h2 className="c-h2 mb-4">{t.where.title}</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">{t.where.sub}</p>
          </div>
          
          {/* Unfied Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
             {/* De Carro */}
             <div className="relative group overflow-hidden rounded-[32px] aspect-square shadow-xl border border-white/10">
                <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1470&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Driving" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                   <div className="mb-2 bg-blue-600 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/40">
                      <Car size={20} className="text-white" />
                   </div>
                   <span className="text-white font-black text-xl md:text-2xl tracking-tighter">{t.where.items[0].title}</span>
                </div>
             </div>
             
             {/* No Ônibus */}
             <div className="relative group overflow-hidden rounded-[32px] aspect-square shadow-xl border border-white/10">
                <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1469&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Bus" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                   <div className="mb-2 bg-blue-600 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/40">
                      <Bus size={20} className="text-white" />
                   </div>
                   <span className="text-white font-black text-xl md:text-2xl tracking-tighter">{t.where.items[1].title}</span>
                </div>
             </div>

             {/* A pé */}
             <div className="relative group overflow-hidden rounded-[32px] aspect-square shadow-xl border border-white/10">
                <img src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1470&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Walking" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                   <div className="mb-2 bg-blue-600 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/40">
                      <Footprints size={20} className="text-white" />
                   </div>
                   <span className="text-white font-black text-xl md:text-2xl tracking-tighter">{t.where.items[2].title}</span>
                </div>
             </div>

             {/* No Trem */}
             <div className="relative group overflow-hidden rounded-[32px] aspect-square shadow-xl border border-white/10">
                <img src="https://images.unsplash.com/photo-1541427468627-a89a96e5ca1d?q=80&w=1470&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Train" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                   <div className="mb-2 bg-blue-600 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/40">
                      <Train size={20} className="text-white" />
                   </div>
                   <span className="text-white font-black text-xl md:text-2xl tracking-tighter">{t.where.items[3].title}</span>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* PARA QUEM É - TABS */}
      <section className="c-section bg-white" id="para-quem">
         <div className="c-container">
            <h2 className="c-h2 text-center mb-12">{t.tabs.title}</h2>
            
            <div className="flex justify-center mb-12">
               <div className="bg-gray-100 p-1.5 rounded-2xl flex flex-wrap justify-center gap-1">
                  {Object.keys(t.tabs.items).map((key) => (
                     <button 
                        key={key}
                        onClick={() => setActiveTab(key)}
                        className={`px-6 py-3 rounded-xl font-black text-sm transition-all duration-300 whitespace-nowrap ${
                          activeTab === key 
                            ? 'bg-blue-600 text-white shadow-lg scale-105' 
                            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200'
                        }`}
                     >
                        {t.tabs.items[key].label}
                     </button>
                  ))}
               </div>
            </div>
            
            <div className="bg-gray-50 rounded-[32px] p-8 md:p-16 shadow-none border border-gray-100 min-h-[400px]">
               {Object.entries(t.tabs.items).map(([key, item]) => (
                  activeTab === key && (
                    <div key={key} className="grid md:grid-cols-2 gap-16 items-center w-full animate-fadeIn">
                       <div className="rounded-2xl overflow-hidden h-[350px] shadow-xl relative group">
                          {/* Dynamic Placeholders based on Tab */}
                          <img 
                            src={
                                key === 'turistas' ? "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2574&auto=format&fit=crop" :
                                key === 'exploradores' ? "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1469&auto=format&fit=crop" :
                                key === 'motoristas' ? "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1470&auto=format&fit=crop" :
                                "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1470&auto=format&fit=crop"
                            }
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                            alt={item.title} 
                          />
                       </div>
                       <div>
                          <h3 className="text-3xl font-bold mb-6 text-gray-900">{item.title}</h3>
                          <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">{item.desc}</p>
                          <ul className="space-y-4 mb-10">
                             {item.bullets.map((b: string, i: number) => (
                               <li key={i} className="flex gap-4 items-center text-lg font-medium text-gray-800">
                                 <Check className="text-green-600 shrink-0" size={20}/> 
                                 {b}
                               </li>
                             ))}
                          </ul>
                          <button 
                            onClick={() => handleCTA(`${key}_tab`, 'tabs')} 
                            className="c-btn bg-[#1D1DFF] text-white px-8 py-3 rounded-lg hover:bg-blue-700 shadow-lg font-bold"
                          >
                            {item.cta}
                          </button>
                       </div>
                    </div>
                  )
               ))}
            </div>
         </div>
      </section>

      {/* PRICING */}
      <section className="c-section bg-gray-50" id="precos">
         <div className="c-container">
            <h2 className="c-h2 text-center mb-4">{t.pricing.title}</h2>
            <p className="text-center text-gray-600 mb-16">{t.pricing.sub}</p>
            
            <div className="grid md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
               {/* Free */}
               <div className="c-card border border-gray-200 hover:shadow-lg flex flex-col p-8 bg-white rounded-2xl">
                  <h3 className="text-gray-900 font-bold mb-4">{t.pricing.free.name}</h3>
                  <div className="text-4xl font-bold mb-6 text-gray-900">{t.pricing.free.price}</div>
                  <ul className="space-y-4 mb-8 flex-grow">
                     {t.pricing.free.features.map((f: string, i: number) => (
                        <li key={i} className="flex gap-3 text-gray-600 items-start text-sm">
                          <Check size={16} className="text-gray-400 mt-0.5 shrink-0"/> {f}
                        </li>
                     ))}
                  </ul>
                  <button onClick={() => handleCTA('free_plan', 'pricing')} className="border-2 border-gray-200 text-gray-900 hover:border-gray-900 w-full py-3 rounded-xl font-bold transition-all">{t.pricing.free.cta}</button>
               </div>

               {/* Travel - Highlight */}
               <div className="c-card border-2 border-[#1D1DFF] shadow-xl scale-105 relative z-10 bg-white flex flex-col p-8 rounded-3xl">
                  <div className="absolute top-0 right-0 bg-[#FF6F00] text-white px-4 py-1.5 rounded-bl-xl text-xs font-bold uppercase tracking-wide flex items-center gap-1"><Star size={12} fill="white"/> {t.pricing.mostPopular}</div>
                  <h3 className="text-[#1D1DFF] font-bold mb-4">{t.pricing.travel.name}</h3>
                  <div className="text-5xl font-black mb-6 text-gray-900">{t.pricing.travel.price}</div>
                  <ul className="space-y-4 mb-8 flex-grow">
                     {t.pricing.travel.features.map((f: string, i: number) => (
                        <li key={i} className="flex gap-3 items-start text-gray-900 font-medium text-sm">
                          <Check size={16} className="text-[#1D1DFF] mt-0.5 shrink-0"/> {f}
                        </li>
                     ))}
                  </ul>
                  <button onClick={() => handleCTA('travel_plan', 'pricing')} className="bg-[#1D1DFF] text-white hover:bg-blue-700 w-full py-4 rounded-xl shadow-lg font-bold">{t.pricing.travel.cta}</button>
               </div>

               {/* Premium */}
               <div className="c-card border border-gray-200 hover:shadow-lg flex flex-col p-8 bg-white rounded-2xl">
                  <h3 className="text-gray-900 font-bold mb-4">{t.pricing.monthly.name}</h3>
                  <div className="text-4xl font-bold mb-6 text-gray-900">{t.pricing.monthly.price}</div>
                  <ul className="space-y-4 mb-8 flex-grow">
                     {t.pricing.monthly.features.map((f: string, i: number) => (
                        <li key={i} className="flex gap-3 text-gray-600 items-start text-sm">
                           <Check size={16} className="text-gray-400 mt-0.5 shrink-0"/> {f}
                        </li>
                     ))}
                  </ul>
                  <button onClick={() => handleCTA('monthly_plan', 'pricing')} className="bg-gradient-to-r from-[#1D1DFF] to-[#0000CA] text-white w-full py-3 rounded-xl font-bold shadow-md">{t.pricing.monthly.cta}</button>
               </div>
            </div>
            
            <div className="mt-16 text-center">
               <div className="text-sm font-bold text-gray-500 mb-6 uppercase tracking-wider">{t.pricing.allPlansInclude}</div>
               <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12">
                  <div className="flex flex-col items-center gap-2">
                     <Volume2 className="text-gray-400" size={24} />
                     <span className="text-xs font-medium text-gray-500">{t.pricing.background}</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                     <Navigation className="text-gray-400" size={24} />
                     <span className="text-xs font-medium text-gray-500">{t.pricing.maps}</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                     <Shield className="text-gray-400" size={24} />
                     <span className="text-xs font-medium text-gray-500">{t.pricing.curation}</span>
                  </div>
               </div>
               

               
               <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Lock size={14} /> {t.pricing.trust}
               </div>

            </div>
         </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="c-section bg-white">
        <div className="c-container text-center">
           <h2 className="c-h2 mb-4">{t.testimonials.title}</h2>
           <p className="text-gray-600 mb-16">{t.testimonials.sub}</p>
           
           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
               {t.testimonials.items.map((item: any, i: number) => (
                  <div key={i} className="text-left p-8 bg-white border border-gray-100 rounded-[32px] flex flex-col hover:shadow-xl transition-all duration-300">
                     <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-amber-400" fill="currentColor" />)}
                     </div>
                     <p className="text-gray-700 italic mb-8 leading-relaxed flex-grow text-lg">"{item.text}"</p>
                     <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-6">
                        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-md bg-gray-200">
                           {item.img ? (
                              <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                           ) : (
                              <div className="w-full h-full flex items-center justify-center font-bold text-gray-400">
                                 {item.name.charAt(0)}
                              </div>
                           )}
                        </div>
                        <div>
                           <span className="font-bold block text-sm text-gray-900 leading-tight">{item.name}</span>
                           <span className="text-xs text-gray-500 font-medium">{item.role} • {item.location}</span>
                        </div>
                     </div>
                  </div>
               ))}
           </div>
             <div className="mt-20 flex flex-wrap items-center justify-center gap-12 md:gap-24 pt-16 border-t border-gray-100">
                <div className="flex flex-col items-center gap-3 text-center transition-transform hover:-translate-y-1">
                   <div className="flex items-center gap-1.5 text-amber-500 mb-1 drop-shadow-sm">
                      {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" stroke="none"/>)}
                   </div>
                   <div className="flex flex-col">
                     <span className="text-[22px] font-black text-gray-900 tracking-tighter leading-tight">4.8/5</span>
                     <span className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.1em] mt-1">{t.testimonials.avgRating}</span>
                   </div>
                </div>

                <div className="flex items-center gap-6 group text-center transition-transform hover:-translate-y-1">
                   <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/20 group-hover:rotate-3 transition-all">
                      <Download size={28} strokeWidth={2.5}/>
                   </div>
                   <div className="flex flex-col text-left">
                     <span className="text-[22px] font-black text-gray-900 tracking-tighter leading-tight">5.000+</span>
                     <span className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.1em] mt-1">{t.testimonials.storeDownloads}</span>
                   </div>
                </div>

                <div className="flex items-center gap-6 group text-center transition-transform hover:-translate-y-1">
                   <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/20 group-hover:-rotate-3 transition-all">
                      <Globe size={28} strokeWidth={2.5}/>
                   </div>
                   <div className="flex flex-col text-left">
                     <span className="text-[22px] font-black text-gray-900 tracking-tighter leading-tight">{t.testimonials.nativeVoices}</span>
                     <span className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.1em] mt-1">{t.testimonials.nativeVoicesLabel}</span>
                   </div>
                </div>
             </div>
            </div>
      </section>

      {/* FAQ */}
      <section className="c-section bg-gray-50" id="faq">
         <div className="c-container max-w-3xl">
            <h2 className="c-h2 text-center mb-12">{t.faq.title}</h2>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden divide-y divide-gray-100">
               {t.faq.items.map((item: { q: string; a: string }, idx: number) => (
                  <div key={idx} className="c-accordion-item border-none">
                     <button 
                        className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors group"
                        onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                     >
                        <span className="font-bold text-gray-900 text-lg">{item.q}</span>
                        <div className={`transform transition-transform duration-200 ${activeFaq === idx ? 'rotate-45' : ''}`}>
                           <Plus size={20} className={activeFaq === idx ? 'text-[#1D1DFF]' : 'text-gray-400 group-hover:text-[#1D1DFF]'} />
                        </div>
                     </button>
                     <div 
                        className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === idx ? 'max-h-[300px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
                     >
                        <div className={`text-gray-600 leading-relaxed ${activeFaq === idx ? 'block' : 'hidden'}`}>{item.a}</div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-br from-[#1D1DFF] to-[#010132] text-white text-center relative overflow-hidden">
         <div className="c-container relative z-10 px-4">
            <h2 className="text-3xl md:text-6xl font-black mb-6 tracking-tighter text-white drop-shadow-md leading-tight uppercase">
               {t.final.h2}
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-medium">
               {t.final.p}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button 
                  onClick={() => handleStoreClick('apple', 'footer')} 
                  className="bg-white text-[#1D1DFF] h-14 min-w-[240px] rounded-xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 px-6 font-bold"
               >
                 <Apple fill="currentColor" size={24}/>
                 <div className="text-left leading-none">
                    <div className="text-[10px] font-bold uppercase  opacity-60 mb-0.5">{t.final.downloadOn}</div>
                    <div className="text-lg">App Store</div>
                 </div>
               </button>
               
               <button 
                  onClick={() => handleStoreClick('google', 'footer')} 
                   className="bg-white text-[#1D1DFF] h-14 min-w-[240px] rounded-xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 px-6 font-bold"
               >
                 <Smartphone size={24}/>
                 <div className="text-left leading-none">
                    <div className="text-[10px] font-bold uppercase  opacity-60 mb-0.5">{t.final.getItOn}</div>
                    <div className="text-lg">Google Play</div>
                 </div>
               </button>
            </div>
            
             <div className="mt-12 flex justify-center gap-6 text-sm font-bold flex-wrap">
                 {t.final.benefits.map((benefit: string, i: number) => (
                    <span key={i} className="flex items-center gap-2 bg-white/10 px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-sm">
                       <Check size={14} className="text-blue-300"/> {benefit}
                    </span>
                 ))}
              </div>

             <div className="mt-16 flex justify-center">
                <button 
                  onClick={handleDownloadSheet}
                  className="bg-white text-[#1D1DFF] px-14 py-5 rounded-2xl font-black text-2xl hover:bg-gray-100 transition-all shadow-[0_20px_40px_-15px_rgba(29,29,255,0.4)] active:scale-95 flex items-center gap-3 group animate-bounce-subtle"
                >
                  {t.hero.cta}
                  <Download size={24} className="group-hover:translate-y-1 transition-transform" />
                </button>
             </div>
         </div>
      </section>



      {/* BOTTOM SHEET MODAL */}
      {showDownloadSheet && (
         <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center p-4 animate-in fade-in duration-200">
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setShowDownloadSheet(false)}
            ></div>
            <div className="bg-white w-full max-w-sm rounded-[2.5rem] p-8 pt-16 pb-12 relative shadow-2xl animate-in slide-in-from-bottom-10 zoom-in-95 duration-300 max-h-[95vh] overflow-y-auto">
               <button onClick={() => setShowDownloadSheet(false)} className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-900 bg-gray-100 rounded-full transition-colors">
                  <X className="w-5 h-5" />
               </button>
               <h3 className="text-2xl font-black text-center mb-2 text-gray-900">{t.hero.modalTitle}</h3>
               <p className="text-center text-gray-500 font-medium mb-8 text-sm">{t.hero.modalSub}</p>
               
               <div className="flex flex-col gap-4">
                  <button onClick={() => handleStoreClick('apple', 'modal')} className="w-full bg-gray-900 text-white hover:bg-black py-5 px-6 rounded-2xl font-black text-lg flex items-center justify-center gap-4 transition-all active:scale-95 shadow-lg">
                     <Apple className="w-7 h-7" fill="currentColor" />
                     <span>{t.hero.appleLabel}</span>
                  </button>
                  <button onClick={() => handleStoreClick('google', 'modal')} className="w-full bg-white text-gray-900 border-2 border-gray-100 hover:border-gray-200 py-5 px-6 rounded-2xl font-black text-lg flex items-center justify-center gap-4 transition-all active:scale-95 shadow-sm">
                     <Smartphone className="w-7 h-7" />
                     <span>{t.hero.androidLabel}</span>
                  </button>
               </div>

               <p className="text-center text-[10px] text-gray-400 mt-8 font-bold uppercase tracking-widest">
                  {t.hero.trustLine}
               </p>
            </div>
         </div>
      )}

    </div>
  );
};

export default DriversLandingPageC;
