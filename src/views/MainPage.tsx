import React, {useState} from "react";
import MainSlider from "../components/organisms/MainSlider";
import MainBg from "../components/organisms/MainBg";
import {useMainPageViewModel} from "../viewmodels/useMainPageViewModel";

const MainPage: React.FC = () => {
    const {slides} = useMainPageViewModel();

    const [selectedSlideId, setSelectedSlideId] = useState<number | null>(null);
    const selectedSlide = slides.find(slide => slide.id === selectedSlideId);
    const bgImg = selectedSlide ? selectedSlide.bgImg : slides[0]?.bgImg;
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    const handleSlideChange = (newSlideId: number) => {
        setSelectedSlideId(newSlideId);
        if (isFirstLoad) setIsFirstLoad(false);
    };

    return (
        <div className="container">
            {/*<MainBg bgImgUrl={bgImg} isFirstLoad={isFirstLoad}/>*/}
            {/*<MainSlider*/}
            {/*    slides={slides}*/}
            {/*    setSelectedSlideId={handleSlideChange}*/}
            {/*/>*/}
        </div>
    );
};

export default MainPage;
