/* eslint-disable max-lines */
/* eslint-disable max-lines-per-function */

import type { ReactElement } from 'react';
import { useEffect } from 'react';
import { ScreenEnum } from '@/contracts/homeScreens';
import { TemplateDefault } from '@/templates/default';
import { Header } from '@/layouts/header';
import { LateralButtons } from '@/widgets/lateralButtons';
import { useMusicApplyFilters } from '@/hooks/useMusicApplyFilters';
import { useForm } from 'react-hook-form';
import { Range } from '@/base/range';
import { parseFunction } from '@/utils/parseFunction';
import { FaDivide, FaPercent } from 'react-icons/fa';
import { BiCommentDetail, BiLike } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';
import { InputSearch } from '@/base/inputSearch';
import { InputYear } from '@/base/inputYear';
import { Cards } from '@/widgets/cards';

interface IDataViewType {
  value: number;
  label: string;
}

const dataViews: IDataViewType[] = [
  { value: 0, label: '0' },
  { value: 1, label: '10k' },
  { value: 2, label: '50k' },
  { value: 3, label: '100k' },
  { value: 4, label: '500k' },
  { value: 5, label: '1M' },
  { value: 6, label: '10M' },
  { value: 7, label: '50M' },
  { value: 8, label: '100M' },
  { value: 9, label: '200M' },
  { value: 10, label: '500M' },
  { value: 11, label: '1B' },
  { value: 12, label: '1T' },
];

const dataViewsPercentItems: IDataViewType[] = [
  { value: 0, label: '0' },
  { value: 1, label: '0.2' },
  { value: 2, label: '0.4' },
  { value: 3, label: '0.6' },
  { value: 4, label: '0.8' },
  { value: 5, label: '1' },
  { value: 6, label: '1.2' },
  { value: 7, label: '1.4' },
  { value: 8, label: '2' },
  { value: 9, label: '2.5' },
  { value: 10, label: '3' },
  { value: 11, label: '100' },
];

const dataViewsPercentItemsComments: IDataViewType[] = [
  { value: 0, label: '0' },
  { value: 1, label: '0.5' },
  { value: 2, label: '1' },
  { value: 3, label: '2' },
  { value: 4, label: '4' },
  { value: 5, label: '8' },
  { value: 6, label: '10' },
  { value: 7, label: '15' },
  { value: 8, label: '20' },
  { value: 9, label: '25' },
  { value: 10, label: '30' },
  { value: 11, label: '100' },
];

export interface IFiltersFields {
  viewMinimum: number;
  viewMaximum: number;

  commentsMinimum: number;
  commentsMaximum: number;

  likesMinimum: number;
  likesMaximum: number;

  percentMinimum: number;
  percentMaximum: number;

  approvalCommentsMinimum: number;
  approvalCommentsMaximum: number;

  textSearch: string;

  showViews: boolean;
  showLikes: boolean;
  showComments: boolean;
  showYearRelease: boolean;

  startYear: number;
  endYear: number;
}

const resetValues: Partial<IFiltersFields> = {
  viewMinimum: 0,
  viewMaximum: 12,

  commentsMinimum: 0,
  commentsMaximum: 12,

  likesMinimum: 0,
  likesMaximum: 12,

  percentMinimum: 0,
  percentMaximum: 11,

  approvalCommentsMinimum: 0,
  approvalCommentsMaximum: 11,

  startYear: 1800,
  endYear: 2020,

  textSearch: '',
};

