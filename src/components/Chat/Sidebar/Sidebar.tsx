import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { SidebarHeader } from './SidebarHeader';
import { SearchBar } from './SearchBar';
import { ChatList } from './ChatList';

interface SidebarProps {
  activeChat: string;
  onChatSelect: (id: string) => void;
}

export function Sidebar({ activeChat, onChatSelect }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-full shadow-lg"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div className={`
        fixed md:relative
        w-[280px] md:w-[350px]
        h-full
        bg-white
        border-r
        transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        z-40
      `}>
        <SidebarHeader />
        <SearchBar />
        <ChatList 
          activeChat={activeChat} 
          onChatSelect={(id) => {
            onChatSelect(id);
            setIsOpen(false);
          }} 
        />
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}