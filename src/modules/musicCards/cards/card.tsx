import { HiArrowsExpand } from 'react-icons/hi';
import { ReactButton } from '@/modules/musicCards/cards/reactButton';
import { IMusicWithTransformation } from '@/modules/musicCards/mappers/get/fromApi';
import { ReactionEnum } from '@/modules/musicCards/services/ReactionsService';

interface IProps {
  playlistLocal: IMusicWithTransformation;
  sendReaction: (idContent: string, reaction: ReactionEnum) => void;
  reaction: ReactionEnum;
  openModalExpanded: (playlistLocal: IMusicWithTransformation) => void;
  showExtra: boolean;
}

export const Card = ({ playlistLocal, sendReaction, openModalExpanded, reaction, showExtra }: IProps) => {
  return (
    <li
      key={playlistLocal.url}
      className="flex flex-col group cursor-pointer bg-dark-charcoal border-dark-charcoal border rounded-xl md:hover:scale-105 transition-all duration-300 shadow-xl">
      <article>
        <header>
          <a target="_blank" href={playlistLocal.url} rel="noreferrer" aria-label={`View ${playlistLocal.title} on YouTube`}>
            <img
              src={playlistLocal.img}
              alt={playlistLocal.title}
              draggable={false}
              className="relative object-cover w-full hover:saturate-150 transition-all duration-150 select-none h-[300px] md:h-[180px] md:w-full rounded-xl overflow-hidden block"
            />{' '}
          </a>
        </header>

        <section className="flex-1 flex flex-col py-[15px] px-[20px]">
          <div className="flex-1 flex flex-col">
            <div className="overflow-hidden text-ellipsis">
              {/* // create components */}
              <button
                type="button"
                onClick={() => openModalExpanded(playlistLocal)}
                title={playlistLocal.title}
                className="text-[0.9rem] text-left font-bold border-b-2 border-dark-charcoal hover:border-b-blue-cerulean text-white-ultra-light hover:text-blue-cerulean pr-1.5 transition-all duration-150 flex items-center justify-between gap-2 w-full">
                {playlistLocal.title}
                <HiArrowsExpand width={15} height={15} className="w-[15px] h-[15px] inline-block flex-shrink-0" />
              </button>
            </div>

            <div className="flex-1">
              <div>
                {showExtra ? <span className="text-[0.7rem] font-medium">{`${playlistLocal.year.toString()} - `}</span> : undefined}
                <a
                  target="_blank"
                  href={playlistLocal.url}
                  aria-label={`View artist ${playlistLocal.artist} on YouTube`}
                  rel="noreferrer"
                  className="text-[0.7rem] font-medium text-white-soft">
                  {playlistLocal.artist}
                </a>
              </div>
            </div>
          </div>

          <footer className="flex justify-between mt-2 w-full">
            <ReactButton
              variant="red"
              sendReaction={() => sendReaction(playlistLocal.id, ReactionEnum.like)}
              isSelected={reaction === ReactionEnum.like}
              text="Gostei"
            />

            <ReactButton
              variant="blue"
              sendReaction={() => sendReaction(playlistLocal.id, ReactionEnum.unlike)}
              isSelected={reaction === ReactionEnum.unlike}
              text="ignorar"
            />
          </footer>
        </section>
      </article>
    </li>
  );
};
