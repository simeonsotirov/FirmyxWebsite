'use client';

import { Play } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-400/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
              {t('hero_headline')}
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
              {t('hero_sub')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://app.firmyx.com/register"
                className="px-6 py-3 text-base font-semibold rounded-xl bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-blue-500/40 hover:-translate-y-0.5 text-center"
              >
                {t('hero_cta')}
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 transition-all text-center"
              >
                <Play size={16} className="fill-current" />
                {t('hero_secondary')}
              </a>
            </div>
          </div>

          {/* Right: Dashboard mockup */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-gray-200 dark:border-gray-700">
              {/* Fake browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 dark:bg-gray-950">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="flex-1 mx-4 px-3 py-1 rounded bg-gray-700 text-gray-400 text-xs">
                  app.firmyx.com
                </div>
              </div>

              {/* Dashboard content */}
              <div className="bg-gray-900 p-6 min-h-[380px]">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="h-3 w-24 bg-gray-700 rounded mb-2" />
                    <div className="h-2 w-16 bg-gray-800 rounded" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-7 bg-blue-500/20 rounded-lg border border-blue-500/30" />
                    <div className="w-7 h-7 rounded-full bg-gray-700" />
                  </div>
                </div>

                {/* Score card */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-4 mb-4">
                  <div className="text-xs text-blue-200 mb-1">Financial Health Score</div>
                  <div className="text-3xl font-bold text-white mb-2">84 / 100</div>
                  <div className="w-full bg-blue-900/40 rounded-full h-2">
                    <div className="bg-blue-300 h-2 rounded-full" style={{ width: '84%' }} />
                  </div>
                  <div className="text-xs text-blue-200 mt-1">Good · 12% improvement this quarter</div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: 'Revenue', value: '$124K', color: 'text-green-400' },
                    { label: 'Expenses', value: '$89K', color: 'text-red-400' },
                    { label: 'Cash Flow', value: '$35K', color: 'text-blue-400' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-gray-800 rounded-lg p-3">
                      <div className="text-xs text-gray-500 mb-1">{stat.label}</div>
                      <div className={`text-sm font-bold ${stat.color}`}>{stat.value}</div>
                    </div>
                  ))}
                </div>

                {/* Forecast bars */}
                <div className="bg-gray-800 rounded-lg p-3">
                  <div className="text-xs text-gray-500 mb-3">12-Month Forecast</div>
                  <div className="flex items-end gap-1 h-16">
                    {[40, 55, 45, 60, 70, 65, 75, 80, 72, 85, 88, 90].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t opacity-80"
                        style={{
                          height: `${h}%`,
                          backgroundColor: i >= 6 ? '#3b82f640' : '#3b82f6',
                          border: i >= 6 ? '1px dashed #3b82f6' : 'none',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              Live Demo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

