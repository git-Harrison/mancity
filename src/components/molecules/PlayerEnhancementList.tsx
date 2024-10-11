import React from 'react';
import {PlayerEnhancementListProps} from '../../models/interfaces/Player.interface';
import {getFlagImage} from "../../utils/flagUtils";

const PlayerEnhancementList: React.FC<PlayerEnhancementListProps> = ({players, onPlayerClick}) => {
    return (
        <div className="player-list-container">
            <ul className="player-list">
                {players.map((player) => {
                    const similarPlayersCount = players.filter(
                        (p) => Number(p.number) === Number(player.number) && Number(p.enhancementLevel) === Number(player.enhancementLevel)
                    ).length;

                    const canEnhance = similarPlayersCount > 1;

                    return (
                        <li
                            key={player.id}
                            className="player-item"
                            onClick={() => onPlayerClick(player)}
                            style={{cursor: 'pointer'}}
                        >
                            <div>{player.name}</div>
                            <div>
                                <span className={`enhancement-level enhancement-level${player.enhancementLevel}`}>
                                    {player.enhancementLevel}
                                </span>
                            </div>
                            <div>{player.overall_ability}</div>
                            <div className={player.position}>{player.position}</div>
                            <div className="nationality">
                                <img src={getFlagImage(player.nationality)} alt={player.nationality}/>
                            </div>
                            <div>{canEnhance ? '강화 가능' : '강화 불가능'}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default PlayerEnhancementList;
