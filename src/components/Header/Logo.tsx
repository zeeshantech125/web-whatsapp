import React from 'react';
import { MessageSquare } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <MessageSquare className="text-green-500" size={32} />
      <span className="text-xl font-semibold">WhatsApp</span>
    </div>
  );
}