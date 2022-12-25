import { StorageService, STORAGE_REACTIONS } from '@/services/StorageService';

export enum ReactionEnum {
  'like' = 'like',
  'unlike' = 'unlike',
  'none' = 'none',
}

export interface IReactions {
  id: string;
  reaction: ReactionEnum;
}

export interface IReactionsOptions {
  [key: string]: IReactions;
}

export const initializeAndGetReactions = (): IReactionsOptions => {
  const likes: IReactionsOptions | undefined = StorageService.getItemAndParse<IReactionsOptions>(STORAGE_REACTIONS);

  if (likes) {
    return likes;
  }
  const initializedReactions: IReactionsOptions = {};
  StorageService.setItem(STORAGE_REACTIONS, JSON.stringify(initializedReactions));
  return initializedReactions;
};

export class MusicService {
  public static getReactions(): IReactionsOptions {
    return initializeAndGetReactions();
  }

  public static clearAll(): void {
    localStorage.removeItem(STORAGE_REACTIONS);
    document.location.reload();
  }
}
