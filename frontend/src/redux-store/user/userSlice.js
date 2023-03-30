import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  wordsLearnt: [],
  character: {
    attributes: {
      xp: 0,
      level: 0,
      wordsKnown: 0,
    },

    inventory: [],
    equipped: {
      head: "",
      outfit: "",
      trousers: "",
    },
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      const email = action.payload;
      state.email = email;
    },
    updateUserInfo: (state, action) => {
      const { wordsLearnt, character } = action.payload;
      state.wordsLearnt = wordsLearnt;
      state.character = character;
    },
  },
});

export const { setCurrentUser, updateUserInfo } = userSlice.actions;
export default userSlice.reducer;
