import React from 'react';
import {HelmetProvider, Helmet} from 'react-helmet-async';
import Header from '../organisms/Header';
import SideMenuNav from '../organisms/SideMenuNav';
import AppRoutes from '../../routes/AppRoutes';
import {useThemeViewModel} from '../../viewmodels/useThemeViewModel';

const Layout: React.FC = () => {
    const {isDarkMode, toggleTheme} = useThemeViewModel();

    return (
        <HelmetProvider>
            <Helmet>
                <link rel="preload" as="image" href={`${process.env.PUBLIC_URL}/images/bg.webp`}/>
            </Helmet>
            <img
                src={`${process.env.PUBLIC_URL}/images/bg.webp`}
                alt="Background"
                className="contents-background-image"
            />
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
            <SideMenuNav/>
            <AppRoutes/>
        </HelmetProvider>
    );
};

export default Layout;