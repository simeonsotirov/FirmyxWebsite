'use client';

import { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const STORAGE_KEY = 'firmyx_cookie_dismissed';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // localStorage may be unavailable
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // Silent fail
    }
    setVisible(false);
  };

  if (!visible) return null;

  const isEn = lang === 'en';

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label={isEn ? 'Cookie notice' : 'Уведомление за бисквитки'}
      className="fixed bottom-0 left-0 right-0 z-[200] px-4 pb-4 sm:pb-6"
    >
      <div className="max-w-2xl mx-auto bg-gray-950 rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
        <div className="p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-0.5 w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center">
              <Cookie size={18} className="text-gray-400" />
            </div>

            <div className="flex-1 min-w-0">
              <h2 className="text-sm font-semibold text-white mb-1">
                {isEn ? 'We use essential cookies' : 'Използваме необходими бисквитки'}
              </h2>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                {isEn
                  ? 'We use only strictly necessary cookies to ensure the platform functions properly, including authentication and security. We do not use tracking, analytics, or marketing cookies.'
                  : 'Използваме само стриктно необходими бисквитки за нормалното функциониране на платформата, включително удостоверяване и сигурност. Не използваме бисквитки за проследяване, анализи или маркетинг.'}
              </p>

              <div className="flex items-center gap-4">
                <button
                  onClick={dismiss}
                  className="px-5 py-2 text-sm font-semibold rounded-lg bg-white text-gray-900 hover:bg-gray-200 transition-colors"
                >
                  OK
                </button>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <a
                    href="/cookies"
                    className="hover:text-white transition-colors underline underline-offset-2"
                  >
                    {isEn ? 'Cookie Policy' : 'Бисквитки'}
                  </a>
                  <span className="text-gray-700">·</span>
                  <a
                    href="/privacy"
                    className="hover:text-white transition-colors underline underline-offset-2"
                  >
                    {isEn ? 'Privacy Policy' : 'Поверителност'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
