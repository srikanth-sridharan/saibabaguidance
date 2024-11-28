import React, { useState, useEffect } from 'react';
import { Search, RefreshCw } from 'lucide-react';
import { getGuidance } from './utils/guidance';
import { GuidanceCard } from './components/GuidanceCard';
import { Header } from './components/Header';
import { InputSection } from './components/InputSection';
import { RecentMessages } from './components/RecentMessages';

function App() {
  const [number, setNumber] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [recentMessages, setRecentMessages] = useState<Array<{number: string, message: string}>>([]);

  useEffect(() => {
    const saved = localStorage.getItem('recentMessages');
    if (saved) {
      setRecentMessages(JSON.parse(saved));
    }
  }, []);

  const handleRandomNumber = () => {
    const random = Math.floor(Math.random() * 720) + 1;
    setNumber(random.toString());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseInt(number);
    
    if (isNaN(num) || num < 1 || num > 720) {
      setError('Please enter a number between 1 and 720');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const guidance = await getGuidance(num);
      setMessage(guidance);
      
      const newMessage = { number, message: guidance };
      const updatedMessages = [newMessage, ...recentMessages.slice(0, 4)];
      setRecentMessages(updatedMessages);
      localStorage.setItem('recentMessages', JSON.stringify(updatedMessages));
    } catch (err) {
      setError('Unable to retrieve guidance. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 bg-glow">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-20 animate-glow"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-300 rounded-full blur-3xl opacity-20 animate-glow" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-orange-200 rounded-full blur-3xl opacity-20 animate-glow" style={{ animationDelay: '-4s' }}></div>
      </div>
      
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl relative">
        <InputSection
          number={number}
          setNumber={setNumber}
          handleSubmit={handleSubmit}
          handleRandomNumber={handleRandomNumber}
          error={error}
        />

        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="om-symbol animate-float text-orange-600">ॐ</div>
          </div>
        ) : message && (
          <GuidanceCard message={message} />
        )}

        <RecentMessages messages={recentMessages} />
      </main>
    </div>
  );
}

export default App;