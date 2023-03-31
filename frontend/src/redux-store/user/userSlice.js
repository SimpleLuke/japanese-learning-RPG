import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "reduxjs-toolkit-persist";
const initialState = {
  email: "",
  wordsLearnt: [],
  character: {
    attributes: {
      xp: 0,
      level: 1,
      wordsKnown: 0,
      coins: 0,
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
    resetUser: () => initialState,
    setCurrentUser: (state, action) => {
      const email = action.payload;
      state.email = email;
    },
    updateUserInfo: (state, action) => {
      const { wordsLearnt, character } = action.payload;
      state.wordsLearnt = wordsLearnt;
      state.character = character;
    },
    extraReducers: (builder) => {
      builder.addCase(PURGE, (state) => {
        return { ...initialState };
      });
    },
    addXP: (state, action) => {
      state.character.attributes.xp += action.payload;
    },
    setLevel: (state, action) => {
      state.character.attributes.level = action.payload;
    },
    addWordsLearnt: (state, action) => {
      const wordList = action.payload;
      state.wordsLearnt = state.wordsLearnt.concat(wordList);
    },
    addCoins: (state, action) => {
      state.character.attributes.coins += action.payload;
    },
    setWordsKnown: (state) => {
      state.character.attributes.wordsKnown = state.wordsLearnt.length;
    },
  },
});

export const {
  setCurrentUser,
  updateUserInfo,
  resetUser,
  addWordsLearnt,
  setWordsKnown,
  addXP,
  setLevel,
  addCoins,
} = userSlice.actions;
export default userSlice.reducer;
