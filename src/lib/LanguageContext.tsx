'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Lang, TranslationKey } from './translations';

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  setLang: () => {},
  t: (key) => translations.en[key],
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  // Sync language from localStorage after mount (avoids hydration mismatch)
  useEffect(() => {
    // Check URL param first (used by mobile language toggle)
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang === 'en' || urlLang === 'bg') {
      setLangState(urlLang);
      localStorage.setItem('firmyx-lang', urlLang);
      // Clean URL without reload
      window.history.replaceState({}, '', window.location.pathname);
      return;
    }

    const stored = localStorage.getItem('firmyx-lang') as Lang | null;
    if (stored && (stored === 'en' || stored === 'bg')) {
      setLangState(stored);
    }

    // Listen for native toggle from mobile menu
    const onLangChange = (e: Event) => {
      const next = (e as CustomEvent).detail as Lang;
      if (next === 'en' || next === 'bg') setLangState(next);
    };
    window.addEventListener('firmyx-lang-change', onLangChange);
    return () => window.removeEventListener('firmyx-lang-change', onLangChange);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== 'undefined') {
      localStorage.setItem('firmyx-lang', l);
    }
  };

  const t = (key: TranslationKey): string => translations[lang][key];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
