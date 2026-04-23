import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/lib/LanguageContext';
import CookieConsent from '@/components/CookieConsent';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

// ─── Structured data (JSON-LD) ────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://firmyx.com/#organization',
      name: 'Firmyx',
      url: 'https://firmyx.com',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'atanas.k.kanev@gmail.com',
        contactType: 'customer support',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://firmyx.com/#website',
      url: 'https://firmyx.com',
      name: 'Firmyx',
      publisher: { '@id': 'https://firmyx.com/#organization' },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Firmyx',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web browser',
      description:
        'Upload your financial data and get a clear health score, 12-month forecast, and AI-powered recommendations in under 2 minutes.',
      url: 'https://firmyx.com',
      provider: { '@id': 'https://firmyx.com/#organization' },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        description: 'Free plan — no credit card required',
      },
      featureList: [
        'Financial health scoring (0–100)',
        '12-month AI-powered forecast',
        'What-if scenario analysis',
        'One-click PDF reports',
        'QuickBooks & Xero integration',
      ],
    },
  ],
};

// ─── Page metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL('https://firmyx.com'),

  title: {
    default: 'Firmyx — Financial Health Score for Your Business',
    template: '%s | Firmyx',
  },
  description:
    'Upload your financial data and get a clear health score, 12-month forecast, and AI-powered recommendations — free to start, no credit card required.',
  keywords: [
    'financial health score',
    'business risk detection',
    'AI financial advisor',
    'cash flow forecast',
    'small business finance',
    'financial analysis tool',
    'Firmyx',
  ],

  authors: [{ name: 'Firmyx', url: 'https://firmyx.com' }],
  creator: 'Firmyx',
  publisher: 'Firmyx',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: '/',
  },

  icons: {
    icon: [],
    shortcut: [],
    apple: [],
  },

  openGraph: {
    title: 'Firmyx — Know exactly where your business stands',
    description:
      'AI-powered financial health scoring for small and medium businesses. Free to start.',
    url: 'https://firmyx.com',
    siteName: 'Firmyx',
    type: 'website',
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    site: '@firmyx',
    creator: '@firmyx',
    title: 'Firmyx — Financial Health Score for Your Business',
    description:
      'Upload your financial data and get a clear health score, 12-month forecast, and AI-powered recommendations in under 2 minutes.',
  },
};

// ─── Root layout ───────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Blocking theme script — runs before any CSS paints to prevent flash */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme')||'dark';document.documentElement.classList.add(t);}catch(e){document.documentElement.classList.add('dark');}})()` }} />
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Early language detection — set data-lang before React hydrates */}
        <script
          dangerouslySetInnerHTML={{ __html: `
            try {
              var sl = localStorage.getItem('firmyx-lang');
              if (sl === 'bg') document.documentElement.setAttribute('data-lang', 'bg');
            } catch(e) {}
          `}}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
            {/* Cookie consent banner — renders client-side after first load */}
            <CookieConsent />
          </LanguageProvider>
        </ThemeProvider>
        {/* Native mobile menu actions — direct attachment */}
        <script
          dangerouslySetInnerHTML={{ __html: `
            (function() {
              function bind() {
                var themeBtns = document.querySelectorAll('[data-mobile-action="toggle-theme"]');
                for (var j = 0; j < themeBtns.length; j++) {
                  themeBtns[j].onclick = function() {
                    var html = document.documentElement;
                    var isDark = html.classList.contains('dark');
                    html.classList.toggle('dark');
                    localStorage.setItem('theme', isDark ? 'light' : 'dark');
                  };
                }
              }
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', bind);
              } else {
                bind();
              }
            })();
          `}}
        />
      </body>
    </html>
  );
}
