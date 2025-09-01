import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProblemsSection from '@/components/ProblemsSection';
import OutcomesSection from '@/components/OutcomesSection';
import CourseSection from '@/components/CourseSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import FooterSection from '@/components/FooterSection';
import FloatingCTA from '@/components/FloatingCTA';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section - Landing */}
      <HeroSection />
      
      {/* High-Impact Problems Section */}
      <ProblemsSection />
      
      {/* Measurable Outcomes Section */}
      <OutcomesSection />
      
      {/* Course + Bonuses Section */}
      <CourseSection />
      
      {/* Testimonials Section (Very Visual) */}
      <TestimonialsSection />
      
      {/* Price & Urgency Section */}
      <PricingSection />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Footer Section */}
      <FooterSection />
      
      {/* Floating CTA - WhatsApp */}
      <FloatingCTA />
    </main>
  );
};

export default Index;