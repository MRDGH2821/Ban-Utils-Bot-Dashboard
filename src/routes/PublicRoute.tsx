import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface PublicRouteProps {
  component: React.FC;
  restricted: boolean;
  path: string;
  exact: boolean;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ component: Component, restricted, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        currentUser && restricted ? <Redirect to="/dashboard" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;