import React from "react";
import Slider from "react-slick";
import {useMainSliderViewModel} from "../../viewmodels/useMainSliderViewModel";
import {Slide} from "../../models/interfaces/Slider.interface";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderComponentProps {
    slides: Slide[];
    onVideoSelect: (videoUrl: string | null) => void;
    setVideoDetails: (videoText: string, videoSubText: string) => void;
    isPlaying: boolean;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainSlider: React.FC<SliderComponentProps> = ({
                                                             slides,
                                                             onVideoSelect,
                                                             setVideoDetails,
                                                             isPlaying,
                                                             setIsPlaying
                                                         }) => {
    const {
        currentSlide,
        setCurrentSlide,
        sliderRef,
        goToSlide
    } = useMainSliderViewModel(slides, onVideoSelect, setVideoDetails, setIsPlaying);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        afterChange: (current: number) => setCurrentSlide(current),
        appendDots: (dots: React.ReactNode) => (
            <div>
                <div className="custom-dots">
                    <span className="current-slide">{String(currentSlide + 1).padStart(2, "0")}</span> / <span
                    className="total-slides">{String(slides.length).padStart(2, "0")}</span>
                </div>
                <ul>{dots}</ul>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="slider-container">
            <Slider ref={sliderRef} {...settings}>
                {slides.map((slide, index) => (
                    <div key={slide.id} className="slider-slide" onClick={() => goToSlide(index)}>
                        <img src={slide.image} alt={slide.title}/>
                        <div className="slider-caption">{slide.title}</div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MainSlider;