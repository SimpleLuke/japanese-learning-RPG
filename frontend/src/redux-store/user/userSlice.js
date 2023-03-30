import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  email: "",
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

    currentOutfit: {
      body: "",
      hair: "",
      top: "",
      bottoms: "",
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
    setStartOutfit: (state, action) => {
      const { body, hair, top, bottoms } = action.payload;
      state.character.currentOutfit.body = body;
      state.character.currentOutfit.hair = hair;
      state.character.currentOutfit.top = top;
      state.character.currentOutfit.bottoms = bottoms;
      console.log(state.character.currentOutfit.body);
    },
  },
});

export const { setCurrentUser } = userSlice.actions;
export const { setStartOutfit } = userSlice.actions;
export default userSlice.reducer;
