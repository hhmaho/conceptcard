import { createStore } from "redux";

const initialState = {
  todo: undefined,
  redo: undefined,
  done: undefined
};

//actions
export function cardOk() {
  return { type: "cardOk" };
}

export function cardNok() {
  return { type: "cardNok" };
}

export function shuffleDeck() {
  return { type: "shuffleDeck" };
}

export function loadDeck(cards) {
  return { type: "loadDeck", payload: cards };
}

//reducer

function reducer(state, action) {
  // console.log("state ", state);
  // console.log("action ", action);
  if (action.type === "cardOk") {
    return {};
  }
  //if
  return state;
}

const store = createStore(reducer, initialState);

export default store;
