import { useEffect, useState } from "react";
import "katex/dist/katex.min.css";

const AnalyzeAi = () => {
  const [inputData, setInputData] = useState("");
  const [analyzedData, setAnalyzedData] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  function handleAnalyzeButton() {
    setIsAnalyzing(true);
    console.log("hei there");
    setIsAnalyzing(false);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
      <div className="min-w-[400px] max-w-[600px] bg-gray-800 p-8 rounded-md shadow-md">
        <h2 className="text-3xl text-white font-bold mb-6 text-center">
          Gen-ai-chat
        </h2>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col">
          <textarea
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            className="text-lg p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 resize-none h-32 mb-6 placeholder-gray-400"
            placeholder="Enter the text to simplify..."
          />
          <button
            onClick={handleAnalyzeButton}
            className="py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200 font-semibold text-lg text-center"
          >
            Search
          </button>
        </form>
        {isAnalyzing ? (
          <div className="flex items-center justify-center mt-6">
            <svg
              className="animate-spin h-7 w-7 text-white mr-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
            <h1 className="text-lg font-semibold text-white">Analyzing...</h1>
          </div>
        ) : null}
      </div>

      {analyzedData && (
        <div className="mt-8 max-w-[600px] p-8 bg-gray-800 rounded-lg text-white">
          <h1 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Analysis Result
          </h1>
          <p>{analyzedData}</p>
        </div>
      )}
    </div>
  );
};

export default AnalyzeAi;
