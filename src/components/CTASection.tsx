import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Play } from 'lucide-react';

interface CTASectionProps {
  onOpenPopup?: () => void;
}

export const CTASection = ({ onOpenPopup }: CTASectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Enhanced scroll effects
    const handleScroll = () => {
      if (backgroundRef.current && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, -rect.top / (rect.height + window.innerHeight));
        
        backgroundRef.current.style.transform = `translateY(${scrollProgress * 80}px) scale(${1 + scrollProgress * 0.05})`;
        backgroundRef.current.style.filter = `blur(${scrollProgress * 2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Light Theme Dynamic Background */}
      <div ref={backgroundRef} className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-green-50/60 via-blue-50/40 to-purple-50/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-background/80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-3d bg-card/90 backdrop-blur-sm border-border/50">
            <CardContent className="p-12 text-center">
              <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
                Ready to Transform Your
                <span className="gradient-accent bg-clip-text text-transparent"> Investment Strategy?</span>
              </h2>
              
              <p className={`text-xl text-muted-foreground mb-8 max-w-2xl mx-auto ${isVisible ? 'fade-in-up' : 'opacity-0'}`} 
                 style={{ animationDelay: '0.2s' }}>
                Join thousands of professional investors who trust DeepFinance for their portfolio management 
                and market analysis needs.
              </p>

              <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 ${isVisible ? 'scale-on-scroll animate' : 'scale-on-scroll'}`} 
                   style={{ animationDelay: '0.4s' }}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Free Trial</div>
                  <p className="text-sm text-muted-foreground">30-day full access</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">No Setup</div>
                  <p className="text-sm text-muted-foreground">Start immediately</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7 Support</div>
                  <p className="text-sm text-muted-foreground">Expert assistance</p>
                </div>
              </div>
              
              <div className={`flex flex-col sm:flex-row gap-6 justify-center ${isVisible ? 'fade-in-up' : 'opacity-0'}`} 
                   style={{ animationDelay: '0.6s' }}>
                <Button 
                  size="lg" 
                  className="shadow-3d hover:shadow-glow transition-smooth card-3d group"
                  onClick={onOpenPopup}
                >
                  Book a Free Consultation Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth card-3d group"
                  onClick={onOpenPopup}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Talk to an Expert
                </Button>
              </div>

              <p className={`text-sm text-muted-foreground mt-8 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} 
                 style={{ animationDelay: '0.8s' }}>
                No credit card required • Cancel anytime • Enterprise pricing available
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Light theme floating elements */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-accent/40 rounded-full animate-float z-20"></div>
      <div className="absolute bottom-20 right-10 w-4 h-4 bg-primary/50 rounded-full animate-float z-20" style={{ animationDelay: '3s' }}></div>
    </section>
  );
};