import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Dashboard from '../components/Dashboard';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute restricted={true} component={Login} path="/login" exact />
        <PublicRoute restricted={true} component={SignUp} path="/signup" exact />
        <PrivateRoute component={Dashboard} path="/" exact />
      </Switch>
    </Router>
  );
};

export default Routes;