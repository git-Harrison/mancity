import React from 'react';
import {TransferMarketTableBodyProps} from '../../models/interfaces/transferMarket/TransferMarketTableBody.interface';
import {getFlagImage} from '../../utils/flagUtils';
import {formatCurrency} from '../../utils/formatCurrency';

const TransferMarketTableBody: React.FC<TransferMarketTableBodyProps> = ({players, onPlayerClick}) => {
    return (
        <tbody>
        {players.map((player) => (
            <tr key={player.number} onClick={() => onPlayerClick(player)}>
                <td className="profile-icon">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/profile_icon_${player.number}.webp`}
                        alt={player.name}
                        className="player-image"
                        onError={(e) => (e.currentTarget.src = `${process.env.PUBLIC_URL}/images/profile_icon_default.webp`)}
                    />
                </td>
                <td className="name">{player.name}</td>
                <td>{player.overall_ability}</td>
                <td className={`${player.position}`}>{player.position}</td>
                <td className="nationality">
                    <img src={getFlagImage(player.nationality)} alt={player.nationality}/>
                </td>
                <td>{formatCurrency(player.transfer_details?.transfer_fee)}</td>
            </tr>
        ))}
        </tbody>
    );
};

export default TransferMarketTableBody;
