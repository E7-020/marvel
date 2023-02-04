const initialState = {
  cards: [],
  comics: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CARDS":
      return {
        ...state,
        cards: action.payload.label,
      };
    case "COMICS":
      return {
        ...state,
        comics: action.payload.label,
      };
    default:
      return state;
  }
};

export default reducer;
