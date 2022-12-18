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
    <div
      key={playlistLocal.url}
      className="flex flex-col group cursor-pointer bg-dark-dark border-dark-dark border rounded-xl md:hover:scale-105 transition-all duration-300 shadow-xl">
      <div>
        <a target="_blank" href={playlistLocal.url} rel="noreferrer">
          <div className="h-[300px] md:h-[180px] md:w-full rounded-xl overflow-hidden relative">
            <img
              src={playlistLocal.img}
              alt=""
              className="relative object-cover h-full w-full hover:saturate-150 transition-all duration-150"
            />{' '}
          </div>
        </a>
      </div>
      <div className="flex-1 flex flex-col py-[15px] px-[20px]">
        <div className="flex-1 flex flex-col">
          <div>
            <p className="overflow-hidden text-ellipsis">
              <a
                target="_blank"
                href={playlistLocal.url}
                title={playlistLocal.title}
                rel="noreferrer"
                className="text-[0.9rem] font-bold">
                {playlistLocal.title}
              </a>
            </p>
          </div>

          <div className="flex-1">
            <p>
              <a
                target="_blank"
                href={playlistLocal.url}
                rel="noreferrer"
                className="text-[0.9rem] font-medium text-white-dark">
                {playlistLocal.author}
              </a>
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-2 w-full">
          <ReactButton
            variant="red"
            sendReaction={(): void => sendReaction(playlistLocal.id, ReactionEnum.like)}
            isSelected={onlyLikeMusic.includes(playlistLocal.id)}>
            Gostei
          </ReactButton>

          <ReactButton
            variant="blue"
            sendReaction={(): void => sendReaction(playlistLocal.id, ReactionEnum.unlike)}
            isSelected={onlyDislikeMusic.includes(playlistLocal.id)}>
            ignorar
          </ReactButton>
        </div>
      </div>
    </div>
  );
};
