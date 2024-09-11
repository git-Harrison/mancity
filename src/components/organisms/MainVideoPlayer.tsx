import React from "react";
import {FaPlay} from "react-icons/fa";
import {useCenterLogoViewModel} from "../../viewmodels/useCenterLogoViewModel";
import {MainVideoPlayerProps} from "../../models/interfaces/VideoPlayer.interface";

const MainVideoPlayer: React.FC<MainVideoPlayerProps> = ({
                                                             videoUrl,
                                                             videoRef,
                                                             onPlay,
                                                             isPlaying,
                                                             videoText,
                                                             videoSubText,
                                                             thumbnail
                                                         }) => {
    useCenterLogoViewModel(videoRef, videoUrl);

    return (
        <div className="main-video-player">
            {videoUrl ? (
                <>
                    <img
                        src={thumbnail}
                        alt="thumbnail"
                        className={`thumbnail ${isPlaying ? "fade-out" : ""}`}
                    />
                    <video ref={videoRef} controls={false}>
                        <source src={videoUrl} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    <div className="play-button-container">
                        {!isPlaying && (
                            <button onClick={onPlay} className="play-button">
                                <FaPlay/>
                            </button>
                        )}
                        <div>
                            <h4>{videoText}</h4>
                            <p>{videoSubText}</p>
                        </div>
                    </div>
                </>
            ) : (
                <p>No video selected</p>
            )}
        </div>
    );
};

export default MainVideoPlayer;