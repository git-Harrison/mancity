import React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useThemeViewModel} from '../../viewmodels/useThemeViewModel';
import Layout from './Layout';

const ThemeProviderWrapper: React.FC = () => {
    const {mode} = useThemeViewModel();

    const theme = createTheme({
        palette: {
            mode: mode,
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Layout/>
        </ThemeProvider>
    );
};

export default ThemeProviderWrapper;