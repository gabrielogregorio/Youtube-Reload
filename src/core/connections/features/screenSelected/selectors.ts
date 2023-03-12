import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@/connections/store';
import type { IScreenSelectedFeature } from '@/connections/features/screenSelected/slices';

const selectScreenSelected = (state: RootState): IScreenSelectedFeature => state.features.screenSelectedFeature;

export const screenSelectedSelector = createSelector(selectScreenSelected, (state) => state);
