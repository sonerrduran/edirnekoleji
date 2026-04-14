export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Flower {
  id: string;
  slug: string;
  name: string;
  scientificName: string;
  description: string;
  emoji: string;
  imageUrl?: string;
  videoUrl: string;
  quizQuestions: QuizQuestion[];
}

export type Step = 'image' | 'video' | 'quiz' | 'completion';
