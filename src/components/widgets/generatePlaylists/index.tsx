import { HEIGHT_IN_PX_TO_IGNORE_HEADER, moveToTop } from '@/utils/scroll';
import type { ReactElement } from 'react';

interface IGeneratePlaylistProps {
  generateRandomPlaylist: () => void;
}

export const GeneratePlaylist = ({ generateRandomPlaylist }: IGeneratePlaylistProps): ReactElement => {
  return (
    <button
      className="display-block m-auto text-white bg-blue-darker px-8 py-4 rounded-xl cursor-pointer duration-[0.2s] text-[1.2rem] hover:bg-blue-darkest select-none"
      type="button"
      onClick={(): void => {
        generateRandomPlaylist();
        moveToTop(HEIGHT_IN_PX_TO_IGNORE_HEADER);
      }}>
      Gerar Playlist
    </button>
  );
};
