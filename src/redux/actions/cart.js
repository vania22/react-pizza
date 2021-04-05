export const addPizza = (pizza) => ({
  type: 'ADD_PIZZA',
  payload: pizza,
});

export const removePizza = (pizza) => ({
  type: 'REMOVE_PIZZA',
  payload: pizza,
});
