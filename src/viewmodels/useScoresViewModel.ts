import { useEffect, useState } from 'react';
import { getMatches, getEPLStandings } from '../api/services/footballService';
import { ScoresType, TeamStanding } from '../models/interfaces/FootballTypes.interface'; // 수정된 인터페이스 경로 확인

export const useScoresViewModel = () => {
    const [matches, setMatches] = useState<ScoresType[]>([]);
    const [eplStandings, setEplStandings] = useState<TeamStanding[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false); // 단일 로딩 상태

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                // Promise.all을 사용하여 두 API를 병렬로 호출
                const [matchesData, standingsData] = await Promise.all([
                    getMatches(65, 2024),
                    getEPLStandings(),
                ]);

                setMatches(matchesData); // ScoresType[] 타입으로 매핑
                setEplStandings(standingsData); // TeamStanding[] 타입으로 매핑
            } catch (error) {
                setError('데이터를 불러오는 데 오류가 발생했습니다.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { matches, eplStandings, error, isLoading };
};
