import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorks from '@/components/HowItWorks';
import DemoSection from '@/components/DemoSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <TrustBar />
      <FeaturesSection />
      <HowItWorks />
      <DemoSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
