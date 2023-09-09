import type { IDataViewType } from '@/data/filters';
import { dataCommentLikeViews, dataPercentApproval, dataPercentCommentsLikes, dataPercentYear } from '@/data/filters';
import { LARGE_VALUE, parseFunction } from '@/utils/parseFunction';
import type { Control, UseFormReset } from 'react-hook-form';
import { useForm } from 'react-hook-form';

interface IMinMaxType {
  max: number;
  min: number;
}

const findValueReturnLabel = (data: IDataViewType[], idSelected: number): number => {
  return parseFunction(data.find((item: IDataViewType) => item.value === idSelected)?.label || '') || 0;
};

export interface IFiltersFields {
  views: IMinMaxType;
  comments: IMinMaxType;
  likes: IMinMaxType;
  percent: IMinMaxType;
  approval: IMinMaxType;
  textSearch: string;
  year: IMinMaxType;
}

const resetValues: Partial<IFiltersFields> = {
  views: {
    min: 0,
    max: LARGE_VALUE,
  },
  comments: {
    min: 0,
    max: LARGE_VALUE,
  },
  likes: {
    min: 0,
    max: LARGE_VALUE,
  },
  percent: {
    min: 0,
    max: LARGE_VALUE,
  },
  approval: {
    min: 0,
    max: LARGE_VALUE,
  },
  year: {
    min: 0,
    max: LARGE_VALUE,
  },
  textSearch: '',
};

interface IUseFiltersOutput {
  resetValues: Partial<IFiltersFields>;
  viewsStart: number;
  viewsEnd: number;
  commentsStart: number;
  commentsEnd: number;
  likesStart: number;
  likesEnd: number;
  percentStart: number;
  percentEnd: number;
  approvalStart: number;
  approvalEnd: number;
  dateYearStart: number;
  dateYearEnd: number;
  control: Control<IFiltersFields>;
  reset: UseFormReset<IFiltersFields>;
  formTextSearch: string;
}

export const useFilters = (): IUseFiltersOutput => {
  const { control, watch, reset } = useForm<IFiltersFields>({
    mode: 'onBlur',
    reValidateMode: 'onSubmit',
    defaultValues: resetValues,
  });

  const formViews = watch('views');
  const formComments = watch('comments');
  const formLikes = watch('likes');
  const formPercents = watch('percent');
  const formApproval = watch('approval');
  const formYear = watch('year');
  const formTextSearch = watch('textSearch');

  const viewsStart = findValueReturnLabel(dataCommentLikeViews, formViews.min);
  const viewsEnd = findValueReturnLabel(dataCommentLikeViews, formViews.max);

  const commentsStart = findValueReturnLabel(dataCommentLikeViews, formComments.min);
  const commentsEnd = findValueReturnLabel(dataCommentLikeViews, formComments.max);

  const likesStart = findValueReturnLabel(dataCommentLikeViews, formLikes.min);
  const likesEnd = findValueReturnLabel(dataCommentLikeViews, formLikes.max);

  const percentStart = findValueReturnLabel(dataPercentApproval, formPercents.min);
  const percentEnd = findValueReturnLabel(dataPercentApproval, formPercents.max);

  const approvalStart = findValueReturnLabel(dataPercentCommentsLikes, formApproval.min);
  const approvalEnd = findValueReturnLabel(dataPercentCommentsLikes, formApproval.max);

  const dateYearStart = findValueReturnLabel(dataPercentYear, formYear.min);
  const dateYearEnd = findValueReturnLabel(dataPercentYear, formYear.max);

  return {
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
  };
};