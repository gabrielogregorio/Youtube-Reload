import type { ReactElement } from 'react';

interface IGeneratePlaylistProps {
  generateRandomPlaylist: () => void;
}

export const GeneratePlaylist = ({ generateRandomPlaylist }: Readonly<IGeneratePlaylistProps>): ReactElement => {
  return (
    <button
      className="display-block m-auto text-white bg-blue-dark px-8 py-4 rounded-xl cursor-pointer duration-[0.2s] text-[1.2rem] hover:bg-blue-darker"
      type="button"
      onClick={(): void => generateRandomPlaylist()}>
      Gerar Playlist
    </button>
  );
};
