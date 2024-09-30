import React, {useEffect, useState} from "react";
import {MainBgProps} from "../../models/interfaces/MainBg.interface";

const MainBg: React.FC<MainBgProps> = ({bgImgUrl, isFirstLoad}) => {
    const [activeBg, setActiveBg] = useState(bgImgUrl);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        if (!isFirstLoad) {
            setFade(false);
            const timer = setTimeout(() => {
                setActiveBg(bgImgUrl);
                setFade(true);
            }, 100);

            return () => clearTimeout(timer);
        } else {
            setActiveBg(bgImgUrl);
            setFade(true);
        }
    }, [bgImgUrl, isFirstLoad]);

    return (
        <div className="main-bg-wrap">
            <div className={`background-image ${fade ? "fade-in" : "fade-out"}`}>
                <img
                    src={activeBg}
                    alt="background-image"
                    className={`background-image`}
                />
            </div>
        </div>
    );
};

export default MainBg;
