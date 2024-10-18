import React from 'react';
import {StandingsListProps} from '../../../models/interfaces/ScoresType.interface';
import StandingItem from './StandingItem';

const StandingsList: React.FC<StandingsListProps> = ({eplStandings}) => {
    return (
        <table className="standings-table">
            <thead>
            <tr className="standing-header">
                <th className="header-item">순위</th>
                <th className="header-item">팀</th>
                <th className="header-item">경기 수</th>
                <th className="header-item">승</th>
                <th className="header-item">무</th>
                <th className="header-item">패</th>
                <th className="header-item">승점</th>
            </tr>
            </thead>
            <tbody>
            {eplStandings.map((team) => (
                <StandingItem key={team.team.id} team={team}/>
            ))}
            </tbody>
        </table>
    );
};

export default StandingsList;
