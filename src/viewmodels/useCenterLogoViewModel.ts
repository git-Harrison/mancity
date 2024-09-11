import { useEffect } from "react";

export const useCenterLogoViewModel = (
    videoRef: React.RefObject<HTMLVideoElement>,
    videoUrl: string | null
) => {
    useEffect(() => {
        if (videoRef.current && videoUrl) {
            videoRef.current.load();
        }
    }, [videoRef, videoUrl]);
};