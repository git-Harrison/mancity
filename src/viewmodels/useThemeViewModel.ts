import {useState, useEffect} from 'react';

const THEME_MODE_KEY = 'theme_mode';

export const useThemeViewModel = () => {
    const initialMode = (localStorage.getItem(THEME_MODE_KEY) as 'light' | 'dark') || 'dark';
    const [mode, setMode] = useState<'light' | 'dark'>(initialMode);
    const [isDarkMode, setIsDarkMode] = useState(initialMode === 'dark');

    useEffect(() => {
        localStorage.setItem(THEME_MODE_KEY, mode);
        document.documentElement.setAttribute('data-theme', mode);
    }, [mode]);

    // 테마 변경 함수
    const toggleTheme = () => {
        setMode((prevMode) => {
            const newMode = prevMode === 'light' ? 'dark' : 'light';
            localStorage.setItem(THEME_MODE_KEY, newMode);
            return newMode;
        });
        setIsDarkMode(!isDarkMode);
    };

    return {
        mode,
        isDarkMode,
        toggleTheme,
    };
};