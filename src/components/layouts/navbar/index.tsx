import { ScreenEnum } from '@/contracts/homeScreens';
import { NavbarItem } from '@/layouts/navbar/navbarItem';
import { AiFillDislike, AiFillHome, AiFillLike } from 'react-icons/ai';
import { BsGearFill } from 'react-icons/bs';
import { FaFilter } from 'react-icons/fa';

interface INavbarProps {
  activeScreen: ScreenEnum;
}

export const Navbar = ({ activeScreen }: INavbarProps) => {
  return (
    <nav className="w-full flex items-center justify-center">
      <NavbarItem
        isActive={activeScreen === ScreenEnum.home}
        nameScreen={ScreenEnum.home}
        text="Home"
        icon={<AiFillHome className="text-[0.9rem]" />}
      />

      <NavbarItem
        isActive={activeScreen === ScreenEnum.likes}
        nameScreen={ScreenEnum.likes}
        text="Likes"
        icon={<AiFillLike className="text-[0.9rem]" />}
      />

      <NavbarItem
        isActive={activeScreen === ScreenEnum.unLikes}
        nameScreen={ScreenEnum.unLikes}
        text="UnLikes"
        icon={<AiFillDislike className="text-[0.9rem]" />}
      />

      <NavbarItem
        isActive={activeScreen === ScreenEnum.all}
        nameScreen={ScreenEnum.all}
        text="All"
        icon={<FaFilter className="text-[0.9rem]" />}
      />

      <NavbarItem
        isActive={activeScreen === ScreenEnum.configs}
        nameScreen={ScreenEnum.configs}
        text="Configs"
        icon={<BsGearFill className="text-[0.9rem]" />}
      />
    </nav>
  );
};
