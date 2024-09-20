import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/organisms/Header";
import './App.css';

function App() {
    const basename = process.env.REACT_APP_BASENAME || '/';

    return (
        <BrowserRouter basename={basename}>
            <Header/>
            <AppRoutes/>
        </BrowserRouter>
    );
}

export default App;
