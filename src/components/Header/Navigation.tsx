import React from 'react';

const navItems = [
  { label: 'Features', href: '#' },
  { label: 'Privacy', href: '#' },
  { label: 'Help Center', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'For Business', href: '#' },
  { label: 'Apps', href: '#' },
];

export function Navigation() {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}