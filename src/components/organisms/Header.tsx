import React, {useState, useEffect} from "react";
import {FiSun, FiMoon} from "react-icons/fi";
import {useLocation} from "react-router-dom";
import {HeaderProps} from "../../models/interfaces/Header.interface";

const Header: React.FC<HeaderProps> = ({toggleTheme, isDarkMode}) => {
    const location = useLocation();
    const [heldPlayersCount, setHeldPlayersCount] = useState(0);
    const [cityValue, setCityValue] = useState<number>(0);

    const getPageName = () => {
        switch (location.pathname) {
            case "/":
                return "메인 페이지";
            case "/players":
                return "24/25 현재 시즌 선수 명단";
            case "/scores":
                return "24/25 현재 시즌 경기 정보";
            case "/transfer":
                return "맨시티 선수 이적 시장";
            default:
                return "페이지 없음";
        }
    };

    useEffect(() => {
        // heldPlayers 값 가져오기
        const heldPlayers = JSON.parse(localStorage.getItem('heldPlayers') ?? '[]');
        setHeldPlayersCount(heldPlayers.length);

        // city 값 가져오기
        const city = JSON.parse(localStorage.getItem('city') ?? '0');
        setCityValue(city);
    }, []);

    return (
        <header>
            <div className="page-name" title="페이지 이름">{getPageName()}</div>
            <div className="header-right">
                <div className="my-bag">
                    <div title="CITY">{cityValue.toLocaleString()} CITY</div>
                    <div title="보유선수">{heldPlayersCount}명</div>
                </div>
                <div className="city">
                    <div title="맨시티 설립년도">
                        <div>EST. 1894</div>
                        <div>MAN CITY</div>
                    </div>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/man-city-logo.png`} alt="Manchester City Logo"
                             className="logo"/>
                    </div>
                </div>
                <div className="toggle_theme_button" onClick={toggleTheme} title="테마 모드 변경">
                    {isDarkMode ? <FiMoon/> : <FiSun/>}
                </div>
            </div>
        </header>
    );
};

export default Header;
