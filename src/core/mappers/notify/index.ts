import { NotifyFromApiMapper } from '@/mappers/notify/fromApi';
import type { INotifyApi } from '@/mappers/notify/fromApi';

export class NotifyMapper {
  public static fromApi(data: INotifyApi[]): NotifyFromApiMapper[] {
    return data.map((item: INotifyApi) => {
      return new NotifyFromApiMapper(item);
    });
  }
}
