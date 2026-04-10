'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800" />

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

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-blue-200">
          <span className="flex items-center gap-2 text-sm">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
            No credit card required
          </span>
          <span className="flex items-center gap-2 text-sm">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
            Cancel anytime
          </span>
          <span className="flex items-center gap-2 text-sm">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
            AES-256 encrypted
          </span>
          <span className="flex items-center gap-2 text-sm">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
            GDPR compliant
          </span>
          <span className="flex items-center gap-2 text-sm">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
            Bank-grade security
          </span>
        </div>
      </div>
    </section>
  );
}

