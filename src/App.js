import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
