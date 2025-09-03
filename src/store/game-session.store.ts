import { create } from 'zustand';

interface GameSession {
  currentScenario: any;
  selectedChoices: number[];
  score: number;
  timeSpent: number;
  isCompleted: boolean;
}

interface GameSessionState {
  // State
  currentSession: GameSession | null;
  sessionHistory: GameSession[];
  isPlaying: boolean;
  startTime: number | null;

  // Actions
  startGame: (scenario: any) => void;
  selectChoice: (choiceId: number) => void;
  submitAnswer: () => Promise<{ isCorrect: boolean; feedback: string; score: number }>;
  completeScenario: () => void;
  completeGame: () => void;
  resetGame: () => void;
  pauseGame: () => void;
  resumeGame: () => void;
  getElapsedTime: () => number;
}

export const useGameSessionStore = create<GameSessionState>((set, get) => ({
  // Initial state
  currentSession: null,
  sessionHistory: [],
  isPlaying: false,
  startTime: null,

  // Actions
  startGame: (scenario) => {
    const startTime = Date.now();
    set({
      currentSession: {
        currentScenario: scenario,
        selectedChoices: [],
        score: 0,
        timeSpent: 0,
        isCompleted: false
      },
      isPlaying: true,
      startTime
    });
  },

  selectChoice: (choiceId: number) => {
    set(state => {
      if (!state.currentSession) return state;
      
      const currentChoices = state.currentSession.selectedChoices;
      const newSelectedChoices = currentChoices.includes(choiceId)
        ? currentChoices.filter(id => id !== choiceId)
        : [...currentChoices, choiceId];

      return {
        currentSession: {
          ...state.currentSession,
          selectedChoices: newSelectedChoices
        }
      };
    });
  },

  submitAnswer: async () => {
    const state = get();
    if (!state.currentSession) {
      throw new Error('No active game session');
    }

    const { currentScenario, selectedChoices } = state.currentSession;
    
    // Calculate score and check answers
    const correctChoices = currentScenario.choices
      .filter((choice: any) => choice.isCorrect)
      .map((choice: any) => choice.id);

    const isCorrect = selectedChoices.length === correctChoices.length &&
      selectedChoices.every(id => correctChoices.includes(id));

    const score = isCorrect ? 10 : 0;

    // Update session score
    set(state => ({
      currentSession: state.currentSession ? {
        ...state.currentSession,
        score: state.currentSession.score + score
      } : null
    }));

    return {
      isCorrect,
      feedback: isCorrect ? currentScenario.feedback.correct : currentScenario.feedback.incorrect,
      score
    };
  },

  completeScenario: () => {
    const state = get();
    if (!state.currentSession || !state.startTime) return;

    const endTime = Date.now();
    const timeSpent = state.currentSession.timeSpent + (endTime - state.startTime);

    set(state => ({
      currentSession: null,
      sessionHistory: [
        ...state.sessionHistory,
        {
          ...state.currentSession!,
          timeSpent,
          isCompleted: true
        }
      ],
      isPlaying: false,
      startTime: null
    }));
  },

  completeGame: () => {
    const state = get();
    if (!state.currentSession) return;

    const endTime = Date.now();
    const additionalTime = state.startTime ? endTime - state.startTime : 0;
    const timeSpent = state.currentSession.timeSpent + additionalTime;
    
    set(state => ({
      currentSession: null,
      sessionHistory: [
        ...state.sessionHistory,
        {
          ...state.currentSession!,
          timeSpent,
          isCompleted: true
        }
      ],
      isPlaying: false,
      startTime: null
    }));
  },

  resetGame: () => {
    set({
      currentSession: null,
      sessionHistory: [],
      isPlaying: false,
      startTime: null
    });
  },

  pauseGame: () => {
    const state = get();
    if (!state.isPlaying || !state.startTime || !state.currentSession) return;

    const elapsed = Date.now() - state.startTime;
    set({
      currentSession: {
        ...state.currentSession,
        timeSpent: state.currentSession.timeSpent + elapsed
      },
      isPlaying: false,
      startTime: null
    });
  },

  resumeGame: () => {
    const state = get();
    if (state.isPlaying || !state.currentSession) return;

    set({
      isPlaying: true,
      startTime: Date.now()
    });
  },

  getElapsedTime: () => {
    const state = get();
    const baseTime = state.currentSession?.timeSpent || 0;
    const currentTime = state.isPlaying && state.startTime 
      ? Date.now() - state.startTime 
      : 0;
    
    return baseTime + currentTime;
  },
}));