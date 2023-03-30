import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage";
import autoMergeLevel1 from "reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1";

import gameModalReducer from "./game-modal/gameModalSlice";
import sceneReducer from "./scene/sceneSlice";
import gameReducer from "./game/gameSlice";
import userReducer from "./user/userSlice";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel1,
};

const reducers = combineReducers({
  modalMenu: gameModalReducer,
  scene: sceneReducer,
  game: gameReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

//For logout function to clear localStorage state
export const clearPersistedData = () => {
  persistor.purge();
};
