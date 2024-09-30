import React from "react";
import {FiSun, FiMoon} from "react-icons/fi";
import {useLocation} from "react-router-dom";
import {HeaderProps} from "../../models/interfaces/Header.interface";

const Header: React.FC<HeaderProps> = ({toggleTheme, isDarkMode}) => {
    const location = useLocation();

    const getPageName = () => {
        switch (location.pathname) {
            case "/":
                return "메인 페이지";
            case "/players":
                return "24/25 현재 시즌 선수 명단";
            case "/scores":
                return "24/25 현재 시즌 경기 정보";
            default:
                return "페이지 없음";
        }
    };

    return (
        <header>
            <div className="page-name">{getPageName()}</div>
            <div className="header-right">
                <div>1</div>
                <div>2</div>
                <div className="toggle_theme_button" onClick={toggleTheme}>
                    {isDarkMode ? <FiMoon/> : <FiSun/>}
                </div>
            </div>
        </header>
    );
};

export default Header;
