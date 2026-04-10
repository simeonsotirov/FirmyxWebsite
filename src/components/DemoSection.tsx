'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function DemoSection() {
  const { t } = useLanguage();

  return (
    <section id="demo" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-blue-500 uppercase tracking-widest">Demo</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            {t('demo_heading')}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">{t('demo_sub')}</p>
        </div>

        {/* Browser mockup */}
        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-gray-200 dark:border-gray-800">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <div className="flex-1 mx-4 px-3 py-1 rounded-md bg-white dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs border border-gray-200 dark:border-gray-600">
              app.firmyx.com/dashboard
            </div>
          </div>

          {/* Dashboard UI */}
          <div className="bg-gray-900 flex">
            {/* Sidebar */}
            <div className="hidden sm:flex w-52 flex-col bg-gray-950 border-r border-gray-800 p-4 gap-1 min-h-[480px]">
              <div className="flex items-center gap-2 mb-6 px-2">
                <div className="w-7 h-7 rounded-lg bg-blue-600 flex-shrink-0" />
                <span className="text-sm font-bold text-white">Firmyx</span>
              </div>
              {['Dashboard', 'Health Score', 'Forecasts', 'Scenarios', 'Reports', 'Settings'].map((item, i) => (
                <div
                  key={item}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    i === 0 ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  <div className={`w-4 h-4 rounded ${i === 0 ? 'bg-blue-400/40' : 'bg-gray-800'}`} />
                  {item}
                </div>
              ))}
            </div>

            {/* Main content */}
            <div className="flex-1 p-5 overflow-hidden">
              {/* Top bar */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-white font-bold text-sm">{t('demo_greeting')}</div>
                  <div className="text-gray-500 text-xs mt-0.5">Q1 2026 · Last updated 2 min ago</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold">
                    ↑ Score improved 6pts
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-xs font-bold">
                    A
                  </div>
                </div>
              </div>

              {/* KPI cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                {[
                  { label: 'Health Score', value: '84', unit: '/100', color: 'text-blue-400', badge: 'Good', badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-500/20', annotation: t('demo_annotation') },
                  { label: 'Revenue (MTD)', value: '$124K', unit: '', color: 'text-green-400', badge: '+8.2%', badgeBg: 'bg-green-500/10 text-green-400 border-green-500/20' },
                  { label: 'Expenses (MTD)', value: '$89K', unit: '', color: 'text-red-400', badge: '-2.1%', badgeBg: 'bg-red-500/10 text-red-400 border-red-500/20' },
                  { label: 'Net Cash Flow', value: '$35K', unit: '', color: 'text-purple-400', badge: '+12%', badgeBg: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
                ].map(({ label, value, unit, color, badge, badgeBg, annotation }) => (
                  <div key={label} className="bg-gray-800 rounded-xl p-3 border border-gray-700/50">
                    <div className="text-xs text-gray-500 mb-1.5">{label}</div>
                    <div className={`text-lg font-black ${color}`}>
                      {value}<span className="text-xs text-gray-500 font-normal">{unit}</span>
                    </div>
                    <div className={`mt-1.5 inline-flex text-xs px-1.5 py-0.5 rounded-md border font-medium ${badgeBg}`}>
                      {badge}
                    </div>
                    {annotation && (
                      <div className="mt-2 text-xs text-blue-300/70 leading-tight">{annotation}</div>
                    )}
                  </div>
                ))}
              </div>

              {/* Chart + AI panel */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {/* Forecast chart */}
                <div className="lg:col-span-2 bg-gray-800 rounded-xl p-4 border border-gray-700/50">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-gray-300">12-Month Revenue Forecast</span>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />Actual</span>
                      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500/30 inline-block" />Forecast</span>
                    </div>
                  </div>
                  <div className="flex items-end gap-1 h-24">
                    {[52, 61, 58, 72, 68, 80, 75, 88, 85, 94, 91, 100].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t transition-all"
                        style={{
                          height: `${h}%`,
                          backgroundColor: i < 7 ? '#3b82f6' : '#3b82f630',
                          border: i >= 7 ? '1px dashed #3b82f660' : 'none',
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-600">
                    {['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'].map(m => (
                      <span key={m} className="flex-1 text-center">{m}</span>
                    ))}
                  </div>
                </div>

                {/* AI advisor panel */}
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700/50 flex flex-col gap-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-blue-400" />
                    </div>
                    <span className="text-xs font-semibold text-gray-300">AI Advisor</span>
                    <span className="ml-auto w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  </div>
                  {[
                    { type: 'insight', text: 'Cash reserves are healthy. Consider reinvesting Q2 surplus.' },
                    { type: 'alert', text: 'Accounts receivable up 18% — follow up on 3 overdue invoices.' },
                    { type: 'tip', text: 'Reducing SaaS spend by 15% could improve score by 4 pts.' },
                  ].map(({ type, text }, i) => (
                    <div
                      key={i}
                      className={`rounded-lg p-2.5 text-xs leading-relaxed border ${
                        type === 'alert'
                          ? 'bg-amber-500/5 border-amber-500/20 text-amber-300'
                          : type === 'tip'
                          ? 'bg-purple-500/5 border-purple-500/20 text-purple-300'
                          : 'bg-blue-500/5 border-blue-500/20 text-blue-300'
                      }`}
                    >
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA below demo */}
        <div className="mt-8 text-center">
          <a
            href="https://app.firmyx.com/register"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-500/25 hover:-translate-y-0.5"
          >
            {t('demo_cta')} →
          </a>
          <p className="mt-3 text-xs text-gray-500">{t('demo_no_cc')}</p>
        </div>
      </div>
    </section>
  );
}
