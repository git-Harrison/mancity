import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removePlayer, upgradePlayer} from '../store/slices/playerSlice';
import {setCity} from '../store/slices/citySlice';
import PlayerCard from "../components/atoms/PlayerCard";
import {usePlayerEnhancementViewModel} from "../viewmodels/usePlayerEnhancementViewModel";
import {Player, HeldPlayer} from '../models/interfaces/Player.interface';
import PlayerEnhancementList from '../components/molecules/PlayerEnhancementList';
import EnhancementTable from "../components/molecules/EnhancementTable";
import {Button, Box} from '@mui/material';
import {RootState} from '../store';

// 강화 등급별 확률 및 OVR 상승량 설정
const enhancementConfig: Record<number, { successRate: number; ovrIncrease: number }> = {
    1: {successRate: 1.00, ovrIncrease: 1},  // 1강 -> 2강
    2: {successRate: 0.81, ovrIncrease: 1},  // 2강 -> 3강
    3: {successRate: 0.64, ovrIncrease: 2},  // 3강 -> 4강
    4: {successRate: 0.50, ovrIncrease: 2},  // 4강 -> 5강
    5: {successRate: 0.26, ovrIncrease: 2},  // 5강 -> 6강
    6: {successRate: 0.15, ovrIncrease: 3},  // 6강 -> 7강
    7: {successRate: 0.07, ovrIncrease: 4},  // 7강 -> 8강
    8: {successRate: 0.04, ovrIncrease: 4},  // 8강 -> 9강
    9: {successRate: 0.02, ovrIncrease: 5},  // 9강 -> 10강
};

const PlayerEnhancement: React.FC = () => {
    const dispatch = useDispatch();
    const {heldPlayerDetails, handlePlayerSelect} = usePlayerEnhancementViewModel();

    // Redux 스토어에서 현재 city 값 가져오기
    const cityAmount = useSelector((state: RootState) => state.city.city);

    const [sameLevelPlayersCount, setSameLevelPlayersCount] = useState<number>(0);
    const [targetPlayer, setTargetPlayer] = useState<(HeldPlayer & Player) | null>(null);

    // targetPlayer가 변경되거나 heldPlayerDetails가 변경될 때 targetPlayer를 업데이트
    useEffect(() => {
        if (targetPlayer) {
            const updatedPlayer = heldPlayerDetails.find(
                (player) => player.id === targetPlayer.id
            );
            if (updatedPlayer) {
                setTargetPlayer(updatedPlayer); // 변경된 선수 정보로 targetPlayer 업데이트
            } else {
                setTargetPlayer(null);
            }
        }
    }, [heldPlayerDetails, targetPlayer]);

    const handleSelectPlayer = (player: HeldPlayer & Player) => {
        const sameLevelCount = heldPlayerDetails.filter(
            (p) => p.number === player.number && p.enhancementLevel === player.enhancementLevel
        ).length;

        setSameLevelPlayersCount(sameLevelCount);
        setTargetPlayer(player);
        handlePlayerSelect(player);
    };

    const handleEnhance = () => {
        if (!targetPlayer) return;

        const {id, number, enhancementLevel} = targetPlayer;

        const materialPlayer = heldPlayerDetails.find(
            (player) =>
                player.number === number &&
                player.enhancementLevel === enhancementLevel &&
                player.id !== id
        );

        if (!materialPlayer) {
            alert('강화를 위해 유효한 재료 선수가 필요합니다.');
            return;
        }

        // 현재 강화 레벨에 맞는 성공 확률과 OVR 증가량 가져오기
        const config = enhancementConfig[enhancementLevel]; // enhancementConfig 객체 참조
        const enhancementSuccess = Math.random() < config.successRate; // 확률에 따라 성공 여부 결정

        // 재료 선수 제거
        dispatch(removePlayer({id: materialPlayer.id}));

        // 성공 여부와 상관없이 city 값 추가
        dispatch(setCity(cityAmount + 100000000000)); // 기존 cityAmount 값에 10,000,000,000을 더해서 setCity 호출

        if (enhancementSuccess) {
            // 강화 성공 시: 타겟 선수의 강화 레벨 및 OVR 상승
            dispatch(upgradePlayer({id, ovrIncrease: config.ovrIncrease}));
            alert('강화에 성공하였습니다!');
        } else {
            alert('강화에 실패하였습니다.');
        }
    };

    return (
        <div className="contents-container">
            <div className="enhance-wrap">
                {heldPlayerDetails.length > 0 ? (
                    <>
                        <div className="enhance-box">
                            {targetPlayer ? (
                                <>
                                    <PlayerCard player={targetPlayer} showEnhancement={true}/>
                                    <EnhancementTable/>
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
                                        onClick={handleEnhance}
                                        disabled={sameLevelPlayersCount < 2}
                                    >
                                        강화하기
                                    </Button>
                                </>
                            ) : (
                                <div className="empty">강화 할 선수를 선택하세요</div>
                            )}
                        </div>
                        <div className="player-list-wrap">
                            <h3>Held Players</h3>
                            <PlayerEnhancementList
                                players={heldPlayerDetails}
                                onPlayerClick={handleSelectPlayer}
                            />
                        </div>
                    </>
                ) : (
                    <div className="empty full-size">보유중인 선수가 없습니다</div>
                )}
            </div>
        </div>
    );
};

export default PlayerEnhancement;
