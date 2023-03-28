import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quitMenuOpen: false
};

const gameModalSlice = createSlice({
  name: 'modalMenu',
  initialState,
  reducers: {
    closeQuitMenu: (state) => {
      state.quitMenuOpen = false
    },
    openQuitMenu: (state) => {
      state.quitMenuOpen = true
    }
  }
}) 

export const { closeQuitMenu, openQuitMenu } = gameModalSlice.actions;
export default gameModalSlice.reducer