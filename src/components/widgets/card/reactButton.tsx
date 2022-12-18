import { ReactElement, ReactNode } from 'react';

type ReactButtonProps = {
  isSelected: boolean;
  children: ReactNode;
  variant: 'blue' | 'red';
  sendReaction: () => void;
};

type defaultColorType = {
  select: string;
  unSelect: string;
  normal: string;
};

export const ReactButton = ({ isSelected, children, variant, sendReaction }: ReactButtonProps): ReactElement => {
  const variants: { [key in ReactButtonProps['variant']]: defaultColorType } = {
    blue: {
      select: 'bg-blue-light text-white',
      unSelect: 'text-blue-light bg-dark-dark',
      normal: 'hover:scale-95 hover:text-white hover:bg-blue-light border-blue-light',
    },
    red: {
      select: 'bg-red-light text-white',
      unSelect: 'text-red-light bg-dark-dark',
      normal: 'hover:scale-105 hover:text-white hover:bg-red-light border-red-light',
    },
  };

  const styleVariant: defaultColorType = variants[variant];
  return (
    <button
      type="button"
      onClick={(): void => sendReaction()}
      className={`text-[0.9rem] py-[10px] px-[15px] cursor-pointer bg-transparent transition-all duration-150 border-2 rounded-xl ${
        styleVariant.normal
      } ${isSelected ? styleVariant.select : styleVariant.unSelect}`}>
      {children}
    </button>
  );
};
