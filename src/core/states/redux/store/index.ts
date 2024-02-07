import { combineReducers, configureStore } from '@reduxjs/toolkit';
import features from '@/core/states/redux/features/index';

export const store = configureStore({
  reducer: {
    features: combineReducers(features),
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
