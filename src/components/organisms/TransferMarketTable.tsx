import React, {useState, useEffect} from 'react';
import TransferMarketTableHeader from '../atoms/TransferMarketTableHeader';
import TransferMarketTableBody from '../atoms/TransferMarketTableBody';
import {TransferMarketTableProps} from '../../models/interfaces/transferMarket/TransferMarketTable.interface';
import {Player} from '../../models/interfaces/Player.interface';
import {useTransferMarketTableViewModel} from '../../viewmodels/transferMarket/useTransferMarketTableViewModel';
import {useTransferMarketTableBodyViewModel} from '../../viewmodels/transferMarket/useTransferMarketTableBodyViewModel';
import {
    useTransferMarketTableHeaderViewModel
} from '../../viewmodels/transferMarket/useTransferMarketTableHeaderViewModel';
import {getRandomTransferFee} from '../../utils/transferFeeUtils';

const TransferMarketTable: React.FC<TransferMarketTableProps> = ({players, onPlayerClick}) => {
    const {filters, handleFilterChange, handlePositionChange, handleNationalityChange, handleResetFilters} =
        useTransferMarketTableHeaderViewModel();

    // transfer_fee를 한 번만 초기화
    const [initializedPlayers, setInitializedPlayers] = useState<Player[]>([]);

    useEffect(() => {
        const playersWithFees = players.map(player => ({
            ...player,
            transfer_details: {
                ...player.transfer_details,
                transfer_fee: player.transfer_details?.transfer_fee ?? getRandomTransferFee(player.overall_ability),
                currency: player.transfer_details?.currency || 'CITY',
            },
        }));
        setInitializedPlayers(playersWithFees);
    }, [players]);

    const {sortedPlayers, sortKey, sortOrder, handleSort} = useTransferMarketTableViewModel(initializedPlayers);
    const {filteredPlayers} = useTransferMarketTableBodyViewModel(sortedPlayers, filters);

    // 포지션과 국가 리스트 생성
    const positions = Array.from(new Set(players.map(player => player.position)));
    const nationalities = Array.from(new Set(players.map(player => player.nationality)));

    return (
        <div className="transfer-market-table-wrap">
            <TransferMarketTableHeader
                filters={filters}
                handleFilterChange={handleFilterChange}
                handlePositionChange={handlePositionChange}
                handleNationalityChange={handleNationalityChange}
                handleSort={handleSort}
                handleResetFilters={handleResetFilters}
                sortKey={sortKey}
                sortOrder={sortOrder}
                positions={positions}
                nationalities={nationalities}
                players={filteredPlayers}
            />
            <table className="transfer-market-table">
                <thead>
                <tr>
                    <th>프로필</th>
                    <th>선수명</th>
                    <th>강화단계</th>
                    <th>능력치</th>
                    <th>포지션</th>
                    <th>국가</th>
                    <th>이적료</th>
                </tr>
                </thead>
                <TransferMarketTableBody players={filteredPlayers} onPlayerClick={onPlayerClick}/>
            </table>
        </div>
    );
};

export default TransferMarketTable;