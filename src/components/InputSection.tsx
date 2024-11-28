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
        <div className="flex flex-col md:flex-row gap-4">
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
          <div className="flex gap-2 md:gap-4">
            <button
              type="button"
              onClick={handleRandomNumber}
              className="flex items-center justify-center px-4 py-3 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition w-full md:w-auto"
            >
              <RefreshCw className="w-5 h-5" />
              Random
            </button>
            <button
              type="submit"
              className="flex items-center justify-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition w-full md:w-auto"
            >
              <Search className="w-5 h-5" />
              Seek Guidance
            </button>
          </div>
        </div>
        {error && (
          <p className="text-red-600 text-sm">{error}</p>
        )}
      </form>
    </div>
  );
}
