import type { IMusicWithTransformation } from '@/contracts/musics';
import { useReactions } from '@/hooks/useReactions';
import { ReactionEnum } from '@/services/ReactionsService';
import { Card } from '@/widgets/cards/card';
import type { MouseEvent, ReactElement } from 'react';
import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

interface ICardsProps {
  cards: IMusicWithTransformation[];
  showExtra?: boolean;
}

export const Cards = ({ cards, showExtra = false }: ICardsProps): ReactElement => {
  const { reactions, sendReaction } = useReactions();
  const [postSelected, setPostSelected] = useState<IMusicWithTransformation | undefined>(undefined);

  const handleOpenPlayer = (playlistLocal: IMusicWithTransformation): void => {
    setPostSelected(playlistLocal);
  };

  return (
    <div className="animate-fadeIn min-h-screen mt-20">
      <div>
        {postSelected ? (
          <button
            type="button"
            className="fixed top-0 bottom-0 flex items-center justify-center w-screen h-screen bg-dark z-20 transition-all duration-150 bg-opacity-50"
            onClick={(): void => setPostSelected(undefined)}>
            <button
              type="button"
              className="w-[70vw] h-[80vh] bg-dark shadow-md flex flex-col items-center justify-center px-2 py-3 rounded-md"
              onClick={(event: MouseEvent<HTMLButtonElement>): void => event.preventDefault()}>
              <div className="flex items-center justify-end w-full mb-4">
                <button type="button" onClick={(): void => setPostSelected(undefined)}>
                  <AiOutlineCloseCircle className="text-xl" />
                </button>
              </div>
              <div className="flex flex-1 w-full">
                <div className="flex-1p-2 w-full">
                  <iframe
                    className="w-full h-full object-cover"
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${postSelected.id}?start=${
                      postSelected.durationInSeconds || 0
                    }&autoplay=1`}
                    title={postSelected.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </button>
          </button>
        ) : undefined}
      </div>
      <section className="mx-auto md:max-w-[700px] lg:max-w-[1000px] w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {cards.map((card: IMusicWithTransformation) => {
            return (
              <Card
                openPlayer={handleOpenPlayer}
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
