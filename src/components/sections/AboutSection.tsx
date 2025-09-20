import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/utils/animations';
import { StatItem } from '@/types';

interface AboutSectionProps {
  stats: StatItem[];
}

const AboutSection: React.FC<AboutSectionProps> = ({ stats }) => {
  return (
    <motion.section 
      className="scroll-section about-section"
      data-section="1"
    >
      <motion.div
        className="about-content"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="section-title"
          variants={staggerItem}
        >
          About Me
        </motion.h2>
        
        <motion.p 
          className="section-description"
          variants={staggerItem}
        >
          Passionate software engineer from Uruguay with a dream to make an impact 
          in San Francisco's tech ecosystem. I specialize in full-stack development 
          and love creating innovative solutions that solve real-world problems.
        </motion.p>
        
        <motion.div 
          className="about-stats"
          variants={staggerItem}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="stat-item"
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;