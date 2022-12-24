import type { IReactions } from '@/services/MusicService';
import { MusicService, ReactionEnum } from '@/services/MusicService';
import { useState } from 'react';

interface IUseReactionsResponse {
  onlyLikeMusic: string[];
  onlyDislikeMusic: string[];
  updateReactions: (reaction: IReactions[]) => void;
}

export const useReactions = (): IUseReactionsResponse => {
  const [reactions, setReactions] = useState<IReactions[]>(MusicService.getReactions());

  const onlyLikeMusic: string[] = [];
  const onlyDislikeMusic: string[] = [];

  reactions.forEach((reaction: IReactions) => {
    if (reaction.reaction === ReactionEnum.like) {
      onlyLikeMusic.push(reaction.id);
    } else if (reaction.reaction === ReactionEnum.unlike) {
      onlyDislikeMusic.push(reaction.id);
    }
  });

  return {
    onlyLikeMusic,
    onlyDislikeMusic,
    updateReactions: (reaction: IReactions[]): void => setReactions(reaction),
  };
};
