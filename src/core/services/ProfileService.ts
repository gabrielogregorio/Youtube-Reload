import { emojis } from '@/data/profile';
import { generateRandomPositiveZeroOrNegative } from '@/utils/generators';

const profileStorage: string = 'profile';

export class ProfileService {
  private static generateRandomProfileEmoji(): string {
    return [...emojis].sort((): number => generateRandomPositiveZeroOrNegative())[0];
  }

  private static updateEmoji(emoji: string): string {
    localStorage.setItem(profileStorage, emoji);

    return emoji;
  }

  public static getUserOrInitialize(): string {
    const itemReturned: string | undefined = localStorage.getItem(profileStorage) || undefined;
    if (itemReturned) {
      return itemReturned;
    }

    const generateEmoji: string = this.generateRandomProfileEmoji();
    this.updateEmoji(generateEmoji);

    return generateEmoji;
  }

  public static generateNewEmojiProfile(): string {
    return this.updateEmoji(this.generateRandomProfileEmoji());
  }
}
