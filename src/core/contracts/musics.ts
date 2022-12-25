import type { CategoryEnum } from '@/data/data.reload';

export interface IMusicApi {
  year: number;
  artist: string;
  id: string;
  title: string;
  durationInSeconds: number;
  category: CategoryEnum;
  views: string;
  minuteToSkipIntroduction?: number;
  comments: string;
  likes: string;
}

export interface IMusicTags {
  views: {
    total: number;
    tag: string;
  };

  comments: {
    total: number;
    tag: string;
  };

  likes: {
    total: number;
    tag: string;
  };
}

export interface IMusic extends IMusicTags {
  year: number;
  artist: string;
  id: string;
  title: string;
  durationInSeconds: number;
  category: CategoryEnum;
  minuteToSkipIntroduction?: number;
  percentViewsLikesComments: number;
  percentLikesComments: number;
  searchStringNormalized: string;
}

interface ITransformedType extends IMusic {
  img: string;
  url: string;
}

export interface IMusicWithTransformation extends ITransformedType {}
