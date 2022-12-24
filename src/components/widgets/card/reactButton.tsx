import type { ReactElement } from 'react';

interface IReactButtonProps {
  readonly isSelected: boolean;
  readonly text: string;
  readonly variant: 'blue' | 'red';
  readonly sendReaction: () => void;
}

interface IDefaultColorType {
  readonly select: string;
  readonly unSelect: string;
  readonly normal: string;
}

export const ReactButton = ({ isSelected, text, variant, sendReaction }: Readonly<IReactButtonProps>): ReactElement => {
  const variants: { [key in IReactButtonProps['variant']]: IDefaultColorType } = {
    blue: {
      select: 'bg-blue text-white',
      unSelect: 'text-blue bg-dark-dark',
      normal: 'hover:scale-95 hover:text-white hover:bg-blue border-blue',
    },
    red: {
      select: 'bg-red-light text-white',
      unSelect: 'text-red-light bg-dark-dark',
      normal: 'hover:scale-105 hover:text-white hover:bg-red-light border-red-light',
    },
  };

  const styleVariant: IDefaultColorType = variants[variant];
  return (
    <button
      type="button"
      onClick={(): void => sendReaction()}
      className={`text-[0.9rem] py-[10px] px-[15px] cursor-pointer bg-transparent transition-all duration-150 border-2 rounded-xl ${
        styleVariant.normal
      } ${isSelected ? styleVariant.select : styleVariant.unSelect}`}>
      {text}
    </button>
  );
};
