import { useState } from 'react';

const useGameState = () => {
  const [gameState, setGameState] = useState({
    currentScenario: 0,
    score: 0,
    completed: 0,
    scenarios: [
      {
        id: 1,
        title: "Social Media Misinformation",
        icon: "users",
        description: "Learn to spot fake news spreading on platforms like Twitter and Facebook",
        question: "Social media post about celebrity quitting acting",
        correctChoices: [1, 4],
        feedback: {
          incorrect: "Assuming viral posts are true without verification is how misinformation spreads rapidly.",
          correct: "Great job investigating the source! Always verify sensational claims with official channels."
        }
      },
      {
        id: 2,
        title: "Fake Health News",
        icon: "heartbeat",
        description: "Identify dangerous health myths and medical misinformation",
        question: "Health post about miracle cure",
        correctChoices: [2, 3],
        feedback: {
          incorrect: "Sharing unverified health advice can be dangerous.",
          correct: "Excellent work checking with medical professionals!"
        }
      }
    ]
  });

  const startScenario = (num:number) => {
    setGameState(prev => ({
      ...prev,
      currentScenario: num
    }));
  };

  const makeChoice = (choiceId:number) => {
    const currentScenario = gameState.scenarios.find(s => s.id === gameState.currentScenario);
    const isCorrect = currentScenario?.correctChoices.includes(choiceId);
    
    if (isCorrect) {
      setGameState(prev => ({
        ...prev,
        score: prev.score + 10
      }));
    }
    
    return { isCorrect, feedback: isCorrect ? currentScenario?.feedback.correct : currentScenario?.feedback.incorrect };
  };

  const completeScenario = () => {
    setGameState(prev => ({
      ...prev,
      completed: prev.completed + 1,
      currentScenario: 0
    }));
  };

  const resetGame = () => {
    setGameState(prev => ({
      ...prev,
      score: 0,
      completed: 0,
      currentScenario: 0
    }));
  };

  return { gameState, startScenario, makeChoice, completeScenario, resetGame };
};

export default useGameState;