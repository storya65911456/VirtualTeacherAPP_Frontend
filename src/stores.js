import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore
} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import { NursingApi } from './services/QAServices';
import VTSlice from './slices/VTSlice';
import submitDataSlice from './slices/submitDataSlice';
import userSlice from './slices/userSlice';

const reducers = combineReducers({
    submit: submitDataSlice,
    user: userSlice,
    vt: VTSlice,
    [NursingApi.reducerPath]: NursingApi.reducer
});

const persistConfig = {
    key: 'root',
    storage: storageSession,
    whitelist: ['user', 'submit'], //需要缓存的数据 TODO:
    blacklist: ['vt'] //不需要缓存的数据
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        }).concat(NursingApi.middleware)
});

export const persistor = persistStore(store);

export default store;
