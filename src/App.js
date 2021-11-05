import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './components/shop/ShopPage';
import Header from './components/header/Header';
import SignInSignUp from './pages/sign-in-sign-up-page/SignInSignUp'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUp} />

      </Switch>
    </div>
  );
}

export default App;
