import { createContext, useReducer } from "react";
import { reducer } from "./AppReducer";

export const AppContext = createContext();

export const AppState = ({ children }) => {
  const initialState = { isLoading: false, app: [], locale: "" };
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateLocale = (locale) => {
    dispatch({ type: "UPDATE_LOCALE", payload: locale });
  };
  return (
    <AppContext.Provider
      value={{
        app: state.app,
        isLoading: state.isLoading,
        locale: state.locale,
        updateLocale,
      }}>
      {children}
    </AppContext.Provider>
  );
};
