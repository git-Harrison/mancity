import React from "react";
import {Routes, Route} from "react-router-dom";
import MainPage from "../views/MainPage";
import PlayerInfoPage from "../views/PlayerInfoPage";
import ScoresPage from "../views/ScoresPage";
import TransferMarket from "../views/TransferMarket";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/players" element={<PlayerInfoPage/>}/>
            <Route path="/scores" element={<ScoresPage/>}/>
            <Route path="/transfer" element={<TransferMarket/>}/>
        </Routes>
    );
};

export default AppRoutes;