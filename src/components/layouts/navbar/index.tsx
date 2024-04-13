import { ScreenEnum } from '@/contracts/homeScreens';
import { useCurrentScreen } from '@/hooks/useCurrentScreen';
import { NavbarItem } from '@/layouts/navbar/navbarItem';
import { AiFillDislike, AiFillHome, AiFillLike } from 'react-icons/ai';

const navItems = [
  { screen: ScreenEnum.home, text: 'Início', icon: <AiFillHome /> },
  { screen: ScreenEnum.likes, text: 'Likes', icon: <AiFillLike /> },
  { screen: ScreenEnum.unLikes, text: 'UnLikes', icon: <AiFillDislike /> },
];

export const Navbar = () => {
  const { currentScreen } = useCurrentScreen();

  return (
    <nav className="w-full flex items-center justify-center" aria-label="Menu Principal">
      {navItems.map((item) => (
        <NavbarItem key={item.screen} isActive={currentScreen === item.screen} nameScreen={item.screen} text={item.text} icon={item.icon} />
      ))}
    </nav>
  );
};
