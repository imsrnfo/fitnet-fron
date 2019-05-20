import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Landing from './components/landing/Landing'
import Login from './components/login/Login'
import Dashboard from './components/dashboard/Dashboard'

function App() {
  return (
  <Router>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
  </Router>
  );
}

export default App;
