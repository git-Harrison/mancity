import React from 'react';
import {useYouTubeViewModel} from '../../viewmodels/useYouTubeViewModel';
import LoadingComponents from '../atoms/LoadingComponents';

const YouTubeVideos: React.FC = () => {
    const {videos, loading} = useYouTubeViewModel();

    // videos 배열이 비어있지 않은지 확인
    if (loading) {
        return (
            <div className="youtube-videos-container">
                <LoadingComponents message="하이라이트 동영상 가져오는 중.."/>
            </div>
        );
    }

    // videos 배열이 있는 경우에만 렌더링
    if (!videos.length) {
        return null;
    }

    const mainVideo = videos[0];
    const additionalVideos = videos.slice(1);

    return (
        <div className="youtube-videos-container">
            <div className="main-video">
                <a href={`https://www.youtube.com/watch?v=${mainVideo.videoId}`} target="_blank"
                   rel="noopener noreferrer">
                    <div className="main-video-info">
                        <h2>{mainVideo.title}</h2>
                    </div>
                    <img src={mainVideo.thumbnail} alt={mainVideo.title} className="main-video-thumbnail"/>
                </a>
            </div>

            <div className="additional-videos">
                {additionalVideos.map((video) => (
                    <div key={video.videoId} className="video-item">
                        <a href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank"
                           rel="noopener noreferrer">
                            <img src={video.thumbnail} alt={video.title} className="video-thumbnail"/>
                            <p className="video-title">{video.title}</p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default YouTubeVideos;