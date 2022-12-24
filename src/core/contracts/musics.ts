import type { CategoryEnum } from '@/data/data.reload';

export interface IMusic {
  readonly year: number;
  readonly artist: string;
  readonly id: string;
  readonly title: string;
  readonly durationInSeconds: number;
  readonly category: CategoryEnum;
  readonly views: string;
  readonly minuteToSkipIntroduction?: number;
  readonly comments: string;
  readonly likes: string;
}

interface ITransformedType extends IMusic {
  readonly img: string;
  readonly url: string;
}

export interface IMusicWithTransformation extends ITransformedType {}
