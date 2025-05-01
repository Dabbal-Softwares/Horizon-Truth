// hooks/useGameState.ts
import { useState } from 'react';

interface Scenario {
  id: number;
  type: 'social' | 'health';
}

const useGameState = () => {
  const [gameState, setGameState] = useState({
    currentScenarioType: null as 'social' | 'health' | null,
    currentQuestionIndex: 0,
    score: 0,
    completed: 0,
    questionsAnswered: 0,
    selectedScenario: null as Scenario | null,
  });

  const startScenario = (type: 'social' | 'health') => {
    setGameState(prev => ({
      ...prev,
      currentScenarioType: type,
      currentQuestionIndex: 0,
      questionsAnswered: 0,
      selectedScenario: { id: Date.now(), type } // Simple unique ID
    }));
  };

  const makeChoice = (isCorrect: boolean) => {
    const newScore = isCorrect ? gameState.score + 10 : gameState.score;
    setGameState(prev => ({
      ...prev,
      score: newScore,
      questionsAnswered: prev.questionsAnswered + 1
    }));
    
    return {
      isCorrect,
      feedback: isCorrect ? "Correct! Well done!" : "Oops! That's not right."
    };
  };

  const nextQuestion = () => {
    setGameState(prev => {
      const newIndex = prev.currentQuestionIndex + 1;
      const completedAll = newIndex >= 10; // Assuming 10 questions per scenario
      
      return {
        ...prev,
        currentQuestionIndex: completedAll ? 0 : newIndex,
        completed: completedAll ? prev.completed + 1 : prev.completed,
        currentScenarioType: completedAll ? null : prev.currentScenarioType
      };
    });
  };

  const resetGame = () => {
    setGameState({
      currentScenarioType: null,
      currentQuestionIndex: 0,
      score: 0,
      completed: 0,
      questionsAnswered: 0,
      selectedScenario: null
    });
  };

  return { 
    gameState, 
    startScenario, 
    makeChoice, 
    nextQuestion, 
    resetGame 
  };
};

export default useGameState;