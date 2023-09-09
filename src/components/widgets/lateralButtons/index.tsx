import { ScreenEnum } from '@/contracts/homeScreens';
import { useScreenSelected } from '@/hooks/useScreenSelected';
import { LogService } from '@/services/log/LogService';
import { HEIGHT_IN_PX_TO_IGNORE_HEADER, moveToTop } from '@/utils/scroll';
import { LateralButton, LateralButtonEnum } from '@/widgets/lateralButtons/buttons';
import type { ReactElement } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { BiRefresh } from 'react-icons/bi';
import { BsBookmarkCheckFill } from 'react-icons/bs';

interface ILateralButtonsProps {
  generateRandomPlaylist: () => void;
}

export const LateralButtons = ({ generateRandomPlaylist }: ILateralButtonsProps): ReactElement => {
  const { updateScreen } = useScreenSelected();

  return (
    <section>
      <LateralButton
        action={(): void => {
          LogService.addBreadcrumb({ type: 'click', level: 'info', message: 'move to top' });
          moveToTop();
        }}
        title="Ir para cima"
        bottomPosition="bottom-[10rem]"
        variant={LateralButtonEnum.Dark}
        icon={<AiOutlineArrowUp className="text-2xl" />}
      />

      <LateralButton
        action={(): void => {
          LogService.addBreadcrumb({ type: 'click', level: 'info', message: 'open likes' });
          moveToTop();
          updateScreen(ScreenEnum.likes);
        }}
        title="ir para favoritos"
        bottomPosition="bottom-[6rem]"
        variant={LateralButtonEnum.Red}
        icon={<BsBookmarkCheckFill className="text-2xl" />}
      />

      <LateralButton
        action={(): void => {
          LogService.addBreadcrumb({ type: 'click', level: 'info', message: 'generate new playlist' });
          updateScreen(ScreenEnum.home);
          generateRandomPlaylist();
          moveToTop(HEIGHT_IN_PX_TO_IGNORE_HEADER);
        }}
        title="gerar nova playlist"
        bottomPosition="bottom-[2rem]"
        variant={LateralButtonEnum.Blue}
        icon={<BiRefresh className="text-2xl" />}
      />
    </section>
  );
};
