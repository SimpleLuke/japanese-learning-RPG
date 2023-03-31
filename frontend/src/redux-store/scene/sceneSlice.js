import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "reduxjs-toolkit-persist";

const initialState = {
  currentScene: "START_MENU",
};

const sceneSlice = createSlice({
  name: "scene",
  initialState,
  reducers: {
    resetScene: () => initialState,
    setCurrentScene: (state, action) => {
      const sceneName = action.payload;
      state.currentScene = sceneName;
    },
    extraReducers: (builder) => {
      builder.addCase(PURGE, (state) => {
        return { ...initialState };
      });
    },
  },
});

export const { setCurrentScene, resetScene } = sceneSlice.actions;
export default sceneSlice.reducer;
