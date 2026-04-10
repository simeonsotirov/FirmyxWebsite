'use client';

import { Check } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { APP_URL } from '@/lib/constants';

export default function PricingSection() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-500 uppercase tracking-widest">{t('nav_pricing')}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            {t('pricing_heading')}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">{t('pricing_sub')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Free plan */}
          <div className="relative rounded-2xl p-8 flex flex-col bg-blue-600 text-white shadow-2xl shadow-blue-500/30">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg">
              {t('pricing_recommended')}
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-1 text-white">{t('pricing_free')}</h3>
              <p className="text-xs mb-4 leading-snug text-blue-200">{t('pricing_free_sub')}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-extrabold text-white">{t('pricing_free_price')}</span>
                <span className="text-sm text-blue-200">/{t('pricing_month')}</span>
              </div>
              <p className="text-xs mt-2 text-blue-200">{t('pricing_free_note')}</p>
            </div>
            <ul className="flex-1 space-y-3 mb-8">
              {[
                t('pricing_free_f1'),
                t('pricing_free_f2'),
                t('pricing_free_f3'),
                t('pricing_free_f4'),
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check size={16} className="mt-0.5 flex-shrink-0 text-blue-200" />
                  <span className="text-sm text-blue-100">{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={`${APP_URL}`}
              className="block text-center px-6 py-3 rounded-xl font-semibold text-sm bg-white text-blue-600 hover:bg-blue-50 shadow-lg transition-all"
            >
              {t('pricing_cta_free')}
            </a>
          </div>

          {/* Coming soon */}
          <div className="relative rounded-2xl p-8 flex flex-col bg-gray-50 dark:bg-gray-800 border border-dashed border-gray-200 dark:border-gray-700">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{t('pricing_pro')}</h3>
              <p className="text-xs mb-4 leading-snug text-gray-500 dark:text-gray-400">{t('pricing_pro_sub')}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-extrabold text-gray-300 dark:text-gray-600">{t('pricing_pro_price')}</span>
                <span className="text-sm text-gray-400">/{t('pricing_month')}</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center py-8 gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                <svg className="w-7 h-7 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center max-w-xs">{t('pricing_coming_soon_desc')}</p>
            </div>
            <button
              disabled
              className="block w-full text-center px-6 py-3 rounded-xl font-semibold text-sm bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed"
            >
              {t('pricing_coming_soon')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}