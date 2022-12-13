import { MusicService } from '@/services/MusicService';
import { ReactElement } from 'react';

export const ClearPreferences = (): ReactElement => {
  return (
    <button
      className="w-full text-center py-[10px] text-base text-red underline bg-transparent cursor-pointer"
      type="button"
      onClick={(): void => MusicService.clearAll()}>
      Limpar Preferências
    </button>
  );
};
