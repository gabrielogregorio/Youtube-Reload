import { useGetProfile } from '@/hooks/useGetProfile';
import type { ReactElement } from 'react';
// import { useState } from 'react';
// import { AiFillBell, AiOutlineBell } from 'react-icons/ai';

interface ITemplateDefaultProps {
  children: ReactElement;
}

export const TemplateDefault = ({ children }: ITemplateDefaultProps): ReactElement => {
  // const [notifyIsOpen, setNotifyIsOpen] = useState<boolean>(false);
  const { emoji, handleUpdateEmoji } = useGetProfile();
  // const handleOpenNotify = (): void => {
  //   setNotifyIsOpen((prev: boolean) => !prev);
  // };

  return (
    <div className="relative mt-[120px]" id="base">
      <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-end bg-dark/50 backdrop-blur-sm shadow-md h-14 ">
        {/* <div className={`ml-2 w-14 h-full flex items-center justify-center `}>
          <button
            type="button"
            onClick={(): void => handleOpenNotify()}
            className={`flex items-center justify-center h-6 w-6 hover:h-8 hover:w-8 rounded-full text-xl cursor-pointer select-none hover:bg-dark-light transition-all duration-150  ${
              notifyIsOpen ? 'bg-dark-light' : ''
            }`}>
            {notifyIsOpen ? <AiFillBell /> : <AiOutlineBell />}
          </button>
        </div> */}

        <div className="ml-2 w-14 h-full flex items-center justify-center">
          <button
            title="Trocar de emoji"
            type="button"
            onClick={(): void => handleUpdateEmoji()}
            className="flex items-center justify-center h-6 w-6 hover:h-8 hover:w-8 rounded-full text-xl cursor-pointer select-none hover:bg-dark-light transition-all duration-150">
            {emoji}
          </button>
        </div>
        <div className="mr-6" />
        {/* {notifyIsOpen ? <div className="absolute top-0 right-9 bg-red">aaaaaaaaaaaaaaaaaaaaa</div> : undefined} */}
      </div>
      <main className="">{children}</main>
      <div className="h-48" />
    </div>
  );
};
