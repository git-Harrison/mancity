import React from "react";
import {Box, Button} from "@mui/material";
import {useNewsViewModel} from "../../viewmodels/useNewsViewModel";
import LoadingComponents from "../atoms/LoadingComponents";

const News: React.FC = () => {
    const {articles, isLoading, isLastPage, handleMoreData} = useNewsViewModel();
    
    return (
        <div className="news_list_wrap">
            <div className="news_list">
                <h2>Manchester City 관련 기사</h2>
                {articles.map((article, index) => (
                    <div key={index} className="news_item">
                        <a href={article.link} target="_blank" rel="noopener noreferrer">
                            <img src={article.thumbnail} alt={article.title}/>
                            <div>
                                <strong>{article.title}</strong>
                                <p>{article.date.toDateString()}</p>
                            </div>
                        </a>
                    </div>
                ))}
                <div>
                    <Box sx={{display: 'flex', justifyContent: 'flex-end', marginTop: '14px'}}>
                        {!isLastPage && (
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{
                                    width: '180px',
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
                </div>
                {isLoading && <LoadingComponents message="뉴스 데이터 가져오는중.."/>}
                {isLastPage && <div>마지막 기사 입니다.</div>}
            </div>
        </div>
    );
};

export default News;