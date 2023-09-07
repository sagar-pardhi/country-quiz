interface ScoreCardProps {
  score: number;
  handleReset: () => void;
}

export const ScoreCard = ({ score, handleReset }: ScoreCardProps) => {
  return (
    <div className="md:w-[400px]">
      <h2 className="py-3 text-2xl font-bold text-white uppercase">
        Country Quiz
      </h2>
      <div className="flex relative flex-col items-center px-5 py-5 bg-white rounded-2xl">
        <img
          src="assets/undraw_winners.svg"
          alt=""
          className="pb-5 w-40 h-40"
        />
        <h2 className="text-4xl font-bold mb-5 text-[#1d355e]">Results</h2>
        <p className="text-[#1d355e] font-semibold">
          You got{" "}
          <span className="text-3xl font-bold text-emerald-500">{score}</span>{" "}
          correct answers
        </p>
        <button
          className="mt-10 border-2 px-10 py-2 rounded-xl text-[#1d355e] font-bold border-[#1d355e]"
          onClick={handleReset}
        >
          Try Again
        </button>
      </div>
    </div>
  );
};
