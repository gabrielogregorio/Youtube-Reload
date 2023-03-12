import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/connections/store/useRedux';
import { setScreen } from '@/connections/features/screenSelected/slices';
import type { AppDispatch } from '@/connections/store';
import type { ScreenEnum } from '@/contracts/homeScreens';
import { screenSelectedSelector } from '@/connections/features/screenSelected/selectors';

interface IUseScreenSelectedResponse {
  screenSelected: ScreenEnum;
  updateScreen: (newScreen: ScreenEnum) => void;
}

export const useScreenSelected = (): IUseScreenSelectedResponse => {
  const dispatch: AppDispatch = useAppDispatch();
  const { screenSelected } = useAppSelector(screenSelectedSelector);

  const updateScreen = useCallback(
    (newScreen: ScreenEnum): void => {
      dispatch(setScreen(newScreen));
    },
    [dispatch],
  );

  return {
    screenSelected,
    updateScreen,
  };
};
