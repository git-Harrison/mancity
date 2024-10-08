import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {useEffect, useState} from 'react';

export const useHeaderViewModel = () => {
    // Redux store에서 city 값과 heldPlayers 값 가져오기
    const city = useSelector((state: RootState) => state.city.city);
    const heldPlayers = useSelector((state: RootState) => state.player.heldPlayers);

    // 보유 선수 수량 상태 관리
    const [heldPlayersCount, setHeldPlayersCount] = useState(0);

    // 보유 선수 수량 계산
    useEffect(() => {
        setHeldPlayersCount(heldPlayers.length);
    }, [heldPlayers]);

    return {
        city,
        heldPlayersCount,
    };
};