import { Navbar } from '@/components/layout/navbar';
import { IMusic, IMusicWithTransformation } from '@/interfaces/music';
import { Card } from '@/widgets/card';
import { ReactElement, useState } from 'react';
import { parseToYoutubeContent } from '@/helpers/parseToYoutubeContent';
import { MusicService, ReactionEnum } from '@/services/MusicService';
import { generateRandomPositiveZeroOrNegative } from '@/helpers/generators';
import { ScreenEnum } from '@/interfaces/screens';
import { useReactions } from '@/hooks/useReactions';
import { dataMusic } from '../../../data.reload';

const TIME_IN_MS_TO_MOVEMENT_PAGE_AFTER_GENERATE_PLAYLIST: number = 200;

export const Home = (): ReactElement => {
  const [randomPlaylist, setRandomPlaylist] = useState<IMusic[]>([]);
  const { onlyDislikeMusic, onlyLikeMusic, updateReactions } = useReactions();
  const [activeScreen, setActiveScreen] = useState<ScreenEnum>(ScreenEnum.home);

  const updateScreen = (screen: ScreenEnum): void => {
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
    }, TIME_IN_MS_TO_MOVEMENT_PAGE_AFTER_GENERATE_PLAYLIST);
  };

  const sendReaction = (idContent: string, reaction: ReactionEnum): void => {
    MusicService.sendReactions(idContent, reaction);
    updateReactions(MusicService.getReactions());
  };

  return (
    <div className="mt-[60px]">
      <main>
        <header className="w-full">
          <h1 className="py-[25px] px-[2%] w-full text-center text-red text-[1.5rem]">
            Youtube<span className="text-blue-dark text-[1.5rem]">Reload</span>
          </h1>
          <Navbar updateScreen={updateScreen} activeScreen={activeScreen} />
        </header>

        <section className="w-full">
          <h2 className="max-w-[620px] w-full m-auto text-center py-[40px] px-[2%] text-[1.2rem]">
            Gere playlist com músicas que você nunca ouviu, sem nenhum algoritmo de IA.
          </h2>
          <button
            className="w-full text-center py-[10px] text-base text-red underline bg-transparent cursor-pointer"
            type="button"
            onClick={(): void => MusicService.clearAll()}>
            Limpar Preferências
          </button>
        </section>

        <div className={`animate-fadeIn ${activeScreen === ScreenEnum.home ? 'display-block' : 'hidden'} `}>
          <div className="w-full mx-auto grid grid-cols-2 max-w-[1280px] px-[2%]">
            <div className="w-full ">
              <h3 className=" text-[1.2rem] py-[10px]">Filtrar épocas</h3>
              <div className="w-full">
                <div className=" flex items-center">
                  <label className="ml-[5px] text-[0.9rem] flex items-center" htmlFor="filter-2019">
                    <input className="my-[3px]" id="filter-2019" onClick={(): void => {}} type="checkbox" />
                    Excluir 2019
                  </label>
                </div>

                <div className=" flex items-center">
                  <label className="ml-[5px] text-[0.9rem] flex items-center" htmlFor="filter-2020">
                    <input className="my-[3px]" id="filter-2020" onClick={(): void => {}} type="checkbox" />
                    Excluir 2020
                  </label>
                </div>

                <div className=" flex items-center">
                  <label className="ml-[5px] text-[0.9rem] flex items-center" htmlFor="filter-2021">
                    <input className="my-[3px]" id="filter-2021" onClick={(): void => {}} type="checkbox" />
                    Excluir 2021
                  </label>
                </div>
              </div>
            </div>
          </div>

          <section className="mx-auto md:max-w-[700px] lg:max-w-[1000px] w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {parseToYoutubeContent(randomPlaylist).map((playlistLocal: IMusicWithTransformation) => {
                return (
                  <Card
                    onlyLikeMusic={onlyLikeMusic}
                    onlyDislikeMusic={onlyDislikeMusic}
                    key={playlistLocal.url}
                    playlistLocal={playlistLocal}
                    sendReaction={sendReaction}
                  />
                );
              })}
            </div>
          </section>

          <section className="w-full flex justify-center items-center py-[40px]">
            <button
              className="display-block m-auto text-white bg-[#05d2ff] px-[10px] py-[20px] cursor-pointer duration-[0.2s] text-[1.2rem] hover:bg-[#009abd]"
              type="button"
              onClick={(): void => generateRandomPlaylist()}>
              Gerar Playlist
            </button>
          </section>
        </div>

        <div className={`animate-fadeIn ${activeScreen === ScreenEnum.likes ? 'display-block' : 'hidden'} `}>
          <section className="mx-auto md:max-w-[700px] lg:max-w-[1000px] w-full">
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

        <div className={`animate-fadeIn ${activeScreen === ScreenEnum.unlikes ? 'display-block' : 'hidden'}`}>
          <section className="mx-auto md:max-w-[700px] lg:max-w-[1000px] w-full">
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
