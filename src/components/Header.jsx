import React from 'react';
import { Route } from 'react-router-dom';

import PizzaLogo from '../assets/img/pizza-logo.svg';

import Button from './Button';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img width="38" src={PizzaLogo} alt="Pizza logo" />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div className="header__cart">
          <Route exact path="/" component={Button} />
        </div>
      </div>
    </div>
  );
};

export default Header;
