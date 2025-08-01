import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { Star, ArrowRight } from 'lucide-react';

// Custom Animated Icons for Why Choose Us Section
const AnimatedTrendingIcon = () => (
  <motion.svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <motion.polyline
      points="22,12 18,12 15,21 9,3 6,12 2,12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
    />
    <motion.circle
      cx="18"
      cy="12"
      r="2"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.5 }}
    />
    <motion.circle
      cx="6"
      cy="12"
      r="2"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 1 }}
    />
    <motion.circle
      cx="15"
      cy="21"
      r="1.5"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 1.5 }}
    />
  </motion.svg>
);

const AnimatedShieldIcon = () => (
  <motion.svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <motion.path
      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
    />
    <motion.path
      d="M9 12l2 2 4-4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1, delay: 0.5 }}
    />
    <motion.circle
      cx="12"
      cy="12"
      r="3"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
    />
  </motion.svg>
);

const AnimatedLockIcon = () => (
  <motion.svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <motion.rect
      x="3"
      y="11"
      width="18"
      height="11"
      rx="2"
      ry="2"
      stroke="currentColor"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
    />
    <motion.circle
      cx="12"
      cy="7"
      r="4"
      stroke="currentColor"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.3 }}
    />
    <motion.path
      d="M8 11V7a4 4 0 0 1 8 0v4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.6 }}
    />
    <motion.circle
      cx="12"
      cy="16"
      r="1"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
    />
  </motion.svg>
);

const AnimatedUsersIcon = () => (
  <motion.svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <motion.path
      d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
    />
    <motion.circle
      cx="9"
      cy="7"
      r="4"
      stroke="currentColor"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.3 }}
    />
    <motion.path
      d="M22 21v-2a4 4 0 0 0-3-3.87"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.6 }}
    />
    <motion.path
      d="M16 3.13a4 4 0 0 1 0 7.75"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.9 }}
    />
    <motion.circle
      cx="12"
      cy="12"
      r="1"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 1.2 }}
    />
  </motion.svg>
);

const AnimatedGlobeIcon = () => (
  <motion.svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <motion.circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
    />
    <motion.path
      d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      stroke="currentColor"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.3 }}
    />
    <motion.circle
      cx="12"
      cy="12"
      r="3"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
    />
    <motion.path
      d="M12 2v20M2 12h20"
      stroke="currentColor"
      strokeWidth="1"
      strokeDasharray="2 2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.6 }}
    />
  </motion.svg>
);

const AnimatedBarChartIcon = () => (
  <motion.svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <motion.path
      d="M12 20V10M18 20V4M6 20v-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
    />
    <motion.rect
      x="4"
      y="14"
      width="4"
      height="6"
      fill="currentColor"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: [0, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.3 }}
    />
    <motion.rect
      x="10"
      y="10"
      width="4"
      height="10"
      fill="currentColor"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: [0, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.6 }}
    />
    <motion.rect
      x="16"
      y="4"
      width="4"
      height="16"
      fill="currentColor"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: [0, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.9 }}
    />
    <motion.circle
      cx="6"
      cy="17"
      r="1"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 1.2 }}
    />
  </motion.svg>
);

const benefits = [
  {
    icon: <AnimatedTrendingIcon />,
    title: "Returns up to 36% Annually",
    description: "Experience exceptional returns with our carefully curated investment opportunities across high-growth sectors.",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/10",
    borderColor: "border-green-500/30",
    iconColor: "text-green-500"
  },
  {
    icon: <AnimatedShieldIcon />,
    title: "100% Legally Structured & Transparent",
    description: "All investments are fully compliant with regulatory requirements and offer complete transparency.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-500"
  },
  {
    icon: <AnimatedLockIcon />,
    title: "Secure, Asset-Backed Opportunities",
    description: "Every investment is backed by tangible assets, providing security and peace of mind.",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-500"
  },
  {
    icon: <AnimatedUsersIcon />,
    title: "Dedicated Investment Advisors",
    description: "Get personalized guidance from our team of experienced investment professionals.",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/10 to-red-500/10",
    borderColor: "border-orange-500/30",
    iconColor: "text-orange-500"
  },
  {
    icon: <AnimatedGlobeIcon />,
    title: "Global Portfolio Exposure",
    description: "Diversify your investments across international markets and emerging opportunities.",
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-500/10 to-purple-500/10",
    borderColor: "border-indigo-500/30",
    iconColor: "text-indigo-500"
  },
  {
    icon: <AnimatedBarChartIcon />,
    title: "Detailed Reporting & Ongoing Support",
    description: "Receive comprehensive reports and continuous support throughout your investment journey.",
    gradient: "from-teal-500 to-green-500",
    bgGradient: "from-teal-500/10 to-green-500/10",
    borderColor: "border-teal-500/30",
    iconColor: "text-teal-500"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
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

interface WhyChooseUsProps {
  onOpenPopup?: () => void;
}

export const WhyChooseUs = ({ onOpenPopup }: WhyChooseUsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 overflow-hidden">
      {/* Animated Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop')`
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 1, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Animated Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-700/40 to-gray-300/30"
          animate={{
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-500/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-white text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4 mr-2" />
            Why Choose Celestia Capital
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">
            Why Choose{' '}
            <span className="text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">
              Celestia Capital?
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-4xl mx-auto leading-relaxed drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
          >
            Partner with Celestia Capital — a trusted name in high-yield, asset-backed investments designed for long-term growth and security.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <motion.div
                className={`relative p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden ${benefit.borderColor}`}
                whileHover={{
                  borderColor: "rgba(59, 130, 246, 0.5)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center text-white shadow-lg mb-6 sm:mb-8 group-hover:shadow-xl transition-all duration-300`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {benefit.icon}
                  </motion.div>
                  
                  <motion.h3
                    className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {benefit.title}
                  </motion.h3>
                  
                  <motion.p
                    className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {benefit.description}
                  </motion.p>
                  
                  {/* Hover Arrow */}
                  <motion.div
                    className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ x: 20, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${benefit.gradient} flex items-center justify-center text-white shadow-lg`}>
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
          transition={{ duration: 0.8, delay: 0.6 }}
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
            <span>Schedule Now</span>
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

export default WhyChooseUs;
