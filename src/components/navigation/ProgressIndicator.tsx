import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';

interface ProgressIndicatorProps {
  scrollProgress: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ scrollProgress }) => {
  return (
    <motion.div 
      className="progress-indicator"
      {...fadeInUp}
      transition={{ delay: 1, duration: 0.8 }}
    >
      <div className="progress-bar">
        <motion.div 
          className="progress-fill"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
      <div className="progress-text">
        {Math.round(scrollProgress * 100)}%
      </div>
    </motion.div>
  );
};

export default ProgressIndicator;