import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/connections/store/useRedux';
import { saveReaction } from '@/connections/features/reactions/slices';
import { reactionsSelector } from '@/connections/features/reactions/selectors';
import type { AppDispatch } from '@/connections/store';
import type { IReactionsOptions } from '@/services/ReactionsService';
import { ReactionsService, ReactionEnum } from '@/services/ReactionsService';

interface IUseReactions {
  sendReaction: (idContent: string, reaction: ReactionEnum) => void;
  clearReactions: () => void;
  reactions: IReactionsOptions | undefined;
}

export const useReactions = (): IUseReactions => {
  const dispatch: AppDispatch = useAppDispatch();
  const { reactions } = useAppSelector(reactionsSelector);

  const saveInitialState = (reactionsLocal: IReactionsOptions = ReactionsService.getReactions()): void => {
    dispatch(saveReaction(reactionsLocal));

    ReactionsService.updateReactions(reactionsLocal);
  };

  useEffect(() => {
    saveInitialState();
  }, []);

  const sendReaction: (idContent: string, reaction: ReactionEnum) => void = useCallback(
    (idContent: string, reaction: ReactionEnum): void => {
      let newReaction: IReactionsOptions | undefined = reactions;

      if (newReaction === undefined) {
        saveInitialState({
          [idContent]: { reaction },
        });
        return;
      }

      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (newReaction[idContent] === undefined) {
        newReaction = {
          ...newReaction,
          [idContent]: {
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

  const clearReactions = () => {
    ReactionsService.clearAll();
  };

  return {
    reactions,
    clearReactions,
    sendReaction,
  };
};
