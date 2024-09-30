import {useState, useRef} from "react";
import {Slide} from "../models/interfaces/MainSlider.interface";
import Slider from "react-slick";

export const useMainSliderViewModel = (
    slides: Slide[],
) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef<Slider>(null);

    const goToSlide = (index: number) => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(index);
        }
    };

    return {
        currentSlide,
        setCurrentSlide,
        sliderRef,
        goToSlide,
    };
};