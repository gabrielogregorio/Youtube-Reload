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

export interface IMusic {
  year: number;
  artist: string;
  id: string;
  title: string;
  durationInSeconds: number;
  category: CategoryEnum;
  minuteToSkipIntroduction?: number;

  viewsAsString: string;
  views: number;

  commentsAsString: string;
  comments: number;

  likesAsString: string;
  likes: number;

  approval: number;
  approvalComments: number;

  searchStringNormalized: string;
}

interface ITransformedType extends IMusic {
  img: string;
  url: string;
}

export interface IMusicWithTransformation extends ITransformedType {}
