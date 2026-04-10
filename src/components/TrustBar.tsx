'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function TrustBar() {
  const { t } = useLanguage();

  const stats = [
    { value: '269', label: t('trust_tests') },
    { value: '89%', label: t('trust_accuracy') },
    { value: '18', label: t('trust_industries') },
    { value: '94 sec', label: t('trust_setup') },
  ];

  return (
    <section className="border-y border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x-0 lg:divide-x divide-gray-200 dark:divide-gray-800">
          {stats.map(({ value, label }, i) => (
            <div key={i} className={`flex flex-col items-center text-center ${i > 0 ? 'lg:pl-8' : ''}`}>
              <span className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">{value}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
