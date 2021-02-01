import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { motion } from 'framer-motion';
import Home from './components/Home';
import Shop from './components/Shop';
import './styles/App.css';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
