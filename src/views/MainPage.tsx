import React from "react";
import News from "../components/molecules/News";
import YouTubeVideos from "../components/molecules/Youtubes";

const MainPage: React.FC = () => {
    return (
        <div className="container">
            <YouTubeVideos/>
            <News/>
        </div>
    );
};

export default MainPage;
