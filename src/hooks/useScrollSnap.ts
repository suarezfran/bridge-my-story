import { useEffect, useRef } from 'react';

export const useScrollSnap = () => {
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<number | null>(null);
  const isManualNavigation = useRef(false);
  const manualNavigationTimeout = useRef<number | null>(null);

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
      
      let closestSection: Element | null = null;
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
        const targetTop = (closestSection as HTMLElement).offsetTop;
        window.scrollTo({
          top: targetTop,
          behavior: 'smooth'
        });
      }
    };

    // Very gentle scroll handler - only activates when scrolling stops
    const handleScroll = () => {
      if (isScrolling.current || isManualNavigation.current) return;
      
      isScrolling.current = true;
      
      // Clear existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      // Set timeout to detect when scrolling stops - balanced delay for responsiveness
      scrollTimeout.current = window.setTimeout(() => {
        snapToNearestSection();
        isScrolling.current = false;
      }, 200); // Balanced timeout for good responsiveness without interference
    };

    // Function to temporarily disable scroll snapping for manual navigation
    const disableScrollSnapTemporarily = () => {
      isManualNavigation.current = true;
      
      // Clear existing manual navigation timeout
      if (manualNavigationTimeout.current) {
        clearTimeout(manualNavigationTimeout.current);
      }
      
      // Re-enable scroll snapping after manual navigation is complete
      manualNavigationTimeout.current = window.setTimeout(() => {
        isManualNavigation.current = false;
      }, 1000); // Give enough time for smooth scroll to complete
    };

    // Listen for manual navigation events
    const handleManualNavigation = () => {
      disableScrollSnapTemporarily();
    };

    // Add event listener for manual navigation
    window.addEventListener('manual-navigation', handleManualNavigation);

    // Add only scroll event listener - no wheel interference
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('manual-navigation', handleManualNavigation);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      if (manualNavigationTimeout.current) {
        clearTimeout(manualNavigationTimeout.current);
      }
    };
  }, []);
};