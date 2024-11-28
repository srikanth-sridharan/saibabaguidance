import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import saiBaba from '../img/saibabaIllustration.png';

export function Header() {
  const [stars, setStars] = useState<{ x: number; y: number; size: number }[]>([]);
  const [fireworks, setFireworks] = useState<any[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  // Define a single bright color for the fireworks
  const fireworkColor = 'rgba(255, 223, 0, 1)'; // Example: bright yellow

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 50 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 7 + 1,
      }));
      setStars(newStars);
    };

    generateStars();
  }, []);

  useEffect(() => {
    const createFirework = (x: number, y: number) => {
      const particles = Array.from({ length: 100 }, () => ({
        x: x,
        y: y,
        radius: Math.random() * 3 + 2,
        color: fireworkColor, // Use the defined single color
        speed: Math.random() * 3 + 1,
        angle: Math.random() * Math.PI * 2,
        life: Math.random() * 50 + 50,
      }));
      setFireworks((prev) => [...prev, ...particles]);
    };

    const animateFireworks = (ctx: CanvasRenderingContext2D) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      
      fireworks.forEach((particle, index) => {
        particle.x += particle.speed * Math.cos(particle.angle);
        particle.y += particle.speed * Math.sin(particle.angle);
        particle.life -= 1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        if (particle.life <= 0) {
          fireworks.splice(index, 1); // Remove dead particles
        }
      });

      requestAnimationFrame(() => animateFireworks(ctx));
    };

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      animateFireworks(ctx!);
    }

    // Create a firework every second at random positions
    const intervalId = setInterval(() => {
      createFirework(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [fireworks]);

  return (
    <header className="relative overflow-hidden text-white py-8 px-4 text-center shadow-lg bg-gradient-to-r from-orange-400 to-orange-600">
      <div className="absolute inset-0">
        {stars.map((star, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
        ))}
      </div>
      
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        style={{ position: 'absolute', top: '0', left: '0', pointerEvents: 'none' }}
      />
      
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