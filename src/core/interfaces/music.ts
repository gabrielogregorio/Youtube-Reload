import { CategoryEnum } from 'src/data.reload';

export interface IMusic {
  year: number;
  author: string;
  id: string;
  title: string;
  durationInSeconds: number;
  category: CategoryEnum;
  views: string;
  comments: string;
  likes: string;
}

interface ITransformedType {
  img: string;
  url: string;
}

export interface IMusicWithTransformation extends ITransformedType {}
