import React from 'react';
import { TransferMarketTableBodyProps } from '../../models/interfaces/transferMarket/TransferMarketTableBody.interface';
import PlayerRow from '../molecules/PlayerRow';

const TransferMarketTableBody: React.FC<TransferMarketTableBodyProps> = ({ players, onPlayerClick }) => {
    return (
        <tbody>
        {players.map((player) => (
            <PlayerRow key={player.number} player={player} onPlayerClick={onPlayerClick} /> // PlayerRow 사용
        ))}
        </tbody>
    );
};

export default TransferMarketTableBody;
