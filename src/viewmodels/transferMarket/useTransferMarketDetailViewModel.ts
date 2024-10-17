// useTransferMarketDetailViewModel.tsx
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {TransferMarketDetailProps} from '../../models/interfaces/Player.interface';
import {RootState} from '../../store/store';
import {setCity} from '../../store/slices/citySlice';
import {addMultiplePlayers} from '../../store/slices/playerSlice'; // addMultiplePlayers 액션 가져오기

export const useTransferMarketDetailViewModel = (player: TransferMarketDetailProps['player']) => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [dialogType, setDialogType] = useState<'confirm' | 'success' | 'insufficientCity' | 'playerLimitExceeded'>('confirm');

    // Redux store의 city 값 및 heldPlayers 상태 가져오기
    const remainingCity = useSelector((state: RootState) => state.city.city);
    const heldPlayers = useSelector((state: RootState) => state.player.heldPlayers);

    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setDialogType('confirm');
        setOpen(true);
    };

    const handleDialogClose = () => {
        setOpen(false);
    };

    // 선수 영입 함수
    const buyPlayer = (quantity: number) => {
        if (!player) return;

        const transferFee = player.transfer_details?.transfer_fee ?? 0;
        const totalTransferFee = transferFee * quantity;
        const updatedCity = remainingCity - totalTransferFee;

        // 현재 보유 중인 선수 수를 가져오기
        const currentPlayersCount = heldPlayers.length; // Redux에서 가져오는 보유 선수 목록의 길이

        // 보유한 CITY가 부족한 경우
        if (updatedCity < 0) {
            setDialogType('insufficientCity'); // CITY 부족 실패 타입
            setOpen(true);
            return;
        }

        // 보유 선수 수가 100명을 넘는 경우
        if (currentPlayersCount + quantity > 100) {
            setDialogType('playerLimitExceeded'); // 선수 제한 초과 실패 타입
            setOpen(true);
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            dispatch(setCity(updatedCity)); // Redux store의 city 값 업데이트

            // 영입할 선수 개수만큼 선수 객체 생성하여 addMultiplePlayers 액션 사용
            const newPlayers = Array.from({length: quantity}, () => ({
                number: player.number,
                enhancementLevel: player.enhancementLevel ?? 1,
                overall_ability: player.overall_ability ?? 0,
            }));

            // 보유중인 선수 목록에 새로운 선수를 추가할 때 addMultiplePlayers 액션 사용
            dispatch(addMultiplePlayers(newPlayers, quantity));

            setDialogType('success');
            setOpen(true);
        }, 1000);
    };

    return {
        remainingCity,
        heldPlayers,
        open,
        loading,
        dialogType,
        handleClickOpen,
        handleDialogClose,
        buyPlayer,
    };
}