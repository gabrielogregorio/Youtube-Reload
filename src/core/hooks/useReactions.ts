import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/connections/store/useRedux';
import { saveReaction } from '@/connections/features/reactions/slices';
import { reactionsSelector } from '@/connections/features/reactions/selectors';
import { IReactionsOptions, ReactionsService, ReactionEnum } from '@/services/ReactionsService';

export const useReactions = () => {
  const dispatch = useAppDispatch();
  const { reactions } = useAppSelector(reactionsSelector);

  const saveInitialState = (reactionsLocal: IReactionsOptions = ReactionsService.getReactions()) => {
    dispatch(saveReaction(reactionsLocal));

    ReactionsService.updateReactions(reactionsLocal);
  };

  useEffect(() => {
    saveInitialState();
  }, []);

  const sendReaction: (idContent: string, reaction: ReactionEnum) => void = useCallback(
    (idContent: string, reaction: ReactionEnum): void => {
      const newReaction = reactions;

      if (!newReaction) {
        saveInitialState({
          [idContent]: reaction,
        });
        return;
      }

      saveInitialState({
        ...newReaction,
        [idContent]: reaction,
      });
    },
    [dispatch, reactions],
  );

  const clearReactions = () => {
    ReactionsService.clearAll();
  };

  return {
    reactions: reactions as IReactionsOptions | undefined,
    clearReactions,
    sendReaction,
  };
};
