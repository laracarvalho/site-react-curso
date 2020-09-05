import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter';
import CheckAccount from './components/CheckAccount';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HelloWorld} />
        <Route path="/counter" component={Counter} />
        <Route path="/account" component={CheckAccount} />     
      </Switch>
    </BrowserRouter>
  );
}

export default App;