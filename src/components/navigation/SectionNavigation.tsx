import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';
import { Section } from '@/types';

interface SectionNavigationProps {
  sections: Section[];
  currentSection: number;
  onSectionClick: (index: number) => void;
}

const SectionNavigation: React.FC<SectionNavigationProps> = ({ 
  sections, 
  currentSection, 
  onSectionClick 
}) => {
  return (
    <motion.div 
      className="section-nav"
      {...fadeInUp}
      transition={{ delay: 1.2, duration: 0.8 }}
    >
      {sections.map((section, index) => (
        <motion.button
          key={section.id}
          className={`section-dot ${currentSection === index ? 'active' : ''}`}
          onClick={() => onSectionClick(index)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          title={section.title}
        />
      ))}
    </motion.div>
  );
};

export default SectionNavigation;