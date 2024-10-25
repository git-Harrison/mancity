import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import PlayerMiniCard from '../atoms/PlayerMiniCard';
import LoadingComponents from '../atoms/LoadingComponents';
import {useFormationStyleViewModel} from '../../viewmodels/useFormationStyleViewModel';
import {useSquadMakerViewModel} from '../../viewmodels/useSquadMakerViewModel';
import {SquadMakerProps} from '../../models/interfaces/Formation.interface';
import {Player} from '../../models/interfaces/Player.interface';
import {RootState} from '../../store/store';
import {Button} from '@mui/material';

const SquadMaker: React.FC<SquadMakerProps> = ({formation}) => {
    const {getFormationPositions} = useFormationStyleViewModel();
    const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
    const [clickedSlot, setClickedSlot] = useState<string | null>(null);

    const {
        loading,
        selectedPlayers,
        handlePlayerClick,
        filteredPlayers,
        captureAndDownload,  // 캡처 함수 가져오기
    } = useSquadMakerViewModel(selectedPosition, clickedSlot);

    const currentPositionStyles = getFormationPositions(formation.name || '') || {
        goalkeeper: [],
        defenders: [],
        midfielders: [],
        forwards: [],
    };

    // Redux에서 heldPlayers 가져오기
    const heldPlayers = useSelector((state: RootState) => state.player.heldPlayers);

    // 포지션 클릭 시 상태 초기화
    const handlePositionClick = (position: string, slotKey: string) => {
        setSelectedPosition(position);
        setClickedSlot(slotKey);
    };

    // 선수 클릭 시 해당 슬롯에 선수를 배정하는 로직
    const handlePlayerClickWithSlot = (player: Player) => {
        if (!clickedSlot) return;

        // clickedSlot에 해당하는 위치에 선수를 업데이트
        handlePlayerClick(player, clickedSlot);
    };

    // 이미 등록된 선수를 체크하는 함수
    const isPlayerSelected = (player: Player) => {
        return Object.values(selectedPlayers).some(selectedPlayer => selectedPlayer?.number === player.number);
    };

    // 해당 선수의 강화된 overall_ability를 리덕스에서 가져오는 함수
    const getEnhancedOverallAbility = (player: Player) => {
        const heldPlayer = heldPlayers.find(p => p.number === player.number);
        return heldPlayer ? heldPlayer.overall_ability : player.overall_ability;
    };

    return (
        <>
            {/* 필터링된 선수 리스트 표시 */}
            <div className="squad-player-list">
                <div>
                    <h3>{selectedPosition || 'All'} Players</h3>
                </div>
                {filteredPlayers.length > 0 ? (
                    <ul>
                        {filteredPlayers
                            .sort((a, b) => getEnhancedOverallAbility(b) - getEnhancedOverallAbility(a))  // overall_ability 높은 순서로 정렬
                            .map((player) => (
                                <li
                                    key={player.number}
                                    onClick={() => !isPlayerSelected(player) && handlePlayerClickWithSlot(player)}  // 이미 선택된 선수는 클릭 금지
                                    style={{opacity: isPlayerSelected(player) ? 0.5 : 1}} // 이미 선택된 선수는 시각적으로 구분
                                >
                                    <span className={`position ${player.position}`}>{player.position}</span>
                                    <span
                                        className={`enhancement-level enhancement-level${player.enhancementLevel}`}>{player.enhancementLevel}</span>
                                    <span>{player.name}</span>
                                    <span>{getEnhancedOverallAbility(player)}</span>
                                </li>
                            ))}
                    </ul>
                ) : (
                    <p>해당 포지션에 맞는 선수가 없습니다.<br/> 선수를 영입 후 이용해주세요.</p>
                )}
            </div>

            <div id="squad-maker-capture" className="squad-maker">
                <img src={`${process.env.PUBLIC_URL}/images/squad_maker_bg.webp`} alt="pitch" className="pitch-bg"/>

                {loading ? (
                    <LoadingComponents message="로딩중"/>
                ) : (
                    <>
                        {/* Goalkeeper */}
                        {currentPositionStyles.goalkeeper.map((style, index) => {
                            const slotKey = `GK-${index}`;
                            return (
                                <div key={slotKey} className="position-slot" style={style}>
                                    {selectedPlayers[slotKey] ? (
                                        <div onClick={() => handlePositionClick('GK', slotKey)}>
                                            <PlayerMiniCard player={selectedPlayers[slotKey]!} showEnhancement/>
                                        </div>
                                    ) : (
                                        <div className="position-box"
                                             onClick={() => handlePositionClick('GK', slotKey)}>
                                            GK
                                        </div>
                                    )}
                                </div>
                            );
                        })}

                        {/* Defenders */}
                        {currentPositionStyles.defenders.map((style, index) => {
                            const slotKey = `DEF-${index}`;
                            return (
                                <div key={slotKey} className="position-slot" style={style}>
                                    {selectedPlayers[slotKey] ? (
                                        <div onClick={() => handlePositionClick('DEF', slotKey)}>
                                            <PlayerMiniCard player={selectedPlayers[slotKey]!} showEnhancement/>
                                        </div>
                                    ) : (
                                        <div className="position-box"
                                             onClick={() => handlePositionClick('DEF', slotKey)}>
                                            DEF
                                        </div>
                                    )}
                                </div>
                            );
                        })}

                        {/* Midfielders */}
                        {currentPositionStyles.midfielders.map((style, index) => {
                            const slotKey = `MID-${index}`;
                            return (
                                <div key={slotKey} className="position-slot" style={style}>
                                    {selectedPlayers[slotKey] ? (
                                        <div onClick={() => handlePositionClick('MID', slotKey)}>
                                            <PlayerMiniCard player={selectedPlayers[slotKey]!} showEnhancement/>
                                        </div>
                                    ) : (
                                        <div className="position-box"
                                             onClick={() => handlePositionClick('MID', slotKey)}>
                                            MID
                                        </div>
                                    )}
                                </div>
                            );
                        })}

                        {/* Forwards */}
                        {currentPositionStyles.forwards.map((style, index) => {
                            const slotKey = `FW-${index}`;
                            return (
                                <div key={slotKey} className="position-slot" style={style}>
                                    {selectedPlayers[slotKey] ? (
                                        <div onClick={() => handlePositionClick('FW', slotKey)}>
                                            <PlayerMiniCard player={selectedPlayers[slotKey]!} showEnhancement/>
                                        </div>
                                    ) : (
                                        <div className="position-box"
                                             onClick={() => handlePositionClick('FW', slotKey)}>
                                            FW
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </>
                )}

                {/* 스쿼드 캡처 다운로드 버튼 */}
                <Button
                    className="capture-button"
                    onClick={captureAndDownload}
                    sx={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '180px',
                        height: '30px',
                        lineHeight: '26px',
                        color: 'var(--text-color)',
                        padding: '0 26px',
                        border: '1px solid rgba(255, 255, 255, 0.6)',
                        borderRadius: '4px',
                        paddingLeft: '37px',
                        background: 'var(--contents-background-image)',
                        '&:hover': {
                            background: 'var(--city-color)',
                        }
                    }}
                >
                    스쿼드 캡처하기
                </Button>
            </div>
        </>
    );
};

export default SquadMaker;