import React from 'react';
import { HelpCircle, MoreHorizontal } from 'lucide-react';

const regions = [
  {
    name: 'United States',
    flag: '🇺🇸',
    value: 19800,
    percentage: 55,
    industry: 'Electronics and Technology',
  },
  {
    name: 'Australia',
    flag: '🇦🇺',
    value: 2320,
    percentage: 20,
    industry: 'Fashion, Electronics, and Technology',
  },
  {
    name: 'Philippines',
    flag: '🇵🇭',
    value: 9800,
    percentage: 25,
    industry: 'Fashion and Computer',
  },
];

export function RegionDistribution() {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">Region Distribution</h2>
          <HelpCircle className="w-4 h-4 text-gray-400" />
        </div>
        <button>
          <MoreHorizontal className="w-5 h-5 text-gray-400" />
        </button>
      </div>
      
      <div className="space-y-4">
        {regions.map((region) => (
          <div key={region.name} className="flex items-center gap-4">
            <span className="text-2xl">{region.flag}</span>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <p className="font-medium">{region.name}</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">{region.value.toLocaleString()}</span>
                  <span className="text-sm text-gray-400">{region.percentage}%</span>
                </div>
              </div>
              <p className="text-sm text-gray-500">{region.industry}</p>
              <div className="mt-2 bg-gray-100 rounded-full h-2">
                <div
                  className="bg-indigo-500 h-2 rounded-full"
                  style={{ width: `${region.percentage}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}