import React from 'react';

interface FinalCTASectionProps {
  title: string;
  subtitle: string;
  primaryButtonLabel: string;
  primaryButtonOnClick: () => void;
  secondaryButtonLabel: string;
  secondaryButtonOnClick: () => void;
  contactInfo: string;
  email: string;
  emailOnClick?: () => void;
  phone: string;
  phoneOnClick?: () => void;
  backgroundClass?: string;
  subtitleClass?: string;
  contactInfoClass?: string;
  linkClass?: string;
}

const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  title,
  subtitle,
  primaryButtonLabel,
  primaryButtonOnClick,
  secondaryButtonLabel,
  secondaryButtonOnClick,
  contactInfo,
  email,
  emailOnClick,
  phone,
  phoneOnClick,
  backgroundClass = 'bg-gradient-to-br from-tuggi-primary to-tuggi-primary-dark',
  subtitleClass = 'text-tuggi-primary-light',
  contactInfoClass = 'text-tuggi-primary-light',
  linkClass = 'hover:text-tuggi-primary-light text-white',
}) => (
  <section className={`py-20 lg:py-24 ${backgroundClass}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
        {title}
      </h2>
      <p className={`text-xl max-w-3xl mx-auto mb-8 ${subtitleClass}`}>
        {subtitle}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={primaryButtonOnClick}
          className="bg-white hover:bg-neutral-100 text-tuggi-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
        >
          <span>{primaryButtonLabel}</span>
        </button>
        <button
          onClick={secondaryButtonOnClick}
          className="border-2 border-white text-white hover:bg-white hover:text-tuggi-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200"
        >
          {secondaryButtonLabel}
        </button>
      </div>
      {/* Contact Info */}
      <div className="mt-12 pt-8 border-t border-tuggi-primary-light/30">
        <p className={`${contactInfoClass} mb-4`}>
          {contactInfo}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8">
          <a
            href={`mailto:${email}`}
            onClick={emailOnClick}
            className={`${linkClass} transition-colors duration-200`}
          >
            📧 {email}
          </a>
          <a
            href={`tel:${phone}`}
            onClick={phoneOnClick}
            className={`${linkClass} transition-colors duration-200`}
          >
            📞 {phone}
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default FinalCTASection; 