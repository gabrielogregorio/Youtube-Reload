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
    <section className={tailwindMerge('ml-2 w-14 h-full flex items-center justify-center', className)} aria-label="Perfil">
      <button
        type="button"
        aria-label="Trocar foto de perfil"
        onClick={handleUpdateEmojiProfile}
        className="flex items-center justify-center h-6 w-6 hover:h-8 hover:w-8 rounded-full text-xl cursor-pointer select-none bg-dark-dark hover:bg-dark-grey transition-all duration-150">
        {emoji}
      </button>
    </section>
  );
};
