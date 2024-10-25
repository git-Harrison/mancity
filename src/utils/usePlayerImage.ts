import {useState, useEffect} from 'react';

export const usePlayerImage = (playerNumber: number) => {
    const defaultImageSrc = `${process.env.PUBLIC_URL}/images/profile_icon_default.webp`;
    const initialImageSrc = `${process.env.PUBLIC_URL}/images/profile_icon_${playerNumber}.webp`;

    const [imageSrc, setImageSrc] = useState<string>(initialImageSrc);
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);  // 에러 상태 추가

    useEffect(() => {
        const img = new Image();

        img.onload = () => {
            setImageLoaded(true);
            setImageSrc(initialImageSrc);
            setError(false);
        };

        img.onerror = () => {
            setImageLoaded(true);
            setImageSrc(defaultImageSrc);
            setError(true);
        };

        setImageLoaded(false);
        img.src = initialImageSrc;

    }, [playerNumber, initialImageSrc, defaultImageSrc]);

    const handleImageError = () => {
        setImageSrc(defaultImageSrc);
    };

    return {imageSrc, imageLoaded, error, handleImageError};
};