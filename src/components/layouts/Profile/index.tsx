import { LogService } from '@/services/log/LogService';
import { useGetProfile } from './useGetProfile';

export const Profile = () => {
  const { emoji, handleUpdateEmoji } = useGetProfile();

  const handleUpdateEmojiProfile = () => {
    LogService.addBreadcrumb({ type: 'click', level: 'info', message: 'update emoji' });
    handleUpdateEmoji();
  };

  return (
    <div className="ml-2 w-14 h-full flex items-center justify-center">
      <button
        title="Trocar de emoji"
        aria-label="Trocar foto de perfil"
        type="button"
        onClick={handleUpdateEmojiProfile}
        className="flex items-center justify-center h-6 w-6 hover:h-8 hover:w-8 rounded-full text-xl cursor-pointer select-none hover:bg-dark-light transition-all duration-150">
        {emoji}
      </button>
    </div>
  );
};
