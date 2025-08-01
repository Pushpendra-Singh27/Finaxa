import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Custom Animated Icons
const AnimatedBuildingIcon = () => (
  <motion.svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
  >
    <motion.path
      d="M3 21h18M3 7h18M3 7v14M9 7v14M15 7v14M3 7l9-4 9 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
    />
    <motion.rect
      x="6"
      y="12"
      width="3"
      height="6"
      fill="currentColor"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
    />
    <motion.rect
      x="15"
      y="12"
      width="3"
      height="6"
      fill="currentColor"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.5 }}
    />
  </motion.svg>
);

const AnimatedGlobeIcon = () => (
  <motion.svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
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
  </motion.svg>
);

const AnimatedUsersIcon = () => (
  <motion.svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
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
  </motion.svg>
);

const AnimatedBriefcaseIcon = () => (
  <motion.svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
  >
    <motion.rect
      x="2"
      y="7"
      width="20"
      height="14"
      rx="2"
      ry="2"
      stroke="currentColor"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
    />
    <motion.path
      d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.3 }}
    />
    <motion.rect
      x="6"
      y="9"
      width="12"
      height="4"
      fill="currentColor"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
    />
  </motion.svg>
);

const AnimatedHomeIcon = () => (
  <motion.svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
  >
    <motion.path
      d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
    />
    <motion.polyline
      points="9,22 9,12 15,12 15,22"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.3 }}
    />
    <motion.circle
      cx="12"
      cy="8"
      r="1"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
    />
  </motion.svg>
);

const AnimatedTrendingIcon = () => (
  <motion.svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
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
  </motion.svg>
);

const clientTypes = [
  {
    icon: <AnimatedBuildingIcon />,
    title: "High-Net-Worth Individuals (HNIs)",
    description: "Tailored investment strategies for sophisticated investors seeking exclusive opportunities and premium returns."
  },
  {
    icon: <AnimatedGlobeIcon />,
    title: "Global Expats & NRIs",
    description: "Specialized solutions for international investors looking to diversify their portfolios across global markets."
  },
  {
    icon: <AnimatedUsersIcon />,
    title: "Entrepreneurs & Business Owners",
    description: "Strategic wealth management for business leaders seeking to preserve and grow their entrepreneurial wealth."
  },
  {
    icon: <AnimatedBriefcaseIcon />,
    title: "Professionals Seeking Passive Income",
    description: "Passive investment opportunities for busy professionals looking to build wealth through hands-off strategies."
  },
  {
    icon: <AnimatedHomeIcon />,
    title: "Families Planning Long-Term Wealth",
    description: "Multi-generational wealth planning focused on preserving family assets and creating lasting legacies."
  },
  {
    icon: <AnimatedTrendingIcon />,
    title: "New & Expanding Investors",
    description: "Comprehensive guidance for both new investors and those looking to expand their investment portfolios."
  }
];

export const AboutSection = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax effects for different sections
  const aboutY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const aboutOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0.7]);
  const serveY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const serveOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0.7]);

  return (
    <section className="relative overflow-hidden">
      {/* About Us Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/src/assets/dubai1.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            y: aboutY,
            opacity: aboutOpacity
          }}
        />
        
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                About Us
              </motion.h2>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 max-w-4xl mx-auto"
            >
              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.p 
                  className="text-lg text-white/90 leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  CELESTIA CAPITAL is a premier investment firm committed to creating extraordinary wealth-building opportunities across high-growth sectors. With a strategic focus on Real Estate, Aviation, and Commodities, we offer dynamic and diversified investment avenues that deliver returns of up to 36%.
                </motion.p>
                
                <motion.p 
                  className="text-lg text-white/90 leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  At Celestia Capital, we blend deep market insight with disciplined investment strategies to help our clients achieve sustainable, long-term growth. Our investment models are built on a foundation of transparency, risk management, and sectoral expertise making us a trusted partner for both seasoned investors and ambitious newcomers.
                </motion.p>
                
                <motion.p 
                  className="text-lg text-white/90 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  What sets us apart is our ability to identify and unlock value in niche, high yield markets. Whether it's premium real estate developments, aviation asset leasing, or trading in globally sought after commodities like gold and oil, we provide access to exclusive opportunities traditionally reserved for institutional investors.
                </motion.p>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.div 
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-white/90">To empower investors with exclusive opportunities that deliver exceptional returns while maintaining the highest standards of integrity and transparency.</p>
                </motion.div>
                
                <motion.div 
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-white/90">To be the leading investment partner for sophisticated investors seeking premium returns in high-growth markets worldwide.</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/src/assets/man-suit-is-holding-tablet-front-car-with-graph-it.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            y: serveY,
            opacity: serveOpacity
          }}
        />
        
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-24 h-24 bg-green-500/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.h3 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Who We Serve
            </motion.h3>
            <motion.p 
              className="text-xl text-white/90 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              At Celestia Capital, we serve a diverse group of forward-thinking investors. Whether you're new to investing or looking to expand your portfolio, we guide you at every step to make informed, profitable decisions.
            </motion.p>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
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
                className="group bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 transform-gpu perspective-1000 hover:bg-white/20 transition-all duration-500"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <motion.div 
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white mb-4 group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-300"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {client.icon}
                </motion.div>
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {client.title}
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  {client.description}
                </p>
                
                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default AboutSection;
