import { StorageAccessNameEnum, StorageService } from '@/services/StorageService';
import { LogService } from '@/services/log/LogService';
import { useEffect } from 'react';

export const useAuth = (): void => {
  useEffect(() => {
    const userId = StorageService.getItem(StorageAccessNameEnum.UserId);

    const payloadUserId = userId ? { userId } : { userId: new Date().getTime().toString() };

    LogService.setUser(payloadUserId);
  }, []);
};
