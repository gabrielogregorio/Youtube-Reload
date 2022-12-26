import { NotifyGetAllAdapter } from '@/adapters/notify/getAll';
import type { INotify } from '@/contracts/notify';
import { ApiReload } from '@/services/api/Reload';

export class FetchNotifyService {
  public static async fetch(): Promise<INotify[]> {
    return ApiReload.searchNotify()
      .then((res: INotify[]) => {
        return NotifyGetAllAdapter.convert(res);
      })
      .catch((error: unknown) => {
        throw error;
      });
  }
}
