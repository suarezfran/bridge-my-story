import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/utils/animations';
import TypewriterComponent from '@/components/Typewriter';

const HeroSection: React.FC = () => {
  const nameRef = useRef<HTMLDivElement>(null);

  return (
    <motion.section 
      className="scroll-section hero-section"
      data-section="0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-content">
        <motion.div
          ref={nameRef}
          className="hero-name"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={staggerItem}>
            <TypewriterComponent />
          </motion.div>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          variants={staggerItem}
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: 1, 
            y: [0, 10, 0]
          }}
          transition={{ 
            opacity: { duration: 0.8, delay: 1 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <span className="scroll-text">Scroll to explore</span>
          <div className="scroll-arrow">↓</div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;