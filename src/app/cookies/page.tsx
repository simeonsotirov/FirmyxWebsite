import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookiesContent from '@/components/CookiesContent';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Firmyx cookie policy -- how we use cookies on our platform.',
};

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24 bg-white dark:bg-gray-900">
        <CookiesContent />
      </main>
      <Footer />
    </>
  );
}