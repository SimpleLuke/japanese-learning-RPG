import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "reduxjs-toolkit-persist";

const initialState = {
  previewOutfit: {},
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    resetShop: () => initialState,
    setPreviewOutfit: (state, action) => {
      state.previewOutfit = action.payload;
    },
    updatePreviewOutfit: (state, action) => {
      const { top } = action.payload;
      state.previewOutfit.top = top;
    },
    extraReducers: (builder) => {
      builder.addCase(PURGE, (state) => {
        return { ...initialState };
      });
    },
  },
});

export const { resetShop, setPreviewOutfit, updatePreviewOutfit } =
  shopSlice.actions;
export default shopSlice.reducer;
