import React from 'react';
import {HashRouter} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/organisms/Header";
import './App.css';

function App() {
    return (
        <HashRouter>
            <Header/>
            <AppRoutes/>
        </HashRouter>
    );
}

export default App;
