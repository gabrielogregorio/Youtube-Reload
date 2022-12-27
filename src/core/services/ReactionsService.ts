import { StorageAccessNameEnum, StorageService } from '@/services/StorageService';

export enum ReactionEnum {
  'like' = 'like',
  'unlike' = 'unlike',
  'none' = 'none',
}

export interface IReactions {
  reaction: ReactionEnum;
}

export interface IReactionsOptions {
  [key: string]: IReactions;
}

export const initializeAndGetReactions = (): IReactionsOptions => {
  const likes: IReactionsOptions | undefined = StorageService.getItemAndParse<IReactionsOptions>(
    StorageAccessNameEnum.Reactions,
  );

  if (likes) {
    return likes;
  }
  const initializedReactions: IReactionsOptions = {};
  StorageService.setItem(StorageAccessNameEnum.Reactions, JSON.stringify(initializedReactions));
  return initializedReactions;
};

export class ReactionsService {
  public static getReactions(): IReactionsOptions {
    return initializeAndGetReactions();
  }

  public static updateReactions(reactions: IReactionsOptions): void {
    StorageService.setItem(StorageAccessNameEnum.Reactions, JSON.stringify(reactions));
  }

  public static clearAll(): void {
    StorageService.removeItem(StorageAccessNameEnum.Reactions);
    document.location.reload();
  }
}
