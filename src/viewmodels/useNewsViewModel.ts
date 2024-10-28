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

            // 중복된 기사를 제외한 새로운 기사만 필터링하고, 썸네일이 있는 기사만 추가
            const filteredArticles = newArticles.filter(
                (newArticle) =>
                    !articles.some((existingArticle) => existingArticle.link === newArticle.link) &&
                    newArticle.thumbnail
            );

            // 새로운 기사를 기존 리스트에 추가
            if (filteredArticles.length > 0) {
                setArticles((prev) => [...prev, ...filteredArticles]);
            }

            // 가져온 데이터가 0개이거나 10개 미만일 때 마지막 페이지로 설정
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