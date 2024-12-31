import React from 'react';
import { UserCircle2 } from 'lucide-react';

interface AvatarProps {
  src?: string;
  size?: number;
}

export function Avatar({ src, size = 64 }: AvatarProps) {
  if (!src) {
    return <UserCircle2 size={size} className="text-gray-400" />;
  }

  return (
    <img
      src={src}
      alt="Profile"
      className="rounded-full object-cover"
      style={{ width: size, height: size }}
    />
  );
}