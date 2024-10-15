import {useMemo} from 'react';
import {Player, PlayerFilters} from '../../models/interfaces/Player.interface';

export const useTransferMarketTableBodyViewModel = (players: Player[], filters: PlayerFilters) => {
    // 필터링만 수행하도록 수정
    const filteredPlayers = useMemo(() => {
        return players.filter((player) => {
            return (
                (!filters.position || player.position.includes(filters.position)) &&
                (!filters.nationality || player.nationality.includes(filters.nationality)) &&
                (!filters.name || player.name.toLowerCase().includes(filters.name.toLowerCase()))
            );
        });
    }, [players, filters]);

    return {filteredPlayers};
};