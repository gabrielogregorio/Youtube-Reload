import { Card } from '@/widgets/card';
import type { ReactElement } from 'react';
import { useState } from 'react';
import type { ReactionEnum } from '@/services/MusicService';
import { MusicService } from '@/services/MusicService';
import { useReactions } from '@/hooks/useReactions';
import { ClearPreferences } from '@/widgets/clearPreferences';
// import { Filters } from '@/widgets/filters';
import { GeneratePlaylist } from '@/widgets/generatePlaylists';
// import { FiFilter } from 'react-icons/fi';
import { BiRefresh } from 'react-icons/bi';
import { BsBookmarkCheckFill } from 'react-icons/bs';
import { AiOutlineArrowUp } from 'react-icons/ai';
import type { IMusic, IMusicWithTransformation } from '@/contracts/musics';
import { ScreenEnum } from '@/contracts/homeScreens';
import { parseToYoutubeContent } from '@/utils/parseToYoutubeContent';
import { useFetchAllMusics } from '@/hooks/useFetchAllMusics';
import { TemplateDefault } from '@/templates/default';
import { Header } from '@/layouts/header';
import { generateRandomPositiveZeroOrNegative } from '@/utils/generators';

export const HomePage = (): ReactElement => {
  const [randomPlaylist, setRandomPlaylist] = useState<IMusic[]>([]);
  const { onlyDislikeMusic, onlyLikeMusic, updateReactions } = useReactions();
  const [activeScreen, setActiveScreen] = useState<ScreenEnum>(ScreenEnum.home);
  const [causeUpdateFixMeAfterTest, setCauseUpdateFixMeAfterTest] = useState<boolean>(true);
  const { data } = useFetchAllMusics();

  const getMusicAvailableWithFilters = ({
    ignoreLikes,
    ignoreUnlikes,
    onlyLikes,
    onlyUnlikes,
    random,
  }: {
    ignoreLikes: boolean;
    ignoreUnlikes: boolean;
    onlyLikes: boolean;
    onlyUnlikes: boolean;
    random: boolean;
  }): IMusicWithTransformation[] => {
    if (data === undefined) {
      return [];
    }
    let listItems: IMusic[] = data;
    if (random) {
      listItems = randomPlaylist;
    }

    if (onlyLikes) {
      listItems = listItems.filter((item: IMusic) => onlyLikeMusic.includes(item.id));
    }

    if (onlyUnlikes) {
      listItems = listItems.filter((item: IMusic) => onlyDislikeMusic.includes(item.id));
    }

    if (ignoreLikes) {
      listItems = listItems.filter((item: IMusic) => !onlyLikeMusic.includes(item.id));
    }
    if (ignoreUnlikes) {
      listItems = listItems.filter((item: IMusic) => !onlyDislikeMusic.includes(item.id));
    }
    return parseToYoutubeContent(listItems);
  };

  const musicAvailable: IMusicWithTransformation[] = getMusicAvailableWithFilters({
    onlyLikes: activeScreen === ScreenEnum.likes,
    onlyUnlikes: activeScreen === ScreenEnum.unlikes,
    random: activeScreen === ScreenEnum.home,
    ignoreLikes: false,
    ignoreUnlikes: false,
  });

  const updateScreen = (screen: ScreenEnum): void => {
    setActiveScreen(screen);
  };
  const generateRandomPlaylist = (): void => {
    const maxItemsPlaylist: number = 9;

    // @ts-ignore
    setRandomPlaylist(data?.sort((): number => generateRandomPositiveZeroOrNegative()).slice(0, maxItemsPlaylist));
    setCauseUpdateFixMeAfterTest((prev: boolean) => !prev);
  };
  const sendReaction = (idContent: string, reaction: ReactionEnum): void => {
    MusicService.sendReactions(idContent, reaction);
    updateReactions(MusicService.getReactions());
  };

  return (
    <TemplateDefault>
      <div className="hidden">{causeUpdateFixMeAfterTest}</div>
      <Header updateScreen={updateScreen} activeScreen={activeScreen} />

      <section className="w-full mb-6">
        <h2 className="max-w-[620px] w-full m-auto text-center py-[40px] px-[2%] text-base md:text-[1.2rem]">
          Gere playlist com músicas que você nunca ouviu, sem nenhum algoritmo de IA.
        </h2>

        <ClearPreferences />
      </section>

      {/* <div className="flex items-center justify-center mb-6">
          <details className="">
            <summary className="select-none text-base flex items-center justify-center cursor-pointer transition-all duration-150 rounded-tl-xl rounded-tr-xl px-3 py-2 hover:scale-110 shadow-xl ">
              <span className="mr-3">Filtros</span>
              <span>
                <FiFilter />
              </span>
            </summary>
            <Filters />
          </details>
        </div> */}

      {/* <section className="flex items-center justify-center my-8">
          <div className="grid grid-cols-2 gap-3 shadow-md px-4 py-2 transition-all duration-150 hover:scale-110">
            <button
              type="button"
              onClick={() => setGridType(true)}
              className={`${
                gridType ? 'bg-dark-dark' : ''
              } rounded-md p-2 transition-all duration-150 hover:scale-110`}>
              <FaThList className={`${gridType ? '' : ''} text-base`} />
            </button>

            <button
              type="button"
              onClick={() => setGridType(false)}
              className={`${
                gridType ? '' : 'bg-dark-dark'
              } rounded-md p-2 transition-all duration-150 hover:scale-110`}>
              <BsFillGrid3X3GapFill className={`${gridType ? '' : ''} text-base`} />
            </button>
          </div>
        </section> */}

      <div className="animate-fadeIn">
        <section className="mx-auto md:max-w-[700px] lg:max-w-[1000px] w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {musicAvailable.map((playlistLocal: IMusicWithTransformation) => {
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
      </div>

      {activeScreen === ScreenEnum.home ? (
        <section className="w-full flex justify-center items-center py-[40px]">
          <GeneratePlaylist generateRandomPlaylist={generateRandomPlaylist} />
        </section>
      ) : (
        <div />
      )}

      <div className="h-16" />

      <section>
        <div className="fixed bottom-[10rem] right-6">
          <button
            onClick={(): void => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}
            type="button"
            title="Ir para cima"
            className="bg-dark-light text-white p-3 rounded-full transition-all duration-150 shadow-xl hover:bg-dark-light md:hover:scale-110">
            <AiOutlineArrowUp className="text-2xl" />
          </button>
        </div>

        <div className="fixed bottom-[6rem] right-6">
          <button
            onClick={(): void => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });

              updateScreen(ScreenEnum.likes);
            }}
            type="button"
            title="ir para favoritos"
            className="bg-red text-white p-3 rounded-full transition-all duration-150 shadow-xl hover:bg-red md:hover:scale-110">
            <BsBookmarkCheckFill className="text-2xl" />
          </button>
        </div>

        <div className="fixed bottom-[2rem] right-6">
          <button
            onClick={(): void => {
              updateScreen(ScreenEnum.home);
              generateRandomPlaylist();
            }}
            type="button"
            title="gerar nova playlist"
            className="bg-blue-dark text-white p-3 rounded-full transition-all duration-150 shadow-xl hover:bg-blue-darker md:hover:scale-110">
            <BiRefresh className="text-2xl" />
          </button>
        </div>
      </section>
    </TemplateDefault>
  );
};
