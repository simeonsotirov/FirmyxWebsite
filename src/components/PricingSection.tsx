'use client';

import { Check } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function PricingSection() {
  const { t } = useLanguage();

  const plans = [
    {
      name: t('pricing_free'),
      sub: t('pricing_free_sub'),
      price: t('pricing_free_price'),
      period: t('pricing_month'),
      yearlyNote: null,
      features: [
        '1 business profile',
        'Basic financial health score',
        '3-month forecast',
        'Unlimited financial records',
        'Email support',
        'Community support',
      ],
      cta: t('pricing_cta_free'),
      href: 'https://app.firmyx.com/register',
      highlight: false,
      badge: null,
    },
    {
      name: t('pricing_pro'),
      sub: t('pricing_pro_sub'),
      price: t('pricing_pro_price'),
      period: t('pricing_month'),
      yearlyNote: t('pricing_pro_yearly'),
      features: [
        'Up to 10 business profiles',
        'Full AI financial advisor',
        '12-month forecast',
        'Multi-year historical analysis',
        'What-if scenario analysis',
        'PDF report exports',
        'Priority email support',
      ],
      cta: t('pricing_cta_free'),
      href: 'https://app.firmyx.com/register',
      highlight: true,
      badge: t('pricing_recommended'),
    },
    {
      name: t('pricing_enterprise'),
      sub: t('pricing_enterprise_sub'),
      price: t('pricing_enterprise_price'),
      period: t('pricing_month'),
      yearlyNote: null,
      features: [
        'Unlimited profiles',
        'Custom AI models',
        'API access',
        'Dedicated account manager',
        'SLA guarantee',
        'Custom integrations',
      ],
      cta: t('pricing_cta_contact'),
      href: 'mailto:sales@firmyx.com',
      highlight: false,
      badge: null,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-500 uppercase tracking-widest">{t('nav_pricing')}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            {t('pricing_heading')}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">{t('pricing_sub')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlight
                  ? 'bg-blue-600 text-white shadow-2xl shadow-blue-500/30 scale-105'
                  : 'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs mb-4 leading-snug ${plan.highlight ? 'text-blue-200' : 'text-gray-500 dark:text-gray-400'}`}>
                  {plan.sub}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-extrabold ${plan.highlight ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-sm ${plan.highlight ? 'text-blue-200' : 'text-gray-500 dark:text-gray-400'}`}>
                      /{plan.period}
                    </span>
                  )}
                </div>
                {plan.yearlyNote && (
                  <p className={`text-xs mt-1 ${plan.highlight ? 'text-blue-200' : 'text-gray-500 dark:text-gray-400'}`}>
                    {plan.yearlyNote}
                  </p>
                )}
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className={`mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-blue-200' : 'text-green-500'}`}
                    />
                    <span className={`text-sm ${plan.highlight ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                className={`block text-center px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.highlight
                    ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

