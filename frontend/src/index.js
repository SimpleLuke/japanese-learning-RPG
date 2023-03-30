import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";

import { store, persistor } from "./redux-store/store.js";

import "./index.css";

import App from "./App";
import LoadingWalk from "./components/loading/Loading.component.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={<LoadingWalk />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
