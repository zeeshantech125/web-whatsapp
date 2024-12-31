import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { ChatMessage } from '../components/ChatMessage';
import { ChatInput } from '../components/ChatInput';
import { SettingsModal } from '../components/SettingsModal';
import { Message, Settings } from '../types';
import { Avatar } from '../components/Avatar';
import { Sidebar } from '../components/Chat/Sidebar/Sidebar';
import { PROFILE } from '../constants/profile';
import { initialMessages } from '../constants/initialMessages';

interface ChatPageProps {
  onBack: () => void;
}

const DEFAULT_SETTINGS: Settings = {
  links: [
    'https://example.com',
    'https://example.com/',
    'https://example.com/'
  ],
  images: [
    'https://sb1pzcuxlef-qwte--5173--c8c182a3.local-credentialless.webcontainer.io/Very%20nice%20%F0%9F%A5%B0%E2%9D%A4%EF%B8%8F.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qhyPtvYPIVVOJOW6S7DJR6NMBhq4-MDtUg&s',
    'https://sb1pzcuxlef-qwte--5173--c8c182a3.local-credentialless.webcontainer.io/Very%20nice%20%F0%9F%A5%B0%E2%9D%A4%EF%B8%8F.png'
  ]
};

export function ChatPage({ onBack }: ChatPageProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [showSettings, setShowSettings] = useState(false);
  const [activeChat, setActiveChat] = useState('1');

  const getRandomItem = <T,>(array: T[]): T => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const handleSendMessage = (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: `This is my private video

      `,
      sender: 'bot',
      timestamp: new Date(),
      image: getRandomItem(settings.images),
      link: getRandomItem(settings.links)
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar activeChat={activeChat} onChatSelect={setActiveChat} />
      
      <div className="flex-1 flex flex-col w-full md:w-auto">
        {/* Chat Header */}
        <div className="bg-gray-50 border-b px-4 py-3 flex items-center gap-4">
          <button 
            onClick={onBack} 
            className="p-2 hover:bg-gray-200 rounded-full md:ml-0 ml-8"
          >
            <ArrowLeft size={20} />
          </button>
          <Avatar src={PROFILE.avatar} size={40} />
          <div className="flex-1 min-w-0">
            <h2 className="font-semibold truncate">{PROFILE.name}</h2>
            <p className="text-sm text-gray-500">{PROFILE.status}</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#E8ECE9]">
          {messages.map(message => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>

        {/* Input */}
        <ChatInput onSendMessage={handleSendMessage} />
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <SettingsModal
          settings={settings}
          onClose={() => setShowSettings(false)}
          onSave={setSettings}
        />
      )}
    </div>
  );
}