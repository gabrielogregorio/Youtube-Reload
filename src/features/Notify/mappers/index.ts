import { INotifyApi, NotifyFromApiMapper } from '@/features/Notify/mappers/fromApi';

export class NotifyMapper {
  public static fromApi(data: INotifyApi[]): NotifyFromApiMapper[] {
    return data.map((item: INotifyApi) => {
      return new NotifyFromApiMapper(item);
    });
  }
}
