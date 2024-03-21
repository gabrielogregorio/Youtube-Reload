import { useStatus } from '@/hooks/useStatus';
import { useOnMount } from '@/modules/musicCards/hooks/useOnMount';
import { MusicFromApiMapper } from '@/modules/musicCards/mappers/get/fromApi';
import { FetchReactionsService } from '@/modules/musicCards/services/FetchMusicService';

export const useFetchAllMusics = () => {
  const { isLoading, error, setError, data, setData, reset, setIsLoading } = useStatus<MusicFromApiMapper[]>();

  useOnMount(() => {
    reset();
    setIsLoading(true);

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
  });

  return {
    isLoading,
    error,
    musics: data,
  };
};
