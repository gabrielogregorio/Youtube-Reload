import { useReactions } from '@/hooks/useReactions';
import type { ReactElement } from 'react';
// import { BsFillTrashFill } from 'react-icons/bs';

export const ClearPreferences = (): ReactElement => {
  const { clearReactions } = useReactions();

  return (
    <button
      className="w-full text-center py-[10px]  bg-transparent cursor-pointer transition-all duration-150 hover:scale-95"
      type="button"
      onClick={(): void => clearReactions()}>
      <div className="flex items-center justify-center">
        {/* <span className=" text-red-light underline text-base select-none">Limpar Preferências</span> */}
        {/* <BsFillTrashFill className="ml-2 fill-red-light" /> */}
      </div>
    </button>
  );
};
