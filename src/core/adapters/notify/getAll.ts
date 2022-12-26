import type { INotify, INotifyApi } from '@/contracts/notify';
import { DateReload } from '@/utils/date';

export class NotifyGetAllAdapter {
  public static convert(response?: INotifyApi[]): INotify[] {
    const notify: INotify[] = [];

    response?.forEach((item?: INotifyApi) => {
      notify.push({
        id: item?.id || 0,
        title: item?.title || '',
        date: DateReload.convertGmtToTimezoneSaoPauloAndPtBrStyle(item?.date || ''),
        emoji: item?.emoji || '',
      });
    });

    notify.reverse();

    return notify;
  }
}
