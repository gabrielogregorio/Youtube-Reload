import { useOnMount } from '@/modules/musicCards/hooks/useOnMount';
import { UserService } from '@/services/UserService';
import { LogService } from '@/services/log/LogService';

export const useAuthConfigure = () => {
  useOnMount(() => {
    const userId = UserService.getUserId() || UserService.createUser();

    LogService.setUser({ userId });
  });
};
