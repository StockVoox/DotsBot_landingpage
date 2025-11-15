import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Pricing from '@/components/sections/Pricing';
import {
  HowItWorks,
  TechnicalHighlights,
  Integrations,
  UseCases,
  CTA,
} from '@/components/sections/AdditionalSections';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Features />
        <HowItWorks />
        <TechnicalHighlights />
        <Integrations />
        <UseCases />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
