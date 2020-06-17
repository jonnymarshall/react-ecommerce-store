import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={Homepage}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
