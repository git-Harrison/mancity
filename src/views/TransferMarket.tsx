import React, {useState} from 'react';
import {useTransferMarketViewModel} from '../viewmodels/transferMarket/useTransferMarketViewModel';
import TransferMarketTable from '../components/organisms/TransferMarketTable';
import TransferMarketDetail from '../components/molecules/TransferMarketDetail';
import {Player} from '../models/interfaces/Player.interface';
import LoadingSpinner from "../components/atoms/LoadingSpinner";

const TransferMarket: React.FC = () => {
    const {players, loading, error} = useTransferMarketViewModel();
    const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null); // 선택된 선수 상태 관리

    if (loading) {
        return (
            <LoadingSpinner message="데이터 가져오는 중..."/>
        );
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="transfer-market-container">
            <TransferMarketTable players={players} onPlayerClick={setSelectedPlayer}/> {/* onPlayerClick 이벤트 추가 */}
            <TransferMarketDetail player={selectedPlayer}/> {/* 선수 디테일 정보 표시 */}
        </div>
    );
};

export default TransferMarket;
