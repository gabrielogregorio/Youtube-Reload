import { mockNotify } from '@/features/Notify/data/notify';
import { INotifyApi } from '@/features/Notify/mappers/fromApi';
import { dataMusic } from '@/modules/musicCards/data/data.reload';
import { IMusicApi } from '@/modules/musicCards/mappers/get/fromApi';

export class ApiReload {
  public static async search(): Promise<IMusicApi[]> {
    return dataMusic;
  }

  public static async searchNotify(): Promise<INotifyApi[]> {
    return mockNotify;
  }
}