export const AllPage = (): ReactElement => {
  const { control, watch, reset } = useForm<IFiltersFields>({
    mode: 'onBlur',
    reValidateMode: 'onSubmit',
    defaultValues: resetValues,
  });

  const formViewMinimum: number = Number(watch('viewMinimum'));
  const formViewMaximum: number = Number(watch('viewMaximum'));
  const formCommentsMinimum: number = Number(watch('commentsMinimum'));
  const formCommentsMaximum: number = Number(watch('commentsMaximum'));
  const formLikesMinimum: number = Number(watch('likesMinimum'));
  const formLikesMaximum: number = Number(watch('likesMaximum'));

  const formPercentMinimum: number = Number(watch('percentMinimum'));
  const formPercentMaximum: number = Number(watch('percentMaximum'));

  const formApprovalCommentsMinimum: number = Number(watch('approvalCommentsMinimum'));
  const formApprovalCommentsMaximum: number = Number(watch('approvalCommentsMaximum'));

  const formTextSearch: string = watch('textSearch');

  const formStartYear: number = Number(watch('startYear'));
  const formEndYear: number = Number(watch('endYear'));

  const findDataAndReturnSelected = (idSelected: number): string => {
    return dataViews.find((item: IDataViewType) => item.value === idSelected)?.label || '';
  };

  const viewsStart: number = parseFunction(findDataAndReturnSelected(formViewMinimum)) || 0;
  const viewsEnd: number = parseFunction(findDataAndReturnSelected(formViewMaximum)) || 0;

  const commentsStart: number = parseFunction(findDataAndReturnSelected(formCommentsMinimum)) || 0;
  const commentsEnd: number = parseFunction(findDataAndReturnSelected(formCommentsMaximum)) || 0;

  const likesStart: number = parseFunction(findDataAndReturnSelected(formLikesMinimum)) || 0;
  const likesEnd: number = parseFunction(findDataAndReturnSelected(formLikesMaximum)) || 0;

  const findDataAndReturnSelectedPercent = (idSelected: number): string => {
    return dataViewsPercentItems.find((item: IDataViewType) => item.value === idSelected)?.label || '';
  };
  const percentStart: number = parseFunction(findDataAndReturnSelectedPercent(formPercentMinimum)) || 0;
  const percentEnd: number = parseFunction(findDataAndReturnSelectedPercent(formPercentMaximum)) || 0;

  const findDataAndReturnSelectedPercentComments = (idSelected: number): string => {
    return dataViewsPercentItemsComments.find((item: IDataViewType) => item.value === idSelected)?.label || '';
  };

  const approvalCommentsStart: number =
    parseFunction(findDataAndReturnSelectedPercentComments(formApprovalCommentsMinimum)) || 0;
  const approvalCommentsEnd: number =
    parseFunction(findDataAndReturnSelectedPercentComments(formApprovalCommentsMaximum)) || 0;

  const { filtered, applyFilters, data } = useMusicApplyFilters({
    random: false,
    offset: 0,
    limit: 500,
    onlyLikes: false,
    ignoreLikes: false,
    ignoreUnlikes: false,
    onlyUnlikes: false,
    textSearch: formTextSearch,
    period: {
      apply: true,
      startYear: formStartYear,
      endYear: formEndYear,
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
      start: approvalCommentsStart,
      end: approvalCommentsEnd,
    },
  });

  const handleReset = (): void => {
    reset(resetValues);
  };

  useEffect(() => {
    applyFilters();
  }, [
    data?.length,
    likesStart,
    likesEnd,
    commentsStart,
    commentsEnd,
    viewsStart,
    viewsEnd,
    percentStart,
    percentEnd,
    formApprovalCommentsMinimum,
    formApprovalCommentsMaximum,
    formTextSearch,
    formStartYear,
    formEndYear,
  ]);

  return (
    <TemplateDefault>
      <>
        <Header activeScreen={ScreenEnum.all} />

        <div className="bg-dark-dark flex flex-col items-center justify-center">
          <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-16 py-8">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-md flex items-center">
                Views
                <AiOutlineEye className="text-[1rem] ml-3" />
              </h2>
              <Range<IFiltersFields> data={dataViews} control={control} name="viewMinimum" label="Minimo" />
              <Range<IFiltersFields> data={dataViews} control={control} name="viewMaximum" label="Maximo" />
            </div>

            <div className="flex flex-col items-center justify-center">
              <h2 className="text-md flex items-center">
                Comments
                <BiCommentDetail className="text-[1rem] ml-3" />
              </h2>
              <Range<IFiltersFields> data={dataViews} control={control} name="commentsMinimum" label="Minimo" />
              <Range<IFiltersFields> data={dataViews} control={control} name="commentsMaximum" label="Maximo" />
            </div>

            <div className="flex flex-col items-center justify-center">
              <h2 className="text-md flex items-center">
                Likes
                <BiLike className="text-[1rem] ml-3" />
              </h2>
              <Range<IFiltersFields> data={dataViews} control={control} name="likesMinimum" label="Minimo" />
              <Range<IFiltersFields> data={dataViews} control={control} name="likesMaximum" label="Maximo" />
            </div>

            <div className="flex flex-col items-center justify-center">
              <h2 className="text-md flex items-center">
                percent view like comment
                <FaPercent className="text-[1rem] ml-3" />
              </h2>
              <Range<IFiltersFields>
                data={dataViewsPercentItems}
                control={control}
                name="percentMinimum"
                label="Minimo"
              />
              <Range<IFiltersFields>
                data={dataViewsPercentItems}
                control={control}
                name="percentMaximum"
                label="Maximo"
              />
            </div>

            <div className="flex flex-col items-center justify-center">
              <h2 className="text-md flex items-center">
                percent like comment
                <FaDivide className="text-[1rem] ml-3" />
              </h2>
              <Range<IFiltersFields>
                data={dataViewsPercentItemsComments}
                control={control}
                name="approvalCommentsMinimum"
                label="Minimo"
              />
              <Range<IFiltersFields>
                data={dataViewsPercentItemsComments}
                control={control}
                name="approvalCommentsMaximum"
                label="Maximo"
              />
            </div>
          </div>
          <div className="flex gap-4 mb-8">
            <InputYear<IFiltersFields> label="Ano de início" control={control} name="startYear" placeholder="1980" />
            <InputYear<IFiltersFields> label="Ano de fim" control={control} name="endYear" placeholder="1985" />
          </div>

          <div className="mb-8">
            <InputSearch<IFiltersFields>
              label="Pesquise nome, autor, ano"
              control={control}
              name="textSearch"
              placeholder="ding dong"
            />
          </div>

          <button type="button" className="bg-red px-3 py-2.5 text-white" onClick={(): void => handleReset()}>
            RESET
          </button>
        </div>

        <Cards cards={filtered} showExtra />

        <LateralButtons generateRandomPlaylist={applyFilters} />
      </>
    </TemplateDefault>
  );
};
