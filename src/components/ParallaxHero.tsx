import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, BarChart3, LineChart, TrendingUp } from 'lucide-react';

interface ParallaxHeroProps {
  onOpenPopup?: () => void;
}

export const ParallaxHero = ({ onOpenPopup }: ParallaxHeroProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  
  // 3D rotation effects
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [0, 5]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5], [0, 5]);

  // Floating animation for elements
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    }
  };

  const stats = [
    { value: "24/7", label: "Market Monitoring", icon: <BarChart3 className="w-6 h-6" /> },
    { value: "99.9%", label: "Uptime", icon: <TrendingUp className="w-6 h-6" /> },
    { value: "1M+", label: "Data Points", icon: <LineChart className="w-6 h-6" /> },
  ];

  return (
    <section ref={targetRef} className="relative h-screen overflow-hidden">
      {/* 3D Background Layers with Parallax */}
      <motion.div 
        style={{ y: y1, scale }}
        className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-background to-indigo-900/80"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20" />
      </motion.div>
      
      <motion.div 
        style={{ y: y2, rotateX, rotateY }}
        className="absolute inset-0 bg-grid-pattern opacity-5"
      />
      
      {/* Floating 3D Elements */}
      <motion.div 
        animate={floatingAnimation}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"
      />
      <motion.div 
        animate={{...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 0.5 }}}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl"
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 h-full flex items-center relative z-10">
        <motion.div 
          style={{ opacity, y: y3 }}
          className="max-w-5xl mx-auto text-center space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary mb-6 border border-primary/20">
              AI-Powered Analytics
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">
              Smarter Investing <br />
              <span className="text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">Powerful Intelligence</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mt-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">
              Harness the power of AI and 3D visualization to make data-driven investment decisions with real-time market insights and predictive analytics.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
          >
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20"
              onClick={onOpenPopup}
            >
              Book a Free Consultation Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="text-lg px-8 py-6 rounded-xl border-2 border-foreground/10 hover:bg-foreground/5 transition-all transform hover:-translate-y-0.5"
              onClick={onOpenPopup}
            >
              Talk to an Expert
            </Button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="backdrop-blur-sm bg-foreground/5 p-6 rounded-xl border border-foreground/10 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 mx-auto">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">{stat.value}</h3>
                <p className="text-foreground/60">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: [0, 1, 1, 0],
          y: [20, 0, 0, -20]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center p-1 mb-2">
          <motion.div
            className="w-1 h-2 bg-foreground/60 rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        </div>
        <span className="text-sm text-foreground/60">Scroll to explore</span>
      </motion.div>
    </section>
  );
};
