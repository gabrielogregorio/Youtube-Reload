export enum StorageAccessNameEnum {
  'Reactions' = 'reactions',
  'Profile' = 'profile',
  'Notify' = 'notify',
}

export class StorageService {
  public static setItem(key: StorageAccessNameEnum, value: string): void {
    localStorage.setItem(key, value);
  }

  public static getItem(key: StorageAccessNameEnum): string | undefined {
    return localStorage.getItem(key) || undefined;
  }

  public static removeItem(key: StorageAccessNameEnum): void {
    localStorage.removeItem(key);
  }

  public static clear(): void {
    localStorage.clear();
  }

  public static getItemAndParse<T = unknown>(key: string): T | undefined {
    try {
      const item: string | undefined = localStorage.getItem(key) || undefined;

      if (item === undefined) {
        return undefined;
      }
      return JSON.parse(item) as T;
    } catch (error: unknown) {
      return undefined;
    }
  }
}
