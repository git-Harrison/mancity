import React, {useState, useEffect} from 'react';
import LoadingScreen from '../organisms/LoadingScreen';

const LoadingScreenHandler: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const firstVisitTime = localStorage.getItem('firstVisitTime');
        const now = new Date().getTime();
        const tenMinutesInMs = 10 * 60 * 1000;

        if (!firstVisitTime) {
            localStorage.setItem('firstVisitTime', now.toString());
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 2500);

            return () => clearTimeout(timer);
        } else if (now - parseInt(firstVisitTime, 10) > tenMinutesInMs) {
            localStorage.removeItem('firstVisitTime');
            setIsLoading(true);
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 2500);

            return () => clearTimeout(timer);
        } else {
            setIsLoading(false);
        }
    }, []);

    if (isLoading) {
        return <LoadingScreen/>;
    }

    return <>{children}</>;
};

export default LoadingScreenHandler;
