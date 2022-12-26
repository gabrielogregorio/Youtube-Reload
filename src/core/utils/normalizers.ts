const removeSpecialAccents = (item?: string): string =>
  item
    ?.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') || '';

export const createStringToSearch = (item: string): string => {
  return (
    removeSpecialAccents(item)
      .replace(/\s{1,}/g, '')
      .replace(/[^a-zA-Z0-9]{1,}/g, '') || ''
  );
};

export const fillIfNecessary = (item: number): string => {
  const NUMBER_START_TWO_POSITIONS: number = 10;
  if (item < NUMBER_START_TWO_POSITIONS) {
    return `0${item}`;
  }

  return item.toString();
};
