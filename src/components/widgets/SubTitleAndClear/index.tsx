import { ClearPreferences } from '@/widgets/clearPreferences';
import type { ReactElement } from 'react';

export const SubTitleAndClear = (): ReactElement => {
  return (
    <section className="w-full mb-6">
      <ClearPreferences />
    </section>
  );
};
