import { IMusic, IMusicWithTransformation } from '@/interfaces/music';
import { Card } from '@/widgets/card';
import { ReactElement, useState } from 'react';
import { parseToYoutubeContent } from '@/helpers/parseToYoutubeContent';
import { MusicService, ReactionEnum } from '@/services/MusicService';
import { generateRandomPositiveZeroOrNegative } from '@/helpers/generators';
import { ScreenEnum } from '@/interfaces/screens';
import { useReactions } from '@/hooks/useReactions';
import { Header } from '@/layout/header';
import { ClearPreferences } from '@/widgets/clearPreferences';
import { Filters } from '@/widgets/filters';
import { dataMusic } from '../../../data.reload';

const TIME_IN_MS_TO_MOVEMENT_PAGE_AFTER_GENERATE_PLAYLIST: number = 200;

export const Home = (): ReactElement => {
  const [randomPlaylist, setRandomPlaylist] = useState<IMusic[]>([]);
  const { onlyDislikeMusic, onlyLikeMusic, updateReactions } = useReactions();
  const [activeScreen, setActiveScreen] = useState<ScreenEnum>(ScreenEnum.home);
  const [causeUpdateFixMeAfterTest, setCauseUpdateFixMeAfterTest] = useState<boolean>(true);

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
    let listItems: IMusic[] = dataMusic;
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
      listItems = listItems.filter((item: IMusic) => onlyLikeMusic.includes(item.id) === false);
    }
    if (ignoreUnlikes) {
      listItems = listItems.filter((item: IMusic) => onlyDislikeMusic.includes(item.id) === false);
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
    setRandomPlaylist(dataMusic.sort((): number => generateRandomPositiveZeroOrNegative()));
    setCauseUpdateFixMeAfterTest((prev: boolean) => !prev);
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
        <div className="hidden">{causeUpdateFixMeAfterTest}</div>
        <Header updateScreen={updateScreen} activeScreen={activeScreen} />

        <section className="w-full">
          <h2 className="max-w-[620px] w-full m-auto text-center py-[40px] px-[2%] text-[1.2rem]">
            Gere playlist com músicas que você nunca ouviu, sem nenhum algoritmo de IA.
          </h2>

          <ClearPreferences />
        </section>

        {activeScreen === ScreenEnum.home ? <Filters /> : null}

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
            <button
              className="display-block m-auto text-white bg-[#05d2ff] px-[10px] py-[20px] cursor-pointer duration-[0.2s] text-[1.2rem] hover:bg-[#009abd]"
              type="button"
              onClick={(): void => generateRandomPlaylist()}>
              Gerar Playlist
            </button>
          </section>
        ) : null}
      </main>
    </div>
  );
};
