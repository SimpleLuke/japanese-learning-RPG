import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentScore: 0,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setCurrentScore: (state, action) => {
      const newScore = action.payload;
      state.currentScore = newScore;
    },
  },
});

export const { setCurrentScore } = gameSlice.actions;
export default gameSlice.reducer;
