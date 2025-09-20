import { AnimationVariants } from '@/types';

export const fadeInUp: AnimationVariants = {
  initial: { opacity: 0, y: 60 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const fadeInLeft: AnimationVariants = {
  initial: { opacity: 0, x: -60 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const fadeInRight: AnimationVariants = {
  initial: { opacity: 0, x: 60 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const staggerContainer: AnimationVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const staggerItem: AnimationVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
};

export const hoverLift = {
  whileHover: { y: -5 },
  transition: { duration: 0.2 }
};