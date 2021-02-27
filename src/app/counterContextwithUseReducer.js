import React, { useReducer, useContext, createContext } from "react";

const LoadingStateContext = createContext();
const LoadingDispatchContext = createContext();

const initialState = {
  count: 0
};

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

function Provider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });

  const actions = { increment, decrement };

  return (
    <LoadingStateContext.Provider value={state}>
      <LoadingDispatchContext.Provider value={actions}>
        {children}
      </LoadingDispatchContext.Provider>
    </LoadingStateContext.Provider>
  );
}

function useLoadingState() {
  const context = useContext(LoadingStateContext);
  if (context === undefined)
    throw Error('"useErrorState" should be used under "ErrorProvider"!');

  return context;
}

function useLoadingActions() {
  const context = useContext(LoadingDispatchContext);
  if (context === undefined)
    throw Error(
      '"useErrorActions" should be used under "ErrorDispatchContext"!'
    );

  return context;
}

export { Provider, useLoadingState, useLoadingActions };
