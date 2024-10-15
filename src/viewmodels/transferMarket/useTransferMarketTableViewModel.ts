import {useState, useEffect} from 'react';
import {Player} from '../../models/interfaces/Player.interface';

export const useTransferMarketTableViewModel = (initializedPlayers: Player[]) => {
    const [sortedPlayers, setSortedPlayers] = useState<Player[]>([]);
    const [sortKey, setSortKey] = useState('overall_ability');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

    useEffect(() => {
        let sorted = [...initializedPlayers]; // 한 번 초기화된 데이터를 사용
        sorted.sort((a, b) => {
            let valueA: any;
            let valueB: any;

            if (sortKey === 'transfer_fee') {
                valueA = a.transfer_details?.transfer_fee ?? 0;
                valueB = b.transfer_details?.transfer_fee ?? 0;
            } else {
                valueA = a[sortKey as keyof Player];
                valueB = b[sortKey as keyof Player];
            }

            if (typeof valueA === 'number' && typeof valueB === 'number') {
                return sortOrder === 'desc' ? valueB - valueA : valueA - valueB;
            }
            if (typeof valueA === 'string' && typeof valueB === 'string') {
                return sortOrder === 'desc' ? valueB.localeCompare(valueA) : valueA.localeCompare(valueB);
            }
            return 0;
        });
        setSortedPlayers(sorted); // 정렬된 플레이어 설정
    }, [initializedPlayers, sortKey, sortOrder]);

    const handleSort = (key: string) => {
        setSortOrder(prevSortOrder => (sortKey === key && prevSortOrder === 'desc' ? 'asc' : 'desc'));
        setSortKey(key);
    };

    return {sortedPlayers, sortKey, sortOrder, handleSort};
};