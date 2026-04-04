'use client';

import { TrendingUp, Calendar, Sparkles, FileText } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function TrustBar() {
  const { t } = useLanguage();

  const stats = [
    { icon: TrendingUp, label: t('trust_industries') },
    { icon: Calendar, label: t('trust_forecasts') },
    { icon: Sparkles, label: t('trust_ai') },
    { icon: FileText, label: t('trust_reports') },
  ];

  return (
    <section className="border-y border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                <Icon size={20} className="text-blue-500" />
              </div>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
