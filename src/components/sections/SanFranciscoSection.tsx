import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/utils/animations';

const SanFranciscoSection: React.FC = () => {
  // Pictures from San Francisco trip
  const sanFranciscoImages = [
    '/SF trip/vercel.jpeg',
    '/SF trip/painted.jpeg',
    '/SF trip/meta.jpeg',
    '/SF trip/amazon.jpeg',
    '/SF trip/vanta.jpeg',
    '/SF trip/golden.jpeg', 
  ];

  return (
    <motion.section 
      className="scroll-section san-francisco-section"
      data-section="5"
    >
      <motion.div
        className="san-francisco-content"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="section-title"
          variants={staggerItem}
        >
          San Francisco Trip
        </motion.h2>
        
        <motion.p 
          className="section-description"
          variants={staggerItem}
        >
          I couldn’t help but capture glimpses of San Francisco — its streets, its colors, and of course, the ads that add a clever touch to the city (occasionally too clever to ignore).
        </motion.p>
        
        <motion.div 
          className="sf-cards-container"
          variants={staggerItem}
        >
          <div className="sf-cards-left">
            {sanFranciscoImages.slice(0, 3).map((image, index) => (
              <motion.div 
                key={index}
                className="sf-card"
                style={{
                  zIndex: 3 - index
                }}
                variants={staggerItem}
              >
                <div className="sf-card-inner">
                  <img
                    src={image}
                    alt={`San Francisco photo ${index + 1}`}
                    className="sf-card-image"
                  />
                  <div className="sf-card-glow" />
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="sf-cards-right">
            {sanFranciscoImages.slice(3, 6).map((image, index) => (
              <motion.div 
                key={index + 3}
                className="sf-card"
                style={{
                  zIndex: 3 - index
                }}
                variants={staggerItem}
              >
                <div className="sf-card-inner">
                  <img
                    src={image}
                    alt={`San Francisco photo ${index + 4}`}
                    className="sf-card-image"
                  />
                  <div className="sf-card-glow" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default SanFranciscoSection;
