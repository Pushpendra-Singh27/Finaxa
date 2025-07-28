import { motion, useScroll, useTransform } from 'framer-motion';
import { Building2, Globe, Users, Briefcase, Home, TrendingUp } from 'lucide-react';

const clientTypes = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "High-Net-Worth Individuals (HNIs)",
    description: "Tailored investment strategies for sophisticated investors seeking exclusive opportunities and premium returns."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Expats & NRIs",
    description: "Specialized solutions for international investors looking to diversify their portfolios across global markets."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Entrepreneurs & Business Owners",
    description: "Strategic wealth management for business leaders seeking to preserve and grow their entrepreneurial wealth."
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Professionals Seeking Passive Income",
    description: "Passive investment opportunities for busy professionals looking to build wealth through hands-off strategies."
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Families Planning Long-Term Wealth",
    description: "Multi-generational wealth planning focused on preserving family assets and creating lasting legacies."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "New & Expanding Investors",
    description: "Comprehensive guidance for both new investors and those looking to expand their investment portfolios."
  }
];

export const AboutSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  
  // Parallax effects for About Us section
  const aboutY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const aboutOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0.7]);

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            style={{ 
              y: aboutY, 
              opacity: aboutOpacity,
              transformStyle: 'preserve-3d',
            }}
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            whileHover={{ 
              rotateY: 5, 
              scale: 1.02,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="transform-gpu perspective-1000"
          >
            <div className="relative group">
              <motion.div 
                className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
                whileHover={{ scale: 1.2, rotate: 180 }}
                transition={{ duration: 0.8 }}
              />
              <motion.div 
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
                whileHover={{ scale: 1.2, rotate: -180 }}
                transition={{ duration: 0.8 }}
              />
              <motion.div 
                className="relative bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700"
                whileHover={{ 
                  y: -5,
                  rotateX: 2,
                  transition: { duration: 0.3 }
                }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
                  whileHover={{ 
                    color: '#2563eb',
                    transition: { duration: 0.3 }
                  }}
                >
                  About Us
                </motion.h2>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-4"
                >
                  <motion.p 
                    className="text-lg text-gray-600 dark:text-gray-300"
                    whileHover={{ 
                      color: '#374151',
                      transition: { duration: 0.3 }
                    }}
                  >
                    CELESTIA CAPITAL is a premier investment firm committed to creating extraordinary wealth-building opportunities across high-growth sectors. With a strategic focus on Real Estate, Aviation, and Commodities, we offer dynamic and diversified investment avenues that deliver returns of up to 36%.
                  </motion.p>
                  
                  <motion.p 
                    className="text-lg text-gray-600 dark:text-gray-300"
                    whileHover={{ 
                      color: '#374151',
                      transition: { duration: 0.3 }
                    }}
                  >
                    At Celestia Capital, we blend deep market insight with disciplined investment strategies to help our clients achieve sustainable, long-term growth. Our investment models are built on a foundation of transparency, risk management, and sectoral expertise making us a trusted partner for both seasoned investors and ambitious newcomers.
                  </motion.p>
                  
                  <motion.p 
                    className="text-lg text-gray-600 dark:text-gray-300"
                    whileHover={{ 
                      color: '#374151',
                      transition: { duration: 0.3 }
                    }}
                  >
                    What sets us apart is our ability to identify and unlock value in niche, high yield markets. Whether it's premium real estate developments, aviation asset leasing, or trading in globally sought after commodities like gold and oil, we provide access to exclusive opportunities traditionally reserved for institutional investors.
                  </motion.p>
                  
                  <motion.p 
                    className="text-lg text-gray-600 dark:text-gray-300"
                    whileHover={{ 
                      color: '#374151',
                      transition: { duration: 0.3 }
                    }}
                  >
                    Driven by performance, guided by integrity, and backed by results Celestia Capital is where vision meets value.
                  </motion.p>
                </motion.div>
                
                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            style={{ y, opacity }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Who We Serve
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                At Celestia Capital, we serve a diverse group of forward-thinking investors. Whether you're new to investing or looking to expand your portfolio, we guide you at every step to make informed, profitable decisions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {clientTypes.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  whileHover={{ 
                    y: -10, 
                    rotateX: 5, 
                    rotateY: 5,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 transform-gpu perspective-1000"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white mb-4 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {client.icon}
                  </motion.div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {client.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {client.description}
                  </p>
                  
                  {/* Hover effect overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
