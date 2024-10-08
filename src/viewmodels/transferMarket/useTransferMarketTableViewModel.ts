import {useState, useEffect} from 'react';
import {Player} from '../../models/interfaces/Player.interface';

export const useTransferMarketTableViewModel = (players: Player[]) => {
    const [sortedPlayers, setSortedPlayers] = useState(players);
    const [sortKey, setSortKey] = useState('overall_ability');
    const [sortOrder, setSortOrder] = useState('desc');

    useEffect(() => {
        let sorted = [...players];
        sorted.sort((a, b) => {
            if (sortKey === 'transfer_details.transfer_fee') {
                const transferFeeA = a.transfer_details?.transfer_fee ?? 0;
                const transferFeeB = b.transfer_details?.transfer_fee ?? 0;
                return sortOrder === 'desc' ? transferFeeB - transferFeeA : transferFeeA - transferFeeB;
            }
            const valueA = a[sortKey as keyof typeof a];
            const valueB = b[sortKey as keyof typeof b];
            if (typeof valueA === 'number' && typeof valueB === 'number') {
                return sortOrder === 'desc' ? valueB - valueA : valueA - valueB;
            }
            if (typeof valueA === 'string' && typeof valueB === 'string') {
                return sortOrder === 'desc' ? valueB.localeCompare(valueA) : valueA.localeCompare(valueB);
            }
            return 0;
        });
        setSortedPlayers(sorted);
    }, [players, sortKey, sortOrder]);

    const handleSort = (key: string) => {
        setSortKey(key);
        setSortOrder(sortKey === key && sortOrder === 'desc' ? 'asc' : 'desc');
    };

    return {sortedPlayers, sortKey, sortOrder, handleSort};
};
