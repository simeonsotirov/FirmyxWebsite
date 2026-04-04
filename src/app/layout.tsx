import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/lib/LanguageContext';

export const metadata: Metadata = {
  title: 'Firmyx – AI-Powered Financial Intelligence',
  description: 'Detect financial risk early with AI-powered insights. Know your financial health score, forecast 12 months ahead, and make data-driven decisions with confidence.',
  keywords: ['financial intelligence', 'AI finance', 'financial health score', 'business analytics', 'cash flow forecast', 'Firmyx'],
  openGraph: {
    title: 'Firmyx – AI-Powered Financial Intelligence',
    description: 'Detect financial risk early with AI-powered insights.',
    url: 'https://firmyx.com',
    siteName: 'Firmyx',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Firmyx – AI-Powered Financial Intelligence',
    description: 'Detect financial risk early with AI-powered insights.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
