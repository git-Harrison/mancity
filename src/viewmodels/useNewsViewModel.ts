import {useState, useEffect, useCallback} from "react";
import {Article} from "../models/interfaces/News.interface";
import {fetchNews} from "../api/services/googleNewsService";

export const useNewsViewModel = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [contentCount, setContentCount] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isLastPage, setIsLastPage] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const getNewsData = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const newArticles = await fetchNews('mancity.com/news', contentCount);

            const filteredArticles = newArticles.filter(
                (newArticle) => !articles.some((existingArticle) => existingArticle.link === newArticle.link)
            );

            if (filteredArticles.length > 0) {
                setArticles((prev) => [...prev, ...filteredArticles]);
            }

            if (newArticles.length === 0 || newArticles.length < 10) {
                setIsLastPage(true);
            }
        } catch (error) {
            console.error('Error fetching news:', error);
            setError('Failed to fetch news data');
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }
    }, [contentCount, articles]);

    useEffect(() => {
        getNewsData();
    }, [getNewsData]);

    const handleMoreData = () => {
        setContentCount((prev) => prev + 10);
    };

    return {
        articles,
        isLoading,
        isLastPage,
        handleMoreData,
        error,
    };
};