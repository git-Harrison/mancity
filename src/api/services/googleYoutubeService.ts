import axios from 'axios';

const API_KEY = process.env.REACT_APP_CUSTOM_SEARCH_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

export interface YouTubeVideo {
    videoId: string;
    title: string;
    description: string;
    thumbnail: string;
}

export const fetchYouTubeVideos = async (query: string, maxResults: number = 5): Promise<YouTubeVideo[]> => {
    try {
        if (!API_KEY) {
            throw new Error('API_KEY is missing. Please set it in your environment variables.');
        }

        const url = `${BASE_URL}?part=snippet&key=${API_KEY}&q=${encodeURIComponent(query)}&maxResults=${maxResults}&type=video`;

        const response = await axios.get(url);

        const videos = response.data.items.map((item: any) => ({
            videoId: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnail: item.snippet.thumbnails.medium.url,
        }));

        return videos;
    } catch (error) {
        console.error('Error fetching YouTube videos:', error);
        return [];
    }
};