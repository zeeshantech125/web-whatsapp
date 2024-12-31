import React from 'react';
import { Settings2 } from 'lucide-react';
import { Avatar } from '../../Avatar';

export function SidebarHeader() {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 border-b">
      <div className="flex items-center gap-3">
        <Avatar size={40} />
        <span className="font-medium">My Chats</span>
      </div>
      <button className="p-2 hover:bg-gray-200 rounded-full">
        <Settings2 size={20} className="text-gray-600" />
      </button>
    </div>
  );
}