import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  email: "",
  wordsLearnt: [],
  character: {
    attributes: {
      xp: 0,
      level: 0,
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
    setCurrentUser: (state, action) => {
      const { _id, email } = action.payload;
      state._id = _id;
      state.email = email;
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
  addWordsLearnt,
  setWordsKnown,
  addXP,
  setLevel,
  addCoins,
} = userSlice.actions;
export default userSlice.reducer;
