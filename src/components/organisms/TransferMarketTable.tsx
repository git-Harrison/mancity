import React from 'react';
import TransferMarketTableHeader from '../atoms/TransferMarketTableHeader';
import TransferMarketTableBody from '../atoms/TransferMarketTableBody';
import {TransferMarketTableProps} from '../../models/interfaces/transferMarket/TransferMarketTable.interface';
import {useTransferMarketTableViewModel} from '../../viewmodels/transferMarket/useTransferMarketTableViewModel';
import {useTransferMarketTableBodyViewModel} from '../../viewmodels/transferMarket/useTransferMarketTableBodyViewModel';
import {
    useTransferMarketTableHeaderViewModel
} from '../../viewmodels/transferMarket/useTransferMarketTableHeaderViewModel';

const TransferMarketTable: React.FC<TransferMarketTableProps> = ({players, onPlayerClick}) => {
    const {filters, handleFilterChange, handlePositionChange, handleNationalityChange, handleResetFilters} =
        useTransferMarketTableHeaderViewModel();
    const {sortedPlayers, sortKey, sortOrder, handleSort} = useTransferMarketTableViewModel(players);
    const {filteredPlayers} = useTransferMarketTableBodyViewModel(sortedPlayers, filters);

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
            />
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
                <TransferMarketTableBody
                    players={filteredPlayers}
                    onPlayerClick={onPlayerClick}
                />
            </table>
        </div>
    );
};

export default TransferMarketTable;