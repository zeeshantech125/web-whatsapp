import React from 'react';
import { Avatar } from '../../Avatar';

interface ChatListItemProps {
  name: string;
  lastMessage: string;
  time: string;
  unreadCount?: number;
  avatar?: string;
  isActive: boolean;
  onClick: () => void;
}

export function ChatListItem({
  name,
  lastMessage,
  time,
  unreadCount,
  avatar,
  isActive,
  onClick,
}: ChatListItemProps) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100 ${
        isActive ? 'bg-gray-100' : ''
      }`}
    >
      <Avatar src={avatar} size={48} />
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-gray-900 truncate">{name}</h3>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
        <p className="text-sm text-gray-500 truncate">{lastMessage}</p>
      </div>
      {unreadCount && (
        <div className="bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {unreadCount}
        </div>
      )}
    </div>
  );
}