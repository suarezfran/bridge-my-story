import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/utils/animations';
import CardCarousel from '@/components/CardCarousel';

const AboutSection: React.FC = () => {
  // Your personal photos for the carousel
  const personalImages = [
    '/about-me/tree-photo.jpeg',
    '/about-me/pl-photo.jpeg',
    '/about-me/yt-photo.jpeg', 
    '/about-me/gg-mine.jpeg'
  ];

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
        
        <motion.div 
          className="about-content-wrapper"
          variants={staggerItem}
        >
          <motion.div 
            className="about-image-container"
            variants={staggerItem}
          >
            <CardCarousel 
              images={personalImages}
              autoPlay={true}
              autoPlayInterval={4000}
            />
          </motion.div>
          
          <motion.div 
            className="about-text"
            variants={staggerItem}
          >
            <motion.p 
              className="section-description"
              variants={staggerItem}
            >
              Passionate and committed engineer from Uruguay with a dream to make an impact 
              in San Francisco's tech ecosystem. Experienced in tackling complex challenges, 
              optimizing processes, and building scalable, impactful systems.
            </motion.p>
          </motion.div>
        </motion.div>
        
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;