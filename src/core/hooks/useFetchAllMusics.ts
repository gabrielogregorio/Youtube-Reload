import { MusicFromApiMapper } from '@/mappers/music/fromApi';
import { FetchReactionsService } from '@/services/FetchMusicService';

import { useEffect, useState } from 'react';

interface IUseFetchAllMusicsOutput {
  isLoading: boolean;
  error: string | undefined;
  data: MusicFromApiMapper[] | undefined;
}

export const useFetchAllMusics = (): IUseFetchAllMusicsOutput => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [data, setData] = useState<MusicFromApiMapper[] | undefined>(undefined);

  useEffect(() => {
    setIsLoading(false);
    setError(undefined);
    setData(undefined);

    FetchReactionsService.fetch()
      .then((res: MusicFromApiMapper[]) => {
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
