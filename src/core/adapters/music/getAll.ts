import type { IMusic } from '@/contracts/musics';
import { CategoryEnum } from '@/data/data.reload';

interface IPrepare {
  id: number;
}

interface IPrepareOutput {
  id: number;
}

interface IResponseApi {
  readonly year?: number;
  readonly artist?: string;
  readonly id?: string;
  readonly title?: string;
  readonly durationInSeconds?: number;
  readonly category?: string;
  readonly views?: string;
  readonly minuteToSkipIntroduction?: number;
  readonly comments?: string;
  readonly likes?: string;
}

const stringIsCategoryEnum = (some: string): some is CategoryEnum => {
  return Object.keys(CategoryEnum).includes(some);
};

export class MusicGetAllAdapter {
  public static prepare(body: Readonly<IPrepare>): IPrepareOutput {
    return {
      id: body.id,
    };
  }

  public static convert(response?: Readonly<IResponseApi[]>): IMusic[] {
    const music: IMusic[] = [];

    response?.forEach((item?: IResponseApi) => {
      const categoryTest: string = item?.category || '';

      const category: CategoryEnum = stringIsCategoryEnum(categoryTest) ? categoryTest : CategoryEnum.error;

      music.push({
        year: Number(item?.year) || 0,
        artist: String(item?.artist || ''),
        id: String(item?.id || ''),
        title: String(item?.title || ''),
        durationInSeconds: Number(item?.durationInSeconds) || 0,
        category,
        views: String(item?.views || ''),
        minuteToSkipIntroduction: item?.minuteToSkipIntroduction,
        comments: String(item?.comments || ''),
        likes: String(item?.likes || ''),
      });
    });

    return music;
  }
}
