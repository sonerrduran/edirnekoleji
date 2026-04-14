import { motion } from 'motion/react';
import { Flower } from '../../types';

interface ImageStepProps {
  flower: Flower;
  onNext: () => void;
}

export default function ImageStep({ flower, onNext }: ImageStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center gap-6"
    >
      <div className="relative w-full aspect-video max-w-4xl overflow-hidden rounded-3xl shadow-2xl border-4 border-white bg-white flex items-center justify-center">
        {flower.imageUrl ? (
          <img
            src={flower.imageUrl}
            alt={flower.name}
            className="w-full h-full object-contain bg-nature-50"
            referrerPolicy="no-referrer"
          />
        ) : (
          <span className="text-[12rem] leading-none select-none" role="img" aria-label={flower.name}>
            {flower.emoji}
          </span>
        )}
      </div>
      
      <div className="text-center space-y-2">
        <h2 className="text-4xl text-nature-800">{flower.name}</h2>
        <p className="text-nature-600 italic text-lg">{flower.scientificName}</p>
        <p className="max-w-md text-nature-700 leading-relaxed text-xl font-medium">
          {flower.description}
        </p>
      </div>

      <button
        onClick={onNext}
        className="mt-4 px-10 py-4 bg-nature-600 text-white rounded-full font-bold text-xl shadow-lg hover:bg-nature-700 transition-all hover:scale-105 active:scale-95"
      >
        Videoya Geç 🎬
      </button>
    </motion.div>
  );
}
