import {useState, useEffect} from 'react';

export const useThemeViewModel = () => {
    const [mode, setMode] = useState<'light' | 'dark'>('dark');
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', mode);
    }, [mode]);

    // 테마 변경 함수
    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        setIsDarkMode(!isDarkMode);
    };

    return {
        mode,
        isDarkMode,
        toggleTheme,
    };
};