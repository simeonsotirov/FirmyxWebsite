import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TermsContent from '@/components/TermsContent';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Firmyx Terms of Service -- the rules and conditions for using Firmyx.',
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24 bg-white dark:bg-gray-900">
        <TermsContent />
      </main>
      <Footer />
    </>
  );
}