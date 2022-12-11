/* eslint-disable max-lines-per-function */
/* eslint-disable max-lines */
import { Navbar } from '@/components/layout/navbar';
import { IMusic, IMusicWithTransformation } from '@/interfaces/music';
import { Card } from '@/widgets/card';
import { ReactElement, useState } from 'react';
import { parseToYoutubeContent } from '@/helpers/parseToYoutubeContent';
import { IReactions, MusicService, ReactionEnum } from '@/services/MusicService';
import { STORAGE_LIKES } from '@/constants/storage';
import { generateRandomPositiveZeroOrNegative } from '@/helpers/generators';
import { dataMusic } from '../data.reload';

export const HelloWorld = (): ReactElement => {
  const [randomPlaylist, setRandomPlaylist] = useState<IMusic[]>([]);
  const [reactions, setReactions] = useState<IReactions[]>(MusicService.getReactions());
  const [activeScreen, setActiveScreen] = useState<number>(1);

  const onlyLikeMusic: string[] = [];
  const onlyDislikeMusic: string[] = [];

  reactions.forEach((reaction: IReactions) => {
    if (reaction.reaction === ReactionEnum.like) {
      onlyLikeMusic.push(reaction.id);
    } else if (reaction.reaction === ReactionEnum.unlike) {
      onlyDislikeMusic.push(reaction.id);
    }
  });

  const updateScreen = (screen: number): void => {
    setActiveScreen(screen);
  };

  const getContentAfterApplyFilter = (): IMusic[] => {
    const filtered: IMusic[] = [];

    dataMusic.forEach((item: IMusic) => {
      if (onlyLikeMusic.includes(item.id) === false && onlyDislikeMusic.includes(item.id) === false) {
        filtered.push(item);
      }
    });

    return filtered;
  };

  const generateRandomPlaylist = (): void => {
    setRandomPlaylist(getContentAfterApplyFilter().sort((): number => generateRandomPositiveZeroOrNegative()));

    setTimeout((): void => {
      window.scrollBy({ top: 100, left: 0, behavior: 'smooth' });
    }, 200);
  };

  const sendReaction = (idContent: string, reaction: ReactionEnum): void => {
    MusicService.sendReactions(idContent, reaction);
    setReactions(MusicService.getReactions());
  };

  const clearPreferences = (): void => {
    localStorage.removeItem(STORAGE_LIKES);
    document.location.reload();
  };

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
          <button type="button" onClick={(): void => clearPreferences()}>
            Limpar Preferências
          </button>
        </section>

        <div className={`tela-principal ${activeScreen === 1 ? 'display-block' : 'display-hidden'} `}>
          <div className="grid-filtros">
            <div className="filtro-item">
              <h3>Filtrar épocas</h3>
              <div className="filtro-grid-1">
                <div className="filtro-item-grid">
                  <input onClick={(): void => {}} type="checkbox" />
                  <label className="container">Excluir 2019</label>
                </div>

                <div className="filtro-item-grid">
                  <input onClick={(): void => {}} type="checkbox" />
                  <label className="container">Excluir 2020</label>
                </div>

                <div className="filtro-item-grid">
                  <input onClick={(): void => {}} type="checkbox" />
                  <label className="container">Excluir 2021</label>
                </div>
              </div>
            </div>
          </div>

          <section className="mx-auto md:max-w-[700px] lg:max-w-[1000px] w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {parseToYoutubeContent(randomPlaylist).map((playlistLocal: IMusicWithTransformation, index: number) => {
                return (
                  <div>
                    {index}
                    <Card
                      onlyLikeMusic={onlyLikeMusic}
                      onlyDislikeMusic={onlyDislikeMusic}
                      key={playlistLocal.url}
                      playlistLocal={playlistLocal}
                      sendReaction={sendReaction}
                    />
                  </div>
                );
              })}
            </div>
          </section>

          <section className="gerar-playlist">
            <button type="button" onClick={(): void => generateRandomPlaylist()}>
              Gerar Playlist
            </button>
          </section>
        </div>

        <div className={`tela-favoritos ${activeScreen === 2 ? 'display-block' : 'display-none'} `}>
          <section className="mx-auto xl:max-w-[700px] lg:max-w-[1000px] w-ful">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {parseToYoutubeContent(dataMusic.filter((item: IMusic) => onlyLikeMusic.includes(item.id))).map(
                (playlistLocal: IMusicWithTransformation) => {
                  return (
                    <Card
                      onlyLikeMusic={onlyLikeMusic}
                      onlyDislikeMusic={onlyDislikeMusic}
                      key={playlistLocal.url}
                      playlistLocal={playlistLocal}
                      sendReaction={sendReaction}
                    />
                  );
                },
              )}
            </div>
          </section>
        </div>

        <div className={`tela-nao-gostei ${activeScreen === 3 ? 'display-block' : 'display-none'}`}>
          <section className="mx-auto xl:max-w-[700px] lg:max-w-[1000px] w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {parseToYoutubeContent(dataMusic.filter((item: IMusic) => onlyDislikeMusic.includes(item.id))).map(
                (playlistLocal: IMusicWithTransformation) => {
                  return (
                    <Card
                      onlyLikeMusic={onlyLikeMusic}
                      onlyDislikeMusic={onlyDislikeMusic}
                      key={playlistLocal.url}
                      playlistLocal={playlistLocal}
                      sendReaction={sendReaction}
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
