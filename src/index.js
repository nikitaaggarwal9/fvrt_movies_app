import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
// import { createStore } from "redux";  // deprecated
import { configureStore } from "@reduxjs/toolkit";
import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";

// function logger(obj, next, action)
// logger(obj)(next)(action)
// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       // middleware code
//       console.log("ACTION TYPE:", action.type);
//       next(action);
//     };
//   };
// };

const logger = ({dispatch, getState}) => (next) => (action) => {
  // middleware code

  if(typeof action !== 'function')
    console.log('ACTION TYPE:', action.type);
  
  next(action);
}

// const thunk = ({dispatch, getState}) => (next) => (action) => {
//   // middleware code
//   if(typeof action === 'function') {
//     action(dispatch);
//     return;
//   }
//   next(action);
// }

// const store = createStore();  // deprecated
const store = configureStore({ middleware: [logger, thunk], reducer: rootReducer });

// console.log("Before: ", store.getState());
// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ name: "Superman" }],
// });
// console.log("After: ", store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
