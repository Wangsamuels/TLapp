import React from 'react';
import { cn } from '../utils/cn';

type PlatformIconProps = {
  icon: React.ReactNode;
  name: string;
  notificationCount?: number;
  isActive?: boolean;
  onClick?: () => void;
};

export function PlatformIcon({ icon, name, notificationCount, isActive, onClick }: PlatformIconProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative flex flex-col items-center gap-1 p-1 transition-transform hover:scale-105",
        isActive && "text-red-500"
      )}
    >
      <div className="relative">
        <div className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center",
          isActive ? "bg-red-50" : "bg-gray-50"
        )}>
          {icon}
        </div>
        {notificationCount && notificationCount > 0 && (
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {notificationCount > 99 ? '99+' : notificationCount}
          </div>
        )}
      </div>
      <span className="text-xs font-medium">{name}</span>
    </button>
  );
}