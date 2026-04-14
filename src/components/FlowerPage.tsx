import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { FLOWERS } from '../data/flowers';
import { Step } from '../types';
import ImageStep from './steps/ImageStep';
import VideoStep from './steps/VideoStep';
import QuizStep from './steps/QuizStep';
import CompletionStep from './steps/CompletionStep';
import { ArrowLeft, Flower as FlowerIcon } from 'lucide-react';

export default function FlowerPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<Step>('image');
  
  const flower = FLOWERS.find(f => f.slug === slug);

  useEffect(() => {
    if (!flower) {
      navigate('/');
    }
  }, [flower, navigate]);

  if (!flower) return null;

  const steps: Step[] = ['image', 'video', 'quiz', 'completion'];
  const currentStepIndex = steps.indexOf(currentStep);
  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  const handleNext = () => {
    if (currentStep === 'image') setCurrentStep('video');
    else if (currentStep === 'video') setCurrentStep('quiz');
    else if (currentStep === 'quiz') setCurrentStep('completion');
  };

  const handleRestart = () => {
    setCurrentStep('image');
  };

  // Track progress in localStorage
  useEffect(() => {
    if (currentStep === 'completion') {
      const completed = JSON.parse(localStorage.getItem('completedFlowers') || '[]');
      if (!completed.includes(flower.slug)) {
        localStorage.setItem('completedFlowers', JSON.stringify([...completed, flower.slug]));
      }
    }
  }, [currentStep, flower.slug]);

  return (
    <div className="min-h-screen flex flex-col bg-brand-50">
      {/* Header */}
      <header className="p-4 flex items-center justify-between glass-panel sticky top-0 z-50">
        <button
          onClick={() => navigate('/')}
          className="p-2 hover:bg-nature-100 rounded-full transition-colors text-nature-700"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        
        <div className="flex items-center gap-2">
          <FlowerIcon className="w-6 h-6 text-brand-600" />
          <h1 className="text-xl text-nature-800">{flower.name}</h1>
        </div>
        
        <div className="w-10" /> {/* Spacer */}
      </header>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-nature-100 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className="h-full bg-brand-500"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 max-w-4xl mx-auto w-full">
        <AnimatePresence mode="wait">
          {currentStep === 'image' && (
            <ImageStep flower={flower} onNext={handleNext} />
          )}
          {currentStep === 'video' && (
            <VideoStep flower={flower} onNext={handleNext} />
          )}
          {currentStep === 'quiz' && (
            <QuizStep flower={flower} onComplete={handleNext} />
          )}
          {currentStep === 'completion' && (
            <CompletionStep flower={flower} onRestart={handleRestart} />
          )}
        </AnimatePresence>
      </main>

      {/* Footer Info */}
      <footer className="p-6 text-center text-nature-400 text-lg font-bold">
        Adım {currentStepIndex + 1} / 4: {
          currentStep === 'image' ? 'Resim' :
          currentStep === 'video' ? 'Video' :
          currentStep === 'quiz' ? 'Test' : 'Tamamlandı'
        }
      </footer>
    </div>
  );
}
