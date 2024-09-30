import React from "react";
import {Routes, Route} from "react-router-dom";
import MainPage from "../views/MainPage";
import PlayerPage from "../views/PlayerPage";
import ScoresPage from "../views/ScoresPage";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/players" element={<PlayerPage/>}/>
            <Route path="/scores" element={<ScoresPage/>}/>
        </Routes>
    );
};

export default AppRoutes;