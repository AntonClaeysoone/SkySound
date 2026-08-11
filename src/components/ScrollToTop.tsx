import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Zorgt dat elke routewissel bovenaan de pagina begint (footerlinks landden midden op de pagina).
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
