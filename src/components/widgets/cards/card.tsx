import { ReactButton } from '@/widgets/cards/reactButton';
import { AiOutlineEye } from 'react-icons/ai';
import { FaDivide, FaPercent } from 'react-icons/fa';
import { BiCommentDetail, BiLike } from 'react-icons/bi';
import { ReactionEnum } from '@/services/ReactionsService';
import { IMusicWithTransformation } from '@/mappers/music/fromApi';

interface ICardProps {
  playlistLocal: IMusicWithTransformation;
  sendReaction: (idContent: string, reaction: ReactionEnum) => void;
  reaction: ReactionEnum;
  openPlayer: (playlistLocal: IMusicWithTransformation) => void;
  showExtra: boolean;
}

export const Card = ({ playlistLocal, sendReaction, openPlayer, reaction, showExtra }: ICardProps) => {
  return (
    <div
      key={playlistLocal.url}
      className="flex flex-col group cursor-pointer bg-dark-dark border-dark-dark border rounded-xl md:hover:scale-105 transition-all duration-300 shadow-xl">
      <div>
        <a target="_blank" href={playlistLocal.url} rel="noreferrer">
          <div className="h-[300px] md:h-[180px] md:w-full rounded-xl overflow-hidden relative">
            <img
              src={playlistLocal.img}
              alt={playlistLocal.title}
              draggable={false}
              className="relative object-cover h-full w-full hover:saturate-150 transition-all duration-150 select-none"
            />{' '}
          </div>
        </a>
      </div>
      <div className="flex-1 flex flex-col py-[15px] px-[20px]">
        <div className="flex-1 flex flex-col">
          <div>
            <p className="overflow-hidden text-ellipsis">
              <button
                type="button"
                onClick={() => openPlayer(playlistLocal)}
                title={playlistLocal.title}
                className="text-[0.9rem] text-left font-bold border-b-2 border-dark-dark hover:border-b-blue  text-white hover:text-blue pr-1.5 transition-all duration-150">
                {playlistLocal.title}
              </button>
            </p>
          </div>

          <div className="flex-1">
            <p>
              {showExtra ? (
                <span className="text-[0.7rem] font-medium">{`${playlistLocal.year.toString()} - `}</span>
              ) : undefined}
              <a
                target="_blank"
                href={playlistLocal.url}
                rel="noreferrer"
                className="text-[0.7rem] font-medium text-white-dark">
                {playlistLocal.artist}
              </a>
            </p>
          </div>
        </div>
        {showExtra ? (
          <div>
            <div className="text-sm flex justify-start items-center gap-2">
              <div className="flex items-center justify-start">
                <AiOutlineEye className="text-[.7rem] mr-1" />
                <div className="text-sm font-mono uppercase">{playlistLocal.views.tag}</div>
              </div>

              <div className="flex items-center justify-start">
                <BiLike className="text-[.7rem] mr-1" />
                <div className="text-sm font-mono uppercase">{playlistLocal.likes.tag}</div>
              </div>

              <div className="flex items-center justify-start">
                <BiCommentDetail className="text-[.7rem] mr-1" />
                <div className="text-sm font-mono uppercase">{playlistLocal.comments.tag}</div>
              </div>
            </div>

            <div className="text-sm flex justify-start items-center gap-2">
              <div className="flex items-center justify-start">
                <FaPercent className="text-[.7rem] mr-1" />
                <div className="text-sm font-mono uppercase">{playlistLocal.percentViewsLikesComments}</div>
              </div>

              <div className="flex items-center justify-start">
                <FaDivide className="text-[.7rem] mr-1" />
                <div className="text-sm font-mono uppercase underline">{playlistLocal.percentLikesComments}</div>
              </div>
            </div>
          </div>
        ) : undefined}
        <div className="flex justify-between mt-2 w-full">
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
        </div>
      </div>
    </div>
  );
};
