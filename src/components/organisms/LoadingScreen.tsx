import React from "react";
import {LoadingScreenProps} from "../../models/interfaces/LoadingScreen.interface";

const LoadingScreen: React.FC<LoadingScreenProps> = ({className}) => {
    return (
        <div className={`loading-screen ${className ? className : ""}`}>
            <div className="loading-bg"
                 style={{backgroundImage: `url(${process.env.PUBLIC_URL}/man-city-bg.jpg)`}}></div>
            <img src={`${process.env.PUBLIC_URL}/man-city-logo.png`} alt="Manchester City Logo"
                 className="loading-logo"/>
        </div>
    );
};

export default LoadingScreen;