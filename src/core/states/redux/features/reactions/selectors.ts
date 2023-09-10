import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/core/states/redux/store';
import { IReactionsFeature } from '@/core/states/redux/features/reactions/slices';

const selectReactions = (state: RootState): IReactionsFeature => state.features.reactionsFeature;

export const reactionsSelector = createSelector(selectReactions, (state) => state);
