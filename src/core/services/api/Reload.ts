/* eslint-disable no-console */
import { dataMusic } from '@/data/data.reload';
import { mockNotify } from '@/data/notify';
import type { INotifyApi } from '@/mappers/notify/fromApi';
import type { IMusicApi } from 'src/core/mappers/music/fromApi';

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