import React from 'react';
import {Button} from '@mui/material';
import PlayerCard from "../components/atoms/PlayerCard";
import PlayerEnhancementList from '../components/molecules/PlayerEnhancementList';
import EnhancementTable from "../components/molecules/EnhancementTable";
import CommonDialog from "../components/atoms/CommonDialog";
import {usePlayerEnhancementViewModel} from "../viewmodels/usePlayerEnhancementViewModel";

const PlayerEnhancement: React.FC = () => {
    const {
        heldPlayerDetails,
        selectedPlayer,
        sameLevelPlayersCount,
        dialogOpen,
        dialogType,
        handlePlayerSelect,
        handleEnhance,
        handleDialogClose,
    } = usePlayerEnhancementViewModel();

    const renderDialogContent = () => {
        switch (dialogType) {
            case 'playerLimitExceeded':
                return (
                    <div className="dialog-content success-message">
                        <span>{selectedPlayer ? `${selectedPlayer.name} 선수의 재료 선수가 부족합니다.` : '재료 선수가 부족합니다.'}</span>
                    </div>
                );
            case 'success':
                return (
                    <div className="dialog-content success-message">
                        <span>강화에 성공하여 {selectedPlayer ? `+${selectedPlayer.enhancementLevel}강이 되었습니다.` : '강화 성공'}</span>
                    </div>
                );
            case 'failure':
                return (
                    <div className="dialog-content failure-message">
                        <span>강화에 실패하여 재료 선수가 소멸되었습니다.</span>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="contents-container">
            <div className="enhance-wrap">
                {heldPlayerDetails.length > 0 ? (
                    <>
                        <div className="enhance-box">
                            {selectedPlayer ? (
                                <>
                                    <PlayerCard player={selectedPlayer} showEnhancement={true}/>
                                    <EnhancementTable/>
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
                                            fontFamily: '"Pretendard-Bold", sans-serif',
                                            '&:hover': {
                                                backgroundColor: 'var(--city-color)',
                                            },
                                        }}
                                        onClick={handleEnhance}
                                        disabled={sameLevelPlayersCount < 2}
                                    >
                                        강화하기
                                    </Button>
                                </>
                            ) : (
                                <div className="empty">강화할 선수를 선택하세요</div>
                            )}
                        </div>
                        <div className="player-list-wrap">
                            <h3>Held Players</h3>
                            <PlayerEnhancementList
                                players={heldPlayerDetails}
                                onPlayerClick={handlePlayerSelect}
                            />
                        </div>
                    </>
                ) : (
                    <div className="empty full-size">보유 중인 선수가 없습니다</div>
                )}
            </div>
            <CommonDialog
                open={dialogOpen}
                onClose={handleDialogClose}
                title={dialogType === 'playerLimitExceeded' ? '재료 선수 부족' : dialogType === 'success' ? '강화 성공' : '강화 실패'}
                content={renderDialogContent()}
                dialogType={dialogType}
            />
        </div>
    );
};

export default PlayerEnhancement;