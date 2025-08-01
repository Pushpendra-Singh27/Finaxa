import { useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { FeaturesSection } from '@/components/FeaturesSection';
import { InvestmentProducts } from '@/components/InvestmentProducts';

const Services = () => {
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
          {/* Hero Section for Services Page */}
          <section className="relative py-20 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900">
            <div className="container mx-auto px-6 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Comprehensive investment solutions tailored to your financial goals and risk tolerance.
              </p>
            </div>
          </section>
          
          <InvestmentProducts />
          <FeaturesSection />
        </main>
        <Footer />
      </div>
    </AnimatedBackground>
  );
};

export default Services; 