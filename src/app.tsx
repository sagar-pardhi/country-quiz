import { QuizCard } from "./components/quiz-card";
import { ScoreCard } from "./components/score-card";
import { useQuiz } from "./hooks/useQuiz";

export const App = () => {
  const {
    questionsData,
    currentQuestion,
    showScore,
    score,
    isCorrectAnswer,
    handleNext,
    handleAnswerCheck,
    handleReset,
  } = useQuiz();

  return (
    <main className="container flex justify-center items-center mx-auto w-full h-screen">
      <img
        src="assets/background.png"
        alt="background image"
        className="object-cover absolute w-full h-screen -z-10"
      />
      {showScore ? (
        <ScoreCard score={score} handleReset={handleReset} />
      ) : (
        <QuizCard
          {...questionsData[currentQuestion]}
          isCorrectAnswer={isCorrectAnswer}
          handleNext={handleNext}
          handleAnswerCheck={handleAnswerCheck}
        />
      )}
    </main>
  );
};
