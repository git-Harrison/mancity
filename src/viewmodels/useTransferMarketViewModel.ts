import {useState, useEffect} from 'react';
import {fetchPlayers, fetchPreviousSeasonPlayers} from '../api/services/playerService';
import {Player} from '../models/interfaces/Player.interface';

export const useTransferMarketViewModel = () => {
    const [players, setPlayers] = useState<Player[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const [current, previous] = await Promise.all([fetchPlayers(), fetchPreviousSeasonPlayers()]);
                const filteredPlayers = [...current, ...previous].filter(player => player.position.toLowerCase() !== 'manager');
                setPlayers(filteredPlayers);
                setLoading(false);
            } catch (err) {
                console.error('Error loading player data:', err);
                setError('Error loading player data');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return {players, loading, error};
};
