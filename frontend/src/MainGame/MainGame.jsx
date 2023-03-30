import React, { useState } from "react";
import questions from "./questions";
import { useDispatch } from "react-redux";
import QuizParticles from "./particleParams";
import { setCurrentScene } from "../redux-store/scene/sceneSlice";
import QuitGameModal from "../components/QuitGameModal/QuitGameModal";
import { openQuitMenu } from "../redux-store/game-modal/gameModalSlice";

const MainGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const dispatch = useDispatch();

  const handleAnswerOptionClick = (answer) => {
    const isCorrect = answer === questions[currentQuestion].answer;
    setUserAnswer(answer);
    setShowAnswer(true);
    if (isCorrect) {
      setCurrentScore(currentScore + 1);
    }
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        dispatch(setCurrentScore(currentScore))
        setCurrentQuestion(0);
        setCurrentScore(0);
        // Change 'scene' state to EndGame
        dispatch(setCurrentScene("END_GAME"));
        // update slice states for user (words learnt)
      }
      setShowAnswer(false);
      setUserAnswer(null);
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

  return (
    <div className="h-screen w-screen bg-jpRoom bg-cover bg-center">
      <QuizParticles />
      <div className="z-20 relative quiz-container bg-beige-japanese-book w-11/12 mx-auto my-16 px-8 py-10 rounded-lg">
        <div className="question-section relative">

        <QuitGameModal />

          <button onClick={() => dispatch(openQuitMenu())} className="back-btn absolute top-0 left-0 p-1 text-lg">
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
