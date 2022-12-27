import { StorageAccessNameEnum, StorageService } from '@/services/StorageService';

export class NotifyService {
  private static updateNotifyInStorage(emoji: number[]): number[] {
    StorageService.setItem(StorageAccessNameEnum.Notify, JSON.stringify(emoji));

    return emoji;
  }

  public static getOrInitialize(): number[] {
    const itemReturned: number[] | undefined = StorageService.getItemAndParse<number[]>(StorageAccessNameEnum.Notify);
    if (itemReturned) {
      return itemReturned;
    }

    const generateEmoji: number[] = [];
    this.updateNotifyInStorage(generateEmoji);

    return generateEmoji;
  }

  public static updateNotify(idView: number[]): number[] {
    const items: number[] = this.getOrInitialize();

    return this.updateNotifyInStorage([...new Set([...items, ...idView])]);
  }
}
