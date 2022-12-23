import { CategoryEnum } from 'src/data.reload';

export interface IMusic {
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

interface ITransformedType extends IMusic {
  img: string;
  url: string;
}

export interface IMusicWithTransformation extends ITransformedType {}
