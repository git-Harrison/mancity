import React from 'react';
import {Button, Tooltip, IconButton} from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PlayerCard from "../components/atoms/PlayerCard";
import PlayerEnhancementList from '../components/molecules/PlayerEnhancementList';
import EnhancementTable from "../components/molecules/EnhancementTable";
import CommonDialog from "../components/atoms/CommonDialog";
import {usePlayerEnhancementViewModel} from "../viewmodels/usePlayerEnhancementViewModel";
import {Link} from "react-router-dom";

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
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        position: 'relative'
                                    }}>
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
                                        <Tooltip
                                            title={
                                                <>
                                                    - 강화를 위해서는 동일한 선수 카드 중, 같은 강화 레벨의 카드 1장을 재료로 사용해야 합니다.
                                                    <br />
                                                    - 강화 시도 시 1000억 CITY를 획득합니다.
                                                </>
                                            }
                                        >
                                            <IconButton
                                                sx={{
                                                    position: 'absolute',
                                                    right: '15%',
                                                    top: '50%',
                                                    transform: 'translate(-50%, -50%)',
                                                    marginLeft: '8px',
                                                    color: 'var(--text-color)',
                                                }}
                                            >
                                                <HelpOutlineIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </div>
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
                    <div className="empty full-size">
                        보유 중인 선수가 없습니다
                        <Link to="/transfer" style={{textDecoration: 'none'}}>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{
                                    width: '180px',
                                    height: '44px',
                                    fontSize: '16px',
                                    textTransform: 'none',
                                    marginTop: '20px',
                                    color: 'var(--text-color)',
                                    backgroundColor: 'var(--table-header-color)',
                                    transition: 'all 0.2s ease',
                                    fontFamily: '"Pretendard-Regular", sans-serif',
                                    '&:hover': {
                                        backgroundColor: 'var(--city-color)',
                                    },
                                }}
                            >
                                선수 영입하러 가기
                            </Button>
                        </Link>
                    </div>
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