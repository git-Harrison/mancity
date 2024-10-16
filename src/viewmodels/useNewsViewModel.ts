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

        // 기존에 로드된 기사와 중복된 기사를 제거
        const filteredArticles = newArticles.filter(
            (newArticle) => !articles.some((existingArticle) => existingArticle.link === newArticle.link)
        );

        if (filteredArticles.length > 0) {
            setArticles((prev) => [...prev, ...filteredArticles]);
        }

        // 만약 새로 가져온 데이터가 없다면 마지막 페이지로 처리
        if (newArticles.length === 0 || newArticles.length < 10) {
            setIsLastPage(true);
        }

        setIsLoading(false);
    };

    useEffect(() => {
        getNewsData();
    }, [contentCount]);

    // 추가 데이터를 로드하는 함수
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