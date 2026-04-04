'use client';

import { Activity, Bot, TrendingUp, GitBranch, FileText, Upload } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function FeaturesSection() {
  const { t } = useLanguage();

  const features = [
    { icon: Activity, title: t('feature_health_title'), desc: t('feature_health_desc'), color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
    { icon: Bot, title: t('feature_ai_title'), desc: t('feature_ai_desc'), color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-900/20' },
    { icon: TrendingUp, title: t('feature_forecast_title'), desc: t('feature_forecast_desc'), color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-900/20' },
    { icon: GitBranch, title: t('feature_scenario_title'), desc: t('feature_scenario_desc'), color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-900/20' },
    { icon: FileText, title: t('feature_pdf_title'), desc: t('feature_pdf_desc'), color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-900/20' },
    { icon: Upload, title: t('feature_import_title'), desc: t('feature_import_desc'), color: 'text-teal-500', bg: 'bg-teal-50 dark:bg-teal-900/20' },
  ];

  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-500 uppercase tracking-widest">{t('features_heading')}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            {t('features_sub')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc, color, bg }) => (
            <div
              key={title}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                <Icon size={24} className={color} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
