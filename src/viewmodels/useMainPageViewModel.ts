import {useState, useEffect} from 'react';
import {Slide} from '../models/interfaces/MainSlider.interface';
import {fetchMainSlides} from '../api/services/mainService';

export const useMainPageViewModel = () => {
    const [slides, setSlides] = useState<Slide[]>([]);

    useEffect(() => {
        const loadSlides = async () => {
            try {
                const fetchedSlides = await fetchMainSlides();
                setSlides(fetchedSlides);
            } catch (error) {
                console.error('Failed to fetch slides:', error);
            }
        };

        loadSlides();
    }, []);

    return {
        slides,
    };
};
