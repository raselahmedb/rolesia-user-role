import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist'
import rootReducer from './rootReducer';


export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
