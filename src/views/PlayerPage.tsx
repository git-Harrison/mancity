import React, {useState} from 'react';
import {usePlayerViewModel} from '../viewmodels/usePlayerViewModel';
import PlayersInfo from "../components/organisms/PlayersInfo";
import PlayersCardSlider from '../components/organisms/PlayersCardSlider';

const PlayerPage: React.FC = () => {
    const {players, loading, error} = usePlayerViewModel();
    const [selectedPlayerNumber, setSelectedPlayerNumber] = useState<number | null>(null);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const selectedPlayer = players.find(player => player.number === selectedPlayerNumber);

    return (
        <div className="container">
            {selectedPlayer && (<PlayersInfo player={selectedPlayer}/>)}
            <PlayersCardSlider players={players} onPlayerClick={setSelectedPlayerNumber}/>
        </div>
    );
};

export default PlayerPage;