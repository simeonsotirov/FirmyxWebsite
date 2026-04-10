import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/lib/LanguageContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: 'Firmyx — Financial Health Score for Your Business',
  description: 'Upload your financial data and get a clear health score, 12-month forecast, and AI-powered recommendations. Free to start, no credit card required.',
  keywords: ['financial health score', 'business risk detection', 'AI financial advisor', 'cash flow forecast', 'Firmyx'],
  openGraph: {
    title: 'Firmyx — Know exactly where your business stands',
    description: 'AI-powered financial health scoring for small and medium businesses.',
    type: 'website',
    url: 'https://firmyx.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
