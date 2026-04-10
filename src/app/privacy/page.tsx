import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PrivacyContent from '@/components/PrivacyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Firmyx privacy policy -- how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24 bg-white dark:bg-gray-900">
        <PrivacyContent />
      </main>
      <Footer />
    </>
  );
}