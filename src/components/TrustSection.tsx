import React from 'react';
import { Building2, Shield, Server } from 'lucide-react';

interface TrustSectionProps {
  currentLanguage?: string;
}

const TrustSection: React.FC<TrustSectionProps> = ({ currentLanguage = 'EN' }) => {
  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      EN: {
        badge: '🛡️ Enterprise Trust & Security',
        title: 'Built for Enterprise Trust & Scale',
        subtitle: 'Your business deserves technology that meets the highest standards of security, compliance, and reliability.',
        trustTags: [
          {
            title: 'Built for B2B',
            description: 'Enterprise-grade solution designed specifically for transportation companies, fleet operators, and professional drivers.',
            features: ['Multi-tenant architecture', 'Fleet management dashboard', 'Driver performance analytics', 'Corporate billing'],
            color: 'from-tuggi-primary to-blue-600',
            bgColor: 'bg-tuggi-primary/5',
            borderColor: 'border-tuggi-primary/20'
          },
          {
            title: 'Privacy-compliant',
            description: 'Full GDPR, CCPA, and international privacy law compliance with end-to-end encryption and secure data handling.',
            features: ['GDPR compliant', 'End-to-end encryption', 'Zero data retention', 'Privacy by design'],
            color: 'from-green-500 to-emerald-600',
            bgColor: 'bg-green-50',
            borderColor: 'border-green-200'
          },
          {
            title: 'Scalable Infrastructure',
            description: 'Cloud-native architecture that grows with your business, supporting everything from single vehicles to enterprise fleets.',
            features: ['99.9% uptime SLA', 'Auto-scaling', 'Global CDN', 'Real-time monitoring'],
            color: 'from-tuggi-secondary to-orange-600',
            bgColor: 'bg-tuggi-secondary/5',
            borderColor: 'border-tuggi-secondary/20'
          }
        ],
        certifications: [
          { name: 'ISO 27001', description: 'Information Security' },
          { name: 'SOC 2 Type II', description: 'Security & Availability' },
          { name: 'GDPR', description: 'Privacy Compliance' },
          { name: 'PCI DSS', description: 'Payment Security' }
        ],
        certificationsTitle: 'Industry Certifications & Compliance',
        certificationsSubtitle: 'Certified and audited by leading security and compliance organizations',
        stats: [
          { value: '99.9%', label: 'Uptime SLA' },
          { value: '24/7', label: 'Support' },
          { value: '500+', label: 'Enterprise Clients' },
          { value: '50M+', label: 'Stories Delivered' }
        ]
      },
      PT: {
        badge: '🛡️ Confiança e Segurança Empresarial',
        title: 'Construído para Confiança e Escala Empresarial',
        subtitle: 'Seu negócio merece tecnologia que atende aos mais altos padrões de segurança, conformidade e confiabilidade.',
        trustTags: [
          {
            title: 'Construído para B2B',
            description: 'Solução de nível empresarial projetada especificamente para empresas de transporte, operadores de frota e motoristas profissionais.',
            features: ['Arquitetura multi-inquilino', 'Painel gestão de frota', 'Análises desempenho motorista', 'Faturamento corporativo'],
            color: 'from-tuggi-primary to-blue-600',
            bgColor: 'bg-tuggi-primary/5',
            borderColor: 'border-tuggi-primary/20'
          },
          {
            title: 'Conformidade de Privacidade',
            description: 'Conformidade total com GDPR, CCPA e leis internacionais de privacidade com criptografia ponta a ponta e manuseio seguro de dados.',
            features: ['Conforme GDPR', 'Criptografia ponta a ponta', 'Zero retenção de dados', 'Privacidade por design'],
            color: 'from-green-500 to-emerald-600',
            bgColor: 'bg-green-50',
            borderColor: 'border-green-200'
          },
          {
            title: 'Infraestrutura Escalável',
            description: 'Arquitetura nativa da nuvem que cresce com seu negócio, suportando desde veículos únicos até frotas empresariais.',
            features: ['99.9% SLA tempo atividade', 'Auto-escalonamento', 'CDN global', 'Monitoramento tempo real'],
            color: 'from-tuggi-secondary to-orange-600',
            bgColor: 'bg-tuggi-secondary/5',
            borderColor: 'border-tuggi-secondary/20'
          }
        ],
        certifications: [
          { name: 'ISO 27001', description: 'Segurança da Informação' },
          { name: 'SOC 2 Tipo II', description: 'Segurança e Disponibilidade' },
          { name: 'GDPR', description: 'Conformidade Privacidade' },
          { name: 'PCI DSS', description: 'Segurança Pagamentos' }
        ],
        certificationsTitle: 'Certificações e Conformidade da Indústria',
        certificationsSubtitle: 'Certificado e auditado por organizações líderes de segurança e conformidade',
        stats: [
          { value: '99.9%', label: 'SLA Tempo Atividade' },
          { value: '24/7', label: 'Suporte' },
          { value: '500+', label: 'Clientes Empresariais' },
          { value: '50M+', label: 'Histórias Entregues' }
        ]
      },
      ES: {
        badge: '🛡️ Confianza y Seguridad Empresarial',
        title: 'Construido para Confianza y Escala Empresarial',
        subtitle: 'Su negocio merece tecnología que cumple con los más altos estándares de seguridad, cumplimiento y confiabilidad.',
        trustTags: [
          {
            title: 'Construido para B2B',
            description: 'Solución de nivel empresarial diseñada específicamente para empresas de transporte, operadores de flotas y conductores profesionales.',
            features: ['Arquitectura multi-inquilino', 'Panel gestión de flotas', 'Análisis rendimiento conductor', 'Facturación corporativa'],
            color: 'from-tuggi-primary to-blue-600',
            bgColor: 'bg-tuggi-primary/5',
            borderColor: 'border-tuggi-primary/20'
          },
          {
            title: 'Cumplimiento de Privacidad',
            description: 'Cumplimiento total con GDPR, CCPA y leyes internacionales de privacidad con cifrado de extremo a extremo y manejo seguro de datos.',
            features: ['Cumple GDPR', 'Cifrado extremo a extremo', 'Cero retención datos', 'Privacidad por diseño'],
            color: 'from-green-500 to-emerald-600',
            bgColor: 'bg-green-50',
            borderColor: 'border-green-200'
          },
          {
            title: 'Infraestructura Escalable',
            description: 'Arquitectura nativa de la nube que crece con su negocio, soportando desde vehículos únicos hasta flotas empresariales.',
            features: ['99.9% SLA tiempo actividad', 'Auto-escalamiento', 'CDN global', 'Monitoreo tiempo real'],
            color: 'from-tuggi-secondary to-orange-600',
            bgColor: 'bg-tuggi-secondary/5',
            borderColor: 'border-tuggi-secondary/20'
          }
        ],
        certifications: [
          { name: 'ISO 27001', description: 'Seguridad de la Información' },
          { name: 'SOC 2 Tipo II', description: 'Seguridad y Disponibilidad' },
          { name: 'GDPR', description: 'Cumplimiento Privacidad' },
          { name: 'PCI DSS', description: 'Seguridad Pagos' }
        ],
        certificationsTitle: 'Certificaciones y Cumplimiento de la Industria',
        certificationsSubtitle: 'Certificado y auditado por organizaciones líderes de seguridad y cumplimiento',
        stats: [
          { value: '99.9%', label: 'SLA Tiempo Actividad' },
          { value: '24/7', label: 'Soporte' },
          { value: '500+', label: 'Clientes Empresariales' },
          { value: '50M+', label: 'Historias Entregadas' }
        ]
      }
    };
    return content[language] || content['EN'];
  };

  const content = getLocalizedContent(currentLanguage);

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-6">
            <span className="text-green-700 font-semibold text-sm">
              {content.badge}
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-6">
            {content.title}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Trust Tags */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {content.trustTags.map((tag: any, index: number) => (
            <div 
              key={index}
              className={`group ${tag.bgColor} ${tag.borderColor} border-2 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
            >
              {/* Icon & Title */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tag.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {index === 0 && <Building2 className="w-7 h-7 text-white" />}
                  {index === 1 && <Shield className="w-7 h-7 text-white" />}
                  {index === 2 && <Server className="w-7 h-7 text-white" />}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 group-hover:text-tuggi-primary transition-colors duration-300">
                  {tag.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-neutral-600 leading-relaxed mb-6">
                {tag.description}
              </p>

              {/* Features List */}
              <div className="space-y-2">
                {tag.features.map((feature: string, featureIndex: number) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-tuggi-primary rounded-full"></div>
                    <span className="text-sm text-neutral-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Bar */}
        <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">
              {content.certificationsTitle}
            </h3>
            <p className="text-neutral-600">
              {content.certificationsSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {content.certifications.map((cert: any, index: number) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-tuggi-primary/10 to-tuggi-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-tuggi-primary">✓</span>
                </div>
                <div className="font-bold text-neutral-900 mb-1">{cert.name}</div>
                <div className="text-sm text-neutral-600">{cert.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {content.stats.map((stat: any, index: number) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-tuggi-primary mb-2">{stat.value}</div>
              <div className="text-neutral-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;