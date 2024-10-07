import React from 'react';
import MatchCard from './MatchCard';
import StandingsList from './StandingsList';
import {useScoresViewModel} from '../../../viewmodels/useScoresViewModel';
import NotFound from "../../atoms/NotFound";
import LoadingSpinner from "../../atoms/LoadingSpinner";

const Scores: React.FC = () => {
    const {matches, eplStandings, error, isLoading} = useScoresViewModel();

    if (error) {
        return <NotFound/>;
    }

    return (
        <div className="contents-container">
            {/* 로딩 상태 표시 */}
            {isLoading ? (
                <LoadingSpinner message="데이터 가져오는 중..."/>
            ) : (
                <>
                    {/* 경기 데이터 표시 */}
                    <div className="contents-list">
                        {matches.map((match) => (
                            <MatchCard key={match.id} match={match}/>
                        ))}
                    </div>

                    {/* EPL 순위 데이터 표시 */}
                    <StandingsList eplStandings={eplStandings}/>
                </>
            )}
        </div>
    );
};

export default Scores;
