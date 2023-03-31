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
    extraReducers: (builder) => {
      builder.addCase(PURGE, (state) => {
        return { ...initialState };
      });
    },
  },
});


export const { setCurrentUser, updateUserInfo, resetUser, setStartOutfit } = userSlice.actions;
export default userSlice.reducer;
