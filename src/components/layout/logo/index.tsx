import { ReactElement } from 'react';

export const Logo = (): ReactElement => {
  return (
    <div className="w-full flex items-center justify-center">
      <h1 className="py-[25px] px-[2%] text-center text-red text-[1.5rem] transition-all duration-150 hover:scale-110 cursor-grab">
        Youtube<span className="text-blue-dark text-[1.5rem]">Reload</span>
      </h1>
    </div>
  );
};
