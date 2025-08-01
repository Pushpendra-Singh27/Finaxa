import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, BarChart3, DollarSign, Home, TrendingUp, PieChart, Shield, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Animation variants with proper TypeScript types
const container: {
  hidden: { opacity: number };
  show: {
    opacity: number;
    transition: {
      staggerChildren: number;
      delayChildren: number;
    };
  };
} = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item: {
  hidden: { opacity: number; y: number };
  show: {
    opacity: number;
    y: number;
    transition: {
      duration: number;
      ease: [number, number, number, number];
    };
  };
} = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// 3D card effect with perspective
const cardVariants = {
  initial: { 
    y: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    transformStyle: 'preserve-3d',
    transform: 'perspective(1000px)'
  },
  hover: (custom: { x: number; y: number }) => ({
    y: -15,
    rotateX: custom.y * 5,
    rotateY: custom.x * 5,
    scale: 1.03,
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
    }
  })
};

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

const services: Service[] = [
  {
    icon: <DollarSign className="w-8 h-8 sm:w-10 sm:h-10" />,
    title: "Wealth Management",
    description: "Personalized investment strategies tailored to your financial goals and risk tolerance.",
    features: ["Retirement Planning", "Estate Planning", "Tax Optimization", "Legacy Planning"],
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    icon: <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10" />,
    title: "Investment Advisory",
    description: "Expert guidance on building and managing a diversified investment portfolio.",
    features: ["Asset Allocation", "Portfolio Rebalancing", "Risk Management", "Performance Monitoring"],
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    icon: <Home className="w-8 h-8 sm:w-10 sm:h-10" />,
    title: "Real Estate Investment",
    description: "Strategic real estate investment opportunities for portfolio diversification.",
    features: ["Property Analysis", "Market Research", "Portfolio Diversification", "Rental Income"],
    gradient: "from-purple-500 to-fuchsia-600"
  },
  {
    icon: <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10" />,
    title: "Retirement Planning",
    description: "Comprehensive retirement planning to secure your financial future.",
    features: ["401(k) & IRA Management", "Income Planning", "Social Security Optimization", "Withdrawal Strategies"],
    gradient: "from-amber-500 to-orange-600"
  },
  {
    icon: <PieChart className="w-8 h-8 sm:w-10 sm:h-10" />,
    title: "Tax Planning",
    description: "Strategies to minimize tax liabilities and maximize after-tax returns.",
    features: ["Tax-Loss Harvesting", "Tax-Efficient Investing", "Charitable Giving", "Estate Tax Planning"],
    gradient: "from-rose-500 to-pink-600"
  },
  {
    icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10" />,
    title: "Risk Management",
    description: "Protect your assets and secure your financial future with comprehensive risk management.",
    features: ["Insurance Analysis", "Liability Protection", "Emergency Fund Planning", "Wealth Preservation"],
    gradient: "from-cyan-500 to-blue-600"
  }
];

export const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const controls = useAnimation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Handle mouse move for 3D card effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    setHoveredIndex(index);
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / 20);
    const rotateX = ((centerY - y) / 20);
    
    card.style.setProperty('--rotate-x', `${rotateX}deg`);
    card.style.setProperty('--rotate-y', `${-rotateY}deg`);
  };

  // Reset card position on mouse leave
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setHoveredIndex(null);
    const card = e.currentTarget;
    card.style.setProperty('--rotate-x', '0deg');
    card.style.setProperty('--rotate-y', '0deg');
  };

  // Animate on scroll into view
  useEffect(() => {
    if (isInView) {
      controls.start('show');
    }
  }, [isInView, controls]);

  return (
    <motion.section 
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-background via-background to-muted/5"
      id="services"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM3NzciIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0yIDBjMCAxLjEwNC0uODk2IDItMiAycy0yLS44OTYtMi0yIC44OTYtMiAyLTIgMiAuODk2IDIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            show: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
            }
          }}
        >
          <motion.span 
            className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wider uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={controls}
            transition={{ delay: 0.2 }}
          >
            Our Services
          </motion.span>
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
            initial={{ opacity: 0, y: 10 }}
            animate={controls}
            transition={{ delay: 0.3 }}
          >
            Comprehensive Financial Solutions
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={controls}
            transition={{ delay: 0.4 }}
          >
            We provide cutting-edge financial services powered by technology and expertise to help you achieve your investment goals.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={container}
          initial="hidden"
          animate={controls}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="h-full group relative"
              variants={item}
              custom={{ x: 0, y: 0 }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
              style={{
                '--rotate-x': '0deg',
                '--rotate-y': '0deg',
                '--gradient': service.gradient,
                transform: 'perspective(1000px) rotateX(var(--rotate-x, 0)) rotateY(var(--rotate-y, 0))',
                transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              } as React.CSSProperties}
            >
              <div className="absolute inset-0.5 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <Card 
                className={`h-full overflow-hidden transition-all duration-300 bg-card/60 backdrop-blur-sm border border-border/30 hover:border-primary/20 relative z-10 ${
                  hoveredIndex === index ? 'shadow-xl' : 'shadow-md'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                  <div 
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6 transition-transform duration-300 group-hover:scale-110`}
                  >
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="mt-auto pt-6 border-t border-border/20">
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <motion.li 
                          key={i}
                          className="flex items-center text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors"
                          initial={{ x: -5, opacity: 0.8 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ 
                            delay: 0.1 * i,
                            type: 'spring',
                            stiffness: 300,
                            damping: 20
                          }}
                          viewport={{ once: true, amount: 0.5 }}
                        >
                          <ChevronRight className="w-4 h-4 mr-2 text-primary" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="mt-6 px-0 group/button text-foreground/70 hover:text-foreground hover:bg-transparent"
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Subtle hover highlight */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10 blur-xl`} />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ delay: 0.6 }}
        >
          <Button 
            size="lg" 
            className="group relative overflow-hidden px-8 py-6 text-base font-medium"
          >
            <span className="relative z-10 flex items-center">
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </motion.div>
      </div>
      
      {/* Animated floating elements */}
      <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-600/20 blur-3xl -z-10" />
      <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-600/20 blur-3xl -z-10" />
    </motion.section>
  );
};