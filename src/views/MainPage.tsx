import React, { useEffect, useState } from "react";

interface Article {
    title: string;
    link: string;
}

const MainPage: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const API_KEY = process.env.REACT_APP_CUSTOM_SEARCH_API_KEY;
    const CSE_ID = process.env.REACT_APP_CUSTOM_SEARCH_CSE_ID;

    // Netlify Function을 통해 최종 링크 가져오기
    const resolveLink = async (url: string) => {
        const response = await fetch(`/api/resolve-link?url=${encodeURIComponent(url)}`);
        const data = await response.json();
        return data.finalUrl;  // 최종 URL 반환
    };

    useEffect(() => {
        const query = 'Manchester City news';  // 검색할 키워드
        const url = `https://www.googleapis.com/customsearch/v1?q=${query}&cx=${CSE_ID}&key=${API_KEY}`;

        fetch(url)
            .then((response) => response.json())
            .then(async (data) => {
                if (data.items) {
                    // Netlify Function을 통해 각 링크의 최종 URL을 가져오기
                    const resolvedArticles = await Promise.all(
                        data.items.map(async (item: any) => ({
                            title: item.title,
                            link: await resolveLink(item.link),  // 리디렉션을 추적하여 최종 URL 사용
                        }))
                    );
                    setArticles(resolvedArticles);  // 최종 URL이 포함된 articles 상태로 설정
                }
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [API_KEY, CSE_ID]);  // API_KEY와 CSE_ID를 의존성 배열에 추가

    return (
        <div className="container">
            <h1>Manchester City 관련 기사</h1>
            <ul>
                {articles.map((article, index) => (
                    <li key={index}>
                        <a href={article.link} target="_blank" rel="noopener noreferrer">
                            {article.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MainPage;