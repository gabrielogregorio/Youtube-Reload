const profileStorage: string = 'notify';

export class NotifyService {
  private static updateNotifyInLocalStorage(emoji: number[]): number[] {
    localStorage.setItem(profileStorage, JSON.stringify(emoji));

    return emoji;
  }

  public static getOrInitialize(): number[] {
    const itemReturned: string | undefined = localStorage.getItem(profileStorage) || undefined;
    try {
      return JSON.parse(itemReturned || '[]') as number[];
    } catch (error: unknown) {
      //
    }

    const generateEmoji: number[] = [];
    this.updateNotifyInLocalStorage(generateEmoji);

    return generateEmoji;
  }

  public static updateNotify(idView: number[]): number[] {
    const items: number[] = this.getOrInitialize();

    return this.updateNotifyInLocalStorage([...new Set([...items, ...idView])]);
  }
}
