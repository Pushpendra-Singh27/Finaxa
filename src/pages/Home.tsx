import { useEffect, useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroCarousel } from '@/components/HeroCarousel';
import { StatsSection } from '@/components/StatsSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { AboutSection } from '@/components/AboutSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { HowItWorks } from '@/components/HowItWorks';
import { Footer } from '@/components/Footer';
import { InvestmentProducts } from '@/components/InvestmentProducts';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { ImageBackgroundSection } from '@/components/ImageBackgroundSection';
import { BookMeetingPopup } from '@/components/BookMeetingPopup';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Add scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in-up, .scale-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Apply dark mode class on initial load if needed
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatedBackground>
      <BookMeetingPopup open={showPopup} onClose={() => setShowPopup(false)} />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow bg-background overflow-x-hidden">
          <HeroCarousel />
          <InvestmentProducts />
          <ImageBackgroundSection className="py-20">
            <div className="container mx-auto px-4">
              <AboutSection />
            </div>
          </ImageBackgroundSection>
          <FeaturesSection />
          <WhyChooseUs />
          <HowItWorks />
          <StatsSection />
        </main>
        <Footer />
      </div>
    </AnimatedBackground>
  );
};

export default Home; 