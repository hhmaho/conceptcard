import { createStore } from "redux";

const initialState = {
  todo: [],
  toRedo: [],
  done: []
};

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

function reducer(state, action) {
  if (action.type === "cardOk") {
    const [topCard, ...restTodo] = state.todo;
    return {
      ...state,
      todo: restTodo,
      done: state.done.concat(topCard)
    };
  }
  if (action.type === "cardNok") {
    const [topCard, ...restTodo] = state.todo;
    return {
      ...state,
      todo: restTodo,
      toRedo: state.toRedo.concat(topCard)
    };
  }
  if (action.type === "shuffleDeck") {
    const [topCard, ...restTodo] = state.todo;
    return {
      todo: state.toRedo,
      toRedo: restTodo,
      done: state.done.concat(topCard)
    };
  }
  if (action.type === "loadDeck") {
    return {
      ...state,
      todo: action.payload
    };
  }

  return state;
}

const store = createStore(reducer, initialState);

export default store;
