import { ClearPreferences } from '@/widgets/clearPreferences';
import type { ReactElement } from 'react';

export const SubTitleAndClear = (): ReactElement => {
  return (
    <section className="w-full mb-6">
      <h2 className="max-w-[620px] w-full m-auto text-center py-[40px] px-[2%] text-base md:text-[1.2rem]">
        Gere playlist com músicas que você nunca ouviu, sem nenhum algoritmo de IA.
      </h2>

      <ClearPreferences />
    </section>
  );
};
