import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h1>Login section</h1>
            <span>go to reg<Link to="/register">creater a account </Link></span>
        </div>
    );
};

export default Login;