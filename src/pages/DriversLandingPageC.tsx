import React, { useState, useEffect } from 'react';
import { 
  X, Download, 
  Volume2, Navigation, Car, 
  Apple, Smartphone, RouteOff, Activity, Footprints,
  Check, Star, Shield, 
  Plus, Lock, Globe,
  ChevronDown, Bus, Train
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
    videoAlt: string;
    appleAlt: string;
    googleAlt: string;
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
  final: { h2: string; p: string; benefits: string[]; downloadOn: string; getItOn: string; trustLine: string };
}
// ==========================================
// Content & Translations
// ==========================================

const ptContent: ContentStructure = {
  hero: {
    h1: "Transforme corridas chatas em experiências 5 estrelas.",
    sub: "Surpreenda seus passageiros com histórias dos lugares por onde passa. Ganhe mais gorjetas e melhores avaliações.",
    trust: [
      { icon: Check, text: "Roda junto com Waze/Maps e Spotify." },
      { icon: Star, text: "O segredo dos motoristas VIP." }
    ],
    trustLine: "Teste grátis agora mesmo",
    cta: "Baixar Grátis",
    appleLabel: "iPhone / iPad",
    androidLabel: "Android",
    modalTitle: "Comece a ganhar mais",
    modalSub: "Baixe o aplicativo agora",
    videoAlt: "Assista ao vídeo demonstrativo",
    appleAlt: "Baixar na App Store",
    googleAlt: "Disponível no Google Play"
  },
  howItWorks: {
    title: "COMO FUNCIONA", slogan: "Simples, rápido, lucrativo.", seeHow: "Ver como funciona",
    steps: [
      { title: "Dê o Play", desc: "Ligue o app no começo da corrida. Não precisa configurar nada." },
      { title: "Dirija Tranquilo", desc: "Concentre-se no trânsito. O Tuggi fala nos momentos certos." },
      { title: "Encante o Passageiro", desc: "Histórias curiosas quebram o gelo e criam uma experiência única." }
    ],
    compat: "100% COMPATÍVEL COM SEUS APPS FAVORITOS",
    highlight: "Zero esforço.<br/>Muitas estrelas."
  },
  difference: {
    title: "POR QUE USAR O TUGGI?",
    sub: "A diferença entre uma corrida comum e uma inesquecível.",
    bestChoice: "O melhor investimento",
    caseStudy: "NA PRÁTICA",
    traditional: {
      title: "Corrida Comum",
      items: ["Silêncio constrangedor", "Rádio com propagandas chatas", "Passageiro no celular o tempo todo", "Apenas o valor da corrida"]
    },
    tuggi: {
      title: "Corrida com Tuggi",
      items: ["Conteúdo interessante e culto", "Quebra-gelo natural", "Passageiro valoriza o serviço", "Mais chances de gorjeta"]
    },
    exampleBox: {
      title: "O PULO DO GATO",
      p1: "Pegou um passageiro indo para o Aeroporto?",
      p2: "Em vez do silêncio, ele ouve do Tuggi: 'À sua direita, este prédio histórico foi...'",
      bullets: ["Passageiro tira os fones", "Começa a prestar atenção", "Te agradece pela viagem diferenciada"],
      footer: "VOCÊ VIRA O GUIA VIP, SEM ESFORÇO.",
      cta: "Quero testar"
    }
  },
  audio: { title: "OUÇA UM EXEMPLO", sub: "Qualidade de rádio, sincronia de GPS.", demo: "Ouvir demonstração" },
  where: {
    title: "FUNCIONA EM TODO LUGAR", sub: "Não importa a rota do app.",
    items: [{ title: "Uber/99", desc: "Destaque-se na categoria." }, { title: "Táxi", desc: "Modernize seu serviço." }, { title: "Transfer", desc: "Profissionalismo total." }, { title: "Particular", desc: "Fidelize seus clientes." }]
  },
  tabs: {
    title: "PARA QUEM É O TUGGI?",
    items: {
      turistas: { label: "Turistas", title: "TURISTAS", desc: "Seu guia de bolso.", bullets: ["Não precisa de roteiro", "8 idiomas"], cta: "Ver Planos" },
      exploradores: { label: "Exploradores", title: "CURIOSOS", desc: "Redescubra sua cidade.", bullets: ["Histórias que ninguém conta", "Olhe a cidade com outros olhos"], cta: "Baixar Grátis" },
      motoristas: { label: "Motoristas", title: "MOTORISTAS DE APP", desc: "Suba de categoria.", bullets: ["Aumente suas gorjetas", "Melhore sua nota", "Ofereça 'mimos' digitais", "Diferencie-se da multidão"], cta: "Ver Planos" },
      familias: { label: "Famílias", title: "FAMÍLIAS", desc: "Passeio sem tédio.", bullets: ["As crianças aprendem", "Diversão no trânsito"], cta: "Testar Grátis" }
    }
  },
  pricing: {
    title: "INVISTA EM VOCÊ", sub: "Custa menos que uma bala por dia. Se paga na primeira gorjeta.", trust: "Cancele quando quiser",
    mostPopular: "O preferido", allPlansInclude: "Tudo liberado", background: "Modo Background", maps: "Roda com Waze", curation: "Histórias Curadas",
    free: { name: "GRÁTIS", price: "R$ 0", features: ["Histórias limitadas por dia", "Teste o impacto no passageiro", "Funciona com tela bloqueada"], cta: "Começar Agora" },
    travel: { name: "SEMANAL", price: "R$ 14,90", features: ["Ideal para testar", "Tudo liberado", "Baixe offline para não gastar dados", "Áudio ilimitado"], cta: "Testar 7 Dias" },
    monthly: { name: "PRO MENSAL", price: "R$ 39,90", features: ["O melhor custo-benefício", "R$ 1,33 por dia", "Economia de dados (Offline)", "Acesso total a 8 idiomas"], cta: "Assinar PRO" }
  },
  testimonials: {
    title: "QUEM USA APROVA", sub: "Milhares de motoristas já estão faturando mais.",
    avgRating: "Nota Média", storeDownloads: "Downloads", nativeVoices: "8 Idiomas", nativeVoicesLabel: "Vozes Nativas",
    items: [
      { name: "Carlos Mendes", role: "Motorista Black", location: "São Paulo", text: "Cara, mudou meu jogo. O passageiro entra, ouve a história e já elogia. A gorjeta vem garantida.", img: "/testimonials/joao.png" },
      { name: "Fernanda Lima", role: "Uber X", location: "Rio de Janeiro", text: "Uso para distrair o passageiro no trânsito. Eles param de reclamar da demora e prestam atenção na história.", img: "/testimonials/giulia.png" },
      { name: "Roberto S.", role: "Taxista", location: "Curitiba", text: "Meus clientes fixos adoram. Dizem que meu táxi é o mais culto da cidade.", img: "/testimonials/giuseppe.png" }
    ]
  },
  faq: { 
    title: "DÚVIDAS FREQUENTES", 
    items: [
      { q: "Gasta muita internet?", a: "No plano PRO, você baixa tudo no Wi-Fi e não gasta nada do seu 4G na rua." },
      { q: "Atrapalha o Waze?", a: "Não! O Tuggi abaixa o som quando fala e o Waze continua funcionando normal por cima." },
      { q: "O passageiro vai gostar?", a: "Sim! As histórias são curtas (1 min) e interessantes. Não é aquela narração chata de museum." },
      { q: "Preciso ficar mexendo no celular?", a: "Não. Deixe no suporte. O app fala sozinho quando passa perto de algo legal." },
      { q: "Posso cancelar se não gostar?", a: "Claro. Cancela na hora direto na loja de aplicativos." },
      { q: "Serve para gringo?", a: "Demais! O app tem inglês, espanhol, francês... O gringo vai achar que você contratou um guia." }
    ] 
  },
  final: { h2: "QUER GANHAR MAIS ESTRELAS?", p: "Baixe o Tuggi e faça o teste na sua próxima corrida.", benefits: ["Grátis para testar", "Aumente seus ganhos", "Cancele fácil"], downloadOn: "Baixar na", getItOn: "Disponível no", trustLine: "Teste grátis agora mesmo" }
};

