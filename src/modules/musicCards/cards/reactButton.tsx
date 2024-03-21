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
      select: 'bg-blue-cerulean text-white-ultra-light',
      unSelect: 'text-blue-cerulean bg-dark-charcoal',
      normal: 'hover:scale-95 hover:text-white-ultra-light hover:bg-blue-cerulean border-blue-cerulean',
    },
    red: {
      select: 'bg-red-soft text-white-ultra-light',
      unSelect: 'text-red-soft bg-dark-charcoal',
      normal: 'hover:scale-105 hover:text-white-ultra-light hover:bg-red-soft border-red-soft',
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
