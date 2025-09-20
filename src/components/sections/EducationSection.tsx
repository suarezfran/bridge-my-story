import React from 'react';
import { motion } from 'framer-motion';
import { fadeInRight, staggerContainer, staggerItem, hoverLift } from '@/utils/animations';
import { Education } from '@/types';

interface EducationSectionProps {
  education: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <motion.section 
      className="scroll-section education-section"
      data-section="4"
    >
      <motion.div
        className="education-content"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="section-title"
          variants={staggerItem}
        >
          Education & Certifications
        </motion.h2>
        
        <motion.p 
          className="section-description"
          variants={staggerItem}
        >
          Continuous learning is at the core of my professional development.
        </motion.p>
        
        <motion.div 
          className="education-grid"
          variants={staggerItem}
        >
          {education.map((edu) => (
            <motion.div 
              key={edu.id}
              className="education-card"
              variants={staggerItem}
              {...hoverLift}
            >
              <div className="education-header">
                <h3 className="education-degree">{edu.degree}</h3>
                <div className="education-institution">{edu.institution}</div>
                <div className="education-field">{edu.field}</div>
                <div className="education-duration">
                  {edu.startDate} - {edu.endDate || 'Present'}
                </div>
              </div>
              
              {edu.description && (
                <p className="education-description">{edu.description}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default EducationSection;