const enContent: ContentStructure = {
  hero: {
    h1: "Upgrade your ride experience. Boost your tips.",
    sub: "Tuggi entertains your passengers with high-quality audio stories. You drive, we narrate.",
    trust: [
      { icon: Check, text: "Works in background with Google Maps & Waze." },
      { icon: Star, text: "The secret to 5-star ratings." }
    ],
    trustLine: "Start your free trial today",
    cta: "Download Free",
    appleLabel: "iPhone / iPad",
    androidLabel: "Android",
    modalTitle: "Start earning more",
    modalSub: "Select your app store",
    videoAlt: "Watch the demo video",
    appleAlt: "Download on the App Store",
    googleAlt: "Get it on Google Play"
  },
  howItWorks: {
    title: "HOW IT WORKS", slogan: "Drive. Entertain. Earn.", seeHow: "See it in action",
    steps: [
      { title: "Press Play", desc: "Start the app when the ride begins. No setup needed." },
      { title: "Drive Smoothly", desc: "Focus on the road. Tuggi plays stories automatically via GPS." },
      { title: "Delight Riders", desc: "Guests love the local insights. Silence becomes an experience." }
    ],
    compat: "100% COMPATIBLE WITH YOUR FAVORITE APPS",
    highlight: "Zero effort.<br/>Better Ratings."
  },
  difference: {
    title: "WHY USE TUGGI?",
    sub: "Turn a simple A-to-B ride into a premium service.",
    bestChoice: "Best for Business",
    caseStudy: "REAL SCENARIO",
    traditional: {
      title: "Standard Ride",
      items: ["Awkward silence", "Generic radio ads", "Passenger on phone/bored", "Standard fare only"]
    },
    tuggi: {
      title: "Ride with Tuggi",
      items: ["Curated local storytelling", "Natural ice-breaker", "Passenger feels VIP", "Higher tip potential"]
    },
    exampleBox: {
      title: "THE TIP BOOSTER",
      p1: "Taking a tourist to the Airport?",
      p2: "Instead of silence, they hear: 'On your left, this historic building was...'",
      bullets: ["Rider removes headphones", "Starts engaging with you", "Thanks you for the 'tour'"],
      footer: "YOU BECOME A PRIVATE GUIDE, EFFORTLESSLY.",
      cta: "Try it Free"
    }
  },
  audio: { title: "HEAR THE QUALITY", sub: "Studio-recorded professional narration.", demo: "Listen to demo" },
  where: {
    title: "WORKS EVERYWHERE", sub: "Compatible with any ride-share platform.",
    items: [{ title: "Uber/Lyft", desc: "Stand out from other drivers." }, { title: "Limo/Black", desc: "Add a concierge touch." }, { title: "Taxi", desc: "Modernize your service." }, { title: "Private", desc: "Retain your VIP clients." }]
  },
  tabs: {
    title: "WHO IS IT FOR?",
    items: {
      turistas: { label: "Tourists", title: "TRAVELERS", desc: "Your pocket guide.", bullets: ["No planning needed", "8 languages"], cta: "View Plans" },
      exploradores: { label: "Explorers", title: "LOCALS", desc: "Rediscover your city.", bullets: ["Hidden gems", "New perspective"], cta: "Download Free" },
      motoristas: { label: "Drivers", title: "PRO DRIVERS", desc: "Level up your business.", bullets: ["Boost your tips", "Get 5-star ratings", "Digital amenities", "Stand out"], cta: "View Plans" },
      familias: { label: "Families", title: "FAMILIES", desc: "Fun for everyone.", bullets: ["Kids learn history", "Entertainment on the go"], cta: "Try Free" }
    }
  },
  pricing: {
    title: "SMART INVESTMENT", sub: "Costs less than a gum. Pays for itself with one good tip.", trust: "Cancel anytime",
    mostPopular: "Best Value", allPlansInclude: "All features included", background: "Background Mode", maps: "Waze Compatible", curation: "Premium Content",
    free: { name: "FREE", price: "$ 0", features: ["Limited daily stories", "Test passenger reaction", "Works in background"], cta: "Start Free" },
    travel: { name: "WEEKLY", price: "$ 9.99", features: ["Great for testing", "Unlimited access", "Offline mode (save data)", "All 8 languages"], cta: "Try 7 Days" },
    monthly: { name: "PRO MONTHLY", price: "$ 24.99", features: ["Best value for pros", "$0.83 per day", "Offline mode", "Tax deductible expense"], cta: "Go PRO" }
  },
  testimonials: {
    title: "DRIVER SAYS", sub: "Thousands of drivers are upgrading their service.",
    avgRating: "Avg Rating", storeDownloads: "Downloads", nativeVoices: "8 Languages", nativeVoicesLabel: "Native Voices",
    items: [
      { name: "Michael T.", role: "Uber Black", location: "New York", text: "Game changer. Tourists love it and my tips have gone up significantly since I started using it.", img: "/testimonials/joao.png" },
      { name: "Sarah J.", role: "Lyft Driver", location: "London", text: "I use it to fill the awkward silence. It works like a charm and passengers always ask about the app.", img: "/testimonials/giulia.png" },
      { name: "David R.", role: "Taxi Driver", location: "San Francisco", text: "Finally something that adds value. I just drive, the app does the talking. Brilliant.", img: "/testimonials/giuseppe.png" }
    ]
  },
  faq: { 
    title: "FAQ", 
    items: [
      { q: "Data usage?", a: "With PRO, you download everything on Wi-Fi and use 0 data while driving." },
      { q: "Does it block Waze?", a: "No! Tuggi lowers volume when speaking, so you never miss a turn instruction." },
      { q: "Will passengers like it?", a: "Yes! Stories are short (1 min) and fascinating. It's not a boring lecture." },
      { q: "Do I need to touch the phone?", a: "No. Leave it in the mount. It plays automatically when near a landmark." },
      { q: "Can I cancel?", a: "Yes, anytime directly in the App Store/Play Store." },
      { q: "Foreign passengers?", a: "Perfect! It speaks 8 languages. They'll think you hired a personal guide." }
    ] 
  },
  final: { h2: "Ready to Upgrade Your Ride?", p: "Download Tuggi and try it on your next trip.", benefits: ["Free to test", "Boost your tips", "Easy to cancel"], downloadOn: "Download on", getItOn: "Get it on", trustLine: "Start your free trial today" }
};

