import { useState, useRef, useEffect } from "react";
import { Slide } from "../models/interfaces/Slider.interface";

export const useMainPageViewModel = () => {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const [videoText, setVideoText] = useState<string>("");
    const [videoSubText, setVideoSubText] = useState<string>("");
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    const slides: Slide[] = [
        {
            id: 1,
            title: "Sydney",
            image: `${process.env.PUBLIC_URL}/images/test.jpg`,
            thumbnail: `${process.env.PUBLIC_URL}/images/test2.jpg`,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            videoText: "Sydney Video",
            videoSubText: "Sydney Sub Video",
        },
        {
            id: 2,
            title: "New York",
            image: `${process.env.PUBLIC_URL}/images/test.jpg`,
            thumbnail: `${process.env.PUBLIC_URL}/images/test2.jpg`,
            videoUrl: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
            videoText: "New York Video",
            videoSubText: "New York Sub Video",
        },
        {
            id: 3,
            title: "Hong Kong",
            image: `${process.env.PUBLIC_URL}/images/test.jpg`,
            thumbnail: `${process.env.PUBLIC_URL}/images/test2.jpg`,
            videoUrl: "https://www.w3schools.com/html/movie.mp4",
            videoText: "Hong Kong Video",
            videoSubText: "Hong Kong Sub Video",
        },
        {
            id: 4,
            title: "Los Angeles",
            image: `${process.env.PUBLIC_URL}/images/test.jpg`,
            thumbnail: `${process.env.PUBLIC_URL}/images/test2.jpg`,
            videoUrl: "/toms.mp4",
            videoText: "Los Angeles Video",
            videoSubText: "Los Angeles Sub Video",
        },
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    const handleVideoSelect = (videoUrl: string | null) => {
        setSelectedVideo(videoUrl);
    };

    const handleVideoDetails = (videoText: string, videoSubText: string) => {
        setVideoText(videoText);
        setVideoSubText(videoSubText);
    };

    const handlePlayVideo = async () => {
        if (videoRef.current) {
            try {
                await videoRef.current.play();
                setIsPlaying(true);
            } catch (error) {
                console.error("비디오 재생에 실패했습니다:", error);
            }
        }
    };

    return {
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
        handlePlayVideo
    };
};