import React from "react";
import {Routes, Route} from "react-router-dom";
import MainPage from "../views/MainPage";
import PlayerPage from "../views/PlayerPage";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/players" element={<PlayerPage/>}/>
        </Routes>
    );
};

export default AppRoutes;