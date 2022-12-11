export interface IMusic {
  ano: number;
  author: string;
  id: string;
  title: string;
}

interface ITransformedType {
  img: string;
  url: string;
}

export interface IMusicWithTransformation extends ITransformedType {
  ano: number;
  author: string;
  id: string;
  title: string;
}
