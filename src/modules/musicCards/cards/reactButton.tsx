import { tailwindMerge } from '@/facades/tailwindMerge';

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
      select: 'bg-blue-deep text-white border-blue-deep hover:text-white',
      unSelect: 'text-blue-cerulean bg-dark-charcoal hover:text-white',
      normal: 'hover:bg-blue-deep hover:border-blue-deep border-blue-cerulean',
    },
    red: {
      select: 'bg-red-bright2 text-white border-red-bright2 hover:text-white',
      unSelect: 'text-red-soft bg-dark-charcoal hover:text-white',
      normal: 'text-white hover:bg-red-bright2 hover:border-red-bright2 border-red-soft',
    },
  };

  const styleVariant: IDefaultColorType = variants[variant];
  return (
    <button
      type="button"
      onClick={() => sendReaction()}
      className={tailwindMerge(
        `text-[0.9rem] py-[10px] font-bold px-[15px] cursor-pointer bg-transparent transition-all duration-150 border-2 rounded-xl select-none ${
          styleVariant.normal
        } ${isSelected ? styleVariant.select : styleVariant.unSelect}`,
      )}>
      {text}
    </button>
  );
};
