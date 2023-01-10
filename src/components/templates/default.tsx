/* eslint-disable no-null/no-null */
import type { ScreenEnum } from '@/contracts/homeScreens';
import { useFetchAllNotify } from '@/hooks/useFetchAllNotify';
import { useGetProfile } from '@/hooks/useGetProfile';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { Navbar } from '@/layouts/navbar';
import type { ReactElement, RefObject } from 'react';
import { useEffect, useRef, useState } from 'react';
import { AiFillBell, AiOutlineBell } from 'react-icons/ai';
import type { NotifyFromApiMapper } from '@/mappers/notify/fromApi';

interface ITemplateDefaultProps {
  children: ReactElement;
  activeScreen: ScreenEnum;
}

export const TemplateDefault = ({ children, activeScreen }: ITemplateDefaultProps): ReactElement => {
  const [notifyIsOpen, setNotifyIsOpen] = useState<boolean>(false);
  const { data, startNotify, notify, handleUpdateNotify } = useFetchAllNotify();
  const { emoji, handleUpdateEmoji } = useGetProfile();
  const refComponent: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const { clickedOutside } = useOutsideClick(refComponent);

  useEffect(() => {
    if (clickedOutside) {
      setNotifyIsOpen(false);
    }
  }, [clickedOutside]);

  const handleOpenNotify = (): void => {
    setNotifyIsOpen((prev: boolean) => !prev);
    const listNewItems: number[] =
      data?.map((item: NotifyFromApiMapper) => {
        return item.id || 0;
      }) || [];

    handleUpdateNotify(listNewItems);
  };

  const showIcons: boolean = notify.length !== data?.length;
  const newNotify: number = (data?.length || 0) - notify.length || 0;

  return (
    <div className="relative mt-[120px]" id="base">
      <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-end bg-dark/50 backdrop-blur-sm shadow-md h-14 ">
        <div className="ml-6 hidden md:block" />
        <div className="ml-2 w-14 h-full hidden md:block" />

        <div className="ml-2 w-14 h-full hidden md:block" />

        <Navbar activeScreen={activeScreen} />

        <div className="ml-2 w-14 h-full flex items-center justify-center relative z-50">
          <button
            type="button"
            aria-label="Abrir notificações"
            onClick={(): void => handleOpenNotify()}
            className={`hidden md:flex items-center justify-center h-6 w-6 hover:h-8 hover:w-8 rounded-full text-xl cursor-pointer select-none hover:bg-dark-light transition-all duration-150 relative ${
              notifyIsOpen ? 'bg-dark-light' : ''
            }
            
            `}>
            {notifyIsOpen ? <AiFillBell /> : <AiOutlineBell />}
            {showIcons ? (
              <div className="w-3 h-3 bg-red rounded-full flex items-center justify-center absolute top-0 right-0 text-[0.7rem]">
                {newNotify}
              </div>
            ) : undefined}
          </button>

          {notifyIsOpen ? (
            <div
              className="absolute right-10 top-3 z-50 hidden md:flex flex-col rounded-md h-96 px-3 py-3 w-96 bg-dark-dark shadow-md"
              ref={refComponent}>
              <div className="text-base mb-1 select-none">Notificações</div>
              <div className="border-b border-gray-500" />

              <div className="overflow-y-scroll flex-1 scrollbar-inverse w-full">
                {data?.map((item: NotifyFromApiMapper) => {
                  return (
                    <div className="hover:bg-dark cursor-pointer flex items-center justify-center py-2 px-2 transition-all duration-150 select-none">
                      <div className="h-10 text-2xl flex items-center justify-center aspect-square mr-2">
                        {item.emoji}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm hover:text-blue">{item.title}</div>
                        <div className="text-[0.7rem] text-gray-400">{item.date}</div>
                      </div>

                      {!startNotify.includes(item.id) ? (
                        <div className="flex items-center justify-center ml-2">
                          <div className="p-1 bg-red rounded-full" />
                        </div>
                      ) : undefined}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : undefined}
        </div>

        <div className="ml-2 w-14 h-full flex items-center justify-center">
          <button
            title="Trocar de emoji"
            aria-label="Trocar foto de perfil"
            type="button"
            onClick={(): void => handleUpdateEmoji()}
            className="flex items-center justify-center h-6 w-6 hover:h-8 hover:w-8 rounded-full text-xl cursor-pointer select-none hover:bg-dark-light transition-all duration-150">
            {emoji}
          </button>
        </div>
        <div className="mr-6" />
      </div>
      <main className="">{children}</main>
      <div className="h-48" />
    </div>
  );
};
