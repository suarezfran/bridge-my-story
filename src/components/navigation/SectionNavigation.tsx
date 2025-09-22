import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';

interface SectionNavigationProps {
  currentSection: number;
  onSectionClick: (index: number) => void;
}

const SectionNavigation: React.FC<SectionNavigationProps> = ({ 
  currentSection, 
  onSectionClick 
}) => {
  const totalSections = 7; // Total number of sections in the portfolio

  return (
    <motion.div 
      className="section-nav"
      {...fadeInUp}
      transition={{ delay: 1.2, duration: 0.8 }}
    >
      {Array.from({ length: totalSections }, (_, index) => (
        <motion.button
          key={index}
          className={`section-dot ${currentSection === index ? 'active' : ''}`}
          onClick={() => onSectionClick(index)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        />
      ))}
    </motion.div>
  );
};

export default SectionNavigation;