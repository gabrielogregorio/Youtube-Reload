export interface IMusic {
  ano: number;
  author: string;
  dislike: false;
  id: string;
  item_id: number;
  like: boolean;
  title: string;
}

interface ITransformedType {
  img: string;
  url: string;
}

export interface IMusicWithTransformation extends ITransformedType {
  ano: number;
  author: string;
  dislike: false;
  id: string;
  item_id: number;
  like: boolean;
  title: string;
}
