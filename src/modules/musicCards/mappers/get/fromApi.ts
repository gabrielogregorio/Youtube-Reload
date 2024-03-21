import { CategoryEnum } from '@/modules/musicCards/data/data.reload';

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

export class MusicFromApiMapper {
  public readonly year: number;

  public readonly artist: string;

  public readonly id: string;

  public readonly title: string;

  public readonly durationInSeconds: number;

  public readonly minuteToSkipIntroduction?: number;

  public constructor(item?: IMusicApi) {
    const year: number = Number(item?.year) || 0;
    const artist: string = String(item?.artist || '');
    const title: string = String(item?.title || '');

    this.year = year;
    this.artist = artist;
    this.id = String(item?.id || '');
    this.title = title;
    this.durationInSeconds = Number(item?.durationInSeconds) || 0;
    this.minuteToSkipIntroduction = item?.minuteToSkipIntroduction;
  }
}

export interface IMusicWithTransformation extends MusicFromApiMapper {
  img: string;
  url: string;
}
