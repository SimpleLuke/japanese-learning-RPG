import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  statModalOpen: false,
};

const statModalSlice = createSlice({
  name: "modalMenu",
  initialState,
  reducers: {
    closeStatModal: (state) => {
      state.statModalOpen = false;
    },
    openStatModal: (state) => {
      state.statModalOpen = true;
    },
  },
});

export const { closeStatModal, openStatModal } = statModalSlice.actions;
export default statModalSlice.reducer;
