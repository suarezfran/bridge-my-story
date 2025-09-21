import { useEffect, useRef } from 'react';

export const useScrollSnap = () => {
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Detect if device is mobile/touch device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                     ('ontouchstart' in window) || 
                     (navigator.maxTouchPoints > 0);
    
    // Only enable proximity scroll snapping on desktop devices
    if (isMobile) {
      return;
    }

    const snapToNearestSection = () => {
      const sections = document.querySelectorAll('.scroll-section');
      if (sections.length === 0) return;
      
      const windowHeight = window.innerHeight;
      const scrollTop = window.pageYOffset;
      
      let closestSection = null;
      let closestDistance = Infinity;
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollTop;
        const distance = Math.abs(scrollTop - sectionTop);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section;
        }
      });
      
      // Only snap if we're close to a section (within 15% of viewport height)
      // This creates a more noticeable "magnetic" effect for better section alignment
      if (closestSection && closestDistance < windowHeight * 0.15) {
        const targetTop = closestSection.offsetTop;
        window.scrollTo({
          top: targetTop,
          behavior: 'smooth'
        });
      }
    };

    // Very gentle scroll handler - only activates when scrolling stops
    const handleScroll = () => {
      if (isScrolling.current) return;
      
      isScrolling.current = true;
      
      // Clear existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      // Set timeout to detect when scrolling stops - balanced delay for responsiveness
      scrollTimeout.current = setTimeout(() => {
        snapToNearestSection();
        isScrolling.current = false;
      }, 200); // Balanced timeout for good responsiveness without interference
    };

    // Add only scroll event listener - no wheel interference
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);
};