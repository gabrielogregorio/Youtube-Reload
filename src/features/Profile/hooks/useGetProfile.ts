import { ProfileService } from '@/features/Profile/services/ProfileService';
import { useOnMount } from '@/modules/musicCards/hooks/useOnMount';
import { useState } from 'react';

export const useGetProfile = () => {
  const [emoji, setEmoji] = useState<string>('');

  useOnMount(() => {
    setEmoji(ProfileService.getUserOrInitialize());
  });

  const handleUpdateEmoji = () => {
    setEmoji(ProfileService.generateNewEmojiProfile());
  };

  return {
    emoji,
    handleUpdateEmoji,
  };
};
