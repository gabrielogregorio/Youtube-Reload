import { useOutsideClick } from '@/hooks/useOutsideClick';
import type { NotifyFromApiMapper } from '@/mappers/notify/fromApi';
import { useRef } from 'react';

interface IProps {
  closeNotify: () => void;
  notifyIsOpen: boolean;
  notifications: NotifyFromApiMapper[];
  viewedNotificationIds: number[];
}

export const NotifyItems = ({ closeNotify, notifyIsOpen, notifications, viewedNotificationIds }: IProps) => {
  const refComponent = useRef<HTMLDivElement>(null);
  useOutsideClick(refComponent, () => {
    closeNotify();
  });

  if (!notifyIsOpen) {
    return <div />;
  }

  return (
    <div
      className="absolute right-10 top-3 z-50 hidden md:flex flex-col rounded-md h-96 px-3 py-3 w-96 bg-dark-dark shadow-md"
      ref={refComponent}>
      <div className="text-base mb-1 select-none">Notificações</div>
      <div className="border-b border-gray-500" />

      <div className="overflow-y-scroll flex-1 scrollbar-inverse w-full">
        {notifications.map((notification) => {
          return (
            <div className="hover:bg-dark cursor-pointer flex items-center justify-center py-2 px-2 transition-all duration-150 select-none">
              <div className="h-10 text-2xl flex items-center justify-center aspect-square mr-2">
                {notification.emoji}
              </div>
              <div className="flex-1">
                <div className="text-sm hover:text-blue">{notification.title}</div>
                <div className="text-[0.7rem] text-gray-400">{notification.date}</div>
              </div>

              {!viewedNotificationIds.includes(notification.id) ? (
                <div className="flex items-center justify-center ml-2">
                  <div className="p-1 bg-red rounded-full" />
                </div>
              ) : undefined}
            </div>
          );
        })}
      </div>
    </div>
  );
};
