import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Globe, Clock, Users, MessageSquare, Building2, User, Linkedin, Instagram, ArrowRight } from 'lucide-react';

interface ContactFormData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  country: string;
  message: string;
}

interface ContactPageProps {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, language: string) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ 
  currentLanguage = 'EN',
  onCTAClick 
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      EN: {
        badge: 'Contact Us',
        title: 'Let\'s Transform Your Transportation Business',
        subtitle: 'Ready to see how Tuggi Drive can increase your revenue and customer satisfaction? Get in touch for a personalized demo and custom proposal.',
        contactMethods: [
          {
            title: 'Email Us',
            description: 'Get in touch for demos, partnerships, or technical support',
            contact: 'hello@tuggi.app',
            href: 'mailto:hello@tuggi.app'
          },
          {
            title: 'Call Us',
            description: 'Speak directly with our business development team',
            contact: '+55 (11) 9.9471-8809',
            href: 'tel:+55 (11) 9.9471-8809'
          },
          // {
          //   title: 'Visit Us',
          //   description: 'Our headquarters in the heart of San Francisco',
          //   contact: 'San Francisco, CA',
          //   href: 'https://maps.google.com/?q=San+Francisco,+CA'
          // }
        ],
        formTitle: 'Get Your Custom Demo',
        formSubtitle: 'Fill out the form below and we\'ll schedule a personalized demonstration of Tuggi Drive tailored to your business needs.',
        formFields: {
          companyName: {
            label: 'Company Name *',
            placeholder: 'Your transportation company name',
            error: 'Company name is required'
          },
          contactPerson: {
            label: 'Contact Person *',
            placeholder: 'Your full name',
            error: 'Contact person is required'
          },
          email: {
            label: 'Business Email *',
            placeholder: 'your.email@company.com',
            error: 'Email is required',
            invalidError: 'Please enter a valid email address'
          },
          phone: {
            label: 'Phone Number *',
            placeholder: '+55 (11) 9.9471-8809',
            error: 'Phone number is required'
          },
          country: {
            label: 'Country *',
            placeholder: 'Select your country',
            error: 'Please select a country'
          },
          message: {
            label: 'Tell us about your business *',
            placeholder: 'Tell us about your transportation business, fleet size, current challenges, and what you\'d like to achieve with Tuggi Drive...',
            error: 'Message is required',
            minLengthError: 'Message must be at least 10 characters'
          }
        },
        submitButton: 'Request Demo & Proposal',
        submitting: 'Sending...',
        privacyNote: 'By submitting this form, you agree to our privacy policy and terms of service.',
        supportOptions: [
          {
            title: 'Business Development',
            description: 'Partnerships, enterprise sales, and custom solutions',
            email: 'hello@tuggi.app'
          },
          {
            title: 'Technical Support',
            description: 'Implementation help, troubleshooting, and technical questions',
            email: 'hello@tuggi.app'
          },
          {
            title: 'International Expansion',
            description: 'Regional partnerships and market entry opportunities',
            email: 'hello@tuggi.app'
          }
        ],
        supportTitle: 'Specialized Support',
        responseGuarantee: {
          title: 'Quick Response Guarantee',
          items: [
            { type: 'Demo requests:', time: 'Within 4 hours' },
            { type: 'General inquiries:', time: 'Within 24 hours' },
            { type: 'Technical support:', time: 'Within 2 hours' }
          ]
        },
        socialTitle: 'Follow Our Journey',
        socialDescription: 'Stay updated with our latest features, customer success stories, and industry insights.',
        multilingualTitle: 'Multilingual Support Available',
        multilingualDescription: 'Our team speaks your language and understands your local market.',
        languages: [
          { flag: '🇺🇸', name: 'English' },
          { flag: '🇧🇷', name: 'Português' },
          { flag: '🇪🇸', name: 'Español' }
        ],
        encouragementTitle: 'Ready to See Tuggi Drive in Action?',
        encouragementSubtitle: 'Join hundreds of transportation companies worldwide who have transformed their passenger experience and increased revenue with our cultural storytelling platform.',
        encouragementStats: [
          { value: '500+', label: 'Companies Trust Us' },
          { value: '2M+', label: 'Stories Delivered' },
          { value: '4.8/5', label: 'Customer Satisfaction' }
        ],
        scheduleLiveDemo: 'Schedule Live Demo',
        callUsNow: 'Call Us Now',
        successTitle: 'Thank You for Your Interest!',
        successMessage: 'We\'ve received your message and will get back to you within 24 hours. Our team is excited to discuss how Tuggi Drive can transform your transportation business.',
        successNextSteps: {
          title: 'What happens next?',
          steps: [
            'Our team will review your requirements',
            'We\'ll schedule a personalized demo',
            'Receive a custom proposal for your business'
          ]
        },
        sendAnotherMessage: 'Send Another Message',
        countries: [
          'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Spain', 'Italy', 'Netherlands',
          'Brazil', 'Mexico', 'Argentina', 'Colombia', 'Chile', 'Peru', 'Australia', 'Japan', 'South Korea',
          'Singapore', 'India', 'China', 'UAE', 'Saudi Arabia', 'South Africa', 'Other'
        ]
      },
      PT: {
        badge: 'Contato',
        title: 'Vamos Transformar Seu Negócio de Transporte',
        subtitle: 'Pronto para ver como o Tuggi Drive pode aumentar sua receita e satisfação do cliente? Entre em contato para uma demonstração personalizada e proposta customizada.',
        contactMethods: [
          {
            title: 'Envie Email',
            description: 'Entre em contato para demos, parcerias ou suporte técnico',
            contact: 'hello@tuggi.app',
            href: 'mailto:hello@tuggi.app'
          },
          {
            title: 'Ligue para Nós',
            description: 'Fale diretamente com nossa equipe de desenvolvimento de negócios',
            contact: '+55 (11) 9.9471-8809',
            href: 'tel:+55 (11) 9.9471-8809'
          },
          // {
          //   title: 'Visite-nos',
          //   description: 'Nossa sede no coração de San Francisco',
          //   contact: 'San Francisco, CA',
          //   href: 'https://maps.google.com/?q=San+Francisco,+CA'
          // }
        ],
        formTitle: 'Obtenha Sua Demo Personalizada',
        formSubtitle: 'Preencha o formulário abaixo e agendaremos uma demonstração personalizada do Tuggi Drive adaptada às necessidades do seu negócio.',
        formFields: {
          companyName: {
            label: 'Nome da Empresa *',
            placeholder: 'Nome da sua empresa de transporte',
            error: 'Nome da empresa é obrigatório'
          },
          contactPerson: {
            label: 'Pessoa de Contato *',
            placeholder: 'Seu nome completo',
            error: 'Pessoa de contato é obrigatória'
          },
          email: {
            label: 'Email Empresarial *',
            placeholder: 'seu.email@empresa.com',
            error: 'Email é obrigatório',
            invalidError: 'Por favor, insira um endereço de email válido'
          },
          phone: {
            label: 'Número de Telefone *',
            placeholder: '+55 (11) 99999-9999',
            error: 'Número de telefone é obrigatório'
          },
          country: {
            label: 'País *',
            placeholder: 'Selecione seu país',
            error: 'Por favor, selecione um país'
          },
          message: {
            label: 'Conte-nos sobre seu negócio *',
            placeholder: 'Conte-nos sobre seu negócio de transporte, tamanho da frota, desafios atuais e o que gostaria de alcançar com o Tuggi Drive...',
            error: 'Mensagem é obrigatória',
            minLengthError: 'Mensagem deve ter pelo menos 10 caracteres'
          }
        },
        submitButton: 'Solicitar Demo e Proposta',
        submitting: 'Enviando...',
        privacyNote: 'Ao enviar este formulário, você concorda com nossa política de privacidade e termos de serviço.',
        supportOptions: [
          {
            title: 'Desenvolvimento de Negócios',
            description: 'Parcerias, vendas empresariais e soluções personalizadas',
            email: 'hello@tuggi.app'
          },
          {
            title: 'Suporte Técnico',
            description: 'Ajuda com implementação, solução de problemas e questões técnicas',
            email: 'hello@tuggi.app'
          },
          {
            title: 'Expansão Internacional',
            description: 'Parcerias regionais e oportunidades de entrada no mercado',
            email: 'hello@tuggi.app'
          }
        ],
        supportTitle: 'Suporte Especializado',
        responseGuarantee: {
          title: 'Garantia de Resposta Rápida',
          items: [
            { type: 'Solicitações de demo:', time: 'Em até 4 horas' },
            { type: 'Consultas gerais:', time: 'Em até 24 horas' },
            { type: 'Suporte técnico:', time: 'Em até 2 horas' }
          ]
        },
        socialTitle: 'Siga Nossa Jornada',
        socialDescription: 'Mantenha-se atualizado com nossos recursos mais recentes, histórias de sucesso de clientes e insights da indústria.',
        multilingualTitle: 'Suporte Multilíngue Disponível',
        multilingualDescription: 'Nossa equipe fala seu idioma e entende seu mercado local.',
        languages: [
          { flag: '🇺🇸', name: 'English' },
          { flag: '🇧🇷', name: 'Português' },
          { flag: '🇪🇸', name: 'Español' }
        ],
        encouragementTitle: 'Pronto para Ver o Tuggi Drive em Ação?',
        encouragementSubtitle: 'Junte-se a centenas de empresas de transporte mundialmente que transformaram sua experiência de passageiros e aumentaram receita com nossa plataforma de narrativa cultural.',
        encouragementStats: [
          { value: '500+', label: 'Empresas Confiam em Nós' },
          { value: '2M+', label: 'Histórias Entregues' },
          { value: '4.8/5', label: 'Satisfação do Cliente' }
        ],
        scheduleLiveDemo: 'Agendar Demo ao Vivo',
        callUsNow: 'Ligue Agora',
        successTitle: 'Obrigado pelo Seu Interesse!',
        successMessage: 'Recebemos sua mensagem e entraremos em contato em até 24 horas. Nossa equipe está animada para discutir como o Tuggi Drive pode transformar seu negócio de transporte.',
        successNextSteps: {
          title: 'O que acontece a seguir?',
          steps: [
            'Nossa equipe revisará seus requisitos',
            'Agendaremos uma demo personalizada',
            'Você receberá uma proposta customizada para seu negócio'
          ]
        },
        sendAnotherMessage: 'Enviar Outra Mensagem',
        countries: [
          'Estados Unidos', 'Canadá', 'Reino Unido', 'Alemanha', 'França', 'Espanha', 'Itália', 'Holanda',
          'Brasil', 'México', 'Argentina', 'Colômbia', 'Chile', 'Peru', 'Austrália', 'Japão', 'Coreia do Sul',
          'Singapura', 'Índia', 'China', 'Emirados Árabes Unidos', 'Arábia Saudita', 'África do Sul', 'Outro'
        ]
      },
      ES: {
        badge: 'Contacto',
        title: 'Transformemos Su Negocio de Transporte',
        subtitle: '¿Listo para ver cómo Tuggi Drive puede aumentar sus ingresos y satisfacción del cliente? Póngase en contacto para una demostración personalizada y propuesta a medida.',
        contactMethods: [
          {
            title: 'Envíenos Email',
            description: 'Póngase en contacto para demos, asociaciones o soporte técnico',
            contact: 'hello@tuggi.app',
            href: 'mailto:hello@tuggi.app'
          },
          {
            title: 'Llámenos',
            description: 'Hable directamente con nuestro equipo de desarrollo de negocios',
            contact: '+55 (11) 9.9471-8809',
            href: 'tel:+55 (11) 9.9471-8809'
          },
          // {
          //   title: 'Visítenos',
          //   description: 'Nuestra sede en el corazón de San Francisco',
          //   contact: 'San Francisco, CA',
          //   href: 'https://maps.google.com/?q=San+Francisco,+CA'
          // }
        ],
        formTitle: 'Obtenga Su Demo Personalizada',
        formSubtitle: 'Complete el formulario a continuación y programaremos una demostración personalizada de Tuggi Drive adaptada a las necesidades de su negocio.',
        formFields: {
          companyName: {
            label: 'Nombre de la Empresa *',
            placeholder: 'Nombre de su empresa de transporte',
            error: 'El nombre de la empresa es obligatorio'
          },
          contactPerson: {
            label: 'Persona de Contacto *',
            placeholder: 'Su nombre completo',
            error: 'La persona de contacto es obligatoria'
          },
          email: {
            label: 'Email Empresarial *',
            placeholder: 'su.email@empresa.com',
            error: 'El email es obligatorio',
            invalidError: 'Por favor, ingrese una dirección de email válida'
          },
          phone: {
            label: 'Número de Teléfono *',
            placeholder: '+34 (91) 123-4567',
            error: 'El número de teléfono es obligatorio'
          },
          country: {
            label: 'País *',
            placeholder: 'Seleccione su país',
            error: 'Por favor, seleccione un país'
          },
          message: {
            label: 'Cuéntenos sobre su negocio *',
            placeholder: 'Cuéntenos sobre su negocio de transporte, tamaño de flota, desafíos actuales y lo que le gustaría lograr con Tuggi Drive...',
            error: 'El mensaje es obligatorio',
            minLengthError: 'El mensaje debe tener al menos 10 caracteres'
          }
        },
        submitButton: 'Solicitar Demo y Propuesta',
        submitting: 'Enviando...',
        privacyNote: 'Al enviar este formulario, acepta nuestra política de privacidad y términos de servicio.',
        supportOptions: [
          {
            title: 'Desarrollo de Negocios',
            description: 'Asociaciones, ventas empresariales y soluciones personalizadas',
            email: 'hello@tuggi.app'
          },
          {
            title: 'Soporte Técnico',
            description: 'Ayuda con implementación, solución de problemas y preguntas técnicas',
            email: 'hello@tuggi.app'
          },
          {
            title: 'Expansión Internacional',
            description: 'Asociaciones regionales y oportunidades de entrada al mercado',
            email: 'hello@tuggi.app'
          }
        ],
        supportTitle: 'Soporte Especializado',
        responseGuarantee: {
          title: 'Garantía de Respuesta Rápida',
          items: [
            { type: 'Solicitudes de demo:', time: 'En 4 horas' },
            { type: 'Consultas generales:', time: 'En 24 horas' },
            { type: 'Soporte técnico:', time: 'En 2 horas' }
          ]
        },
        socialTitle: 'Siga Nuestro Recorrido',
        socialDescription: 'Manténgase actualizado con nuestras últimas características, historias de éxito de clientes y perspectivas de la industria.',
        multilingualTitle: 'Soporte Multilingüe Disponible',
        multilingualDescription: 'Nuestro equipo habla su idioma y entiende su mercado local.',
        languages: [
          { flag: '🇺🇸', name: 'English' },
          { flag: '🇧🇷', name: 'Português' },
          { flag: '🇪🇸', name: 'Español' }
        ],
        encouragementTitle: '¿Listo para Ver Tuggi Drive en Acción?',
        encouragementSubtitle: 'Únase a cientos de empresas de transporte mundialmente que han transformado su experiencia de pasajeros y aumentado ingresos con nuestra plataforma de narrativa cultural.',
        encouragementStats: [
          { value: '500+', label: 'Empresas Confían en Nosotros' },
          { value: '2M+', label: 'Historias Entregadas' },
          { value: '4.8/5', label: 'Satisfacción del Cliente' }
        ],
        scheduleLiveDemo: 'Programar Demo en Vivo',
        callUsNow: 'Llámenos Ahora',
        successTitle: '¡Gracias por Su Interés!',
        successMessage: 'Hemos recibido su mensaje y nos pondremos en contacto en 24 horas. Nuestro equipo está emocionado de discutir cómo Tuggi Drive puede transformar su negocio de transporte.',
        successNextSteps: {
          title: '¿Qué sucede a continuación?',
          steps: [
            'Nuestro equipo revisará sus requisitos',
            'Programaremos una demo personalizada',
            'Recibirá una propuesta personalizada para su negocio'
          ]
        },
        sendAnotherMessage: 'Enviar Otro Mensaje',
        countries: [
          'Estados Unidos', 'Canadá', 'Reino Unido', 'Alemania', 'Francia', 'España', 'Italia', 'Países Bajos',
          'Brasil', 'México', 'Argentina', 'Colombia', 'Chile', 'Perú', 'Australia', 'Japón', 'Corea del Sur',
          'Singapur', 'India', 'China', 'Emiratos Árabes Unidos', 'Arabia Saudita', 'Sudáfrica', 'Otro'
        ]
      }
    };
    return content[language] || content['EN'];
  };

  const content = getLocalizedContent(currentLanguage);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = content.formFields.companyName.error;
    }

    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = content.formFields.contactPerson.error;
    }

    if (!formData.email.trim()) {
      newErrors.email = content.formFields.email.error;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = content.formFields.email.invalidError;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = content.formFields.phone.error;
    }

    if (!formData.country) {
      newErrors.country = content.formFields.country.error;
    }

    if (!formData.message.trim()) {
      newErrors.message = content.formFields.message.error;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = content.formFields.message.minLengthError;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const trackFormSubmission = (success: boolean) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_submission', {
        event_category: 'Contact Form',
        event_label: success ? 'Success' : 'Error',
        success: success,
        company_name: formData.companyName,
        country: formData.country,
        language: currentLanguage,
        timestamp: new Date().toISOString()
      });
    }
  };

  const trackLinkClick = (linkType: string, destination: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'link_click', {
        event_category: 'Contact Page',
        event_label: linkType,
        destination: destination,
        language: currentLanguage,
        timestamp: new Date().toISOString()
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Track successful submission
      trackFormSubmission(true);
      
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        country: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      trackFormSubmission(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCTAClick = (ctaType: string) => {
    onCTAClick?.(ctaType, currentLanguage);
  };

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/tuggi',
      color: 'hover:text-[#0077B5]'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      href: 'https://instagram.com/tuggi',
      color: 'hover:text-[#E4405F]'
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-green-200">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              {content.successTitle}
            </h1>
            
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              {content.successMessage}
            </p>
            
            <div className="bg-gradient-to-r from-tuggi-primary/10 to-tuggi-secondary/10 rounded-2xl p-6 mb-8 border border-tuggi-primary/20">
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">{content.successNextSteps.title}</h3>
              <div className="space-y-2 text-neutral-700">
                {content.successNextSteps.steps.map((step: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      index === 0 ? 'bg-tuggi-primary' : 
                      index === 1 ? 'bg-tuggi-secondary' : 'bg-green-500'
                    }`}></div>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={() => setIsSubmitted(false)}
              className="bg-tuggi-primary hover:bg-tuggi-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1"
            >
              {content.sendAnotherMessage}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-50 via-white to-tuggi-primary/5 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-tuggi-primary/5 to-tuggi-secondary/5"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(0,168,232,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-tuggi-primary/10 rounded-full mb-8">
              <MessageSquare className="w-5 h-5 text-tuggi-primary mr-2" />
              <span className="text-tuggi-primary font-semibold text-sm">{content.badge}</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-8">
              {content.title}
            </h1>
            
            <p className="text-xl lg:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              {content.subtitle}
            </p>
          </div>

          {/* Quick Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {content.contactMethods.map((method: any, index: number) => (
              <a
                key={index}
                href={method.href}
                onClick={() => trackLinkClick('contact_method', method.href)}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                  index === 0 ? 'from-tuggi-primary to-blue-600' :
                  index === 1 ? 'from-tuggi-secondary to-orange-600' :
                  'from-green-500 to-emerald-600'
                } flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {index === 0 && <Mail className="w-8 h-8 text-white" />}
                  {index === 1 && <Phone className="w-8 h-8 text-white" />}
                  {index === 2 && <MapPin className="w-8 h-8 text-white" />}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-tuggi-primary transition-colors duration-300">
                  {method.title}
                </h3>
                <p className="text-neutral-600 text-sm mb-3">
                  {method.description}
                </p>
                <div className="font-semibold text-tuggi-primary">
                  {method.contact}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Support Options */}
      {/* <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16"> */}
           
            {/* <div>
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                  {content.formTitle}
                </h2>
                <p className="text-lg text-neutral-600">
                  {content.formSubtitle}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div>
                  <label htmlFor="companyName" className="block text-sm font-semibold text-neutral-700 mb-2">
                    {content.formFields.companyName.label}
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className={`w-full pl-12 pr-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-tuggi-primary transition-colors duration-200 ${
                        errors.companyName ? 'border-red-500' : 'border-neutral-300 focus:border-tuggi-primary'
                      }`}
                      placeholder={content.formFields.companyName.placeholder}
                    />
                  </div>
                  {errors.companyName && (
                    <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>
                  )}
                </div>

               
                <div>
                  <label htmlFor="contactPerson" className="block text-sm font-semibold text-neutral-700 mb-2">
                    {content.formFields.contactPerson.label}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <input
                      type="text"
                      id="contactPerson"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      className={`w-full pl-12 pr-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-tuggi-primary transition-colors duration-200 ${
                        errors.contactPerson ? 'border-red-500' : 'border-neutral-300 focus:border-tuggi-primary'
                      }`}
                      placeholder={content.formFields.contactPerson.placeholder}
                    />
                  </div>
                  {errors.contactPerson && (
                    <p className="mt-1 text-sm text-red-600">{errors.contactPerson}</p>
                  )}
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                      {content.formFields.email.label}
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-tuggi-primary transition-colors duration-200 ${
                          errors.email ? 'border-red-500' : 'border-neutral-300 focus:border-tuggi-primary'
                        }`}
                        placeholder={content.formFields.email.placeholder}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-2">
                      {content.formFields.phone.label}
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-tuggi-primary transition-colors duration-200 ${
                          errors.phone ? 'border-red-500' : 'border-neutral-300 focus:border-tuggi-primary'
                        }`}
                        placeholder={content.formFields.phone.placeholder}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>
                </div>

               
                <div>
                  <label htmlFor="country" className="block text-sm font-semibold text-neutral-700 mb-2">
                    {content.formFields.country.label}
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className={`w-full pl-12 pr-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-tuggi-primary transition-colors duration-200 appearance-none ${
                        errors.country ? 'border-red-500' : 'border-neutral-300 focus:border-tuggi-primary'
                      }`}
                    >
                      <option value="">{content.formFields.country.placeholder}</option>
                      {content.countries.map((country: string) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.country && (
                    <p className="mt-1 text-sm text-red-600">{errors.country}</p>
                  )}
                </div>

               
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
                    {content.formFields.message.label}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-tuggi-primary transition-colors duration-200 resize-vertical ${
                      errors.message ? 'border-red-500' : 'border-neutral-300 focus:border-tuggi-primary'
                    }`}
                    placeholder={content.formFields.message.placeholder}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-tuggi-primary hover:bg-tuggi-primary-dark disabled:bg-neutral-400 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none disabled:shadow-none flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>{content.submitting}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{content.submitButton}</span>
                    </>
                  )}
                </button>

                <p className="text-sm text-neutral-500 text-center">
                  {content.privacyNote}
                </p>
              </form>
            </div> */}

            {/* Support Options & Additional Info */}
            {/* <div className="space-y-8"> */}
              
              {/* <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                  {content.supportTitle}
                </h3>
                <div className="space-y-4">
                  {content.supportOptions.map((option: any, index: number) => (
                    <div key={index} className="bg-gradient-to-r from-neutral-50 to-tuggi-primary/5 rounded-xl p-6 border border-neutral-200">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-tuggi-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          {index === 0 && <Users className="w-6 h-6 text-tuggi-primary" />}
                          {index === 1 && <MessageSquare className="w-6 h-6 text-tuggi-primary" />}
                          {index === 2 && <Globe className="w-6 h-6 text-tuggi-primary" />}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                            {option.title}
                          </h4>
                          <p className="text-neutral-600 mb-3">
                            {option.description}
                          </p>
                          <a
                            href={`mailto:${option.email}`}
                            onClick={() => trackLinkClick('support_email', option.email)}
                            className="text-tuggi-primary hover:text-tuggi-primary-dark font-semibold transition-colors duration-200"
                          >
                            {option.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}

              
              {/* <div className="bg-gradient-to-br from-tuggi-primary/10 to-tuggi-secondary/10 rounded-2xl p-8 border border-tuggi-primary/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-tuggi-primary" />
                  <h3 className="text-xl font-bold text-neutral-900">
                    {content.responseGuarantee.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {content.responseGuarantee.items.map((item: any, index: number) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        index === 0 ? 'bg-green-500' : 
                        index === 1 ? 'bg-tuggi-primary' : 'bg-tuggi-secondary'
                      }`}></div>
                      <span className="text-neutral-700"><strong>{item.type}</strong> {item.time}</span>
                    </div>
                  ))}
                </div>
              </div> */}

              
              {/* <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  {content.socialTitle}
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      onClick={() => trackLinkClick('social_media', social.href)}
                      className={`p-3 rounded-lg bg-neutral-100 text-neutral-600 ${social.color} hover:bg-neutral-200 transition-all duration-200 hover:scale-105`}
                      aria-label={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
                <p className="text-sm text-neutral-600 mt-3">
                  {content.socialDescription}
                </p>
              </div> */}

              {/* <div className="bg-white rounded-2xl p-6 border-2 border-neutral-200 shadow-sm">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  {content.multilingualTitle}
                </h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  {content.languages.map((lang: any, index: number) => (
                    <div key={index} className="p-3 bg-tuggi-primary/5 rounded-lg">
                      <div className="text-2xl mb-2">{lang.flag}</div>
                      <div className="text-sm font-semibold text-neutral-800">{lang.name}</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-neutral-600 mt-4 text-center">
                  {content.multilingualDescription}
                </p>
              </div> */}
            {/* </div> */}
          {/* </div>
        </div>
      </section> */}

      {/* Encouragement Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-tuggi-primary/5 to-tuggi-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
            {content.encouragementTitle}
          </h2>
          {/* <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
            {content.encouragementSubtitle}
          </p> */}
          
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {content.encouragementStats.map((stat: any, index: number) => (
              <div key={index} className="text-center">
                <div className={`text-3xl font-bold mb-2 ${
                  index === 0 ? 'text-tuggi-primary' : 
                  index === 1 ? 'text-tuggi-secondary' : 'text-green-600'
                }`}>{stat.value}</div>
                <div className="text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div> */}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleCTAClick('schedule_live_demo')}
              className="bg-tuggi-primary hover:bg-tuggi-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
            >
              <span>{content.scheduleLiveDemo}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => handleCTAClick('call_us_now')}
              className="border-2 border-tuggi-primary text-tuggi-primary hover:bg-tuggi-primary hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              {content.callUsNow}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;