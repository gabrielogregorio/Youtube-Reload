import { ApiReload } from '@/services/api/Reload';
import { NotifyMapper } from '@/features/Notify/mappers';
import { INotifyApi, NotifyFromApiMapper } from '@/features/Notify/mappers/fromApi';

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
