// App.tsx
import React, {useState, useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/organisms/Header";
import SideMenuNav from "./components/organisms/SideMenuNav";
import './App.css';

function App() {
    const basename = process.env.REACT_APP_BASENAME || '/';
    const [mode, setMode] = useState<"light" | "dark">("dark");
    const [isDarkMode, setIsDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: mode,
        },
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", mode);
    }, [mode]);

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        setIsDarkMode(!isDarkMode);
    };

    return (
        <BrowserRouter basename={basename}>
            <ThemeProvider theme={theme}>
                <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
                <SideMenuNav/>
                <AppRoutes/>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
