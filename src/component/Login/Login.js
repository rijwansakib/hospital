import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="w-25 mx-auto mt-5">
           <div>
                <form>
                    <div class="form-group">
                            <label for="inputEmail">Email</label>
                            <input type="email" class="form-control" id="inputEmail" placeholder="Email"/>
                    </div>
                    <div class="form-group">
                            <label for="inputPassword">Password</label>
                            <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
                    </div>
                    <div class="form-group">
                            <label class="form-check-label">
                            <input type="checkbox"/> Remember me</label>
                    </div>
                    <button type="submit" class="btn btn-info">Login</button>
                </form>
           </div>

        {/* create new account link*/}

           <p className="mt-3">new to XYZ general hospital? <Link to="/register">Create Account</Link></p>

        {/* Google signIn */}
            <div className="mt-3">
                <button type="submit" class="btn btn-primary"  >Google Login</button>
                <button type="submit" class="btn btn-dark mx-3">GitHub Login</button>
           </div>

        </div>
    );
};

export default Login;