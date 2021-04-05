import React, { useState } from 'react';
import classnames from 'classnames';

import { addPizza } from '../redux/actions/cart';
import { useDispatch, useSelector } from 'react-redux';

const Pizza = ({ pizza }) => {
  const types = ['тонкое', 'традиционное'];
  const sizes = [26, 30, 40];

  const dispatch = useDispatch();

  const [activeType, setActiveType] = useState(pizza.types[0]);
  const [activeSize, setActiveSize] = useState(pizza.sizes[0]);

  const pizzasInCart = useSelector((state) =>
    state.cart.pizzas
      .filter((item) => item.id === pizza.id)
      .map((item) => item.count)
      .reduce((sum, current) => sum + current, 0),
  );

  const onTypeClick = (type) => {
    setActiveType(type);
  };

  const onSizeClick = (size) => {
    setActiveSize(size);
  };

  const onAddButtonClick = () => {
    dispatch(addPizza({ ...pizza, types: activeType, sizes: activeSize }));
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={pizza.imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{pizza.name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((type, index) => (
            <li
              key={type}
              className={classnames({
                disabled: !pizza.types.includes(index),
                active: index === activeType,
              })}
              onClick={() => onTypeClick(index)}>
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size) => (
            <li
              key={size}
              className={classnames({
                active: size === activeSize,
                disabled: !pizza.sizes.includes(size),
              })}
              onClick={() => onSizeClick(size)}>
              {size} см
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{pizza.price} $</div>
        <div className="button button--outline button--add" onClick={onAddButtonClick}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>{pizzasInCart}</i>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
