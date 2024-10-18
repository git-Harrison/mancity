import React from "react";
import {Box, Button} from "@mui/material";
import {useNewsViewModel} from "../../viewmodels/useNewsViewModel";
import LoadingComponents from "../atoms/LoadingComponents";
import ApiLimitNotice from "../atoms/ApiLimitNotice";

const News: React.FC = () => {
    const {articles, isLoading, isLastPage, handleMoreData} = useNewsViewModel();

    // 로딩 중인 경우
    if (isLoading) {
        return (
            <div className="news-videos-container">
                <LoadingComponents message="뉴스 데이터를 가져오는 중.."/>
            </div>
        );
    }

    // articles 배열이 없는 경우
    if (!articles.length) {
        return (
            <div className="news-videos-container">
                <ApiLimitNotice apiName="Custom Search API" errorMessage="API 할당량을 초과하여 현재 데이터를 불러올 수 없습니다."/>
            </div>
        );
    }

    return (
        <div className="news-videos-container">
            <div className="news-list-row">
                <div className="news-list">
                    {articles.map((article, index) => (
                        <div key={index} className="news-item">
                            <a href={article.link} target="_blank" rel="noopener noreferrer">
                                <img src={article.thumbnail} alt={article.title}/>
                                <div>
                                    <strong>{article.title}</strong>
                                    <p>{article.date}</p>
                                </div>
                            </a>
                        </div>
                    ))}
                    <Box sx={{display: 'flex', justifyContent: 'flex-end', width: '100%', marginTop: '14px'}}>
                        {!isLastPage && !isLoading && (
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{
                                    width: '100%',
                                    height: '44px',
                                    fontSize: '16px',
                                    textTransform: 'none',
                                    color: 'var(--text-color)',
                                    backgroundColor: 'var(--table-header-color)',
                                    transition: 'all 0.2s ease',
                                    fontFamily: '"Pretendard-Regular", sans-serif',
                                    '&:hover': {
                                        backgroundColor: 'var(--city-color)',
                                    },
                                }}
                                onClick={handleMoreData}
                            >
                                기사 더보기
                            </Button>
                        )}
                    </Box>
                    {isLastPage && !isLoading && <h2>마지막 기사 입니다.</h2>}
                </div>
            </div>
        </div>
    );
};

export default News;