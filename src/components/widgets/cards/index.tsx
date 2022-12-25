import type { IMusicWithTransformation } from '@/contracts/musics';
import { useReactions } from '@/hooks/useReactions';
import { ReactionEnum } from '@/services/MusicService';
import { Card } from '@/widgets/cards/card';
import type { ReactElement } from 'react';

interface ICardsProps {
  cards: IMusicWithTransformation[];
  showExtra?: boolean;
}

export const Cards = ({ cards, showExtra = false }: ICardsProps): ReactElement => {
  const { reactions, sendReaction } = useReactions();

  return (
    <div className="animate-fadeIn min-h-screen mt-20">
      <section className="mx-auto md:max-w-[700px] lg:max-w-[1000px] w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {cards.map((card: IMusicWithTransformation) => {
            return (
              <Card
                reaction={reactions?.[card.id]?.reaction || ReactionEnum.none}
                key={card.url}
                showExtra={showExtra}
                playlistLocal={card}
                sendReaction={sendReaction}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};
