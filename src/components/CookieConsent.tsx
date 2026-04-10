'use client';

import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

const STORAGE_KEY = 'firmyx_cookie_consent';

type ConsentChoice = 'accepted' | 'essential';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show when no prior consent is stored
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      // localStorage may be unavailable (e.g. private browsing on some browsers)
    }
  }, []);

  const save = (choice: ConsentChoice) => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // Silent fail — do not crash if storage is unavailable
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[200] px-4 pb-4 sm:pb-6"
    >
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        {/* Top accent line */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-blue-700" />

        <div className="p-5 sm:p-6">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="flex-shrink-0 mt-0.5 w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
              <Cookie size={18} className="text-blue-500" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                We value your privacy
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                We use cookies and similar technologies to improve your browsing experience,
                analyse site traffic, and personalise content. Strictly necessary cookies are
                always active. By clicking{' '}
                <strong className="font-semibold text-gray-700 dark:text-gray-300">
                  Accept All
                </strong>
                , you consent to all cookies. Choose{' '}
                <strong className="font-semibold text-gray-700 dark:text-gray-300">
                  Essential Only
                </strong>{' '}
                to limit cookies to what is strictly required for the site to function. For
                more information, please read our{' '}
                <a
                  href="/cookies"
                  className="text-blue-500 underline underline-offset-2 hover:text-blue-600 transition-colors"
                >
                  Cookie Policy
                </a>{' '}
                and{' '}
                <a
                  href="/privacy"
                  className="text-blue-500 underline underline-offset-2 hover:text-blue-600 transition-colors"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            {/* Dismiss — stores "essential" (least intrusive action) */}
            <button
              onClick={() => save('essential')}
              className="flex-shrink-0 p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Dismiss and use essential cookies only"
            >
              <X size={16} />
            </button>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 mt-5 sm:pl-[3.25rem]">
            <button
              onClick={() => save('accepted')}
              className="sm:w-auto px-5 py-2 text-sm font-semibold rounded-lg bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white transition-colors"
            >
              Accept All
            </button>
            <button
              onClick={() => save('essential')}
              className="sm:w-auto px-5 py-2 text-sm font-semibold rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
            >
              Essential Only
            </button>
            <a
              href="/cookies"
              className="sm:ml-auto text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors self-center text-center"
            >
              Manage preferences
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
