const INITIAL_STATE = {
  items: [],
  isLoading: true,
};

const pizzasReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_PIZZAS':
      return {
        ...state,
        items: action.payload,
        isLoading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default pizzasReducer;
