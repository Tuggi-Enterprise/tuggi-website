import React from 'react';
import { Shield, FileText, Users, AlertTriangle, Globe, Mail, Zap, Lock } from 'lucide-react';

interface TermsOfUsePageProps {
  currentLanguage?: string;
}

const TermsOfUsePage: React.FC<TermsOfUsePageProps> = ({ currentLanguage = 'EN' }) => {
  // Get localized content based on current language
  const getContent = () => {
    const content: Record<string, any> = {
      EN: {
        title: 'Terms of Use',
        lastUpdated: 'Last updated: June 2025',
        introduction: {
          title: 'Introduction',
          content: `Welcome to Tuggi! We're an early-stage travel-tech startup building AI-powered cultural storytelling for transportation.

Our app is currently in development and being tested with selected partners through pilot programs. By using Tuggi, you're helping us improve and refine our platform.

Please note that some features may still be under development, and your experience may include test functionalities as we continue building our product.`
        },
        userAgreement: {
          title: 'User Agreement',
          content: `By accessing or using Tuggi, you agree to comply with these Terms of Use.

The app is designed for personal, non-commercial use. If you're interested in commercial partnerships or enterprise use, please contact us at hello@tuggi.com.

Your use of Tuggi is voluntary, and you can stop using the service at any time.`
        },
        accountAccess: {
          title: 'Account & Access',
          items: [
            'You can use Tuggi anonymously without creating an account',
            'Optional accounts use nicknames only - no email required',
            'You are responsible for maintaining access to your device',
            'We may limit access during maintenance or updates',
            'Account creation implies acceptance of these terms'
          ]
        },
        contentDisclaimer: {
          title: 'Content Disclaimer',
          content: `Tuggi provides cultural and location-based narratives powered by AI technology.

While we strive for accuracy and quality, we cannot guarantee that all information provided is:
• Complete or up-to-date
• Free from errors or inaccuracies  
• Suitable for all purposes or locations

The content is for informational and entertainment purposes. Always use your judgment and consult official sources for critical decisions.`
        },
        intellectualProperty: {
          title: 'Intellectual Property',
          content: `Tuggi owns the app, code, branding, design, and AI-generated content unless otherwise noted.

You may not:
• Copy, reproduce, or redistribute our content
• Reverse engineer or attempt to extract our code
• Use our branding or trademarks without permission
• Resell or commercialize access to our platform

You retain ownership of any content you create or share through the app.`
        },
        limitations: {
          title: 'Limitations of Liability',
          content: `Tuggi is provided "as is" during this early development phase.

We are not responsible for:
• Navigation errors or incorrect directions
• Inaccurate or outdated location information
• Misuse of the app while driving or traveling
• Technical issues, downtime, or data loss
• Any decisions made based on our content

Use Tuggi at your own risk and always prioritize safety while traveling.`
        },
        modifications: {
          title: 'Modifications to Terms',
          content: `As we grow and develop, we may update these Terms of Use.

When we make changes:
• We'll notify users through the app or our website
• Updated terms will be posted with a new date
• Continued use of the app means acceptance of new terms

We'll do our best to communicate significant changes in advance.`
        },
        contact: {
          title: 'Contact Us',
          content: `Questions about these terms or need help?

📧 hello@tuggi.com

We're a small team, but we'll do our best to respond promptly to your inquiries.`
        }
      },
      PT: {
        title: 'Termos de Uso',
        lastUpdated: 'Última atualização: Junho de 2025',
        introduction: {
          title: 'Introdução',
          content: `Bem-vindo ao Tuggi! Somos uma startup de travel-tech em estágio inicial construindo narrativas culturais com IA para transporte.

Nosso app está atualmente em desenvolvimento e sendo testado com parceiros selecionados através de programas piloto. Ao usar o Tuggi, você está nos ajudando a melhorar e refinar nossa plataforma.

Note que algumas funcionalidades podem ainda estar em desenvolvimento, e sua experiência pode incluir recursos de teste enquanto continuamos construindo nosso produto.`
        },
        userAgreement: {
          title: 'Acordo do Usuário',
          content: `Ao acessar ou usar o Tuggi, você concorda em cumprir estes Termos de Uso.

O app é projetado para uso pessoal e não comercial. Se você tem interesse em parcerias comerciais ou uso empresarial, entre em contato conosco em hello@tuggi.com.

Seu uso do Tuggi é voluntário, e você pode parar de usar o serviço a qualquer momento.`
        },
        accountAccess: {
          title: 'Conta e Acesso',
          items: [
            'Você pode usar o Tuggi anonimamente sem criar uma conta',
            'Contas opcionais usam apenas apelidos - nenhum email necessário',
            'Você é responsável por manter acesso ao seu dispositivo',
            'Podemos limitar o acesso durante manutenção ou atualizações',
            'Criar uma conta implica aceitar estes termos'
          ]
        },
        contentDisclaimer: {
          title: 'Aviso sobre Conteúdo',
          content: `O Tuggi fornece narrativas culturais e baseadas em localização alimentadas por tecnologia de IA.

Embora nos esforcemos por precisão e qualidade, não podemos garantir que todas as informações fornecidas sejam:
• Completas ou atualizadas
• Livres de erros ou imprecisões
• Adequadas para todos os propósitos ou localizações

O conteúdo é para fins informativos e de entretenimento. Sempre use seu julgamento e consulte fontes oficiais para decisões críticas.`
        },
        intellectualProperty: {
          title: 'Propriedade Intelectual',
          content: `O Tuggi possui o app, código, marca, design e conteúdo gerado por IA, salvo indicação contrária.

Você não pode:
• Copiar, reproduzir ou redistribuir nosso conteúdo
• Fazer engenharia reversa ou tentar extrair nosso código
• Usar nossa marca ou marcas registradas sem permissão
• Revender ou comercializar acesso à nossa plataforma

Você mantém a propriedade de qualquer conteúdo que criar ou compartilhar através do app.`
        },
        limitations: {
          title: 'Limitações de Responsabilidade',
          content: `O Tuggi é fornecido "como está" durante esta fase inicial de desenvolvimento.

Não somos responsáveis por:
• Erros de navegação ou direções incorretas
• Informações de localização imprecisas ou desatualizadas
• Uso inadequado do app durante direção ou viagem
• Problemas técnicos, inatividade ou perda de dados
• Qualquer decisão tomada baseada em nosso conteúdo

Use o Tuggi por sua própria conta e risco e sempre priorize a segurança ao viajar.`
        },
        modifications: {
          title: 'Modificações nos Termos',
          content: `À medida que crescemos e nos desenvolvemos, podemos atualizar estes Termos de Uso.

Quando fizermos alterações:
• Notificaremos os usuários através do app ou nosso website
• Termos atualizados serão publicados com uma nova data
• Uso continuado do app significa aceitação dos novos termos

Faremos o nosso melhor para comunicar mudanças significativas com antecedência.`
        },
        contact: {
          title: 'Entre em Contato',
          content: `Dúvidas sobre estes termos ou precisa de ajuda?

📧 hello@tuggi.com

Somos uma equipe pequena, mas faremos o nosso melhor para responder prontamente às suas consultas.`
        }
      },
      ES: {
        title: 'Términos de Uso',
        lastUpdated: 'Última actualización: Junio de 2025',
        introduction: {
          title: 'Introducción',
          content: `¡Bienvenido a Tuggi! Somos una startup de travel-tech en etapa inicial construyendo narrativas culturales con IA para transporte.

Nuestra app está actualmente en desarrollo y siendo probada con socios seleccionados a través de programas piloto. Al usar Tuggi, nos estás ayudando a mejorar y refinar nuestra plataforma.

Ten en cuenta que algunas funcionalidades pueden estar aún en desarrollo, y tu experiencia puede incluir características de prueba mientras continuamos construyendo nuestro producto.`
        },
        userAgreement: {
          title: 'Acuerdo del Usuario',
          content: `Al acceder o usar Tuggi, aceptas cumplir con estos Términos de Uso.

La app está diseñada para uso personal y no comercial. Si tienes interés en asociaciones comerciales o uso empresarial, contáctanos en hello@tuggi.com.

Tu uso de Tuggi es voluntario, y puedes dejar de usar el servicio en cualquier momento.`
        },
        accountAccess: {
          title: 'Cuenta y Acceso',
          items: [
            'Puedes usar Tuggi de forma anónima sin crear una cuenta',
            'Las cuentas opcionales usan solo apodos - no se requiere email',
            'Eres responsable de mantener acceso a tu dispositivo',
            'Podemos limitar el acceso durante mantenimiento o actualizaciones',
            'Crear una cuenta implica aceptar estos términos'
          ]
        },
        contentDisclaimer: {
          title: 'Descargo de Responsabilidad del Contenido',
          content: `Tuggi proporciona narrativas culturales y basadas en ubicación alimentadas por tecnología de IA.

Aunque nos esforzamos por la precisión y calidad, no podemos garantizar que toda la información proporcionada sea:
• Completa o actualizada
• Libre de errores o imprecisiones
• Adecuada para todos los propósitos o ubicaciones

El contenido es para fines informativos y de entretenimiento. Siempre usa tu juicio y consulta fuentes oficiales para decisiones críticas.`
        },
        intellectualProperty: {
          title: 'Propiedad Intelectual',
          content: `Tuggi posee la app, código, marca, diseño y contenido generado por IA salvo indicación contraria.

No puedes:
• Copiar, reproducir o redistribuir nuestro contenido
• Hacer ingeniería inversa o intentar extraer nuestro código
• Usar nuestra marca o marcas registradas sin permiso
• Revender o comercializar acceso a nuestra plataforma

Mantienes la propiedad de cualquier contenido que crees o compartas a través de la app.`
        },
        limitations: {
          title: 'Limitaciones de Responsabilidad',
          content: `Tuggi se proporciona "tal como está" durante esta fase inicial de desarrollo.

No somos responsables por:
• Errores de navegación o direcciones incorrectas
• Información de ubicación inexacta o desactualizada
• Uso inadecuado de la app mientras conduces o viajas
• Problemas técnicos, inactividad o pérdida de datos
• Cualquier decisión tomada basada en nuestro contenido

Usa Tuggi bajo tu propio riesgo y siempre prioriza la seguridad al viajar.`
        },
        modifications: {
          title: 'Modificaciones a los Términos',
          content: `A medida que crecemos y nos desarrollamos, podemos actualizar estos Términos de Uso.

Cuando hagamos cambios:
• Notificaremos a los usuarios a través de la app o nuestro sitio web
• Los términos actualizados se publicarán con una nueva fecha
• El uso continuado de la app significa aceptación de los nuevos términos

Haremos nuestro mejor esfuerzo para comunicar cambios significativos con anticipación.`
        },
        contact: {
          title: 'Contáctanos',
          content: `¿Preguntas sobre estos términos o necesitas ayuda?

📧 hello@tuggi.com

Somos un equipo pequeño, pero haremos nuestro mejor esfuerzo para responder prontamente a tus consultas.`
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
              <FileText className="w-5 h-5 text-tuggi-primary mr-2" />
              <span className="text-tuggi-primary font-semibold text-sm">Terms of Use</span>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-6">
              {content.title}
            </h1>
            
            <p className="text-lg text-neutral-600">{content.lastUpdated}</p>
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
                <Zap className="w-8 h-8 text-tuggi-primary mr-3" />
                {content.introduction.title}
              </h2>
              <div className="bg-tuggi-primary/5 border-l-4 border-tuggi-primary p-6 rounded-r-lg">
                <p className="text-neutral-700 leading-relaxed whitespace-pre-line">
                  {content.introduction.content}
                </p>
              </div>
            </div>

            {/* User Agreement */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6 flex items-center">
                <Shield className="w-8 h-8 text-tuggi-primary mr-3" />
                {content.userAgreement.title}
              </h2>
              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                <p className="text-neutral-700 leading-relaxed whitespace-pre-line">
                  {content.userAgreement.content}
                </p>
              </div>
            </div>

            {/* Account & Access */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6 flex items-center">
                <Users className="w-8 h-8 text-tuggi-primary mr-3" />
                {content.accountAccess.title}
              </h2>
              <div className="bg-white border border-neutral-200 rounded-xl p-6">
                <ul className="space-y-3">
                  {content.accountAccess.items.map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-tuggi-primary rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Content Disclaimer */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6 flex items-center">
                <AlertTriangle className="w-8 h-8 text-tuggi-primary mr-3" />
                {content.contentDisclaimer.title}
              </h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <p className="text-neutral-700 leading-relaxed whitespace-pre-line">
                  {content.contentDisclaimer.content}
                </p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6 flex items-center">
                <Lock className="w-8 h-8 text-tuggi-primary mr-3" />
                {content.intellectualProperty.title}
              </h2>
              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                <p className="text-neutral-700 leading-relaxed whitespace-pre-line">
                  {content.intellectualProperty.content}
                </p>
              </div>
            </div>

            {/* Limitations of Liability */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6 flex items-center">
                <Shield className="w-8 h-8 text-tuggi-primary mr-3" />
                {content.limitations.title}
              </h2>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <p className="text-neutral-700 leading-relaxed whitespace-pre-line">
                  {content.limitations.content}
                </p>
              </div>
            </div>

            {/* Modifications */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6 flex items-center">
                <Globe className="w-8 h-8 text-tuggi-primary mr-3" />
                {content.modifications.title}
              </h2>
              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                <p className="text-neutral-700 leading-relaxed whitespace-pre-line">
                  {content.modifications.content}
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6 flex items-center">
                <Mail className="w-8 h-8 text-tuggi-primary mr-3" />
                {content.contact.title}
              </h2>
              <div className="bg-tuggi-primary/5 border border-tuggi-primary/20 rounded-xl p-6">
                <p className="text-neutral-700 leading-relaxed whitespace-pre-line">
                  {content.contact.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-tuggi-primary/5 to-tuggi-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6">
            Questions About These Terms?
          </h2>
          <p className="text-xl text-neutral-600 mb-8">
            We're here to help clarify anything about our Terms of Use.
          </p>
          <a
            href="mailto:hello@tuggi.com"
            className="bg-tuggi-primary hover:bg-tuggi-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center space-x-2"
          >
            <Mail className="w-5 h-5" />
            <span>Contact Us</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUsePage; 