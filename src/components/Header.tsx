'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/lib/LanguageContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
            Firmyx
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              {t('nav_features')}
            </a>
            <a href="#pricing" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              {t('nav_pricing')}
            </a>
            <a href="#faq" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              {t('nav_faq')}
            </a>
          </nav>

          {/* Right controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === 'en' ? 'bg' : 'en')}
              className="text-xs font-semibold px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 transition-all"
            >
              {lang === 'en' ? 'BG' : 'EN'}
            </button>

            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            <a
              href="https://app.firmyx.com/register"
              className="px-4 py-2 text-sm font-semibold rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors shadow-sm"
            >
              {t('nav_cta')}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-600 dark:text-gray-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-4">
            <a href="#features" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500">
              {t('nav_features')}
            </a>
            <a href="#pricing" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500">
              {t('nav_pricing')}
            </a>
            <a href="#faq" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500">
              {t('nav_faq')}
            </a>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setLang(lang === 'en' ? 'bg' : 'en')}
                className="text-xs font-semibold px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300"
              >
                {lang === 'en' ? 'BG' : 'EN'}
              </button>
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-full text-gray-600 dark:text-gray-300"
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              )}
              <a
                href="https://app.firmyx.com/register"
                className="flex-1 text-center px-4 py-2 text-sm font-semibold rounded-lg bg-blue-500 text-white"
              >
                {t('nav_cta')}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
