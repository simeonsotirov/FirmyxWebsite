'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6">
          {t('cta_heading')}
        </h2>
        <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t('cta_sub')}
        </p>
        <a
          href="https://app.firmyx.com/register"
          className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold rounded-xl bg-white text-blue-600 hover:bg-blue-50 shadow-2xl shadow-blue-900/30 transition-all hover:-translate-y-0.5"
        >
          {t('cta_button')} →
        </a>
      </div>
    </section>
  );
}
