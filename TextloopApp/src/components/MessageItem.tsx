import React from 'react';
import { cn } from '../utils/cn';

type MessageItemProps = {
  avatar: string;
  name: string;
  message: string;
  time: string;
  unreadCount?: number;
  platformIcon?: React.ReactNode;
};

export function MessageItem({ avatar, name, message, time, unreadCount, platformIcon }: MessageItemProps) {
  return (
    <div className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors cursor-pointer">
      <div className="relative">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        {platformIcon && (
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
            {platformIcon}
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold truncate">{name}</h3>
          <span className="text-sm text-gray-500">{time}</span>
        </div>
        <p className="text-sm text-gray-600 truncate">{message}</p>
      </div>
      {unreadCount && unreadCount > 0 && (
        <div className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {unreadCount}
        </div>
      )}
    </div>
  );
}