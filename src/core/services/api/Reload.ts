import type { IMusic } from '@/contracts/musics';
import { dataMusic } from '@/data/data.reload';

export class ApiReload {
  public static async search(url: string, params: unknown): Promise<IMusic[]> {
    // eslint-disable-next-line no-console
    console.log(url, params);
    return dataMusic;
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
