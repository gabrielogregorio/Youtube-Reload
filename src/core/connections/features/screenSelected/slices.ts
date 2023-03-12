import { ScreenEnum } from '@/contracts/homeScreens';
import { createSlice } from '@reduxjs/toolkit';

export interface IScreenSelectedFeature {
  screenSelected: ScreenEnum;
}

const initialState: IScreenSelectedFeature = {
  screenSelected: ScreenEnum.home,
};

const screenSelectedSlice = createSlice({
  name: 'screenSelected',
  initialState,
  reducers: {
    setScreen: (state, { payload }: { payload: ScreenEnum }) => {
      return {
        ...state,
        screenSelected: payload,
      };
    },
  },
});

export const { setScreen } = screenSelectedSlice.actions;

export default screenSelectedSlice;
