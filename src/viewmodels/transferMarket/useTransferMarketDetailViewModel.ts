import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {TransferMarketDetailProps} from '../../models/interfaces/Player.interface';
import {RootState} from '../../store';
import {setCity} from '../../store/slices/citySlice';
import {addPlayer} from '../../store/slices/playerSlice';

export const useTransferMarketDetailViewModel = (
    player: TransferMarketDetailProps['player']
) => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [dialogType, setDialogType] = useState<'confirm' | 'success' | 'failure'>(
        'confirm'
    );

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

    const buyPlayer = () => {
        if (!player) return;

        const transferFee = player.transfer_details?.transfer_fee ?? 0;
        const updatedCity = remainingCity - transferFee;

        // 보유한 CITY가 부족한 경우
        if (updatedCity < 0) {
            setDialogType('failure');
            setOpen(true);
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            dispatch(setCity(updatedCity)); // Redux store의 city 값 업데이트

            // 보유중인 선수 목록에 새로운 선수를 추가할 때 addPlayer 액션 사용
            dispatch(
                addPlayer({
                    number: player.number,
                    enhancementLevel: player.enhancementLevel ?? 1,
                    overall_ability: player.overall_ability ?? 0,
                })
            );

            setDialogType('success');
            setOpen(true);
        }, 1500);
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
};
