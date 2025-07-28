import { useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { AboutSection } from '@/components/AboutSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { StatsSection } from '@/components/StatsSection';

const About = () => {
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

  return (
    <AnimatedBackground>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow bg-background overflow-x-hidden">
          {/* Hero Section for About Page */}
          <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
            <div className="container mx-auto px-6 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About Celestia Capitals
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Discover our mission, values, and commitment to delivering exceptional investment opportunities.
              </p>
            </div>
          </section>
          
          <AboutSection />
          <WhyChooseUs />
          <StatsSection />
        </main>
        <Footer />
      </div>
    </AnimatedBackground>
  );
};

export default About; 