import axios from 'axios';
import {ScoresType, TeamStanding} from '../../models/interfaces/ScoresType.interface';

// 경기를 가져오는 API 호출 함수
export const getMatches = async (teamId: number, season: number): Promise<ScoresType[]> => {
    const response = await axios.get(`/api/football/v4/teams/${teamId}/matches`, {
        params: {season},
    });
    return response.data.matches;
};

// EPL 순위를 가져오는 API 호출 함수
export const getEPLStandings = async (): Promise<TeamStanding[]> => {
    const response = await axios.get('/api/football/v4/competitions/PL/standings', {
        headers: {'X-Auth-Token': process.env.REACT_APP_FOOTBALL_DATA_API_TOKEN || ''},
    });
    const totalStandings = response.data.standings.find((standing: any) => standing.type === 'TOTAL');
    return totalStandings ? totalStandings.table : [];
};
