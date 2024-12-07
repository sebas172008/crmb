import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
  change: number;
  iconBgColor?: string;
}

export function StatCard({ icon: Icon, title, value, change, iconBgColor = 'bg-indigo-100' }: StatCardProps) {
  const isPositive = change > 0;
  
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-lg ${iconBgColor}`}>
          <Icon className="w-6 h-6 text-indigo-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
          <div className={`flex items-center gap-1 mt-1 ${
            isPositive ? 'text-emerald-600' : 'text-red-600'
          }`}>
            <span className="text-sm">
              {isPositive ? '↑' : '↓'} {Math.abs(change)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}