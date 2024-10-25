import React from 'react';
import { Player } from '../../models/interfaces/Player.interface';
import { getFlagImage } from '../../utils/flagUtils';
import { formatCurrency } from '../../utils/formatCurrency';
import { usePlayerImage } from '../../utils/usePlayerImage';

interface PlayerRowProps {
    player: Player;
    onPlayerClick: (player: Player) => void;
}

const PlayerRow: React.FC<PlayerRowProps> = ({ player, onPlayerClick }) => {
    const { imageSrc, imageLoaded } = usePlayerImage(player.number);

    return (
        <tr key={player.number} onClick={() => onPlayerClick(player)}>
            <td className="profile-icon">
                {imageLoaded && (
                    <img
                        src={imageSrc}
                        alt={player.name}
                        className="player-image"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src = `${process.env.PUBLIC_URL}/images/profile_icon_default.webp`;
                        }}
                    />
                )}
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
                <img src={getFlagImage(player.nationality)} alt={player.nationality} />
            </td>
            <td>{formatCurrency(player.transfer_details?.transfer_fee)}</td>
        </tr>
    );
};

export default PlayerRow;