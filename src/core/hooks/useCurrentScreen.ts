import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/connections/store/useRedux';
import { ScreenEnum } from '@/contracts/homeScreens';
import { setScreen } from '@/connections/features/currentScreen/slices';
import { screenSelectedSelector } from '@/connections/features/currentScreen/selectors';

export const useCurrentScreen = () => {
  const dispatch = useAppDispatch();
  const { currentScreen } = useAppSelector(screenSelectedSelector);

  const updateCurrentScreen = useCallback(
    (newScreen: ScreenEnum) => {
      dispatch(setScreen(newScreen));
    },
    [dispatch],
  );

  return {
    currentScreen,
    updateCurrentScreen,
  };
};
