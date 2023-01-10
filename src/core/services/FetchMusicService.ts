import { MusicMapper } from '@/mappers/music';
import type { IMusicApi, MusicFromApiMapper } from '@/mappers/music/fromApi';
import { ApiReload } from '@/services/api/Reload';

export class FetchReactionsService {
  public static async fetch(): Promise<MusicFromApiMapper[]> {
    return ApiReload.search('/musics', MusicMapper.toApi({ id: 123 })).then((res: IMusicApi[]) => {
      return MusicMapper.fromApi(res);
    });
  }
}
