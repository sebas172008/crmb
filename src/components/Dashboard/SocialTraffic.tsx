import React from 'react';
import { HelpCircle, MoreHorizontal } from 'lucide-react';

const socialData = [
  { platform: 'LinkedIn', percentage: 47.5 },
  { platform: 'Twitter', percentage: 88.5 },
];

export function SocialTraffic() {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">Social Traffic</h2>
          <HelpCircle className="w-4 h-4 text-gray-400" />
        </div>
        <button>
          <MoreHorizontal className="w-5 h-5 text-gray-400" />
        </button>
      </div>
      
      <div className="relative h-40">
        {/* Y-axis labels */}
        <div className="absolute left-0 h-full flex flex-col justify-between text-sm text-gray-500">
          <span>100%</span>
          <span>50%</span>
          <span>25%</span>
          <span>0%</span>
        </div>
        
        {/* Bars */}
        <div className="ml-12 h-full flex items-end gap-8">
          {socialData.map((item) => (
            <div key={item.platform} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full bg-indigo-100 rounded-lg relative" style={{ height: '80%' }}>
                <div
                  className="absolute bottom-0 w-full bg-indigo-500 rounded-lg transition-all duration-300"
                  style={{ height: `${item.percentage}%` }}
                />
              </div>
              <span className="text-sm font-medium">{item.platform}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}