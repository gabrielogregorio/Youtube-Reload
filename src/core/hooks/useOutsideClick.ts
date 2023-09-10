import { RefObject, useEffect, useState } from 'react';

export const useOutsideClick = (
  ref: RefObject<HTMLDivElement>,
  onOutsideClick: () => void = () => {},
): { clickedOutside: boolean } => {
  const [clickedOutside, setClickedOutside] = useState<boolean>(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickOutside = (event: any): void => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      const referencesContainTarget = (): boolean => !ref.current?.contains(event.target);
      const clickedOutsideReference: boolean = (ref.current && referencesContainTarget()) || false;

      if (clickedOutsideReference) {
        onOutsideClick();
      }
      setClickedOutside(clickedOutsideReference);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref.current]);

  return { clickedOutside };
};
