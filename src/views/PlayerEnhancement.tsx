import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removePlayer, upgradePlayer} from '../store/slices/playerSlice';
import {setCity} from '../store/slices/citySlice';
import PlayerCard from '../components/atoms/PlayerCard';
import {usePlayerEnhancementViewModel} from '../viewmodels/usePlayerEnhancementViewModel';
import {Player, HeldPlayer} from '../models/interfaces/Player.interface';
import PlayerEnhancementList from '../components/molecules/PlayerEnhancementList';
import EnhancementTable from '../components/molecules/EnhancementTable';
import {Button} from '@mui/material';
import {RootState} from '../store/store';
import {motion} from 'framer-motion';

// 강화 등급별 확률 및 OVR 상승량 설정
const enhancementConfig: Record<number, {
    successRate: number;
    ovrIncrease: number
}> = {
    1: {successRate: 1.0, ovrIncrease: 1}, // 1강 -> 2강
    2: {successRate: 0.81, ovrIncrease: 1}, // 2강 -> 3강
    3: {successRate: 0.64, ovrIncrease: 2}, // 3강 -> 4강
    4: {successRate: 0.5, ovrIncrease: 2},  // 4강 -> 5강
    5: {successRate: 0.26, ovrIncrease: 2}, // 5강 -> 6강
    6: {successRate: 0.15, ovrIncrease: 3}, // 6강 -> 7강
    7: {successRate: 0.07, ovrIncrease: 4}, // 7강 -> 8강
    8: {successRate: 0.04, ovrIncrease: 4}, // 8강 -> 9강
    9: {successRate: 0.02, ovrIncrease: 5}, // 9강 -> 10강
};

const PlayerEnhancement: React.FC = () => {
    const dispatch = useDispatch();
    const {heldPlayerDetails, handlePlayerSelect} = usePlayerEnhancementViewModel();
    const cityAmount = useSelector((state: RootState) => state.city.city);
    const [sameLevelPlayersCount, setSameLevelPlayersCount] = useState<number>(0);
    const [targetPlayer, setTargetPlayer] = useState<(HeldPlayer & Player) | null>(null);

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

        const config = enhancementConfig[enhancementLevel];
        const enhancementSuccess = Math.random() < config.successRate;

        dispatch(removePlayer({id: materialPlayer.id}));
        dispatch(setCity(cityAmount + 100000000000));

        if (enhancementSuccess) {
            dispatch(upgradePlayer({id, ovrIncrease: config.ovrIncrease}));
            alert('강화에 성공하였습니다!');
        } else {
            alert('강화에 실패하였습니다.');
        }
    };

    return (
        <motion.div
            className="contents-container"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <div className="enhance-wrap">
                {heldPlayerDetails.length > 0 ? (
                    <>
                        <motion.div
                            className="enhance-box"
                            initial={{scale: 0.9, opacity: 0}}
                            animate={{scale: 1, opacity: 1}}
                            transition={{duration: 0.4}}
                        >
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
                                <motion.div
                                    className="empty"
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{duration: 0.5}}
                                >
                                    강화 할 선수를 선택하세요
                                </motion.div>
                            )}
                        </motion.div>
                        <motion.div
                            className="player-list-wrap"
                            initial={{x: -100, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{duration: 0.6}}
                        >
                            <h3>Held Players</h3>
                            <PlayerEnhancementList
                                players={heldPlayerDetails}
                                onPlayerClick={handleSelectPlayer}
                            />
                        </motion.div>
                    </>
                ) : (
                    <motion.div
                        className="empty full-size"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.5}}
                    >
                        보유중인 선수가 없습니다
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

export default PlayerEnhancement;