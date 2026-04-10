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
      aria-label={isEn ? 'Cookie notice' : 'Ð£Ð²ÐµÐ´Ð¾Ð¼Ð»ÐµÐ½Ð¸Ðµ Ð·Ð° Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸'}
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
                {isEn ? 'We use essential cookies' : 'Ð˜Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ð¼Ðµ Ð½ÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸'}
              </h2>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                {isEn
                  ? 'We use only strictly necessary cookies to ensure the platform functions properly, including authentication and security. We do not use tracking, analytics, or marketing cookies.'
                  : 'Ð˜Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ð¼Ðµ ÑÐ°Ð¼Ð¾ ÑÑ‚Ñ€Ð¸ÐºÑ‚Ð½Ð¾ Ð½ÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ Ð·Ð° Ð½Ð¾Ñ€Ð¼Ð°Ð»Ð½Ð¾Ñ‚Ð¾ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¾Ð½Ð¸Ñ€Ð°Ð½Ðµ Ð½Ð° Ð¿Ð»Ð°Ñ‚Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚Ð°, Ð²ÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÐµÐ»Ð½Ð¾ ÑƒÐ´Ð¾ÑÑ‚Ð¾Ð²ÐµÑ€ÑÐ²Ð°Ð½Ðµ Ð¸ ÑÐ¸Ð³ÑƒÑ€Ð½Ð¾ÑÑ‚. ÐÐµ Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ð¼Ðµ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ Ð·Ð° Ð¿Ñ€Ð¾ÑÐ»ÐµÐ´ÑÐ²Ð°Ð½Ðµ, Ð°Ð½Ð°Ð»Ð¸Ð·Ð¸ Ð¸Ð»Ð¸ Ð¼Ð°Ñ€ÐºÐµÑ‚Ð¸Ð½Ð³.'}
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
                    {isEn ? 'Cookie Policy' : 'Ð‘Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸'}
                  </a>
                  <span className="text-gray-700">Â·</span>
                  <a
                    href="/privacy"
                    className="hover:text-white transition-colors underline underline-offset-2"
                  >
                    {isEn ? 'Privacy Policy' : 'ÐŸÐ¾Ð²ÐµÑ€Ð¸Ñ‚ÐµÐ»Ð½Ð¾ÑÑ‚'}
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
