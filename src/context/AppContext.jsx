import { createContext, useReducer } from "react";
import { reducer } from "./AppReducer";

export const AppContext = createContext();

export const AppState = ({ children }) => {
  const initialState = { isLoading: false, app: [] };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ app: state.app, isLoading: state.isLoading }}>
      {children}
    </AppContext.Provider>
  );
};
