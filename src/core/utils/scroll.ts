export const moveToTop = (ignoreUp: number = 0): void => {
  window.scrollTo({
    top: ignoreUp,
    behavior: 'smooth',
  });
};
