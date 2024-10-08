import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './store';
import AppRoutes from './routes/AppRoutes';
import Header from './components/organisms/Header';
import SideMenuNav from './components/organisms/SideMenuNav';
import {useThemeViewModel} from './viewmodels/useThemeViewModel';
import './App.css';

function App() {
    const basename = process.env.REACT_APP_BASENAME || '/';
    const {mode, isDarkMode, toggleTheme} = useThemeViewModel();

    // MUI 테마 설정
    const theme = createTheme({
        palette: {
            mode: mode,
        },
    });

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter basename={basename}>
                    <ThemeProvider theme={theme}>
                        <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
                        <SideMenuNav/>
                        <AppRoutes/>
                    </ThemeProvider>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

export default App;