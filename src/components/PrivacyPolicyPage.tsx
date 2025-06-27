import React from 'react';
import { Shield, Eye, Lock, Users, Globe, FileText, CheckCircle, AlertTriangle, Mail, Phone, Clock } from 'lucide-react';

interface PrivacyPolicyPageProps {
  currentLanguage?: string;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ currentLanguage = 'EN' }) => {
  // Get localized content based on current language
  const getContent = () => {
    const content: Record<string, any> = {
      EN: {
        title: 'Privacy Policy',
        lastUpdated: 'Last updated: January 15, 2024',
        effectiveDate: 'Effective date: January 15, 2024',
        introduction: {
          title: 'Introduction',
          content: `At Tuggi Technologies ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Tuggi Drive navigation audio app, visit our website, or engage with our B2B tourism technology services.

This policy applies to all users of our services, including transportation companies, professional drivers, passengers, and website visitors. We comply with applicable data protection laws, including the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and other relevant privacy regulations.`
        },
        dataCollection: {
          title: 'Information We Collect',
          subtitle: 'We collect information in several ways to provide and improve our services:',
          categories: [
            {
              title: 'Personal Information',
              icon: Users,
              items: [
                'Contact information (name, email address, phone number)',
                'Company information (business name, industry, fleet size)',
                'Account credentials and profile information',
                'Communication preferences and language settings',
                'Professional role and job title'
              ]
            },
            {
              title: 'Technical Information',
              icon: Globe,
              items: [
                'Device information (device type, operating system, browser)',
                'IP address and general location data',
                'App usage analytics and performance metrics',
                'Log files and error reports',
                'Cookie and tracking technology data'
              ]
            },
            {
              title: 'Location Data',
              icon: Eye,
              items: [
                'GPS coordinates for cultural storytelling features',
                'Route information for navigation integration',
                'Points of interest and landmark data',
                'General geographic region for content localization',
                'Travel patterns for service optimization (anonymized)'
              ]
            },
            {
              title: 'Business Information',
              icon: FileText,
              items: [
                'Fleet management data and driver assignments',
                'Service usage statistics and performance metrics',
                'Customer feedback and satisfaction ratings',
                'Billing and payment information',
                'Integration data with third-party navigation apps'
              ]
            }
          ]
        },
        dataUse: {
          title: 'How We Use Your Information',
          subtitle: 'We use collected information for legitimate business purposes:',
          purposes: [
            {
              title: 'Service Delivery',
              description: 'Provide AI-powered cultural storytelling, navigation integration, and fleet management features'
            },
            {
              title: 'Personalization',
              description: 'Customize content based on language preferences, location, and user interests'
            },
            {
              title: 'Business Operations',
              description: 'Process transactions, manage accounts, provide customer support, and maintain service quality'
            },
            {
              title: 'Analytics & Improvement',
              description: 'Analyze usage patterns, improve our technology, and develop new features'
            },
            {
              title: 'Communication',
              description: 'Send service updates, marketing communications (with consent), and important notices'
            },
            {
              title: 'Legal Compliance',
              description: 'Comply with applicable laws, regulations, and legal processes'
            }
          ]
        },
        dataSharing: {
          title: 'Information Sharing and Disclosure',
          subtitle: 'We may share your information in the following circumstances:',
          scenarios: [
            {
              title: 'Service Providers',
              description: 'Third-party vendors who help us operate our services (cloud hosting, analytics, payment processing)',
              safeguards: 'All service providers are contractually bound to protect your data and use it only for specified purposes.'
            },
            {
              title: 'Business Partners',
              description: 'Navigation app providers (Google Maps, Waze) for integration purposes',
              safeguards: 'Data sharing is limited to what\'s necessary for service functionality and subject to partner privacy policies.'
            },
            {
              title: 'Legal Requirements',
              description: 'When required by law, court order, or to protect our rights and safety',
              safeguards: 'We will notify you of legal requests unless prohibited by law or court order.'
            },
            {
              title: 'Business Transfers',
              description: 'In connection with mergers, acquisitions, or asset sales',
              safeguards: 'Any acquiring entity will be bound by this privacy policy or provide equivalent protection.'
            }
          ]
        },
        userRights: {
          title: 'Your Privacy Rights',
          subtitle: 'You have the following rights regarding your personal information:',
          rights: [
            {
              title: 'Access',
              description: 'Request a copy of the personal information we hold about you',
              icon: Eye
            },
            {
              title: 'Rectification',
              description: 'Request correction of inaccurate or incomplete information',
              icon: FileText
            },
            {
              title: 'Erasure',
              description: 'Request deletion of your personal information (subject to legal obligations)',
              icon: AlertTriangle
            },
            {
              title: 'Portability',
              description: 'Request transfer of your data to another service provider',
              icon: Globe
            },
            {
              title: 'Restriction',
              description: 'Request limitation of processing in certain circumstances',
              icon: Lock
            },
            {
              title: 'Objection',
              description: 'Object to processing based on legitimate interests or for marketing',
              icon: Shield
            }
          ]
        },
        dataSecurity: {
          title: 'Data Security',
          content: `We implement industry-standard security measures to protect your information:

• **Encryption**: All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption
• **Access Controls**: Strict access controls and authentication requirements for our systems
• **Regular Audits**: Regular security assessments and penetration testing
• **Compliance**: SOC 2 Type II, ISO 27001, and other security certifications
• **Incident Response**: Comprehensive incident response procedures and breach notification protocols

While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but will notify you of any material breaches as required by law.`
        },
        dataRetention: {
          title: 'Data Retention',
          content: `We retain personal information only as long as necessary for the purposes outlined in this policy:

• **Account Information**: Retained while your account is active and for 3 years after closure
• **Location Data**: Processed in real-time and not stored beyond 30 days unless required for service functionality
• **Analytics Data**: Aggregated and anonymized data may be retained indefinitely for business insights
• **Legal Requirements**: Some data may be retained longer to comply with legal obligations
• **Marketing Data**: Retained until you withdraw consent or for 2 years of inactivity

You can request deletion of your data at any time, subject to legal and contractual obligations.`
        },
        internationalTransfers: {
          title: 'International Data Transfers',
          content: `As a global service, we may transfer your information to countries outside your residence:

• **Adequacy Decisions**: We prioritize transfers to countries with adequate data protection laws
• **Standard Contractual Clauses**: We use EU-approved Standard Contractual Clauses for transfers to countries without adequacy decisions
• **Additional Safeguards**: Technical and organizational measures to ensure data protection during transfers
• **US Transfers**: For transfers to the United States, we comply with applicable frameworks and regulations

We ensure all international transfers meet applicable data protection requirements.`
        },
        thirdPartyServices: {
          title: 'Third-Party Services',
          content: `Our services integrate with third-party platforms:

• **Navigation Apps**: Google Maps, Waze, Apple Maps for route integration
• **Analytics**: Google Analytics for website and app usage analysis
• **Cloud Services**: AWS, Google Cloud for hosting and data processing
• **Payment Processing**: Stripe for secure payment processing
• **Communication**: Email and SMS service providers for notifications

Each third-party service has its own privacy policy. We encourage you to review these policies and only share information you're comfortable with.`
        },
        contact: {
          title: 'Contact Information',
          content: `For privacy-related questions, requests, or concerns, contact us:

**Data Protection Officer**
Email: privacy@tuggi.com
Phone: +1 (555) 123-4567

**Mailing Address:**
Tuggi Technologies
Privacy Department
123 Innovation Drive
San Francisco, CA 94105
United States

**EU Representative:**
For EU residents: eu-privacy@tuggi.com

We will respond to your privacy requests within 30 days.`
        },
        changes: {
          title: 'Changes to This Policy',
          content: `We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. When we make changes:

• We will post the updated policy with a new "Last Updated" date
• For material changes, we will notify you via email or prominent website notice
• We will provide 30 days' notice before material changes take effect
• Previous versions will be available upon request

Your continued use of our services after policy changes constitutes acceptance of the updated terms.`
        }
      },
      PT: {
        title: 'Política de Privacidade',
        lastUpdated: 'Última atualização: 15 de janeiro de 2024',
        effectiveDate: 'Data de vigência: 15 de janeiro de 2024',
        introduction: {
          title: 'Introdução',
          content: `Na Tuggi Technologies ("nós", "nosso" ou "nossa"), estamos comprometidos em proteger sua privacidade e garantir a segurança de suas informações pessoais. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você usa nosso aplicativo de áudio de navegação Tuggi Drive, visita nosso site ou se envolve com nossos serviços de tecnologia de turismo B2B.

Esta política se aplica a todos os usuários de nossos serviços, incluindo empresas de transporte, motoristas profissionais, passageiros e visitantes do site. Cumprimos as leis de proteção de dados aplicáveis, incluindo o Regulamento Geral de Proteção de Dados (GDPR), Lei de Privacidade do Consumidor da Califórnia (CCPA) e outras regulamentações de privacidade relevantes.`
        },
        dataCollection: {
          title: 'Informações que Coletamos',
          subtitle: 'Coletamos informações de várias maneiras para fornecer e melhorar nossos serviços:',
          categories: [
            {
              title: 'Informações Pessoais',
              icon: Users,
              items: [
                'Informações de contato (nome, endereço de email, número de telefone)',
                'Informações da empresa (nome comercial, setor, tamanho da frota)',
                'Credenciais de conta e informações de perfil',
                'Preferências de comunicação e configurações de idioma',
                'Função profissional e cargo'
              ]
            },
            {
              title: 'Informações Técnicas',
              icon: Globe,
              items: [
                'Informações do dispositivo (tipo de dispositivo, sistema operacional, navegador)',
                'Endereço IP e dados gerais de localização',
                'Análises de uso do aplicativo e métricas de desempenho',
                'Arquivos de log e relatórios de erro',
                'Dados de cookies e tecnologia de rastreamento'
              ]
            },
            {
              title: 'Dados de Localização',
              icon: Eye,
              items: [
                'Coordenadas GPS para recursos de narrativa cultural',
                'Informações de rota para integração de navegação',
                'Pontos de interesse e dados de marcos',
                'Região geográfica geral para localização de conteúdo',
                'Padrões de viagem para otimização de serviços (anonimizados)'
              ]
            },
            {
              title: 'Informações Comerciais',
              icon: FileText,
              items: [
                'Dados de gestão de frota e atribuições de motoristas',
                'Estatísticas de uso de serviços e métricas de desempenho',
                'Feedback do cliente e avaliações de satisfação',
                'Informações de faturamento e pagamento',
                'Dados de integração com aplicativos de navegação de terceiros'
              ]
            }
          ]
        },
        dataUse: {
          title: 'Como Usamos Suas Informações',
          subtitle: 'Usamos as informações coletadas para fins comerciais legítimos:',
          purposes: [
            {
              title: 'Entrega de Serviços',
              description: 'Fornecer narrativa cultural com IA, integração de navegação e recursos de gestão de frota'
            },
            {
              title: 'Personalização',
              description: 'Personalizar conteúdo com base em preferências de idioma, localização e interesses do usuário'
            },
            {
              title: 'Operações Comerciais',
              description: 'Processar transações, gerenciar contas, fornecer suporte ao cliente e manter qualidade do serviço'
            },
            {
              title: 'Análises e Melhorias',
              description: 'Analisar padrões de uso, melhorar nossa tecnologia e desenvolver novos recursos'
            },
            {
              title: 'Comunicação',
              description: 'Enviar atualizações de serviço, comunicações de marketing (com consentimento) e avisos importantes'
            },
            {
              title: 'Conformidade Legal',
              description: 'Cumprir leis aplicáveis, regulamentações e processos legais'
            }
          ]
        },
        dataSharing: {
          title: 'Compartilhamento e Divulgação de Informações',
          subtitle: 'Podemos compartilhar suas informações nas seguintes circunstâncias:',
          scenarios: [
            {
              title: 'Provedores de Serviços',
              description: 'Fornecedores terceirizados que nos ajudam a operar nossos serviços (hospedagem em nuvem, análises, processamento de pagamentos)',
              safeguards: 'Todos os provedores de serviços são contratualmente obrigados a proteger seus dados e usá-los apenas para fins especificados.'
            },
            {
              title: 'Parceiros Comerciais',
              description: 'Provedores de aplicativos de navegação (Google Maps, Waze) para fins de integração',
              safeguards: 'O compartilhamento de dados é limitado ao necessário para funcionalidade do serviço e sujeito às políticas de privacidade dos parceiros.'
            },
            {
              title: 'Requisitos Legais',
              description: 'Quando exigido por lei, ordem judicial ou para proteger nossos direitos e segurança',
              safeguards: 'Notificaremos você sobre solicitações legais, a menos que proibido por lei ou ordem judicial.'
            },
            {
              title: 'Transferências Comerciais',
              description: 'Em conexão com fusões, aquisições ou vendas de ativos',
              safeguards: 'Qualquer entidade adquirente será vinculada por esta política de privacidade ou fornecerá proteção equivalente.'
            }
          ]
        },
        userRights: {
          title: 'Seus Direitos de Privacidade',
          subtitle: 'Você tem os seguintes direitos em relação às suas informações pessoais:',
          rights: [
            {
              title: 'Acesso',
              description: 'Solicitar uma cópia das informações pessoais que mantemos sobre você',
              icon: Eye
            },
            {
              title: 'Retificação',
              description: 'Solicitar correção de informações imprecisas ou incompletas',
              icon: FileText
            },
            {
              title: 'Apagamento',
              description: 'Solicitar exclusão de suas informações pessoais (sujeito a obrigações legais)',
              icon: AlertTriangle
            },
            {
              title: 'Portabilidade',
              description: 'Solicitar transferência de seus dados para outro provedor de serviços',
              icon: Globe
            },
            {
              title: 'Restrição',
              description: 'Solicitar limitação de processamento em certas circunstâncias',
              icon: Lock
            },
            {
              title: 'Objeção',
              description: 'Objetar ao processamento baseado em interesses legítimos ou para marketing',
              icon: Shield
            }
          ]
        },
        dataSecurity: {
          title: 'Segurança de Dados',
          content: `Implementamos medidas de segurança padrão da indústria para proteger suas informações:

• **Criptografia**: Todos os dados são criptografados em trânsito usando TLS 1.3 e em repouso usando criptografia AES-256
• **Controles de Acesso**: Controles de acesso rigorosos e requisitos de autenticação para nossos sistemas
• **Auditorias Regulares**: Avaliações de segurança regulares e testes de penetração
• **Conformidade**: SOC 2 Tipo II, ISO 27001 e outras certificações de segurança
• **Resposta a Incidentes**: Procedimentos abrangentes de resposta a incidentes e protocolos de notificação de violação

Embora nos esforcemos para proteger suas informações, nenhum método de transmissão pela internet ou armazenamento eletrônico é 100% seguro. Não podemos garantir segurança absoluta, mas notificaremos você sobre qualquer violação material conforme exigido por lei.`
        },
        dataRetention: {
          title: 'Retenção de Dados',
          content: `Retemos informações pessoais apenas pelo tempo necessário para os fins descritos nesta política:

• **Informações da Conta**: Retidas enquanto sua conta estiver ativa e por 3 anos após o fechamento
• **Dados de Localização**: Processados em tempo real e não armazenados além de 30 dias, a menos que necessário para funcionalidade do serviço
• **Dados de Análise**: Dados agregados e anonimizados podem ser retidos indefinidamente para insights comerciais
• **Requisitos Legais**: Alguns dados podem ser retidos por mais tempo para cumprir obrigações legais
• **Dados de Marketing**: Retidos até você retirar o consentimento ou por 2 anos de inatividade

Você pode solicitar a exclusão de seus dados a qualquer momento, sujeito a obrigações legais e contratuais.`
        },
        internationalTransfers: {
          title: 'Transferências Internacionais de Dados',
          content: `Como um serviço global, podemos transferir suas informações para países fora de sua residência:

• **Decisões de Adequação**: Priorizamos transferências para países com leis adequadas de proteção de dados
• **Cláusulas Contratuais Padrão**: Usamos Cláusulas Contratuais Padrão aprovadas pela UE para transferências para países sem decisões de adequação
• **Salvaguardas Adicionais**: Medidas técnicas e organizacionais para garantir proteção de dados durante transferências
• **Transferências para os EUA**: Para transferências para os Estados Unidos, cumprimos estruturas e regulamentações aplicáveis

Garantimos que todas as transferências internacionais atendam aos requisitos de proteção de dados aplicáveis.`
        },
        thirdPartyServices: {
          title: 'Serviços de Terceiros',
          content: `Nossos serviços se integram com plataformas de terceiros:

• **Aplicativos de Navegação**: Google Maps, Waze, Apple Maps para integração de rotas
• **Análises**: Google Analytics para análise de uso do site e aplicativo
• **Serviços em Nuvem**: AWS, Google Cloud para hospedagem e processamento de dados
• **Processamento de Pagamentos**: Stripe para processamento seguro de pagamentos
• **Comunicação**: Provedores de email e SMS para notificações

Cada serviço de terceiros tem sua própria política de privacidade. Encorajamos você a revisar essas políticas e compartilhar apenas informações com as quais se sinta confortável.`
        },
        contact: {
          title: 'Informações de Contato',
          content: `Para perguntas, solicitações ou preocupações relacionadas à privacidade, entre em contato conosco:

**Encarregado de Proteção de Dados**
Email: privacy@tuggi.com
Telefone: +1 (555) 123-4567

**Endereço para Correspondência:**
Tuggi Technologies
Departamento de Privacidade
123 Innovation Drive
San Francisco, CA 94105
Estados Unidos

**Representante na UE:**
Para residentes da UE: eu-privacy@tuggi.com

Responderemos às suas solicitações de privacidade dentro de 30 dias.`
        },
        changes: {
          title: 'Alterações nesta Política',
          content: `Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas ou leis aplicáveis. Quando fazemos alterações:

• Publicaremos a política atualizada em nosso site com uma nova data de "Última Atualização"
• Para mudanças materiais, notificaremos você via email ou aviso proeminente no site
• Forneceremos 30 dias de aviso antes que mudanças materiais entrem em vigor
• Versões anteriores estarão disponíveis mediante solicitação

Seu uso continuado de nossos serviços após mudanças na política constitui aceitação dos termos atualizados.`
        }
      },
      ES: {
        title: 'Política de Privacidad',
        lastUpdated: 'Última actualización: 15 de enero de 2024',
        effectiveDate: 'Fecha de vigencia: 15 de enero de 2024',
        introduction: {
          title: 'Introducción',
          content: `En Tuggi Technologies ("nosotros", "nuestro" o "nuestra"), estamos comprometidos a proteger su privacidad y garantizar la seguridad de su información personal. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información cuando usa nuestra aplicación de audio de navegación Tuggi Drive, visita nuestro sitio web o se involucra con nuestros servicios de tecnología de turismo B2B.

Esta política se aplica a todos los usuarios de nuestros servicios, incluidas empresas de transporte, conductores profesionales, pasajeros y visitantes del sitio web. Cumplimos con las leyes de protección de datos aplicables, incluido el Reglamento General de Protección de Datos (GDPR), Ley de Privacidad del Consumidor de California (CCPA) y otras regulaciones de privacidad relevantes.`
        },
        dataCollection: {
          title: 'Información que Recopilamos',
          subtitle: 'Recopilamos información de varias maneras para proporcionar y mejorar nuestros servicios:',
          categories: [
            {
              title: 'Información Personal',
              icon: Users,
              items: [
                'Información de contacto (nombre, dirección de correo electrónico, número de teléfono)',
                'Información de la empresa (nombre comercial, industria, tamaño de flota)',
                'Credenciales de cuenta e información de perfil',
                'Preferencias de comunicación y configuraciones de idioma',
                'Función profesional y título del trabajo'
              ]
            },
            {
              title: 'Información Técnica',
              icon: Globe,
              items: [
                'Información del dispositivo (tipo de dispositivo, sistema operativo, navegador)',
                'Dirección IP y datos generales de ubicación',
                'Análisis de uso de la aplicación y métricas de rendimiento',
                'Archivos de registro e informes de errores',
                'Datos de cookies y tecnología de seguimiento'
              ]
            },
            {
              title: 'Datos de Ubicación',
              icon: Eye,
              items: [
                'Coordenadas GPS para características de narración cultural',
                'Información de ruta para integración de navegación',
                'Puntos de interés y datos de monumentos',
                'Región geográfica general para localización de contenido',
                'Patrones de viaje para optimización de servicios (anonimizados)'
              ]
            },
            {
              title: 'Información Comercial',
              icon: FileText,
              items: [
                'Datos de gestión de flotas y asignaciones de conductores',
                'Estadísticas de uso de servicios y métricas de rendimiento',
                'Comentarios de clientes y calificaciones de satisfacción',
                'Información de facturación y pago',
                'Datos de integración con aplicaciones de navegación de terceros'
              ]
            }
          ]
        },
        dataUse: {
          title: 'Cómo Usamos Su Información',
          subtitle: 'Usamos la información recopilada para fines comerciales legítimos:',
          purposes: [
            {
              title: 'Entrega de Servicios',
              description: 'Proporcionar narración cultural con IA, integración de navegación y características de gestión de flotas'
            },
            {
              title: 'Personalización',
              description: 'Personalizar contenido basado en preferencias de idioma, ubicación e intereses del usuario'
            },
            {
              title: 'Operaciones Comerciales',
              description: 'Procesar transacciones, gestionar cuentas, proporcionar soporte al cliente y mantener calidad del servicio'
            },
            {
              title: 'Análisis y Mejoras',
              description: 'Analizar patrones de uso, mejorar nuestra tecnología y desarrollar nuevas características'
            },
            {
              title: 'Comunicación',
              description: 'Enviar actualizaciones de servicio, comunicaciones de marketing (con consentimiento) y avisos importantes'
            },
            {
              title: 'Cumplimiento Legal',
              description: 'Cumplir con leyes aplicables, regulaciones y procesos legales'
            }
          ]
        },
        dataSharing: {
          title: 'Compartir y Divulgación de Información',
          subtitle: 'Podemos compartir su información en las siguientes circunstancias:',
          scenarios: [
            {
              title: 'Proveedores de Servicios',
              description: 'Proveedores terceros que nos ayudan a operar nuestros servicios (alojamiento en la nube, análisis, procesamiento de pagos)',
              safeguards: 'Todos los proveedores de servicios están contractualmente obligados a proteger sus datos y usarlos solo para fines especificados.'
            },
            {
              title: 'Socios Comerciales',
              description: 'Proveedores de aplicaciones de navegación (Google Maps, Waze) para fines de integración',
              safeguards: 'El intercambio de datos se limita a lo necesario para la funcionalidad del servicio y está sujeto a las políticas de privacidad de los socios.'
            },
            {
              title: 'Requisitos Legales',
              description: 'Cuando sea requerido por ley, orden judicial o para proteger nuestros derechos y seguridad',
              safeguards: 'Le notificaremos sobre solicitudes legales a menos que esté prohibido por ley u orden judicial.'
            },
            {
              title: 'Transferencias Comerciales',
              description: 'En conexión con fusiones, adquisiciones o ventas de activos',
              safeguards: 'Cualquier entidad adquirente estará vinculada por esta política de privacidad o proporcionará protección equivalente.'
            }
          ]
        },
        userRights: {
          title: 'Sus Derechos de Privacidad',
          subtitle: 'Tiene los siguientes derechos con respecto a su información personal:',
          rights: [
            {
              title: 'Acceso',
              description: 'Solicitar una copia de la información personal que tenemos sobre usted',
              icon: Eye
            },
            {
              title: 'Rectificación',
              description: 'Solicitar corrección de información inexacta o incompleta',
              icon: FileText
            },
            {
              title: 'Borrado',
              description: 'Solicitar eliminación de su información personal (sujeto a obligaciones legales)',
              icon: AlertTriangle
            },
            {
              title: 'Portabilidad',
              description: 'Solicitar transferencia de sus datos a otro proveedor de servicios',
              icon: Globe
            },
            {
              title: 'Restricción',
              description: 'Solicitar limitación de procesamiento en ciertas circunstancias',
              icon: Lock
            },
            {
              title: 'Objeción',
              description: 'Objetar al procesamiento basado en intereses legítimos o para marketing',
              icon: Shield
            }
          ]
        },
        dataSecurity: {
          title: 'Seguridad de Datos',
          content: `Implementamos medidas de seguridad estándar de la industria para proteger su información:

• **Cifrado**: Todos los datos están cifrados en tránsito usando TLS 1.3 y en reposo usando cifrado AES-256
• **Controles de Acceso**: Controles de acceso estrictos y requisitos de autenticación para nuestros sistemas
• **Auditorías Regulares**: Evaluaciones de seguridad regulares y pruebas de penetración
• **Cumplimiento**: SOC 2 Tipo II, ISO 27001 y otras certificaciones de seguridad
• **Respuesta a Incidentes**: Procedimientos integrales de respuesta a incidentes y protocolos de notificación de violaciones

Aunque nos esforzamos por proteger su información, ningún método de transmisión por internet o almacenamiento electrónico es 100% seguro. No podemos garantizar seguridad absoluta, pero le notificaremos sobre cualquier violación material según lo requiera la ley.`
        },
        dataRetention: {
          title: 'Retención de Datos',
          content: `Retenemos información personal solo el tiempo necesario para los fines descritos en esta política:

• **Información de Cuenta**: Retenida mientras su cuenta esté activa y por 3 años después del cierre
• **Datos de Ubicación**: Procesados en tiempo real y no almacenados más de 30 días a menos que sea necesario para funcionalidad del servicio
• **Datos de Análisis**: Datos agregados y anonimizados pueden retenerse indefinidamente para insights comerciales
• **Requisitos Legales**: Algunos datos pueden retenerse por más tiempo para cumplir obligaciones legales
• **Datos de Marketing**: Retenidos hasta que retire el consentimiento o por 2 años de inactividad

Puede solicitar la eliminación de sus datos en cualquier momento, sujeto a obligaciones legales y contractuales.`
        },
        internationalTransfers: {
          title: 'Transferencias Internacionales de Datos',
          content: `Como servicio global, podemos transferir su información a países fuera de su residencia:

• **Decisiones de Adecuación**: Priorizamos transferencias a países con leyes adecuadas de protección de datos
• **Cláusulas Contractuales Estándar**: Usamos Cláusulas Contractuales Estándar aprobadas por la UE para transferencias a países sin decisiones de adecuación
• **Salvaguardas Adicionales**: Medidas técnicas y organizacionales para garantizar protección de datos durante transferencias
• **Transferencias a EE.UU.**: Para transferencias a Estados Unidos, cumplimos con marcos y regulaciones aplicables

Aseguramos que todas las transferencias internacionales cumplan con los requisitos de protección de datos aplicables.`
        },
        thirdPartyServices: {
          title: 'Servicios de Terceros',
          content: `Nuestros servicios se integran con plataformas de terceros:

• **Aplicaciones de Navegación**: Google Maps, Waze, Apple Maps para integración de rutas
• **Análisis**: Google Analytics para análisis de uso del sitio web y aplicación
• **Servicios en la Nube**: AWS, Google Cloud para alojamiento y procesamiento de datos
• **Procesamiento de Pagos**: Stripe para procesamiento seguro de pagos
• **Comunicación**: Proveedores de email y SMS para notificaciones

Cada servicio de terceros tiene su propia política de privacidad. Le recomendamos revisar estas políticas y compartir solo información con la que se sienta cómodo.`
        },
        contact: {
          title: 'Información de Contacto',
          content: `Para preguntas, solicitudes o preocupaciones relacionadas con privacidad, contáctenos:

**Oficial de Protección de Datos**
Email: privacy@tuggi.com
Teléfono: +1 (555) 123-4567

**Dirección Postal:**
Tuggi Technologies
Departamento de Privacidad
123 Innovation Drive
San Francisco, CA 94105
Estados Unidos

**Representante en la UE:**
Para residentes de la UE: eu-privacy@tuggi.com

Responderemos a sus solicitudes de privacidad dentro de 30 días.`
        },
        changes: {
          title: 'Cambios en Esta Política',
          content: `Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en nuestras prácticas o leyes aplicables. Nosotros:

• Publicaremos la política actualizada en nuestro sitio web con una nueva fecha de "Última Actualización"
• Le notificaremos por email o notificación de la aplicación para cambios materiales
• Proporcionaremos 30 días de aviso antes de que los cambios materiales entren en vigor
• Mantendremos versiones anteriores para su referencia

Su uso continuado de nuestros servicios después de cambios en la política constituye aceptación de los términos actualizados.`
        }
      }
    };

    return content[currentLanguage] || content['EN'];
  };

  const content = getContent();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-neutral-50 via-white to-tuggi-primary/5 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-tuggi-primary/10 rounded-full mb-6">
              <Shield className="w-5 h-5 text-tuggi-primary mr-2" />
              <span className="text-tuggi-primary font-semibold text-sm">Privacy Policy</span>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-6">
              {content.title}
            </h1>
            
            <div className="space-y-2 text-neutral-600">
              <p className="text-lg">{content.lastUpdated}</p>
              <p className="text-lg">{content.effectiveDate}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6 flex items-center">
                <FileText className="w-8 h-8 text-tuggi-primary mr-3" />
                {content.introduction.title}
              </h2>
              <div className="bg-tuggi-primary/5 border-l-4 border-tuggi-primary p-6 rounded-r-lg">
                <p className="text-neutral-700 leading-relaxed whitespace-pre-line">
                  {content.introduction.content}
                </p>
              </div>
            </div>

            {/* Data Collection */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6">
                {content.dataCollection.title}
              </h2>
              <p className="text-neutral-600 mb-8">{content.dataCollection.subtitle}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.dataCollection.categories.map((category: any, index: number) => (
                  <div key={index} className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-tuggi-primary/10 rounded-xl flex items-center justify-center mr-4">
                        <category.icon className="w-6 h-6 text-tuggi-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900">{category.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {category.items.map((item: string, itemIndex: number) => (
                        <li key={itemIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-tuggi-primary mt-1 mr-2 flex-shrink-0" />
                          <span className="text-neutral-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Use */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6">
                {content.dataUse.title}
              </h2>
              <p className="text-neutral-600 mb-8">{content.dataUse.subtitle}</p>
              
              <div className="space-y-4">
                {content.dataUse.purposes.map((purpose: any, index: number) => (
                  <div key={index} className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">{purpose.title}</h3>
                    <p className="text-neutral-700">{purpose.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6">
                {content.dataSharing.title}
              </h2>
              <p className="text-neutral-600 mb-8">{content.dataSharing.subtitle}</p>
              
              <div className="space-y-6">
                {content.dataSharing.scenarios.map((scenario: any, index: number) => (
                  <div key={index} className="border border-neutral-200 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-neutral-900 mb-3">{scenario.title}</h3>
                    <p className="text-neutral-700 mb-4">{scenario.description}</p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-start">
                        <Shield className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-green-800 text-sm font-medium">{scenario.safeguards}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* User Rights */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6">
                {content.userRights.title}
              </h2>
              <p className="text-neutral-600 mb-8">{content.userRights.subtitle}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.userRights.rights.map((right: any, index: number) => (
                  <div key={index} className="bg-white border border-neutral-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                    <div className="w-16 h-16 bg-tuggi-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <right.icon className="w-8 h-8 text-tuggi-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-3">{right.title}</h3>
                    <p className="text-neutral-700 text-sm">{right.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Sections */}
            {[
              { key: 'dataSecurity', icon: Lock },
              { key: 'dataRetention', icon: Clock },
              { key: 'internationalTransfers', icon: Globe },
              { key: 'thirdPartyServices', icon: Users },
              { key: 'contact', icon: Mail },
              { key: 'changes', icon: FileText }
            ].map(({ key, icon: Icon }) => (
              <div key={key} className="mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6 flex items-center">
                  <Icon className="w-8 h-8 text-tuggi-primary mr-3" />
                  {(content as any)[key].title}
                </h2>
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                  <div className="text-neutral-700 leading-relaxed whitespace-pre-line">
                    {(content as any)[key].content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-tuggi-primary/5 to-tuggi-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6">
            Questions About Your Privacy?
          </h2>
          <p className="text-xl text-neutral-600 mb-8">
            Our privacy team is here to help. Contact us for any questions or concerns about your data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:privacy@tuggi.com"
              className="bg-tuggi-primary hover:bg-tuggi-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Email Privacy Team</span>
            </a>
            <a
              href="tel:+1-555-123-4567"
              className="border-2 border-tuggi-primary text-tuggi-primary hover:bg-tuggi-primary hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;