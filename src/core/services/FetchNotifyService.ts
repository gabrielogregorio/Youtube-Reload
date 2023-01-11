import { ApiReload } from '@/services/api/Reload';
import type { INotifyApi, NotifyFromApiMapper } from '@/mappers/notify/fromApi';
import { NotifyMapper } from '@/mappers/notify';

export class FetchNotifyService {
  public static async fetch(): Promise<NotifyFromApiMapper[]> {
    return ApiReload.searchNotify()
      .then((res: INotifyApi[]) => {
        return NotifyMapper.fromApi(res);
      })
      .catch((error: unknown) => {
        throw error;
      });
  }
}
