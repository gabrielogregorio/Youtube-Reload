import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/connections/store/useRedux';
import type { IReactionsOptions } from '@/services/MusicService';
import { MusicService, ReactionEnum } from '@/services/MusicService';
import { StorageService } from '@/services/StorageService';
import { saveReaction } from '@/connections/features/reactions/slices';
import { reactionsSelector } from '@/connections/features/reactions/selectors';
import type { AppDispatch } from '@/connections/store';

const STORAGE_REACTIONS: string = 'reactions2';

interface IUseReactions {
  sendReaction: (idContent: string, reaction: ReactionEnum) => void;
  clearReactions: () => void;
  reactions: IReactionsOptions | undefined;
}

export const useReactions = (): IUseReactions => {
  const dispatch: AppDispatch = useAppDispatch();
  const { reactions } = useAppSelector(reactionsSelector);

  const saveInitialState = (reactionsXXX: IReactionsOptions = MusicService.getReactions()): void => {
    dispatch(saveReaction(reactionsXXX));

    StorageService.setItem(STORAGE_REACTIONS, JSON.stringify(reactionsXXX));
  };

  useEffect(() => {
    saveInitialState();
  }, []);

  const sendReaction: (idContent: string, reaction: ReactionEnum) => void = useCallback(
    (idContent: string, reaction: ReactionEnum): void => {
      let newReaction: IReactionsOptions | undefined = reactions;

      if (newReaction === undefined) {
        saveInitialState({
          [idContent]: { id: idContent, reaction },
        });
        return;
      }

      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (newReaction[idContent] === undefined) {
        newReaction = {
          ...newReaction,
          [idContent]: {
            id: idContent,
            reaction,
          },
        };

        saveInitialState(newReaction);
        return;
      }

      const reactIsEqualOldReaction: boolean = newReaction[idContent].reaction === reaction;
      if (reactIsEqualOldReaction) {
        newReaction = {
          ...newReaction,
          [idContent]: {
            ...newReaction[idContent],
            reaction: ReactionEnum.none,
          },
        };

        saveInitialState(newReaction);
      } else {
        newReaction = {
          ...newReaction,
          [idContent]: {
            ...newReaction[idContent],
            reaction,
          },
        };

        saveInitialState(newReaction);
      }
    },
    [dispatch, reactions],
  );

  const clearReactions = (): void => {
    MusicService.clearAll();
  };

  return {
    reactions,
    clearReactions,
    sendReaction,
  };
};
