import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import { authReducer } from './authSlice';
import { transactionsReducer } from './transactionsSlice';
import { pageSettingsReducer } from './pageSettingsSlice';
import { reportReducer } from './reportSlice';

const authPersistCfg = {
  key: 'auth',
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistCfg, authReducer),
    transactions: transactionsReducer,
    pageSettings: pageSettingsReducer,
    report: reportReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
