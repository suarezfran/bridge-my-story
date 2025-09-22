import { useEffect, useRef } from 'react';

export const useScrollSnap = () => {
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<number | null>(null);
  const isManualNavigation = useRef(false);
  const manualNavigationTimeout = useRef<number | null>(null);
  const isWheelScrolling = useRef(false);
  const wheelTimeout = useRef<number | null>(null);

  useEffect(() => {
    // Detect if device is mobile/touch device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                     ('ontouchstart' in window) || 
                     (navigator.maxTouchPoints > 0);
    
    // Detect Chrome browser for specific optimizations
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    
    // Only enable mandatory scroll snapping on desktop devices
    // Mobile devices will have natural scrolling behavior
    if (isMobile) {
      return;
    }

    const snapToNearestSection = () => {
      const sections = document.querySelectorAll('.scroll-section');
      if (sections.length === 0) return;
      
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      
      let closestSection: Element | null = null;
      let closestDistance = Infinity;
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollTop;
        const sectionCenter = sectionTop + rect.height / 2;
        
        // Calculate distance to section center for more accurate snapping
        const distance = Math.abs(scrollTop + windowHeight / 2 - sectionCenter);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section;
        }
      });
      
      // Mandatory snapping - always snap to the nearest section on desktop
      if (closestSection) {
        const targetTop = (closestSection as HTMLElement).offsetTop;
        window.scrollTo({
          top: targetTop,
          behavior: 'smooth'
        });
      }
    };

    // Mandatory scroll handler - activates when scrolling stops
    const handleScroll = () => {
      if (isScrolling.current || isManualNavigation.current || isWheelScrolling.current) return;
      
      isScrolling.current = true;
      
      // Clear existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      // Chrome needs slightly longer timeout due to its scroll behavior
      const timeoutDuration = isChrome ? 200 : 150;
      
      // Set timeout to detect when scrolling stops
      scrollTimeout.current = window.setTimeout(() => {
        snapToNearestSection();
        isScrolling.current = false;
      }, timeoutDuration);
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

    // Add scroll event listener for mandatory snapping
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Chrome-optimized wheel event handler
    const handleWheel = (e: WheelEvent) => {
      if (isManualNavigation.current) return;
      
      // Prevent default wheel behavior
      e.preventDefault();
      e.stopPropagation();
      
      // Set wheel scrolling flag to prevent scroll handler interference
      isWheelScrolling.current = true;
      
      // Clear existing wheel timeout
      if (wheelTimeout.current) {
        clearTimeout(wheelTimeout.current);
      }
      
      // Reset wheel scrolling flag after a delay
      wheelTimeout.current = window.setTimeout(() => {
        isWheelScrolling.current = false;
      }, 300);
      
      // Get current section more accurately
      const sections = document.querySelectorAll('.scroll-section');
      const totalSections = sections.length;
      
      let currentSectionIndex = 0;
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      
      // Find current section based on scroll position
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollTop;
        const sectionBottom = sectionTop + rect.height;
        
        // More robust section detection - check if we're in the middle portion of the section
        if (scrollTop >= sectionTop - windowHeight / 3 && scrollTop < sectionBottom - windowHeight / 3) {
          currentSectionIndex = index;
        }
      });
      
      // Determine target section based on wheel direction
      const delta = e.deltaY;
      let targetSectionIndex = currentSectionIndex;
      
      if (delta > 0 && currentSectionIndex < totalSections - 1) {
        // Scroll down
        targetSectionIndex = currentSectionIndex + 1;
      } else if (delta < 0 && currentSectionIndex > 0) {
        // Scroll up
        targetSectionIndex = currentSectionIndex - 1;
      } else {
        // Already at boundary, don't scroll
        return;
      }
      
      // Snap to target section
      const targetElement = document.querySelector(`[data-section="${targetSectionIndex}"]`);
      if (targetElement) {
        const targetTop = (targetElement as HTMLElement).offsetTop;
        
        // Use different scrolling behavior for Chrome
        if (isChrome) {
          // Chrome works better with instant scrolling for wheel events
          window.scrollTo({
            top: targetTop,
            behavior: 'auto'
          });
          
          // Then apply smooth scrolling
          setTimeout(() => {
            window.scrollTo({
              top: targetTop,
              behavior: 'smooth'
            });
          }, 10);
        } else {
          // Other browsers can use smooth scrolling directly
          window.scrollTo({
            top: targetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add wheel event listener for desktop
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('manual-navigation', handleManualNavigation);
      window.removeEventListener('wheel', handleWheel);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      if (manualNavigationTimeout.current) {
        clearTimeout(manualNavigationTimeout.current);
      }
      if (wheelTimeout.current) {
        clearTimeout(wheelTimeout.current);
      }
    };
  }, []);
};