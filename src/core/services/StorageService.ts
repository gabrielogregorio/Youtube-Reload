export const STORAGE_REACTIONS: string = 'reactions3';

export class StorageService {
  public static setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public static getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  public static getItemAndParse<T = unknown>(key: string): T | undefined {
    try {
      const item: string | undefined = localStorage.getItem(key) || undefined;

      if (item === undefined) {
        throw new Error('item is undefined');
      }
      return JSON.parse(item) as T;
    } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.error('error on get and parse item in localstorage', error);
      return undefined;
    }
  }
}
