import {useState, useEffect} from 'react';
import {fetchYouTubeVideos, YouTubeVideo} from '../api/services/googleYoutubeService';

export const useYouTubeViewModel = () => {
    const [videos, setVideos] = useState<YouTubeVideo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getVideos = async () => {
            setLoading(true);
            try {
                const videoData = await fetchYouTubeVideos('Manchester City highlights', 5);
                setVideos(videoData);
            } catch (error) {
                console.error('Error fetching YouTube videos:', error);
            } finally {
                setLoading(false);
            }
        };

        getVideos();
    }, []);

    return {
        videos,
        loading,
    };
};