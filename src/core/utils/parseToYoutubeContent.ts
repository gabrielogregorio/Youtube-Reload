import { IMusicWithTransformation, MusicFromApiMapper } from '@/mappers/music/fromApi';

export const parseToYoutubeContent = (playList: MusicFromApiMapper[]): IMusicWithTransformation[] => {
  return playList.map((play: MusicFromApiMapper) => ({
    ...play,
    img: `https://img.youtube.com/vi/${play.id}/hqdefault.jpg`,
    url: `https://www.youtube.com/watch?v=${play.id}`,
  }));
};
