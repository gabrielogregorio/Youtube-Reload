import reactions from './reactions/slices';
import screenSelected from './screenSelected/slices';

export default {
  reactionsFeature: reactions.reducer,
  screenSelectedFeature: screenSelected.reducer,
};
