import React from 'react';
import {Route,Redirect} from 'react-router-dom'
import { isAuthenticated } from '.';

const PrivateRoute = ({ component: Component, ...rest }) =>{
    
    return (
      <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
            <Component {...props}/>
          ) : (
            <Redirect
              to={{
                pathname: "/auth/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute;