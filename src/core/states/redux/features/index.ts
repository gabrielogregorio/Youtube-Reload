import reactions from './reactions/slices';
import currentScreen from './currentScreen/slices';

export default {
  reactionsFeature: reactions.reducer,
  currentScreenFeature: currentScreen.reducer,
};
