const timeToLoadAnyEventsInMs = 100;
export const HEIGHT_IN_PX_TO_IGNORE_HEADER = 350;

export const moveToTop = (ignoreUp: number = 0) => {
  setTimeout(() => {
    window.scrollTo({
      top: ignoreUp,
      behavior: 'smooth',
    });
  }, timeToLoadAnyEventsInMs);
};
