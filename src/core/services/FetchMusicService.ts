import { MusicGetAllAdapter } from '@/adapters/music/getAll';
import type { IMusic, IMusicApi } from '@/contracts/musics';
import { ApiReload } from '@/services/api/Reload';

export class FetchReactionsService {
  public static async fetch(): Promise<IMusic[]> {
    return ApiReload.search('/musics', MusicGetAllAdapter.prepare({ id: 13 }))
      .then((res: IMusicApi[]) => {
        return MusicGetAllAdapter.convert(res);
      })
      .catch((error: unknown) => {
        throw error;
      });
  }
}
