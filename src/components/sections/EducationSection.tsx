import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, hoverLift } from '@/utils/animations';
import { Education, Achievement } from '@/types';

interface EducationSectionProps {
  education: Education[];
  achievements: Achievement[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ education, achievements }) => {
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
          Education & Achievements
        </motion.h2>
        
        <motion.p 
          className="section-description"
          variants={staggerItem}
        >
          Continuous learning and competitive programming achievements that drive my professional development.
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
          
          {achievements.map((achievement) => (
            <motion.div 
              key={achievement.id}
              className="education-card achievement-card"
              variants={staggerItem}
              {...hoverLift}
            >
              <div className="education-header">
                <h3 className="education-degree">{achievement.title}</h3>
                {achievement.date === '2025' && (
                  <span className="achievement-status upcoming">
                    Upcoming
                  </span>
                )}
                <div className="education-institution">Universidad ORT Uruguay</div>
                <div className="education-duration">
                  {achievement.date}
                </div>
              </div>
              
              <p className="education-description">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default EducationSection;