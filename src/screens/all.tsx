import { useState, useEffect } from 'react';
import { FaDivide, FaPercent } from 'react-icons/fa';
import { BiCommentDetail, BiLike, BiReset } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';
import { BsCalendarDay } from 'react-icons/bs';
import { FloatingActionButtons } from '@/features/FloatingActionButtons';
import { Range } from '@/forms/range';
import { Cards } from '@/modules/musicCards/cards';
import { IFiltersFields, useFilters } from '@/modules/musicCards/hooks/useFilters';
import { useMusicApplyFilters } from '@/modules/musicCards/hooks/useMusicApplyFilters';
import {
  dataCommentLikeViews,
  dataPercentApproval,
  dataPercentCommentsLikes,
  dataPercentYear,
} from '@/modules/musicCards/data/filters';
import { LabelRange } from '@/forms/range/labelRange';
import { InputSearch } from '@/forms/inputSearch';

const INITIAL_LIMIT_SHOW_ITEMS = 12;

export const AllPage = () => {
  const [limitItems, setLimitItems] = useState(INITIAL_LIMIT_SHOW_ITEMS);
  const { resetValues, percentStart, percentEnd, filterApplied, control, reset, formTextSearch } = useFilters();

  const { filtered, applyFilters, musics } = useMusicApplyFilters({
    limit: limitItems,
    textSearch: formTextSearch,
    period: {
      apply: true,
      start: filterApplied.dateYearStart,
      end: filterApplied.dateYearEnd,
    },
    likes: {
      apply: true,
      start: filterApplied.likesStart,
      end: filterApplied.likesEnd,
    },
    comments: {
      apply: true,
      start: filterApplied.commentsStart,
      end: filterApplied.commentsEnd,
    },
    views: {
      apply: true,
      start: filterApplied.viewsStart,
      end: filterApplied.viewsEnd,
    },
    percent: {
      apply: true,
      start: percentStart,
      end: percentEnd,
    },
    approvalComments: {
      apply: true,
      start: filterApplied.approvalStart,
      end: filterApplied.approvalEnd,
    },
  });

  useEffect(() => {
    applyFilters();
  }, [musics?.length, formTextSearch, resetValues, filterApplied, percentStart, percentEnd, limitItems]);

  const handleReset = () => {
    reset(resetValues);
  };

  return (
    <div>
      <div className="bg-dark border border-dark-dark rounded-md shadow-md flex flex-col items-center justify-center py-8 mt-8">
        <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-4">
          <Range<IFiltersFields>
            data={dataCommentLikeViews}
            control={control}
            name="views"
            label={<LabelRange icon={<AiOutlineEye className="text-[0.7rem] mr-2" />} text="Views" />}
          />

          <Range<IFiltersFields>
            data={dataCommentLikeViews}
            control={control}
            name="comments"
            label={<LabelRange icon={<BiCommentDetail className="text-[0.7rem] mr-2" />} text="Comments" />}
          />

          <Range<IFiltersFields>
            data={dataCommentLikeViews}
            control={control}
            name="likes"
            label={<LabelRange icon={<BiLike className="text-[0.7rem] mr-2" />} text="Likes" />}
          />

          <Range<IFiltersFields>
            data={dataPercentApproval}
            control={control}
            name="percent"
            label={<LabelRange icon={<FaPercent className="text-[0.7rem] mr-2" />} text="percent view like comment" />}
          />

          <Range<IFiltersFields>
            data={dataPercentCommentsLikes}
            control={control}
            name="approval"
            label={<LabelRange icon={<FaDivide className="text-[0.7rem] mr-2" />} text="percent like comment" />}
          />
        </div>

        <div className="flex gap-4 mb-4 mt-4">
          <Range<IFiltersFields>
            data={dataPercentYear}
            control={control}
            name="year"
            label={<LabelRange icon={<BsCalendarDay className="text-[0.7rem] mr-2" />} text="year period" />}
          />
        </div>

        <div className="mb-4">
          <InputSearch<IFiltersFields>
            label="Pesquise nome, autor, ano"
            control={control}
            name="textSearch"
            placeholder="ding dong"
          />
        </div>

        <button
          type="button"
          className="bg-red px-3 py-2 text-white text-[0.7rem] flex items-center justify-center rounded-md hover:scale-105 transition-all duration-150 select-none"
          onClick={() => handleReset()}>
          <span className="mr-2">reset</span>
          <BiReset className="text-white text-[1rem]" />
        </button>
      </div>

      <section className="flex flex-col items-center justify-center mt-6">
        <div
          className="px-4 py-3 shadow-md rounded-md bg-dark border-dark-dark hover:bg-dark-dark border text-md hover:scale-105 transition-all duration-150 cursor-pointer"
          role="alert">
          É exibido no máximo {limitItems} items a fim de facilitar o processamento
        </div>

        <div className="mt-2">
          <label htmlFor="limit">
            <input
              type="number"
              onChange={(event): void => {
                setLimitItems(Number(event.target.value));
              }}
              value={limitItems}
              name="limit"
              id="limit"
              className="bg-transparent border-2 border-blue rounded-md focus:outline-none focus:border-red"
            />
          </label>
        </div>
      </section>

      <Cards cards={filtered} showExtra />

      <FloatingActionButtons generateRandomPlaylist={applyFilters} />
    </div>
  );
};
