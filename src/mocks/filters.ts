export interface IDataViewType {
  value: number;
  label: string;
}

export const dataCommentLikeViews: IDataViewType[] = [
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

export const dataPercentApproval: IDataViewType[] = [
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

export const dataPercentCommentsLikes: IDataViewType[] = [
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

export const dataPercentYear: IDataViewType[] = [
  { value: 0, label: '1800' },
  { value: 1, label: '1850' },
  { value: 2, label: '1900' },
  { value: 3, label: '1950' },
  { value: 4, label: '1960' },
  { value: 5, label: '1965' },
  { value: 6, label: '1970' },
  { value: 7, label: '1975' },
  { value: 8, label: '1980' },
  { value: 9, label: '1985' },
  { value: 10, label: '1990' },
  { value: 11, label: '1995' },
  { value: 12, label: '2000' },
  { value: 13, label: '2005' },
  { value: 14, label: '2010' },
  { value: 15, label: '2015' },
  { value: 16, label: '2020' },
  { value: 17, label: '2050' },
];
