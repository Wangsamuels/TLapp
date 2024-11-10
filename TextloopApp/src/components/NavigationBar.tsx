import React from 'react';
import { Bell, MessageSquare, Settings } from 'lucide-react';
import { cn } from '../utils/cn';

type NavigationBarProps = {
  activeTab: 'notifications' | 'messages' | 'settings';
  onTabChange: (tab: 'notifications' | 'messages' | 'settings') => void;
};

export function NavigationBar({ activeTab, onTabChange }: NavigationBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-2">
      <div className="flex items-center justify-around">
        <button
          onClick={() => onTabChange('notifications')}
          className={cn(
            "p-3 rounded-lg transition-colors",
            activeTab === 'notifications' ? "text-red-500" : "text-gray-500"
          )}
        >
          <Bell className="w-6 h-6" />
        </button>
        <button
          onClick={() => onTabChange('messages')}
          className={cn(
            "p-3 rounded-lg transition-colors",
            activeTab === 'messages' ? "text-red-500" : "text-gray-500"
          )}
        >
          <MessageSquare className="w-6 h-6" />
        </button>
        <button
          onClick={() => onTabChange('settings')}
          className={cn(
            "p-3 rounded-lg transition-colors",
            activeTab === 'settings' ? "text-red-500" : "text-gray-500"
          )}
        >
          <Settings className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}