import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/utils/animations';

const SanFranciscoSection: React.FC = () => {
  return (
    <motion.section 
      className="scroll-section sf-section"
      data-section="5"
    >
      <motion.div
        className="sf-content"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="section-title gradient-text"
          variants={staggerItem}
        >
          San Francisco
        </motion.h2>
        
        <motion.p 
          className="section-description"
          variants={staggerItem}
        >
          Where innovation meets artistry, and where every line of code can change the world. 
          Welcome to the city of endless possibilities.
        </motion.p>
        
        <motion.div
          className="cta-section"
          variants={staggerItem}
        >
          <motion.div
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Let's Connect</span>
          </motion.div>
          
          <motion.div
            className="contact-info"
            variants={staggerItem}
          >
            <p>Ready to collaborate on something amazing?</p>
            <a href="mailto:francisco@example.com" className="contact-link">
              Get in touch
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default SanFranciscoSection;