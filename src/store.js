import { createStore } from "redux";

const initialState = {
  todo: undefined,
  toRedo: undefined,
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
  const [topCard, ...restTodo] = state.todo;
  if (action.type === "cardOk") {
    return {
      todo: restTodo,
      done: state.done.concat(topCard)
    };
  }
  if (action.type === "cardNok") {
    return {
      todo: restTodo,
      toRedo: state.toRedo.concat(topCard)
    };
  }
  if (action.type === "shuffleDeck") {
    return {
      todo: state.toRedo,
      toRedo: restTodo,
      done: state.done.concat(topCard)
    };
  }
  if (action.type === "loadDeck") {
    return {
      cards: action.payload
    };
  }

  //if
  return state;
}

const store = createStore(reducer, initialState);

export default store;
