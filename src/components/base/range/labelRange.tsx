import type { ReactElement } from 'react';

interface ILabelRangeProps {
  icon: ReactElement;
  text: string;
}

export const LabelRange = ({ icon, text }: ILabelRangeProps) => {
  return (
    <span className="flex items-center text-[0.7rem] uppercase">
      {icon}
      {text}
    </span>
  );
};
