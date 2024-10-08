// src/store/slices/playerSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface PlayerState {
    heldPlayers: number[]; // 보유한 선수의 번호 배열
}

const initialState: PlayerState = {
    heldPlayers: [], // 초기값 설정
};

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setHeldPlayers: (state, action: PayloadAction<number[]>) => {
            state.heldPlayers = action.payload;
        },
        addPlayer: (state, action: PayloadAction<number>) => {
            state.heldPlayers.push(action.payload);
        },
        removePlayer: (state, action: PayloadAction<number>) => {
            state.heldPlayers = state.heldPlayers.filter((number) => number !== action.payload);
        },
    },
});

export const {setHeldPlayers, addPlayer, removePlayer} = playerSlice.actions;
export default playerSlice.reducer;