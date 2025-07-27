import { motion, Variants } from 'framer-motion';
import dubaiImage from '@/assets/lucy-m-s3ZrIeOwqpM-unsplash.jpg';

interface ImageBackgroundSectionProps {
  children: React.ReactNode;
  className?: string;
}

const sectionVariants: Variants = {
  initial: {},
  hover: {},
};

const backgroundVariants: Variants = {
  initial: {
    filter: 'blur(0px)',
  },
  hover: {
    filter: 'blur(2px)',
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

const scaleVariants: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

const overlayVariants: Variants = {
  initial: {
    opacity: 0,
  },
  hover: {
    opacity: 0.5,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

export const ImageBackgroundSection = ({
  children,
  className = '',
}: ImageBackgroundSectionProps) => {
  return (
    <motion.section 
      className={`relative overflow-hidden ${className}`}
      variants={sectionVariants}
      initial="initial"
      whileHover="hover"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        {/* Fixed Background Layer */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${dubaiImage})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          variants={backgroundVariants}
        />
        
        {/* Scale Animation Layer */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${dubaiImage})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            opacity: 0,
          }}
          variants={scaleVariants}
        />
        
        <motion.div 
          className="absolute inset-0 bg-black"
          style={{ opacity: 0.25 }}
          variants={overlayVariants}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.section>
  );
};

export default ImageBackgroundSection;
