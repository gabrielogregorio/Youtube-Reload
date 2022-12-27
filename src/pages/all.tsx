/* eslint-disable max-lines */
/* eslint-disable max-lines-per-function */

import type { ReactElement } from 'react';
import { useEffect } from 'react';
import { ScreenEnum } from '@/contracts/homeScreens';
import { TemplateDefault } from '@/templates/default';
import { Header } from '@/layouts/header';
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

const LIMIT_SHOW_ITEMS: number = 12;
export const AllPage = (): ReactElement => {
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
    limit: LIMIT_SHOW_ITEMS,
    onlyLikes: false,
    ignoreLikes: false,
    ignoreUnlikes: false,
    onlyUnlikes: false,
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
  ]);

  const handleReset = (): void => {
    reset(resetValues);
  };

  return (
    <TemplateDefault activeScreen={ScreenEnum.all}>
      <>
        <Header />

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
              label={
                <LabelRange icon={<FaPercent className="text-[0.7rem] mr-2" />} text="percent view like comment" />
              }
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
            onClick={(): void => handleReset()}>
            <span className="mr-2">reset</span>
            <BiReset className="text-white text-[1rem]" />
          </button>
        </div>

        <section className="flex items-center justify-center mt-6">
          <div
            className="px-4 py-3 shadow-md rounded-md bg-dark border-dark-dark hover:bg-dark-dark border text-md hover:scale-105 transition-all duration-150 cursor-pointer"
            role="alert">
            É exibido no máximo {LIMIT_SHOW_ITEMS} items a fim de facilitar o processamento
          </div>
        </section>

        <Cards cards={filtered} showExtra />

        <LateralButtons generateRandomPlaylist={applyFilters} />
      </>
    </TemplateDefault>
  );
};
