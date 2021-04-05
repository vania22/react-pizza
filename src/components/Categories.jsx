import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCategory } from '../redux/actions/filters';

const Categories = memo(({ items }) => {
  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.filters.category);

  const onCategoryClick = (index) => {
    dispatch(setCategory(index));
  };

  return (
    <div className="categories">
      <ul>
        {items &&
          items.map((item, index) => (
            <li
              key={index}
              onClick={() => onCategoryClick(index)}
              className={index === activeCategory ? 'active' : null}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
