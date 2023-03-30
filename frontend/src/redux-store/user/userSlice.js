import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  email: "",
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
    addWordsKnown: (state, action) => {
      state.character.attributes.wordsKnown += action.payload;
    },
    addCoins: (state, action) => {
      state.character.attributes.coins += action.payload;
    },
  },
});

export const { setCurrentUser, addXP, setLevel, addWordsKnown, addCoins } =
  userSlice.actions;
export default userSlice.reducer;
