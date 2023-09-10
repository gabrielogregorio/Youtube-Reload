import { MusicFromApiMapper } from '@/mappers/music/fromApi';
import { FetchReactionsService } from '@/services/FetchMusicService';

import { useEffect, useState } from 'react';

export const useFetchAllMusics = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [musics, setMusics] = useState<MusicFromApiMapper[] | undefined>(undefined);

  useEffect(() => {
    setIsLoading(false);
    setError(undefined);
    setMusics(undefined);

    FetchReactionsService.fetch()
      .then((res: MusicFromApiMapper[]) => {
        setMusics(res);
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
    musics,
  };
};
