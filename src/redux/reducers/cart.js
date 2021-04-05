const INITIAL_STATE = {
  pizzas: [],
  totalPrice: 0,
  totalPizzas: 0,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_PIZZA':
      if (
        state.pizzas.find(
          (pizza) =>
            pizza.id === action.payload.id &&
            pizza.sizes === action.payload.sizes &&
            pizza.types === action.payload.types,
        )
      ) {
        return {
          ...state,
          pizzas: state.pizzas.map((pizza) =>
            pizza.id === action.payload.id ? { ...pizza, count: pizza.count + 1 } : pizza,
          ),
          totalPrice: state.totalPrice + action.payload.price,
          totalPizzas: ++state.totalPizzas,
        };
      } else {
        return {
          pizzas: [...state.pizzas, { ...action.payload, count: 1 }],
          totalPrice: state.totalPrice + action.payload.price,
          totalPizzas: ++state.totalPizzas,
        };
      }
    case 'REMOVE_PIZZA':
      return {
        ...state,
        totalPizzas: --state.totalPizzas,
        totalPrice: state.totalPrice - action.payload.price,
        pizzas: state.pizzas.flatMap((pizza) => {
          if (
            pizza.id === action.payload.id &&
            pizza.types === action.payload.types &&
            pizza.sizes === action.payload.sizes
          ) {
            if (pizza.count === 1) {
              return [];
            } else if (pizza.count > 1) {
              return { ...pizza, count: pizza.count - 1 };
            }
          } else {
            return pizza;
          }
        }),
      };
    default:
      return state;
  }
};

export default cartReducer;
