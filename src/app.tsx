import { useState } from "react";
import { Quiz } from "./components/quiz";

export const App = () => {
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
  const [currentQuestion, setCurrentQuestion] = useState(questionsData[0]);
  const [questionIndex, setQuestionIndex] = useState(1);
  const [score, setScore] = useState(0);

  console.log("👉 ", {
    questionIndex,
    questionsDataLength: questionsData.length,
  });

  const handleNext = () => {
    if (questionIndex === questionsData.length) {
      return;
    }
    setQuestionIndex((prev) => prev + 1);
    setCurrentQuestion(questionsData[questionIndex]);
  };

  return (
    <main className="container mx-auto flex justify-center items-center h-screen w-full">
      <img
        src="/assets/background.png"
        alt="background image"
        className="absolute w-full h-screen object-cover -z-10"
      />
      <Quiz {...currentQuestion} handleNext={handleNext} />
    </main>
  );
};
