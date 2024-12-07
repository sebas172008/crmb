import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MenuItemProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
}

export function MenuItem({ icon: Icon, label, isActive }: MenuItemProps) {
  return (
    <li>
      <a
        href="#"
        className={`flex items-center gap-3 px-4 py-2 text-sm rounded-lg ${
          isActive
            ? 'text-indigo-600 bg-indigo-50 font-medium'
            : 'text-gray-600 hover:bg-gray-50'
        }`}
      >
        <Icon className="w-5 h-5" />
        {label}
      </a>
    </li>
  );
}