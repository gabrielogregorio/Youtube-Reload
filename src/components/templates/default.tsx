import type { ReactElement, ReactNode } from 'react';

interface ITemplateDefaultProps {
  children: ReactNode;
}

export const TemplateDefault = ({ children }: ITemplateDefaultProps): ReactElement => {
  return (
    <div className="mt-[60px] mb-96" id="base">
      <main>{children}</main>
    </div>
  );
};
