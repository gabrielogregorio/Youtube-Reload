import type { ReactElement } from 'react';
import { ConfigScreen } from '@/screen/config';
import { LateralButtons } from '@/widgets/lateralButtons';

export const ConfigsPage = (): ReactElement => {
  return (
    <div>
      <ConfigScreen />

      <LateralButtons generateRandomPlaylist={(): void => {}} />
    </div>
  );
};
