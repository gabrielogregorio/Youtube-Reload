import type { IMusicApi } from '@/mappers/music/fromApi';
import { MusicFromApiMapper } from '@/mappers/music/fromApi';
import type { IMusicToApiMapper } from '@/mappers/music/toApi';
import { MusicToApiMapper } from '@/mappers/music/toApi';

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
