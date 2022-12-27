import type { IMusic } from '@/contracts/musics';
import { FetchReactionsService } from '@/services/FetchMusicService';

import { useEffect, useState } from 'react';

interface IUseFetchAllMusicsOutput {
  isLoading: boolean;
  error: string | undefined;
  data: IMusic[] | undefined;
}

export const useFetchAllMusics = (): IUseFetchAllMusicsOutput => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [data, setData] = useState<IMusic[] | undefined>(undefined);

  useEffect(() => {
    setIsLoading(false);
    setError(undefined);
    setData(undefined);

    FetchReactionsService.fetch()
      .then((res: IMusic[]) => {
        setData(res);
      })
      .catch(() => {
        setError('Error on Load Data');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    isLoading,
    error,
    data,
  };
};
