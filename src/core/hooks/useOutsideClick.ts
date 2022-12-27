import type { RefObject } from 'react';
import { useEffect, useState } from 'react';

export const useOutsideClick = (ref: RefObject<HTMLDivElement>): { clickedOutside: boolean } => {
  const [clickedOutside, setClickedOutside] = useState<boolean>(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickOutside = (event: any): void => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      const referencesContainTarget = (): boolean => !ref.current?.contains(event.target);
      const clickedOutsideReference: boolean = (ref.current && referencesContainTarget()) || false;

      setClickedOutside(clickedOutsideReference);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return (): void => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref.current]);

  return { clickedOutside };
};
