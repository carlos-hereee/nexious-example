export const reducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "UPDATE_LOCALE":
      return { ...state, locale: action.payload };
    case "UPDATE_TRANSLATION":
      return { ...state, translation: action.payload };
    case "UPDATE_MENU":
      return { ...state, menu: action.payload };
    case "UPDATE_LOGO":
      return { ...state, logo: action.payload };
    case "UPDATE_APP_NAME":
      return { ...state, appName: action.payload };
    default:
      return state;
  }
};
