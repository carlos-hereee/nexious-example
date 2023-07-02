import { createContext, useReducer } from "react";
import { reducer } from "./AppReducer";
import english from "../data/en-example.data.json";
import spanish from "../data/es-example.data.json";

export const AppContext = createContext();

export const AppState = ({ children }) => {
  const initialState = {
    isLoading: false,
    appName: english.appName,
    menu: english.menu,
    logo: english.logo,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateTranslation = (translation) => {
    dispatch({ type: "IS_LOADING", payload: true });
    dispatch({ type: "UPDATE_TRANSLATION", payload: translation });
    dispatch({ type: "UPDATE_MENU", payload: translation.menu });
    dispatch({ type: "UPDATE_LOGO", payload: translation.logo });
    dispatch({ type: "UPDATE_APP_NAME", payload: translation.appName });
    dispatch({ type: "IS_LOADING", payload: false });
  };
  const updateLocale = (locale) => {
    if (locale === "english" || locale === "ingles") {
      updateTranslation(spanish);
    }
    if (locale === "espanol" || locale === "spanish") {
      updateTranslation(english);
    }
    dispatch({ type: "IS_LOADING", payload: false });
  };
  return (
    <AppContext.Provider
      value={{
        isLoading: state.isLoading,
        locale: state.locale,
        translation: state.translation,
        spanish: state.spanish,
        menu: state.menu,
        logo: state.logo,
        appName: state.appName,
        updateLocale,
      }}>
      {children}
    </AppContext.Provider>
  );
};
