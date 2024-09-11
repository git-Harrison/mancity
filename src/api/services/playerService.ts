import {Player} from '../../models/interfaces/player.interface';

export const fetchPlayers = async (): Promise<Player[]> => {
    try {
        const url =
            process.env.NODE_ENV === 'development'
                ? process.env.PUBLIC_URL + '/players-info.json'
                : process.env.REACT_APP_GITHUB_URL + '/players-info.json';
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        const allPlayers = [
            data.manager,
            ...data.forwards,
            ...data.midfielders,
            ...data.defenders,
            ...data.goalkeepers
        ];

        return allPlayers as Player[];
    } catch (error) {
        console.error('Error fetching players:', error);
        throw error;
    }
};