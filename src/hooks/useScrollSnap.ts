import { useEffect, useRef } from 'react';

export const useScrollSnap = () => {
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout>();
  const lastWheelTime = useRef(0);
  const wheelTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Detect if device is mobile/touch device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                     ('ontouchstart' in window) || 
                     (navigator.maxTouchPoints > 0);
    
    // Only enable scroll snapping on desktop devices
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
      
      // Only snap if we're not already close to a section (within 15% of viewport height)
      if (closestSection && closestDistance > windowHeight * 0.15) {
        closestSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    };

    // Optimized scroll handler with better throttling
    const handleScroll = () => {
      if (isScrolling.current) return;
      
      isScrolling.current = true;
      
      // Clear existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      // Set timeout to detect when scrolling stops
      scrollTimeout.current = setTimeout(() => {
        snapToNearestSection();
        isScrolling.current = false;
      }, 120); // Optimized timeout
    };

    // Optimized wheel handler with better performance
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      
      // Debounce wheel events
      if (now - lastWheelTime.current < 80) {
        return;
      }
      lastWheelTime.current = now;

      // Clear existing wheel timeout
      if (wheelTimeout.current) {
        clearTimeout(wheelTimeout.current);
      }

      // Only prevent default for significant wheel movements
      if (Math.abs(e.deltaY) > 40) {
        e.preventDefault();
        
        const sections = document.querySelectorAll('.scroll-section');
        if (sections.length === 0) return;
        
        const currentScroll = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        let targetSection = null;
        
        if (e.deltaY > 0) {
          // Scrolling down
          for (let i = 0; i < sections.length; i++) {
            const section = sections[i] as HTMLElement;
            const sectionTop = section.offsetTop;
            
            if (sectionTop > currentScroll + windowHeight * 0.2) {
              targetSection = section;
              break;
            }
          }
        } else {
          // Scrolling up
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i] as HTMLElement;
            const sectionTop = section.offsetTop;
            
            if (sectionTop < currentScroll - windowHeight * 0.2) {
              targetSection = section;
              break;
            }
          }
        }
        
        if (targetSection) {
          targetSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }
    };

    // Add event listeners with optimized options
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      if (wheelTimeout.current) {
        clearTimeout(wheelTimeout.current);
      }
    };
  }, []);
};