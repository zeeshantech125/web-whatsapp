import React from 'react';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { AuthButtons } from './AuthButtons';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Logo />
        <Navigation />
        <AuthButtons />
      </div>
    </header>
  );
}