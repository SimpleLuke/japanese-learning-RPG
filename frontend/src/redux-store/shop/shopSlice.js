import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "reduxjs-toolkit-persist";

const initialState = {
  previewOutfit: {},
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    resetScene: () => initialState,
    setPreviewOutfit: (state, action) => {
      state.previewOutfit = action.payload;
    },
    extraReducers: (builder) => {
      builder.addCase(PURGE, (state) => {
        return { ...initialState };
      });
    },
  },
});

export const { resetShop, setPreviewOutfit } = shopSlice.actions;
export default shopSlice.reducer;
