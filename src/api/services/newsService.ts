import axios from 'axios';
import {NewsItem, Article} from '../../models/interfaces/News.interface';
import {parseNewsDate} from '../../utils/parseNewsDate';

const API_KEY = process.env.REACT_APP_CUSTOM_SEARCH_API_KEY;
const CSE_ID = process.env.REACT_APP_CUSTOM_SEARCH_CSE_ID;

export const fetchNews = async (query: string, contentCount: number): Promise<Article[]> => {
    try {
        const url = `https://www.googleapis.com/customsearch/v1?q=${query}&cx=${CSE_ID}&key=${API_KEY}&sort=date&dateRestrict=w[2]&start=${contentCount}`;
        const response = await axios.get(url);
        const data = response.data;

        const articles: Article[] = data.items.map((item: NewsItem) => ({
            title: item.title,
            link: item.link,
            thumbnail: item.pagemap?.cse_image?.[0]?.src || '',
            date: parseNewsDate(item.snippet)
        }));

        return articles;
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
};