const esContent: ContentStructure = {
  hero: {
    h1: "Convierte tu taxi en un tour privado.",
    sub: "Ofrece una experiencia premium a tus pasajeros sin esfuerzo. Historias automáticas por GPS.",
    trust: [
      { icon: Check, text: "Funciona con Waze, Google Maps y Spotify." },
      { icon: Star, text: "Consigue mejores reseñas y propinas." }
    ],
    trustLine: "Pruébalo gratis hoy mismo",
    cta: "Descargar Gratis",
    appleLabel: "iPhone / iPad",
    androidLabel: "Android",
    modalTitle: "Empieza a ganar más",
    modalSub: "Descarga la app ahora",
    videoAlt: "Ver el vídeo de demostración",
    appleAlt: "Descargar en App Store",
    googleAlt: "Disponible en Google Play"
  },
  howItWorks: {
    title: "CÓMO FUNCIONA", slogan: "Conduce. Entretiene. Gana.", seeHow: "Ver demo",
    steps: [
      { title: "Dale al Play", desc: "Inicia la app al empezar la carrera. Sin configuraciones." },
      { title: "Conduce normal", desc: "Tuggi cuenta historias cuando pasas cerca de algo interesante." },
      { title: "Sorprende al cliente", desc: "El pasajero disfruta del viaje y valora tu servicio extra." }
    ],
    compat: "100% COMPATIBLE CON TUS APPS FAVORITAS",
    highlight: "Cero esfuerzo.<br/>Servicio VIP."
  },
  difference: {
    title: "TU VENTAJA COMPETITIVA",
    sub: "La diferencia entre un simple transporte y un servicio excelente.",
    bestChoice: "Mejor Elección",
    caseStudy: "EJEMPLO REAL",
    traditional: {
      title: "Viaje Estándar",
      items: ["Silencio incómodo", "Radio genérica", "Pasajero aburrido", "Tarifa básica"]
    },
    tuggi: {
      title: "Viaje con Tuggi",
      items: ["Narración cultural interesante", "Rompe el hielo natural", "Pasajero se siente VIP", "Mayor propina"]
    },
    exampleBox: {
      title: "EL SECRETO",
      p1: "¿Llevas a un turista al aeropuerto?",
      p2: "En lugar de silencio, escuchan: 'A tu derecha, este edificio fue...'",
      bullets: ["El cliente se quita los auriculares", "Muestra interés", "Te agradece el tour"],
      footer: "TE CONVIERTES EN EL MEJOR ANFITRIÓN.",
      cta: "Probar Gratis"
    }
  },
  audio: { title: "ESCUCHA LA CALIDAD", sub: "Narración profesional de estudio.", demo: "Demo en tiempo real" },
  where: {
    title: "FUNCIONA SIEMPRE", sub: "Sea cual sea tu plataforma.",
    items: [{ title: "Taxi", desc: "Moderniza tu servicio." }, { title: "VTC/Uber", desc: "Destaca entre miles." }, { title: "Transfer", desc: "Profesionalidad total." }, { title: "Privado", desc: "Fideliza clientes." }]
  },
  tabs: {
    title: "¿PARA QUIÉN ES?",
    items: {
      turistas: { label: "Turistas", title: "VIAJEROS", desc: "Tu guía personal.", bullets: ["Sin planes", "8 idiomas"], cta: "Ver Planes" },
      exploradores: { label: "Exploradores", title: "CURIOSOS", desc: "Redescubre tu ciudad.", bullets: ["Secretos locales", "Nueva visión"], cta: "Descargar" },
      motoristas: { label: "Conductores", title: "CONDUCTORES PRO", desc: "Mejora tu negocio.", bullets: ["Más propinas", "5 estrellas", "Amenidad digital", "Destaca"], cta: "Ver Planes" },
      familias: { label: "Familias", title: "FAMILIAS", desc: "Cultura divertida.", bullets: ["Educativo", "Sin pantallas"], cta: "Probar" }
    }
  },
  pricing: {
    title: "INVERSIÓN INTELIGENTE", sub: "Cuesta menos que un café. Se paga con una sola propina.", trust: "Deducible · Cancela cuando quieras",
    mostPopular: "Más Popular", allPlansInclude: "Todo incluido", background: "Modo Segundo Plano", maps: "Compatible GPS", curation: "Contenido Premium",
    free: { name: "GRATIS", price: "0 €", features: ["Prueba el impacto hoy", "Modo fondo", "Historias limitadas", "Online"], cta: "Empezar Gratis" },
    travel: { name: "SEMANAL", price: "6,99 €", features: ["Ideal para probar", "Acceso ilimitado", "Modo Offline (ahorra datos)", "Todos los idiomas"], cta: "Probar 7 Días" },
    monthly: { name: "PRO MENSUAL", price: "24,99 €", features: ["El favorito de los pros", "0,83 € al día", "Offline total", "Gasto deducible"], cta: "Ser PRO" }
  },
  testimonials: {
    title: "OPINIÓN DE COMPAÑEROS", sub: "Miles de conductores ya lo usan.",
    avgRating: "Valoración", storeDownloads: "Descargas", nativeVoices: "8 Idiomas", nativeVoicesLabel: "Voces Nativas",
    items: [
      { name: "Carlos R.", role: "Uber", location: "Madrid", text: "Mis pasajeros alucinan. Es un detalle que marca la diferencia y siempre comentan lo bueno que es.", img: "/testimonials/joao.png" },
      { name: "Lucía M.", role: "Taxista", location: "Barcelona", text: "Perfecto para los trayectos al aeropuerto. Los turistas agradecen mucho la información en su idioma.", img: "/testimonials/giulia.png" },
      { name: "Javier S.", role: "Cabify", location: "Sevilla", text: "Me ayuda a conseguir las 5 estrellas. Es fácil de usar y no molesta al GPS.", img: "/testimonials/giuseppe.png" }
    ]
  },
  faq: { 
    title: "PREGUNTAS FRECUENTES", 
    items: [
      { q: "¿Gasta muchos datos?", a: "Con el plan PRO, descargas todo con Wi-Fi y no gastas nada de datos móviles trabajando." },
      { q: "¿Tapa las instrucciones del Waze?", a: "¡No! Tuggi baja el volumen suavemente al hablar, así nunca pierdes un giro." },
      { q: "¿Le gustará al pasajero?", a: "¡Sí! Son historias cortas y curiosas. No es una audioguía aburrida de museo." },
      { q: "¿Tengo que tocar el móvil?", a: "No. Déjalo en el soporte. Funciona solo por GPS." },
      { q: "¿Puedo cancelar?", a: "Sí, cuando quieras desde la tienda de apps." },
      { q: "¿Sirve para extranjeros?", a: "¡Perfecto! Tiene inglés, francés, alemán... Pensarán que eres un guía privado." }
    ] 
  },
  final: { h2: "¿Listo para mejorar tu servicio?", p: "Descarga Tuggi y pruébalo en tu próximo viaje.", benefits: ["Prueba gratis", "Mejores propinas", "Cancela fácil"], downloadOn: "Descargar en", getItOn: "Disponible en", trustLine: "Pruébalo gratis hoy mismo" }
};

