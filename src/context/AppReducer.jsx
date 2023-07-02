export const reducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "UPDATE_LOCALE":
      return { ...state, locale: action.payload };
    default:
      return state;
  }
};
