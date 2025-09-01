export interface Choice {
  id: number;
  icon: string;
  color: string;
  title: string;
  description: string;
  isCorrect: boolean;
}

export interface Post {
  title: string;
  source: string;
  time: string;
  content: string;
  likes: string;
  shares: string;
  comments: string;
}

export interface Feedback {
  correct: string;
  incorrect: string;
}

export interface GameScenario {
  id: string;
  title: string;
  icon: string;
  post: Post;
  choices: Choice[];
  tip: string;
  feedback: Feedback;
  difficultyLevel: number;
  categoryId: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserGameProgress {
  id: string;
  userId: string;
  scenarioId: string;
  categoryId: string;
  score: number;
  completedScenarios: number;
  questionsAnswered: number;
  currentState?: any;
  scenarioHistory?: any[];
  lastPlayed: Date;
  totalPlayTime: number;
  streakDays: number;
  lastPlayDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  keyword: string;
  label: string;
  icon: string;
  displayOrder: number;
  isActive: boolean;
  description?: string;
}

export interface GameStats {
  totalScore: number;
  totalScenariosCompleted: number;
  totalQuestionsAnswered: number;
  correctAnswers: number;
  incorrectAnswers: number;
  overallAccuracy: number;
  currentStreak: number;
  longestStreak: number;
  categoryStats: Record<string, CategoryStats>;
  lastPlayed?: Date;
}

export interface CategoryStats {
  completed: number;
  score: number;
  accuracy: number;
  questionsAnswered: number;
  correctAnswers: number;
  label?: string;
  icon?: string;
}