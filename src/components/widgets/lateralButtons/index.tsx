import { ScreenEnum } from '@/contracts/homeScreens';
import { moveToTop } from '@/utils/scroll';
import { LateralButton, LateralButtonEnum } from '@/widgets/lateralButtons/buttons';
import type { ReactElement } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { BiRefresh } from 'react-icons/bi';
import { BsBookmarkCheckFill } from 'react-icons/bs';

import type { NavigateFunction } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

interface ILateralButtonsProps {
  generateRandomPlaylist: () => void;
}

const HEIGHT_IN_PX_TO_IGNORE_HEADER: number = 350;

export const LateralButtons = ({ generateRandomPlaylist }: ILateralButtonsProps): ReactElement => {
  const navigate: NavigateFunction = useNavigate();

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
          navigate(ScreenEnum.likes);
        }}
        title="ir para favoritos"
        bottomPosition="bottom-[6rem]"
        variant={LateralButtonEnum.Red}
        icon={<BsBookmarkCheckFill className="text-2xl" />}
      />

      <LateralButton
        action={(): void => {
          navigate(ScreenEnum.home);
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
