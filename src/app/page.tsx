'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhyBlackfoxSection from '@/components/WhyBlackfoxSection';
import ProductsSection from '@/components/ProductsSection';
import WholesaleSolutionsSection from '@/components/WholesaleSolutionsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-dark">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhyBlackfoxSection />
        <ProductsSection />
        <WholesaleSolutionsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
