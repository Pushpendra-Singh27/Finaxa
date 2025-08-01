import { motion, useInView } from 'framer-motion';
import { TrendingUp, Calendar, DollarSign } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const features = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Upto 36% Annual Profit",
    description: "Achieve exceptional returns with our proven investment strategies and market expertise.",
    gradient: "from-green-500 to-emerald-600",
    value: 36,
    suffix: "%"
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "36+ Months Investment Tenure",
    description: "Long-term investment opportunities designed for sustainable wealth growth and stability.",
    gradient: "from-blue-500 to-indigo-600",
    value: 36,
    suffix: "+"
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "100,000AED Minimum Investment",
    description: "Access premium investment opportunities with our competitive minimum investment threshold.",
    gradient: "from-purple-500 to-fuchsia-600",
    value: 100000,
    suffix: "AED"
  }
];

import type { Variants } from 'framer-motion';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

// Animated Counter Component
const AnimatedCounter = ({ value, suffix, className }: { value: number, suffix: string, className?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-gray-800/50 dark:to-gray-900/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Invest Smarter with CELESTIA CAPITAL
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our approach blends deep market intelligence with bespoke investment strategies for exceptional opportunities
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500 group-hover:duration-300 animate-tilt" 
                   style={{
                     background: `linear-gradient(45deg, ${feature.gradient.includes('green') ? '#10b981' : feature.gradient.includes('blue') ? '#3b82f6' : '#8b5cf6'}, ${feature.gradient.includes('green') ? '#059669' : feature.gradient.includes('blue') ? '#1d4ed8' : '#7c3aed'})`
                   }} />
              
              <div className="relative h-full bg-white/95 backdrop-blur-sm dark:bg-gray-800/95 rounded-2xl p-6 sm:p-8 shadow-xl border border-white/20 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white mb-6 shadow-lg`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                  <AnimatedCounter 
                    value={feature.value} 
                    suffix={feature.suffix} 
                    className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
                  />
                  <br />
                  <span className="text-lg sm:text-xl font-semibold">
                    {feature.title.split(' ').slice(1).join(' ')}
                  </span>
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="mt-6">
                  <div className={`h-1.5 w-12 bg-gradient-to-r ${feature.gradient} rounded-full shadow-sm`} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
