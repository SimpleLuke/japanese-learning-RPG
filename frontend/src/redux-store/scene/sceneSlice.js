import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentScene: "MAIN_GAME",
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
