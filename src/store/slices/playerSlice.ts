import {createSlice, PayloadAction, nanoid} from '@reduxjs/toolkit';
import {HeldPlayer} from '../../models/interfaces/Player.interface';

interface PlayerState {
    heldPlayers: HeldPlayer[];
}

const initialState: PlayerState = {
    heldPlayers: [],
};

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setHeldPlayers: (state, action: PayloadAction<HeldPlayer[]>) => {
            state.heldPlayers = action.payload;
        },
        addPlayer: {
            reducer(state, action: PayloadAction<HeldPlayer>) {
                state.heldPlayers.push(action.payload);
            },
            prepare(player: { number: number; enhancementLevel: number; overall_ability: number }) {
                const id = nanoid(); // 고유 ID 생성
                const payload: HeldPlayer = {id, ...player};
                return {payload};
            },
        },
        removePlayer: (state, action: PayloadAction<{ id: string }>) => {
            state.heldPlayers = state.heldPlayers.filter(
                (player) => player.id !== action.payload.id
            );
        },
        upgradePlayer: (state, action: PayloadAction<{ id: string; ovrIncrease: number }>) => {
            const player = state.heldPlayers.find(
                (player) => player.id === action.payload.id
            );
            if (player) {
                player.enhancementLevel += 1; // 강화 레벨 증가
                player.overall_ability += action.payload.ovrIncrease; // OVR 상승
            }
        },
    },
});

export const {setHeldPlayers, addPlayer, removePlayer, upgradePlayer} = playerSlice.actions;
export default playerSlice.reducer;