import { useReactions } from '@/hooks/useReactions';
import { IMusicWithTransformation } from '@/mappers/music/fromApi';
import { ReactionEnum } from '@/services/ReactionsService';
import { ModalCardExpanded } from '@/widgets/cards/ModalCardExpanded';
import { Card } from '@/widgets/cards/card';
import { useState } from 'react';

interface ICardsProps {
  cards: IMusicWithTransformation[];
  showExtra?: boolean;
}

export const Cards = ({ cards, showExtra = false }: ICardsProps) => {
  const { reactions, sendReaction } = useReactions();
  const [cardIsOpen, setCardIsOpen] = useState<IMusicWithTransformation | undefined>(undefined);

  const handleOpenModalExpanded = (playlistLocal: IMusicWithTransformation): void => {
    setCardIsOpen(playlistLocal);
  };

  return (
    <div className="animate-fadeIn min-h-screen mt-20">
      <ModalCardExpanded cardIsOpen={cardIsOpen} onCloseModal={() => setCardIsOpen(undefined)} />

      <section className="mx-auto md:max-w-[700px] lg:max-w-[1000px] w-full">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {cards.map((card: IMusicWithTransformation) => {
            return (
              <Card
                openModalExpanded={handleOpenModalExpanded}
                reaction={reactions?.[card.id] || ReactionEnum.none}
                key={card.url}
                showExtra={showExtra}
                playlistLocal={card}
                sendReaction={sendReaction}
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
};
