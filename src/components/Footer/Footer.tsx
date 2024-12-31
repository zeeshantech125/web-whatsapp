import React from 'react';
import { FooterSection } from './FooterSection';
import { Logo } from '../Header/Logo';

const footerSections = [
  {
    title: 'What we do',
    links: [
      { label: 'Features', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Security', href: '#' },
      { label: 'For Business', href: '#' },
    ],
  },
  {
    title: 'Who we are',
    links: [
      { label: 'About us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Brand Center', href: '#' },
      { label: 'Privacy', href: '#' },
    ],
  },
  {
    title: 'Use WhatsApp',
    links: [
      { label: 'Android', href: '#' },
      { label: 'iPhone', href: '#' },
      { label: 'Mac/PC', href: '#' },
      { label: 'WhatsApp Web', href: '#' },
    ],
  },
  {
    title: 'Need help?',
    links: [
      { label: 'Contact Us', href: '#' },
      { label: 'Help Center', href: '#' },
      { label: 'Security Advisories', href: '#' },
      { label: 'Apps', href: '#' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <FooterSection key={section.title} {...section} />
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <Logo />
          <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors">
            Download
          </button>
        </div>
      </div>
    </footer>
  );
}