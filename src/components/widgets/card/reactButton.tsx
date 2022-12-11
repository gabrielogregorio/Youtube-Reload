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
      select: 'bg-blue text-[#ffffff]',
      unSelect: 'text-blue bg-[#ffffff]',
      normal: 'hover:text-[#ffffff] hover:bg-blue border-blue',
    },
    red: {
      select: 'bg-red text-[#ffffff]',
      unSelect: 'text-red bg-[#ffffff]',
      normal: 'hover:text-[#ffffff] hover:bg-red border-red',
    },
  };

  const styleVariant: defaultColorType = variants[variant];
  return (
    <button
      type="button"
      onClick={(): void => sendReaction()}
      className={`text-[0.9rem] py-[10px] px-[15px] cursor-pointer bg-transparent transition-all duration-150 border-2 ${
        styleVariant.normal
      } ${isSelected ? styleVariant.select : styleVariant.unSelect}`}>
      {children}
    </button>
  );
};
