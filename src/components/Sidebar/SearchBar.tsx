import React from 'react';
import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="px-4 py-2">
      <div className="relative">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <kbd className="absolute right-3 top-2.5 px-1.5 py-0.5 text-xs text-gray-400 bg-white border border-gray-200 rounded">
          K
        </kbd>
      </div>
    </div>
  );
}