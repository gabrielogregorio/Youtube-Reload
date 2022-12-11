import { ReactElement, useEffect, useState } from 'react';
import { dataMusic } from '../data.reload';

export const HelloWorld = (): ReactElement => {
  const [playList, setplayList] = useState([]);
  const [alteracoes, setalteracoes] = useState(0);
  const [musicas_possiveis, setmusicas_possiveis] = useState([]);
  const [playlistDislike, setplaylistDislike] = useState([]);
  const [playlistLike, setplaylistLike] = useState([]);
  const [authors, setauthors] = useState([]);
  const [ignoreAuthors, setignoreAuthors] = useState([]);
  const [ignoreDates, setignoreDates] = useState([2019, 2020, 2021]);
  const [itemsLocalStorage, setitemsLocalStorage] = useState('');
  const [jsonItems, setjsonItems] = useState<
    { author: string; title: string; id: string; like: boolean; dislike: boolean; ano: number; item_id: number }[]
  >([]);

  const [ids_json_like, setids_json_like] = useState({});
  const [items, setitems] = useState(dataMusic);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
    localStorage.setItem('ignoreAuthors', JSON.stringify({ ignore: ignoreAuthors }));
  }, [alteracoes]);

  //////////////
  useEffect(() => {
    // mount
    if (localStorage.getItem('ignoreAuthors')) {
      let ignoreAuthorsJson = localStorage.getItem('ignoreAuthors') as string; //Obter
      setignoreAuthors(JSON.parse(ignoreAuthorsJson).ignore);
    }

    if (localStorage.getItem('items')) {
      setitemsLocalStorage(localStorage.getItem('items') as string); //Obter
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

  const functionIgnoreAuthors = (author) => {
    if (!ignoreAuthors.includes(author)) {
      setignoreAuthors((prev) => [...prev, author]);
      console.log('ignorar' + author);
    } else {
      // Excluir o author da lista
      // Remove 1 item
      var index = ignoreAuthors.indexOf(author);
      if (index != -1) {
        ignoreAuthors.splice(index, 1);
      }
    }

    setalteracoes((prev) => (prev += 1));
  };

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

  const trocarTela = (screen) => {
    let tela_principal = document.getElementsByClassName('tela-principal')[0];
    let tela_favoritos = document.getElementsByClassName('tela-favoritos')[0];
    let tela_nao_gostei = document.getElementsByClassName('tela-nao-gostei')[0];

    let btn1 = document.getElementsByClassName('btn1')[0];
    let btn2 = document.getElementsByClassName('btn2')[0];
    let btn3 = document.getElementsByClassName('btn3')[0];

    // Valores padrões que os objetos sempre terão
    btn1.classList = 'btn1';
    btn2.classList = 'btn2';
    btn3.classList = 'btn3';

    tela_principal.classList = 'tela-principal';
    tela_favoritos.classList = 'tela-favoritos';
    tela_nao_gostei.classList = 'tela-nao-gostei';

    // Seleciona as telas
    if (screen == 1) {
      btn1.classList.toggle('nav-active');
      tela_principal.classList.toggle('display-block');
    } else if (screen == 2) {
      btn2.classList.toggle('nav-active');
      tela_favoritos.classList.toggle('display-block');

      // Carrega os likes
      setplaylistLike([]);
      items.forEach((item) => {
        if (item.like) {
          setplaylistLike((prev) => [...prev, item]);
        }
      });
    } else if (screen == 3) {
      btn3.classList.toggle('nav-active');
      tela_nao_gostei.classList.toggle('display-block');

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
  const gerarPlaylistAleatoria = () => {
    const possiveis = [];
    setmusicas_possiveis([]);

    // Registra a posição para otimizar a localização do item
    let item_id = 0;
    console.log(items, 'aaaaaaaaa');
    items.forEach((item) => {
      console.log('lloooping');
      // Se não tem likes ou dislikes
      if (!item.like && !item.dislike) {
        console.log('if1');
        // O autor foi ignorado?
        if (!ignoreAuthors.includes(item.author)) {
          console.log('if2');
          // O ano foi ignorado
          if (!ignoreDates.includes(item.ano)) {
            console.log('if3');
            // Salve dentro das musicas possívels
            item.item_id = item_id;
            possiveis.push(item);
            console.log('here');
          }
        }
      }

      // Registra a posição do item no array principal
      item_id += 1;
    });

    setmusicas_possiveis(possiveis);
    console.log(possiveis, 'aaa');

    // Escolhe de forma randomica 5 musicas
    setmusicas_possiveis(possiveis.sort(() => Math.random() - 0.5));
    setplayList(possiveis.slice(0, 15));

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

  const limparLocalStorage = () => {
    localStorage.removeItem('items');
    localStorage.removeItem('ignoreAuthors');
    document.location.reload(true);
  };

  //////////////

  const formatPlaylist = (playList) => {
    return playList.map((play) => ({
      ...play,
      img: 'https://img.youtube.com/vi/' + play.id + '/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=' + play.id,
    }));
  };

  const formatPlaylistLikes = (playList) => {
    return playlistLike.map((play) => ({
      ...play,
      img: 'https://img.youtube.com/vi/' + play.id + '/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=' + play.id,
    }));
  };

  const formatPlaylistDislikes = (playList) => {
    return playlistDislike.map((play) => ({
      ...play,
      img: 'https://img.youtube.com/vi/' + play.id + '/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=' + play.id,
    }));
  };

  return (
    <div>
      <main>
        <header>
          <h1>
            Youtube<span>Reload</span>
          </h1>
          <nav>
            <button onClick={() => trocarTela(1)} className="btn1 nav-active">
              Inicio
            </button>
            <button onClick={() => trocarTela(2)} className="btn2">
              Favoritos
            </button>
            <button onClick={() => trocarTela(3)} className="btn3">
              Não gostei
            </button>
          </nav>
        </header>

        <section className="description">
          <h2>Gere playlist com músicas que você nunca ouviu, sem nenhum algoritmo de IA.</h2>
          <button onClick={() => limparLocalStorage()}>Limpar Preferências</button>
        </section>

        <div className="tela-principal display-block">
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

            {/* <div className="filtro-item">
              <div className="filtro-grid-3">
                {authors.map((author, index) => {
                  return (
                    <div className="filtro-item-grid">
                      {ignoreAuthors.includes(author) ? (
                        <input onClick={() => functionIgnoreAuthors(author)} type="checkbox" />
                      ) : null}
                      {!ignoreAuthors.includes(author) ? (
                        <input onClick={() => functionIgnoreAuthors(author)} type="checkbox" />
                      ) : null}
                      <label className="container">{author}</label>
                    </div>
                  );
                })}
              </div>
            </div> */}
          </div>

          <section className="videos">
            <div className="flex-videos">
              {formatPlaylist(playList).map((playlist) => {
                return (
                  <div key={playlist.url} className="item-video">
                    <div className="video-img">
                      <a target="_blank" href={playlist.url}>
                        <img src={playlist.img} alt="" />{' '}
                      </a>
                    </div>
                    <div className="video-conteudo">
                      <div className="video-conteudo-titulo">
                        <p>
                          <a target="_blank" href={playlist.url}>
                            {playlist.title}
                          </a>
                        </p>
                      </div>

                      <div className="video-conteudo-autor">
                        <p>
                          <a target="_blank" href={playlist.url}>
                            {playlist.author}
                          </a>
                        </p>
                      </div>

                      <div className="video-conteudo-botoes">
                        {!playlist.like ? <button onClick={() => sendLike(playlist.item_id)}>Gostei</button> : null}
                        {playlist.like ? (
                          <button onClick={() => sendLike(playlist.item_id)} className="selected">
                            Gostei
                          </button>
                        ) : null}
                        {!playlist.dislike ? (
                          <button onClick={() => sendDislike(playlist.item_id)}>ignorar</button>
                        ) : null}
                        {playlist.dislike ? (
                          <button onClick={() => sendDislike(playlist.item_id)} className="selected">
                            ignorar
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="gerar-playlist">
            <button onClick={() => gerarPlaylistAleatoria()}>Gerar Playlist</button>
          </section>
        </div>

        <div className="tela-favoritos display-none">
          <section className="videos">
            <div className="flex-videos">
              {formatPlaylistLikes(playList).map((playlist) => {
                return (
                  <div key={playlist.url} className="item-video">
                    <div className="video-img">
                      <a target="_blank" href={playlist.url}>
                        <img src={playlist.img} alt="" />{' '}
                      </a>
                    </div>
                    <div className="video-conteudo">
                      <div className="video-conteudo-titulo">
                        <p>
                          <a target="_blank" href={playlist.url}>
                            {playlist.title}
                          </a>
                        </p>
                      </div>

                      <div className="video-conteudo-autor">
                        <p>
                          <a target="_blank" href={playlist.url}>
                            {playlist.author}
                          </a>
                        </p>
                      </div>

                      <div className="video-conteudo-botoes">
                        {!playlist.like ? <button onClick={() => sendLike(playlist.item_id)}>Gostei</button> : null}
                        {playlist.like ? (
                          <button onClick={() => sendLike(playlist.item_id)} className="selected">
                            Gostei
                          </button>
                        ) : null}
                        {!playlist.dislike ? (
                          <button onClick={() => sendDislike(playlist.item_id)}>ignorar</button>
                        ) : null}
                        {playlist.dislike ? (
                          <button onClick={() => sendDislike(playlist.item_id)} className="selected">
                            ignorar
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        <div className="tela-nao-gostei display-none">
          <section className="videos">
            <div className="flex-videos">
              {formatPlaylistDislikes(playList).map((playlist) => {
                return (
                  <div key={playlist.url} className="item-video">
                    <div className="video-img">
                      <a target="_blank" href={playlist.url}>
                        <img src={playlist.img} alt="" />{' '}
                      </a>
                    </div>
                    <div className="video-conteudo">
                      <div className="video-conteudo-titulo">
                        <p>
                          <a target="_blank" href={playlist.url}>
                            {playlist.title}
                          </a>
                        </p>
                      </div>

                      <div className="video-conteudo-autor">
                        <p>
                          <a target="_blank" href={playlist.url}>
                            {playlist.author}
                          </a>
                        </p>
                      </div>

                      <div className="video-conteudo-botoes">
                        {!playlist.like ? <button onClick={() => sendLike(playlist.item_id)}>Gostei</button> : null}
                        {playlist.like ? (
                          <button onClick={() => sendLike(playlist.item_id)} className="selected">
                            Gostei
                          </button>
                        ) : null}
                        {!playlist.dislike ? (
                          <button onClick={() => sendDislike(playlist.item_id)}>ignorar</button>
                        ) : null}
                        {playlist.dislike ? (
                          <button onClick={() => sendDislike(playlist.item_id)} className="selected">
                            ignorar
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
