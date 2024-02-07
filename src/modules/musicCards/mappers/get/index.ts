import { IMusicApi, MusicFromApiMapper } from './fromApi';
import { IMusicToApiMapper, MusicToApiMapper } from './toApi';

export class MusicMapper {
  public static fromApi(data: IMusicApi[]): MusicFromApiMapper[] {
    return data.map((item: IMusicApi) => {
      return new MusicFromApiMapper(item);
    });
  }

  public static toApi(data: IMusicToApiMapper): MusicToApiMapper {
    return new MusicToApiMapper(data);
  }
}
