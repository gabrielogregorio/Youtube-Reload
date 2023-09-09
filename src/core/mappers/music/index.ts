import { IMusicApi, MusicFromApiMapper } from '@/mappers/music/fromApi';
import { IMusicToApiMapper, MusicToApiMapper } from '@/mappers/music/toApi';

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
