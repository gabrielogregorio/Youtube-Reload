import { ScreenEnum } from '@/contracts/homeScreens';
import { createSlice } from '@reduxjs/toolkit';

export interface ICurrentScreenFeature {
  currentScreen: ScreenEnum;
}

const initialState: ICurrentScreenFeature = {
  currentScreen: ScreenEnum.home,
};

const currentScreenSlice = createSlice({
  name: 'currentScreen',
  initialState,
  reducers: {
    setScreen: (state, { payload }: { payload: ScreenEnum }) => {
      return {
        ...state,
        currentScreen: payload,
      };
    },
  },
});

export const { setScreen } = currentScreenSlice.actions;

export default currentScreenSlice;
