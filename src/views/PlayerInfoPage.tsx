import React, {useState} from 'react';
import {usePlayerViewModel} from '../viewmodels/usePlayerViewModel';
import PlayersInfo from "../components/organisms/PlayersInfo";
import PlayersCardSlider from '../components/organisms/PlayersCardSlider';
import NotFound from "../components/atoms/NotFound";
import LoadingSpinner from "../components/atoms/LoadingSpinner";

const PlayerInfoPage: React.FC = () => {
    const {players, loading, error} = usePlayerViewModel();
    const [selectedPlayerNumber, setSelectedPlayerNumber] = useState<number | null>(null);

    if (error) {
        return <NotFound/>;
    }

    const selectedPlayer = players.find(player => player.number === selectedPlayerNumber);

    return (
        <div className="container">
            {/* 로딩 상태 표시 */}
            {loading ? (
                <LoadingSpinner message="데이터 가져오는 중..."/>
            ) : (
                <>
                    {selectedPlayer && (<PlayersInfo player={selectedPlayer}/>)}
                    <PlayersCardSlider players={players} onPlayerClick={setSelectedPlayerNumber}/>
                </>
            )}
        </div>
    );
};

export default PlayerInfoPage;