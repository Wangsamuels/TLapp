import React, { useState } from 'react';
import { MessageSquare, Plus, Search, MessageCircle, Twitter, Send, Instagram } from 'lucide-react';
import { PlatformIcon } from './components/PlatformIcon';
import { MessageItem } from './components/MessageItem';
import { NavigationBar } from './components/NavigationBar';

type Platform = 'all' | 'whatsapp' | 'x' | 'telegram' | 'instagram';

function App() {
  const [activePlatform, setActivePlatform] = useState<Platform>('all');
  const [activeTab, setActiveTab] = useState<'notifications' | 'messages' | 'settings'>('messages');

  const platforms = [
    { id: 'add', icon: <Plus className="w-6 h-6" />, name: 'Add New', notifications: 0 },
    { id: 'whatsapp', icon: <MessageCircle className="w-6 h-6" />, name: 'Whatsapp', notifications: 25 },
    { id: 'x', icon: <Twitter className="w-6 h-6" />, name: 'X', notifications: 3 },
    { id: 'telegram', icon: <Send className="w-6 h-6" />, name: 'Telegram', notifications: 25 },
    { id: 'instagram', icon: <Instagram className="w-6 h-6" />, name: 'Instagram', notifications: 12 },
  ];

  const messages = [
    {
      id: 1,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Mark Doe',
      message: 'Hello, would you like to...',
      time: '13:06',
      unreadCount: 1,
      platform: 'whatsapp'
    },
    {
      id: 2,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Mary Jane',
      message: 'Hello, would you like to...',
      time: '10:57',
      platform: 'whatsapp'
    },
    {
      id: 3,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Phoebe Peterson',
      message: 'Hello, would you like to...',
      time: 'Yesterday',
      unreadCount: 1,
      platform: 'x'
    },
    {
      id: 4,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Frank Davids',
      message: 'Hello, would you like to...',
      time: 'Yesterday',
      unreadCount: 1,
      platform: 'telegram'
    },
  ];

  const filteredMessages = messages.filter(msg => 
    activePlatform === 'all' || msg.platform === activePlatform
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 bg-white z-10 px-4 py-3 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold">
            {activePlatform === 'all' ? 'Inbox' : platforms.find(p => p.id === activePlatform)?.name}
          </h1>
          <div className="flex items-center gap-4">
            <button className="text-gray-500">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Platform Icons */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {platforms.map((platform) => (
            <PlatformIcon
              key={platform.id}
              icon={platform.icon}
              name={platform.name}
              notificationCount={platform.notifications}
              isActive={activePlatform === platform.id}
              onClick={() => setActivePlatform(platform.id as Platform)}
            />
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="pb-20">
        {filteredMessages.length > 0 ? (
          <>
            {activePlatform === 'all' && (
              <div className="px-4 py-2 bg-gray-50">
                <h2 className="text-sm font-semibold text-gray-500">Priority</h2>
              </div>
            )}
            {filteredMessages.map((message) => (
              <MessageItem
                key={message.id}
                avatar={message.avatar}
                name={message.name}
                message={message.message}
                time={message.time}
                unreadCount={message.unreadCount}
                platformIcon={
                  activePlatform === 'all' && (
                    message.platform === 'whatsapp' ? <MessageCircle className="w-4 h-4 text-green-500" /> :
                    message.platform === 'x' ? <Twitter className="w-4 h-4 text-blue-500" /> :
                    message.platform === 'telegram' ? <Send className="w-4 h-4 text-blue-400" /> :
                    <Instagram className="w-4 h-4 text-pink-500" />
                  )
                }
              />
            ))}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
            <MessageSquare className="w-12 h-12 text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">No Messages yet</h3>
            <p className="text-gray-500">You don't have any chat yet. Start a new conversation</p>
          </div>
        )}
      </div>

      {/* Navigation Bar */}
      <NavigationBar
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  );
}

export default App;