import { useState, useEffect, useRef } from "react";
import { Slide } from "../models/interfaces/Slider.interface";
import Slider from "react-slick";

export const useMainSliderViewModel = (
    slides: Slide[],
    onVideoSelect: (videoUrl: string | null) => void,
    setVideoDetails: (videoText: string, videoSubText: string) => void,
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef<Slider>(null);

    useEffect(() => {
        const currentSlideData = slides[currentSlide];
        if (currentSlideData) {
            onVideoSelect(currentSlideData.videoUrl);
            setVideoDetails(currentSlideData.videoText, currentSlideData.videoSubText);
        } else {
            onVideoSelect(null);
            setVideoDetails("", "");
        }
    }, [currentSlide, slides, onVideoSelect, setVideoDetails]);

    useEffect(() => {
        setIsPlaying(false);
    }, [currentSlide, setIsPlaying]);

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