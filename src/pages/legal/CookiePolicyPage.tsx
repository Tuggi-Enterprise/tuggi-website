import React, { useState } from 'react';
import { Cookie, Shield, Eye, Settings, BarChart3, Info, CheckCircle, Globe, FileText } from 'lucide-react';

interface CookiePolicyPageProps {
  currentLanguage?: string;
}

const CookiePolicyPage: React.FC<CookiePolicyPageProps> = ({ currentLanguage = 'EN' }) => {
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    functional: false
  });

  // Get localized content based on current language
  const getContent = () => {
    const content: Record<string, any> = {
      EN: {
        title: 'Cookie Policy',
        lastUpdated: 'Last updated: January 15, 2024',
        effectiveDate: 'Effective date: January 15, 2024',
        introduction: {
          title: 'About This Cookie Policy',
          content: `This Cookie Policy explains how Tuggi Technologies ("we," "our," or "us") uses cookies and similar tracking technologies on our website, Tuggi Drive navigation audio app, and related services. This policy should be read alongside our Privacy Policy.

Cookies are small text files that are placed on your device when you visit our website or use our services. They help us provide you with a better experience by remembering your preferences, analyzing how you use our services, and improving our technology.

We are committed to transparency about our use of cookies and give you control over non-essential cookies. You can manage your cookie preferences at any time using the controls provided on this page.`
        },
        whatAreCookies: {
          title: 'What Are Cookies?',
          content: `Cookies are small text files that websites and applications store on your device (computer, smartphone, tablet) when you visit them. They contain information that can be read by the website or app when you return.

**Types of Cookies:**
• **Session Cookies**: Temporary cookies that are deleted when you close your browser
• **Persistent Cookies**: Remain on your device for a set period or until you delete them
• **First-Party Cookies**: Set by the website you're visiting (tuggi.com)
• **Third-Party Cookies**: Set by external services we use (analytics, advertising)

**Similar Technologies:**
We also use similar technologies like web beacons, pixels, and local storage to enhance your experience and understand how our services are used.`
        },
        cookieTypes: {
          title: 'Types of Cookies We Use',
          categories: [
            {
              name: 'Strictly Necessary Cookies',
              icon: Shield,
              required: true,
              description: 'Essential for the website and app to function properly. Cannot be disabled.',
              purpose: 'Enable core functionality like security, authentication, and basic navigation',
              examples: [
                'User authentication and session management',
                'Security and fraud prevention',
                'Language and region preferences',
                'Shopping cart and form data',
                'Load balancing and performance optimization'
              ],
              retention: 'Session to 1 year',
              thirdParties: 'None - all first-party cookies'
            },
            {
              name: 'Analytics Cookies',
              icon: BarChart3,
              required: false,
              description: 'Help us understand how visitors interact with our website and app.',
              purpose: 'Analyze usage patterns, measure performance, and improve our services',
              examples: [
                'Page views and user journey tracking',
                'Feature usage and engagement metrics',
                'Performance monitoring and error tracking',
                'A/B testing and optimization',
                'Conversion and goal tracking'
              ],
              retention: '2 years',
              thirdParties: 'Google Analytics, Mixpanel'
            },
            {
              name: 'Functional Cookies',
              icon: Settings,
              required: false,
              description: 'Enable enhanced functionality and personalization features.',
              purpose: 'Remember your preferences and provide personalized experiences',
              examples: [
                'Language and region preferences',
                'UI customization and themes',
                'Recently viewed content',
                'Saved searches and filters',
                'Accessibility settings'
              ],
              retention: '1 year',
              thirdParties: 'None - all first-party cookies'
            },
            {
              name: 'Marketing Cookies',
              icon: Eye,
              required: false,
              description: 'Used to deliver relevant advertisements and measure campaign effectiveness.',
              purpose: 'Show relevant ads and measure marketing campaign performance',
              examples: [
                'Targeted advertising based on interests',
                'Retargeting and remarketing campaigns',
                'Social media integration and sharing',
                'Campaign attribution and ROI tracking',
                'Cross-device user identification'
              ],
              retention: '1-2 years',
              thirdParties: 'Google Ads, Facebook Pixel, LinkedIn Insight'
            }
          ]
        },
        cookieManagement: {
          title: 'Managing Your Cookie Preferences',
          content: `You have several options for managing cookies:

**On This Website:**
Use the cookie preference center below to enable or disable non-essential cookies. Your choices will be remembered for future visits.

**Browser Settings:**
Most browsers allow you to:
• View and delete existing cookies
• Block all cookies or only third-party cookies
• Set preferences for specific websites
• Receive notifications when cookies are set

**Browser-Specific Instructions:**
• **Chrome**: Settings > Privacy and Security > Cookies and other site data
• **Firefox**: Settings > Privacy & Security > Cookies and Site Data
• **Safari**: Preferences > Privacy > Manage Website Data
• **Edge**: Settings > Cookies and site permissions > Cookies and site data

**Mobile Devices:**
• **iOS**: Settings > Safari > Privacy & Security
• **Android**: Chrome app > Settings > Site settings > Cookies

**Note**: Disabling certain cookies may affect website functionality and your user experience.`
        },
        thirdPartyServices: {
          title: 'Third-Party Services and Cookies',
          services: [
            {
              name: 'Google Analytics',
              purpose: 'Website and app usage analytics',
              cookies: '_ga, _ga_*, _gid, _gat',
              retention: '2 years',
              optOut: 'https://tools.google.com/dlpage/gaoptout',
              privacy: 'https://policies.google.com/privacy'
            },
            {
              name: 'Google Ads',
              purpose: 'Advertising and remarketing',
              cookies: '_gcl_*, _gac_*, IDE, DSID',
              retention: '1-2 years',
              optOut: 'https://adssettings.google.com',
              privacy: 'https://policies.google.com/privacy'
            },
            {
              name: 'Facebook Pixel',
              purpose: 'Social media advertising and analytics',
              cookies: '_fbp, _fbc, fr',
              retention: '90 days - 2 years',
              optOut: 'https://www.facebook.com/settings?tab=ads',
              privacy: 'https://www.facebook.com/privacy/explanation'
            },
            {
              name: 'LinkedIn Insight',
              purpose: 'Professional network advertising',
              cookies: 'li_*, UserMatchHistory, AnalyticsSyncHistory',
              retention: '2 years',
              optOut: 'https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out',
              privacy: 'https://www.linkedin.com/legal/privacy-policy'
            },
            {
              name: 'Stripe',
              purpose: 'Payment processing and fraud prevention',
              cookies: '__stripe_*, m, private_machine_identifier',
              retention: '1 year',
              optOut: 'Not applicable (necessary for payment processing)',
              privacy: 'https://stripe.com/privacy'
            }
          ]
        },
        internationalTransfers: {
          title: 'International Data Transfers',
          content: `Some of our third-party cookie providers may transfer your data internationally:

**United States**: Google, Facebook, LinkedIn, and Stripe are based in the US and may transfer data there
**European Union**: We ensure adequate protection through Standard Contractual Clauses and adequacy decisions
**Other Countries**: Any transfers comply with applicable data protection laws and include appropriate safeguards

We regularly review our third-party providers to ensure they maintain adequate data protection standards.`
        },
        userRights: {
          title: 'Your Rights Regarding Cookies',
          rights: [
            'Right to be informed about cookie usage (this policy)',
            'Right to consent to non-essential cookies',
            'Right to withdraw consent at any time',
            'Right to access information about cookies we use',
            'Right to object to processing for marketing purposes',
            'Right to data portability for cookie-related data',
            'Right to lodge a complaint with supervisory authorities'
          ]
        },
        contact: {
          title: 'Contact Information',
          content: `For questions about our cookie usage or to exercise your rights:

**Data Protection Officer**
Email: contato@tuggi.app
Phone: +55 (11) 9.9471-8809

**Mailing Address:**
Tuggi Technologies
Privacy Department
123 Innovation Drive
San Francisco, CA 94105
United States

**EU Representative:**
For EU residents: eu-privacy@tuggi.com

We will respond to your requests within 30 days.`
        },
        changes: {
          title: 'Changes to This Cookie Policy',
          content: `We may update this Cookie Policy to reflect changes in our practices or applicable laws. When we make changes:

• We will post the updated policy with a new "Last Updated" date
• For material changes, we will notify you via email or prominent website notice
• We will provide 30 days' notice before material changes take effect
• Previous versions will be available upon request

Your continued use of our services after policy changes constitutes acceptance of the updated terms.`
        },
        preferences: {
          title: 'Cookie Preferences',
          description: 'Manage your cookie preferences below. Strictly necessary cookies cannot be disabled as they are essential for the website to function.',
          saveButton: 'Save Preferences',
          acceptAll: 'Accept All',
          rejectAll: 'Reject All (Keep Necessary)',
          saved: 'Preferences Saved!'
        }
      },
      PT: {
        title: 'Política de Cookies',
        lastUpdated: 'Última atualização: 15 de janeiro de 2024',
        effectiveDate: 'Data de vigência: 15 de janeiro de 2024',
        introduction: {
          title: 'Sobre Esta Política de Cookies',
          content: `Esta Política de Cookies explica como a Tuggi Technologies ("nós", "nosso" ou "nossa") usa cookies e tecnologias de rastreamento similares em nosso site, aplicativo de áudio de navegação Tuggi Drive e serviços relacionados. Esta política deve ser lida junto com nossa Política de Privacidade.

Cookies são pequenos arquivos de texto que são colocados em seu dispositivo quando você visita nosso site ou usa nossos serviços. Eles nos ajudam a fornecer uma melhor experiência lembrando suas preferências, analisando como você usa nossos serviços e melhorando nossa tecnologia.

Estamos comprometidos com a transparência sobre nosso uso de cookies e damos a você controle sobre cookies não essenciais. Você pode gerenciar suas preferências de cookies a qualquer momento usando os controles fornecidos nesta página.`
        },
        whatAreCookies: {
          title: 'O que são Cookies?',
          content: `Cookies são pequenos arquivos de texto que sites e aplicativos armazenam em seu dispositivo (computador, smartphone, tablet) quando você os visita. Eles contêm informações que podem ser lidas pelo site ou aplicativo quando você retorna.

**Tipos de Cookies:**
• **Cookies de Sessão**: Cookies temporários que são excluídos quando você fecha seu navegador
• **Cookies Persistentes**: Permanecem em seu dispositivo por um período definido ou até você excluí-los
• **Cookies Próprios**: Definidos pelo site que você está visitando (tuggi.com)
• **Cookies de Terceiros**: Definidos por serviços externos que usamos (análises, publicidade)

**Tecnologias Similares:**
Também usamos tecnologias similares como web beacons, pixels e armazenamento local para melhorar sua experiência e entender como nossos serviços são usados.`
        },
        cookieTypes: {
          title: 'Tipos de Cookies que Usamos',
          categories: [
            {
              name: 'Cookies Estritamente Necessários',
              icon: Shield,
              required: true,
              description: 'Essenciais para o site e aplicativo funcionarem adequadamente. Não podem ser desabilitados.',
              purpose: 'Habilitar funcionalidade principal como segurança, autenticação e navegação básica',
              examples: [
                'Autenticação de usuário e gerenciamento de sessão',
                'Segurança e prevenção de fraudes',
                'Preferências de idioma e região',
                'Carrinho de compras e dados de formulário',
                'Balanceamento de carga e otimização de desempenho'
              ],
              retention: 'Sessão a 1 ano',
              thirdParties: 'Nenhum - todos cookies próprios'
            },
            {
              name: 'Cookies de Análise',
              icon: BarChart3,
              required: false,
              description: 'Nos ajudam a entender como visitantes interagem com nosso site e aplicativo.',
              purpose: 'Analisar padrões de uso, medir desempenho e melhorar nossos serviços',
              examples: [
                'Visualizações de página e rastreamento de jornada do usuário',
                'Métricas de uso de recursos e engajamento',
                'Monitoramento de desempenho e rastreamento de erros',
                'Testes A/B e otimização',
                'Rastreamento de conversão e objetivos'
              ],
              retention: '2 anos',
              thirdParties: 'Google Analytics, Mixpanel'
            },
            {
              name: 'Cookies Funcionais',
              icon: Settings,
              required: false,
              description: 'Habilitam funcionalidade aprimorada e recursos de personalização.',
              purpose: 'Lembrar suas preferências e fornecer experiências personalizadas',
              examples: [
                'Preferências de idioma e região',
                'Personalização de UI e temas',
                'Conteúdo visualizado recentemente',
                'Pesquisas e filtros salvos',
                'Configurações de acessibilidade'
              ],
              retention: '1 ano',
              thirdParties: 'Nenhum - todos cookies próprios'
            },
            {
              name: 'Cookies de Marketing',
              icon: Eye,
              required: false,
              description: 'Usados para entregar anúncios relevantes e medir eficácia de campanhas.',
              purpose: 'Mostrar anúncios relevantes e medir desempenho de campanhas de marketing',
              examples: [
                'Publicidade direcionada baseada em interesses',
                'Campanhas de retargeting e remarketing',
                'Integração e compartilhamento de redes sociais',
                'Atribuição de campanha e rastreamento de ROI',
                'Identificação de usuário entre dispositivos'
              ],
              retention: '1-2 anos',
              thirdParties: 'Google Ads, Facebook Pixel, LinkedIn Insight'
            }
          ]
        },
        cookieManagement: {
          title: 'Gerenciando Suas Preferências de Cookies',
          content: `Você tem várias opções para gerenciar cookies:

**Neste Site:**
Use o centro de preferências de cookies abaixo para habilitar ou desabilitar cookies não essenciais. Suas escolhas serão lembradas para visitas futuras.

**Configurações do Navegador:**
A maioria dos navegadores permite:
• Visualizar e excluir cookies existentes
• Bloquear todos os cookies ou apenas cookies de terceiros
• Definir preferências para sites específicos
• Receber notificações quando cookies são definidos

**Instruções Específicas do Navegador:**
• **Chrome**: Configurações > Privacidade e Segurança > Cookies e outros dados do site
• **Firefox**: Configurações > Privacidade e Segurança > Cookies e Dados do Site
• **Safari**: Preferências > Privacidade > Gerenciar Dados do Site
• **Edge**: Configurações > Permissões de cookies e site > Cookies e dados do site

**Dispositivos Móveis:**
• **iOS**: Configurações > Safari > Privacidade e Segurança
• **Android**: App Chrome > Configurações > Configurações do site > Cookies

**Nota**: Desabilitar certos cookies pode afetar a funcionalidade do site e sua experiência do usuário.`
        },
        thirdPartyServices: {
          title: 'Serviços de Terceiros e Cookies',
          services: [
            {
              name: 'Google Analytics',
              purpose: 'Análises de uso do site e aplicativo',
              cookies: '_ga, _ga_*, _gid, _gat',
              retention: '2 anos',
              optOut: 'https://tools.google.com/dlpage/gaoptout',
              privacy: 'https://policies.google.com/privacy'
            },
            {
              name: 'Google Ads',
              purpose: 'Publicidade e remarketing',
              cookies: '_gcl_*, _gac_*, IDE, DSID',
              retention: '1-2 anos',
              optOut: 'https://adssettings.google.com',
              privacy: 'https://policies.google.com/privacy'
            },
            {
              name: 'Facebook Pixel',
              purpose: 'Publicidade e análises de redes sociais',
              cookies: '_fbp, _fbc, fr',
              retention: '90 dias - 2 anos',
              optOut: 'https://www.facebook.com/settings?tab=ads',
              privacy: 'https://www.facebook.com/privacy/explanation'
            },
            {
              name: 'LinkedIn Insight',
              purpose: 'Publicidade de rede profissional',
              cookies: 'li_*, UserMatchHistory, AnalyticsSyncHistory',
              retention: '2 anos',
              optOut: 'https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out',
              privacy: 'https://www.linkedin.com/legal/privacy-policy'
            },
            {
              name: 'Stripe',
              purpose: 'Processamento de pagamentos e prevenção de fraudes',
              cookies: '__stripe_*, m, private_machine_identifier',
              retention: '1 ano',
              optOut: 'Não aplicável (necessário para processamento de pagamentos)',
              privacy: 'https://stripe.com/privacy'
            }
          ]
        },
        internationalTransfers: {
          title: 'Transferências Internacionais de Dados',
          content: `Alguns de nossos provedores de cookies de terceiros podem transferir seus dados internacionalmente:

**Estados Unidos**: Google, Facebook, LinkedIn e Stripe são baseados nos EUA e podem transferir dados para lá
**União Europeia**: Garantimos proteção adequada através de Cláusulas Contratuais Padrão e decisões de adequação
**Outros Países**: Quaisquer transferências cumprem leis de proteção de dados aplicáveis e incluem salvaguardas apropriadas

Revisamos regularmente nossos provedores terceirizados para garantir que mantenham padrões adequados de proteção de dados.`
        },
        userRights: {
          title: 'Seus Direitos Sobre Cookies',
          rights: [
            'Direito de ser informado sobre uso de cookies (esta política)',
            'Direito de consentir com cookies não essenciais',
            'Direito de retirar consentimento a qualquer momento',
            'Direito de acessar informações sobre cookies que usamos',
            'Direito de objetar ao processamento para fins de marketing',
            'Direito à portabilidade de dados relacionados a cookies',
            'Direito de apresentar reclamação às autoridades supervisoras'
          ]
        },
        contact: {
          title: 'Informações de Contato',
          content: `Para perguntas sobre nosso uso de cookies ou para exercer seus direitos:

**Encarregado de Proteção de Dados**
Email: privacy@tuggi.app
Telefone: +55 (11) 9.9471-8809

**Endereço para Correspondência:**
Tuggi Technologies
Departamento de Privacidade
123 Innovation Drive
San Francisco, CA 94105
Estados Unidos

**Representante na UE:**
Para residentes da UE: eu-privacy@tuggi.app

Responderemos às suas solicitações dentro de 30 dias.`
        },
        changes: {
          title: 'Alterações nesta Política de Cookies',
          content: `Podemos atualizar esta Política de Cookies para refletir mudanças em nossas práticas ou leis aplicáveis. Quando fazemos alterações:

• Publicaremos a política atualizada com uma nova data de "Última Atualização"
• Para mudanças materiais, notificaremos você via email ou aviso proeminente no site
• Forneceremos 30 dias de aviso antes que mudanças materiais entrem em vigor
• Versões anteriores estarão disponíveis mediante solicitação

Seu uso continuado de nossos serviços após mudanças na política constitui aceitação dos termos atualizados.`
        },
        preferences: {
          title: 'Preferências de Cookies',
          description: 'Gerencie suas preferências de cookies abaixo. Cookies estritamente necessários não podem ser desabilitados pois são essenciais para o funcionamento do site.',
          saveButton: 'Salvar Preferências',
          acceptAll: 'Aceitar Todos',
          rejectAll: 'Rejeitar Todos (Manter Necessários)',
          saved: 'Preferências Salvas!'
        }
      },
      ES: {
        title: 'Política de Cookies',
        lastUpdated: 'Última actualización: 15 de enero de 2024',
        effectiveDate: 'Fecha de vigencia: 15 de enero de 2024',
        introduction: {
          title: 'Acerca de Esta Política de Cookies',
          content: `Esta Política de Cookies explica cómo Tuggi Technologies ("nosotros", "nuestro" o "nuestra") usa cookies y tecnologías de seguimiento similares en nuestro sitio web, aplicación de audio de navegación Tuggi Drive y servicios relacionados. Esta política debe leerse junto con nuestra Política de Privacidad.

Las cookies son pequeños archivos de texto que se colocan en su dispositivo cuando visita nuestro sitio web o usa nuestros servicios. Nos ayudan a brindarle una mejor experiencia recordando sus preferencias, analizando cómo usa nuestros servicios y mejorando nuestra tecnología.

Estamos comprometidos con la transparencia sobre nuestro uso de cookies y le damos control sobre las cookies no esenciales. Puede gestionar sus preferencias de cookies en cualquier momento usando los controles proporcionados en esta página.`
        },
        whatAreCookies: {
          title: '¿Qué son las Cookies?',
          content: `Las cookies son pequeños archivos de texto que los sitios web y aplicaciones almacenan en su dispositivo (computadora, smartphone, tablet) cuando los visita. Contienen información que puede ser leída por el sitio web o aplicación cuando regresa.

**Tipos de Cookies:**
• **Cookies de Sesión**: Cookies temporales que se eliminan cuando cierra su navegador
• **Cookies Persistentes**: Permanecen en su dispositivo por un período establecido o hasta que las elimine
• **Cookies Propias**: Establecidas por el sitio web que está visitando (tuggi.com)
• **Cookies de Terceros**: Establecidas por servicios externos que usamos (análisis, publicidad)

**Tecnologías Similares:**
También usamos tecnologías similares como web beacons, píxeles y almacenamiento local para mejorar su experiencia y entender cómo se usan nuestros servicios.`
        },
        cookieTypes: {
          title: 'Tipos de Cookies que Usamos',
          categories: [
            {
              name: 'Cookies Estrictamente Necesarias',
              icon: Shield,
              required: true,
              description: 'Esenciales para que el sitio web y la aplicación funcionen correctamente. No se pueden desactivar.',
              purpose: 'Habilitar funcionalidad principal como seguridad, autenticación y navegación básica',
              examples: [
                'Autenticación de usuario y gestión de sesiones',
                'Seguridad y prevención de fraudes',
                'Preferencias de idioma y región',
                'Carrito de compras y datos de formularios',
                'Balanceamiento de carga y optimización de rendimiento'
              ],
              retention: 'Sesión a 1 año',
              thirdParties: 'Ninguno - todas cookies propias'
            },
            {
              name: 'Cookies de Análisis',
              icon: BarChart3,
              required: false,
              description: 'Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web y aplicación.',
              purpose: 'Analizar patrones de uso, medir rendimiento y mejorar nuestros servicios',
              examples: [
                'Vistas de página y seguimiento de recorrido del usuario',
                'Métricas de uso de características y participación',
                'Monitoreo de rendimiento y seguimiento de errores',
                'Pruebas A/B y optimización',
                'Seguimiento de conversión y objetivos'
              ],
              retention: '2 años',
              thirdParties: 'Google Analytics, Mixpanel'
            },
            {
              name: 'Cookies Funcionales',
              icon: Settings,
              required: false,
              description: 'Habilitan funcionalidad mejorada y características de personalización.',
              purpose: 'Recordar sus preferencias y proporcionar experiencias personalizadas',
              examples: [
                'Preferencias de idioma y región',
                'Personalización de UI y temas',
                'Contenido visto recientemente',
                'Búsquedas y filtros guardados',
                'Configuraciones de accesibilidad'
              ],
              retention: '1 año',
              thirdParties: 'Ninguno - todas cookies propias'
            },
            {
              name: 'Cookies de Marketing',
              icon: Eye,
              required: false,
              description: 'Usadas para entregar anuncios relevantes y medir efectividad de campañas.',
              purpose: 'Mostrar anuncios relevantes y medir rendimiento de campañas de marketing',
              examples: [
                'Publicidad dirigida basada en intereses',
                'Campañas de retargeting y remarketing',
                'Integración y compartición de redes sociales',
                'Atribución de campañas y seguimiento de ROI',
                'Identificación de usuario entre dispositivos'
              ],
              retention: '1-2 años',
              thirdParties: 'Google Ads, Facebook Pixel, LinkedIn Insight'
            }
          ]
        },
        cookieManagement: {
          title: 'Gestionando Sus Preferencias de Cookies',
          content: `Tiene varias opciones para gestionar cookies:

**En Este Sitio Web:**
Use el centro de preferencias de cookies a continuación para habilitar o deshabilitar cookies no esenciales. Sus elecciones serán recordadas para futuras visitas.

**Configuraciones del Navegador:**
La mayoría de navegadores le permiten:
• Ver y eliminar cookies existentes
• Bloquear todas las cookies o solo cookies de terceros
• Establecer preferencias para sitios web específicos
• Recibir notificaciones cuando se establecen cookies

**Instrucciones Específicas del Navegador:**
• **Chrome**: Configuración > Privacidad y Seguridad > Cookies y otros datos del sitio
• **Firefox**: Configuración > Privacidad y Seguridad > Cookies y Datos del Sitio
• **Safari**: Preferencias > Privacidad > Gestionar Datos del Sitio Web
• **Edge**: Configuración > Permisos de cookies y sitio > Cookies y datos del sitio

**Dispositivos Móviles:**
• **iOS**: Configuración > Safari > Privacidad y Seguridad
• **Android**: App Chrome > Configuración > Configuración del sitio > Cookies

**Nota**: Deshabilitar ciertas cookies puede afectar la funcionalidad del sitio web y su experiencia de usuario.`
        },
        thirdPartyServices: {
          title: 'Servicios de Terceros y Cookies',
          services: [
            {
              name: 'Google Analytics',
              purpose: 'Análisis de uso del sitio web y aplicación',
              cookies: '_ga, _ga_*, _gid, _gat',
              retention: '2 años',
              optOut: 'https://tools.google.com/dlpage/gaoptout',
              privacy: 'https://policies.google.com/privacy'
            },
            {
              name: 'Google Ads',
              purpose: 'Publicidad y remarketing',
              cookies: '_gcl_*, _gac_*, IDE, DSID',
              retention: '1-2 años',
              optOut: 'https://adssettings.google.com',
              privacy: 'https://policies.google.com/privacy'
            },
            {
              name: 'Facebook Pixel',
              purpose: 'Publicidad y análisis de redes sociales',
              cookies: '_fbp, _fbc, fr',
              retention: '90 días - 2 años',
              optOut: 'https://www.facebook.com/settings?tab=ads',
              privacy: 'https://www.facebook.com/privacy/explanation'
            },
            {
              name: 'LinkedIn Insight',
              purpose: 'Publicidad de red profesional',
              cookies: 'li_*, UserMatchHistory, AnalyticsSyncHistory',
              retention: '2 años',
              optOut: 'https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out',
              privacy: 'https://www.linkedin.com/legal/privacy-policy'
            },
            {
              name: 'Stripe',
              purpose: 'Procesamiento de pagos y prevención de fraudes',
              cookies: '__stripe_*, m, private_machine_identifier',
              retention: '1 año',
              optOut: 'No aplicable (necesario para procesamiento de pagos)',
              privacy: 'https://stripe.com/privacy'
            }
          ]
        },
        internationalTransfers: {
          title: 'Transferencias Internacionales de Datos',
          content: `Algunos de nuestros proveedores de cookies de terceros pueden transferir sus datos internacionalmente:

**Estados Unidos**: Google, Facebook, LinkedIn y Stripe tienen sede en EE.UU. y pueden transferir datos allí
**Unión Europea**: Aseguramos protección adecuada a través de Cláusulas Contractuales Estándar y decisiones de adecuación
**Otros Países**: Cualquier transferencia cumple con las leyes de protección de datos aplicables e incluye salvaguardas apropiadas

Revisamos regularmente nuestros proveedores terceros para asegurar que mantengan estándares adecuados de protección de datos.`
        },
        userRights: {
          title: 'Sus Derechos Respecto a las Cookies',
          rights: [
            'Derecho a ser informado sobre el uso de cookies (esta política)',
            'Derecho a consentir cookies no esenciales',
            'Derecho a retirar el consentimiento en cualquier momento',
            'Derecho a acceder información sobre cookies que usamos',
            'Derecho a objetar el procesamiento para fines de marketing',
            'Derecho a la portabilidad de datos relacionados con cookies',
            'Derecho a presentar una queja ante autoridades supervisoras'
          ]
        },
        contact: {
          title: 'Información de Contacto',
          content: `Para preguntas sobre nuestro uso de cookies o para ejercer sus derechos:

**Oficial de Protección de Datos**
Email: privacy@tuggi.app
Teléfono: +55 (11) 9.9471-8809

**Dirección Postal:**
Tuggi Technologies
Departamento de Privacidad
123 Innovation Drive
San Francisco, CA 94105
Estados Unidos

**Representante en la UE:**
Para residentes de la UE: eu-privacy@tuggi.app

Responderemos a sus solicitudes dentro de 30 días.`
        },
        changes: {
          title: 'Cambios en Esta Política de Cookies',
          content: `Podemos actualizar esta Política de Cookies para reflejar cambios en nuestras prácticas o leyes aplicables. Cuando hacemos cambios:

• Publicaremos la política actualizada con una nueva fecha de "Última Actualización"
• Para cambios materiales, le notificaremos por email o aviso prominente en el sitio web
• Proporcionaremos 30 días de aviso antes de que los cambios materiales entren en vigor
• Las versiones anteriores estarán disponibles bajo solicitud

Su uso continuado de nuestros servicios después de cambios en la política constituye aceptación de los términos actualizados.`
        },
        preferences: {
          title: 'Preferencias de Cookies',
          description: 'Gestione sus preferencias de cookies a continuación. Las cookies estrictamente necesarias no se pueden deshabilitar ya que son esenciales para el funcionamiento del sitio web.',
          saveButton: 'Guardar Preferencias',
          acceptAll: 'Aceptar Todas',
          rejectAll: 'Rechazar Todas (Mantener Necesarias)',
          saved: '¡Preferencias Guardadas!'
        }
      },
      FR: {
        title: 'Politique de Cookies',
        lastUpdated: 'Dernière mise à jour : 15 janvier 2024',
        effectiveDate: 'Date d\'entrée en vigueur : 15 janvier 2024',
        introduction: {
          title: 'À propos de cette Politique de Cookies',
          content: `Cette Politique de Cookies explique comment Tuggi Technologies ("nous", "notre" ou "nos") utilise des cookies et des technologies de suivi similaires sur notre site web, l'application audio de navigation Tuggi Drive et les services connexes. Cette politique doit être lue conjointement avec notre Politique de Confidentialité.

Les cookies sont de petits fichiers texte qui sont placés sur votre appareil lorsque vous visitez notre site web ou utilisez nos services. Ils nous aident à vous offrir une meilleure expérience en se souvenant de vos préférences, en analysant comment vous utilisez nos services et en améliorant notre technologie.

Nous nous engageons à la transparence concernant notre utilisation des cookies et vous donnons le contrôle sur les cookies non essentiels. Vous pouvez gérer vos préférences en matière de cookies à tout moment en utilisant les contrôles fournis sur cette page.`
        },
        whatAreCookies: {
          title: 'Qu\'est-ce que les Cookies ?',
          content: `Les cookies sont de petits fichiers texte que les sites web et les applications stockent sur votre appareil (ordinateur, smartphone, tablette) lorsque vous les visitez. Ils contiennent des informations qui peuvent être lues par le site web ou l'application lorsque vous revenez.

**Types de Cookies :**
• **Cookies de Session** : Cookies temporaires qui sont supprimés lorsque vous fermez votre navigateur
• **Cookies Persistants** : Restent sur votre appareil pendant une période définie ou jusqu'à ce que vous les supprimiez
• **Cookies Internes** : Définis par le site web que vous visitez (tuggi.com)
• **Cookies Tiers** : Définis par des services externes que nous utilisons (analyse, publicité)

**Technologies Similaires :**
Nous utilisons également des technologies similaires comme les balises web, les pixels et le stockage local pour améliorer votre expérience et comprendre comment nos services sont utilisés.`
        },
        cookieTypes: {
          title: 'Types de Cookies que Nous Utilisons',
          categories: [
            {
              name: 'Cookies Strictement Nécessaires',
              icon: Shield,
              required: true,
              description: 'Essentiels pour que le site web et l\'application fonctionnent correctement. Ne peuvent pas être désactivés.',
              purpose: 'Activer les fonctionnalités principales comme la sécurité, l\'authentification et la navigation de base',
              examples: [
                'Authentification de l\'utilisateur et gestion de session',
                'Sécurité et prévention de la fraude',
                'Préférences de langue et de région',
                'Panier d\'achat et données de formulaire',
                'Équilibrage de charge et optimisation des performances'
              ],
              retention: 'Session à 1 an',
              thirdParties: 'Aucun - tous cookies internes'
            },
            {
              name: 'Cookies d\'Analyse',
              icon: BarChart3,
              required: false,
              description: 'Nous aident à comprendre comment les visiteurs interagissent avec notre site web et notre application.',
              purpose: 'Analyser les modèles d\'utilisation, mesurer les performances et améliorer nos services',
              examples: [
                'Vues de page et suivi du parcours utilisateur',
                'Métriques d\'utilisation des fonctionnalités et d\'engagement',
                'Surveillance des performances et suivi des erreurs',
                'Tests A/B et optimisation',
                'Suivi des conversions et des objectifs'
              ],
              retention: '2 ans',
              thirdParties: 'Google Analytics, Mixpanel'
            },
            {
              name: 'Cookies Fonctionnels',
              icon: Settings,
              required: false,
              description: 'Activent des fonctionnalités améliorées et des fonctionnalités de personnalisation.',
              purpose: 'Se souvenir de vos préférences et fournir des expériences personnalisées',
              examples: [
                'Préférences de langue et de région',
                'Personnalisation de l\'interface utilisateur et thèmes',
                'Contenu récemment consulté',
                'Recherches et filtres enregistrés',
                'Paramètres d\'accessibilité'
              ],
              retention: '1 an',
              thirdParties: 'Aucun - tous cookies internes'
            },
            {
              name: 'Cookies Marketing',
              icon: Eye,
              required: false,
              description: 'Utilisés pour diffuser des publicités pertinentes et mesurer l\'efficacité des campagnes.',
              purpose: 'Afficher des publicités pertinentes et mesurer les performances des campagnes marketing',
              examples: [
                'Publicité ciblée basée sur les intérêts',
                'Campagnes de reciblage et de remarketing',
                'Intégration et partage sur les réseaux sociaux',
                'Attribution de campagne et suivi du ROI',
                'Identification de l\'utilisateur sur plusieurs appareils'
              ],
              retention: '1-2 ans',
              thirdParties: 'Google Ads, Facebook Pixel, LinkedIn Insight'
            }
          ]
        },
        cookieManagement: {
          title: 'Gérer Vos Préférences de Cookies',
          content: `Vous avez plusieurs options pour gérer les cookies :

**Sur Ce Site Web :**
Utilisez le centre de préférences des cookies ci-dessous pour activer ou désactiver les cookies non essentiels. Vos choix seront mémorisés pour les visites futures.

**Paramètres du Navigateur :**
La plupart des navigateurs vous permettent de :
• Afficher et supprimer les cookies existants
• Bloquer tous les cookies ou uniquement les cookies tiers
• Définir des préférences pour des sites web spécifiques
• Recevoir des notifications lorsque des cookies sont définis

**Instructions Spécifiques au Navigateur :**
• **Chrome** : Paramètres > Confidentialité et sécurité > Cookies et autres données de site
• **Firefox** : Paramètres > Vie privée et sécurité > Cookies et données de site
• **Safari** : Préférences > Confidentialité > Gérer les données du site web
• **Edge** : Paramètres > Cookies et autorisations de site > Cookies et données de site

**Appareils Mobiles :**
• **iOS** : Réglages > Safari > Confidentialité et sécurité
• **Android** : Appli Chrome > Paramètres > Paramètres du site > Cookies

**Remarque** : La désactivation de certains cookies peut affecter la fonctionnalité du site web et votre expérience utilisateur.`
        },
        thirdPartyServices: {
          title: 'Services Tiers et Cookies',
          services: [
            {
              name: 'Google Analytics',
              purpose: 'Analyse de l\'utilisation du site web et de l\'application',
              cookies: '_ga, _ga_*, _gid, _gat',
              retention: '2 ans',
              optOut: 'https://tools.google.com/dlpage/gaoptout',
              privacy: 'https://policies.google.com/privacy'
            },
            {
              name: 'Google Ads',
              purpose: 'Publicité et remarketing',
              cookies: '_gcl_*, _gac_*, IDE, DSID',
              retention: '1-2 ans',
              optOut: 'https://adssettings.google.com',
              privacy: 'https://policies.google.com/privacy'
            },
            {
              name: 'Facebook Pixel',
              purpose: 'Publicité sur les réseaux sociaux et analyse',
              cookies: '_fbp, _fbc, fr',
              retention: '90 jours - 2 ans',
              optOut: 'https://www.facebook.com/settings?tab=ads',
              privacy: 'https://www.facebook.com/privacy/explanation'
            },
            {
              name: 'LinkedIn Insight',
              purpose: 'Publicité de réseau professionnel',
              cookies: 'li_*, UserMatchHistory, AnalyticsSyncHistory',
              retention: '2 ans',
              optOut: 'https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out',
              privacy: 'https://www.linkedin.com/legal/privacy-policy'
            },
            {
              name: 'Stripe',
              purpose: 'Traitement des paiements et prévention de la fraude',
              cookies: '__stripe_*, m, private_machine_identifier',
              retention: '1 an',
              optOut: 'Non applicable (nécessaire pour le traitement des paiements)',
              privacy: 'https://stripe.com/privacy'
            }
          ]
        },
        internationalTransfers: {
          title: 'Transferts Internationaux de Données',
          content: `Certains de nos fournisseurs de cookies tiers peuvent transférer vos données à l'international :

**États-Unis** : Google, Facebook, LinkedIn et Stripe sont basés aux États-Unis et peuvent y transférer des données
**Union Européenne** : Nous assurons une protection adéquate par le biais de Clauses Contractuelles Types et de décisions d'adéquation
**Autres Pays** : Tout transfert est conforme aux lois applicables sur la protection des données et comprend des garanties appropriées

Nous examinons régulièrement nos fournisseurs tiers pour nous assurer qu'ils maintiennent des normes de protection des données adéquates.`
        },
        userRights: {
          title: 'Vos Droits Concernant les Cookies',
          rights: [
            'Droit d\'être informé sur l\'utilisation des cookies (cette politique)',
            'Droit de consentir aux cookies non essentiels',
            'Droit de retirer son consentement à tout moment',
            'Droit d\'accéder aux informations sur les cookies que nous utilisons',
            'Droit de s\'opposer au traitement à des fins de marketing',
            'Droit à la portabilité des données liées aux cookies',
            'Droit de déposer une plainte auprès des autorités de contrôle'
          ]
        },
        contact: {
          title: 'Coordonnées',
          content: `Pour toute question concernant notre utilisation des cookies ou pour exercer vos droits :

**Délégué à la Protection des Données**
E-mail : privacy@tuggi.app
Téléphone : +55 (11) 9.9471-8809

**Adresse Postale :**
Tuggi Technologies
Département Confidentialité
123 Innovation Drive
San Francisco, CA 94105
États-Unis

**Représentant UE :**
Pour les résidents de l'UE : eu-privacy@tuggi.app

Nous répondrons à vos demandes dans un délai de 30 jours.`
        },
        changes: {
          title: 'Modifications de Cette Politique de Cookies',
          content: `Nous pouvons mettre à jour cette Politique de Cookies pour refléter les changements dans nos pratiques ou les lois applicables. Lorsque nous apportons des modifications :

• Nous publierons la politique mise à jour avec une nouvelle date de "Dernière Mise à Jour"
• Pour les changements importants, nous vous informerons par e-mail ou par un avis bien visible sur le site web
• Nous fournirons un préavis de 30 jours avant que les changements importants n'entrent en vigueur
• Les versions précédentes seront disponibles sur demande

Votre utilisation continue de nos services après les modifications de la politique constitue une acceptation des conditions mises à jour.`
        },
        preferences: {
          title: 'Préférences de Cookies',
          description: 'Gérez vos préférences de cookies ci-dessous. Les cookies strictement nécessaires ne peuvent pas être désactivés car ils sont essentiels au fonctionnement du site web.',
          saveButton: 'Enregistrer les Préférences',
          acceptAll: 'Tout Accepter',
          rejectAll: 'Tout Rejeter (Garder les Nécessaires)',
          saved: 'Préférences Enregistrées !'
        }
      },
      DE: {
        title: 'Cookie-Richtlinie',
        lastUpdated: 'Letzte Aktualisierung: 15. Januar 2024',
        effectiveDate: 'Datum des Inkrafttretens: 15. Januar 2024',
        introduction: {
          title: 'Über diese Cookie-Richtlinie',
          content: `Diese Cookie-Richtlinie erklärt, wie Tuggi Technologies ("wir", "unser" oder "uns") Cookies und ähnliche Tracking-Technologien auf unserer Website, der Tuggi Drive Navigations-Audio-App und den damit verbundenen Diensten verwendet. Diese Richtlinie sollte zusammen mit unserer Datenschutzrichtlinie gelesen werden.

Cookies sind kleine Textdateien, die auf Ihrem Gerät platziert werden, wenn Sie unsere Website besuchen oder unsere Dienste nutzen. Sie helfen uns, Ihnen ein besseres Erlebnis zu bieten, indem sie sich an Ihre Präferenzen erinnern, analysieren, wie Sie unsere Dienste nutzen, und unsere Technologie verbessern.

Wir verpflichten uns zur Transparenz über unsere Verwendung von Cookies und geben Ihnen die Kontrolle über nicht wesentliche Cookies. Sie können Ihre Cookie-Einstellungen jederzeit über die auf dieser Seite bereitgestellten Steuerelemente verwalten.`
        },
        whatAreCookies: {
          title: 'Was sind Cookies?',
          content: `Cookies sind kleine Textdateien, die Websites und Anwendungen auf Ihrem Gerät (Computer, Smartphone, Tablet) speichern, wenn Sie diese besuchen. Sie enthalten Informationen, die von der Website oder App gelesen werden können, wenn Sie zurückkehren.

**Arten von Cookies:**
• **Sitzungscookies**: Temporäre Cookies, die gelöscht werden, wenn Sie Ihren Browser schließen
• **Permanente Cookies**: Bleiben für einen festgelegten Zeitraum auf Ihrem Gerät oder bis Sie sie löschen
• **Erstanbieter-Cookies**: Von der Website gesetzt, die Sie besuchen (tuggi.com)
• **Drittanbieter-Cookies**: Von externen Diensten gesetzt, die wir nutzen (Analyse, Werbung)

**Ähnliche Technologien:**
Wir verwenden auch ähnliche Technologien wie Web Beacons, Pixel und lokalen Speicher, um Ihr Erlebnis zu verbessern und zu verstehen, wie unsere Dienste genutzt werden.`
        },
        cookieTypes: {
          title: 'Arten von Cookies, die wir verwenden',
          categories: [
            {
              name: 'Unbedingt erforderliche Cookies',
              icon: Shield,
              required: true,
              description: 'Unerlässlich, damit die Website und die App ordnungsgemäß funktionieren. Können nicht deaktiviert werden.',
              purpose: 'Aktivieren von Kernfunktionen wie Sicherheit, Authentifizierung und grundlegende Navigation',
              examples: [
                'Benutzerauthentifizierung und Sitzungsverwaltung',
                'Sicherheit und Betrugsprävention',
                'Sprach- und Regionspräferenzen',
                'Warenkorb und Formulardaten',
                'Lastausgleich und Leistungsoptimierung'
              ],
              retention: 'Sitzung bis 1 Jahr',
              thirdParties: 'Keine - alle Erstanbieter-Cookies'
            },
            {
              name: 'Analyse-Cookies',
              icon: BarChart3,
              required: false,
              description: 'Helfen uns zu verstehen, wie Besucher mit unserer Website und App interagieren.',
              purpose: 'Nutzungsmuster analysieren, Leistung messen und unsere Dienste verbessern',
              examples: [
                'Seitenaufrufe und Verfolgung der Benutzerreise',
                'Funktionsnutzungs- und Engagement-Metriken',
                'Leistungsüberwachung und Fehlerverfolgung',
                'A/B-Tests und Optimierung',
                'Konversions- und Zielverfolgung'
              ],
              retention: '2 Jahre',
              thirdParties: 'Google Analytics, Mixpanel'
            },
            {
              name: 'Funktionale Cookies',
              icon: Settings,
              required: false,
              description: 'Ermöglichen verbesserte Funktionalität und Personalisierungsfunktionen.',
              purpose: 'Erinnern an Ihre Präferenzen und Bereitstellung personalisierter Erlebnisse',
              examples: [
                'Sprach- und Regionspräferenzen',
                'UI-Anpassung und Themen',
                'Kürzlich angesehene Inhalte',
                'Gespeicherte Suchen und Filter',
                'Barrierefreiheitseinstellungen'
              ],
              retention: '1 Jahr',
              thirdParties: 'Keine - alle Erstanbieter-Cookies'
            },
            {
              name: 'Marketing-Cookies',
              icon: Eye,
              required: false,
              description: 'Werden verwendet, um relevante Werbung bereitzustellen und die Wirksamkeit von Kampagnen zu messen.',
              purpose: 'Anzeige relevanter Anzeigen und Messung der Leistung von Marketingkampagnen',
              examples: [
                'Gezielte Werbung basierend auf Interessen',
                'Retargeting- und Remarketing-Kampagnen',
                'Social-Media-Integration und Teilen',
                'Kampagnenattribution und ROI-Verfolgung',
                'Geräteübergreifende Benutzeridentifikation'
              ],
              retention: '1-2 Jahre',
              thirdParties: 'Google Ads, Facebook Pixel, LinkedIn Insight'
            }
          ]
        },
        cookieManagement: {
          title: 'Verwaltung Ihrer Cookie-Einstellungen',
          content: `Sie haben mehrere Möglichkeiten, Cookies zu verwalten:

**Auf dieser Website:**
Verwenden Sie das Cookie-Einstellungszentrum unten, um nicht wesentliche Cookies zu aktivieren oder zu deaktivieren. Ihre Auswahl wird für zukünftige Besuche gespeichert.

**Browsereinstellungen:**
Die meisten Browser ermöglichen Ihnen:
• Vorhandene Cookies anzeigen und löschen
• Alle Cookies oder nur Drittanbieter-Cookies blockieren
• Einstellungen für bestimmte Websites festlegen
• Benachrichtigungen erhalten, wenn Cookies gesetzt werden

**Browser-spezifische Anweisungen:**
• **Chrome**: Einstellungen > Datenschutz und Sicherheit > Cookies und andere Websitedaten
• **Firefox**: Einstellungen > Datenschutz & Sicherheit > Cookies und Website-Daten
• **Safari**: Einstellungen > Datenschutz > Websitedaten verwalten
• **Edge**: Einstellungen > Cookies und Websiteberechtigungen > Cookies und Websitedaten

**Mobilgeräte:**
• **iOS**: Einstellungen > Safari > Datenschutz & Sicherheit
• **Android**: Chrome-App > Einstellungen > Website-Einstellungen > Cookies

**Hinweis**: Das Deaktivieren bestimmter Cookies kann die Funktionalität der Website und Ihr Benutzererlebnis beeinträchtigen.`
        },
        thirdPartyServices: {
          title: 'Dienste von Drittanbietern und Cookies',
          services: [
            {
              name: 'Google Analytics',
              purpose: 'Analyse der Website- und App-Nutzung',
              cookies: '_ga, _ga_*, _gid, _gat',
              retention: '2 Jahre',
              optOut: 'https://tools.google.com/dlpage/gaoptout',
              privacy: 'https://policies.google.com/privacy'
            },
            {
              name: 'Google Ads',
              purpose: 'Werbung und Remarketing',
              cookies: '_gcl_*, _gac_*, IDE, DSID',
              retention: '1-2 Jahre',
              optOut: 'https://adssettings.google.com',
              privacy: 'https://policies.google.com/privacy'
            },
            {
              name: 'Facebook Pixel',
              purpose: 'Social-Media-Werbung und Analyse',
              cookies: '_fbp, _fbc, fr',
              retention: '90 Tage - 2 Jahre',
              optOut: 'https://www.facebook.com/settings?tab=ads',
              privacy: 'https://www.facebook.com/privacy/explanation'
            },
            {
              name: 'LinkedIn Insight',
              purpose: 'Werbung im professionellen Netzwerk',
              cookies: 'li_*, UserMatchHistory, AnalyticsSyncHistory',
              retention: '2 Jahre',
              optOut: 'https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out',
              privacy: 'https://www.linkedin.com/legal/privacy-policy'
            },
            {
              name: 'Stripe',
              purpose: 'Zahlungsabwicklung und Betrugsprävention',
              cookies: '__stripe_*, m, private_machine_identifier',
              retention: '1 Jahr',
              optOut: 'Nicht zutreffend (notwendig für die Zahlungsabwicklung)',
              privacy: 'https://stripe.com/privacy'
            }
          ]
        },
        internationalTransfers: {
          title: 'Internationale Datenübermittlungen',
          content: `Einige unserer Drittanbieter-Cookie-Anbieter können Ihre Daten international übertragen:

**Vereinigte Staaten**: Google, Facebook, LinkedIn und Stripe haben ihren Sitz in den USA und können Daten dorthin übertragen
**Europäische Union**: Wir gewährleisten einen angemessenen Schutz durch Standardvertragsklauseln und Angemessenheitsbeschlüsse
**Andere Länder**: Alle Übertragungen entsprechen den geltenden Datenschutzgesetzen und beinhalten angemessene Schutzmaßnahmen

Wir überprüfen regelmäßig unsere Drittanbieter, um sicherzustellen, dass sie angemessene Datenschutzstandards einhalten.`
        },
        userRights: {
          title: 'Ihre Rechte in Bezug auf Cookies',
          rights: [
            'Recht auf Information über die Verwendung von Cookies (diese Richtlinie)',
            'Recht auf Einwilligung zu nicht wesentlichen Cookies',
            'Recht auf jederzeitigen Widerruf der Einwilligung',
            'Recht auf Auskunft über die von uns verwendeten Cookies',
            'Recht auf Widerspruch gegen die Verarbeitung zu Marketingzwecken',
            'Recht auf Datenübertragbarkeit für cookie-bezogene Daten',
            'Recht auf Beschwerde bei Aufsichtsbehörden'
          ]
        },
        contact: {
          title: 'Kontaktinformationen',
          content: `Bei Fragen zu unserer Verwendung von Cookies oder zur Ausübung Ihrer Rechte:

**Datenschutzbeauftragter**
E-Mail: privacy@tuggi.app
Telefon: +55 (11) 9.9471-8809

**Postanschrift:**
Tuggi Technologies
Datenschutzabteilung
123 Innovation Drive
San Francisco, CA 94105
Vereinigte Staaten

**EU-Vertreter:**
Für EU-Einwohner: eu-privacy@tuggi.app

Wir werden Ihre Anfragen innerhalb von 30 Tagen beantworten.`
        },
        changes: {
          title: 'Änderungen an dieser Cookie-Richtlinie',
          content: `Wir können diese Cookie-Richtlinie aktualisieren, um Änderungen in unseren Praktiken oder geltenden Gesetzen widerzuspiegeln. Wenn wir Änderungen vornehmen:

• Wir werden die aktualisierte Richtlinie mit einem neuen Datum "Letzte Aktualisierung" veröffentlichen
• Bei wesentlichen Änderungen werden wir Sie per E-Mail oder durch einen deutlichen Hinweis auf der Website benachrichtigen
• Wir werden 30 Tage vor Inkrafttreten wesentlicher Änderungen Bescheid geben
• Frühere Versionen sind auf Anfrage erhältlich

Ihre fortgesetzte Nutzung unserer Dienste nach Änderungen der Richtlinie stellt die Annahme der aktualisierten Bedingungen dar.`
        },
        preferences: {
          title: 'Cookie-Einstellungen',
          description: 'Verwalten Sie Ihre Cookie-Einstellungen unten. Unbedingt erforderliche Cookies können nicht deaktiviert werden, da sie für das Funktionieren der Website unerlässlich sind.',
          saveButton: 'Einstellungen speichern',
          acceptAll: 'Alle akzeptieren',
          rejectAll: 'Alle ablehnen (Erforderliche behalten)',
          saved: 'Einstellungen gespeichert!'
        }
      },
      IT: {
        title: 'Informativa sui Cookie',
        lastUpdated: 'Ultimo aggiornamento: 15 gennaio 2024',
        effectiveDate: 'Data di entrata in vigore: 15 gennaio 2024',
        introduction: {
          title: 'Informazioni su questa Informativa sui Cookie',
          content: `Questa Informativa sui Cookie spiega come Tuggi Technologies ("noi", "nostro" o "ci") utilizza cookie e tecnologie di tracciamento simili sul nostro sito web, sull'app di navigazione audio Tuggi Drive e sui servizi correlati. Questa politica deve essere letta insieme alla nostra Informativa sulla Privacy.

I cookie sono piccoli file di testo che vengono posizionati sul tuo dispositivo quando visiti il nostro sito web o utilizzi i nostri servizi. Ci aiutano a offrirti un'esperienza migliore ricordando le tue preferenze, analizzando come utilizzi i nostri servizi e migliorando la nostra tecnologia.

Ci impegniamo alla trasparenza riguardo al nostro utilizzo dei cookie e ti diamo il controllo sui cookie non essenziali. Puoi gestire le tue preferenze sui cookie in qualsiasi momento utilizzando i controlli forniti in questa pagina.`
        },
        whatAreCookies: {
          title: 'Cosa sono i Cookie?',
          content: `I cookie sono piccoli file di testo che i siti web e le applicazioni memorizzano sul tuo dispositivo (computer, smartphone, tablet) quando li visiti. Contengono informazioni che possono essere lette dal sito web o dall'app quando ritorni.

**Tipi di Cookie:**
• **Cookie di Sessione**: Cookie temporanei che vengono eliminati quando chiudi il browser
• **Cookie Persistenti**: Rimangono sul tuo dispositivo per un periodo stabilito o finché non li elimini
• **Cookie di Prima Parte**: Impostati dal sito web che stai visitando (tuggi.com)
• **Cookie di Terze Parti**: Impostati da servizi esterni che utilizziamo (analisi, pubblicità)

**Tecnologie Simili:**
Utilizziamo anche tecnologie simili come web beacon, pixel e archiviazione locale per migliorare la tua esperienza e capire come vengono utilizzati i nostri servizi.`
        },
        cookieTypes: {
          title: 'Tipi di Cookie che Utilizziamo',
          categories: [
            {
              name: 'Cookie Strettamente Necessari',
              icon: Shield,
              required: true,
              description: 'Essenziali per il corretto funzionamento del sito web e dell\'app. Non possono essere disabilitati.',
              purpose: 'Abilitare funzionalità principali come sicurezza, autenticazione e navigazione di base',
              examples: [
                'Autenticazione utente e gestione sessione',
                'Sicurezza e prevenzione frodi',
                'Preferenze di lingua e regione',
                'Carrello e dati modulo',
                'Bilanciamento del carico e ottimizzazione delle prestazioni'
              ],
              retention: 'Sessione a 1 anno',
              thirdParties: 'Nessuno - tutti cookie di prima parte'
            },
            {
              name: 'Cookie Analitici',
              icon: BarChart3,
              required: false,
              description: 'Ci aiutano a capire come i visitatori interagiscono con il nostro sito web e l\'app.',
              purpose: 'Analizzare modelli di utilizzo, misurare prestazioni e migliorare i nostri servizi',
              examples: [
                'Visualizzazioni pagina e tracciamento percorso utente',
                'Metriche di utilizzo funzionalità e coinvolgimento',
                'Monitoraggio prestazioni e tracciamento errori',
                'Test A/B e ottimizzazione',
                'Tracciamento conversioni e obiettivi'
              ],
              retention: '2 anni',
              thirdParties: 'Google Analytics, Mixpanel'
            },
            {
              name: 'Cookie Funzionali',
              icon: Settings,
              required: false,
              description: 'Abilitano funzionalità avanzate e opzioni di personalizzazione.',
              purpose: 'Ricordare le tue preferenze e fornire esperienze personalizzate',
              examples: [
                'Preferenze di lingua e regione',
                'Personalizzazione UI e temi',
                'Contenuti visualizzati di recente',
                'Ricerche e filtri salvati',
                'Impostazioni di accessibilità'
              ],
              retention: '1 anno',
              thirdParties: 'Nessuno - tutti cookie di prima parte'
            },
            {
              name: 'Cookie di Marketing',
              icon: Eye,
              required: false,
              description: 'Utilizzati per fornire annunci pertinenti e misurare l\'efficacia delle campagne.',
              purpose: 'Mostrare annunci pertinenti e misurare le prestazioni delle campagne di marketing',
              examples: [
                'Pubblicità mirata basata sugli interessi',
                'Campagne di retargeting e remarketing',
                'Integrazione e condivisione social media',
                'Attribuzione campagna e tracciamento ROI',
                'Identificazione utente cross-device'
              ],
              retention: '1-2 anni',
              thirdParties: 'Google Ads, Facebook Pixel, LinkedIn Insight'
            }
          ]
        },
        cookieManagement: {
          title: 'Gestione delle tue Preferenze sui Cookie',
          content: `Hai diverse opzioni per gestire i cookie:

**Su Questo Sito Web:**
Utilizza il centro preferenze cookie qui sotto per abilitare o disabilitare i cookie non essenziali. Le tue scelte saranno ricordate per le visite future.

**Impostazioni del Browser:**
La maggior parte dei browser ti consente di:
• Visualizzare ed eliminare i cookie esistenti
• Bloccare tutti i cookie o solo i cookie di terze parti
• Impostare preferenze per siti web specifici
• Ricevere notifiche quando vengono impostati cookie

**Istruzioni Specifiche per Browser:**
• **Chrome**: Impostazioni > Privacy e sicurezza > Cookie e altri dati dei siti
• **Firefox**: Impostazioni > Privacy e sicurezza > Cookie e dati dei siti web
• **Safari**: Preferenze > Privacy > Gestisci dati sito web
• **Edge**: Impostazioni > Cookie e autorizzazioni sito > Cookie e dati sito

**Dispositivi Mobili:**
• **iOS**: Impostazioni > Safari > Privacy e sicurezza
• **Android**: App Chrome > Impostazioni > Impostazioni sito > Cookie

**Nota**: Disabilitare alcuni cookie potrebbe influire sulla funzionalità del sito web e sulla tua esperienza utente.`
        },
        thirdPartyServices: {
          title: 'Servizi di Terze Parti e Cookie',
          services: [
            {
              name: 'Google Analytics',
              purpose: 'Analisi utilizzo sito web e app',
              cookies: '_ga, _ga_*, _gid, _gat',
              retention: '2 anni',
              optOut: 'https://tools.google.com/dlpage/gaoptout',
              privacy: 'https://policies.google.com/privacy'
            },
            {
              name: 'Google Ads',
              purpose: 'Pubblicità e remarketing',
              cookies: '_gcl_*, _gac_*, IDE, DSID',
              retention: '1-2 anni',
              optOut: 'https://adssettings.google.com',
              privacy: 'https://policies.google.com/privacy'
            },
            {
              name: 'Facebook Pixel',
              purpose: 'Pubblicità social media e analisi',
              cookies: '_fbp, _fbc, fr',
              retention: '90 giorni - 2 anni',
              optOut: 'https://www.facebook.com/settings?tab=ads',
              privacy: 'https://www.facebook.com/privacy/explanation'
            },
            {
              name: 'LinkedIn Insight',
              purpose: 'Pubblicità rete professionale',
              cookies: 'li_*, UserMatchHistory, AnalyticsSyncHistory',
              retention: '2 anni',
              optOut: 'https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out',
              privacy: 'https://www.linkedin.com/legal/privacy-policy'
            },
            {
              name: 'Stripe',
              purpose: 'Elaborazione pagamenti e prevenzione frodi',
              cookies: '__stripe_*, m, private_machine_identifier',
              retention: '1 anno',
              optOut: 'Non applicabile (necessario per elaborazione pagamenti)',
              privacy: 'https://stripe.com/privacy'
            }
          ]
        },
        internationalTransfers: {
          title: 'Trasferimenti Internazionali di Dati',
          content: `Alcuni dei nostri fornitori di cookie di terze parti potrebbero trasferire i tuoi dati a livello internazionale:

**Stati Uniti**: Google, Facebook, LinkedIn e Stripe hanno sede negli USA e potrebbero trasferire dati lì
**Unione Europea**: Garantiamo una protezione adeguata attraverso Clausole Contrattuali Standard e decisioni di adeguatezza
**Altri Paesi**: Qualsiasi trasferimento è conforme alle leggi sulla protezione dei dati applicabili e include garanzie appropriate

Esaminiamo regolarmente i nostri fornitori terzi per garantire che mantengano standard adeguati di protezione dei dati.`
        },
        userRights: {
          title: 'I Tuoi Diritti Riguardo ai Cookie',
          rights: [
            'Diritto di essere informato sull\'uso dei cookie (questa informativa)',
            'Diritto di acconsentire ai cookie non essenziali',
            'Diritto di revocare il consenso in qualsiasi momento',
            'Diritto di accedere alle informazioni sui cookie che utilizziamo',
            'Diritto di opporsi al trattamento per scopi di marketing',
            'Diritto alla portabilità dei dati relativi ai cookie',
            'Diritto di presentare reclamo alle autorità di controllo'
          ]
        },
        contact: {
          title: 'Informazioni di Contatto',
          content: `Per domande sul nostro utilizzo dei cookie o per esercitare i tuoi diritti:

**Responsabile della Protezione dei Dati**
Email: privacy@tuggi.app
Telefono: +55 (11) 9.9471-8809

**Indirizzo Postale:**
Tuggi Technologies
Dipartimento Privacy
123 Innovation Drive
San Francisco, CA 94105
Stati Uniti

**Rappresentante UE:**
Per residenti UE: eu-privacy@tuggi.app

Risponderemo alle tue richieste entro 30 giorni.`
        },
        changes: {
          title: 'Modifiche a Questa Informativa sui Cookie',
          content: `Potremmo aggiornare questa Informativa sui Cookie per riflettere cambiamenti nelle nostre pratiche o leggi applicabili. Quando apportiamo modifiche:

• Pubblicheremo l'informativa aggiornata con una nuova data di "Ultimo Aggiornamento"
• Per modifiche sostanziali, ti notificheremo via email o avviso evidente sul sito web
• Forniremo un preavviso di 30 giorni prima che le modifiche sostanziali entrino in vigore
• Versioni precedenti saranno disponibili su richiesta

Il tuo uso continuato dei nostri servizi dopo modifiche all'informativa costituisce accettazione dei termini aggiornati.`
        },
        preferences: {
          title: 'Preferenze Cookie',
          description: 'Gestisci le tue preferenze sui cookie qui sotto. I cookie strettamente necessari non possono essere disabilitati poiché sono essenziali per il funzionamento del sito web.',
          saveButton: 'Salva Preferenze',
          acceptAll: 'Accetta Tutto',
          rejectAll: 'Rifiuta Tutto (Mantieni Necessari)',
          saved: 'Preferenze Salvate!'
        }
      }
    };

    return content[currentLanguage] || content['EN'];
  };

  const content = getContent();
  const [showSavedMessage, setShowSavedMessage] = useState(false);

  const handlePreferenceChange = (category: string, enabled: boolean) => {
    if (category === 'necessary') return; // Cannot disable necessary cookies
    
    setCookiePreferences(prev => ({
      ...prev,
      [category]: enabled
    }));
  };

  const savePreferences = () => {
    // Save preferences to localStorage
    localStorage.setItem('tuggi_cookie_preferences', JSON.stringify(cookiePreferences));
    
    // Show saved message
    setShowSavedMessage(true);
    setTimeout(() => setShowSavedMessage(false), 3000);
    
    // Track preference change
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cookie_preferences_saved', {
        event_category: 'Cookie Management',
        analytics_enabled: cookiePreferences.analytics,
        marketing_enabled: cookiePreferences.marketing,
        functional_enabled: cookiePreferences.functional,
        language: currentLanguage
      });
    }
  };

  const acceptAll = () => {
    setCookiePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    });
    savePreferences();
  };

  const rejectAll = () => {
    setCookiePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    });
    savePreferences();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-neutral-50 via-white to-tuggi-primary/5 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-tuggi-secondary/10 rounded-full mb-6">
              <Cookie className="w-5 h-5 text-tuggi-secondary mr-2" />
              <span className="text-tuggi-secondary font-semibold text-sm">Cookie Policy</span>
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
                <Info className="w-8 h-8 text-tuggi-primary mr-3" />
                {content.introduction.title}
              </h2>
              <div className="bg-tuggi-secondary/5 border-l-4 border-tuggi-secondary p-6 rounded-r-lg">
                <p className="text-neutral-700 leading-relaxed whitespace-pre-line">
                  {content.introduction.content}
                </p>
              </div>
            </div>

            {/* What Are Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6 flex items-center">
                <Cookie className="w-8 h-8 text-tuggi-secondary mr-3" />
                {content.whatAreCookies.title}
              </h2>
              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                <div className="text-neutral-700 leading-relaxed whitespace-pre-line">
                  {content.whatAreCookies.content}
                </div>
              </div>
            </div>

            {/* Cookie Types */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6">
                {content.cookieTypes.title}
              </h2>
              
              <div className="space-y-8">
                {content.cookieTypes.categories.map((category: any, index: number) => (
                  <div key={index} className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-tuggi-primary/10 rounded-xl flex items-center justify-center mr-4">
                          <category.icon className="w-6 h-6 text-tuggi-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-neutral-900">{category.name}</h3>
                          {category.required && (
                            <span className="inline-flex items-center px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full mt-1">
                              Required
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-neutral-700 mb-4">{category.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-2">Purpose:</h4>
                        <p className="text-sm text-neutral-600">{category.purpose}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-2">Retention:</h4>
                        <p className="text-sm text-neutral-600">{category.retention}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-neutral-900 mb-2">Examples:</h4>
                      <ul className="space-y-1">
                        {category.examples.map((example: string, exampleIndex: number) => (
                          <li key={exampleIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-tuggi-primary mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-sm text-neutral-700">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-neutral-50 rounded-lg p-3">
                      <p className="text-sm text-neutral-600">
                        <strong>Third Parties:</strong> {category.thirdParties}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cookie Preferences */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6 flex items-center">
                <Settings className="w-8 h-8 text-tuggi-primary mr-3" />
                {content.preferences.title}
              </h2>
              
              <div className="bg-gradient-to-br from-tuggi-primary/5 to-tuggi-secondary/5 border border-tuggi-primary/20 rounded-xl p-6 mb-6">
                <p className="text-neutral-700 mb-6">{content.preferences.description}</p>
                
                {showSavedMessage && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-green-800 font-medium">{content.preferences.saved}</span>
                  </div>
                )}
                
                <div className="space-y-4 mb-6">
                  {content.cookieTypes.categories.map((category: any, index: number) => (
                    <div key={index} className="bg-white rounded-lg p-4 border border-neutral-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <category.icon className="w-5 h-5 text-tuggi-primary mr-3" />
                          <div>
                            <h4 className="font-semibold text-neutral-900">{category.name}</h4>
                            <p className="text-sm text-neutral-600">{category.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          {category.required ? (
                            <span className="text-sm text-neutral-500 mr-3">Always Active</span>
                          ) : (
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={cookiePreferences[category.name.toLowerCase().split(' ')[0] as keyof typeof cookiePreferences]}
                                onChange={(e) => handlePreferenceChange(
                                  category.name.toLowerCase().split(' ')[0],
                                  e.target.checked
                                )}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-tuggi-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tuggi-primary"></div>
                            </label>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={savePreferences}
                    className="bg-tuggi-primary hover:bg-tuggi-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg flex items-center justify-center space-x-2"
                  >
                    <Settings className="w-5 h-5" />
                    <span>{content.preferences.saveButton}</span>
                  </button>
                  <button
                    onClick={acceptAll}
                    className="bg-tuggi-secondary hover:bg-tuggi-secondary-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg"
                  >
                    {content.preferences.acceptAll}
                  </button>
                  <button
                    onClick={rejectAll}
                    className="border-2 border-neutral-300 text-neutral-700 hover:bg-neutral-50 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                  >
                    {content.preferences.rejectAll}
                  </button>
                </div>
              </div>
            </div>

            {/* Cookie Management */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6">
                {content.cookieManagement.title}
              </h2>
              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                <div className="text-neutral-700 leading-relaxed whitespace-pre-line">
                  {content.cookieManagement.content}
                </div>
              </div>
            </div>

            {/* Third Party Services */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6">
                {content.thirdPartyServices.title}
              </h2>
              
              <div className="space-y-4">
                {content.thirdPartyServices.services.map((service: any, index: number) => (
                  <div key={index} className="bg-white border border-neutral-200 rounded-xl p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-neutral-900 mb-2">{service.name}</h3>
                        <p className="text-neutral-700 mb-2">{service.purpose}</p>
                        <p className="text-sm text-neutral-600">
                          <strong>Cookies:</strong> {service.cookies}
                        </p>
                        <p className="text-sm text-neutral-600">
                          <strong>Retention:</strong> {service.retention}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <a
                          href={service.privacy}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-sm text-tuggi-primary hover:text-tuggi-primary-dark font-medium"
                        >
                          Privacy Policy →
                        </a>
                        <a
                          href={service.optOut}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-sm text-tuggi-secondary hover:text-tuggi-secondary-dark font-medium"
                        >
                          Opt-out →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Sections */}
            {[
              { key: 'internationalTransfers', icon: Globe },
              { key: 'userRights', icon: Shield },
              { key: 'contact', icon: FileText },
              { key: 'changes', icon: FileText }
            ].map(({ key, icon: Icon }) => (
              <div key={key} className="mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6 flex items-center">
                  <Icon className="w-8 h-8 text-tuggi-primary mr-3" />
                  {(content as any)[key].title}
                </h2>
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                  {key === 'userRights' ? (
                    <ul className="space-y-2">
                      {(content as any)[key].rights.map((right: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-tuggi-primary mt-1 mr-2 flex-shrink-0" />
                          <span className="text-neutral-700">{right}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="text-neutral-700 leading-relaxed whitespace-pre-line">
                      {(content as any)[key].content}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicyPage;