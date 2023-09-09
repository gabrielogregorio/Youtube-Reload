/* eslint-disable max-lines */
// resolve this
import { useState, useEffect } from 'react';
import { LateralButtons } from '@/widgets/lateralButtons';
import { useMusicApplyFilters } from '@/hooks/useMusicApplyFilters';
import { Range } from '@/base/range';
import { FaDivide, FaPercent } from 'react-icons/fa';
import { BiCommentDetail, BiLike, BiReset } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';
import { InputSearch } from '@/base/inputSearch';
import { Cards } from '@/widgets/cards';
import { LabelRange } from '@/base/range/labelRange';
import type { IFiltersFields } from '@/hooks/useFilters';
import { useFilters } from '@/hooks/useFilters';
import { dataCommentLikeViews, dataPercentApproval, dataPercentCommentsLikes, dataPercentYear } from '@/data/filters';
import { BsCalendarDay } from 'react-icons/bs';

const INITIAL_LIMIT_SHOW_ITEMS = 12;
export const AllPage = () => {
  const [limitItems, setLimitItems] = useState<number>(INITIAL_LIMIT_SHOW_ITEMS);
  const {
    resetValues,
    viewsStart,
    viewsEnd,
    commentsStart,
    commentsEnd,
    likesStart,
    likesEnd,
    percentStart,
    percentEnd,
    approvalStart,
    approvalEnd,
    dateYearStart,
    dateYearEnd,
    control,
    reset,
    formTextSearch,
  } = useFilters();

  const { filtered, applyFilters, data } = useMusicApplyFilters({
    random: false,
    offset: 0,
    limit: limitItems,
    onlyLikes: false,
    ignoreLikes: false,
    ignoreUnLikes: false,
    onlyUnLikes: false,
    textSearch: formTextSearch,
    period: {
      apply: true,
      start: dateYearStart,
      end: dateYearEnd,
    },
    likes: {
      apply: true,
      start: likesStart,
      end: likesEnd,
    },
    comments: {
      apply: true,
      start: commentsStart,
      end: commentsEnd,
    },
    views: {
      apply: true,
      start: viewsStart,
      end: viewsEnd,
    },
    percent: {
      apply: true,
      start: percentStart,
      end: percentEnd,
    },
    approvalComments: {
      apply: true,
      start: approvalStart,
      end: approvalEnd,
    },
  });

  useEffect(() => {
    applyFilters();
  }, [
    data?.length,
    formTextSearch,
    resetValues,
    viewsStart,
    viewsEnd,
    commentsStart,
    commentsEnd,
    likesStart,
    likesEnd,
    percentStart,
    percentEnd,
    approvalStart,
    approvalEnd,
    dateYearStart,
    dateYearEnd,
    limitItems,
  ]);

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

      <LateralButtons generateRandomPlaylist={applyFilters} />
    </div>
  );
};