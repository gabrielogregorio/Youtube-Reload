/* eslint-disable max-lines-per-function */
/* eslint-disable max-lines */
import { Navbar } from '@/components/layout/navbar';
import { IMusic, IMusicWithTransformation } from '@/interfaces/music';
import { Card } from '@/widgets/card';
import { ReactElement, useEffect, useState } from 'react';
import { parseToYoutubeContent } from '@/helpers/parseToYoutubeContent';
import { IReactions, MusicService, ReactionEnum } from '@/services/MusicService';
import { dataMusic } from '../data.reload';

export const HelloWorld = (): ReactElement => {
  const [playList, setplayList] = useState<IMusic[]>([]);
  const [ignoreDates, setignoreDates] = useState([2019, 2020, 2021]);
  const [jsonItems, setjsonItems] = useState<IMusic[]>([]);
  const [ids_json_like, setids_json_like] = useState({});
  const [items, setitems] = useState(dataMusic);

  /// ///////////
  useEffect(() => {
    if (localStorage.getItem('items')) {
      const jsonItemsCOpy = JSON.parse(localStorage.getItem('items') || '[]');
      setjsonItems(jsonItemsCOpy);

      // @ts-ignore
      jsonItemsCOpy?.forEach((json) => {
        const copyJson = JSON.parse(JSON.stringify(ids_json_like));

        copyJson[json.id] = { like: json.like, dislike: json.dislike };
        setids_json_like(copyJson);
      });

      for (let x = 0; x < items.length; x++) {
        if (items[x].id in ids_json_like === false) {
          jsonItemsCOpy.push(items[x]);
        }
      }
      setjsonItems(jsonItemsCOpy);
      setitems(jsonItems);
    }
  }, []);

  /// /////////

  const functionIgnoreDates = (date) => {
    if (!ignoreDates.includes(date)) {
      setignoreDates((prev) => [...prev, date]);
    } else {
      const index = ignoreDates.indexOf(date);
      if (index !== -1) {
        ignoreDates.splice(index, 1);
      }
    }
  };

  const [activeScreen, setActiveScreen] = useState<number>(1);

  const updateScreen = (screen): void => {
    setActiveScreen(screen);
  };

  // Gera uma playlist aleatória
  const generateRandomPlaylist = () => {
    const possiveis = [];

    // Registra a posição para otimizar a localização do item
    let item_id = 0;
    items.forEach((item) => {
      // Se não tem likes ou dislikes
      if (!item.like && !item.dislike) {
        console.log('if1');
        // O ano foi ignorado
        if (!ignoreDates.includes(item.ano)) {
          // Salve dentro das musicas possívels
          item.item_id = item_id;
          possiveis.push(item);
          console.log('here');
        }
      }

      // Registra a posição do item no array principal
      item_id += 1;
    });

    // Escolhe de forma randomica 5 musicas
    setplayList(possiveis.sort(() => Math.random() - 0.5).slice(0, 15));

    setTimeout(() => {
      window.scrollBy({ top: 100, left: 0, behavior: 'smooth' });
    }, 200);
  };

  const sendDislike = (item_id) => {
    MusicService.sendReactions(item_id, ReactionEnum.unlike);
  };

  const sendLike = (item_id) => {
    MusicService.sendReactions(item_id, ReactionEnum.like);
  };

  const clearPreferences = () => {
    localStorage.removeItem('items');
    document.location.reload();
  };

  /// ///////////

  const reactions: IReactions[] = MusicService.getReactions();

  const onlyLikeMusic: string[] = [];
  const onlyDislikeMusic: string[] = [];

  reactions.forEach((reaction: IReactions) => {
    if (reaction.reaction === ReactionEnum.like) {
      onlyLikeMusic.push(reaction.id);
    } else if (reaction.reaction === ReactionEnum.unlike) {
      onlyDislikeMusic.push(reaction.id);
    }
  });

  return (
    <div>
      <main>
        <header>
          <h1>
            Youtube<span>Reload</span>
          </h1>
          <Navbar updateScreen={updateScreen} activeScreen={activeScreen} />
        </header>

        <section className="description">
          <h2>Gere playlist com músicas que você nunca ouviu, sem nenhum algoritmo de IA.</h2>
          <button type="button" onClick={() => clearPreferences()}>
            Limpar Preferências
          </button>
        </section>

        <div className={`tela-principal ${activeScreen === 1 ? 'display-block' : 'display-hidden'} `}>
          <div className="grid-filtros">
            <div className="filtro-item">
              <h3>Filtrar épocas</h3>
              <div className="filtro-grid-1">
                <div className="filtro-item-grid">
                  {/* start checked */}
                  <input onClick={() => functionIgnoreDates(2019)} type="checkbox" />
                  <label className="container">Excluir 2019</label>
                </div>

                <div className="filtro-item-grid">
                  {/* start checked */}
                  <input onClick={() => functionIgnoreDates(2020)} type="checkbox" />
                  <label className="container">Excluir 2020</label>
                </div>

                <div className="filtro-item-grid">
                  {/* start checked */}
                  <input onClick={() => functionIgnoreDates(2021)} type="checkbox" />
                  <label className="container">Excluir 2021</label>
                </div>
              </div>
            </div>
          </div>

          <section className="videos">
            <div className="flex-videos">
              {parseToYoutubeContent(playList).map((playlistLocal: IMusicWithTransformation) => {
                return (
                  <Card
                    onlyLikeMusic={onlyLikeMusic}
                    onlyDislikeMusic={onlyDislikeMusic}
                    key={playlistLocal.url}
                    playlistLocal={playlistLocal}
                    sendLike={sendLike}
                    sendDislike={sendDislike}
                  />
                );
              })}
            </div>
          </section>

          <section className="gerar-playlist">
            <button onClick={() => generateRandomPlaylist()}>Gerar Playlist</button>
          </section>
        </div>

        <div className={`tela-favoritos ${activeScreen === 2 ? 'display-block' : 'display-none'} `}>
          <section className="videos">
            <div className="flex-videos">
              {parseToYoutubeContent(playList.filter((item) => onlyLikeMusic.includes(item.item_id))).map(
                (playlistLocal: IMusicWithTransformation) => {
                  return (
                    <Card
                      onlyLikeMusic={onlyLikeMusic}
                      onlyDislikeMusic={onlyDislikeMusic}
                      key={playlistLocal.url}
                      playlistLocal={playlistLocal}
                      sendLike={sendLike}
                      sendDislike={sendDislike}
                    />
                  );
                },
              )}
            </div>
          </section>
        </div>

        <div className={`tela-nao-gostei ${activeScreen === 3 ? 'display-block' : 'display-none'}`}>
          <section className="videos">
            <div className="flex-videos">
              {parseToYoutubeContent(playList.filter((item) => onlyDislikeMusic.includes(item.item_id))).map(
                (playlistLocal: IMusicWithTransformation) => {
                  return (
                    <Card
                      onlyLikeMusic={onlyLikeMusic}
                      onlyDislikeMusic={onlyDislikeMusic}
                      key={playlistLocal.url}
                      playlistLocal={playlistLocal}
                      sendLike={sendLike}
                      sendDislike={sendDislike}
                    />
                  );
                },
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
