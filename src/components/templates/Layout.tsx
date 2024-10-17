import React from 'react';
import Header from '../organisms/Header';
import SideMenuNav from '../organisms/SideMenuNav';
import AppRoutes from '../../routes/AppRoutes';
import {useThemeViewModel} from '../../viewmodels/useThemeViewModel';

const Layout: React.FC = () => {
    const {isDarkMode, toggleTheme} = useThemeViewModel();

    return (
        <>
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
            <SideMenuNav/>
            <AppRoutes/>
        </>
    );
};

export default Layout;