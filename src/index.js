import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import store, { loadDeck } from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

store.subscribe(() => {
  console.log("new state:", store.getState());
});

store.dispatch(
  loadDeck([
    { concept: "123", definition: "bar" },
    { concept: "234", definition: "foo" },
    { concept: "345", definition: "abc" }
  ])
);
