import {useState, useEffect} from 'react';
import {Player} from '../../models/interfaces/Player.interface';

export const useTransferMarketTableBodyViewModel = (players: Player[], filters: any) => {
    const [filteredPlayers, setFilteredPlayers] = useState(players);

    useEffect(() => {
        const result = players.filter((player) => {
            return (
                (!filters.position || player.position.includes(filters.position)) &&
                (!filters.nationality || player.nationality.includes(filters.nationality)) &&
                (!filters.name || player.name.toLowerCase().includes(filters.name.toLowerCase()))
            );
        });
        setFilteredPlayers(result);
    }, [players, filters]);

    return {filteredPlayers};
};
