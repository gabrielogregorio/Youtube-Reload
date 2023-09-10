import { UserService } from '@/services/UserService';
import { LogService } from '@/services/log/LogService';
import { useEffect } from 'react';

export const useAuthConfigure = () => {
  useEffect(() => {
    const userId = UserService.getUserId() || UserService.createUser();

    LogService.setUser({ userId });
  }, []);
};
