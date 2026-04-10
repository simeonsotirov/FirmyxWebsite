'use client';

import { useState, useEffect } from 'react';
import { Menu, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/lib/LanguageContext';
import Logo from '@/components/Logo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white dark:bg-gray-900 shadow-md'
          : 'bg-white/95 dark:bg-gray-900/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" aria-label="Firmyx home" className="flex-shrink-0">
            <Logo size="md" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              {t('nav_features')}
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              {t('nav_how_it_works')}
            </a>
            <a href="#faq" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              {t('nav_faq')}
            </a>
          </nav>

          {/* Right controls (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'en' ? 'bg' : 'en')}
              className="text-xs font-semibold px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 transition-all"
            >
              {lang === 'en' ? 'BG' : 'EN'}
            </button>
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 transition-all text-xs font-medium"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
                <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
              </button>
            )}
            <a
              href="https://app.firmyx.com/register"
              className="px-4 py-2 text-sm font-semibold rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors shadow-sm"
            >
              {t('nav_cta')}
            </a>
          </div>

          {/* Mobile hamburger — uses native <details> for iOS Safari compatibility */}
          <details className="relative md:hidden group">
            <summary className="list-none [&::-webkit-details-marker]:hidden p-3 -mr-2 text-gray-600 dark:text-gray-300 active:bg-gray-100 dark:active:bg-gray-800 rounded-lg cursor-pointer">
              <Menu size={24} className="group-open:hidden" />
              <svg className="hidden group-open:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </summary>

            <div className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl p-4">
              <nav className="flex flex-col gap-3">
                <a href="#features" className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500">
                  {t('nav_features')}
                </a>
                <a href="#how-it-works" className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500">
                  {t('nav_how_it_works')}
                </a>
                <a href="#faq" className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500">
                  {t('nav_faq')}
                </a>
                <hr className="border-gray-200 dark:border-gray-700" />
                <div className="flex items-center gap-3">
                  <a
                    href={`/?lang=${lang === 'en' ? 'bg' : 'en'}`}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 cursor-pointer"
                  >
                    {lang === 'en' ? 'BG' : 'EN'}
                  </a>
                  <button
                    type="button"
                    data-mobile-action="toggle-theme"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-xs font-medium cursor-pointer"
                    aria-label="Toggle dark mode"
                  >
                    <Sun size={14} className="hidden dark:block" />
                    <Moon size={14} className="block dark:hidden" />
                  </button>
                </div>
                <a
                  href="https://app.firmyx.com/register"
                  className="text-center px-4 py-2 text-sm font-semibold rounded-lg bg-blue-500 text-white"
                >
                  {t('nav_cta')}
                </a>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

