import { ScreenEnum } from '@/contracts/homeScreens';
import { moveToTop } from '@/utils/scroll';
import { LateralButton, LateralButtonEnum } from '@/widgets/lateralButtons/buttons';
import type { ReactElement } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { BiRefresh } from 'react-icons/bi';
import { BsBookmarkCheckFill } from 'react-icons/bs';

interface ILateralButtonsProps {
  readonly updateScreen: (newScreen: ScreenEnum) => void;
  readonly generateRandomPlaylist: () => void;
}

export const LateralButtons = ({ updateScreen, generateRandomPlaylist }: ILateralButtonsProps): ReactElement => {
  return (
    <section>
      <LateralButton
        action={(): void => moveToTop()}
        title="Ir para cima"
        bottomPosition="bottom-[10rem]"
        variant={LateralButtonEnum.Dark}
        icon={<AiOutlineArrowUp className="text-2xl" />}
      />

      <LateralButton
        action={(): void => {
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
          updateScreen(ScreenEnum.home);
          generateRandomPlaylist();
        }}
        title="gerar nova playlist"
        bottomPosition="bottom-[2rem]"
        variant={LateralButtonEnum.Blue}
        icon={<BiRefresh className="text-2xl" />}
      />
    </section>
  );
};
