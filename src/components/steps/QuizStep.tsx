import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flower } from '../../types';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

interface QuizStepProps {
  flower: Flower;
  onComplete: () => void;
}

export default function QuizStep({ flower, onComplete }: QuizStepProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const currentQuestion = flower.quizQuestions[currentQuestionIndex];

  const handleOptionSelect = (index: number) => {
    if (showFeedback) return;
    
    setSelectedOption(index);
    const correct = index === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);

    // Play sound feedback (bonus)
    if (correct) {
      new Audio('https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3').play().catch(() => {});
    } else {
      new Audio('https://assets.mixkit.co/active_storage/sfx/2003/2003-preview.mp3').play().catch(() => {});
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < flower.quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsCorrect(null);
      setShowFeedback(false);
    } else {
      onComplete();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col items-center gap-8 w-full max-w-lg"
    >
      <div className="text-center space-y-2">
        <span className="text-lg font-black text-brand-600 uppercase tracking-widest">
          Soru {currentQuestionIndex + 1} / {flower.quizQuestions.length} 🧐
        </span>
        <h2 className="text-3xl text-nature-800 leading-tight font-bold">
          {currentQuestion.question}
        </h2>
      </div>

      <div className="grid gap-4 w-full">
        {currentQuestion.options.map((option, index) => {
          const isSelected = selectedOption === index;
          const isCorrectOption = index === currentQuestion.correctAnswer;
          
          let buttonClass = "p-6 rounded-3xl border-4 text-left transition-all flex items-center justify-between gap-4 text-xl font-bold ";
          
          if (!showFeedback) {
            buttonClass += "border-nature-200 hover:border-nature-400 hover:bg-nature-50 active:scale-[0.98]";
          } else {
            if (isCorrectOption) {
              buttonClass += "border-green-500 bg-green-50 text-green-800";
            } else if (isSelected && !isCorrectOption) {
              buttonClass += "border-red-500 bg-red-50 text-red-800";
            } else {
              buttonClass += "border-nature-100 opacity-50";
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleOptionSelect(index)}
              disabled={showFeedback}
              className={buttonClass}
            >
              <span>{option}</span>
              {showFeedback && isCorrectOption && <CheckCircle2 className="w-8 h-8 text-green-500 shrink-0" />}
              {showFeedback && isSelected && !isCorrectOption && <XCircle className="w-8 h-8 text-red-500 shrink-0" />}
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-4 w-full"
          >
            <div className={`text-2xl font-black ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
              {isCorrect ? 'Harika! Doğru cevap. 🌟' : 'Üzgünüm, ama öğrenmeye devam et! 💪'}
            </div>
            
            <button
              onClick={handleNext}
              className="px-10 py-4 bg-nature-800 text-white rounded-full font-bold text-xl shadow-lg hover:bg-nature-900 transition-all flex items-center gap-3"
            >
              {currentQuestionIndex < flower.quizQuestions.length - 1 ? 'Sıradaki Soru' : 'Testi Bitir'}
              <ArrowRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
