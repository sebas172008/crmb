import React from 'react';
import { Logo } from './Logo';
import { SearchBar } from './SearchBar';
import { MenuItem } from './MenuItem';
import {
  LayoutDashboard,
  Bell,
  ClipboardList,
  FileText,
  Mail,
  Calendar,
  BarChart2,
  Building2,
  Users,
} from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="w-64 border-r border-gray-200 h-screen flex flex-col">
      <Logo />
      <SearchBar />
      
      <nav className="flex-1 px-2 py-4">
        <div className="mb-4">
          <p className="px-4 text-xs font-medium text-gray-400 uppercase">Main Menu</p>
          <ul className="mt-2 space-y-1">
            <MenuItem icon={LayoutDashboard} label="Dashboard" />
            <MenuItem icon={Bell} label="Notifications" />
            <MenuItem icon={ClipboardList} label="Tasks" />
            <MenuItem icon={FileText} label="Notes" />
            <MenuItem icon={Mail} label="Email" />
            <MenuItem icon={Calendar} label="Calendar" />
          </ul>
        </div>
        
        <div>
          <p className="px-4 text-xs font-medium text-gray-400 uppercase">Record</p>
          <ul className="mt-2 space-y-1">
            <MenuItem icon={BarChart2} label="Reports" isActive />
            <MenuItem icon={Building2} label="Companies" />
            <MenuItem icon={Users} label="Contacts" />
          </ul>
        </div>
      </nav>
    </aside>
  );
}