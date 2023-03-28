import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentScene: "START_MENU",
};

const sceneSlice = createSlice({
  name: "scene",
  initialState,
  reducers: {
    setCurrentScene: (state, action) => {
      const sceneName = action.payload;
      state.currentScene = sceneName;
    },
  },
});

export const { setCurrentScene } = sceneSlice.actions;
export default sceneSlice.reducer;
