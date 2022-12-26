/* eslint-disable no-console */
import type { IMusicApi } from '@/contracts/musics';
import type { INotifyApi } from '@/contracts/notify';
import { dataMusic } from '@/data/data.reload';
import { mockNotify } from '@/data/notify';

export class ApiReload {
  public static async search(url: string, params: unknown): Promise<IMusicApi[]> {
    console.log(url, params);
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