const frContent: ContentStructure = {
  hero: {
    h1: "L'élégance d'un voyage culturel, sans effort.",
    sub: "Faites vivre une expérience 5 étoiles à vos passagers. Idéal pour VTC et Taxis premium.",
    trust: [
      { icon: Check, text: "Compatible avec Waze et Google Maps." },
      { icon: Star, text: "Augmentez vos pourboires et notes." }
    ],
    trustLine: "Essai gratuit sans carte de crédit",
    cta: "Télécharger Gratuitement",
    appleLabel: "iPhone / iPad",
    androidLabel: "Android",
    modalTitle: "Télécharger Tuggi",
    modalSub: "Choisissez votre magasin",
    videoAlt: "Regarder la vidéo de démonstration",
    appleAlt: "Télécharger sur l'App Store",
    googleAlt: "Disponible sur Google Play"
  },
  howItWorks: {
    title: "COMMENT ÇA MARCHE", slogan: "Service. Excellence. Simplicité.", seeHow: "Voir la démo",
    steps: [
      { title: "Lancez l'app", desc: "Activez Tuggi au début de la course. C'est tout." },
      { title: "Conduisez sereinement", desc: "L'app détecte les lieux et raconte l'histoire automatiquement." },
      { title: "Impressionnez", desc: "Votre passager profite d'un service de conciergerie digitale." }
    ],
    compat: "100% COMPATIBLE AVEC VOS APPS PRÉFÉRÉES",
    highlight: "Zéro distraction.<br/>Service Premium."
  },
  difference: {
    title: "VOTRE ATOUT MAJEUR",
    sub: "La touche qui fait toute la différence.",
    bestChoice: "Le choix des Pros",
    caseStudy: "EN SITUATION",
    traditional: {
      title: "Course Classique",
      items: ["Silence pesant", "Radio générique", "Passager indifferent", "Tarif standard"]
    },
    tuggi: {
      title: "Course avec Tuggi",
      items: ["Atmosphère culturelle", "Bris de glace élégant", "Passager valorisé", "Gratification supérieure"]
    },
    exampleBox: {
      title: "L'EFFET WOW",
      p1: "Vous conduisez un touriste vers la Tour Eiffel ?",
      p2: "Au lieu du silence, il entend : 'Sur votre gauche, ce palais a été construit...'",
      bullets: ["Le client est captivé", "Il retire ses écouteurs", "Il vous remercie pour la découverte"],
      footer: "VOUS DEVENEZ SON GUIDE PRIVÉ.",
      cta: "Essayer l'Excellence"
    }
  },
  audio: { title: "ÉCOUTEZ LA QUALITÉ", sub: "Narration studio professionnelle.", demo: "Démo temps réel" },
  where: {
    title: "PARTOUT EN FRANCE", sub: "Quelle que soit votre activité.",
    items: [{ title: "VTC", desc: "Montez en gamme." }, { title: "Taxi", desc: "Fidélisez votre clientèle." }, { title: "Navette", desc: "Transformez le trajet." }, { title: "Privé", desc: "Service 5 étoiles." }]
  },
  tabs: {
    title: "POUR QUI ?",
    items: {
      turistas: { label: "Touristes", title: "VOYAGEURS", desc: "Votre guide personnel.", bullets: ["Sans effort", "8 langues"], cta: "Voir les Plans" },
      exploradores: { label: "Explorateurs", title: "LOCAUX", desc: "Redécouvrez la ville.", bullets: ["Secrets cachés", "Nouvelle vision"], cta: "Gratuit" },
      motoristas: { label: "Chauffeurs", title: "CHAUFFEURS PRO", desc: "Valorisez votre service.", bullets: ["Meilleures notes", "Service VIP", "Outil pro", "Démarquez-vous"], cta: "Voir les Plans" },
      familias: { label: "Familles", title: "FAMILLES", desc: "Culture ludique.", bullets: ["Éducatif", "Sans écran"], cta: "Essayer" }
    }
  },
  pricing: {
    title: "INVESTISSEMENT RENTABLE", sub: "Moins cher qu'un café. Remboursé dès le premier pourboire.", trust: "Déductible · Sans engagement",
    mostPopular: "Best Seller", allPlansInclude: "Tout inclus", background: "Mode Arrière-plan", maps: "Compatible GPS", curation: "Contenu Premium",
    free: { name: "GRATUIT", price: "0 €", features: ["Testez l'impact ajourd'hui", "Mode arrière-plan", "Histoires limitées", "En ligne"], cta: "Commencer" },
    travel: { name: "SEMAINE", price: "9,99 €", features: ["Idéal pour tester", "Accès illimité", "Mode Hors Ligne (économisez la data)", "Toutes les langues"], cta: "Essai 7 Jours" },
    monthly: { name: "PRO MENSUEL", price: "24,99 €", features: ["Le choix des pros", "0,83 € par jour", "Hors ligne total", "Frais déductibles"], cta: "Devenir PRO" }
  },
  testimonials: {
    title: "L'AVIS DES PROS", sub: "Déjà adopté par l'élite des VTC.",
    avgRating: "Note Moyenne", storeDownloads: "Téléchargements", nativeVoices: "8 Langues", nativeVoicesLabel: "Voix Natives",
    items: [
      { name: "Thomas L.", role: "VTC", location: "Paris", text: "Mes clients internationaux adorent. C'est le petit plus qui me garantit 5 étoiles à chaque fois.", img: "/testimonials/giulia.png" },
      { name: "Sophie M.", role: "Taxi", location: "Nice", text: "Parfait pour les trajets aéroport. Les touristes découvrent la Côte d'Azur sans que j'aie à parler anglais.", img: "/testimonials/giuseppe.png" },
      { name: "Karim B.", role: "Chauffeur Privé", location: "Lyon", text: "Un outil indispensable pour se démarquer de la concurrence. Très simple à utiliser.", img: "/testimonials/joao.png" }
    ]
  },
  faq: { 
    title: "QUESTIONS FRÉQUENTES", 
    items: [
      { q: "Consommation de données ?", a: "Avec le mode PRO, téléchargez tout en Wi-Fi. Souscrivez à un plan pour ne rien consommer sur la route." },
      { q: "Gênant pour le GPS ?", a: "Non ! Tuggi baisse le volume quand il parle. Vous ne ratez aucune instruction." },
      { q: "Le client va aimer ?", a: "Oui ! Les histoires sont courtes et captivantes. Ce n'est pas un cours d'histoire ennuyeux." },
      { q: "Dois-je manipuler le téléphone ?", a: "Non. Laissez-le sur le support. Tout est automatique par GPS." },
      { q: "Puis-je résilier ?", a: "Oui, à tout moment via l'App Store." },
      { q: "Pour les étrangers ?", a: "Parfait ! Il parle 8 langues. Ils penseront que vous êtes bilingue." }
    ] 
  },
  final: { h2: "Prêt à transformer vos trajets ?", p: "Téléchargez Tuggi e testez-le lors de votre prochaine course.", benefits: ["Essai gratuit", "Plus de pourboires", "Annulation facile"], downloadOn: "Télécharger sur", getItOn: "Disponible sur", trustLine: "Essai gratuit sans carte de crédit" }
};

