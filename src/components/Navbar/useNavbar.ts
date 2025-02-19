import { useEffect, useState } from 'react';

export const useNavbar = () => {
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [isHidden, setIsHidden] = useState(false);

    const isMobile = window.innerWidth <= 768;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (!isMobile) {
                if (currentScrollY > 200 && currentScrollY > prevScrollY) {
                    setIsHidden(true);
                } else {
                    setIsHidden(false);
                }
            }

            setPrevScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollY, isMobile]);

    return { isHidden };
};
