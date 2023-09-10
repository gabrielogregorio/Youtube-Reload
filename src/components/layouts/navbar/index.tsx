import { ScreenEnum } from '@/contracts/homeScreens';
import { useCurrentScreen } from '@/hooks/useCurrentScreen';
import { NavbarItem } from '@/layouts/navbar/navbarItem';
import { AiFillDislike, AiFillHome, AiFillLike } from 'react-icons/ai';
import { BsGearFill } from 'react-icons/bs';
import { FaFilter } from 'react-icons/fa';

const navItems = [
  { screen: ScreenEnum.home, text: 'Home', icon: <AiFillHome /> },
  { screen: ScreenEnum.likes, text: 'Likes', icon: <AiFillLike /> },
  { screen: ScreenEnum.unLikes, text: 'UnLikes', icon: <AiFillDislike /> },
  { screen: ScreenEnum.all, text: 'All', icon: <FaFilter /> },
  { screen: ScreenEnum.configs, text: 'Configs', icon: <BsGearFill /> },
];

export const Navbar = () => {
  const { currentScreen } = useCurrentScreen();

  return (
    <nav className="w-full flex items-center justify-center" role="navigation" aria-label="Main Navigation">
      {navItems.map((item) => (
        <NavbarItem
          key={item.screen}
          isActive={currentScreen === item.screen}
          nameScreen={item.screen}
          text={item.text}
          icon={item.icon}
        />
      ))}
    </nav>
  );
};
