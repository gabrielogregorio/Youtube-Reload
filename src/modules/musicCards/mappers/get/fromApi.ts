import { createStringToSearch } from '@/utils/normalizers';
import { LogService } from '@/services/log/LogService';
import { parseFunction } from '@/modules/musicCards/utils/parseFunction';
import { CategoryEnum } from '@/modules/musicCards/data/data.reload';

const CEM_PERCENT: number = 100;
const QUANTITY_FACTORS: number = 2;

export interface IMusicApi {
  year: number;
  artist: string;
  id: string;
  title: string;
  durationInSeconds: number;
  category: CategoryEnum;
  views: string;
  minuteToSkipIntroduction?: number;
  comments: string;
  likes: string;
}

export class MusicFromApiMapper {
  public readonly year: number;

  public readonly artist: string;

  public readonly id: string;

  public readonly title: string;

  public readonly durationInSeconds: number;

  public readonly category: CategoryEnum;

  public readonly minuteToSkipIntroduction?: number;

  public readonly percentViewsLikesComments: number;

  public readonly percentLikesComments: number;

  public readonly searchStringNormalized: string;

  public readonly views: {
    total: number;
    tag: string;
  };

  public readonly comments: {
    total: number;
    tag: string;
  };

  public readonly likes: {
    total: number;
    tag: string;
  };

  public constructor(item?: IMusicApi) {
    const stringIsCategoryEnum = (some: string): some is CategoryEnum => {
      return Object.keys(CategoryEnum).includes(some);
    };

    const categoryTest: string = item?.category || '';

    const category: CategoryEnum = stringIsCategoryEnum(categoryTest) ? categoryTest : CategoryEnum.error;

    const views: number = parseFunction(item?.views || '') || 1;
    const comments: number = parseFunction(item?.comments || '') || 1;
    const likes: number = parseFunction(item?.likes || '') || 1;

    const calculatePercentage = (): number => {
      try {
        const percentLikes: number = (likes * CEM_PERCENT) / views;
        const percentComments: number = (comments * CEM_PERCENT) / views;

        return Number((percentLikes + percentComments / QUANTITY_FACTORS).toFixed(QUANTITY_FACTORS));
      } catch (error: unknown) {
        LogService.logMessage(`Error on calculate percentage views=${views}, comments=${comments},likes=${likes}`);
        LogService.logError(error);
        return 0;
      }
    };

    const year: number = Number(item?.year) || 0;
    const artist: string = String(item?.artist || '');
    const title: string = String(item?.title || '');

    this.year = year;
    this.artist = artist;
    this.id = String(item?.id || '');
    this.title = title;
    this.durationInSeconds = Number(item?.durationInSeconds) || 0;
    this.category = category;
    this.percentViewsLikesComments = calculatePercentage();
    this.percentLikesComments = Number(((comments * CEM_PERCENT) / likes).toFixed(QUANTITY_FACTORS));
    this.searchStringNormalized = createStringToSearch(`${year} ${artist} ${title}`);
    this.minuteToSkipIntroduction = item?.minuteToSkipIntroduction;
    this.views = {
      total: views,
      tag: String(item?.views || '').toString(),
    };
    this.comments = {
      total: comments,
      tag: String(item?.comments || '').toString(),
    };
    this.likes = {
      total: likes,
      tag: String(item?.likes || '').toString(),
    };
  }
}

export interface IMusicWithTransformation extends MusicFromApiMapper {
  img: string;
  url: string;
}
