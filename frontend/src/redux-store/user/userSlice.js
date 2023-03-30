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
  },
});

export const { setCurrentUser, updateUserInfo, resetUser } = userSlice.actions;
export default userSlice.reducer;
