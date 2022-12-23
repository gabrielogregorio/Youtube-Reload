import { StorageService } from '@/services/StorageService';

const STORAGE_REACTIONS: string = 'reactions';

export enum ReactionEnum {
  'like' = 'like',
  'unlike' = 'unlike',
  'none' = 'none',
}

export interface IReactions {
  id: string;
  reaction: ReactionEnum;
}

export const initializeAndGetReactions = (): IReactions[] => {
  const likes: IReactions[] | undefined = StorageService.getItemAndParse<IReactions[]>(STORAGE_REACTIONS);
  const initializedReactions: IReactions[] = [];

  if (likes) {
    return likes;
  }
  StorageService.setItem(STORAGE_REACTIONS, JSON.stringify(initializedReactions));
  return initializedReactions;
};

export class MusicService {
  static getReactions(): IReactions[] {
    return initializeAndGetReactions();
  }

  static sendReactions(idContent: string, reaction: ReactionEnum): void {
    const reactions: IReactions[] = initializeAndGetReactions();
    const reactionToUpdate: IReactions | undefined = reactions.find(
      (reactionLocal: IReactions) => reactionLocal.id === idContent,
    );

    if (reactionToUpdate === undefined) {
      reactions.push({
        id: idContent,
        reaction,
      });
      StorageService.setItem(STORAGE_REACTIONS, JSON.stringify(reactions));
      return;
    }

    const reactIsEqualOldReaction: boolean = reactionToUpdate.reaction === reaction;
    if (reactIsEqualOldReaction) {
      reactionToUpdate.reaction = ReactionEnum.none;
      StorageService.setItem(STORAGE_REACTIONS, JSON.stringify(reactions));
      return;
    }

    reactionToUpdate.reaction = reaction;
    StorageService.setItem(STORAGE_REACTIONS, JSON.stringify(reactions));
  }

  static clearAll(): void {
    localStorage.removeItem(STORAGE_REACTIONS);
    document.location.reload();
  }
}
