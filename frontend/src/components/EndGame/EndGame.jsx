import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentScene } from "../../redux-store/scene/sceneSlice";
import { coinCalculator, calculateLevel } from "../../utils/userStatsHelpers";

const EndGame = ({ finalScore }) => {
  const { currentScore } = useSelector((state) => state.game);
  const { wordsStudied } = useSelector((state) => state.game);
  console.log("words studied: ", wordsStudied)

  // const [currentScore, setCurrentScore] = useState(finalScore);
  const dispatch = useDispatch();
 

  return (
    <div className="absolute inset-0 bg-black flex justify-center items-center">
      <div className="quiz-container bg-gray-900 w-4/5 mx-auto my-16 px-8 py-10 rounded-lg shadow-lg">
        <div className="question-section relative">
          <div
            data-test="score"
            className="question-text font-bold text-5xl text-center mt-8 mb-12 text-white"
          >
            Score: {currentScore}/10
          </div>
          <div
            data-test="coins"
            className="question-text font-bold text-5xl text-center mt-8 mb-12 text-white"
          >
            Coins: {coinCalculator(currentScore)}
          </div>
          <div
            data-test="words-studied"
            className="question-text font-bold text-5xl text-center mt-8 mb-12 text-white"
          >
            words studied: {wordsStudied}
          </div>
        </div>
        <div className="answer-section grid grid-cols-2 gap-8">
          <button
            onClick={() => dispatch(setCurrentScene("START_GAME"))}
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-300 ease-in-out"
          >
            Try Again
          </button>
          <button
            onClick={() => dispatch(setCurrentScene("BEDROOM"))}
            className="bg-red-500 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition duration-300 ease-in-out"
          >
            Back To Bedroom
          </button>
        </div>
        <div className="score-section font-semibold text-2xl text-white text-center mt-12">
          Press 'Try Again' to restart the game or 'Quit Game' to go back to
          your bedroom.
        </div>
      </div>
    </div>
  );
};

export default EndGame;
