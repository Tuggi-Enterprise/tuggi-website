/**
 * Beta Drivers Landing Page Content
 *
 * Structured for easy internationalization (i18n)
 * Default: PT-BR | Prepared for: IT, EN, ES, FR, DE
 */

export interface BetaDriversContent {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaButton: string;
  };
  valueProp: {
    title: string;
    benefits: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  howItWorks: {
    title: string;
    steps: Array<{
      stepNumber: number;
      title: string;
      description: string;
    }>;
  };
  audioSample: {
    title: string;
    description: string;
    audioLabel: string;
    audioSamples: Array<{
      id: string;
      title: string;
      duration: string;
      url: string | string[];
    }>;
  };
  betaForm: {
    sectionTitle: string;
    agreement: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      whatsappLabel: string;
      whatsappPlaceholder: string;
      checkboxLabel: string;
      submitButton: string;
      submittingButton: string;
    };
    successState: {
      title: string;
      message: string;
    };
    validation: {
      nameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      whatsappRequired: string;
      whatsappInvalid: string;
      checkboxRequired: string;
    };
  };
  legalDisclaimer: string;
}

export const betaDriversContent: Record<'PT' | 'IT' | 'EN' | 'ES' | 'FR' | 'DE', BetaDriversContent> = {
  PT: {
    hero: {
      badge: 'Acesso Exclusivo - Programa Beta',
      title: 'Transforme suas corridas e aumente seus ganhos como Motorista Fundador.',
      subtitle: 'Junte-se ao programa exclusivo do Tuggi. Encante seus passageiros com cultura e histórias locais fascinantes, enquanto você foca na direção.',
      ctaButton: 'Solicitar Acesso Antecipado',
    },
    valueProp: {
      title: 'Por que os motoristas amam o Tuggi',
      benefits: [
        {
          icon: 'Star',
          title: 'Avaliações 5 Estrelas*',
          description: 'Crie um ambiente premium e inesquecível.',
        },
        {
          icon: 'Wallet',
          title: 'Mais Gorjetas*',
          description: 'Passageiros recompensam experiências únicas.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Zero Esforço*',
          description: 'O app trabalha sozinho. Você só precisa dar o play.',
        },
      ],
    },
    howItWorks: {
      title: 'Como Funciona',
      steps: [
        {
          stepNumber: 1,
          title: 'Baixe o App e Crie uma Conta',
          description: 'Disponível para Android e iOS. Crie sua conta de motorista em segundos.',
        },
        {
          stepNumber: 2,
          title: 'Conecte o Áudio',
          description: 'Conecte seu celular ao Bluetooth do carro.',
        },
        {
          stepNumber: 3,
          title: 'Mantenha sua Tela',
          description: 'Abra o Tuggi e volte para o seu Waze, Uber ou outro aplicativo. O Tuggi roda 100% em segundo plano.',
        },
        {
          stepNumber: 4,
          title: 'A Mágica Acontece',
          description: 'Continue ouvindo seu Spotify. Ao passar por um ponto turístico, o Tuggi abaixa a música suavemente e narra a história para o passageiro.',
        },
      ],
    },
    audioSample: {
      title: 'Ouça o que seus passageiros vão ouvir',
      description: 'Exemplos de narrações automáticas de pontos turísticos',
      audioLabel: 'Reproduzir amostra',
      audioSamples: [
        {
          id: 'sample-1',
          title: 'Avenida Paulista - São Paulo',
          duration: '0:47',
          url: [
            'https://tysnkzmljlmmqpbotkxv.supabase.co/storage/v1/object/public/travel-app-audios/directional-audios/front_pt-br_male.mp3',
            'https://tysnkzmljlmmqpbotkxv.supabase.co/storage/v1/object/public/travel-app-audios/audio/2a341ef8-7cc2-47e5-91cc-ffa9317e7268/2a341ef8-7cc2-47e5-91cc-ffa9317e7268-pt-br-male.mp3'
          ],
        },
        {
          id: 'sample-2',
          title: 'Torre de Belém - Lisboa',
          duration: '0:52',
          url: [
            'https://tysnkzmljlmmqpbotkxv.supabase.co/storage/v1/object/public/travel-app-audios/directional-audios/left_pt-pt_male.mp3',
            'https://tysnkzmljlmmqpbotkxv.supabase.co/storage/v1/object/public/travel-app-audios/audio/1b987f08-89be-5e63-af6d-decccee1beb4/1b987f08-89be-5e63-af6d-decccee1beb4-pt-pt-male.mp3'
          ],
        },
      ],
    },
    betaForm: {
      sectionTitle: 'Solicite seu Acesso Beta',
      agreement: 'Estamos validando nossa tecnologia no Brasil, Itália e Portugal.',
      form: {
        nameLabel: 'Nome Completo',
        namePlaceholder: 'João Silva',
        emailLabel: 'E-mail',
        emailPlaceholder: 'seu@email.com',
        whatsappLabel: 'WhatsApp (opcional)',
        whatsappPlaceholder: 'Ex: +55 11 98765-4321',
        checkboxLabel: 'Entendo que esta é uma versão Beta e concordo em fornecer feedback sobre o uso do app.',
        submitButton: 'Quero Ser um Testador Beta',
        submittingButton: 'Enviando...',
      },
      successState: {
        title: 'Obrigado!',
        message: 'Nossa equipe entrará em contato via WhatsApp nas próximas 24 horas.',
      },
      validation: {
        nameRequired: 'Nome completo é obrigatório',
        emailRequired: 'E-mail é obrigatório',
        emailInvalid: 'E-mail inválido',
        whatsappRequired: '',
        whatsappInvalid: 'WhatsApp inválido. Ex: +55 11 98765-4321',
        checkboxRequired: 'Você precisa concordar com os termos para continuar',
      },
    },
    legalDisclaimer: '* Os benefícios descritos são potenciais e podem variar de acordo com o perfil de cada motorista e passageiro. O termo "Zero Esforço" refere-se à narração automática das histórias; a ativação do guia no app é necessária. A Tuggi não garante resultados financeiros específicos.',
  },
  IT: {
    hero: {
      badge: 'Accesso Esclusivo - Programma Beta',
      title: 'Trasforma le tue corse e aumenta i tuoi guadagni come Autista Fondatore.',
      subtitle: 'Unisciti al programma esclusivo di Tuggi. Intrattieni i tuoi passeggeri con cultura e storie locali affascinanti, mentre tu ti concentri sulla guida.',
      ctaButton: 'Richiedi Accesso Anticipato',
    },
    valueProp: {
      title: 'Perché gli autisti amano Tuggi',
      benefits: [
        {
          icon: 'Star',
          title: 'Esperienza 5 Stelle*',
          description: 'Offri un servizio premium che i passeggeri ricordano.',
        },
        {
          icon: 'Wallet',
          title: 'Mance Più Alte*',
          description: 'I turisti premiano generosamente le guide locali.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Zero Distrazioni*',
          description: 'L\'app fa la guida turistica. Tu guidi in sicurezza.',
        },
      ],
    },
    howItWorks: {
      title: 'Come Funziona',
      steps: [
        {
          stepNumber: 1,
          title: 'Scarica l\'App e Crea un Account',
          description: 'Disponibile per Android e iOS. Registrati come autista in pochi secondi.',
        },
        {
          stepNumber: 2,
          title: 'Collega l\'Audio',
          description: 'Collega il tuo smartphone al Bluetooth dell\'auto.',
        },
        {
          stepNumber: 3,
          title: 'Mantieni la Navigazione',
          description: 'Apri Tuggi e torna a Waze o Google Maps. Tuggi lavora in background.',
        },
        {
          stepNumber: 4,
          title: 'La Magia Accade',
          description: 'Passando vicino a un monumento, Tuggi abbassa la tua musica e racconta la storia.',
        },
      ],
    },
    audioSample: {
      title: 'Ascolta cosa sentiranno i tuoi passeggeri',
      description: 'Esempi di narrazione automatica',
      audioLabel: 'Riproduci esempio',
      audioSamples: [
        {
          id: 'sample-1',
          title: 'Ponte di Rialto - Venezia',
          duration: '0:45',
          url: [
            'https://tysnkzmljlmmqpbotkxv.supabase.co/storage/v1/object/public/travel-app-audios/directional-audios/left_it-it_male.mp3',
            'https://tysnkzmljlmmqpbotkxv.supabase.co/storage/v1/object/public/travel-app-audios/audio/7252db62-93fe-5c81-b197-57dd7cae0258/7252db62-93fe-5c81-b197-57dd7cae0258-it-it-male.mp3'
          ],
        },
        {
          id: 'sample-2',
          title: 'Duomo di Milano - Milano',
          duration: '0:50',
          url: [
            'https://tysnkzmljlmmqpbotkxv.supabase.co/storage/v1/object/public/travel-app-audios/directional-audios/right_it-it_male.mp3',
            'https://tysnkzmljlmmqpbotkxv.supabase.co/storage/v1/object/public/travel-app-audios/audio/4bf6d4f6-5496-578f-909a-045a31bdb648/4bf6d4f6-5496-578f-909a-045a31bdb648-it-it-male.mp3'
          ],
        },
      ],
    },
    betaForm: {
      sectionTitle: 'Richiedi Accesso Beta',
      agreement: 'Stiamo validando la tecnologia in Italia, Brasile e Portogallo.',
      form: {
        nameLabel: 'Nome Completo',
        namePlaceholder: 'Mario Rossi',
        emailLabel: 'Email',
        emailPlaceholder: 'tua@email.it',
        whatsappLabel: 'WhatsApp (opzionale)',
        whatsappPlaceholder: 'Es: +39 333 1234567',
        checkboxLabel: 'Capisco che è una versione Beta e accetto di dare feedback.',
        submitButton: 'Diventa Autista Fondatore',
        submittingButton: 'Invio...',
      },
      successState: {
        title: 'Grazie!',
        message: 'Il nostro team ti contatterà su WhatsApp entro 24 ore.',
      },
      validation: {
        nameRequired: 'Nome obbligatorio',
        emailRequired: 'Email obbligatoria',
        emailInvalid: 'Email non valida',
        whatsappRequired: '',
        whatsappInvalid: 'Numero non valido',
        checkboxRequired: 'Devi accettare i termini',
      },
    },
    legalDisclaimer: '* I benefici sono potenziali. "Zero Distrazioni" si riferisce all\'automazione audio. Tuggi non garantisce guadagni specifici.',
  },
  EN: {
    hero: {
      badge: 'Exclusive Access - Beta Program',
      title: 'Turn Miles Into Memories and Boost Your Tips as a Founding Driver.',
      subtitle: 'Join Tuggi\u2019s exclusive program. Wow your passengers with fascinating local stories while you focus on the road.',
      ctaButton: 'Request Early Access',
    },
    valueProp: {
      title: 'Why Drivers Love Tuggi',
      benefits: [
        {
          icon: 'Star',
          title: 'Boost Ratings*',
          description: 'Create a vibe passengers love and remember.',
        },
        {
          icon: 'Wallet',
          title: 'Bigger Tips*',
          description: 'Passengers tip more for unique local experiences.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Set It & Forget It*',
          description: 'App runs in the background. Just drive.',
        },
      ],
    },
    howItWorks: {
      title: 'How It Works',
      steps: [
        {
          stepNumber: 1,
          title: 'Download & Sign Up',
          description: 'Available on Android/iOS. Create your driver account in seconds.',
        },
        {
          stepNumber: 2,
          title: 'Connect Audio',
          description: 'Sync your phone to your car\u2019s Bluetooth.',
        },
        {
          stepNumber: 3,
          title: 'Drive Your Way',
          description: 'Open Tuggi, then switch back to Uber/Lyft/Waze. We run in the background.',
        },
        {
          stepNumber: 4,
          title: 'Magic Happens',
          description: 'Your music fades down automatically when you pass a landmark, and Tuggi tells the story.',
        },
      ],
    },
    audioSample: {
      title: 'Hear What Your Passengers Hear',
      description: 'Examples of automatic tour narration',
      audioLabel: 'Play Sample',
      audioSamples: [
        {
          id: 'sample-1',
          title: 'Walt Disney World Resort',
          duration: '0:45',
          url: [
            'https://tysnkzmljlmmqpbotkxv.supabase.co/storage/v1/object/public/travel-app-audios/directional-audios/front_en-us_male.mp3',
            'https://tysnkzmljlmmqpbotkxv.supabase.co/storage/v1/object/public/travel-app-audios/audio/d8f36604-eb85-403b-97b2-048f4888091f/d8f36604-eb85-403b-97b2-048f4888091f-en-us-male.mp3'
          ],
        },
        {
          id: 'sample-2',
          title: 'The Titanic Trail',
          duration: '0:50',
          url: [
            'https://tysnkzmljlmmqpbotkxv.supabase.co/storage/v1/object/public/travel-app-audios/directional-audios/front_en-gb_male.mp3',
            'https://tysnkzmljlmmqpbotkxv.supabase.co/storage/v1/object/public/travel-app-audios/audio/55b9a73d-36f6-44e7-bbb0-e38d11949e3b/55b9a73d-36f6-44e7-bbb0-e38d11949e3b-en-gb-male.mp3'
          ],
        },
      ],
    },
    betaForm: {
      sectionTitle: 'Apply for Beta Access',
      agreement: 'Validating technology in Brazil, Italy, and Portugal.',
      form: {
        nameLabel: 'Full Name',
        namePlaceholder: 'John Doe',
        emailLabel: 'Email',
        emailPlaceholder: 'you@email.com',
        whatsappLabel: 'WhatsApp (optional)',
        whatsappPlaceholder: 'Ex: +1 555 123 4567',
        checkboxLabel: 'I understand this is a Beta and agree to provide feedback.',
        submitButton: 'Become a Founding Driver',
        submittingButton: 'Sending...',
      },
      successState: {
        title: 'Thanks!',
        message: 'Our team will contact you via WhatsApp within 24 hours.',
      },
      validation: {
        nameRequired: 'Name is required',
        emailRequired: 'Email is required',
        emailInvalid: 'Invalid email',
        whatsappRequired: '',
        whatsappInvalid: 'Invalid number',
        checkboxRequired: 'You must agree to continue',
      },
    },
    legalDisclaimer: '* Benefits described are potential. "Set It & Forget It" refers to automated narration. Tuggi does not guarantee specific financial results.',
  },
  ES: {
    hero: {
      badge: 'Acceso Exclusivo - Programa Beta',
      title: 'Transforma tus Viajes y Aumenta tus Ingresos como Conductor Fundador.',
      subtitle: 'Únete al programa exclusivo de Tuggi. Ofrece una experiencia cultural a tus pasajeros mientras te concentras en conducir.',
      ctaButton: 'Solicitar Acceso Anticipado',
    },
    valueProp: {
      title: 'Por qué los conductores eligen Tuggi',
      benefits: [
        {
          icon: 'Star',
          title: 'Servicio 5 Estrellas*',
          description: 'Diferénciate ofreciendo un servicio VIP.',
        },
        {
          icon: 'Wallet',
          title: 'Más Propinas*',
          description: 'Los turistas valoran las experiencias locales.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Piloto Automático*',
          description: 'Tuggi narra las historias. Tú solo conduces.',
        },
      ],
    },
    howItWorks: {
      title: 'Cómo Funciona',
      steps: [
        {
          stepNumber: 1,
          title: 'Descarga y Regístrate',
          description: 'Disponible en Android e iOS. Crea tu cuenta de conductor al instante.',
        },
        {
          stepNumber: 2,
          title: 'Conecta el Audio',
          description: 'Sincroniza tu móvil con el Bluetooth del coche.',
        },
        {
          stepNumber: 3,
          title: 'Sigue tu Ruta',
          description: 'Abre Tuggi y vuelve a Waze o Uber. La app funciona en segundo plano.',
        },
        {
          stepNumber: 4,
          title: 'La Magia Sucede',
          description: 'Al pasar por un punto de interés, Tuggi baja la música y cuenta la historia.',
        },
      ],
    },
    audioSample: {
      title: 'Escucha lo que oirán tus tus pasajeros',
      description: 'Ejemplos de narración automática',
      audioLabel: 'Reproducir Muestra',
      audioSamples: [
        {
          id: 'sample-1',
          title: 'Basílica de la Sagrada Família',
          duration: '0:45',
          url: [
            'https://tysnkzmljlmmqpbotkxv.supabase.co/storage/v1/object/public/travel-app-audios/directional-audios/right_es-es_male.mp3',
            'https://tysnkzmljlmmqpbotkxv.supabase.co/storage/v1/object/public/travel-app-audios/audio/2201a3c1-64eb-42cc-8e15-a419a75b24ad/2201a3c1-64eb-42cc-8e15-a419a75b24ad-es-es-male.mp3'
          ],
        },
        {
          id: 'sample-2',
          title: 'Playa Mar Bella',
          duration: '0:50',
          url: [
            'https://tysnkzmljlmmqpbotkxv.supabase.co/storage/v1/object/public/travel-app-audios/directional-audios/left_es-es_male.mp3',
            'https://tysnkzmljlmmqpbotkxv.supabase.co/storage/v1/object/public/travel-app-audios/audio/2356d588-a76e-471c-9ca2-8e2b4f361e09/2356d588-a76e-471c-9ca2-8e2b4f361e09-es-es-male.mp3'
          ],
        },
      ],
    },
    betaForm: {
      sectionTitle: 'Solicita Acceso Beta',
      agreement: 'Validando tecnología en Brasil, Italia y Portugal.',
      form: {
        nameLabel: 'Nombre Completo',
        namePlaceholder: 'Juan Pérez',
        emailLabel: 'Email',
        emailPlaceholder: 'tu@email.com',
        whatsappLabel: 'WhatsApp (opcional)',
        whatsappPlaceholder: 'Ej: +34 600 123 456',
        checkboxLabel: 'Entiendo que es una versión Beta y acepto dar feedback.',
        submitButton: 'Ser Conductor Fundador',
        submittingButton: 'Enviando...',
      },
      successState: {
        title: '¡Gracias!',
        message: 'Nuestro equipo te contactará por WhatsApp en 24 horas.',
      },
      validation: {
        nameRequired: 'El nombre es obligatorio',
        emailRequired: 'El email es obligatorio',
        emailInvalid: 'Email inválido',
        whatsappRequired: '',
        whatsappInvalid: 'Número inválido',
        checkboxRequired: 'Debes aceptar los términos',
      },
    },
    legalDisclaimer: '* Los beneficios son potenciales. "Piloto Automático" se refiere a la narración. Tuggi no garantiza ingresos específicos.',
  },
  FR: {
    hero: {
      badge: 'Accès Exclusif - Programme Bêta',
      title: 'Transformez vos courses et augmentez vos pourboires en tant que Chauffeur Fondateur.',
      subtitle: 'Rejoignez le programme exclusif Tuggi. Offrez une expérience culturelle unique à vos passagers tout en gardant les mains sur le volant.',
      ctaButton: 'Demander un Accès Anticipé',
    },
    valueProp: {
      title: 'Pourquoi les chauffeurs aiment Tuggi',
      benefits: [
        {
          icon: 'Star',
          title: 'Service Premium*',
          description: 'Offrez une expérience 5 étoiles inoubliable.',
        },
        {
          icon: 'Wallet',
          title: 'Plus de Pourboires*',
          description: 'Les passagers récompensent l\'originalité.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Zéro Effort*',
          description: 'L\'appli gère la visite. Vous gérez la route.',
        },
      ],
    },
    howItWorks: {
      title: 'Comment ça marche',
      steps: [
        {
          stepNumber: 1,
          title: 'Téléchargez et Inscrivez-vous',
          description: 'Dispo sur Android/iOS. Compte chauffeur créé en quelques secondes.',
        },
        {
          stepNumber: 2,
          title: 'Connectez l\'Audio',
          description: 'Connectez votre téléphone au Bluetooth du véhicule.',
        },
        {
          stepNumber: 3,
          title: 'Roulez comme d\'habitude',
          description: 'Lancez Tuggi et retournez sur Waze ou Uber. Ça tourne en fond.',
        },
        {
          stepNumber: 4,
          title: 'La Magie Opère',
          description: 'À l\'approche d\'un monument, Tuggi baisse la musique et raconte l\'histoire.',
        },
      ],
    },
    audioSample: {
      title: 'Écoutez ce que vos passagers entendront',
      description: 'Exemples de narration automatique',
      audioLabel: 'Lire l\'extrait',
      audioSamples: [
        {
          id: 'sample-1',
          title: 'Torrent-Alto (Suisse)',
          duration: '0:45',
          url: [
            'https://tysnkzmljlmmqpbotkxv.supabase.co/storage/v1/object/public/travel-app-audios/directional-audios/front_fr-fr_male.mp3',
            'https://tysnkzmljlmmqpbotkxv.supabase.co/storage/v1/object/public/travel-app-audios/audio/492fda08-0bf0-5578-9d38-afed0bb6ff19/492fda08-0bf0-5578-9d38-afed0bb6ff19-fr-fr-male.mp3'
          ],
        },
        {
          id: 'sample-2',
          title: 'Castell de Montjuïc (Spain)',
          duration: '0:50',
          url: [
            'https://tysnkzmljlmmqpbotkxv.supabase.co/storage/v1/object/public/travel-app-audios/directional-audios/left_fr-fr_male.mp3',
            'https://tysnkzmljlmmqpbotkxv.supabase.co/storage/v1/object/public/travel-app-audios/audio/0718d64b-1771-4375-872d-30a610837038/0718d64b-1771-4375-872d-30a610837038-fr-fr-male.mp3'
          ],
        },
      ],
    },
    betaForm: {
      sectionTitle: 'Demander l\'Accès Bêta',
      agreement: 'Technologie en validation au Brésil, Italie et Portugal.',
      form: {
        nameLabel: 'Nom Complet',
        namePlaceholder: 'Jean Dupont',
        emailLabel: 'E-mail',
        emailPlaceholder: 'vous@email.com',
        whatsappLabel: 'WhatsApp (optionnel)',
        whatsappPlaceholder: 'Ex: +33 6 12 34 56 78',
        checkboxLabel: 'Je comprends qu\'il s\'agit d\'une Bêta et j\'accepte de donner mon avis.',
        submitButton: 'Devenir Chauffeur Fondateur',
        submittingButton: 'Envoi...',
      },
      successState: {
        title: 'Merci !',
        message: 'Notre équipe vous contactera sur WhatsApp sous 24h.',
      },
      validation: {
        nameRequired: 'Nom requis',
        emailRequired: 'E-mail requis',
        emailInvalid: 'E-mail invalide',
        whatsappRequired: '',
        whatsappInvalid: 'Numéro invalide',
        checkboxRequired: 'Vous devez accepter les conditions',
      },
    },
    legalDisclaimer: '* Bénéfices potentiels. "Zéro Effort" fait référence à l\'automatisation. Tuggi ne garantit pas de revenus spécifiques.',
  },
  DE: {
    hero: {
      badge: 'Exklusiver Zugang - Beta-Programm',
      title: 'Werde Gründer-Fahrer: Verwandle Fahrten in Erlebnisse und maximiere dein Trinkgeld.',
      subtitle: 'Tritt dem exklusiven Tuggi-Programm bei. Begeistere deine Fahrgäste mit lokalen Geschichten, während du dich auf den Verkehr konzentrierst.',
      ctaButton: 'Frühzeitigen Zugang anfordern',
    },
    valueProp: {
      title: 'Warum Fahrer Tuggi lieben',
      benefits: [
        {
          icon: 'Star',
          title: '5-Sterne Service*',
          description: 'Sorge für ein Premium-Erlebnis, das in Erinnerung bleibt.',
        },
        {
          icon: 'Wallet',
          title: 'Mehr Trinkgeld*',
          description: 'Fahrgäste honorieren exzellenten Service.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Kein Aufwand*',
          description: 'Die App ist der Reiseführer. Du fährst einfach.',
        },
      ],
    },
    howItWorks: {
      title: 'So funktioniert\'s',
      steps: [
        {
          stepNumber: 1,
          title: 'App laden & Registrieren',
          description: 'Für Android & iOS. Fahrer-Account in Sekunden erstellt.',
        },
        {
          stepNumber: 2,
          title: 'Audio Verbinden',
          description: 'Verbinde dein Handy mit dem Auto-Bluetooth.',
        },
        {
          stepNumber: 3,
          title: 'Navigation Behalten',
          description: 'Öffne Tuggi und wechsle zurück zu Google Maps oder Uber. Tuggi läuft im Hintergrund.',
        },
        {
          stepNumber: 4,
          title: 'Die Magie Passiert',
          description: 'Bei Sehenswürdigkeiten blendet Tuggi die Musik aus und erzählt die Geschichte.',
        },
      ],
    },
    audioSample: {
      title: 'Hörbeispiel für Fahrgäste',
      description: 'Automatische Narration von Sehenswürdigkeiten',
      audioLabel: 'Beispiel abspielen',
      audioSamples: [
        {
          id: 'sample-1',
          title: 'Fontana delle Sirene',
          duration: '0:45',
          url: [
            'https://tysnkzmljlmmqpbotkxv.supabase.co/storage/v1/object/public/travel-app-audios/directional-audios/right_de-de_male.mp3',
            'https://tysnkzmljlmmqpbotkxv.supabase.co/storage/v1/object/public/travel-app-audios/audio/43351ebc-325f-5ad1-9064-60a97a95bc7e/43351ebc-325f-5ad1-9064-60a97a95bc7e-de-de-male.mp3'
          ],
        },
        {
          id: 'sample-2',
          title: "Chiesa di San Francesco d'Assisi",
          duration: '0:50',
          url: [
            'https://tysnkzmljlmmqpbotkxv.supabase.co/storage/v1/object/public/travel-app-audios/directional-audios/front_de-de_male.mp3',
            'https://tysnkzmljlmmqpbotkxv.supabase.co/storage/v1/object/public/travel-app-audios/audio/092409e2-4617-571e-b235-e2ea03a55193/092409e2-4617-571e-b235-e2ea03a55193-de-de-male.mp3'
          ],
        },
      ],
    },
    betaForm: {
      sectionTitle: 'Beta-Zugang Beantragen',
      agreement: 'Validierung der Technologie in Brasilien, Italien und Portugal.',
      form: {
        nameLabel: 'Vollständiger Name',
        namePlaceholder: 'Max Mustermann',
        emailLabel: 'E-Mail',
        emailPlaceholder: 'du@email.de',
        whatsappLabel: 'WhatsApp (optional)',
        whatsappPlaceholder: 'Bsp: +49 170 1234567',
        checkboxLabel: 'Ich verstehe, dass dies eine Beta ist und stimme zu, Feedback zu geben.',
        submitButton: 'Werde Gründer-Fahrer',
        submittingButton: 'Wird gesendet...',
      },
      successState: {
        title: 'Danke!',
        message: 'Unser Team kontaktiert dich innerhalb von 24h via WhatsApp.',
      },
      validation: {
        nameRequired: 'Name ist erforderlich',
        emailRequired: 'E-Mail ist erforderlich',
        emailInvalid: 'Ungültige E-Mail',
        whatsappRequired: '',
        whatsappInvalid: 'Ungültige Nummer',
        checkboxRequired: 'Du musst den Bedingungen zustimmen',
      },
    },
    legalDisclaimer: '* Vorteile sind potenziell. "Kein Aufwand" bezieht sich auf die automatische Narration. Tuggi garantiert keine spezifischen Einnahmen.',
  },
};

export default betaDriversContent;
