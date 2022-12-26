import { useGetSpecialDays } from '@/hooks/useGetSpecialDays';
import type { ReactElement } from 'react';
import { MdOutlineNavigateNext } from 'react-icons/md';

export const Logo = (): ReactElement => {
  const { specialDays, quantitySpecialDays, nextSpecialDay, prevSpecialDay } = useGetSpecialDays();
  const showNavigateButtons: boolean = quantitySpecialDays > 1;
  return (
    <div>
      <div className="w-full flex items-center justify-center">
        <h1
          title="logo do youtube reload"
          className="py-[25px] px-[2%] text-center text-red text-[1.5rem] transition-all duration-150 hover:scale-110 cursor-grab font-extrabold select-none">
          Youtube{` `}
          <span className="text-blue-dark text-[1.5rem] font-extrabold font-cursive">
            Reload
            {specialDays?.emoji2 ? (
              <span className="ml-2 animate-fadeIn">{specialDays.emoji2}</span>
            ) : (
              <span>{` `}</span>
            )}
          </span>
        </h1>
      </div>

      {specialDays ? (
        <div className="flex items-center justify-center ">
          <div className="max-w-md w-full">
            <div
              className="text-sm flex border border-dark-dark shadow-md rounded-md w-full hover:scale-105 transition-all duration-150 min-h-[6rem] animate-fadeIn"
              title="Data comemorativa">
              {showNavigateButtons ? (
                <button
                  type="button"
                  onClick={(): void => prevSpecialDay()}
                  className="flex items-center justify-center cursor-pointer hover:bg-dark-dark px-2 hover:px-8 transition-all duration-150 ">
                  <MdOutlineNavigateNext className=" text-2xl rotate-180" />
                </button>
              ) : undefined}

              <div className="flex-1 flex-col md:flex-row flex items-center w-full mx-2 px-3 py-3 cursor-pointer">
                <div className="text-2xl select-none">{specialDays.emoji1}</div>

                <div className="flex-1 flex flex-col justify-center ml-3">
                  <div className="select-none text-sm font-bold">{specialDays.title}</div>
                  {specialDays.description ? (
                    <div className="select-none text-sm">{specialDays.description}</div>
                  ) : undefined}
                </div>
              </div>
              {showNavigateButtons ? (
                <button
                  type="button"
                  onClick={(): void => nextSpecialDay()}
                  className="flex items-center justify-center cursor-pointer hover:bg-dark-dark px-2 hover:px-8 transition-all duration-150 ">
                  <MdOutlineNavigateNext className=" text-2xl" />
                </button>
              ) : undefined}
            </div>
          </div>
        </div>
      ) : undefined}
    </div>
  );
};
