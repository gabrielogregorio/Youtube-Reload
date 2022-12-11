import { Navbar } from '@/components/layout/navbar';
import { IMusic } from '@/interfaces/music';
import { Card } from '@/widgets/card';
import { ReactElement, useEffect, useState } from 'react';
import { parseToYoutubeContent } from '@/helpers/parseToYoutubeContent';
import { dataMusic } from '../data.reload';

export const HelloWorld = (): ReactElement => {
  const [playList, setplayList] = useState<IMusic[]>([]);
  const [alteracoes, setalteracoes] = useState(0);
  const [playlistDislike, setplaylistDislike] = useState([]);
  const [playlistLike, setplaylistLike] = useState([]);
  const [authors, setauthors] = useState([]);
  const [ignoreDates, setignoreDates] = useState([2019, 2020, 2021]);
  const [jsonItems, setjsonItems] = useState<
    { author: string; title: string; id: string; like: boolean; dislike: boolean; ano: number; item_id: number }[]
  >([]);

  const [ids_json_like, setids_json_like] = useState({});
  const [items, setitems] = useState(dataMusic);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [alteracoes]);

  //////////////
  useEffect(() => {
    if (localStorage.getItem('items')) {
      let jsonItemsCOpy = JSON.parse(localStorage.getItem('items') || '[]');
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

    // lista com todos os autores disponíveis
    items.forEach((item) => {
      if (!authors.includes(item.author)) {
        setauthors((prev) => [...prev, item.author]);
      }
    });
  }, []);

  ////////////

  const functionIgnoreDates = (date) => {
    if (!ignoreDates.includes(date)) {
      setignoreDates((prev) => [...prev, date]);
    } else {
      var index = ignoreDates.indexOf(date);
      if (index != -1) {
        ignoreDates.splice(index, 1);
      }
    }
  };

  const [activeScreen, setActiveScreen] = useState<number>(1);

  const updateScreen = (screen): void => {
    setActiveScreen(screen);

    if (screen == 2) {
      // Carrega os likes
      setplaylistLike([]);
      items.forEach((item) => {
        if (item.like) {
          setplaylistLike((prev) => [...prev, item]);
        }
      });
    } else if (screen == 3) {
      // Carrega os dislikes
      setplaylistDislike([]);
      items.forEach((item) => {
        if (item.dislike) {
          setplaylistDislike((prev) => [...prev, item]);
        }
      });
    }
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

    console.log(playList, 'aaaaaaaa');
    setTimeout(() => {
      window.scrollBy({ top: 100, left: 0, behavior: 'smooth' });
    }, 200);
  };

  // Envia um dislike
  const sendDislike = (item_id) => {
    if (!items[item_id].dislike) {
      items[item_id].dislike = true;
      items[item_id].like = false;
    } else {
      items[item_id].dislike = false;
    }

    // Acorda o watcher para atualizar o localstorage
    setalteracoes((prev) => (prev += 1));
  };

  // Envia um like
  const sendLike = (item_id) => {
    if (!items[item_id].like) {
      items[item_id].like = true;
      items[item_id].dislike = false;
    } else {
      items[item_id].like = false;
    }
    // Acorda o watcher para atualizar o localstorage
    setalteracoes((prev) => (prev += 1));
  };

  const clearPreferences = () => {
    localStorage.removeItem('items');
    document.location.reload();
  };

  //////////////

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
          <button onClick={() => clearPreferences()}>Limpar Preferências</button>
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
              {parseToYoutubeContent(playList).map((playlistLocal) => {
                return (
                  <Card
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
              {parseToYoutubeContent(playList).map((playlistLocal) => {
                return (
                  <Card
                    key={playlistLocal.url}
                    playlistLocal={playlistLocal}
                    sendLike={sendLike}
                    sendDislike={sendDislike}
                  />
                );
              })}
            </div>
          </section>
        </div>

        <div className={`tela-nao-gostei ${activeScreen === 3 ? 'display-block' : 'display-none'}`}>
          <section className="videos">
            <div className="flex-videos">
              {parseToYoutubeContent(playList).map((playlistLocal) => {
                return (
                  <Card
                    key={playlistLocal.url}
                    playlistLocal={playlistLocal}
                    sendLike={sendLike}
                    sendDislike={sendDislike}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
