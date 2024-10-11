import React from 'react';
import {TransferMarketDetailProps} from '../../models/interfaces/Player.interface';
import PlayerCard from '../atoms/PlayerCard';
import TransferPlayerInfo from '../atoms/TransferPlayerInfo';
import {Button, Box} from '@mui/material';
import {numberWithCommas} from '../../utils/formatCurrency';
import CommonDialog from '../atoms/CommonDialog';
import LoadingSpinner from '../atoms/LoadingSpinner';
import {useTransferMarketDetailViewModel} from '../../viewmodels/transferMarket/useTransferMarketDetailViewModel';

const TransferMarketDetail: React.FC<TransferMarketDetailProps> = ({player}) => {
    const {
        remainingCity,
        open,
        loading,
        dialogType,
        handleClickOpen,
        handleDialogClose,
        buyPlayer,
    } = useTransferMarketDetailViewModel(player);

    if (!player) {
        return <div className="transfer-market-detail empty">선수를 선택하세요</div>;
    }

    const transferFee = player.transfer_details?.transfer_fee ?? 0;
    const updatedCity = remainingCity - transferFee;

    const renderConfirmationContent = (
        <div>
            <div className="transfer-fee">
                <span className="label">이적료:</span>
                <div className="value">{numberWithCommas(transferFee)} CITY</div>
            </div>
            <div className="transfer-fee">
                <span className="label">보유한:</span>
                <div className="value">{numberWithCommas(remainingCity)} CITY</div>
            </div>
            <div className="transfer-fee">
                <span className="label">영입 후 남은:</span>
                <div className={`value ${updatedCity < 0 ? 'negative' : ''}`}>
                    {numberWithCommas(updatedCity)} CITY
                </div>
            </div>
        </div>
    );

    const renderDialogContent = () => {
        switch (dialogType) {
            case 'confirm':
                return renderConfirmationContent;
            case 'success':
                return (
                    <div className="dialog-content success-message">
                        <span className="highlight">{player.name} 선수를 영입에 성공했습니다.</span>
                    </div>
                );
            case 'failure':
                return (
                    <div className="dialog-content failure-message">
                        <span>보유한 CITY가 부족하여 영입할 수 없습니다.</span>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="transfer-market-detail">
            <PlayerCard player={player} showEnhancement={true}/>
            <TransferPlayerInfo player={player}/>
            <div className="transfer-fee">
                <span>이적료</span>
                {numberWithCommas(transferFee)} CITY
            </div>
            <Box sx={{display: 'flex', justifyContent: 'flex-end', marginTop: '14px'}}>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        width: '180px',
                        height: '44px',
                        fontSize: '16px',
                        textTransform: 'none',
                        color: '#ffffff',
                        backgroundColor: '#3e3d55',
                        transition: 'transform 0.3s ease-in-out',
                        fontFamily: '"Pretendard-Bold", sans-serif',
                        '&:hover': {
                            color: '#ffffff',
                            backgroundColor: 'var(--city-color)',
                        },
                    }}
                    onClick={handleClickOpen}
                    disabled={loading}
                >
                    영입하기
                </Button>
            </Box>

            {!loading && (
                <CommonDialog
                    open={open}
                    onClose={handleDialogClose}
                    onConfirm={buyPlayer}
                    title={
                        dialogType === 'confirm'
                            ? `${player.name} 선수를 영입하시겠습니까?`
                            : dialogType === 'success'
                                ? '이적 성공'
                                : '이적 실패'
                    }
                    content={renderDialogContent()}
                    dialogType={dialogType}
                />
            )}

            {loading && <LoadingSpinner message="선수 영입중 ..."/>}
        </div>
    );
};

export default TransferMarketDetail;
