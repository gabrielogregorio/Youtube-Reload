import { dataMusic } from '@/data/data.reload';
import { IMusicApi } from '@/core/mappers/music/fromApi';
import { mockNotify } from '@/layouts/Notify/data/notify';
import { INotifyApi } from '@/layouts/Notify/mappers/fromApi';

export class ApiReload {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  public static async search(url: string, params: unknown): Promise<IMusicApi[]> {
    return dataMusic;
  }

  public static async searchNotify(): Promise<INotifyApi[]> {
    return mockNotify;
  }

  public static async updateOrCreate(): Promise<undefined> {
    return undefined;
  }

  public static async delete(): Promise<undefined> {
    return undefined;
  }

  public static async fix(): Promise<undefined> {
    return undefined;
  }

  public static async create(): Promise<undefined> {
    return undefined;
  }
}
