interface IReactButtonProps {
  isSelected: boolean;
  text: string;
  variant: 'blue' | 'red';
  sendReaction: () => void;
}

interface IDefaultColorType {
  select: string;
  unSelect: string;
  normal: string;
}

export const ReactButton = ({ isSelected, text, variant, sendReaction }: IReactButtonProps) => {
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
      onClick={() => sendReaction()}
      className={`text-[0.9rem] py-[10px] px-[15px] cursor-pointer bg-transparent transition-all duration-150 border-2 rounded-xl select-none ${
        styleVariant.normal
      } ${isSelected ? styleVariant.select : styleVariant.unSelect}`}>
      {text}
    </button>
  );
};
