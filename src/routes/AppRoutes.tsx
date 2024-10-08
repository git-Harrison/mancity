import React from "react";
import {Routes, Route} from "react-router-dom";
import MainPage from "../views/MainPage";
import PlayerInfoPage from "../views/PlayerInfoPage";
import ScoresPage from "../views/ScoresPage";
import TransferMarket from "../views/TransferMarket";
import PlayerEnhancement from "../views/PlayerEnhancement";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/players" element={<PlayerInfoPage/>}/>
            <Route path="/scores" element={<ScoresPage/>}/>
            <Route path="/transfer" element={<TransferMarket/>}/>
            <Route path="/enhancement" element={<PlayerEnhancement/>}/>
        </Routes>
    );
};

export default AppRoutes;