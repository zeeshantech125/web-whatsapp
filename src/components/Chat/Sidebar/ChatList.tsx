import React from 'react';
import { ChatListItem } from './ChatListItem';
import { chatGroups } from '../../../constants/chatGroups';

interface ChatListProps {
  activeChat: string;
  onChatSelect: (id: string) => void;
}

export function ChatList({ activeChat, onChatSelect }: ChatListProps) {
  return (
    <div className="flex-1 overflow-y-auto">
      {chatGroups.map((chat) => (
        <ChatListItem
          key={chat.id}
          name={chat.name}
          lastMessage={chat.lastMessage}
          time={chat.time}
          unreadCount={chat.unreadCount}
          avatar={chat.avatar}
          isActive={activeChat === chat.id}
          onClick={() => onChatSelect(chat.id)}
        />
      ))}
    </div>
  );
}