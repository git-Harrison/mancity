import {useState, useEffect} from 'react';
import {fetchYouTubeVideos, YouTubeVideo} from '../api/services/googleYoutubeService';

export const useYouTubeViewModel = () => {
    const [videos, setVideos] = useState<YouTubeVideo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getVideos = async () => {
            setLoading(true);
            setError(null); // 에러 초기화
            try {
                const videoData = await fetchYouTubeVideos('Manchester City highlights', 5);
                setVideos(videoData);
            } catch (error) {
                console.error('Error fetching YouTube videos:', error);
                setError('Failed to fetch YouTube videos');
            } finally {
                setLoading(false);
            }
        };

        getVideos();
    }, []);

    return {
        videos,
        loading,
        error,
    };
};