'use client';

import { UserPlus, Upload, Zap } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    { number: '01', icon: UserPlus, title: t('hiw_step1_title'), desc: t('hiw_step1_desc') },
    { number: '02', icon: Upload, title: t('hiw_step2_title'), desc: t('hiw_step2_desc') },
    { number: '03', icon: Zap, title: t('hiw_step3_title'), desc: t('hiw_step3_desc') },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-500 uppercase tracking-widest">{t('hiw_heading')}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            {t('hiw_sub')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map(({ number, icon: Icon, title, desc }, idx) => (
            <div key={number} className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                  <Icon size={32} className="text-blue-500" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white dark:bg-gray-900 border-2 border-blue-500 flex items-center justify-center text-xs font-black text-blue-500">
                  {idx + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
