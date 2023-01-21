import React from "react";
import ReactDOM from "react-dom/client";
// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import "./index.css";
import App from "./components/App";
import movies from "./reducers";

// const store = createStore();
const store = configureStore({ reducer: movies });
// console.log("Before: ", store.getState());
// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ name: "Superman" }],
// });
// console.log("After: ", store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);
