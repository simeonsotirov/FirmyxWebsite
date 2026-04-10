'use client';

import { Star } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function TestimonialsSection() {
  const { t } = useLanguage();

  const testimonials = [
    {
      quoteKey: 'testimonial_1_quote' as const,
      nameKey: 'testimonial_1_name' as const,
      roleKey: 'testimonial_1_role' as const,
      avatar: 'SM',
      avatarBg: 'from-purple-500 to-purple-700',
      stars: 5,
    },
    {
      quoteKey: 'testimonial_2_quote' as const,
      nameKey: 'testimonial_2_name' as const,
      roleKey: 'testimonial_2_role' as const,
      avatar: 'DO',
      avatarBg: 'from-blue-500 to-blue-700',
      stars: 4,
    },
    {
      quoteKey: 'testimonial_3_quote' as const,
      nameKey: 'testimonial_3_name' as const,
      roleKey: 'testimonial_3_role' as const,
      avatar: 'LK',
      avatarBg: 'from-teal-500 to-teal-700',
      stars: 5,
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-500 uppercase tracking-widest">Testimonials</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            {t('testimonials_heading')}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            {t('testimonials_sub')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(({ quoteKey, nameKey, roleKey, avatar, avatarBg, stars }) => (
            <div
              key={nameKey}
              className="flex flex-col bg-gray-50 dark:bg-gray-800 rounded-2xl p-7 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < stars ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700'}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-1 text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
                &ldquo;{t(quoteKey)}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarBg} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                >
                  {avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">{t(nameKey)}</span>
                    <svg className="w-3 h-3 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-label="LinkedIn">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{t(roleKey)}</div>
                  <div className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Verified Customer</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

