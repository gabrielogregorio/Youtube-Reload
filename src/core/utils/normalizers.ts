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
