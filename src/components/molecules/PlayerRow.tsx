import React from 'react';
import {PlayerRowProps} from '../../models/interfaces/Player.interface';
import {getFlagImage} from '../../utils/flagUtils';
import {formatCurrency} from '../../utils/formatCurrency';

const PlayerRow: React.FC<PlayerRowProps> = ({player, onPlayerClick}) => {
    const defaultImageSrc = `${process.env.PUBLIC_URL}/images/profile_icon_default.webp`;
    const imageSrc = `${process.env.PUBLIC_URL}/images/profile_icon_${player.number}.webp`;

    return (
        <tr key={player.number} onClick={() => onPlayerClick(player)}>
            <td className="profile-icon">
                <img
                    src={imageSrc}
                    alt={player.name}
                    className="player-image"
                    onError={(e) => (e.currentTarget.src = defaultImageSrc)}
                />
            </td>
            <td className="name">{player.name}</td>
            <td>
                <span className={`enhancement-level enhancement-level${player.enhancementLevel}`}>
                    {player.enhancementLevel}
                </span>
            </td>
            <td>{player.overall_ability}</td>
            <td className={`${player.position}`}>{player.position}</td>
            <td className="nationality">
                <img src={getFlagImage(player.nationality)} alt={player.nationality}/>
            </td>
            <td>{formatCurrency(player.transfer_details?.transfer_fee)}</td>
        </tr>
    );
};

export default PlayerRow;