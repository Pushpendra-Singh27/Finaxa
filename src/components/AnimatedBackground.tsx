import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  children?: React.ReactNode;
}

export const AnimatedBackground = ({ children }: AnimatedBackgroundProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for dark mode preference
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    
    // Set initial value
    setIsDarkMode(darkModeMediaQuery.matches);
    
    // Listen for changes
    darkModeMediaQuery.addEventListener('change', handleChange);
    
    // Listen for custom theme change events
    const handleThemeChange = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => {
      darkModeMediaQuery.removeEventListener('change', handleChange);
      observer.disconnect();
    };
  }, []);

  const gradientVariants = {
    light: {
      background: [
        'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 50%, #d1d5db 100%)',
        'linear-gradient(135deg, #d1d5db 0%, #f3f4f6 50%, #e5e7eb 100%)',
        'linear-gradient(135deg, #e5e7eb 0%, #d1d5db 50%, #f3f4f6 100%)',
      ],
      transition: {
        duration: 15,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'reverse' as const,
      },
    },
    dark: {
      background: [
        'linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%)',
        'linear-gradient(135deg, #1f2937 0%, #111827 50%, #1f2937 100%)',
        'linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%)',
      ],
      transition: {
        duration: 20,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'reverse' as const,
      },
    },
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <motion.div
        className="absolute inset-0 -z-10"
        animate={isDarkMode ? 'dark' : 'light'}
        variants={gradientVariants}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;
