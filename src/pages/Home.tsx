import { useEffect, useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroCarousel } from '@/components/HeroCarousel';

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
  
  // Debug popup state changes
  useEffect(() => {
    console.log('Popup state changed to:', showPopup);
  }, [showPopup]);

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
    console.log('Home component mounted, setting up popup timer...');
    
    // Test if sections exist
    setTimeout(() => {
      const sections = ['#hero', '#products', '#about', '#analytics', '#how-it-works'];
      sections.forEach(sectionId => {
        const element = document.querySelector(sectionId);
        console.log(`Section ${sectionId}:`, !!element);
      });
    }, 1000);
    
    // Check if popup has been shown before
    let hasShownPopup = false;
    try {
      hasShownPopup = localStorage.getItem('popupShown') === 'true';
      console.log('localStorage check result:', hasShownPopup);
    } catch (error) {
      console.log('localStorage not available, showing popup anyway');
    }
    
    // For testing, always show popup regardless of localStorage
    console.log('Setting up popup timer for 13 seconds...');
    const timer = setTimeout(() => {
      console.log('Popup timer triggered, showing popup...');
      setShowPopup(true);
      try {
        localStorage.setItem('popupShown', 'true');
        console.log('Saved to localStorage successfully');
      } catch (error) {
        console.log('Could not save to localStorage');
      }
    }, 13000); // 13 seconds
    // For testing on mobile, you can temporarily change to 5000 (5 seconds)
    
    console.log('Timer set with ID:', timer);
    return () => {
      console.log('Cleaning up timer...');
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatedBackground>
      <BookMeetingPopup open={showPopup} onClose={() => setShowPopup(false)} />
      <div className="min-h-screen flex flex-col">
        <Navigation onOpenPopup={() => setShowPopup(true)} />
        <main className="flex-grow bg-background overflow-x-hidden">
          <section id="hero">
            <HeroCarousel onOpenPopup={() => setShowPopup(true)} />
          </section>
          <section id="products">
            <InvestmentProducts onOpenPopup={() => setShowPopup(true)} />
          </section>
          <section id="about">
            <ImageBackgroundSection className="py-20">
              <div className="container mx-auto px-4">
                <AboutSection />
              </div>
            </ImageBackgroundSection>
          </section>
          <section id="analytics">
            <FeaturesSection />
          </section>
          <section id="how-it-works">
            <WhyChooseUs onOpenPopup={() => setShowPopup(true)} />
            <HowItWorks onOpenPopup={() => setShowPopup(true)} />
          </section>

        </main>
        <Footer />
      </div>
    </AnimatedBackground>
  );
};

export default Home; 