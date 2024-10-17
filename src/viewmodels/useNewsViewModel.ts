import {useState, useEffect} from "react";
import {Article} from "../models/interfaces/News.interface";
import {fetchNews} from "../api/services/newsService";

export const useNewsViewModel = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [contentCount, setContentCount] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isLastPage, setIsLastPage] = useState<boolean>(false);

    const getNewsData = async () => {
        setIsLoading(true);

        const newArticles = await fetchNews('맨시티', contentCount);

        const filteredArticles = newArticles.filter(
            (newArticle) => !articles.some((existingArticle) => existingArticle.link === newArticle.link)
        );

        if (filteredArticles.length > 0) {
            setArticles((prev) => [...prev, ...filteredArticles]);
        }

        if (newArticles.length === 0 || newArticles.length < 10) {
            setIsLastPage(true);
        }

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    useEffect(() => {
        getNewsData();
    }, [contentCount]);

    const handleMoreData = () => {
        setContentCount((prev) => prev + 10);
    };

    return {
        articles,
        isLoading,
        isLastPage,
        handleMoreData,
    };
};