import React from 'react';
import { Shield, Eye, Lock } from 'lucide-react';
import { layout, gradients } from '../utils/designSystem';

interface PrivacyFeature {
  icon: string;
  title: string;
  description: string;
}

interface ContentLanguage {
  title: string;
  subtitle: string;
  description: string;
  termsOfUse: string;
  features: PrivacyFeature[];
}

interface PrivacySectionProps {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, position?: string) => void;
}

const PrivacySection: React.FC<PrivacySectionProps> = ({ 
  currentLanguage = 'PT',
  onCTAClick
}) => {
  // Localized content
  const getLocalizedContent = (language: string): ContentLanguage => {
    const content: Record<string, ContentLanguage> = {
      PT: {
        title: 'A Tuggi utiliza sua localização apenas durante o uso do app, exclusivamente para identificar os pontos culturais próximos a você.',
        subtitle: 'Nunca vendemos nem compartilhamos seus dados.\nPrivacidade, ética e transparência são pilares do nosso produto.',
        description: 'Política de Privacidade',
        termsOfUse: 'Termos de Uso',
        features: [
          {
            icon: 'shield',
            title: 'Proteção total',
            description: 'Seus dados pessoais são protegidos com os mais altos padrões de segurança digital.'
          },
          {
            icon: 'lock',
            title: 'Uso exclusivo',
            description: 'Localização é utilizada apenas para oferecer conteúdo cultural relevante ao seu trajeto.'
          },
          {
            icon: 'eye',
            title: 'Transparência completa',
            description: 'Você sempre sabe como seus dados são utilizados. Sem surpresas ou cláusulas ocultas.'
          }
        ]
      },
      EN: {
        title: 'Tuggi uses your location only during app usage, exclusively to identify cultural points near you.',
        subtitle: 'We never sell or share your data.\nPrivacy, ethics and transparency are pillars of our product.',
        description: 'Privacy Policy',
        termsOfUse: 'Terms of Use',
        features: [
          {
            icon: 'shield',
            title: 'Total protection',
            description: 'Your personal data is protected with the highest digital security standards.'
          },
          {
            icon: 'lock',
            title: 'Exclusive use',
            description: 'Location is used only to offer relevant cultural content for your journey.'
          },
          {
            icon: 'eye',
            title: 'Complete transparency',
            description: 'You always know how your data is used. No surprises or hidden clauses.'
          }
        ]
      },
      ES: {
        title: 'Tuggi utiliza tu ubicación solo durante el uso de la app, exclusivamente para identificar los puntos culturales cercanos a ti.',
        subtitle: 'Nunca vendemos ni compartimos tus datos.\nPrivacidad, ética y transparencia son pilares de nuestro producto.',
        description: 'Política de Privacidad',
        termsOfUse: 'Términos de Uso',
        features: [
          {
            icon: 'shield',
            title: 'Protección total',
            description: 'Tus datos personales están protegidos con los más altos estándares de seguridad digital.'
          },
          {
            icon: 'lock',
            title: 'Uso exclusivo',
            description: 'La ubicación se utiliza solo para ofrecer contenido cultural relevante para tu trayecto.'
          },
          {
            icon: 'eye',
            title: 'Transparencia completa',
            description: 'Siempre sabes cómo se utilizan tus datos. Sin sorpresas o cláusulas ocultas.'
          }
        ]
      }
    };
    return content[language] || content['PT'];
  };

  const content = getLocalizedContent(currentLanguage);

  const handleCTAClick = (ctaType: string) => {
    onCTAClick?.(ctaType, 'privacy_section');
  };

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'shield':
        return <Shield className="w-8 h-8 text-white" />;
      case 'lock':
        return <Lock className="w-8 h-8 text-white" />;
      case 'eye':
        return <Eye className="w-8 h-8 text-white" />;
      default:
        return <Shield className="w-8 h-8 text-white" />;
    }
  };

  return (
    <section className={`${layout.section.base} bg-white`}>
      <div className={layout.container.base}>
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-neutral-900 mb-4 lg:mb-6 max-w-5xl mx-auto leading-tight">
            {content.title}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed whitespace-pre-line">
            {content.subtitle}
          </p>
        </div>

        {/* Principles Grid */}
        <div className={`${layout.grid['3']} gap-4 lg:gap-6 mb-8 lg:mb-10`}>
          {content.features.map((feature: PrivacyFeature, index: number) => (
            <div 
              key={index}
              className="group text-center rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{ background: gradients.subtle }}
            >
              {/* Icon */}
              <div className="inline-flex w-14 h-14 rounded-2xl items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{ background: gradients.ocean }}>
                {getIcon(feature.icon)}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-neutral-900 mb-3 group-hover:text-tuggi-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: gradients.subtle }}></div>
            </div>
          ))}
        </div>

        {/* Legal Links */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => handleCTAClick('privacy_policy')}
              className="inline-flex items-center space-x-2 text-tuggi-primary hover:text-tuggi-primary-dark font-semibold transition-colors duration-200 underline hover:no-underline"
            >
              {/* <FileText className="w-5 h-5" /> */} {/* This line was removed as per the new_code */}
              <span>{content.description}</span>
            </button>
            <span className="hidden sm:block text-neutral-400">•</span>
            <button 
              onClick={() => handleCTAClick('terms_of_use')}
              className="inline-flex items-center space-x-2 text-tuggi-primary hover:text-tuggi-primary-dark font-semibold transition-colors duration-200 underline hover:no-underline"
            >
              {/* <FileText className="w-5 h-5" /> */} {/* This line was removed as per the new_code */}
              <span>{content.termsOfUse}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection; 