import React from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';
import { StatCard } from './components/Dashboard/StatCard';
import { RegionDistribution } from './components/Dashboard/RegionDistribution';
import { SocialTraffic } from './components/Dashboard/SocialTraffic';
import { Coins, Car, Users } from 'lucide-react';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold">Reports</h1>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Sales</span>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              <div className="flex items-center gap-2 text-gray-500">
                <span>Last updated: Feb 28, 2024</span>
                <button className="p-1 hover:bg-gray-100 rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-6 mb-8">
            <StatCard
              icon={Coins}
              title="Total Sales"
              value="$23,569.00"
              change={10.5}
            />
            <StatCard
              icon={Car}
              title="Product Revenue"
              value="$11,322.00"
              change={-10.5}
              iconBgColor="bg-red-100"
            />
            <StatCard
              icon={Users}
              title="Total Deals"
              value="1,204"
              change={10.5}
              iconBgColor="bg-emerald-100"
            />
          </div>
          
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <RegionDistribution />
            </div>
            <div>
              <SocialTraffic />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;