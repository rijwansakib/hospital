import {  useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const Register = () => {
    const{createUser}=useAuth('');
    const{signInUsingGoogle}=useAuth('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    //name input handel

    //email input handel
    const handelEmail= e =>{
        setEmail(e.target.value);
    }
    //password input handel
    const handelPassword= e =>{
        setPassword(e.target.value);
    }

    //submit from handel
    const handelRegisterFrom = e =>{
        createUser(email,password);


       e.preventDefault();
        
    }

    return(
        <div className="mx-3">
            <h3 className="text-primary">Please Register</h3>

            <form onSubmit={handelRegisterFrom}>
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
                <button type="submit" className="btn btn-primary mt-4">Register</button>
                </form>

                {/* <span>{error}</span> */}

                {/* allready have a account */}
                <p className="mt-3">All ready have a account? <Link to="/login">Sign In</Link></p>
                        {/* Google signIn */}
            <div className="mt-3">
                <button onClick={signInUsingGoogle} type="submit" className="btn btn-primary">Google Login</button>
           </div>
        </div>
    );
    
};

export default Register;