import playersData from '../../assets/data/players-Info.json';
import {Player} from '../../models/interfaces/Player.interface';

export const fetchPlayers = async (): Promise<Player[]> => {
    try {
        return [
            playersData.manager,
            ...playersData.forwards,
            ...playersData.midfielders,
            ...playersData.defenders,
            ...playersData.goalkeepers
        ] as Player[];
    } catch (error) {
        console.error('Error loading players data:', error);
        throw error;
    }
};