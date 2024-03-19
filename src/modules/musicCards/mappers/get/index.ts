import { IMusicApi, MusicFromApiMapper } from './fromApi';

export class MusicMapper {
  public static fromApi(data: IMusicApi[]): MusicFromApiMapper[] {
    return data.map((item: IMusicApi) => {
      return new MusicFromApiMapper(item);
    });
  }
}
