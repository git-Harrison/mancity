import mainSliderData from '../../assets/data/main-slider.json';
import {Slide} from '../../models/interfaces/MainSlider.interface';

export const fetchMainSlides = async (): Promise<Slide[]> => {
    try {
        return mainSliderData.map(slide => ({
            id: slide.id,
            title: slide.title,
            cup: slide.cup,
            image: `${process.env.PUBLIC_URL}${slide.image}`,
            bgImg: `${process.env.PUBLIC_URL}${slide.bgImg}`
        }));
    } catch (error) {
        console.error('Error loading mainSlides data:', error);
        throw error;
    }
};