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
    dispatch(setSelectedWords(newSet))
    dispatch(setCurrentScene("MAIN_GAME"))
  }

  return (
<div className="bg-pixelRoom bg-cover">
  <div className="bg-pixelRoom bg-cover absolute inset-0 bg-yellow-50 flex justify-center items-center" style={{marginTop: "-1%"}}>
    <div className="flex flex-row justify-end space-between p-[375px] items-center">
      <div className="start-container bg-center bg-cover flex flex-col justify-center items-center" style={{backgroundImage: "url('/img/ryan2.png')"}}>
        <h1 className="pixel-font font-bold text-[8px] text-center text-red-600 mb-1 m;-0.5" style={{ textShadow: "1px 1px 0px #000000, 0.7px 0.7px 0px #000000" }}>
          しゅくだいのじかん
        </h1>
        <h1 className="pixel-font font-bold text-[10px] text-center text-red-600 mb-1.5 ml-1" style={{ textShadow: "1px 1px 0px #000000, 1.5px 1.5px 0px #000000" }}>
          Homework Time!
        </h1>
      </div>
    </div>
    <div className="pixel-font option-section grid grid-cols-1 gap-8">
      <button
        data-test="start-game"
        onClick={() => handleBedroom()}
        className="bg-red-600 text-amber-100 font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-red-700 transition-colors duration-200 transform-gpu hover:scale-105"
      >
        ゲームをはじめる - Start Game
      </button>
      <button
        data-test="back-to-bedroom"
        onClick={() => dispatch(setCurrentScene("BEDROOM"))}
        className="bg-red-600 text-amber-100 font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-red-700 transition-colors duration-200 transform-gpu hover:scale-105"
      >
        ベッドルームにもどる - Back To Bedroom
      </button>
    </div>
  </div>
</div>
  );
};

export default StartGame;
