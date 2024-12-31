import React from 'react';
import { Message } from '../types';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.sender === 'bot';
  
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`max-w-[70%] rounded-lg p-3 ${
        isBot ? 'bg-white' : 'bg-green-500 text-white'
      }`}>
        <p className="text-sm">{message.text}</p>
        {message.image && (
          <img 
            src={message.image} 
            alt="Message attachment" 
            className="mt-2 rounded-lg max-h-48 w-full object-cover"
          />
        )}
        {message.link && (
          <a 
            href={message.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`block mt-2 text-sm ${isBot ? 'text-blue-500' : 'text-white underline'}`}
          >
            {message.link}
          </a>
        )}
        <span className="text-xs opacity-70 block mt-1">
          {new Date(message.timestamp).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
}