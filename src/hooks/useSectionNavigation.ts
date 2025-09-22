import { useCallback } from 'react';

export const useSectionNavigation = () => {
  const scrollToSection = useCallback((index: number) => {
    const section = document.querySelector(`[data-section="${index}"]`);
    if (section) {
      // Dispatch custom event to notify scroll snap that manual navigation is happening
      window.dispatchEvent(new CustomEvent('manual-navigation'));
      
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  return { scrollToSection };
};