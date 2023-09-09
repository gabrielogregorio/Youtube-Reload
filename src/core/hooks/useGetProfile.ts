import { ProfileService } from '@/services/ProfileService';
import { useEffect, useState } from 'react';

export const useGetProfile = () => {
  const [emoji, setEmoji] = useState<string>('');

  useEffect(() => {
    setEmoji(ProfileService.getUserOrInitialize());
  }, []);

  const handleUpdateEmoji = () => {
    setEmoji(ProfileService.generateNewEmojiProfile());
  };

  return {
    emoji,
    handleUpdateEmoji,
  };
};
