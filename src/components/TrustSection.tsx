'use client';

import { ShieldCheck, Lock, Globe } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function TrustSection() {
  const { t } = useLanguage();

  const items = [
    { icon: ShieldCheck, title: t('trust_no_tracking'), desc: t('trust_no_tracking_desc'), color: 'text-green-400', bg: 'bg-green-500/10' },
    { icon: Lock, title: t('trust_encrypted'), desc: t('trust_encrypted_desc'), color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { icon: Globe, title: t('trust_gdpr'), desc: t('trust_gdpr_desc'), color: 'text-purple-400', bg: 'bg-purple-500/10' },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-500 uppercase tracking-widest">{t('trust_section_heading')}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            {t('trust_section_sub')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map(({ icon: Icon, title, desc, color, bg }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className={`w-16 h-16 rounded-2xl ${bg} flex items-center justify-center mb-5`}>
                <Icon size={28} className={color} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
