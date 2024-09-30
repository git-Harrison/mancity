import React from 'react';
import {StandingItemProps} from '../../../models/interfaces/ScoresType.interface';

const StandingItem: React.FC<StandingItemProps> = ({team}) => {
    return (
        <tr className="team-standing">
            <td className="team-position">{team.position}</td>
            <td className="team-details">
                <img src={team.team.crest} alt={team.team.name} className="team-crest"/>
                <span className="team-name">{team.team.name}</span>
            </td>
            <td className="stat">{team.playedGames}</td>
            <td className="stat">{team.won}</td>
            <td className="stat">{team.draw}</td>
            <td className="stat">{team.lost}</td>
            <td className="stat points">{team.points}</td>
        </tr>
    );
};

export default StandingItem;
