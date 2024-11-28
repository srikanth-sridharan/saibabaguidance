import React from 'react';
import { Share2 } from 'lucide-react';

interface GuidanceCardProps {
  message: string;
}

export function GuidanceCard({ message }: GuidanceCardProps) {
  const handleShare = async () => {
    try {
      await navigator.share({
        title: "Sai Baba's Guidance",
        text: `Om Sai Ram 🙏\n\n${message}`,
      });
    } catch (err) {
      console.log('Sharing not supported');
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-8 mb-8 transform transition-all duration-500 animate-fade-in relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-300 via-orange-500 to-orange-300"></div>
      
      <div className="text-center mb-6">
        <div className="om-symbol text-3xl text-orange-600 animate-float">ॐ</div>
        <h2 className="text-orange-600 text-xl font-semibold mt-4">Om Sai Ram</h2>
      </div>
      
      <p className="text-gray-700 text-lg leading-relaxed text-center mb-6">
        {message}
      </p>

      <div className="flex justify-center">
        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-4 py-2 text-orange-600 hover:text-orange-700 transition"
        >
          <Share2 className="w-5 h-5" />
          Share Message
        </button>
      </div>
    </div>
  );
}