import { useGetSpecialDays } from '@/features/DailyHighlightCarousel/hooks/useGetSpecialDays';
import { MdOutlineNavigateNext } from 'react-icons/md';

export const DailyHighlightCarousel = () => {
  const { specialDays, quantitySpecialDays, nextSpecialDay, prevSpecialDay } = useGetSpecialDays();
  const showNavigateButtons = quantitySpecialDays > 1;

  return (
    <div>
      {specialDays ? (
        <div className="flex items-center justify-center ">
          <div className="max-w-md w-full">
            <div
              className="text-sm flex border border-dark-dark shadow-md rounded-md w-full hover:scale-105 transition-all duration-150 min-h-[6rem] animate-fadeIn"
              title="Data comemorativa">
              {showNavigateButtons ? (
                <button
                  type="button"
                  aria-label="Ver evento anterior"
                  onClick={() => prevSpecialDay()}
                  className="flex items-center justify-center cursor-pointer hover:bg-dark-dark px-2 transition-all duration-150 ">
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
                  aria-label="Ver proximo evento"
                  onClick={() => nextSpecialDay()}
                  className="flex items-center justify-center cursor-pointer hover:bg-dark-dark px-2 transition-all duration-150 ">
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
