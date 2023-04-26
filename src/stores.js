import { configureStore } from '@reduxjs/toolkit';
import storageSession from 'redux-persist/lib/storage/session';
import { combineReducers } from 'redux';
import { NursingApi } from './services/QAServices';
import userSlice from './slices/userSlice';
import submitDataSlice from './slices/submitDataSlice';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';

const reducers = combineReducers({
    submit: submitDataSlice,
    user: userSlice,
    [NursingApi.reducerPath]: NursingApi.reducer
});

const persistConfig = {
    key: 'root',
    storage: storageSession,
    whitelist: ['user'], //需要缓存的数据 TODO:
    blacklist: ['submit'] //不需要缓存的数据
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
