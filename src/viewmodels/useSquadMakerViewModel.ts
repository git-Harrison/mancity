import {useState, useEffect, useRef, useMemo} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {Player, HeldPlayer} from '../models/interfaces/Player.interface';
import {fetchPlayers, fetchPreviousSeasonPlayers} from '../api/services/playerService';
import html2canvas from 'html2canvas';

export const useSquadMakerViewModel = (selectedPosition: string | null, clickedSlot: string | null) => {
    const [currentPlayers, setCurrentPlayers] = useState<Player[]>([]);
    const [previousPlayers, setPreviousPlayers] = useState<Player[]>([]);
    const [selectedPlayers, setSelectedPlayers] = useState<{ [key: string]: Player | null }>({});
    const [loading, setLoading] = useState(true);
    const heldPlayers = useSelector((state: RootState) => state.player.heldPlayers);

    // 전체 선수 로딩
    useEffect(() => {
        const loadPlayers = async () => {
            setLoading(true);
            try {
                const currentData = await fetchPlayers(); // 현재 시즌 선수 데이터를 가져옴
                const previousData = await fetchPreviousSeasonPlayers(); // 이전 시즌 선수 데이터를 가져옴
                setCurrentPlayers(currentData);
                setPreviousPlayers(previousData);
            } catch (error) {
                console.error('Error loading players data:', error);
            } finally {
                setLoading(false);
            }
        };

        loadPlayers();
    }, []);

    // 전체 보유 선수 리스트 만들기
    const allPlayers = [...currentPlayers, ...previousPlayers];

    const fullHeldPlayers = heldPlayers
        .map((heldPlayer: HeldPlayer) => {
            const playerDetails = allPlayers.find((player: Player) => player.number === heldPlayer.number);
            if (playerDetails) {
                return {
                    ...playerDetails,
                    enhancementLevel: heldPlayer.enhancementLevel,
                } as Player;
            }
            return null;
        })
        .filter((player): player is Player => !!player);

    // 중복된 선수 제거 및 가장 높은 overall_ability를 가진 선수만 남기기
    const uniqueHeldPlayers = fullHeldPlayers.reduce((acc: Player[], currentPlayer: Player) => {
        const existingPlayer = acc.find(player => player.number === currentPlayer.number);
        if (!existingPlayer || existingPlayer.overall_ability < currentPlayer.overall_ability) {
            return acc.filter(player => player.number !== currentPlayer.number).concat(currentPlayer);
        }
        return acc;
    }, []);

    // 이전 filteredPlayers 값을 저장할 ref
    const prevFilteredPlayers = useRef<Player[]>([]);

    // 포지션에 맞는 선수 필터링 및 메모이제이션
    const filteredPlayers = useMemo(() => {
        const filtered = selectedPosition
            ? uniqueHeldPlayers.filter((player) => {
                switch (selectedPosition) {
                    case 'GK':
                        return player.position === 'GK';
                    case 'DEF':
                        return ['CB', 'LB', 'RB', 'LWB', 'RWB', 'DEF'].includes(player.position);
                    case 'MID':
                        return ['CM', 'LM', 'RM', 'CDM', 'CAM', 'MID'].includes(player.position);
                    case 'FW':
                        return ['ST', 'CF', 'LW', 'RW', 'FW'].includes(player.position);
                    default:
                        return false;
                }
            })
            : uniqueHeldPlayers;

        // 상태가 변경되지 않았으면 이전 filteredPlayers 값을 반환
        if (JSON.stringify(filtered) === JSON.stringify(prevFilteredPlayers.current)) {
            return prevFilteredPlayers.current;
        }

        // 상태가 변경되었으면 새로운 filteredPlayers를 저장
        prevFilteredPlayers.current = filtered;
        return filtered;
    }, [selectedPosition, uniqueHeldPlayers]);

    // 화면을 캡처하여 다운로드하는 함수
    const captureAndDownload = async () => {
        const element = document.getElementById('squad-maker-capture'); // 캡처할 DOM 요소를 선택
        if (!element) return;

        try {
            const canvas = await html2canvas(element);
            const dataUrl = canvas.toDataURL('image/png');

            // 이미지 다운로드를 트리거
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = 'squad_screenshot.png';  // 다운로드 파일명
            link.click();
        } catch (error) {
            console.error('캡처 실패:', error);
        }
    };

    const handlePlayerClick = (player: Player, slotKey: string) => {
        setSelectedPlayers((prev) => ({
            ...prev,
            [slotKey]: player,
        }));
    };

    return {
        loading,
        selectedPlayers,
        setSelectedPlayers,
        handlePlayerClick,
        filteredPlayers,
        captureAndDownload,  // 화면 캡처 다운로드 함수 노출
    };
};