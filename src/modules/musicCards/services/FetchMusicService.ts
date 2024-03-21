import { MusicMapper } from '@/modules/musicCards/mappers/get';
import { ApiReload } from '@/modules/musicCards/services/api/Reload';
import { IMusicApi, MusicFromApiMapper } from '@/modules/musicCards/mappers/get/fromApi';

export class FetchReactionsService {
  public static async fetch(): Promise<MusicFromApiMapper[]> {
    return ApiReload.search().then((res: IMusicApi[]) => {
      return MusicMapper.fromApi(res);
    });
  }
}
