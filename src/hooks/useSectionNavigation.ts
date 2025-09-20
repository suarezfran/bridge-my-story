import { useCallback } from 'react';

export const useSectionNavigation = () => {
  const scrollToSection = useCallback((index: number) => {
    const section = document.querySelector(`[data-section="${index}"]`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  return { scrollToSection };
};