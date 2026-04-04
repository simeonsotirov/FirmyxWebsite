'use client';

import { X, Globe, Mail } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="/" className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent block mb-3">
              Firmyx
            </a>
            <p className="text-sm leading-relaxed">{t('footer_desc')}</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer_product')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">{t('footer_features')}</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">{t('footer_pricing')}</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">{t('footer_faq')}</a></li>
              <li><a href="https://app.firmyx.com/register" className="hover:text-white transition-colors">{t('footer_get_started')}</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer_legal')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy" className="hover:text-white transition-colors">{t('footer_privacy')}</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">{t('footer_terms')}</a></li>
              <li><a href="/cookies" className="hover:text-white transition-colors">{t('footer_cookies')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer_contact')}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:support@firmyx.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail size={15} />
                  support@firmyx.com
                </a>
              </li>
              <li>
                <a href="https://twitter.com/firmyx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <X size={15} />
                  Twitter / X
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/firmyx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Globe size={15} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-sm text-center">
          © {year} Firmyx. {t('footer_rights')}
        </div>
      </div>
    </footer>
  );
}
