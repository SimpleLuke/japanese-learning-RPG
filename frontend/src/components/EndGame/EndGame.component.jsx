import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentScene } from "../../redux-store/scene/sceneSlice";
import {
  coinCalculator,
  calculateLevel,
  calculateXP,
} from "../../utils/userStatsHelpers";
import { newWords } from "../../utils/wordsLearntHelpers";
import {
  addXP,
  setLevel,
  addWordsLearnt,
  addCoins,
  setWordsKnown,
} from "../../redux-store/user/userSlice";
import { useEffect, useState } from "react";

const EndGame = () => {
  const { currentScore, wordsStudied } = useSelector((state) => state.game);
  const { xp } = useSelector((state) => state.user.character.attributes);
  const { wordsLearnt, email, character } = useSelector((state) => state.user);
  const [newVarWords, setnewVarWords] = useState(
    newWords(wordsLearnt, wordsStudied)
  );
  const [resultDone, setResultDone] = useState(false);

  const dispatch = useDispatch();

  const setResult = () => {
    dispatch(addXP(calculateXP(wordsStudied)));
    dispatch(setLevel(calculateLevel(xp)));
    dispatch(addCoins(coinCalculator(currentScore)));
    dispatch(addWordsLearnt(newWords(wordsLearnt, wordsStudied)));
    dispatch(setWordsKnown());
    setResultDone(true);
  };

  const storeResult = async () => {
    const response = await fetch("http://localhost:8000/game/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        wordsLearnt: wordsLearnt,
        character: character,
      }),
    });
    if (response.status === 201) {
      const data = await response.json();
      console.log("Game update", data.message);
    } else {
      console.log("OPPS");
    }
  };

  useEffect(() => {
    setResult();
  }, []);

  useEffect(() => {
    if (resultDone === true) {
      storeResult();
    }
  }, [resultDone]);

  return (
    <div className="absolute inset-0 bg-black flex justify-center items-center full-screen">
      <div className="quiz-container h-screen bg-gray-900 w-4/5 mx-auto my-16 px-8 py-10 rounded-lg shadow-lg">
        <div className="question-section relative">
          <div
            className="question-text font-bold text-5xl text-center mt-8 mb-12 text-white"
            data-test="score"
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
            {newVarWords.length === 0 ? (
              <div>No new words learnt</div>
            ) : (
              <div className="flex flex-col">
                <div className="mb-5">New Words:</div>
                <div className="flex gap-8 flex-wrap">
                  {newVarWords.map((word) => {
                    return (
                      <div key={word} className="p-1">
                        <span>{word}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          <div
            data-test="XP"
            className="question-text font-bold text-3xl text-center mt-8 mb-12 text-white"
          >
            XP earned: {calculateXP(wordsStudied)}
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
        <div
          className="score-section font-semibold text-2xl text-white text-center mt-12"
          data-test="endGameInstructions"
        >
          Press 'Try Again' to restart the game or 'Quit Game' to go back to
          your bedroom.
        </div>
      </div>
    </div>
  );
};

export default EndGame;
