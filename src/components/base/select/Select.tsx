import type { ReactNode } from 'react';
import { useState } from 'react';

interface ISelectProps {
  children: ReactNode;
}

export const Select = ({ children }: ISelectProps) => {
  const [isActive, setIsActive] = useState<boolean>(true);

  const handleUpdateIsActive = () => {
    setIsActive((prev) => !prev);
  };

  const styleButtonIsActive = isActive ? 'border-l-red  text-red' : 'bg-dark border-l-dark text-gray-500 line-through';

  return (
    <button
      type="button"
      onClick={() => handleUpdateIsActive()}
      className={`border-l-4 px-3 py-2 text-left transition-all duration-150 hover:scale-105 hover:text-blue ${styleButtonIsActive}`}>
      {children}
    </button>
  );
};
