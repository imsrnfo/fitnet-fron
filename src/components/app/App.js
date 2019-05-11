import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Landing from '../landing/Landing'
import Login from '../login/Login'
import Home from '../home/Home'

function App() {
  return (
  <Router>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
  </Router>
  );
}

export default App;
