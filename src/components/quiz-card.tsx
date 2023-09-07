import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

interface Options {
  answer: string;
  isCorrect: boolean;
}

interface QuizCardProps {
  capital: string;
  options: Options[];
  isCorrectAnswer: boolean;
  handleNext: () => void;
  handleAnswerCheck: (isCorrect: boolean) => void;
}

export const QuizCard = ({
  capital,
  options,
  isCorrectAnswer,
  handleNext,
  handleAnswerCheck,
}: QuizCardProps) => {
  return (
    <div className="md:w-[400px]">
      <h2 className="py-3 text-2xl font-bold text-white uppercase">
        Country Quiz
      </h2>
      <div className="relative px-5 py-10 bg-white rounded-2xl">
        <img
          src="assets/undraw_adventure.svg"
          alt=""
          className="absolute right-0 -top-20 pb-5 w-36 h-36"
        />
        <h3 className="font-bold text-[#2f527b] text-xl">
          {capital} is the capital of
        </h3>
        <div>
          {options.map((option) => (
            <button
              key={option.answer}
              className={`flex flex-col w-full border-2 border-[#9094de] my-4 p-2 rounded-xl group enabled:hover:bg-amber-500 hover:border-0 cursor-pointer disabled:cursor-not-allowed disabled:border-0 ${
                isCorrectAnswer
                  ? option.isCorrect
                    ? "bg-emerald-500"
                    : "bg-rose-500"
                  : ""
              }`}
              onClick={() => handleAnswerCheck(option.isCorrect)}
              disabled={isCorrectAnswer}
            >
              <div className="flex justify-between w-full">
                <div className="flex gap-x-3">
                  <div
                    className={`${
                      isCorrectAnswer
                        ? option.isCorrect
                          ? "text-white "
                          : "text-white"
                        : "text-[#9094de]"
                    } pl-3 font-semibold group-disabled:cursor-not-allowed group-hover:text-white group-hover:cursor-pointer`}
                  >
                    {option.answer}
                  </div>
                </div>
                {isCorrectAnswer && (
                  <div>
                    {option.isCorrect ? (
                      <CheckCircleIcon className="w-6 h-6 text-white" />
                    ) : (
                      <XCircleIcon className="w-6 h-6 text-white" />
                    )}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
        <div className="flex justify-end">
          <button
            className="px-5 py-2 font-bold text-white bg-amber-500 rounded-lg hover:bg-amber-600"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
