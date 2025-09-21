import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, hoverLift } from '@/utils/animations';
import { Project } from '@/types';

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <motion.section 
      className="scroll-section projects-section"
      data-section="2"
    >
      <motion.div
        className="projects-content"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="section-title"
          variants={staggerItem}
        >
          Featured Projects
        </motion.h2>
        
        <motion.p 
          className="section-description"
          variants={staggerItem}
        >
          Here are some of my recent projects that showcase my skills and passion for development.
        </motion.p>
        
        <motion.div 
          className="projects-grid"
          variants={staggerItem}
        >
          {projects.filter(project => project.featured).map((project) => (
            <motion.div 
              key={project.id}
              className="project-card"
              variants={staggerItem}
              {...hoverLift}
              whileHover={{ scale: 1.02 }}
            >
              <div className="project-header">
                <div className="project-title-row">
                  <h3 className="project-title">{project.title}</h3>
                  {project.inProgress && (
                    <span className="project-status in-progress">
                      In Progress
                    </span>
                  )}
                </div>
                <div className="project-links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-github-link">
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-live-link">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ProjectsSection;