import { MusicGetAllAdapter } from '@/adapters/music/getAll';
import type { IMusic } from '@/contracts/musics';
import { ApiReload } from '@/services/api/Reload';

export class FetchMusicService {
  public static async fetch(): Promise<readonly IMusic[]> {
    return ApiReload.search('/musics', MusicGetAllAdapter.prepare({ id: 13 }))
      .then((res: readonly IMusic[]) => {
        return MusicGetAllAdapter.convert(res);
      })
      .catch((error: unknown) => {
        throw error;
      });
  }
}
