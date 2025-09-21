import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CardCarouselProps {
  images: string[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const CardCarousel: React.FC<CardCarouselProps> = ({ 
  images, 
  autoPlay = true, 
  autoPlayInterval = 3000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, images.length]);


  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="carousel-card"
            initial={{ 
              opacity: 0, 
              rotateY: 90,
              scale: 0.8
            }}
            animate={{ 
              opacity: 1, 
              rotateY: 0,
              scale: 1
            }}
            exit={{ 
              opacity: 0, 
              rotateY: -90,
              scale: 0.8
            }}
            transition={{ 
              duration: 0.6, 
              ease: "easeInOut" 
            }}
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
          >
            <img
              src={images[currentIndex]}
              alt={`Carousel image ${currentIndex + 1}`}
              className="carousel-image"
            />
            <div className="card-glow" />
          </motion.div>
        </AnimatePresence>
      </div>


      {/* Dots indicator */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
