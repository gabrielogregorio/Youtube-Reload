import type { IMusic } from '@/contracts/musics';
import { dataMusic } from '@/data/data.reload';

export class FetchMusicService {
  public static async fetch(): Promise<IMusic[]> {
    return dataMusic;
  }
}
