import React, {useEffect, useState} from "react";

interface Article {
    title: string;
    link: string;
    thumbnail: string;  // 썸네일 이미지 URL
}

const MainPage: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const API_KEY = process.env.REACT_APP_CUSTOM_SEARCH_API_KEY;
    const CSE_ID = process.env.REACT_APP_CUSTOM_SEARCH_CSE_ID;

    const resolveLink = async (url: string) => {
        const baseUrl = window.location.hostname === 'localhost'
            ? '/.netlify/functions/resolve-link'
            : '/api/resolve-link';

        const response = await fetch(`${baseUrl}?url=${encodeURIComponent(url)}`);
        const data = await response.json();

        console.log('Resolve link data:', data);  // 응답 데이터 확인
        return data.finalUrl;  // 최종 URL 반환
    };



    useEffect(() => {
        const query = 'Manchester City news';  // 검색할 키워드
        const url = `https://www.googleapis.com/customsearch/v1?q=${query}&cx=${CSE_ID}&key=${API_KEY}`;

        fetch(url)
            .then((response) => response.json())
            .then(async (data) => {
                console.log('API 응답:', data);  // 응답 확인용 로그
                if (data.items) {
                    const resolvedArticles = await Promise.all(
                        data.items.map(async (item: any) => ({
                            title: item.title,
                            link: await resolveLink(item.link),  // 리디렉션을 추적하여 최종 URL 사용
                            thumbnail: item.pagemap?.cse_image?.[0]?.src || '',  // 썸네일 이미지 가져오기
                        }))
                    );
                    setArticles(resolvedArticles);  // 최종 URL 및 썸네일 포함된 상태 설정
                }
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [API_KEY, CSE_ID]);

    return (
        <div className="container">
            <h1>Manchester City 관련 기사</h1>
            <ul>
                {articles.map((article, index) => (
                    <li key={index}>
                        <a href={article.link} target="_blank" rel="noopener noreferrer">
                            <img src={article.thumbnail} alt={article.title}/> {/* 썸네일 이미지 */}
                            {article.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MainPage;