import React from 'react';
import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="p-3 border-b">
      <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2">
        <Search size={20} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search or start new chat"
          className="bg-transparent flex-1 outline-none text-sm"
        />
      </div>
    </div>
  );
}