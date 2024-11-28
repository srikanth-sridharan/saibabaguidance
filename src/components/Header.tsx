import React from 'react';
import saiBaba from '../img/saibabaIllustration.png'

export function Header() {
  return (
    <header className="bg-gradient-to-b from-orange-700 to-orange-600 text-white py-8 px-4 text-center shadow-lg relative overflow-hidden">
<div className="absolute inset-0 bg-[url('./img/saibaba_photo.jpg')] opacity-10 bg-cover bg-center bg-no-repeat h-full"></div>      
      <div className="container mx-auto max-w-4xl relative animate-fade-in">
        <div className="flex justify-center mb-4">
          <div className="om-symbol text-6xl animate-float">ॐ</div>
        </div>
        
        <div className="flex justify-center items-center">
        <img className='h-[180px]' alt='Sai Baba' src={saiBaba} />
        </div>

        <h1 className="text-4xl font-bold mb-4">Sai Baba's Divine Guidance</h1>
        <p className="text-lg opacity-90">
          "I am with you always. Trust in me and your prayers shall be answered."
        </p>
        <div className="mt-6 text-sm opacity-80">
          <p>Enter a number between 1 and 720 to receive Sai Baba's guidance</p>
          <p>Om Sai Ram 🙏</p>
        </div>
      </div>
    </header>
  );
}