const deContent: ContentStructure = {
  hero: {
    h1: "Mehrwert für Ihre Fahrgäste. Automatisch.",
    sub: "Tuggi verwandelt Ihre Taxifahrt in eine 5-Sterne-Erfahrung. Einfach, effizient, lukrativ.",
    trust: [
      { icon: Check, text: "Läuft im Hintergrund mit Google Maps & Waze." },
      { icon: Star, text: "Besseres Trinkgeld & Bewertungen." }
    ],
    trustLine: "Kostenlos testen. Sofort startklar.",
    cta: "Kostenlos Herunterladen",
    appleLabel: "iPhone / iPad",
    androidLabel: "Android",
    modalTitle: "Mehr verdienen",
    modalSub: "Laden Sie die App",
    videoAlt: "Demo-Video ansehen",
    appleAlt: "Laden im App Store",
    googleAlt: "Erhältlich bei Google Play"
  },
  howItWorks: {
    title: "SO FUNKTIONIERT ES", slogan: "Fahren. Unterhalten. Verdienen.", seeHow: "Demo ansehen",
    steps: [
      { title: "Starten", desc: "App bei Fahrtbeginn öffnen. Keine Einrichtung nötig." },
      { title: "Fahren", desc: "Konzentrieren Sie sich auf den Verkehr. Tuggi erzählt automatisch." },
      { title: "Begeistern", desc: "Gäste genießen hochwertige Audio-Inhalte statt Stille." }
    ],
    compat: "100% KOMPATIBEL MIT DEINEN LIEBLINGS-APPS",
    highlight: "Null Aufwand.<br/>Maximaler Service."
  },
  difference: {
    title: "IHR VORTEIL",
    sub: "Der Unterschied zwischen Transport und Service.",
    bestChoice: "Beste Wahl",
    caseStudy: "BEISPIEL",
    traditional: {
      title: "Standard Fahrt",
      items: ["Unangenehme Stille", "Radio-Werbung", "Gast gelangweilt", "Nur Fahrpreis"]
    },
    tuggi: {
      title: "Fahrt mit Tuggi",
      items: ["Kultur & Geschichte", "Eisbrecher", "Premium-Gefühl", "Höheres Trinkgeld"]
    },
    exampleBox: {
      title: "DER TIP-BOOSTER",
      p1: "Fahrt zum Flughafen oder Hotel?",
      p2: "Statt Schweigen hören sie: 'Rechts sehen Sie das historische Rathaus...'",
      bullets: ["Gast nimmt Kopfhörer ab", "Hört interessiert zu", "Bedankt sich für die Tour"],
      footer: "SIE WERDEN ZUM PRIVAT-GUIDE.",
      cta: "Jetzt Testen"
    }
  },
  audio: { title: "QUALITÄT HÖREN", sub: "Professionelle Studio-Aufnahmen.", demo: "Live-Demo hören" },
  where: {
    title: "ÜBERALL EINSATZBEREIT", sub: "Für jeden Fahrer geeignet.",
    items: [{ title: "Taxi", desc: "Modernisieren Sie Ihren Service." }, { title: "Mietwagen", desc: "Exklusive Kundschaft." }, { title: "Uber/Bolt", desc: "Hervorstechen." }, { title: "Privat", desc: "Stammkunden binden." }]
  },
  tabs: {
    title: "FÜR WEN?",
    items: {
      turistas: { label: "Touristen", title: "REISENDE", desc: "Ihr Pocket-Guide.", bullets: ["Keine Planung", "8 Sprachen"], cta: "Pläne ansehen" },
      exploradores: { label: "Entdecker", title: "LOCALS", desc: "Stadt neu entdecken.", bullets: ["Geheimtipps", "Neue Perspektive"], cta: "Gratis laden" },
      motoristas: { label: "Fahrer", title: "PROFI-FAHRER", desc: "Business-Upgrade.", bullets: ["Mehr Trinkgeld", "Top Bewertungen", "Digitaler Service", "Konkurrenzvorteil"], cta: "Pläne ansehen" },
      familias: { label: "Familien", title: "FAMILIEN", desc: "Spaß für alle.", bullets: ["Bildung", "Keine Bildschirme"], cta: "Testen" }
    }
  },
  pricing: {
    title: "SMARTE INVESTITION", sub: "Kostet weniger als ein Kaffee. Zahlt sich mit einem Trinkgeld aus.", trust: "Steuerlich absetzbar · Jederzeit kündbar",
    mostPopular: "Bestseller", allPlansInclude: "Alles inklusive", background: "Hintergrund-Modus", maps: "Navi-Kompatibel", curation: "Premium Inhalt",
    free: { name: "GRATIS", price: "0 €", features: ["Wirkung testen", "Hintergrund-Modus", "Limitierte Stories", "Online"], cta: "Gratis Starten" },
    travel: { name: "WOCHE", price: "9,99 €", features: ["Ideal zum Testen", "Unbegrenzter Zugang", "Offline-Modus (Daten sparen)", "Alle Sprachen"], cta: "7 Tage Testen" },
    monthly: { name: "PRO MONAT", price: "24,99 €", features: ["Profi-Wahl", "0,83 € pro Tag", "Voll Offline", "Absetzbare Kosten"], cta: "PRO werden" }
  },
  testimonials: {
    title: "DAS SAGEN KOLLEGEN", sub: "Tausende Fahrer nutzen es bereits.",
    avgRating: "Bewertung", storeDownloads: "Downloads", nativeVoices: "8 Sprachen", nativeVoicesLabel: "Native Speaker",
    items: [
      { name: "Markus Schmidt", role: "Taxi", location: "Berlin", text: "Meine Fahrgäste sind begeistert. Endlich habe ich etwas, das mich von Uber unterscheidet.", img: "/testimonials/joao.png" },
      { name: "Lisa M.", role: "Mietwagen", location: "München", text: "Super für Flughafentransfers. Die Touristen lieben die Infos über Bayern.", img: "/testimonials/giulia.png" },
      { name: "Ali K.", role: "Uber", location: "Frankfurt", text: "Hilft mir sehr bei den Bewertungen. Die App läuft einfach mit.", img: "/testimonials/giuseppe.png" }
    ]
  },
  faq: { 
    title: "HÄUFIGE FRAGEN", 
    items: [
      { q: "Datenverbrauch?", a: "Mit PRO laden Sie alles im WLAN. Unterwegs 0 Datenverbrauch." },
      { q: "Stört das Navi?", a: "Nein! Tuggi wird leiser, wenn es spricht. Sie hören jede Abbiegehinweise." },
      { q: "Mögen Gäste das?", a: "Ja! Die Stories sind kurz und spannend. Kein langweiliger Vortrag." },
      { q: "Muss ich das Handy bedienen?", a: "Nein. In die Halterung stecken. GPS macht den Rest automatisch." },
      { q: "Kann ich kündigen?", a: "Ja, jederzeit direkt im App Store." },
      { q: "Ausländische Gäste?", a: "Perfekt! 8 Sprachen verfügbar. Wirkt wie ein persönlicher Guide." }
    ] 
  },
  final: { h2: "Bereit für mehr 5-Sterne-Fahrten?", p: "Laden Sie Tuggi herunter und testen Sie es bei Ihrer nächsten Fahrt.", benefits: ["Kostenlos testen", "Mehr Trinkgeld", "Einfach kündigen"], downloadOn: "Laden im", getItOn: "Erhältlich bei", trustLine: "Kostenlos testen. Sofort startklar." }
};

