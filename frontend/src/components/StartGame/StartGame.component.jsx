import React from "react";
import { useDispatch } from "react-redux";
import  {random_ten_questions,all_questions} from "./questions";
import { setCurrentScene } from "../../redux-store/scene/sceneSlice";
import {
  setHasGameStarted,
  setSelectedWords,
} from "../../redux-store/game/gameSlice";

const StartGame = () => {
  const dispatch = useDispatch()
  
  const handleBedroom = () => {
    dispatch(setHasGameStarted(true))
    const newSet = random_ten_questions(all_questions)
    console.log(newSet)
    dispatch(setSelectedWords(newSet))
    dispatch(setCurrentScene("MAIN_GAME"))
  }

  return (
    <div className="absolute inset-0 bg-black flex justify-center items-center">
      <div className="menu-container bg-red-600 w-2/3 mx-auto my-16 px-8 py-10 rounded-lg shadow-lg">
        <div className="title-section relative">
          <div className="title-count font-bold text-3xl text-center text-yellow-400 mb-6">
            ゲームへようこそ！- Welcome to the Game!
          </div>
          <div className="title-text font-bold text-6xl text-center text-white mb-12">
            スタートする？- Are you ready to play?
          </div>
        </div>
        <div className="option-section grid grid-cols-1 gap-8">
          <button
            data-test = "start-game"
            onClick={() => handleBedroom()}
            // onClick={() => handleStartGameClick()}
            className="bg-yellow-400 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-yellow-500 transition-colors duration-200"
          >
            スタート - Start Game
          </button>
          <button
            data-test = "back-to-bedroom"
            onClick={() => dispatch(setCurrentScene("BEDROOM"))}
            // onClick={() => handleBackToBedroomClick()}
            className="bg-yellow-400 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-yellow-500 transition-colors duration-200"
          >
            ベッドルームに戻る - Back To Bedroom
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartGame;
