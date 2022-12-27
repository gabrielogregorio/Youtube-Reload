import type { ReactElement } from 'react';
import { ScreenEnum } from '@/contracts/homeScreens';
import { TemplateDefault } from '@/templates/default';
import { Header } from '@/layouts/header';
import { ConfigScreen } from '@/screen/config';
import { LateralButtons } from '@/widgets/lateralButtons';

export const ConfigsPage = (): ReactElement => {
  return (
    <TemplateDefault activeScreen={ScreenEnum.configs}>
      <>
        <Header />

        <ConfigScreen />

        <LateralButtons generateRandomPlaylist={(): void => {}} />
      </>
    </TemplateDefault>
  );
};
