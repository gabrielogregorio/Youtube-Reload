import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/core/states/redux/store';
import { ICurrentScreenFeature } from '@/core/states/redux/features/currentScreen/slices';

const currentScreenSelected = (state: RootState): ICurrentScreenFeature => state.features.currentScreenFeature;

export const screenSelectedSelector = createSelector(currentScreenSelected, (state) => state);
