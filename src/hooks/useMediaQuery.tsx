import { useEffect, useState } from 'react';

const MOBILE_MEDIA_QUERY = '(max-width: 767px)'; 
const TABLET_MEDIA_QUERY = '(min-width: 768px) and (max-width: 1023px)'; 
const DESKTOP_MEDIA_QUERY = '(min-width: 1024px)'; 

export const useMediaQuery = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const checkMediaQuery = () => {
      const isMobileMatch = window.matchMedia(MOBILE_MEDIA_QUERY).matches;
      const isTabletMatch = window.matchMedia(TABLET_MEDIA_QUERY).matches;
      const isDesktopMatch = window.matchMedia(DESKTOP_MEDIA_QUERY).matches;

      setIsMobile(isMobileMatch);
      setIsTablet(isTabletMatch);
      setIsDesktop(isDesktopMatch);
    };

    checkMediaQuery(); 
    window.addEventListener('resize', checkMediaQuery); 

    return () => {
      window.removeEventListener('resize', checkMediaQuery);
    };
  }, []);

  return { isMobile, isTablet, isDesktop };
};
