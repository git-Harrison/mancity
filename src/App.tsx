import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/organisms/Header";
import './App.css';

function App() {
    return (
        <BrowserRouter basename="/mancity">
            <Header/>
            <AppRoutes/>
        </BrowserRouter>
    );
}

export default App;
