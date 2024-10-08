import axios from 'axios';

// API 클라이언트 설정
const apiClient = axios.create({
    baseURL: '/api', // Netlify Functions 경로 사용
});

// 경기를 가져오는 API 호출 함수
export const getMatches = async (teamId: number, season: number) => {
    try {
        const response = await apiClient.get(`/teams/${teamId}/matches`, { params: { season } });
        return response.data.matches;
    } catch (error) {
        console.error('Error fetching matches:', error);
        throw error;
    }
};

// EPL 순위를 가져오는 API 호출 함수
export const getEPLStandings = async () => {
    try {
        const response = await apiClient.get('/competitions/PL/standings');
        const totalStandings = response.data.standings.find((standing: any) => standing.type === 'TOTAL');
        return totalStandings ? totalStandings.table : [];
    } catch (error) {
        console.error('Error fetching EPL standings:', error);
        throw error;
    }
};