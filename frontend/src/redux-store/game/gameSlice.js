import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentScore: 0,
  currentQuestion: 0,
  userAnswer: null,
  showAnswer: false,
  wordsStudied: [],
  hasGameStarted: false,
  selectedWords: [],
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
    addWordsStudied: (state, action) => {
      state.wordsStudied.push(action.payload);
    },
    setWordsStudied: (state, action) => {
      state.wordsStudied = action.payload;
    },
    setHasGameStarted: (state, action) => {
      state.hasGameStarted = action.payload;
    },
    setSelectedWords: (state, action) => {
      state.selectedWords = action.payload;
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
  addWordsStudied,
  setWordsStudied,
  setHasGameStarted,
  setSelectedWords,
} = gameSlice.actions;
export default gameSlice.reducer;
