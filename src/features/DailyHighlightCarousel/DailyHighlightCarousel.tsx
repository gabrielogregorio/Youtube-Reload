import { useGetDailyHighlights } from '@/features/DailyHighlightCarousel/hooks/useGetDailyHighlights';
import { MdOutlineNavigateNext } from 'react-icons/md';

export const DailyHighlightCarousel = () => {
  const { dailyHighlight, dailyHighlights, nextDailyHighlight, prevDailyHighlight } = useGetDailyHighlights();

  const showNavigationButtons = dailyHighlights.length > 1;

  if (!dailyHighlight) {
    return <div />;
  }

  return (
    <section className="flex items-center justify-center" aria-label="Frase do dia">
      <div className="max-w-md w-full">
        <div
          className="text-sm flex border border-dark-charcoal shadow-md rounded-md w-full hover:scale-105 transition-all duration-150 min-h-[6rem] animate-fadeIn"
          title="Data comemorativa">
          {showNavigationButtons ? (
            <button
              type="button"
              aria-label="Ver evento anterior"
              onClick={() => prevDailyHighlight()}
              className="flex items-center justify-center cursor-pointer hover:bg-dark-charcoal px-2 transition-all duration-150 ">
              <MdOutlineNavigateNext className=" text-2xl rotate-180" />
            </button>
          ) : undefined}

          <div className="flex-1 flex-col md:flex-row flex items-center w-full mx-2 px-3 py-3 cursor-pointer min-h-[130px]">
            <div className="text-2xl select-none">{dailyHighlight.emoji1}</div>

            <div className="flex-1 flex flex-col justify-center ml-3">
              <h2 className="select-none text-sm font-bold">{dailyHighlight.title}</h2>
              {dailyHighlight.description ? <div className="select-none text-sm">{dailyHighlight.description}</div> : undefined}
            </div>
          </div>

          {showNavigationButtons ? (
            <button
              type="button"
              aria-label="Ver proximo evento"
              onClick={() => nextDailyHighlight()}
              className="flex items-center justify-center cursor-pointer hover:bg-dark-charcoal px-2 transition-all duration-150 ">
              <MdOutlineNavigateNext className=" text-2xl" />
            </button>
          ) : undefined}
        </div>
      </div>
    </section>
  );
};
