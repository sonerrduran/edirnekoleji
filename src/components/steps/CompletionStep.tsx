import { useEffect } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { Flower } from '../../types';
import { Trophy, Home, RotateCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CompletionStepProps {
  flower: Flower;
  onRestart: () => void;
}

export default function CompletionStep({ flower, onRestart }: CompletionStepProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center gap-8 text-center"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-brand-300 blur-3xl opacity-30 rounded-full animate-pulse" />
        <div className="relative p-8 bg-white rounded-full shadow-2xl border-8 border-brand-100">
          <Trophy className="w-24 h-24 text-brand-500" />
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-5xl text-nature-800 font-black">Tebrikler! 🎉</h2>
        <p className="text-2xl text-nature-600 max-w-md font-medium">
          <span className="font-black text-nature-800">{flower.name}</span> yolculuğunu başarıyla tamamladın! Harikasın! 🌟
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-md">
        <button
          onClick={onRestart}
          className="flex-1 px-6 py-5 bg-white text-nature-700 border-4 border-nature-200 rounded-[2rem] font-black text-xl shadow-sm hover:bg-nature-50 transition-all flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-6 h-6" />
          Tekrarla 🔄
        </button>
        <button
          onClick={() => navigate('/')}
          className="flex-1 px-6 py-5 bg-nature-800 text-white rounded-[2rem] font-black text-xl shadow-lg hover:bg-nature-900 transition-all flex items-center justify-center gap-2"
        >
          <Home className="w-6 h-6" />
          Ana Sayfa 🏠
        </button>
      </div>
    </motion.div>
  );
}
