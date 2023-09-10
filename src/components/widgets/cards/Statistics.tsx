import { ReactNode } from 'react';

interface IStatisticsProps {
  children: ReactNode;
  icon: ReactNode;
}

export const Statistics = ({ children, icon }: IStatisticsProps) => {
  return (
    <div className="flex items-center justify-start">
      {icon}
      <div className="text-sm font-mono uppercase">{children}</div>
    </div>
  );
};
