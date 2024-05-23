import React from 'react';

export const runAxe = (ReactDOM: unknown) => {
  if (process.env.NODE_ENV !== 'production') {
    const DELAY_IN_MS_TO_RUN_AXE = 1000;

    // @ts-ignore
    import('@axe-core/react')
      .then((axe) => {
        // @ts-ignore
        axe.default(React, ReactDOM, DELAY_IN_MS_TO_RUN_AXE);

        // eslint-disable-next-line no-console
        console.log('AXE DONE!');
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error on run axe', error);
      });

    // eslint-disable-next-line spellcheck/spell-checker, no-magic-numbers, @typescript-eslint/no-unsafe-call
  }
};
