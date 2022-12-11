export class StorageService {
  static setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  static getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  static getItemAndParse<T = unknown>(key: string): T | undefined {
    try {
      const item = localStorage.getItem(key);

      if (item === null) {
        throw new Error('item is undefined');
      }
      return JSON.parse(item);
    } catch (error) {
      console.error('error on get and parse item in localstorage', error);
      return undefined;
    }
  }
}
