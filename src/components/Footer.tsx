import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Globe, Mail, Phone, MapPin, ArrowRight, Shield, Award, Users, TrendingUp } from 'lucide-react';

export const Footer = () => {
  const footerLinks = {
    'Investment Services': [
      { label: 'Portfolio Management', href: '#' },
      { label: 'Wealth Advisory', href: '#' },
      { label: 'Risk Management', href: '#' },
      { label: 'Tax Optimization', href: '#' }
    ],
    'Company': [
      { label: 'About Celestia Capital', href: '#' },
      { label: 'Our Team', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press & Media', href: '#' }
    ],
    'Resources': [
      { label: 'Investment Guide', href: '#' },
      { label: 'Market Insights', href: '#' },
      { label: 'Educational Webinars', href: '#' },
      { label: 'Client Portal', href: '#' }
    ],
    'Support': [
      { label: 'Contact Us', href: '#' },
      { label: 'Help Center', href: '#' },
      { label: 'Compliance', href: '#' },
      { label: 'Legal Documents', href: '#' }
    ]
  };

  const certifications = [
    { icon: <Shield className="w-4 h-4" />, text: "SEC Registered" },
    { icon: <Award className="w-4 h-4" />, text: "FINRA Member" },
    { icon: <Users className="w-4 h-4" />, text: "SIPC Protected" },
    { icon: <TrendingUp className="w-4 h-4" />, text: "ISO 27001" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16"
        >
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div 
              className="flex items-center space-x-3 mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">CC</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Celestia Capital
                </h3>
                <p className="text-sm text-gray-400">Premium Investment Solutions</p>
              </div>
            </motion.div>
            
            <motion.p 
              className="mb-8 max-w-md text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Empowering sophisticated investors with high-yield, asset-backed opportunities 
              designed for long-term growth and wealth preservation.
            </motion.p>

            {/* Contact Info */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div 
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-sm">contact@celestiacapital.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-sm">+1 (555) 123-4567</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-purple-400" />
                </div>
                <span className="text-sm">Dubai, UAE</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center">
                  <Globe className="w-4 h-4 text-orange-400" />
                </div>
                <span className="text-sm">Global Investment Services</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="font-semibold text-white mb-6 text-lg">{category}</h3>
              <ul className="space-y-4">
                {links.map((link, linkIndex) => (
                  <motion.li 
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: linkIndex * 0.1 }}
                  >
                    <motion.a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center group"
                      whileHover={{ x: 5 }}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <Separator className="mb-12 bg-gradient-to-r from-transparent via-gray-600 to-transparent" />

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.text}
              className="flex items-center space-x-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-blue-400">{cert.icon}</div>
              <span className="text-sm text-gray-300 font-medium">{cert.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Footer */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Celestia Capital. All rights reserved.</p>
          </div>
          
          <div className="flex items-center space-x-8">
            <span className="text-gray-400">Regulated by SEC & FINRA</span>
            <span className="text-gray-400">SIPC Protected</span>
            <span className="text-gray-400">ISO 27001 Certified</span>
          </div>
        </motion.div>

        {/* Compliance Notice */}
        <motion.div 
          className="mt-12 p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs text-gray-400 leading-relaxed">
            <strong className="text-white">Investment Disclaimer:</strong> All investments involve risk of loss. Past performance 
            is not indicative of future results. Please consult with a financial advisor before making 
            investment decisions. Celestia Capital is a registered investment advisor. Investment products 
            are not FDIC insured, may lose value, and are not bank guaranteed.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};