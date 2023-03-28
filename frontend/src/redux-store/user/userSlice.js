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
  },
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
