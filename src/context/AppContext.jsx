import { createContext, useEffect, useReducer } from "react";
import { reducer } from "./AppReducer";
import english from "../data/en-example.data.json";
import espanish from "../data/es-example.data.json";

export const AppContext = createContext();

export const AppState = ({ children }) => {
  const initialState = { isLoading: false, app: [], translation: english };
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateTranslation = (translation) => {
    dispatch({ type: "UPDATE_TRANSLATION", payload: translation });
  };
  const updateLocale = (locale) => {
    if (locale === "english" || locale === "ingles") {
      updateTranslation(english);
    }
    if (locale === "espanol" || locale === "spanish") {
      updateTranslation(espanish);
    }
  };
  return (
    <AppContext.Provider
      value={{
        app: state.app,
        isLoading: state.isLoading,
        // locale: state.locale,
        translation: state.translation,
        updateLocale,
      }}>
      {children}
    </AppContext.Provider>
  );
};
