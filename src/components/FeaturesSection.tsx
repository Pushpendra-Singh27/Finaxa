import { motion } from 'framer-motion';
import { TrendingUp, Layers, Shield } from 'lucide-react';

const features = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Regular Income Stream",
    description: "Secured investment enables efficient portfolio diversification and assists in portfolio risk mitigation.",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Portfolio Diversification",
    description: "Reduces risk and achieves more stable, long-term returns by spreading investments across different assets.",
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Fixed Income Security",
    description: "Features minimal risk, high fixed returns, and outperforming market performance.",
    gradient: "from-purple-500 to-fuchsia-600"
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

export const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Invest With Us
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r rounded-xl opacity-70 group-hover:opacity-100 blur transition duration-300 group-hover:duration-200 animate-tilt" />
              <div className="relative h-full bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
                <div className="mt-6">
                  <div className={`h-1 w-10 bg-gradient-to-r ${feature.gradient} rounded-full`} />
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
