import React, { useEffect } from "react";
import questions from "./questions";
import { useDispatch, useSelector } from "react-redux";
import QuizParticles from "./particleParams";
import { setCurrentScene } from "../../redux-store/scene/sceneSlice";
import QuitGameModal from "../QuitGameModal/QuitGameModal";
import { openQuitMenu } from "../../redux-store/game-modal/gameModalSlice";
import {
  setCurrentScore,
  setCurrentQuestion,
  addCurrentScore,
  setUserAnswer,
  setShowAnswer,
} from "../../redux-store/game/gameSlice";

const MainGame = () => {
  const { currentScore, currentQuestion, userAnswer, showAnswer } = useSelector(
    (state) => state.game
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentScore(0));
    dispatch(setCurrentQuestion(0));
  }, []);

  const handleAnswerOptionClick = (answer) => {
    const isCorrect = answer === questions[currentQuestion].answer;
    dispatch(setUserAnswer(answer));
    dispatch(setShowAnswer(true));
    if (isCorrect) {
      dispatch(addCurrentScore());
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        dispatch(setCurrentQuestion(nextQuestion));
      } else {
        dispatch(setCurrentScene("END_GAME"));
      }
      dispatch(setShowAnswer(false));
      dispatch(setUserAnswer(null));
    }, 750);
  };

  const getButtonClassNames = (answer) => {
    if (showAnswer) {
      const isCorrect = answer === questions[currentQuestion].answer;
      return `answer-btn font-bold py-4 px-8 rounded-lg flex justify-center items-center text-xl ${
        isCorrect
          ? "bg-green-500 text-white"
          : answer === userAnswer
          ? "bg-red-500 text-white"
          : "bg-red-400"
      }`;
    }
    return "answer-btn bg-red-400 hover:bg-red-500 text-white font-bold py-4 px-8 rounded-lg flex justify-center items-center text-xl";
  };

  // Game design
  // new word = 100 XP
  // old word = 10 XP
  // 70% = 70
  // 80% = 80
  // 90% = 100
  // 100% = 200

  // Levels
  // 1.5x scale
  // level2 1000xp etc

  return (
    <div className="h-screen w-screen bg-jpRoom bg-cover bg-center">
      <QuizParticles />
      <div className="z-20 relative quiz-container bg-beige-japanese-book w-11/12 mx-auto my-16 px-8 py-10 rounded-lg">
        <div className="question-section relative">
          <QuitGameModal />

          <button
            onClick={() => dispatch(openQuitMenu())}
            className="back-btn absolute top-0 left-0 p-1 text-lg"
          >
            <img
              src="/img/back-button-icon.png"
              alt="Back Button"
              className="h-9 w-9"
            />
          </button>
          <div className="question-count font-semibold text-2xl text-center">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text font-bold text-4xl text-center mt-8 mb-12">
            {questions[currentQuestion].japanese}
          </div>
        </div>
        <div className="answer-section grid grid-cols-2 gap-8">
          {questions[currentQuestion].options.map((answerOption, index) => (
            <button
              key={index}
              className={getButtonClassNames(answerOption)}
              onClick={() => handleAnswerOptionClick(answerOption)}
            >
              {answerOption}
            </button>
          ))}
        </div>
        <div className="score-section font-semibold text-2xl text-center mt-12">
          Score: {currentScore}
        </div>
      </div>
    </div>
  );
};

export default MainGame;
