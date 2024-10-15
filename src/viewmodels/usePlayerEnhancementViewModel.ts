import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {fetchPlayers, fetchPreviousSeasonPlayers} from '../api/services/playerService';
import {Player, HeldPlayer} from '../models/interfaces/Player.interface';

export const usePlayerEnhancementViewModel = () => {
    const heldPlayers = useSelector((state: RootState) => state.player.heldPlayers);
    const [allPlayers, setAllPlayers] = useState<Player[]>([]);
    const [heldPlayerDetails, setHeldPlayerDetails] = useState<(HeldPlayer & Player)[]>([]);
    const [selectedPlayer, setSelectedPlayer] = useState<(HeldPlayer & Player) | null>(null);

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
            // heldPlayers와 allPlayers의 정보를 병합하여 heldPlayerDetails 생성
            const detailedPlayers = heldPlayers
                .map((heldPlayer) => {
                    const playerData = allPlayers.find((p) => p.number === heldPlayer.number);
                    if (playerData) {
                        // 병합 후에도 heldPlayer의 enhancementLevel과 overall_ability를 유지
                        return {
                            ...playerData,
                            enhancementLevel: heldPlayer.enhancementLevel,
                            overall_ability: heldPlayer.overall_ability ?? playerData.overall_ability,
                            id: heldPlayer.id,
                        };
                    }
                    return null;
                })
                .filter((p): p is HeldPlayer & Player => p !== null);

            setHeldPlayerDetails(detailedPlayers);
        }
    }, [allPlayers, heldPlayers]);

    const handlePlayerSelect = (player: HeldPlayer & Player) => {
        setSelectedPlayer(player);
    };

    return {
        heldPlayerDetails,
        selectedPlayer,
        handlePlayerSelect,
    };
};