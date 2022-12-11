import { IMusicWithTransformation } from '@/interfaces/music';
import { ReactionEnum } from '@/services/MusicService';
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

        <div className="video-conteudo-botoes">
          {!onlyLikeMusic.includes(playlistLocal.id) ? (
            <button type="button" onClick={(): void => sendReaction(playlistLocal.id, ReactionEnum.like)}>
              Gostei
            </button>
          ) : null}
          {onlyLikeMusic.includes(playlistLocal.id) ? (
            <button
              type="button"
              onClick={(): void => sendReaction(playlistLocal.id, ReactionEnum.like)}
              className="selected">
              Gostei
            </button>
          ) : null}
          {!onlyDislikeMusic.includes(playlistLocal.id) ? (
            <button type="button" onClick={(): void => sendReaction(playlistLocal.id, ReactionEnum.unlike)}>
              ignorar
            </button>
          ) : null}
          {onlyDislikeMusic.includes(playlistLocal.id) ? (
            <button
              type="button"
              onClick={(): void => sendReaction(playlistLocal.id, ReactionEnum.unlike)}
              className="selected">
              ignorar
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};
