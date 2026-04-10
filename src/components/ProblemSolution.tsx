'use client';

import { AlertTriangle, EyeOff, BarChart3, Sparkles, Shield, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function ProblemSolution() {
  const { t } = useLanguage();

  const problems = [
    { icon: AlertTriangle, title: t('problem_1_title'), desc: t('problem_1_desc'), color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20' },
    { icon: EyeOff, title: t('problem_2_title'), desc: t('problem_2_desc'), color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
    { icon: BarChart3, title: t('problem_3_title'), desc: t('problem_3_desc'), color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
  ];

  const solutions = [
    { icon: Sparkles, title: t('feature_ai_title'), desc: t('feature_ai_desc'), color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
    { icon: Shield, title: t('feature_health_title'), desc: t('feature_health_desc'), color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20' },
    { icon: TrendingUp, title: t('feature_forecast_title'), desc: t('feature_forecast_desc'), color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-red-400 uppercase tracking-widest">{t('problem_heading')}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            {t('problem_sub')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {problems.map(({ icon: Icon, title, desc, color, bg, border }) => (
            <div key={title} className={`rounded-2xl p-6 ${bg} border ${border}`}>
              <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                <Icon size={24} className={color} />
              </div>
              <h3 className={`text-lg font-bold mb-2 ${color}`}>{title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Arrow divider */}
        <div className="flex justify-center mb-16">
          <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Solution */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-green-400 uppercase tracking-widest">{t('solution_heading')}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            {t('solution_sub')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map(({ icon: Icon, title, desc, color, bg, border }) => (
            <div key={title} className={`rounded-2xl p-6 border ${border} ${bg} hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300`}>
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
