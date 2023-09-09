import { FloatingActionButtons } from '@/features/FloatingActionButtons';
import { ConfigScreen } from '@/screens/config';

export const ConfigsPage = () => {
  return (
    <div>
      <ConfigScreen />

      <FloatingActionButtons generateRandomPlaylist={() => {}} />
    </div>
  );
};
