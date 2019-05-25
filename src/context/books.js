import React, { createContext, useReducer } from "react";

export const BooksContext = createContext({
  state: {},
  dispatch: () => {}
});

const initialState = {
  read: new Set()
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return Object.assign({}, state, {
        read: new Set([...state.read, action.payload])
      });
    default:
      return state;
  }
};

export const BooksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <BooksContext.Provider value={{ state, dispatch }}>
      {children}
    </BooksContext.Provider>
  );
};

// actions

export function add(id) {
  return {
    type: "ADD",
    payload: id
  };
}
