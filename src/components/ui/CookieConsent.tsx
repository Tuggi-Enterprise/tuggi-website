import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Settings, X, BarChart3, MousePointer2 } from 'lucide-react';
import { setConsent, getConsent, CookieConsent as CookieConsentType } from '../../utils/consent';
import { cookieTranslations } from '../../utils/cookie-translations';

interface CookieConsentProps {
  currentLanguage: string;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ currentLanguage }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookieConsentType>({
    analytics: true,
    clarity: true,
    essential: true,
  });

  const t = cookieTranslations[currentLanguage as keyof typeof cookieTranslations] || cookieTranslations.EN;

  useEffect(() => {
    const consent = getConsent();
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allConsent = { analytics: true, clarity: true, essential: true };
    setConsent(allConsent);
    setIsVisible(false);
  };

  const handleDeclineAll = () => {
    const minConsent = { analytics: false, clarity: false, essential: true };
    setConsent(minConsent);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    setConsent(preferences);
    setIsVisible(false);
  };

  const togglePreference = (key: keyof CookieConsentType) => {
    if (key === 'essential') return;
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-[9999]"
        >
          <div className="bg-white/90 backdrop-blur-xl border border-neutral-200 p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden">
            {!showPreferences ? (
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-tuggi-primary/10 rounded-xl">
                    <Shield className="text-tuggi-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-black text-neutral-900 leading-none">{t.title}</h3>
                </div>
                
                <p className="text-sm text-neutral-600 leading-relaxed font-medium">
                  {t.description}
                </p>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleAcceptAll}
                    className="w-full bg-neutral-900 border-2 border-neutral-900 text-white px-6 py-3.5 rounded-2xl font-bold text-sm tracking-tight hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-neutral-900/10 active:scale-95"
                  >
                    {t.acceptAll}
                  </button>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={handleDeclineAll}
                      className="flex-1 border-2 border-neutral-200 text-neutral-600 px-4 py-3 rounded-2xl font-bold text-sm hover:bg-neutral-50 transition-all active:scale-95"
                    >
                      {t.declineAll}
                    </button>
                    <button
                      onClick={() => setShowPreferences(true)}
                      className="p-3 border-2 border-neutral-200 text-neutral-600 rounded-2xl hover:bg-neutral-50 transition-all group active:scale-95"
                      title={t.preferences}
                    >
                      <Settings size={20} className="group-hover:rotate-45 transition-transform duration-500" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => setShowPreferences(false)}
                    className="flex items-center gap-1 text-xs font-black uppercase tracking-widest text-neutral-400 hover:text-neutral-900 transition-colors"
                  >
                    <X size={14} /> {t.save}
                  </button>
                  <h3 className="text-sm font-black text-neutral-900 uppercase tracking-widest">{t.preferences}</h3>
                </div>

                <div className="space-y-4">
                  {/* Essential */}
                  <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-100 flex items-start gap-3 opacity-80">
                    <div className="p-2 bg-neutral-200 rounded-lg shrink-0">
                      <Shield size={18} className="text-neutral-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-sm text-neutral-800">{t.essential.title}</span>
                        <div className="text-[10px] font-black uppercase text-neutral-400 px-2 py-0.5 border border-neutral-200 rounded-full">Required</div>
                      </div>
                      <p className="text-[11px] text-neutral-500 leading-tight leading-relaxed">{t.essential.description}</p>
                    </div>
                  </div>

                  {/* Analytics */}
                  <button 
                    onClick={() => togglePreference('analytics')}
                    className={`w-full p-4 rounded-2xl border transition-all text-left flex items-start gap-3 ${
                      preferences.analytics ? 'bg-blue-50/50 border-blue-100' : 'bg-white border-neutral-100'
                    }`}
                  >
                    <div className={`p-2 rounded-lg shrink-0 ${
                      preferences.analytics ? 'bg-blue-100 text-blue-600' : 'bg-neutral-100 text-neutral-400'
                    }`}>
                      <BarChart3 size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <span className={`font-bold text-sm ${preferences.analytics ? 'text-blue-900' : 'text-neutral-800'}`}>
                          {t.analytics.title}
                        </span>
                        <div className={`w-10 h-5 rounded-full relative transition-colors ${
                          preferences.analytics ? 'bg-blue-600' : 'bg-neutral-200'
                        }`}>
                          <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${
                            preferences.analytics ? 'left-6' : 'left-1'
                          }`} />
                        </div>
                      </div>
                      <p className="text-[11px] text-neutral-500 leading-tight">{t.analytics.description}</p>
                    </div>
                  </button>

                  {/* Clarity */}
                  <button 
                    onClick={() => togglePreference('clarity')}
                    className={`w-full p-4 rounded-2xl border transition-all text-left flex items-start gap-3 ${
                      preferences.clarity ? 'bg-indigo-50/50 border-indigo-100' : 'bg-white border-neutral-100'
                    }`}
                  >
                    <div className={`p-2 rounded-lg shrink-0 ${
                      preferences.clarity ? 'bg-indigo-100 text-indigo-600' : 'bg-neutral-100 text-neutral-400'
                    }`}>
                      <MousePointer2 size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <span className={`font-bold text-sm ${preferences.clarity ? 'text-indigo-900' : 'text-neutral-800'}`}>
                          {t.clarity.title}
                        </span>
                        <div className={`w-10 h-5 rounded-full relative transition-colors ${
                          preferences.clarity ? 'bg-indigo-600' : 'bg-neutral-200'
                        }`}>
                          <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${
                            preferences.clarity ? 'left-6' : 'left-1'
                          }`} />
                        </div>
                      </div>
                      <p className="text-[11px] text-neutral-500 leading-tight">{t.clarity.description}</p>
                    </div>
                  </button>
                </div>

                <button
                  onClick={handleSavePreferences}
                  className="w-full bg-neutral-900 border-2 border-neutral-900 text-white px-6 py-3.5 rounded-2xl font-bold text-sm tracking-tight hover:scale-[1.02] transition-all active:scale-95"
                >
                  {t.save}
                </button>
              </div>
            )}
            
            {/* Visual Flair */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-tuggi-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-tuggi-secondary/5 rounded-full blur-3xl pointer-events-none" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
