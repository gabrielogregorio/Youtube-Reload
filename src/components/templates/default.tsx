import type { ReactElement } from 'react';

interface ITemplateDefaultProps {
  readonly children: Readonly<ReactElement>;
}

export const TemplateDefault = ({ children }: Readonly<ITemplateDefaultProps>): ReactElement => {
  return (
    <div className="mt-[60px] mb-96" id="base">
      <main>{children}</main>
    </div>
  );
};
