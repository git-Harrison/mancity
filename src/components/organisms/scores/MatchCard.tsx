import React from 'react';
import { MatchCardProps } from '../../../models/interfaces/ScoresType.interface';

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
    // 이긴 팀의 이름에 'city' 클래스를 추가하기 위한 함수
    const getWinningTeamClassName = (homeScore: number | null, awayScore: number | null, teamName: string) => {
        if (homeScore !== null && awayScore !== null) {
            if (homeScore > awayScore && teamName === match.homeTeam.name) {
                return 'team-name city';
            } else if (awayScore > homeScore && teamName === match.awayTeam.name) {
                return 'team-name city';
            }
        }
        return 'team-name';
    };

    // 경기가 시작 전인지 확인
    const isMatchNotStarted = match.score.fullTime.home === null && match.score.fullTime.away === null;

    return (
        <div className={`match-card ${isMatchNotStarted ? 'not-started' : ''}`}>
            {/* 경기 정보 */}
            <div className="match-info">
                <div className="competition-name">{match.competition.name}</div>
                <div className="match-date">
                    {new Date(match.utcDate).toLocaleDateString()} {new Date(match.utcDate).toLocaleTimeString()}
                </div>
            </div>

            {/* 팀 정보 */}
            <div className="team-info">
                {/* 홈 팀 로고와 이름 */}
                <div className="team">
                    <span className={getWinningTeamClassName(match.score.fullTime.home, match.score.fullTime.away, match.homeTeam.name)}>
                        {match.homeTeam.name}
                    </span>
                    <img src={match.homeTeam.crest} alt={match.homeTeam.name} className="team-crest" />
                </div>

                {/* vs 텍스트 */}
                <span className="vs">vs</span>

                {/* 원정 팀 로고와 이름 */}
                <div className="team">
                    <img src={match.awayTeam.crest} alt={match.awayTeam.name} className="team-crest" />
                    <span className={getWinningTeamClassName(match.score.fullTime.home, match.score.fullTime.away, match.awayTeam.name)}>
                        {match.awayTeam.name}
                    </span>
                </div>
            </div>

            {/* 경기 스코어 */}
            <div className="score">
                {match.score.fullTime.home !== null && match.score.fullTime.away !== null
                    ? `${match.score.fullTime.home} : ${match.score.fullTime.away}`
                    : <button className="not-started-button">시작전</button>}
            </div>
        </div>
    );
};

export default MatchCard;
