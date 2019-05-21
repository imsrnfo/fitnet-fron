import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Landing from './components/landing/Landing'
import Login from './components/login/Login'
import Dashboard from './components/dashboard/Dashboard'
import NotFound from './components/error404/NotFound'

function App() {
  return (
      <Router>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route component={NotFound} />
            </Switch>
      </Router>
  );
}

export default App;
