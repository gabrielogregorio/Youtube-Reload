import { ReactButton } from '@/widgets/cards/reactButton';
import { AiOutlineEye } from 'react-icons/ai';
import { FaDivide, FaPercent } from 'react-icons/fa';
import { BiCommentDetail, BiLike } from 'react-icons/bi';
import { ReactionEnum } from '@/services/ReactionsService';
import { IMusicWithTransformation } from '@/mappers/music/fromApi';
import { HiArrowsExpand } from 'react-icons/hi';
import { Statistics } from '@/widgets/cards/Statistics';

interface ICardProps {
  playlistLocal: IMusicWithTransformation;
  sendReaction: (idContent: string, reaction: ReactionEnum) => void;
  reaction: ReactionEnum;
  openModalExpanded: (playlistLocal: IMusicWithTransformation) => void;
  showExtra: boolean;
}

export const Card = ({ playlistLocal, sendReaction, openModalExpanded, reaction, showExtra }: ICardProps) => {
  return (
    <li
      key={playlistLocal.url}
      className="flex flex-col group cursor-pointer bg-dark-dark border-dark-dark border rounded-xl md:hover:scale-105 transition-all duration-300 shadow-xl">
      <article>
        <header>
          <a
            target="_blank"
            href={playlistLocal.url}
            rel="noreferrer"
            aria-label={`View ${playlistLocal.title} on YouTube`}>
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
              <button
                type="button"
                onClick={() => openModalExpanded(playlistLocal)}
                title={playlistLocal.title}
                className="text-[0.9rem] text-left font-bold border-b-2 border-dark-dark hover:border-b-blue  text-white hover:text-blue pr-1.5 transition-all duration-150 flex items-center justify-between gap-2 w-full">
                {playlistLocal.title}
                <HiArrowsExpand width={15} height={15} className="w-[15px] h-[15px] inline-block flex-shrink-0" />
              </button>
            </div>

            <div className="flex-1">
              <div>
                {showExtra ? (
                  <span className="text-[0.7rem] font-medium">{`${playlistLocal.year.toString()} - `}</span>
                ) : undefined}
                <a
                  target="_blank"
                  href={playlistLocal.url}
                  aria-label={`View artist ${playlistLocal.artist} on YouTube`}
                  rel="noreferrer"
                  className="text-[0.7rem] font-medium text-white-dark">
                  {playlistLocal.artist}
                </a>
              </div>
            </div>
          </div>

          {showExtra ? (
            <section aria-label="Statistics">
              <div className="text-sm flex justify-start items-center gap-2">
                <Statistics icon={<AiOutlineEye className="text-[.7rem] mr-1" />}>{playlistLocal.views.tag}</Statistics>

                <Statistics icon={<BiLike className="text-[.7rem] mr-1" />}>{playlistLocal.likes.tag}</Statistics>

                <Statistics icon={<BiCommentDetail className="text-[.7rem] mr-1" />}>
                  {playlistLocal.comments.tag}
                </Statistics>
              </div>

              <div className="text-sm flex justify-start items-center gap-2">
                <Statistics icon={<FaPercent className="text-[.7rem] mr-1" />}>
                  {playlistLocal.percentViewsLikesComments}
                </Statistics>

                <Statistics icon={<FaDivide className="text-[.7rem] mr-1" />}>
                  {playlistLocal.percentLikesComments}
                </Statistics>
              </div>
            </section>
          ) : undefined}

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
