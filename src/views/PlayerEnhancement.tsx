import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {removePlayer, upgradePlayer} from '../store/slices/playerSlice';
import PlayerCard from "../components/atoms/PlayerCard";
import {usePlayerEnhancementViewModel} from "../viewmodels/usePlayerEnhancementViewModel";
import {Player, HeldPlayer} from '../models/interfaces/Player.interface';
import PlayerEnhancementList from '../components/molecules/PlayerEnhancementList';

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

        console.log(`강화 결과: ${enhancementSuccess ? '성공' : '실패'}`);

        // 재료 선수 제거
        dispatch(removePlayer({id: materialPlayer.id}));

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
                <div className="enhance-box">
                    {targetPlayer ? (
                        <PlayerCard player={targetPlayer} showEnhancement={true}/>
                    ) : (
                        <p>No player selected</p>
                    )}
                    <button onClick={handleEnhance} disabled={sameLevelPlayersCount < 2}>
                        강화하기
                    </button>
                </div>
                <div className="player-list-wrap">
                    <h3>Held Players</h3>
                    <PlayerEnhancementList
                        players={heldPlayerDetails}
                        onPlayerClick={handleSelectPlayer}
                    />
                </div>
            </div>
        </div>
    );
};

export default PlayerEnhancement;