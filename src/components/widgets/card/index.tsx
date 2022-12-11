import { IMusicWithTransformation } from '@/interfaces/music';

type CardProps = {
  playlistLocal: IMusicWithTransformation;
  sendLike: (item_id: number) => void;
  sendDislike: (item_id: number) => void;
};

export const Card = ({ playlistLocal, sendLike, sendDislike }: CardProps) => {
  return (
    <div key={playlistLocal.url} className="item-video">
      <div className="video-img">
        <a target="_blank" href={playlistLocal.url}>
          <img src={playlistLocal.img} alt="" />{' '}
        </a>
      </div>
      <div className="video-conteudo">
        <div className="video-conteudo-titulo">
          <p>
            <a target="_blank" href={playlistLocal.url}>
              {playlistLocal.title}
            </a>
          </p>
        </div>

        <div className="video-conteudo-autor">
          <p>
            <a target="_blank" href={playlistLocal.url}>
              {playlistLocal.author}
            </a>
          </p>
        </div>

        <div className="video-conteudo-botoes">
          {!playlistLocal.like ? <button onClick={() => sendLike(playlistLocal.item_id)}>Gostei</button> : null}
          {playlistLocal.like ? (
            <button onClick={() => sendLike(playlistLocal.item_id)} className="selected">
              Gostei
            </button>
          ) : null}
          {!playlistLocal.dislike ? <button onClick={() => sendDislike(playlistLocal.item_id)}>ignorar</button> : null}
          {playlistLocal.dislike ? (
            <button onClick={() => sendDislike(playlistLocal.item_id)} className="selected">
              ignorar
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};
