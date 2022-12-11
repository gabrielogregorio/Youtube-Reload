import { IMusicWithTransformation } from '@/interfaces/music';
import { ReactionEnum } from '@/services/MusicService';
import { ReactButton } from '@/widgets/card/reactButton';
import { ReactElement } from 'react';

type CardProps = {
  playlistLocal: IMusicWithTransformation;
  sendReaction: (idContent: string, reaction: ReactionEnum) => void;
  onlyLikeMusic: string[];
  onlyDislikeMusic: string[];
};

export const Card = ({ playlistLocal, sendReaction, onlyDislikeMusic, onlyLikeMusic }: CardProps): ReactElement => {
  return (
    <div key={playlistLocal.url}>
      <div>
        <a target="_blank" href={playlistLocal.url} rel="noreferrer">
          <img src={playlistLocal.img} alt="" className="object-cover w-full h-[200px] md:h-[180px] md:w-auto" />{' '}
        </a>
      </div>
      <div className="flex flex-col py-[15px] px-[20px]">
        <div>
          <p>
            <a target="_blank" href={playlistLocal.url} rel="noreferrer" className="text-[0.9rem]">
              {playlistLocal.title}
            </a>
          </p>
        </div>
        <div className="flex-1">
          <p>
            <a target="_blank" href={playlistLocal.url} rel="noreferrer" className="text-[0.9rem]">
              {playlistLocal.author}
            </a>
          </p>
        </div>

        <div className="flex justify-between">
          <ReactButton
            variant="blue"
            sendReaction={(): void => sendReaction(playlistLocal.id, ReactionEnum.like)}
            isSelected={onlyLikeMusic.includes(playlistLocal.id)}>
            Gostei
          </ReactButton>

          <ReactButton
            variant="red"
            sendReaction={(): void => sendReaction(playlistLocal.id, ReactionEnum.unlike)}
            isSelected={onlyDislikeMusic.includes(playlistLocal.id)}>
            ignorar
          </ReactButton>
        </div>
      </div>
    </div>
  );
};
