import { LateralButtons } from '@/widgets/lateralButtons';
import { ConfigScreen } from '../components/screen/config';

export const ConfigsPage = () => {
  return (
    <div>
      <ConfigScreen />

      <LateralButtons generateRandomPlaylist={() => {}} />
    </div>
  );
};
