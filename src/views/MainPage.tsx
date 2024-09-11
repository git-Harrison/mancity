import React from "react";
import MainSlider from "../components/organisms/MainSlider";
import MainVideoPlayer from "../components/organisms/MainVideoPlayer";
import {useMainPageViewModel} from "../viewmodels/useMainPageViewModel";
import LoadingScreen from "../components/organisms/LoadingScreen";

const MainPage: React.FC = () => {
    const {
        loading,
        selectedVideo,
        videoText,
        videoSubText,
        videoRef,
        isPlaying,
        setIsPlaying,
        slides,
        handleVideoSelect,
        handleVideoDetails,
        handlePlayVideo,
    } = useMainPageViewModel();

    const currentThumbnail = slides.find((slide) => slide.videoUrl === selectedVideo)?.thumbnail || "";

    return (
        <div className="container">
            <LoadingScreen className={loading ? "fade-out" : ""}/>
            <MainVideoPlayer
                videoUrl={selectedVideo}
                videoRef={videoRef}
                onPlay={handlePlayVideo}
                isPlaying={isPlaying}
                videoText={videoText}
                videoSubText={videoSubText}
                thumbnail={currentThumbnail}
            />
            <MainSlider
                slides={slides}
                onVideoSelect={handleVideoSelect}
                setVideoDetails={handleVideoDetails}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
            />
        </div>
    );
};

export default MainPage;