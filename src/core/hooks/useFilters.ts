import type { IDataViewType } from '@/mocks/filters';
import { dataCommentLikeViews, dataPercentApproval, dataPercentCommentsLikes, dataPercentYear } from '@/mocks/filters';
import { parseFunction } from '@/utils/parseFunction';
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
    max: 12,
  },
  comments: {
    min: 0,
    max: 12,
  },
  likes: {
    min: 0,
    max: 12,
  },
  percent: {
    min: 0,
    max: 11,
  },
  approval: {
    min: 0,
    max: 11,
  },
  year: {
    min: 0,
    max: 17,
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

  const formViews: IMinMaxType = watch('views');
  const formComments: IMinMaxType = watch('comments');
  const formLikes: IMinMaxType = watch('likes');
  const formPercents: IMinMaxType = watch('percent');
  const formApproval: IMinMaxType = watch('approval');
  const formYear: IMinMaxType = watch('year');
  const formTextSearch: string = watch('textSearch');

  const viewsStart: number = findValueReturnLabel(dataCommentLikeViews, formViews.min);
  const viewsEnd: number = findValueReturnLabel(dataCommentLikeViews, formViews.max);

  const commentsStart: number = findValueReturnLabel(dataCommentLikeViews, formComments.min);
  const commentsEnd: number = findValueReturnLabel(dataCommentLikeViews, formComments.max);

  const likesStart: number = findValueReturnLabel(dataCommentLikeViews, formLikes.min);
  const likesEnd: number = findValueReturnLabel(dataCommentLikeViews, formLikes.max);

  const percentStart: number = findValueReturnLabel(dataPercentApproval, formPercents.min);
  const percentEnd: number = findValueReturnLabel(dataPercentApproval, formPercents.max);

  const approvalStart: number = findValueReturnLabel(dataPercentCommentsLikes, formApproval.min);
  const approvalEnd: number = findValueReturnLabel(dataPercentCommentsLikes, formApproval.max);

  const dateYearStart: number = findValueReturnLabel(dataPercentYear, formYear.min);
  const dateYearEnd: number = findValueReturnLabel(dataPercentYear, formYear.max);

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
