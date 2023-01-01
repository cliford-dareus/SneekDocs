import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api';
import  globalReducer from '../features/global';

export const store = configureStore({
    reducer: {
        global: globalReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;