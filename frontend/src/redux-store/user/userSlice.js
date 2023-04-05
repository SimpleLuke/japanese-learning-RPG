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

    inventory: ["vest", "tshirt-green-flower", "tshirt-gray"],

    currentOutfit: {
      body: "",
      hair: "",
      top: "",
      bottoms: "",
      shoes: "",
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

    setStartOutfit: (state, action) => {
      const { body, hair, top, bottoms, shoes } = action.payload;
      state.character.currentOutfit.body = body;
      state.character.currentOutfit.hair = hair;
      state.character.currentOutfit.top = top;
      state.character.currentOutfit.bottoms = bottoms;
      state.character.currentOutfit.shoes = shoes;
    },
    updateUserInfo: (state, action) => {
      const { wordsLearnt, character } = action.payload;
      state.wordsLearnt = wordsLearnt;
      state.character = character;
    },
    addItem: (state, action) => {
      const item = action.payload;
      state.character.inventory.push(item);
    },
    spendCoins: (state, action) => {
      const cost = action.payload;
      state.character.attributes.coins -= cost;
    },
    changeOutfit: (state, action) => {
      const { top } = action.payload;
      state.character.currentOutfit.top = top;
    },
    extraReducers: (builder) => {
      builder.addCase(PURGE, (state) => {
        return { ...initialState };
      });
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
  setStartOutfit,
  addItem,
  spendCoins,
  changeOutfit,
} = userSlice.actions;
export default userSlice.reducer;
