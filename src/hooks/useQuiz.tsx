import { useState } from "react";

export const useQuiz = () => {
  const [questionsData, setQuestionsData] = useState([
    {
      capital: "New Delhi",
      options: [
        { answer: "India", isCorrect: true },
        { answer: "China", isCorrect: false },
        { answer: "Pakistan", isCorrect: false },
        { answer: "Bangladesh", isCorrect: false },
      ],
    },
    {
      capital: "Washington D.C",
      options: [
        { answer: "England", isCorrect: false },
        { answer: "USA", isCorrect: true },
        { answer: "Italy", isCorrect: false },
        { answer: "France", isCorrect: false },
      ],
    },
    {
      capital: "Kathmandu",
      options: [
        { answer: "India", isCorrect: false },
        { answer: "China", isCorrect: false },
        { answer: "Nepal", isCorrect: true },
        { answer: "Bangladesh", isCorrect: false },
      ],
    },
    {
      capital: "Tokyo",
      options: [
        { answer: "India", isCorrect: false },
        { answer: "Australia", isCorrect: false },
        { answer: "South Korea", isCorrect: false },
        { answer: "Japan", isCorrect: true },
      ],
    },
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1;
    setIsCorrectAnswer(false);
    if (currentQuestion === questionsData.length - 1) {
      setShowScore(true);
    }
    setCurrentQuestion(nextQuestion);
  };

  const handleAnswerCheck = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    setIsCorrectAnswer(true);
  };

  const handleReset = () => {
    setScore(0);
    setCurrentQuestion(0);
    setIsCorrectAnswer(false);
    setShowScore(false);
  };

  return {
    questionsData,
    currentQuestion,
    isCorrectAnswer,
    showScore,
    score,
    handleNext,
    handleAnswerCheck,
    handleReset,
  };
};
