import { IMusicWithTransformation } from '@/interfaces/music';

type CardProps = {
  playlistLocal: IMusicWithTransformation;
  sendLike: (item_id: number) => void;
  sendDislike: (item_id: number) => void;
  onlyLikeMusic: string[];
  onlyDislikeMusic: string[];
};

export const Card = ({ playlistLocal, sendLike, sendDislike, onlyDislikeMusic, onlyLikeMusic }: CardProps) => {
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
          {!onlyLikeMusic.includes(playlistLocal.item_id) ? (
            <button onClick={() => sendLike(playlistLocal.item_id)}>Gostei</button>
          ) : null}
          {onlyLikeMusic.includes(playlistLocal.item_id) ? (
            <button onClick={() => sendLike(playlistLocal.item_id)} className="selected">
              Gostei
            </button>
          ) : null}
          {!onlyDislikeMusic.includes(playlistLocal.item_id) ? (
            <button onClick={() => sendDislike(playlistLocal.item_id)}>ignorar</button>
          ) : null}
          {onlyDislikeMusic.includes(playlistLocal.item_id) ? (
            <button onClick={() => sendDislike(playlistLocal.item_id)} className="selected">
              ignorar
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};
