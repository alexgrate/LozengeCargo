import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Or { top: 0, behavior: 'smooth' } for smooth scrolling
    }, [pathname]);

    return null;
};

export default ScrollToTop;