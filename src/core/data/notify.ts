import type { INotifyApi } from '@/contracts/notify';
import { DateReload } from '@/utils/date';

export const mockNotify: INotifyApi[] = [
  {
    id: 1,
    title: 'Cria atalhos na aba lateral',
    date: DateReload.createDateAsSaoPauloTimeZoneAndReturnGmt({
      day: 17,
      month1to12: 12,
      year: 2022,
      hours1to24: 14,
      minutes: 30,
      seconds: 0,
    }),
    emoji: '📱',
  },
  {
    id: 2,
    title: 'Novas Músicas',
    date: DateReload.createDateAsSaoPauloTimeZoneAndReturnGmt({
      day: 22,
      month1to12: 12,
      year: 2022,
      hours1to24: 22,
      minutes: 30,
      seconds: 0,
    }),
    emoji: '🎶',
  },

  {
    id: 3,
    title: 'Cria sistema de filtros na Aba All',
    date: DateReload.createDateAsSaoPauloTimeZoneAndReturnGmt({
      day: 24,
      month1to12: 12,
      year: 2022,
      hours1to24: 13,
      minutes: 20,
      seconds: 0,
    }),
    emoji: '🔎',
  },
  {
    id: 4,
    title: 'Cria Sistema de notificações',
    date: DateReload.createDateAsSaoPauloTimeZoneAndReturnGmt({
      day: 26,
      month1to12: 12,
      year: 2022,
      hours1to24: 23,
      minutes: 2,
      seconds: 0,
    }),
    emoji: '💡',
  },

  {
    id: 5,
    title: 'Cria sistema de datas especiais',
    date: DateReload.createDateAsSaoPauloTimeZoneAndReturnGmt({
      day: 25,
      month1to12: 12,
      year: 2022,
      hours1to24: 22,
      minutes: 10,
      seconds: 0,
    }),
    emoji: '🎅',
  },
  {
    id: 6,
    title: 'Cria sistema de frases especiais',
    date: DateReload.createDateAsSaoPauloTimeZoneAndReturnGmt({
      day: 27,
      month1to12: 12,
      year: 2022,
      hours1to24: 13,
      minutes: 21,
      seconds: 0,
    }),
    emoji: '🍀',
  },
];
