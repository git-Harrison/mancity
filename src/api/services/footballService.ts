import axios from 'axios';
import { ScoresType, TeamStanding, Standing } from '../../models/interfaces/FootballTypes.interface'; // 올바른 인터페이스 import

// axios 인스턴스 생성
const apiClient = axios.create({
    baseURL: 'https://api.football-data.org/v4', // 실제 API 서버 URL
    headers: {
        'X-Auth-Token': process.env.REACT_APP_FOOTBALL_DATA_API_TOKEN || '',
    },
});

// 팀 경기를 가져오는 API 호출 함수
export const getMatches = async (teamId: number, season: number): Promise<ScoresType[]> => {
    try {
        const response = await apiClient.get(`/teams/${teamId}/matches`, {
            params: { season },
        });
        return response.data.matches; // matches 배열 반환
    } catch (error) {
        console.error('Error fetching matches:', error);
        throw error;
    }
};

// EPL 순위를 가져오는 API 호출 함수
export const getEPLStandings = async (): Promise<TeamStanding[]> => {
    try {
        const response = await apiClient.get('/competitions/PL/standings');

        // Standing 타입의 데이터를 filter 또는 find 메서드로 가져옴
        const totalStandings = response.data.standings.find((standing: Standing) => standing.type === 'TOTAL');

        // Standing 타입의 table 요소 반환 (TeamStanding[] 타입)
        return totalStandings ? totalStandings.table : [];
    } catch (error) {
        console.error('Error fetching EPL standings:', error);
        throw error;
    }
};
