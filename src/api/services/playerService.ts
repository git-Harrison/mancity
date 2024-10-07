import currentPlayersData from '../../assets/data/current_season_player_info.json';
import previousPlayersData from '../../assets/data/previous_season_player_info.json';
import {Player} from '../../models/interfaces/Player.interface';

// 현재 시즌 선수 데이터를 불러오는 함수
export const fetchPlayers = async (): Promise<Player[]> => {
    try {
        return [
            currentPlayersData.manager,
            ...currentPlayersData.forwards,
            ...currentPlayersData.midfielders,
            ...currentPlayersData.defenders,
            ...currentPlayersData.goalkeepers
        ] as Player[];
    } catch (error) {
        console.error('Error loading current season players data:', error);
        throw error;
    }
};

// 이전 시즌 선수 데이터를 불러오는 함수
export const fetchPreviousSeasonPlayers = async (): Promise<Player[]> => {
    try {
        return [
            ...previousPlayersData.forwards,
            ...previousPlayersData.midfielders,
            ...previousPlayersData.defenders,
            ...previousPlayersData.goalkeepers
        ] as Player[];
    } catch (error) {
        console.error('Error loading previous season players data:', error);
        throw error;
    }
};
