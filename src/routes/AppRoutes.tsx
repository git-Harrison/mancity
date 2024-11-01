import React, {useEffect} from "react";
import {Routes, Route, useLocation} from "react-router-dom";
import MainPage from "../views/MainPage";
import PlayerInfoPage from "../views/PlayerInfoPage";
import ScoresPage from "../views/ScoresPage";
import TransferMarket from "../views/TransferMarket";
import PlayerEnhancement from "../views/PlayerEnhancement";
import SquadSetup from "../views/SquadSetup";
import {initializeGTM} from "../utils/gtm";

const AppRoutes: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        initializeGTM();
        console.log(location.pathname);
    }, [location]);

    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/players" element={<PlayerInfoPage/>}/>
            <Route path="/scores" element={<ScoresPage/>}/>
            <Route path="/transfer" element={<TransferMarket/>}/>
            <Route path="/enhancement" element={<PlayerEnhancement/>}/>
            <Route path="/squadmaker" element={<SquadSetup/>}/>
        </Routes>
    );
};

export default AppRoutes;