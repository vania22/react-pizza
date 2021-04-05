import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';

const App = () => {
  return (
    <div className="wrapper">
      <Route path="/" component={Header} />
      <div className="content">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/cart" component={CartPage} />
      </div>
    </div>
  );
};

export default App;
