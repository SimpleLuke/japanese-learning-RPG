import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentScore: 0,
  currentQuestion: 0,
  userAnswer: null,
  showAnswer: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    resetGame: () => initialState,
    setCurrentScore: (state, action) => {
      const newScore = action.payload;
      state.currentScore = newScore;
    },
    addCurrentScore: (state) => {
      state.currentScore = state.currentScore + 1;
    },
    setCurrentQuestion: (state, action) => {
      state.currentQuestion = action.payload;
    },
    setUserAnswer: (state, action) => {
      state.userAnswer = action.payload;
    },
    setShowAnswer: (state, action) => {
      state.showAnswer = action.payload;
    },
  },
});

export const {
  setCurrentScore,
  setCurrentQuestion,
  addCurrentScore,
  setUserAnswer,
  setShowAnswer,
  resetGame,
} = gameSlice.actions;
export default gameSlice.reducer;
