import { Reducer } from '@reduxjs/toolkit';
import { PersistConfig, persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/es/storage/session';
import authReducer from '@/lib/features/auths/authSlice';
import storage from 'redux-persist/lib/storage';
import roleReduce from '@/lib/features/roles/roleSlice';
import userReduce from '@/lib/features/users/userSlice';

// const createNoopStorage = () => {
//     return {
//         getItem(_key: any) {
//             return Promise.resolve(null);
//         },
//         setItem(_key: any, value: any) {
//             return Promise.resolve(value);
//         },
//         removeItem(_key: any) {
//             return Promise.resolve();
//         },
//     };
// };

const noopStorage = {
    getItem: () => Promise.resolve(null),
    setItem: () => Promise.resolve(),
    removeItem: () => Promise.resolve(),
};

const storage2 = typeof window !== 'undefined' && window.localStorage ? storage : noopStorage//typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();



interface PersistConfigPops {
    key: string;
    reducer: Reducer<any>;
    version?: number;
    sessionStor?: boolean;
}


export const persistConfig = ({ key, reducer, version = 1, sessionStor = false }: PersistConfigPops) => {
    const store = sessionStor ? sessionStorage : storage2;
    const persistConfig: PersistConfig<any> = {
        key,
        version,
        storage: store,
        // whitelist: [key], // Specify which slices to persist
        // blacklist: [key], //
    };

    const persistedReducer = persistReducer(persistConfig, reducer);

    return persistedReducer;
};


export const persistAuthConfig = persistConfig({ key: 'auth', reducer: authReducer });
export const persistRoleConfig = roleReduce;
export const persistUserConfig = userReduce;
