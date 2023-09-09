import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/connections/store/useRedux';
import type { AppDispatch } from '@/connections/store';
import type { ScreenEnum } from '@/contracts/homeScreens';
import { setScreen } from '@/connections/features/currentScreen/slices';
import { screenSelectedSelector } from '@/connections/features/currentScreen/selectors';

export const useCurrentScreen = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const { currentScreen } = useAppSelector(screenSelectedSelector);

  const updateCurrentScreen = useCallback(
    (newScreen: ScreenEnum): void => {
      dispatch(setScreen(newScreen));
    },
    [dispatch],
  );

  return {
    currentScreen,
    updateCurrentScreen,
  };
};
