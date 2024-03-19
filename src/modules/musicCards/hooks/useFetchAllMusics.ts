import { MusicFromApiMapper } from '@/modules/musicCards/mappers/get/fromApi';
import { FetchReactionsService } from '@/modules/musicCards/services/FetchMusicService';
import { useEffect, useState } from 'react';

export const useFetchAllMusics = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [musics, setMusics] = useState<MusicFromApiMapper[] | undefined>(undefined);

  useEffect(() => {
    setIsLoading(false);
    setError(''); // create hook state
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
