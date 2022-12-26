import type { INotify } from '@/contracts/notify';
import { FetchNotifyService } from '@/services/FetchNotifyService';
import { NotifyService } from '@/services/NotifyService';
import { useEffect, useState } from 'react';

interface IUseFetchAllNotifyOutput {
  isLoading: boolean;
  error: string | undefined;
  data: INotify[] | undefined;
  notify: number[];
  startNotify: number[];
  handleUpdateNotify: (item: number[]) => void;
}

export const useFetchAllNotify = (): IUseFetchAllNotifyOutput => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [data, setData] = useState<INotify[] | undefined>(undefined);
  const [notify, setNotify] = useState<number[]>([]);
  const [startNotify, setStartNotify] = useState<number[]>([]);

  useEffect(() => {
    setIsLoading(false);
    setError(undefined);
    setData(undefined);

    FetchNotifyService.fetch()
      .then((res: INotify[]) => {
        setData(res);
      })
      .catch(() => {
        setError('Error on Load Data');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const items: number[] = NotifyService.getOrInitialize();
    setStartNotify(items);
    setNotify(items);
  }, []);

  const handleUpdateNotify = (item: number[]): void => {
    setNotify(NotifyService.updateNotify(item));
  };

  return {
    isLoading,
    error,
    data,
    notify,
    startNotify,
    handleUpdateNotify,
  };
};
