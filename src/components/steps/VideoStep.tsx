import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Flower } from '../../types';
import { Play, CheckCircle2 } from 'lucide-react';

interface VideoStepProps {
  flower: Flower;
  onNext: () => void;
}

export default function VideoStep({ flower, onNext }: VideoStepProps) {
  const [canContinue, setCanContinue] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10); // 10 seconds minimum watch time

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanContinue(true);
    }
  }, [timeLeft]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="flex flex-col items-center gap-6 w-full max-w-2xl"
    >
      <div className="text-center space-y-2">
        <h2 className="text-4xl text-nature-800">İzle ve Öğren 📺</h2>
        <p className="text-xl text-nature-600">{flower.name} hakkında daha fazla bilgi edinmek için videoyu izle.</p>
      </div>

      <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black border-8 border-white">
        <iframe
          src={flower.videoUrl}
          title={`${flower.name} video`}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="flex flex-col items-center gap-4 w-full">
        {!canContinue ? (
          <div className="flex items-center gap-3 text-nature-500 font-bold text-lg">
            <div className="w-6 h-6 border-4 border-nature-300 border-t-nature-600 rounded-full animate-spin" />
            <span>Lütfen {timeLeft} saniye daha bekle... ⏳</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-nature-600 font-bold text-xl animate-bounce">
            <CheckCircle2 className="w-6 h-6" />
            <span>Bilgini test etmeye hazırsın! 🚀</span>
          </div>
        )}

        <button
          onClick={onNext}
          disabled={!canContinue}
          className={`px-10 py-4 rounded-full font-bold text-xl shadow-lg transition-all flex items-center gap-3
            ${canContinue 
              ? 'bg-nature-600 text-white hover:bg-nature-700 hover:scale-105 active:scale-95' 
              : 'bg-nature-200 text-nature-400 cursor-not-allowed opacity-70'
            }`}
        >
          <Play className="w-5 h-5 fill-current" />
          Teste Başla 📝
        </button>
      </div>
    </motion.div>
  );
}
