import React from 'react';
import { History } from 'lucide-react';

interface RecentMessagesProps {
  messages: Array<{number: string, message: string}>;
}

export function RecentMessages({ messages }: RecentMessagesProps) {
  if (messages.length === 0) return null;

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-6 animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <History className="w-5 h-5 text-orange-600" />
        <h2 className="text-lg font-semibold text-gray-800">Recent Guidance</h2>
      </div>
      
      <div className="space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className="p-4 bg-orange-50/80 backdrop-blur-sm rounded-lg transform transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="text-sm text-orange-600 mb-1">
              Number: {msg.number}
            </div>
            <p className="text-gray-700">{msg.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}