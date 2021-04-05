import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Pizza from '../components/Pizza';
import PizzaLoader from '../components/PizzaLoader';

import { fetchPizzas } from '../redux/actions/pizzas';

const categories = ['Все', 'Мясные', 'Веганские', 'Гриль', 'Острые', 'Закрытые'];

const HomePage = () => {
  const dispatch = useDispatch();

  const pizzas = useSelector(({ pizzas }) => pizzas.items);
  const isLoading = useSelector(({ pizzas }) => pizzas.isLoading);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categories} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {!isLoading
          ? pizzas.map((pizza) => <Pizza key={pizza.id} pizza={pizza} />)
          : Array(4).fill(<PizzaLoader />)}
      </div>
    </div>
  );
};

export default HomePage;
