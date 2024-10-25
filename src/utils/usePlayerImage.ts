import {useState, useEffect} from 'react';

export const usePlayerImage = (playerNumber: number) => {
    const [imageSrc, setImageSrc] = useState<string>(`${process.env.PUBLIC_URL}/images/profile_icon_${playerNumber}.webp`);
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);

    useEffect(() => {
        const checkImage = async () => {
            try {
                const response = await fetch(imageSrc);
                if (!response.ok) {
                    setImageSrc(`${process.env.PUBLIC_URL}/images/profile_icon_default.webp`);
                } else {
                    setImageLoaded(true);
                }
            } catch (error) {
                setImageSrc(`${process.env.PUBLIC_URL}/images/profile_icon_default.webp`);
            }
        };

        checkImage();
    }, [imageSrc]);

    return {imageSrc, imageLoaded};
};