import type { IMusic } from '@/contracts/musics';
import { FetchMusicService } from '@/services/FetchMusicService';
import { useEffect, useState } from 'react';

interface IUseFetchAllMusicsOutput {
  isLoading: boolean;
  error: string | undefined;
  data: Readonly<IMusic[]> | undefined;
}

export const useFetchAllMusics = (): IUseFetchAllMusicsOutput => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [data, setData] = useState<Readonly<IMusic[]> | undefined>(undefined);

  useEffect(() => {
    setIsLoading(false);
    setError(undefined);
    setData(undefined);

    FetchMusicService.fetch()
      .then((res: Readonly<IMusic[]>) => {
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
