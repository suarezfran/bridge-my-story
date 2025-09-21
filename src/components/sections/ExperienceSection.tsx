import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, hoverLift } from '@/utils/animations';
import { Experience } from '@/types';

interface ExperienceSectionProps {
  experience: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  return (
    <motion.section 
      className="scroll-section experience-section"
      data-section="3"
    >
      <motion.div
        className="experience-content"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="section-title"
          variants={staggerItem}
        >
          Professional Experience
        </motion.h2>
        
        <motion.div 
          className="experience-timeline"
          variants={staggerItem}
        >
          {experience.map((exp) => (
            <motion.div 
              key={exp.id}
              className="experience-item"
              variants={staggerItem}
              {...hoverLift}
            >
              <div className="experience-header">
                <h3 className="experience-position">{exp.position}</h3>
                <div className="experience-company">{exp.company}</div>
                <div className="experience-duration">
                  {exp.startDate} - {exp.endDate || 'Present'}
                </div>
                <div className="experience-location">{exp.location}</div>
              </div>
              
              <ul className="experience-description">
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ExperienceSection;