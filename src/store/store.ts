import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {combineReducers} from 'redux';
import {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';
import cityReducer from './slices/citySlice';
import playerReducer from './slices/playerSlice';

// 여러 리듀서를 하나로 합침
const rootReducer = combineReducers({
    city: cityReducer,
    player: playerReducer, // player 리듀서 추가
});

// persist 설정
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

// persist 리듀서 생성
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 스토어 설정
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

// RootState 및 AppDispatch 타입 정의 및 내보내기
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// persistor와 store 내보내기
export const persistor = persistStore(store);
export default store;
