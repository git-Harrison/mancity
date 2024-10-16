import axios from 'axios';
import {NewsItem, Article} from '../../models/interfaces/News.interface';

const API_KEY = process.env.REACT_APP_CUSTOM_SEARCH_API_KEY;
const CSE_ID = process.env.REACT_APP_CUSTOM_SEARCH_CSE_ID;

// 뉴스 API
export const fetchNews = async (query: string, contentCount: number): Promise<Article[]> => {
    try {
        const url = `https://www.googleapis.com/customsearch/v1?q=${query}&cx=${CSE_ID}&key=${API_KEY}&sort=date&dateRestrict=w[2]&start=${contentCount}`;

        const response = await axios.get(url);
        const data = response.data;

        if (data.items) {
            const resolvedArticles = await Promise.all(
                data.items.map(async (item: NewsItem) => {
                    let date = new Date();
                    const snippetMatch = item.snippet.match(/\d{4}.\d{2}.\d{2}/);
                    if (snippetMatch) {
                        date = new Date(snippetMatch[0]);
                    }

                    return {
                        title: item.title,
                        link: item.link,
                        thumbnail: item.pagemap?.cse_image?.[0]?.src || '',
                        date,
                    };
                })
            );
            return resolvedArticles;
        }

        return [];
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
};