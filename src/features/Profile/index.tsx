import { LogService } from '@/services/log/LogService';
import { tailwindMerge } from '@/facades/tailwindMerge';
import { useGetProfile } from './hooks/useGetProfile';

interface IProps {
  className?: string;
}

export const Profile = ({ className = undefined }: IProps) => {
  const { emoji, handleUpdateEmoji } = useGetProfile();

  const handleUpdateEmojiProfile = () => {
    LogService.addBreadcrumb({ type: 'click', level: 'info', message: 'update emoji' });
    handleUpdateEmoji();
  };

  return (
    <div className={tailwindMerge('ml-2 w-14 h-full flex items-center justify-center', className)} aria-label="User profile">
      <button
        title="Trocar de emoji"
        aria-label="Trocar foto de perfil"
        type="button"
        onClick={handleUpdateEmojiProfile}
        className="flex items-center justify-center h-6 w-6 hover:h-8 hover:w-8 rounded-full text-xl cursor-pointer select-none hover:bg-dark-grey transition-all duration-150">
        {emoji}
      </button>
    </div>
  );
};
