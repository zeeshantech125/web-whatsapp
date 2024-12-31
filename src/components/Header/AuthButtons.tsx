import React from 'react';

export function AuthButtons() {
  return (
    <div className="flex items-center gap-4">
      <button className="text-gray-700 hover:text-gray-900">
        Log in
      </button>
      <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors">
        Download
      </button>
    </div>
  );
}