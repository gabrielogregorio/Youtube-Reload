import type { ReactElement } from 'react';
// import { useState } from 'react';
// import { AiFillBell, AiOutlineBell } from 'react-icons/ai';

interface ITemplateDefaultProps {
  children: ReactElement;
}

export const TemplateDefault = ({ children }: ITemplateDefaultProps): ReactElement => {
  // const [notifyIsOpen, setNotifyIsOpen] = useState<boolean>(false);

  // const handleOpenNotify = (): void => {
  //   setNotifyIsOpen((prev: boolean) => !prev);
  // };
  return (
    <div className="mt-[60px] relative" id="base">
      {/* <div className="relative w-full flex items-center justify-end">
        <div>
          <button
            type="button"
            onClick={(): void => handleOpenNotify()}
            className={`rounded-full p-1 hover:bg-dark-dark ${notifyIsOpen ? 'bg-dark-dark' : ''}`}>
            {notifyIsOpen ? <AiFillBell /> : <AiOutlineBell />}
          </button>
        </div>
        {notifyIsOpen ? <div className="absolute top-0 right-9 bg-red">aaaaaaaaaaaaaaaaaaaaa</div> : undefined}
      </div> */}
      <main>{children}</main>
      <div className="h-48" />
    </div>
  );
};
