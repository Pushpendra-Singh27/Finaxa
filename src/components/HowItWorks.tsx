import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Users, Target, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '1',
    title: 'Consultation',
    description: 'Speak with our expert advisors to understand the best investment option for your financial goals.',
    icon: <Users className="w-8 h-8" />,
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
    borderColor: 'border-blue-500/30',
    iconColor: 'text-blue-500'
  },
  {
    number: '2',
    title: 'Personalized Investment Plan',
    description: 'We tailor a high-yield, secure strategy in Real Estate, Aviation, or Commodities based on your needs.',
    icon: <Target className="w-8 h-8" />,
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
    borderColor: 'border-purple-500/30',
    iconColor: 'text-purple-500'
  },
  {
    number: '3',
    title: 'Growth & Reporting',
    description: 'Sit back and watch your investment grow. We provide regular updates, performance tracking, and full transparency.',
    icon: <TrendingUp className="w-8 h-8" />,
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-500/10 to-emerald-500/10',
    borderColor: 'border-green-500/30',
    iconColor: 'text-green-500'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

interface HowItWorksProps {
  onOpenPopup?: () => void;
}

export const HowItWorks = ({ onOpenPopup }: HowItWorksProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <motion.div
        ref={containerRef}
        style={{ y, opacity }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6"
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Simple 3-Step Process
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 md:mb-8 leading-tight">
            How It{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Our streamlined process makes investing simple, secure, and profitable
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-7xl mx-auto"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <motion.div
                className={`relative p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${step.borderColor}`}
                whileHover={{
                  borderColor: "rgba(59, 130, 246, 0.5)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${step.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Step Number */}
                  <motion.div
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg mb-6 sm:mb-8 group-hover:shadow-xl transition-all duration-300`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {step.number}
                  </motion.div>
                  
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white shadow-lg mb-6 sm:mb-8 group-hover:shadow-xl transition-all duration-300`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {step.icon}
                  </motion.div>
                  
                  <motion.h3
                    className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.title}
                  </motion.h3>
                  
                  <motion.p
                    className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {step.description}
                  </motion.p>
                  
                  {/* Hover Arrow */}
                  <motion.div
                    className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ x: 20, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white shadow-lg`}>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </motion.div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>



        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 sm:mt-20 md:mt-24 lg:mt-32"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              y: -2,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenPopup}
            className="inline-flex items-center px-8 py-4 sm:px-12 sm:py-5 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white font-semibold text-lg sm:text-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <span>Talk to an Expert</span>
            <motion.div
              className="ml-3 group-hover:translate-x-1 transition-transform duration-300"
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HowItWorks; 