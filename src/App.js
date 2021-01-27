import React from 'react';
import './App.css';
import Menu from './Menu';
import Country from './Country';
import { Route, Switch } from 'react-router';
import City from './City';

const App = () => {
  return (
    <div className="container">
      <Menu />
      <Switch>
        <Route path="/country" component={Country} />
        <Route path="/city" component={City} />
      </Switch>
    </div>
  );
};

export default App;
