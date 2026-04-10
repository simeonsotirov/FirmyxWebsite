'use client';

import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function FAQSection() {
  const { t } = useLanguage();

  const faqs = [
    { q: t('faq_q1'), a: t('faq_a1') },
    { q: t('faq_q2'), a: t('faq_a2') },
    { q: t('faq_q3'), a: t('faq_a3') },
    { q: t('faq_q4'), a: t('faq_a4') },
    { q: t('faq_q5'), a: t('faq_a5') },
    { q: t('faq_q6'), a: t('faq_a6') },
    { q: t('faq_q7'), a: t('faq_a7') },
    { q: t('faq_q8'), a: t('faq_a8') },
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-500 uppercase tracking-widest">{t('nav_faq')}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            {t('faq_heading')}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">{t('faq_sub')}</p>
        </div>

        <div className="space-y-3">
          {faqs.map(({ q, a }, idx) => (
            <details
              key={idx}
              className="group bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden"
            >
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="font-semibold text-gray-900 dark:text-white group-open:text-blue-500 transition-colors">
                  {q}
                </span>
                <ChevronDown
                  size={18}
                  className="flex-shrink-0 text-gray-400 transition-transform duration-300 group-open:rotate-180 group-open:text-blue-500"
                />
              </summary>
              <div className="px-6 pb-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-4">
                {a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
