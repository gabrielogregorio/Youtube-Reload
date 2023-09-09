import { useEffect, useState } from 'react';
import { NotifyService } from '@/layouts/Notify/services/NotifyService';
import { FetchNotifyService } from '@/layouts/Notify/services/FetchNotifyService';
import { NotifyFromApiMapper } from '@/layouts/Notify/mappers/fromApi';

export const useFetchAllNotify = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [notifications, setNotifications] = useState<NotifyFromApiMapper[]>([]);
  const [viewedNotificationIds, setViewedNotificationIds] = useState<number[]>([]);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    const items = NotifyService.getOrInitialize();
    setViewedNotificationIds(items);
  }, []);

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
