import React from 'react';
import './App.css';
import Header from './components/Header.js';
import AppProducts from './components/AddProducts.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login page</h1>
          </Route>
          <Route path="/AddProducts">
            <Header />
            <AppProducts/>
          </Route>
          <Route path="/">
            <Header />
            <Home/>
          </Route>
          

        </Switch>
      </div>
    </Router>

  );
}

export default App;
