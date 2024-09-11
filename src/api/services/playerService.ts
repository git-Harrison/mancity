import { Player } from '../../models/interfaces/player.interface';

export const fetchPlayers = async (): Promise<Player[]> => {
    try {
        const response = await fetch(`https://git-harrison.github.io/mancity/players-info.json`);
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