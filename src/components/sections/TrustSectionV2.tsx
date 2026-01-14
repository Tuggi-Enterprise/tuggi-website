import React from 'react';
import { ShieldCheck, MapPin, Globe, MicOff, Settings, Trash2, ExternalLink } from 'lucide-react';
import { layout } from '../../utils/designSystem';
import AudioSamplesSection from './AudioSamplesSection';

interface TrustSectionV2Props {
  currentLanguage?: string;
}

const TrustSectionV2: React.FC<TrustSectionV2Props> = ({ 
  currentLanguage = 'PT' 
}) => {
  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      PT: {
        privacyTitle: 'Privacidade por Design',
        privacySubtitle: 'Seus dados e sua segurança são prioridade.',
        privacyBullets: [
          {
            icon: 'map-pin',
            text: 'Localização usada apenas para disparar histórias ao longo do trajeto.'
          },
          {
            icon: 'mic-off',
            text: 'Não gravamos conversas. O app só narra conteúdo.'
          },
          {
            icon: 'settings',
            text: 'Controle total de permissões nos ajustes do seu celular.'
          },
          {
            icon: 'trash',
            text: 'Opção de exclusão total de dados a qualquer momento.'
          }
        ],
        curatedTitle: 'Conteúdo curado',
        curatedDescription: 'Aprimorado continuamente. Encontrou algo incorreto?',
        curatedLinkText: 'Fale com a gente'
      },
      EN: {
        privacyTitle: 'Privacy by Design',
        privacySubtitle: 'Your data and security are priority.',
        privacyBullets: [
          {
            icon: 'map-pin',
            text: 'Location used only to trigger stories along your route.'
          },
          {
            icon: 'mic-off',
            text: 'We do not record conversations. The app only narrates content.'
          },
          {
            icon: 'settings',
            text: 'Full control of permissions in your phone settings.'
          },
          {
            icon: 'trash',
            text: 'Option to delete all your data at any time.'
          }
        ],
        curatedTitle: 'Curated content',
        curatedDescription: 'Continuously improved. Found something incorrect?',
        curatedLinkText: 'Contact us'
      },
      ES: {
        privacyTitle: 'Privacidad por Diseño',
        privacySubtitle: 'Tus datos y seguridad son prioridad.',
        privacyBullets: [
          {
            icon: 'map-pin',
            text: 'Ubicación utilizada solo para activar historias a lo largo de tu ruta.'
          },
          {
            icon: 'mic-off',
            text: 'No grabamos conversaciones. La aplicación solo narra contenido.'
          },
          {
            icon: 'settings',
            text: 'Control total de permisos en los ajustes de tu teléfono.'
          },
          {
            icon: 'trash',
            text: 'Opción de eliminar todos tus datos en cualquier momento.'
          }
        ],
        curatedTitle: 'Contenido curado',
        curatedDescription: 'Mejorado continuamente. ¿Encontraste algo incorrecto?',
        curatedLinkText: 'Contáctanos'
      }
    };
    return content[language] || content['PT'];
  };

  const content = getLocalizedContent(currentLanguage);

  return (
    <section 
      className="pt-24 pb-30 relative"
      style={{ 
        background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
        borderTop: '1px solid rgba(0,0,0,0.05)'
      }}
    >
      {/* Decorative Image */}
      <div className="absolute top-8 right-8 opacity-10">
        <Globe className="w-32 h-32 text-tuggi-primary" />
      </div>
      <div className={layout.container.base}>
        {/* Audio Samples Section */}
        <AudioSamplesSection currentLanguage={currentLanguage} />

        {/* Privacy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start mb-12">
          <div>
            <h2 
              className="font-bold mb-6 leading-tight"
              style={{ 
                color: '#0F172A',
                fontFamily: 'var(--font-sans)',
                fontWeight: '700',
                fontSize: '32px',
                letterSpacing: '-0.01em'
              }}
            >
              {content.privacyTitle}
            </h2>
            <p 
              className="leading-relaxed text-lg mb-8"
              style={{ 
                color: '#374151',
                fontFamily: 'var(--font-sans)',
                fontWeight: '500'
              }}
            >
              {content.privacySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {content.privacyBullets.map((bullet: any, index: number) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
                style={{ background: '#FFF' }}
              >
                <div className="w-10 h-10 rounded-xl bg-tuggi-primary/5 flex items-center justify-center mb-4 text-tuggi-primary">
                  {bullet.icon === 'map-pin' && <MapPin className="w-5 h-5" />}
                  {bullet.icon === 'mic-off' && <MicOff className="w-5 h-5" />}
                  {bullet.icon === 'settings' && <Settings className="w-5 h-5" />}
                  {bullet.icon === 'trash' && <Trash2 className="w-5 h-5" />}
                </div>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: '#4B5563', fontFamily: 'var(--font-sans)' }}
                >
                  {bullet.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Curated Content Micro-Trust Bar */}
        <div 
          className="bg-[#F8FBFF] rounded-2xl py-5 px-8 text-neutral-900 ring-1 ring-tuggi-primary/10 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-tuggi-primary/10 rounded-lg">
              <ShieldCheck className="w-5 h-5 text-tuggi-primary" />
            </div>
            <span className="font-bold text-sm uppercase tracking-wider text-[#0F172A]">{content.curatedTitle}</span>
          </div>
          
          <p className="text-sm text-neutral-600 font-medium">
            {content.curatedDescription}
          </p>
          
          <div className="flex items-center gap-2">
            <a 
              href="/pt/contact" 
              className="flex items-center gap-1.5 text-tuggi-primary font-bold text-sm hover:underline"
            >
              {content.curatedLinkText}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSectionV2;
