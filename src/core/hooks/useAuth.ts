import { StorageAccessNameEnum, StorageService } from '@/services/StorageService';
import { LogService } from '@/services/log/LogService';
import { useEffect } from 'react';

export const useAuth = (): void => {
  useEffect(() => {
    const userId = StorageService.getItem(StorageAccessNameEnum.UserId);
    if (userId) {
      LogService.setUser({ userId });
      return;
    }

    const newUserId = new Date().getTime().toString();

    LogService.setUser({ userId: newUserId });
  }, []);
};
