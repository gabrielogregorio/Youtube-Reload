import type { IMusic, IMusicApi } from '@/contracts/musics';
import { CategoryEnum } from '@/data/data.reload';
import { createStringToSearch } from '@/utils/normalizers';
import { parseFunction } from '@/utils/parseFunction';

interface IPrepare {
  id: number;
}

interface IPrepareOutput {
  id: number;
}

const stringIsCategoryEnum = (some: string): some is CategoryEnum => {
  return Object.keys(CategoryEnum).includes(some);
};

const CEM_PERCENT: number = 100;
const QUANTITY_FACTORS: number = 2;

export class MusicGetAllAdapter {
  public static prepare(body: IPrepare): IPrepareOutput {
    return {
      id: body.id,
    };
  }

  public static convert(response?: IMusicApi[]): IMusic[] {
    const music: IMusic[] = [];

    response?.forEach((item?: IMusicApi) => {
      const categoryTest: string = item?.category || '';

      const category: CategoryEnum = stringIsCategoryEnum(categoryTest) ? categoryTest : CategoryEnum.error;

      const views: number = parseFunction(item?.views || '') || 0;
      const comments: number = parseFunction(item?.comments || '') || 0;
      const likes: number = parseFunction(item?.likes || '') || 0;

      const calculatePercentage = (): number => {
        try {
          const percentLikes: number = (likes * CEM_PERCENT) / views;
          const percentComments: number = (comments * CEM_PERCENT) / views;

          return Number((percentLikes + percentComments / QUANTITY_FACTORS).toFixed(QUANTITY_FACTORS));
        } catch (error: unknown) {
          return 0;
        }
      };

      const year: number = Number(item?.year) || 0;
      const artist: string = String(item?.artist || '');
      const title: string = String(item?.title || '');

      music.push({
        year,
        artist,
        id: String(item?.id || ''),
        title,
        durationInSeconds: Number(item?.durationInSeconds) || 0,
        category,

        views,
        viewsAsString: String(item?.views || '').toString(),

        minuteToSkipIntroduction: item?.minuteToSkipIntroduction,
        comments,
        commentsAsString: String(item?.comments || '').toString(),

        likes,
        likesAsString: String(item?.likes || '').toString(),

        approval: calculatePercentage(),

        approvalComments: Number(((comments * CEM_PERCENT) / likes).toFixed(QUANTITY_FACTORS)),

        searchStringNormalized: createStringToSearch(`${year} ${artist} ${title}`),
      });
    });

    return music;
  }
}
