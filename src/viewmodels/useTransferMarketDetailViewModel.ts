import { useState, useEffect } from 'react';
import { TransferMarketDetailProps } from '../models/interfaces/Player.interface';

export const useTransferMarketDetailViewModel = (player: TransferMarketDetailProps['player']) => {
    const [remainingCity, setRemainingCity] = useState<number>(0);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [dialogType, setDialogType] = useState<'confirm' | 'success' | 'failure'>('confirm');
    const [heldPlayers, setHeldPlayers] = useState<number[]>([]); // 보유중인 선수의 number만 저장

    useEffect(() => {
        // 보유한 CITY 초기값 설정
        const initialCity = localStorage.getItem('city') ? JSON.parse(localStorage.getItem('city') as string) : 1000000000000;
        setRemainingCity(initialCity);

        // 보유중인 선수 목록 (number) 초기값 설정
        const storedPlayersNumbers = localStorage.getItem('heldPlayers') ? JSON.parse(localStorage.getItem('heldPlayers') as string) : [];
        setHeldPlayers(storedPlayersNumbers);
    }, []);

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
            setRemainingCity(updatedCity);
            localStorage.setItem('city', JSON.stringify(updatedCity));

            // 보유중인 선수 목록에 새로운 선수의 number 추가
            const updatedHeldPlayers = [...heldPlayers, player.number];
            setHeldPlayers(updatedHeldPlayers);
            localStorage.setItem('heldPlayers', JSON.stringify(updatedHeldPlayers)); // 로컬스토리지에 저장

            setDialogType('success');
            setOpen(true);
        }, 1500);
    };

    return {
        remainingCity,
        heldPlayers, // 보유중인 선수 번호 배열 반환
        open,
        loading,
        dialogType,
        handleClickOpen,
        handleDialogClose,
        buyPlayer,
    };
};
