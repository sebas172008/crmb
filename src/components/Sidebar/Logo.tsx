import React from 'react';
import { LayoutGrid } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2 px-4 py-3">
      <div className="p-2 bg-indigo-100 rounded-lg">
        <LayoutGrid className="w-5 h-5 text-indigo-600" />
      </div>
      <span className="text-xl font-semibold">Clario</span>
      <button className="ml-auto">
        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
}