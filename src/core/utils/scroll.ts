export const moveToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
