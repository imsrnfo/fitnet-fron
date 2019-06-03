import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Landing from './views/landing/Landing'
import Login from './views/login/Login'
import Dashboard from './views/dashboard/Dashboard'
import NotFound from './views/error404/NotFound'

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
