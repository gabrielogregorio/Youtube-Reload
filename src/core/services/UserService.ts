import { StorageAccessNameEnum, StorageService } from '@/services/StorageService';

export class UserService {
  public static getUserId(): string | undefined {
    return StorageService.getItem(StorageAccessNameEnum.UserId);
  }

  public static createUser(): string {
    const newUserId = new Date().getTime().toString();
    StorageService.setItem(StorageAccessNameEnum.UserId, newUserId);

    return newUserId;
  }
}
