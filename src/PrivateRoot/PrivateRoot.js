import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../hook/useAuth';

const PrivateRoot = ({children,...rest}) => {
    const{user,isLoding}=useAuth();
    if(isLoding){
       return <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    }
    return (
        <Route
            {...rest}
            render={({location}) => user.email?children: <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                  }}
            ></Redirect>
            } 
        >
        </Route>
    );
};

export default PrivateRoot;