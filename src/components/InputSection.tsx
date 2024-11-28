import React from 'react';
import { Search, RefreshCw } from 'lucide-react';

interface InputSectionProps {
  number: string;
  setNumber: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleRandomNumber: () => void;
  error: string;
}

export function InputSection({
  number,
  setNumber,
  handleSubmit,
  handleRandomNumber,
  error
}: InputSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-xl p-6 mb-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Enter a number (1-720)"
              className="w-full px-4 py-3 rounded-lg border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
              min="1"
              max="720"
            />
          </div>
          <button
            type="button"
            onClick={handleRandomNumber}
            className="px-4 py-3 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition flex items-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            Random
          </button>
          <button
            type="submit"
            className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition flex items-center gap-2"
          >
            <Search className="w-5 h-5" />
            Seek Guidance
          </button>
        </div>
        {error && (
          <p className="text-red-600 text-sm">{error}</p>
        )}
      </form>
    </div>
  );
}