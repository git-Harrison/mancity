import {useEffect, useState} from 'react';
import {fetchPlayers} from '../api/services/playerService';
import {Player} from '../models/interfaces/player.interface';

export const usePlayerViewModel = () => {
    const [players, setPlayers] = useState<Player[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadPlayers = async () => {
            try {
                const fetchedPlayers: Player[] = await fetchPlayers();
                const sortedPlayers = [
                    ...fetchedPlayers.filter(player => player.position === 'ST'),
                    ...fetchedPlayers.filter(player => ['CM', 'CDM', 'RW', 'LW'].includes(player.position)),
                    ...fetchedPlayers.filter(player => ['CB', 'LB', 'RB'].includes(player.position)),
                    ...fetchedPlayers.filter(player => player.position === 'GK')
                ];
                setPlayers(sortedPlayers);
            } catch (e) {
                setError('Failed to load players');
            } finally {
                setLoading(false);
            }
        };

        loadPlayers();
    }, []);

    return {players, loading, error};
};