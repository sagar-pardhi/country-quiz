import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

interface Options {
  answer: string;
  isCorrect: boolean;
}

interface QuizProps {
  capital: string;
  options: Options[];
  handleNext: () => void;
}

export const Quiz = ({ capital, options, handleNext }: QuizProps) => {
  return (
    <div className="md:w-[400px]">
      <h2 className="font-bold uppercase text-white text-2xl py-3">
        Country Quiz
      </h2>
      <div className="rounded-2xl relative px-5 py-10 bg-white">
        <img
          src="/assets/undraw_adventure.svg"
          alt=""
          className="absolute -top-20 w-36 h-36 pb-5 right-0"
        />
        <h3 className="font-bold text-[#2f527b] text-xl">
          {capital} is the capital of
        </h3>
        <div>
          {options.map((option) => (
            <div
              key={option.answer}
              className="border-2 border-[#9094de] my-4 p-2 rounded-xl group hover:bg-amber-500 hover:border-0 cursor-pointer"
            >
              <div className="flex justify-between">
                <div className="flex gap-x-3">
                  <input type="radio" name="country" className="" />
                  <label
                    htmlFor=""
                    className="text-[#9094de] font-semibold group-hover:text-white group-hover:cursor-pointer"
                  >
                    {option.answer}
                  </label>
                </div>
                <div>
                  <CheckCircleIcon className="text-white w-6 h-6" />
                  {/* <XCircleIcon className="text-white w-6 h-6" /> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button
            className="bg-amber-500 text-white px-5 py-2 rounded-lg font-bold hover:bg-amber-600"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
