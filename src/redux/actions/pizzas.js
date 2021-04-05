import axios from 'axios';

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoading());
  axios
    .get(
      `http://localhost:3001/pizzas?${category !== 0 ? `category=${category}` : ''}&_sort=${
        sortBy === 'alphabet' ? 'name' : sortBy
      }&order=asc`,
    )
    .then(({ data }) => dispatch(setPizzas(data)));
};

const setLoading = () => ({
  type: 'SET_LOADING',
});

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
