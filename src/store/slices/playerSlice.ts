import {createSlice, PayloadAction, nanoid} from '@reduxjs/toolkit';
import {HeldPlayer} from '../../models/interfaces/Player.interface';

interface PlayerState {
    heldPlayers: HeldPlayer[];
}

const initialState: PlayerState = {
    heldPlayers: [],
};

const MAX_PLAYERS = 100; // 최대 100명으로 제한

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setHeldPlayers: (state, action: PayloadAction<HeldPlayer[]>) => {
            state.heldPlayers = action.payload;
        },
        addPlayer: {
            reducer(state, action: PayloadAction<HeldPlayer>) {
                if (state.heldPlayers.length < MAX_PLAYERS) {
                    state.heldPlayers.push(action.payload); // 최대 수를 초과하지 않을 경우 추가
                } else {
                    console.warn('선수 추가가 제한되었습니다. 최대 보유 가능한 선수는 100명입니다.'); // 경고 메시지 출력
                }
            },
            prepare(player: { number: number; position: string; enhancementLevel: number; overall_ability: number }) {
                const id = nanoid(); // 고유 ID 생성
                const payload: HeldPlayer = {
                    id,
                    number: player.number,
                    position: player.position,
                    enhancementLevel: player.enhancementLevel,
                    overall_ability: player.overall_ability
                };
                return {payload};
            },
        },
        addMultiplePlayers: {
            reducer(state, action: PayloadAction<HeldPlayer[]>) {
                const totalPlayers = state.heldPlayers.length + action.payload.length;
                if (totalPlayers <= MAX_PLAYERS) {
                    state.heldPlayers.push(...action.payload); // 최대 수를 초과하지 않을 경우 추가
                } else {
                    console.warn('선수 추가가 제한되었습니다. 최대 보유 가능한 선수는 100명입니다.'); // 경고 메시지 출력
                }
            },
            prepare(players: { number: number; position: string; enhancementLevel: number; overall_ability: number }[], quantity: number) {
                // 여러 개의 선수를 추가하기 위해 고유 ID와 함께 새로운 HeldPlayer 배열 생성
                const payload = Array.from({length: quantity}, () => {
                    const id = nanoid(); // 각 선수에 대해 고유 ID 생성
                    return {
                        id,
                        number: players[0].number,
                        position: players[0].position, // position 추가
                        enhancementLevel: players[0].enhancementLevel,
                        overall_ability: players[0].overall_ability
                    };
                });
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

export const {setHeldPlayers, addPlayer, addMultiplePlayers, removePlayer, upgradePlayer} = playerSlice.actions;
export default playerSlice.reducer;