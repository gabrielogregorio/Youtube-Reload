import { StorageAccessNameEnum, StorageService } from '@/services/StorageService';
import { LogService } from '@/services/log/LogService';
import { useEffect } from 'react';

export const useAuth = () => {
  useEffect(() => {
    const userId = StorageService.getItem(StorageAccessNameEnum.UserId);
    if (userId) {
      LogService.setUser({ userId });
      return;
    }

    const newUserId = new Date().getTime().toString();
    StorageService.setItem(StorageAccessNameEnum.UserId, newUserId);

    LogService.setUser({ userId: newUserId });
  }, []);
};
