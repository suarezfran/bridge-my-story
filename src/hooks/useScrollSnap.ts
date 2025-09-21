import { useEffect } from 'react';

export const useScrollSnap = () => {
  useEffect(() => {
    // Scroll snapping is completely disabled
    // This allows normal, fast scrolling behavior
    console.log('Scroll snapping disabled - using normal scroll behavior');
  }, []);
};