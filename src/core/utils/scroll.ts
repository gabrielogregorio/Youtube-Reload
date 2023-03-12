const timeToLoadAnyEventsInMs: number = 100;
export const HEIGHT_IN_PX_TO_IGNORE_HEADER: number = 350;

export const moveToTop = (ignoreUp: number = 0): void => {
  setTimeout(() => {
    window.scrollTo({
      top: ignoreUp,
      behavior: 'smooth',
    });
  }, timeToLoadAnyEventsInMs);
};
