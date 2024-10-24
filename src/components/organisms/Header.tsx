import React from 'react';
import {FiSun, FiMoon} from 'react-icons/fi';
import {useLocation} from 'react-router-dom';
import {HeaderProps} from '../../models/interfaces/Header.interface';
import {useHeaderViewModel} from '../../viewmodels/useHeaderViewModel';

const Header: React.FC<HeaderProps> = ({toggleTheme, isDarkMode}) => {
    const location = useLocation();
    const {city, heldPlayersCount} = useHeaderViewModel();

    const getPageName = () => {
        switch (location.pathname) {
            case '/':
                return 'HOME';
            case '/players':
                return '24/25 현재 시즌 선수 명단';
            case '/scores':
                return '24/25 현재 시즌 경기 정보';
            case '/transfer':
                return '맨시티 선수 이적 시장';
            case '/enhancement':
                return '보유 선수 강화 시뮬레이션';
            case '/squadmaker':
                return '보유 선수 스쿼드 메이커';
            default:
                return '페이지 이름 없음';
        }
    };

    return (
        <header>
            <div className="page-name" title="페이지 이름">{getPageName()}</div>
            <div className="header-right">
                <div className="my-bag">
                    <div title="CITY">{city.toLocaleString()} CITY</div>
                    <div title="보유선수">{heldPlayersCount}명</div>
                </div>
                <div className="city">
                    <div title="맨시티 설립년도">
                        <div>EST. 1894</div>
                        <div>MAN CITY</div>
                    </div>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/man-city-logo.webp`} alt="Manchester City Logo"
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
