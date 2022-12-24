import type { IReactions } from '@/services/MusicService';
import { MusicService, ReactionEnum } from '@/services/MusicService';
import { useState } from 'react';

interface IUseReactionsResponse {
  onlyLikeMusic: string[];
  onlyDislikeMusic: string[];
  updateReactions: (reaction: Readonly<IReactions[]>) => void;
}

export const useReactions = (): IUseReactionsResponse => {
  const [reactions, setReactions] = useState<Readonly<IReactions[]>>(MusicService.getReactions());

  const onlyLikeMusic: string[] = [];
  const onlyDislikeMusic: string[] = [];

  reactions.forEach((reaction: Readonly<IReactions>) => {
    if (reaction.reaction === ReactionEnum.like) {
      onlyLikeMusic.push(reaction.id);
    } else if (reaction.reaction === ReactionEnum.unlike) {
      onlyDislikeMusic.push(reaction.id);
    }
  });

  return {
    onlyLikeMusic,
    onlyDislikeMusic,
    updateReactions: (reaction: Readonly<IReactions[]>): void => setReactions(reaction),
  };
};
