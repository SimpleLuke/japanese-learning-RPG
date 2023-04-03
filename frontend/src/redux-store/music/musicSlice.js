import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: true,
};

const musicSlice = createSlice({
  name: "musicPlayer",
  initialState,
  reducers: {
    toggleOn: (state) => {
      state.toggle = true;
    },
    toggleOff: (state) => {
      state.toggle = false;
    },
  },
});

export const { toggleOn, toggleOff } = musicSlice.actions;
export default musicSlice.reducer;
