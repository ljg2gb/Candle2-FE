import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.sass';

import Home from './pages/Home'
import NewBirthdayForm from './pages/NewBirthdayForm'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/newBirthday" exact component={NewBirthdayForm} />
      </Switch>
    </Router>
  );
}

export default App;
