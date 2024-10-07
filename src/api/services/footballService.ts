import axios from 'axios';
import {ScoresType, TeamStanding} from '../../models/interfaces/ScoresType.interface';
import {API_BASE_URL} from '../../config';

// axios 인스턴스 생성
const apiClient = axios.create({
    baseURL: API_BASE_URL, // 환경별로 다른 URL 사용
    headers: {
        'X-Auth-Token': process.env.REACT_APP_FOOTBALL_DATA_API_TOKEN || '',
    },
});

// 경기를 가져오는 API 호출 함수
export const getMatches = async (teamId: number, season: number): Promise<ScoresType[]> => {
    try {
        const response = await apiClient.get(`/teams/${teamId}/matches`, {
            params: {season},
        });
        return response.data.matches;
    } catch (error) {
        console.error('Error fetching matches:', error);
        throw error;
    }
};

// EPL 순위를 가져오는 API 호출 함수
export const getEPLStandings = async (): Promise<TeamStanding[]> => {
    try {
        const response = await apiClient.get('/competitions/PL/standings');
        const totalStandings = response.data.standings.find((standing: any) => standing.type === 'TOTAL');
        return totalStandings ? totalStandings.table : [];
    } catch (error) {
        console.error('Error fetching EPL standings:', error);
        throw error;
    }
};