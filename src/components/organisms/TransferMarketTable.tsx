import React from 'react';
import {TransferMarketTableProps} from '../../models/interfaces/Player.interface';
import {getFlagImage} from '../../utils/flagUtils';
import {formatCurrency} from '../../utils/formatCurrency';

const TransferMarketTable: React.FC<TransferMarketTableProps> = ({players, onPlayerClick}) => {
    const sortedPlayers = [...players].sort((a, b) =>
        (b.transfer_details?.transfer_fee ?? 0) - (a.transfer_details?.transfer_fee ?? 0)
    );

    return (
        <div className="transfer-market-table-wrap">
            <table className="transfer-market-table">
                <thead>
                <tr>
                    <th>프로필</th>
                    <th>선수명</th>
                    <th>능력치</th>
                    <th>포지션</th>
                    <th>국가</th>
                    <th>이적료</th>
                </tr>
                </thead>
                <tbody>
                {sortedPlayers.map((player) => (
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
            </table>
        </div>
    );
};

export default TransferMarketTable;
