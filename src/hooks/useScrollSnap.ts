import { useEffect, useRef } from 'react';

export const useScrollSnap = () => {
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Detect if device is mobile/touch device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                     ('ontouchstart' in window) || 
                     (navigator.maxTouchPoints > 0);
    
    // Only enable scroll snapping on desktop devices
    if (isMobile) {
      return;
    }
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
      }, 150);
    };

    const snapToNearestSection = () => {
      const sections = document.querySelectorAll('.scroll-section');
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
      
      if (closestSection && closestDistance > windowHeight * 0.1) {
        // Only snap if we're not already close to a section
        closestSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    };

    // Add wheel event listener for more precise control
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const sections = document.querySelectorAll('.scroll-section');
      const currentScroll = window.pageYOffset;
      const windowHeight = window.innerHeight;
      
      let targetSection = null;
      
      if (e.deltaY > 0) {
        // Scrolling down
        for (let i = 0; i < sections.length; i++) {
          const section = sections[i] as HTMLElement;
          const sectionTop = section.offsetTop;
          
          if (sectionTop > currentScroll + windowHeight * 0.1) {
            targetSection = section;
            break;
          }
        }
      } else {
        // Scrolling up
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i] as HTMLElement;
          const sectionTop = section.offsetTop;
          
          if (sectionTop < currentScroll - windowHeight * 0.1) {
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
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);
};