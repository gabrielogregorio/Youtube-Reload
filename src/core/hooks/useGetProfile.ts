import { ProfileService } from '@/services/ProfileService';
import { useEffect, useState } from 'react';

interface IUseGetProfileOutput {
  emoji: string;
  handleUpdateEmoji: () => void;
}

export const useGetProfile = (): IUseGetProfileOutput => {
  const [emoji, setEmoji] = useState<string>('');

  useEffect(() => {
    setEmoji(ProfileService.getUserOrInitialize());
  }, []);

  const handleUpdateEmoji = (): void => {
    setEmoji(ProfileService.generateNewEmojiProfile());
  };

  return {
    emoji,
    handleUpdateEmoji,
  };
};
