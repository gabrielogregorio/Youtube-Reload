import { MusicService } from '@/services/MusicService';
import type { ReactElement } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';

export const ClearPreferences = (): ReactElement => {
  return (
    <button
      className="w-full text-center py-[10px]  bg-transparent cursor-pointer transition-all duration-150 hover:scale-95"
      type="button"
      onClick={(): void => MusicService.clearAll()}>
      <div className="flex items-center justify-center">
        <span className=" text-red-light underline text-base">Limpar Preferências</span>
        <BsFillTrashFill className="ml-2 fill-red-light" />
      </div>
    </button>
  );
};