const itContent: ContentStructure = {
  hero: {
    h1: "Il Copilota Silenzioso per un Servizio a 5 Stelle.",
    sub: "Distinguiti con classe. Tuggi racconta il territorio ai tuoi passeggeri mentre tu ti concentri sulla guida perfetta.",
    trust: [
      { icon: Check, text: "Zero Distrazioni. Tu guidi, l'app racconta." },
      { icon: Smartphone, text: "Massima Discrezione. Mai invasivo." }
    ],
    trustLine: "Prova gratuita illimitata. Nessuna carta richiesta.",
    cta: "Inizia la Prova Gratuita",
    appleLabel: "iPhone / iPad",
    androidLabel: "Android",
    modalTitle: "Scarica Tuggi Gratis",
    modalSub: "Scegli il tuo store",
    videoAlt: "Guarda il video dimostrativo",
    appleAlt: "Scarica su App Store",
    googleAlt: "Disponibile su Google Play"
  },
  howItWorks: {
    title: "L'ESPERIENZA", slogan: "Elogianza. Semplicità.", seeHow: "Vedi come funziona",
    steps: [
      { title: "Attiva in 1 Click", desc: "Prima di partire, apri l'app. Nessuna configurazione complessa." },
      { title: "Guida in Silenzio", desc: "Evita le chiacchiere forzate. Offri un ambiente rilassato e professionale." },
      { title: "Il Cliente Scopre", desc: "L'audio geolocalizzato si attiva solo nei punti di interesse. Magia pura." }
    ],
    compat: "100% COMPATIBILE CON LE TUE APP PREFERITE",
    highlight: "Il tocco di classe<br/>che mancava."
  },
  difference: {
    title: "DISTINGUITI DALLA MASSA",
    sub: "La professionalità che i clienti notano subito.",
    bestChoice: "La scelta migliore",
    caseStudy: "CASO REALE",
    traditional: {
      title: "Il Solito Transfer",
      items: ["Silenzio imbarazzante o radio generica", "Il cliente guarda il telefono annoiato", "Nessun valore aggiunto al servizio", "Mancia standard o assente"]
    },
    tuggi: {
      title: "Con Tuggi Drive",
      items: ["Intrattenimento VIP automatico", "Il cliente si sente un ospite speciale", "Conversazioni di qualità (se richieste)", "Mance più alte e Recensioni Top"]
    },
    exampleBox: {
      title: "IL ROI DEL SERVIZIO",
      p1: "Immagina un transfer Linate-Centro nel traffico.",
      p2: "Invece di sbuffare, il cliente ascolta la storia di Milano.",
      bullets: ["Clienti Business rilassati", "Turisti affascinati", "Percezione di lusso immediata"],
      footer: "INVESTIMENTO MINIMO, RITORNO MASSIMO.",
      cta: "Prova l'Eccellenza"
    }
  },
  audio: { title: "ASCOLTA LA DIFFERENZA", sub: "Narrazione professionale da studio.", demo: "Demo in tempo reale" },
  where: {
    title: "PER OGNI TIPO DI SERVIZIO", sub: "Qualsiasi sia la tua tratta.",
    items: [{ title: "NCC & Limo", desc: "Servizio VIP imperdibile." }, { title: "Taxi", desc: "Distinguiti dalla concorrenza." }, { title: "Uber Black", desc: "Il dettaglio che fa la differenza." }, { title: "Transfer", desc: "Rendi il viaggio memorabile." }]
  },
  tabs: {
    title: "PER CHI?",
    items: {
      turistas: { label: "Turisti", title: "TURISTI", desc: "Oltre la guida.", bullets: ["Nessuna pianificazione necessaria", "Disponibile in 8 lingue", "Scoperta spontanea", "Funziona offline"], cta: "Vedi Piani" },
      exploradores: { label: "Esploratori", title: "LOCALS", desc: "Riscopri la tua città.", bullets: ["Storie inedite e curiosità", "Riscopri il tuo quartiere", "Perfetto per passeggiate", "Audio di alta qualità"], cta: "Gratis" },
      motoristas: { label: "Driver Pro", title: "DRIVER PROFESSIONISTI", desc: "Eleva il tuo business.", bullets: ["Distinguiti dalla concorrenza", "Mance più alte garantite", "Recensioni 5 stelle facili", "Intrattenimento VIP automatico"], cta: "Vedi Piani" },
      familias: { label: "Famiglie", title: "FAMIGLIE", desc: "Cultura per tutti.", bullets: ["Educativo e divertente", "Niente schermi, solo audio", "Imparare viaggiando", "Adatto a tutte le età"], cta: "Prova Gratis" }
    }
  },
  pricing: {
    title: "INVESTIMENTO INTELLIGENTE", sub: "Deducibile al 100%. Meno di un caffè al giorno.", trust: "Fatturabile · Nessun vincolo",
    mostPopular: "Best Seller", allPlansInclude: "Tutto incluso", background: "Background", maps: "Compatibile Maps/Waze", curation: "Contenuti Premium",
    free: { name: "BASIC", price: "0 €", features: ["Testa il servizio oggi", "Modalità background", "Audio limitati", "Online"], cta: "Inizia Gratis" },
    travel: { name: "SETTIMANALE", price: "6,99 €", features: ["Perfetto per alta stagione", "Tutte le lingue", "Offline", "No rinnovo automatico", "Audio illimitati"], cta: "Attiva 7 Giorni" },
    monthly: { name: "PRO (MENSILE)", price: "19,99 €", features: ["Solo 0,66€ al giorno", "Audio illimitati", "Tutte le lingue", "Offline totale", "Recuperi con 2 mance"], cta: "Diventa PRO" }
  },
  testimonials: {
    title: "DICONO I COLLEGHI", sub: "Già scelto dai migliori driver di Milano e Roma.",
    avgRating: "Media Recensioni", storeDownloads: "Download", nativeVoices: "8 Lingue", nativeVoicesLabel: "Doppiaggio Pro",
    items: [
      { name: "Marco Valli", role: "Driver NCC", location: "Milano", text: "I clienti americani impazziscono. Spesso mi chiedono il nome dell'app appena scendono. Mance raddoppiate.", img: "/testimonials/giulia.png" },
      { name: "Giuseppe Rossi", role: "Tassista", location: "Roma", text: "Finalmente. Lo accendo, il cliente indossa le cuffie o ascolta in auto, e io guido tranquillo. Servizio top.", img: "/testimonials/giuseppe.png" },
      { name: "Luca B.", role: "Uber Black", location: "Milano", text: "Fa la differenza tra un semplice passaggio e un'esperienza di lusso. 5 stelle fisse.", img: "/testimonials/joao.png" }
    ]
  },
  faq: { 
    title: "DOMANDE FREQUENTI", 
    items: [
      { q: "Funziona con Waze e Google Maps?", a: "Certamente. Tuggi lavora in background. Tu segui il navigatore, lui racconta." },
      { q: "Devo interagire con l'app mentre guido?", a: "Assolutamente no. Una volta avviato, fa tutto da solo basandosi sul GPS. Guida in sicurezza." },
      { q: "Le storie sono in altre lingue?", a: "Sì, copriamo 8 lingue (Inglese, Francese, Spagnolo, Tedesco...). Rileva la lingua del telefono o la imposti tu." },
      { q: "Posso scaricarlo sul tablet dell'auto?", a: "Sì, se è Android o iPad. Oppure usi il tuo telefono via Bluetooth dell'auto." },
      { q: "È un costo deducibile?", a: "Per i professionisti sì, è un software di servizio deducibile al 100%." },
      { q: "Come gestisco la musica?", a: "Tuggi abbassa automaticamente la tua musica (Spotify/Radio) quando parla, e la rialza dopo." }
    ] 
  },
  final: { h2: "Vuoi più recensioni a 5 stelle?", p: "Scarica Tuggi e provalo durante la tua prossima corsa.", benefits: ["Prova gratuita", "Guadagni extra", "Cancella quando vuoi"], downloadOn: "Scarica su", getItOn: "Disponibile su", trustLine: "Prova gratuita illimitata. Nessuna carta richiesta." }
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
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const getMobileOS = () => {
    if (typeof window === 'undefined') return 'other';
    const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
    if (/android/i.test(ua)) return 'android';
    if (/iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream) return 'ios';
    return 'other';
  };

  const handleDownloadSheet = (e?: React.MouseEvent) => {
    e?.preventDefault();
    const os = getMobileOS();
    
    // Direct redirect for mobile to reduce friction
    if (os === 'ios') {
      handleStoreClick('apple', 'direct_mobile');
      return;
    }
    if (os === 'android') {
      handleStoreClick('google', 'direct_mobile');
      return;
    }

    setShowDownloadSheet(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after HERO section (usually 600-800px)
      setIsStickyVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Intersection Observer for scroll reveal animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Once visible, we can stop observing this element
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleStoreClick = (store: 'apple' | 'google', position: string) => {
    // onCTAClick in App.tsx now handles the redirection safely for all devices
    onCTAClick?.(store === 'apple' ? 'app_store_download' : 'google_play_download', position);
  };



  const handleCTA = (type: string, position: string) => {
    // If it's a general download intent, use the smart handler
    if (type.includes('download') || type.includes('free_plan')) {
      handleDownloadSheet();
      return;
    }
    
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
            alt={t.hero.videoAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/90 to-gray-900 z-10"></div>
        </div>

        <div className="c-container relative z-30 px-6 max-w-4xl mx-auto text-center">
          <h1 className="text-[34px] md:text-7xl font-black mb-4 md:mb-8 leading-[1.1] tracking-tight text-white drop-shadow-sm">
            {t.hero.h1}
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-400 mb-8 md:mb-12 leading-relaxed font-medium mx-auto max-w-2xl fade-in-up">
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

            {/* Desktop Authority Badges */}
            <div className="hidden md:flex items-center gap-4 mt-8 opacity-70 hover:opacity-100 transition-opacity">
               <img 
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1314144000&h=70" 
                  alt={t.hero.appleAlt} 
                  className="h-10 cursor-pointer"
                  onClick={() => handleStoreClick('apple', 'hero_badge')}
               />
               <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt={t.hero.googleAlt} 
                  className="h-10 cursor-pointer"
                  onClick={() => handleStoreClick('google', 'hero_badge')}
               />
            </div>

            <a 
              href="#como-funciona" 
              className="mt-8 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-all animate-bounce"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' });
                onCTAClick?.('scroll_to_how_it_works', 'hero_bottom');
              }}
            >
              <span className="text-xs font-bold uppercase tracking-widest">{t.howItWorks.seeHow}</span>
              <ChevronDown size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* TRUST BAR (Compatible Apps) */}
      <section className="bg-white py-12 border-b border-gray-100 overflow-hidden">
         <div className="c-container">
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
               <div className="flex items-center gap-3">
                  <img src="https://cdn.simpleicons.org/uber/4B5563" alt="Uber" className="h-6 md:h-8" />
                  <span className="font-bold text-gray-400 text-lg">Uber</span>
               </div>
               <div className="flex items-center gap-3">
                  <img src="https://cdn.simpleicons.org/waze/4B5563" alt="Waze" className="h-6 md:h-8" />
                  <span className="font-bold text-gray-400 text-lg">Waze</span>
               </div>
               <div className="flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/spotify/4B5563" alt="Spotify" className="h-6 md:h-8" />
                  <span className="font-bold text-gray-400 text-lg">Spotify</span>
               </div>
               <div className="flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/google/4B5563" alt="Google" className="h-6 md:h-8" />
                  <span className="font-bold text-gray-400 text-lg">Google</span>
               </div>
               <div className="flex items-center gap-2">
                  <img src="https://cdn.simpleicons.org/apple/4B5563" alt="Apple" className="h-6 md:h-8" />
                  <span className="font-bold text-gray-400 text-lg">Apple</span>
               </div>
            </div>
            <div className="mt-8 text-center">
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">{t.howItWorks.compat}</span>
            </div>
         </div>
      </section>

      {/* REDESIGNED HOW IT WORKS (Connected Path) */}
      <section className="py-24 bg-white relative overflow-hidden" id="como-funciona">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>

        <div className="c-container relative z-10">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight relative inline-block">
               {t.howItWorks.title}
               <div className="h-1.5 w-full bg-blue-600 rounded-full mt-2"></div>
            </h2>
            <p className="mt-6 text-gray-500 font-bold uppercase tracking-widest text-xs">{t.howItWorks.slogan}</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Visual Line (Desktop) */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-dashed bg-gradient-to-r from-blue-100 via-blue-500 to-blue-100 hidden md:block -translate-y-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative fade-in-up">
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
          <div className="mt-24 max-w-4xl mx-auto bg-neutral-900 rounded-[40px] p-10 md:p-16 overflow-hidden shadow-2xl relative border border-white/5 text-center fade-in-up">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[90px] -mr-32 -mt-32"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[90px] -ml-32 -mb-32"></div>
             
             <div className="relative z-10 flex flex-col items-center">
                <h3 className="text-4xl md:text-6xl font-black mb-2 text-white tracking-tighter leading-tight" dangerouslySetInnerHTML={{ __html: t.howItWorks.highlight }}>
                </h3>
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
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
               {t.difference.title}
            </h2>
            <p className="mt-4 text-gray-500 font-medium">{t.difference.sub}</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-0 rounded-[48px] overflow-hidden shadow-2xl border border-gray-200 fade-in-up">
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
            <div className="mt-8 bg-white rounded-[40px] p-8 md:p-16 shadow-xl border border-blue-50 relative overflow-hidden group fade-in-up">
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

            <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-[48px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border-[8px] border-neutral-900 group bg-gray-100">
               {!isVideoLoaded ? (
                 <div 
                   className="absolute inset-0 cursor-pointer flex items-center justify-center transition-transform group-hover:scale-105"
                   onClick={() => setIsVideoLoaded(true)}
                 >
                    <img 
                      src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop" 
                      className="w-full h-full object-cover opacity-60"
                      alt={t.hero.videoAlt}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl group-hover:bg-blue-500 transition-colors">
                          <Plus size={40} className="rotate-45" fill="white" />
                       </div>
                    </div>
                    {/* Floating help text */}
                    <div className="absolute bottom-10 inset-x-0 text-center">
                       <span className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs font-black uppercase tracking-widest">{t.audio.demo}</span>
                    </div>
                 </div>
               ) : (
                 <iframe 
                   className="w-full h-full"
                   src="https://www.youtube.com/embed/pTgNlvI6pjU?autoplay=1&mute=0&loop=1&playlist=pTgNlvI6pjU&controls=1&showinfo=1&rel=0" 
                   title="Tuggi App Preview"
                   frameBorder="0"
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                   allowFullScreen
                 ></iframe>
               )}
               
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
                        onClick={() => {
                          setActiveTab(key);
                          if (window.gtag) {
                            window.gtag('event', 'tab_selection', {
                              event_category: 'User Interaction',
                              event_label: key,
                              page_type: 'drivers_landing_c'
                            });
                          }
                        }}
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
            
            <div className="bg-gray-50 rounded-[32px] p-8 md:p-16 shadow-none border border-gray-100 min-h-[400px] fade-in-up">
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
            <h2 className="c-h2 text-center mb-4 fade-in-up">{t.pricing.title}</h2>
            <p className="text-center text-gray-600 mb-16 fade-in-up">{t.pricing.sub}</p>
            
            <div className="grid md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto fade-in-up">
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
         <div className="c-container max-w-3xl fade-in-up">
            <h2 className="c-h2 text-center mb-12">{t.faq.title}</h2>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden divide-y divide-gray-100">
               {t.faq.items.map((item: { q: string; a: string }, idx: number) => (
                  <div key={idx} className="c-accordion-item border-none">
                      <button 
                         className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors group"
                         onClick={() => {
                           const isOpening = activeFaq !== idx;
                           setActiveFaq(isOpening ? idx : null);
                           if (isOpening && window.gtag) {
                             window.gtag('event', 'faq_open', {
                               event_category: 'User Interaction',
                               event_label: item.q,
                               page_type: 'drivers_landing_c'
                             });
                           }
                         }}
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
         <div className="fixed inset-0 z-[10001] flex items-end justify-center sm:items-center p-4 animate-in fade-in duration-200">
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
                  <a 
                    href="https://apps.apple.com/br/app/tuggi-explore-ao-dirigir/id6744379818"
                    onClick={(e) => {
                      e.preventDefault();
                      handleStoreClick('apple', 'modal');
                    }}
                    className="w-full bg-gray-900 text-white hover:bg-black py-5 px-6 rounded-2xl font-black text-lg flex items-center justify-center gap-4 transition-all active:scale-95 shadow-lg"
                  >
                     <Apple className="w-7 h-7" fill="currentColor" />
                     <span>{t.hero.appleLabel}</span>
                  </a>
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.tuggidrive.app"
                    onClick={(e) => {
                      e.preventDefault();
                      handleStoreClick('google', 'modal');
                    }}
                    className="w-full bg-white text-gray-900 border-2 border-gray-100 hover:border-gray-200 py-5 px-6 rounded-2xl font-black text-lg flex items-center justify-center gap-4 transition-all active:scale-95 shadow-sm"
                  >
                     <Smartphone className="w-7 h-7" />
                     <span>{t.hero.androidLabel}</span>
                  </a>
                </div>

               <p className="text-center text-[10px] text-gray-400 mt-8 font-bold uppercase tracking-widest">
                  {t.hero.trustLine}
               </p>
            </div>
         </div>
      )}

      {/* STICKY MOBILE CTA */}
      <div className={`c-sticky-cta md:hidden ${isStickyVisible ? 'visible' : ''}`}>
         <button 
           onClick={handleDownloadSheet}
           className="w-full bg-[#1D1DFF] text-white py-4 rounded-xl font-black text-lg shadow-xl shadow-blue-600/20 active:scale-95 transition-all flex items-center justify-center gap-3"
         >
            {t.hero.cta}
            <ChevronDown size={18} className="-rotate-90" />
         </button>
      </div>

    </div>
  );
};

export default DriversLandingPageC;
