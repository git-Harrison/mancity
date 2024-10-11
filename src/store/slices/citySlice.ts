import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CityState {
    city: number;
}

const initialState: CityState = {
    city: 10000000000000, // 초기값 설정
};

const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        setCity: (state, action: PayloadAction<number>) => {
            state.city = action.payload;
        },
    },
});

export const {setCity} = citySlice.actions;
export default citySlice.reducer;
