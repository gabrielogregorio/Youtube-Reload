import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@/connections/store';
import type { IReactionsFeature } from '@/connections/features/reactions/slices';

const selectReactions = (state: RootState): IReactionsFeature => state.features.reactionsFeature;

export const reactionsSelector = createSelector(selectReactions, (state) => state);
