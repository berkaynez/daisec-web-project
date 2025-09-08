import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useHashScroll = () => {
  const { hash } = useLocation();
  
  useEffect(() => {
    if (!hash) return;
    
    const id = hash.replace('#', '');
    const element = document.getElementById(id);
    
    if (element) {
      // Small delay to ensure page is rendered
      setTimeout(() => {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }, 100);
    }
  }, [hash]);
};
