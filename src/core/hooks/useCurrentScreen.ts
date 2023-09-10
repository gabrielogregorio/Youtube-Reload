import { useCallback } from 'react';
import { ScreenEnum } from '@/contracts/homeScreens';
import { useAppDispatch, useAppSelector } from '@/core/states/redux/store/useRedux';
import { setScreen } from '@/core/states/redux/features/currentScreen/slices';
import { screenSelectedSelector } from '@/core/states/redux/features/currentScreen/selectors';

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
