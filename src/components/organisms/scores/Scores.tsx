import React from 'react';
import MatchCard from './MatchCard';
import StandingsList from './StandingsList';
import { useScoresViewModel } from '../../../viewmodels/useScoresViewModel';
import NotFound from '../../atoms/NotFound';
import LoadingComponents from '../../atoms/LoadingComponents';

const Scores: React.FC = () => {
    const { matches, eplStandings, error, isLoading } = useScoresViewModel();

    if (error) {
        return <NotFound />;
    }

    return (
        <div className="contents-container">
            {/* 경기 데이터 표시 */}
            <div
                className="contents-list"
                style={{ overflow: isLoading ? 'hidden' : 'auto' }} // 로딩 중일 때 overflow 설정
            >
                {isLoading ? (
                    <LoadingComponents message="경기 데이터를 가져오는 중..." />
                ) : (
                    matches.map((match) => <MatchCard key={match.id} match={match} />)
                )}
            </div>

            {/* EPL 순위 데이터 표시 */}
            <div
                className="standings-list"
                style={{ overflow: isLoading ? 'hidden' : 'auto' }} // 로딩 중일 때 overflow 설정
            >
                {isLoading ? (
                    <LoadingComponents message="순위 데이터를 가져오는 중..." />
                ) : (
                    <StandingsList eplStandings={eplStandings} />
                )}
            </div>
        </div>
    );
};

export default Scores;