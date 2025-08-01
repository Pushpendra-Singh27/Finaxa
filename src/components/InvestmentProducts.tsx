import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Plane, Home, BarChart3, Check, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const investments = [
  {
    id: 1,
    title: 'Aviation Investments',
    tagline: 'Earn from aircraft leasing, aviation operations, and logistics infrastructure—an exclusive, fast-growing sector.',
    roi: '28%',
    minInvestment: 'AED 200,000',
    period: '2 years',
    bonus: '6%',
    specialBenefit: 'Discounted rate on flying hours',
    icon: <Plane className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />,
    bgImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    title: 'Real Estate Investments',
    tagline: 'Invest in premium commercial and residential properties with strong rental yields and capital appreciation.',
    roi: '22%',
    minInvestment: 'AED 150,000',
    period: '5 years',
    icon: <Home className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />,
    bgImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    title: 'Commodity Trading',
    tagline: 'Diversify with gold, oil, and high-demand global commodities. A powerful hedge against inflation and market volatility.',
    roi: '36%',
    minInvestment: 'AED 100,000',
    period: '1 year',
    bonus: '6%',
    icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />,
    bgImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

interface InvestmentProductsProps {
  onOpenPopup?: () => void;
}

export const InvestmentProducts = ({ onOpenPopup }: InvestmentProductsProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  // Handle both hover and click states
  const isExpanded = (index: number) => {
    return hoveredIndex === index || clickedIndex === index;
  };

  // Handle click/tap for mobile
  const handleTileClick = (index: number) => {
    if (clickedIndex === index) {
      setClickedIndex(null); // Close if already open
    } else {
      setClickedIndex(index); // Open this tile
    }
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
            Investment Products
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Explore our exclusive investment opportunities across various high-growth sectors
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 max-w-4xl lg:max-w-6xl mx-auto"
        >
          {investments.map((investment, index) => (
            <motion.div 
              key={investment.id} 
              variants={item}
              className="group"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => handleTileClick(index)}
            >
              <motion.div
                className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-500 cursor-pointer"
                animate={{
                  height: isExpanded(index) ? (investment.bonus ? 900 : 700) : 200,
                  scale: isExpanded(index) ? 1.02 : 1,
                }}
                transition={{ 
                  duration: 0.4, 
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                {/* Background Image with Gradient Overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${investment.bgImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />

                {/* Initial State - Compact View */}
                <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex items-center justify-between h-[200px]">
                  <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6 flex-1 min-w-0">
                    <div className="p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex-shrink-0">
                        {investment.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">
                      {investment.title}
                    </h3>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 pr-4">
                        {investment.tagline}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6 flex-shrink-0">
                    <span className="px-4 py-2 text-sm font-bold rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg whitespace-nowrap">
                      Upto {investment.roi} ROI
                    </span>
                    <motion.div
                      className="p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"
                      animate={{ rotate: isExpanded(index) ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                    </motion.div>
                  </div>
                </div>

                {/* Expanded State - Full Information */}
                <motion.div
                  className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pb-4 sm:pb-6 md:pb-8 lg:pb-10 xl:pb-12"
                  animate={{
                    opacity: isExpanded(index) ? 1 : 0,
                    y: isExpanded(index) ? 0 : 20,
                  }}
                  transition={{ 
                    duration: 0.3, 
                    delay: isExpanded(index) ? 0.1 : 0,
                    ease: "easeOut"
                  }}
                >
                  <div className="border-t border-white/20 pt-4 sm:pt-6 md:pt-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
                      <div>
                        <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-3 sm:mb-4 md:mb-6">
                          Investment Details
                        </h4>
                        <div className="space-y-2 sm:space-y-3 md:space-y-4">
                          <motion.div 
                            className="flex items-center justify-between p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                            animate={{ 
                              opacity: isExpanded(index) ? 1 : 0,
                              x: isExpanded(index) ? 0 : -20 
                            }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                          >
                            <span className="text-xs sm:text-sm md:text-base text-white/80">Min. Investment:</span>
                            <span className="font-semibold text-white text-xs sm:text-sm md:text-base">
                              {investment.minInvestment}
                            </span>
                          </motion.div>
                          <motion.div 
                            className="flex items-center justify-between p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                            animate={{ 
                              opacity: isExpanded(index) ? 1 : 0,
                              x: isExpanded(index) ? 0 : -20 
                            }}
                            transition={{ duration: 0.3, delay: 0.25 }}
                          >
                            <span className="text-xs sm:text-sm md:text-base text-white/80">Min. Period:</span>
                            <span className="font-semibold text-white text-xs sm:text-sm md:text-base">
                              {investment.period}
                            </span>
                          </motion.div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-3 sm:mb-4 md:mb-6">
                          Key Benefits
                        </h4>
                        <div className="space-y-2 sm:space-y-3">
                          {[
                            "High potential returns",
                            "Diversified portfolio", 
                            "Professional management",
                            "Regular reporting"
                          ].map((benefit, benefitIndex) => (
                            <motion.div 
                              key={benefitIndex}
                              className="flex items-center p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                              animate={{ 
                                opacity: isExpanded(index) ? 1 : 0,
                                x: isExpanded(index) ? 0 : 20 
                              }}
                              transition={{ 
                                duration: 0.3, 
                                delay: 0.2 + (benefitIndex * 0.05) 
                              }}
                            >
                              <Check className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-400 mr-2 sm:mr-3 flex-shrink-0" />
                              <span className="text-xs sm:text-sm md:text-base text-white/90">{benefit}</span>
                            </motion.div>
                          ))}
                          {investment.specialBenefit && (
                            <motion.div 
                              className="flex items-center p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30"
                              animate={{ 
                                opacity: isExpanded(index) ? 1 : 0,
                                x: isExpanded(index) ? 0 : 20 
                              }}
                              transition={{ 
                                duration: 0.3, 
                                delay: 0.4 
                              }}
                            >
                              <Check className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-400 mr-2 sm:mr-3 flex-shrink-0" />
                              <span className="text-xs sm:text-sm md:text-base text-white/90 font-medium">{investment.specialBenefit}</span>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Bonus Section - Separate Row */}
                    {investment.bonus && (
                      <div className="flex flex-col items-center space-y-3 sm:space-y-4 mb-6 sm:mb-8 px-4 sm:px-6 md:px-8">
                        <motion.div 
                          className="flex items-center justify-between p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/30 w-full"
                          animate={{ 
                            opacity: isExpanded(index) ? 1 : 0,
                            y: isExpanded(index) ? 0 : 20 
                          }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                        >
                          <span className="text-xs sm:text-sm md:text-base text-white/90">Bonus after period:</span>
                          <span className="font-semibold text-yellow-300 text-xs sm:text-sm md:text-base">
                            Upto {investment.bonus}
                          </span>
                        </motion.div>
                        <motion.div 
                          className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-400/20 w-full"
                          animate={{ 
                            opacity: isExpanded(index) ? 1 : 0,
                            y: isExpanded(index) ? 0 : 20 
                          }}
                          transition={{ duration: 0.3, delay: 0.35 }}
                        >
                          <div className="text-xs sm:text-sm text-white/80 space-y-1">
                            <div className="flex items-center">
                              <Check className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mr-2 flex-shrink-0" />
                              <span>Applicable on long term contract</span>
                            </div>
                            <div className="flex items-center">
                              <Check className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mr-2 flex-shrink-0" />
                              <span>Lock-in period: 2 years to be entitled for bonus</span>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    )}

                    {/* Invest Now Button - Centered */}
                    <div className="flex justify-center">
                      <motion.button 
                        className="w-full max-w-md py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
                        animate={{ 
                          opacity: isExpanded(index) ? 1 : 0,
                          y: isExpanded(index) ? 0 : 20 
                        }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={onOpenPopup}
                      >
                        Schedule Now
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentProducts;
