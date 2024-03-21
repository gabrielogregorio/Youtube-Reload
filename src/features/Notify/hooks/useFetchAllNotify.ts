import { useState } from 'react';
import { NotifyFromApiMapper } from '@/features/Notify/mappers/fromApi';
import { FetchNotifyService } from '@/features/Notify/services/FetchNotifyService';
import { NotifyService } from '@/features/Notify/services/NotifyService';
import { useOnMount } from '@/modules/musicCards/hooks/useOnMount';

export const useFetchAllNotify = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [notifications, setNotifications] = useState<NotifyFromApiMapper[]>([]);
  const [viewedNotificationIds, setViewedNotificationIds] = useState<number[]>([]);

  useOnMount(() => {
    setIsLoading(false);
    setError(undefined);
    setNotifications([]);

    FetchNotifyService.fetch()
      .then((res: NotifyFromApiMapper[]) => {
        setNotifications(res);
      })
      .catch(() => {
        setError('Error on Load Data');
      })
      .finally(() => {
        setIsLoading(false);
      });
  });

  useOnMount(() => {
    const items = NotifyService.getOrInitialize();
    setViewedNotificationIds(items);
  });

  const updateViewedNotifications = (item: number[]): void => {
    const newNotifies = NotifyService.updateNotify(item);
    setViewedNotificationIds(newNotifies);
  };

  return {
    isLoading,
    error,
    notifications,
    viewedNotificationIds,
    updateViewedNotifications,
  };
};
