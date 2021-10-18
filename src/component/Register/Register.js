import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="w-50 mt-5 mx-auto">
            <h3>Cteate You'r Account</h3>

            <form>
                <div class="form-row">
                    {/* email */}
                    <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                    </div>
                    {/* password */}
                    <div class="form-group col-md-6">
                    <label for="inputPassword4">Password</label>
                    <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
                    </div>
                    {/* re-enter password */}
                    <div class="form-group col-md-6">
                    <label for="inputPassword4">Re-Enter password </label>
                    <input type="password" class="form-control" id="inputPassword4" placeholder="Re-Enter password"/>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary mt-4">Submit</button>
                </form>

                {/* allready have a account */}
                <p className="mt-3">All ready have a account? <Link to="/login">Sign In</Link></p>
                        {/* Google signIn */}
            <div className="mt-3">
                <button type="submit" class="btn btn-primary">Google Login</button>
                <button type="submit" class="btn btn-dark mx-3">GitHub Login</button>
           </div>
        </div>
    );
};

export default Register;