import { emojis } from '@/features/Profile/data/profile';
import { StorageAccessNameEnum, StorageService } from '@/services/StorageService';
import { shuffleArray } from '@/utils/generators';

export class ProfileService {
  private static generateRandomProfileEmoji(): string {
    return shuffleArray(emojis)[0];
  }

  private static updateEmoji(emoji: string): string {
    StorageService.setItem(StorageAccessNameEnum.Profile, emoji);

    return emoji;
  }

  public static getUserOrInitialize(): string {
    const itemReturned: string | undefined = StorageService.getItem(StorageAccessNameEnum.Profile);
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
