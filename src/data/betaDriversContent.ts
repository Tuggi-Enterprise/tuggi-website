/**
 * Beta Drivers Landing Page Content
 *
 * Structured for easy internationalization (i18n)
 * Default: PT-BR | Prepared for: IT
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

export const betaDriversContent: Record<'PT' | 'IT', BetaDriversContent> = {
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
          title: 'Município de Bragança Paulista',
          duration: '0:52',
          url: [
            'https://tysnkzmljlmmqpbotkxv.supabase.co/storage/v1/object/public/travel-app-audios/directional-audios/left_pt-br_male.mp3',
            'https://tysnkzmljlmmqpbotkxv.supabase.co/storage/v1/object/public/travel-app-audios/audio/50cd5835-70db-41be-9084-3adcae63c15e/50cd5835-70db-41be-9084-3adcae63c15e-pt-br-male.mp3'
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
      badge: 'Invito Esclusivo - Programma Ambasciatori Beta',
      title: 'Diventa un Autista Ambasciatore: Trasforma le tue corse in esperienze culturali (e aumenta i tuoi guadagni).',
      subtitle: 'Tuggi intrattiene i tuoi passeggeri con storie locali in tempo reale. Testando la nostra app, diventi un ambasciatore della tua città e ci aiuti a plasmare il futuro del turismo intelligente.',
      ctaButton: 'Voglio Essere un Ambasciatore Beta',
    },
    valueProp: {
      title: 'Perché gli autisti amano Tuggi',
      benefits: [
        {
          icon: 'Star',
          title: 'Valutazioni 5 Stelle*',
          description: 'Crea un\'ambiente premium e indimenticabile.',
        },
        {
          icon: 'Wallet',
          title: 'Più Mance*',
          description: 'I passeggeri premiano le esperienze uniche.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Zero Sforzo*',
          description: 'L\'app funziona da sola. Non devi dire nulla (basta premere play).',
        },
      ],
    },
    howItWorks: {
      title: 'Come Funziona',
      steps: [
        {
          stepNumber: 1,
          title: 'Scarica l\'App e Crea un Account',
          description: 'Disponibile per Android e iOS. Crea il tuo account autista in pochi secondi.',
        },
        {
          stepNumber: 2,
          title: 'Collega l\'Audio',
          description: 'Collega il tuo telefono al Bluetooth dell\'auto.',
        },
        {
          stepNumber: 3,
          title: 'Mantieni il Tuo Schermo',
          description: 'Apri Tuggi e torna a Waze, Uber o altre app. Tuggi funziona 100% in background.',
        },
        {
          stepNumber: 4,
          title: 'La Magia Accade',
          description: 'Continua ad ascoltare Spotify. Passando vicino a un punto di interesse, Tuggi abbassa la musica dolcemente e racconta la storia al passeggero.',
        },
      ],
    },
    audioSample: {
      title: 'Ascolta cosa sentiranno i tuoi passeggeri',
      description: 'Esempi di narrazioni automatiche di luoghi di interesse',
      audioLabel: 'Riproduci campione',
      audioSamples: [
        {
          id: 'sample-1',
          title: 'Colosseo - Roma',
          duration: '0:45',
          url: '/audio/samples/colosseo.mp3', // Placeholder - replace with actual audio URL
        },
        {
          id: 'sample-2',
          title: 'Duomo di Milano - Milano',
          duration: '0:50',
          url: '/audio/samples/duomo.mp3', // Placeholder - replace with actual audio URL
        },
      ],
    },
    betaForm: {
      sectionTitle: 'Richiedi il Tuo Accesso Beta',
      agreement: 'Stiamo validando la nostra tecnologia in Brasile, Italia e Portogallo.',
      form: {
        nameLabel: 'Nome Completo',
        namePlaceholder: 'Mario Rossi',
        emailLabel: 'Email',
        emailPlaceholder: 'tua@email.it',
        whatsappLabel: 'WhatsApp (opzionale)',
        whatsappPlaceholder: 'Es: +39 012 345 6789',
        checkboxLabel: 'Capisco che questa è una versione Beta e accetto di fornire feedback sull\'uso dell\'app.',
        submitButton: 'Voglio Essere un Tester Beta',
        submittingButton: 'Invio in corso...',
      },
      successState: {
        title: 'Grazie!',
        message: 'Il nostro team ti contatterà via WhatsApp entro 24 ore.',
      },
      validation: {
        nameRequired: 'Il nome completo è obbligatorio',
        emailRequired: 'L\'email è obbligatoria',
        emailInvalid: 'Email non valida',
        whatsappRequired: '',
        whatsappInvalid: 'WhatsApp non valido. Es: +39 012 345 6789',
        checkboxRequired: 'Devi accettare i termini per continuare',
      },
    },
    legalDisclaimer: '* I benefici descritti sono potenziali e possono variare. "Zero Sforzo" si riferisce all\'automazione della narrazione; è necessaria l\'attivazione manuale nell\'app. Tuggi non garantisce risultati finanziari specifici.',
  },
};

export default betaDriversContent;
