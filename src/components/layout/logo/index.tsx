import { ReactElement } from 'react';

export const Logo = (): ReactElement => {
  return (
    <h1 className="py-[25px] px-[2%] w-full text-center text-red text-[1.5rem]">
      Youtube<span className="text-blue-dark text-[1.5rem]">Reload</span>
    </h1>
  );
};
