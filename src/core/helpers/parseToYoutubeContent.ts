import { IMusic, IMusicWithTransformation } from '@/interfaces/music';

export const parseToYoutubeContent = (playList: IMusic[]): IMusicWithTransformation[] => {
  return playList.map((play: IMusic) => ({
    ...play,
    img: `https://img.youtube.com/vi/${play.id}/hqdefault.jpg`,
    url: `https://www.youtube.com/watch?v=${play.id}`,
  }));
};
