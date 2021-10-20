import React, { useState } from 'react';
import { Link,useLocation,useHistory} from 'react-router-dom';
import useAuth from '../../hook/useAuth';

export const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const {userSignIN}=useAuth();
    const{signInUsingGoogle}=useAuth('');
    const location=useLocation();
    const redirect_uri=location.state?.from || '/';
    const history=useHistory()

    const handelSignInUsingGoogle=()=>{
        console.log(redirect_uri);
        signInUsingGoogle()
        .then(result=>{
            history.push(redirect_uri);

        })

    }

    //email input handel
    const handelEmail= e =>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    //password input handel
    const handelPassword= e =>{
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    const handelLoginFrom=(e)=>{
        e.preventDefault();
        console.log(email,password);
        userSignIN(email,password)
        .then(result => {
            // Signed in 
            history.push(redirect_uri);
            

        })
    }

  
    return (
        <div className="mx-3">
            <h3 className="text-primary">Login</h3>
            <form onSubmit={handelLoginFrom}>
                <div className="form-row">
                {/* email */}
                    <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Email</label>
                    <input required onBlur={handelEmail} type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                {/* password */}
                    <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Password</label>
                    <input required onBlur={handelPassword} type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-4">Sign In</button>
                </form>

                {/* <span>{error}</span> */}

                {/* allready have a account */}
                <p className="mt-3">Create a new  account? <Link to="/Register">Create a Account</Link></p>
                        {/* Google signIn */}
            <div className="mt-3">
                <button onClick={handelSignInUsingGoogle} type="submit" className="btn btn-primary">Google Login</button>
           </div>


        </div>
    );
};

export default Login;


// .then(result => {
//     // Signed in 
//     const user = result.user;
//     setUser(user);
    

// })