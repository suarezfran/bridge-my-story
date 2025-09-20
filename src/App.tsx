import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useScroll } from '@/hooks/useScroll';
import { useSectionNavigation } from '@/hooks/useSectionNavigation';
import { sections, projects, experience, education } from '@/data/portfolio';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import EducationSection from '@/components/sections/EducationSection';
import SanFranciscoSection from '@/components/sections/SanFranciscoSection';
import ProgressIndicator from '@/components/navigation/ProgressIndicator';
import SectionNavigation from '@/components/navigation/SectionNavigation';
import './App.css';

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { currentSection, scrollProgress } = useScroll();
  const { scrollToSection } = useSectionNavigation();

  const aboutStats = [
    { number: '5+', label: 'Years Experience' },
    { number: '20+', label: 'Projects Completed' },
    { number: '∞', label: 'Dreams' }
  ];

  return (
    <div className="app-container" ref={containerRef}>
      <div className="golden-gate-bg">
        <video
          className="bg-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/golden-gate-video.mp4" type="video/mp4" />
        </video>
        <motion.div 
          className="bg-overlay"
          style={{
            opacity: sections[currentSection]?.bgOpacity || 0.1
          }}
        />
      </div>

      <ProgressIndicator scrollProgress={scrollProgress} />

      <SectionNavigation 
        sections={sections}
        currentSection={currentSection}
        onSectionClick={scrollToSection}
      />

      <div className="scroll-content">
        <HeroSection />
        
        <AboutSection stats={aboutStats} />
        
        <ProjectsSection projects={projects} />
        
        <ExperienceSection experience={experience} />
        
        <EducationSection education={education} />
        
        <SanFranciscoSection />
      </div>

      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;