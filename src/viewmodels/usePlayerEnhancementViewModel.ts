import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removePlayer, upgradePlayer} from '../store/slices/playerSlice';
import {setCity} from '../store/slices/citySlice';
import {RootState} from '../store/store';
import {fetchPlayers, fetchPreviousSeasonPlayers} from '../api/services/playerService';
import {Player, HeldPlayer} from '../models/interfaces/Player.interface';

// 강화 등급별 확률 및 OVR 상승량 설정
const enhancementConfig: Record<number, { successRate: number; ovrIncrease: number }> = {
    1: {successRate: 1.00, ovrIncrease: 1},
    2: {successRate: 0.81, ovrIncrease: 1},
    3: {successRate: 0.64, ovrIncrease: 2},
    4: {successRate: 0.50, ovrIncrease: 2},
    5: {successRate: 0.26, ovrIncrease: 2},
    6: {successRate: 0.15, ovrIncrease: 3},
    7: {successRate: 0.07, ovrIncrease: 4},
    8: {successRate: 0.04, ovrIncrease: 4},
    9: {successRate: 0.02, ovrIncrease: 5},
};

export const usePlayerEnhancementViewModel = () => {
    const dispatch = useDispatch();
    const cityAmount = useSelector((state: RootState) => state.city.city);
    const heldPlayers = useSelector((state: RootState) => state.player.heldPlayers);
    const [allPlayers, setAllPlayers] = useState<Player[]>([]);
    const [heldPlayerDetails, setHeldPlayerDetails] = useState<(HeldPlayer & Player)[]>([]);
    const [selectedPlayer, setSelectedPlayer] = useState<(HeldPlayer & Player) | null>(null);
    const [sameLevelPlayersCount, setSameLevelPlayersCount] = useState<number>(0);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogType, setDialogType] = useState<'confirm' | 'success' | 'failure' | 'playerLimitExceeded'>('confirm');

    useEffect(() => {
        const loadPlayers = async () => {
            try {
                const currentPlayers = await fetchPlayers();
                const previousPlayers = await fetchPreviousSeasonPlayers();
                setAllPlayers([...currentPlayers, ...previousPlayers]);
            } catch (error) {
                console.error('Failed to load player data:', error);
            }
        };

        loadPlayers();
    }, []);

    useEffect(() => {
        if (allPlayers.length > 0) {
            const detailedPlayers = heldPlayers.map(heldPlayer => {
                const playerData = allPlayers.find(p => p.number === heldPlayer.number);
                return playerData ? {...playerData, ...heldPlayer, id: heldPlayer.id} : null;
            }).filter((p): p is HeldPlayer & Player => p !== null);

            setHeldPlayerDetails(detailedPlayers);
        }
    }, [allPlayers, heldPlayers]);

    const handlePlayerSelect = (player: HeldPlayer & Player) => {
        const sameLevelCount = heldPlayerDetails.filter(
            (p) => p.number === player.number && p.enhancementLevel === player.enhancementLevel
        ).length;
        setSameLevelPlayersCount(sameLevelCount);
        setSelectedPlayer(player);
    };

    const handleEnhance = () => {
        if (!selectedPlayer) return;

        const {id, number, enhancementLevel} = selectedPlayer;

        const materialPlayer = heldPlayerDetails.find(
            (player) =>
                player.number === number &&
                player.enhancementLevel === enhancementLevel &&
                player.id !== id
        );

        if (!materialPlayer) {
            setDialogType('playerLimitExceeded');
            setDialogOpen(true);
            return;
        }

        const config = enhancementConfig[enhancementLevel];
        const enhancementSuccess = Math.random() < config.successRate;

        dispatch(removePlayer({id: materialPlayer.id}));
        dispatch(setCity(cityAmount + 100000000000));

        if (enhancementSuccess) {
            // 강화 성공 시 강화 레벨을 1씩 증가시키고 OVR 상승 처리
            setSelectedPlayer(prev => prev ? {...prev, enhancementLevel: prev.enhancementLevel + 1} : prev);

            // OVR 상승은 여전히 ovrIncrease를 사용하여 처리
            dispatch(upgradePlayer({id, ovrIncrease: config.ovrIncrease}));
            setDialogType('success');
        } else {
            setDialogType('failure');
        }

        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    return {
        heldPlayerDetails,
        selectedPlayer,
        sameLevelPlayersCount,
        dialogOpen,
        dialogType,
        handlePlayerSelect,
        handleEnhance,
        handleDialogClose,
    };
};