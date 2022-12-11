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
    <div key={playlistLocal.url} className="item-video">
      <div className="video-img">
        <a target="_blank" href={playlistLocal.url} rel="noreferrer">
          <img src={playlistLocal.img} alt="" />{' '}
        </a>
      </div>
      <div className="video-conteudo">
        <div className="video-conteudo-titulo">
          <p>
            <a target="_blank" href={playlistLocal.url} rel="noreferrer">
              {playlistLocal.title}
            </a>
          </p>
        </div>
        <div className="video-conteudo-autor">
          <p>
            <a target="_blank" href={playlistLocal.url} rel="noreferrer">
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
