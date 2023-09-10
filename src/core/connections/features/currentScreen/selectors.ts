import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/connections/store';
import { ICurrentScreenFeature } from '@/connections/features/currentScreen/slices';

const currentScreenSelected = (state: RootState): ICurrentScreenFeature => state.features.currentScreenFeature;

export const screenSelectedSelector = createSelector(currentScreenSelected, (state) => state);
