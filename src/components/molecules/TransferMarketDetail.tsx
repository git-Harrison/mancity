import React, {useState} from 'react';
import {TransferMarketDetailProps} from '../../models/interfaces/Player.interface';
import PlayerCard from '../atoms/PlayerCard';
import TransferPlayerInfo from '../atoms/TransferPlayerInfo';
import {Button, Box, TextField} from '@mui/material';
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

    const [quantity, setQuantity] = useState<number>(1); // 영입할 선수 개수 상태 추가

    if (!player) {
        return <div className="transfer-market-detail empty">선수를 선택하세요</div>;
    }

    const transferFeePerPlayer = player.transfer_details?.transfer_fee ?? 0;
    const totalTransferFee = transferFeePerPlayer * quantity; // 선택한 개수만큼 총 이적료 계산
    const updatedCity = remainingCity - totalTransferFee;

    // 영입할 인원 수 변경 핸들러
    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);

        if (!isNaN(value)) {
            // 값이 1 미만이면 1로, 50 초과면 50으로 설정
            if (value < 1) {
                setQuantity(1);
            } else if (value > 50) {
                setQuantity(50);
            } else {
                setQuantity(value); // 1 이상 50 이하일 때만 상태 업데이트
            }
        }
    };


    const handleBuyPlayer = () => {
        buyPlayer(quantity); // 선택한 수량을 인자로 buyPlayer 호출
    };

    const renderConfirmationContent = (
        <div>
            <div className="transfer-fee">
                <span className="label">이적료 (1인당):</span>
                <div className="value">{numberWithCommas(transferFeePerPlayer)} CITY</div>
            </div>
            <div className="transfer-fee">
                <span className="label">영입할 인원:</span>
                <div className="value">
                    <TextField
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                        InputProps={{inputProps: {min: 1, max: 50}}} // 최소 값 1, 최대 값 50으로 설정
                        sx={{width: '80px'}}
                    />
                </div>
            </div>
            <div className="transfer-fee">
                <span className="label">총 이적료:</span>
                <div className="value">{numberWithCommas(totalTransferFee)} CITY</div>
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
                        <span className="highlight">{quantity}명의 {player.name} 선수를 영입에 성공했습니다.</span>
                    </div>
                );
            case 'insufficientCity':
                return (
                    <div className="dialog-content failure-message">
                        <span>보유한 CITY가 부족하여 영입할 수 없습니다.</span>
                    </div>
                );
            case 'playerLimitExceeded':
                return (
                    <div className="dialog-content failure-message">
                        <span>보유한 선수(100명)이 초과하여 영입할 수 없습니다.</span>
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
                {numberWithCommas(transferFeePerPlayer)} CITY (1인당)
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
                        color: 'var(--text-color)',
                        backgroundColor: 'var(--table-header-color)',
                        transition: 'all 0.2s ease',
                        fontFamily: '"Pretendard-Regular", sans-serif',
                        '&:hover': {
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
                    onConfirm={handleBuyPlayer} // handleBuyPlayer 호출
                    title={
                        dialogType === 'confirm'
                            ? `${quantity}명의 ${player.name} 선수를 영입하시겠습니까?`
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
